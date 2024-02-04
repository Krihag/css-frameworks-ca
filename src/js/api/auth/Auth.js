/**
 * Represents an API authentication class.
 */
export default class Auth {
  /**
   * Create a new instance of the Auth class.
   * @param {string} method - The HTTP method for the request.
   * @param {Object} headers - The headers for the request.
   * @param {string} endpoint - The endpoint URL for the request.
   * @param {Object|null} body - The request body (optional).
   */
  constructor(method, headers, endpoint, body = null) {
    this.method = method;
    this.headers = headers;
    this.url = `"https://v2.api.noroff.dev"${endpoint}`;
    this.body = body;
  }

  /**
   * Fetches data from the specified URL using the provided method, headers, and body.
   * @returns {Promise<Response>} - The response from the fetch request.
   */
  async fetch() {
    this.body && (this.body = JSON.stringify(this.body));
    try {
      const response = await fetch(this.url, {
        headers: this.headers,
        method: this.method,
        body: this.body,
      });
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      if (!data) throw new Error("Promise returns no data.");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
