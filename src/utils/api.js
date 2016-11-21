import 'whatwg-fetch';
import { stringify } from 'querystring';
import { API_EP } from 'constants/api-constants';

let params = {
  key: 'value',
  name: 'gug gu'
};

function api(url, params={}) {
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  function parseJSON (response) {
    return response.json();
  }

  function wrapper(url, { method='GET', credentials='include',
    contentType='application/json', data }) {
    let options = {
      method,
      credentials,
      'Content-Type': contentType
    };

    if (method === 'GET') {
      url += '?' + stringify(data);
    } else {
      options.body = JSON.stringify(data);
    }

    return fetch(API_EP + url, options)
      .then(checkStatus)
      .then(parseJSON);
  }

  return wrapper(url, params);
}

console.log(api('get').then(function(data) {
  console.log(data);
}));

console.log(api('get', {
  data: params
}).then(function(data) {
  console.log(data);
}));

console.log(api('post', {
  method: 'POST',
  data: params
}).then(function(data) {
  console.log(data);
}));

console.log(api('put', {
  method: 'PUT',
  data: params
}).then(function(data) {
  console.log(data);
}));

console.log(api('delete', {
  method: 'DELETE',
  data: params
}).then(function(data) {
  console.log(data);
}));
