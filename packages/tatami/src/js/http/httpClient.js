//import fetch from 'node-fetch';

/**
 * Remote and generic http client
 *
 * hardcoded headers :
 * {
 *    Accept: 'application/json',
 *    'Content-Type': 'application/json',
 *    'x-access-token': securityCtx.token,
 * }
 */
const HTTPClient = (domain, securityCtx) => {

  // TODO: validate domain
  // TODO: validate securityCtx

  return {

    DOMAIN: domain,

    GET(URL, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('GET', URL, null, handleData, onError);
    },

    POST(URL, body, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('POST', URL, body, handleData, onError);
    },

    PUT(URL, body, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('PUT', URL, body, handleData, onError);
    },

    PATCH(URL, body, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('PATCH', URL, body, handleData, onError);
    },

    DELETE(URL, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('DELETE', URL, null, handleData, onError);
    },

    call(method, URL, body, handleData, onError) {
      const token = securityCtx ? securityCtx.token() : null;
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      }
      fetch(URL, { method, mode: 'cors', headers, body })
        .then(response => {
          if (response.ok) {
            const nextToken = response.headers.get('x-access-token');
            securityCtx.refresh(nextToken);
            return response;
          } else {
            onError(response);
            return;
          }
        })
        .then(response => response.json())
        .then(handleData)
        .catch(error => {
          console.log(error)
          onError(null, error);
        });
    }
  }
};

export default HTTPClient;
