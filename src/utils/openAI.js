import { CohereClient } from "cohere-ai";
import { COHERE_KEY } from "./constants";

export const cohere = new CohereClient({
  token: COHERE_KEY,
});
