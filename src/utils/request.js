import { destroyUser } from "./localStorage";
import history from "./history";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Parses the BLOB returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseBlob(response) {
  return response.blob();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status <= 300) {
    return response;
  } else if (response.status === 401) {
    destroyUser();
    history.push("/login");
  } else if (response.status === 403) {
    history.push("/");
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  } else if (response.status >= 500 && response.status <= 600) {
    destroyUser();
    history.push("/error");
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  return fetch(url, options).then(checkStatus).then(parseJSON);
}

export function requestBlob(url, options) {
  return fetch(url, options).then(checkStatus).then(parseBlob);
}
