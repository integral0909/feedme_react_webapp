import 'whatwg-fetch';

const host = process.env.REACT_APP_HOST;

const parseJson = (response) => response.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.json().detail);
    error.response = response;
    console.error('Request failed:', error);
    throw error
  }
};

const buildHeaders = (token) => {
  let headers = {'Content-Type': 'application/json'};
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers
};

const buildUrl = (resource, searchParams) => {
  let searchStr = searchParams ? '?' + searchParams.toString() : '';
  return `${host}/api/${resource}/${searchStr}`
};

const get = (resource, searchParams, token) => {
  return fetch(buildUrl(resource, searchParams), {
    headers: buildHeaders(token)
  }).then(checkStatus).then(parseJson)
};

const post = (resource, data, token) => {
  return fetch(buildUrl(resource), {
    headers: buildHeaders(token),
    method: 'POST',
    body: JSON.stringify(data)
  }).then(checkStatus).then(parseJson)
};

export {get, post};
