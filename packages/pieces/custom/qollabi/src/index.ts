
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { updateRealised } from "./lib/actions/update-released";
import { updateTarjet } from "./lib/actions/update-tarjet";

export const qollabi = createPiece({
  displayName: "Qollabi",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.20.0',
  logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLh9Ap4Y6OjTO8oGomF7WH57jrvFZGf3VKVA&s",
  authors: [],
  actions: [updateRealised, updateTarjet],
  triggers: [],
});

