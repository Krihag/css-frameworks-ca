import { API_HOST_URL, API_SOCIAL_URL } from "../constants.mjs";

/**
 * Creates an API key.
 * @returns {string} The created API key.
 * @throws {Error} If failed to create the API key.
 */
export default async function createApiKey(token) {
  const response = await fetch(API_HOST_URL + "/auth/create-api-key", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to create API key");
  }

  const data = await response.json();
  console.log(data);
  return data.data.key;
}
