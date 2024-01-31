import load from "../../storage/load.mjs";

import { API_KEY } from "../constants.mjs";

export default function authHeader() {
  const token = load("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "X-Noroff-API-Key": API_KEY,
  };
  return headers;
}
