import { createAction, Property, Validators, } from '@activepieces/pieces-framework';
import {} from '@activepieces/pieces-common';

export const updateRealised = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateRealised',
  displayName: 'Update Realised',
  description: 'Update a milestone realised value',
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
    startDate: Property.DateTime({
      displayName: 'Start Date',
      required: true,
      processors: [],
      validators: [Validators.datetimeIso]
    }),
    endDate: Property.DateTime({
      displayName: 'End Date',
      required: true,
      processors: [],
      validators: [Validators.datetimeIso]
    }),
    value: Property.Number({
      displayName: 'Value',
      required: true,
      processors: [],
      validators: [Validators.number]
    })
  },
  async run(context) {
    // const props = context.propsValue
    // const res = await httpClient.sendRequest<string[]>({
    //   method: HttpMethod.GET,
    //   url: 'https://cloud.activepieces.com/api/v1/webhooks/RGjv57ex3RAHOgs0YK6Ja/sync',
    //   headers: {
    //     Authorization: context.auth, // Pass API key in headers
    //   },
    // });
    // return res
  },
});
