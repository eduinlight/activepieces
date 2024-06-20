import { createAction, Property } from '@activepieces/pieces-framework';

export const updateReleased = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateReleased',
  displayName: 'Update Released',
  description: 'Update a milestone releases value',
  props: {},
  async run() {
    // Action logic here
  },
});
