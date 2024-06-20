import { createAction, Property, Validators, } from '@activepieces/pieces-framework';
import { HttpMethod, httpClient } from '@activepieces/pieces-common';
import { getGraphQLUrl } from '../../utils';

export const updateTarjet = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateTarjet',
  displayName: 'Update Tarjet',
  description: 'Update a milestone tarjet value',
  props: {
    clientName: Property.LongText({
      displayName: 'Client Name',
      required: true,
      processors: [],
      validators: [Validators.string]
    }),
    environment: Property.StaticDropdown({
      displayName: 'Environment',
      required: true,
      processors: [],
      options: {
        options: [
          {
            label: 'Uat',
            value: 'uat'
          },
          {
            label: 'Production',
            value: 'prd'
          }
        ]
      },
      validators: [Validators.oneOf(["uat", "prd"])]
    }),
    authHeader: Property.LongText({
      displayName: 'Authentication header',
      required: true,
      processors: [],
      validators: [Validators.string]
    }),
    authToken: Property.LongText({
      displayName: 'Authentication Token',
      required: true,
      processors: [],
      validators: [Validators.string]
    }),
    filterFieldId: Property.LongText({
      displayName: 'Filter Field Id',
      required: true,
      processors: [],
      validators: [Validators.pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)]
    }),
    filterFieldValue: Property.LongText({
      displayName: 'Filter Field Value',
      required: true,
      processors: [],
      validators: [Validators.string]
    }),
    planId: Property.LongText({
      displayName: 'Plan Id',
      required: true,
      processors: [],
      validators: [Validators.pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)]
    }),
    objectiveId: Property.LongText({
      displayName: 'Objective Id',
      required: true,
      processors: [],
      validators: [Validators.pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/)]
    }),
    startDate: Property.LongText({
      displayName: 'Start Date',
      required: true,
      processors: [],
      validators: [Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]
    }),
    endDate: Property.LongText({
      displayName: 'End Date',
      required: true,
      processors: [],
      validators: [Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]
    }),
    value: Property.Number({
      displayName: 'Value',
      required: true,
      processors: [],
      validators: [Validators.number]
    })
  },
  async run(context) {
    const props = context.propsValue
    const url = getGraphQLUrl({ clientName: props.clientName, env: props.environment as "uat" | "prd" })
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.POST,
      url,
      headers: {
        "Content-Type": "application/json",
        [props.authHeader]: props.authToken
      },
      body: {
        query: `mutation smartUpdateContributingObjectiveTargetMutation(
          $accountFilters: V2AccountListFilterParams!,
          $planId: ID!,
          $objectiveId: ID!,
          $start: Date!,
          $end: Date!,
          $value: Float!
        ) {
          smartUpdateContributingObjectiveTargetMutation(
            input: {
              accountMatchingFilters: $accountFilters,
              planId: $planId,
              masterObjectiveId: $objectiveId,
              contributingObjectiveFilters: {
                startDate: $start,
                endDate: $end
              },
              value: $value
            }
          ){
            accountMatched
            contributingObjectiveMatched
            result
            error
          }
        }`,
        variables: {
          accountFilters: {
            [`field_${props.filterFieldId}`]: {
              contains: props.filterFieldValue,
            },
          },
          planId: props.planId,
          objectiveId: props.objectiveId,
          start: props.startDate,
          end: props.endDate,
          value: props.value
        }
      },
      queryParams: { a: "windows" },
    });
    return res
  },
});
