
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { updateReleased } from "./lib/actions/update-released";

export const qollabiAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'Please use **test-key** as value for API Key',
});

export const qollabi = createPiece({
  displayName: "Qollabi",
  auth: qollabiAuth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: "https://cdn.activepieces.com/pieces/qollabi.png",
  authors: [],
  actions: [updateReleased],
  triggers: [],
});

