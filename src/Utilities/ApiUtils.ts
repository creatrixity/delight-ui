const { NEXT_PUBLIC_API_URL } = process.env;

type callApiArgs = {
  endpoint: string,
  method?: "GET"|"POST"|"PUT"|"DELETE",
  headers?: object
}

/**
 * Makes a parameterized API request.
 * 
 * @param {String} endpoint - Endpoint for the request.
 * @param {String} method - HTTP method for the request. "GET", "POST", "PUT", "DELETE".
 * 
 * @returns {String}
 */
export function callApi ({ endpoint, method, headers }: callApiArgs) {
  headers = headers || {};
  method = method || 'GET';

  return fetch(`${NEXT_PUBLIC_API_URL}/${endpoint}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })
}