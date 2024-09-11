import { API_TEST_GET, BACKEND_URL } from "@/_constants";

/**
 * Test to see if we can access the backend API.
 *
 * @returns {Promise<string>} A promise that resolves to the response data.
 * @throws {Error} If the request to the API fails.
 */
export default async function apiTest(): Promise<string> {
  try {
    // Make a request to the backend API
    const res = await fetch(BACKEND_URL + API_TEST_GET);

    // Check if the response status is ok (HTTP status 200-299)
    if (!res.ok) {
      // If not ok, throw an error to handle it in the calling code
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    // Extract the response data as text
    const data = await res.text();

    // Return the response data
    return data;
  } catch (error) {
    // Catch any errors that occur during the fetch or processing of the response
    console.error("An error occurred during API request:", error);
    // Re-throw the error to propagate it to the calling code
    throw error;
  }
}