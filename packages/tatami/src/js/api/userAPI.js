import HTTPClient from './HTTPClient';
import Session from '../stores/session';

const DOMAIN = 'http://isend.developxp.com/app';
const http = HTTPClient(DOMAIN, Session);

const MESSAGES = {
  400: 'Los datos enviados no son correctos',
  401: 'Usuario/Contraseña no encontrado.\r\n Por favor identifiquese de nuevo..',
  403: 'Su sesión a caducado.\r\n Por favor identifiquese de nuevo..',
  404: 'Recurso no encontrado.',
  500: 'Error grave de sistema',
}

const errorHandler = (onError) => {
  return (response) => {
    const e = {
      status: response.status,
      message: MESSAGES[response.status],
    }
    onError(e);
  }
}

const UserAPI = {

  authenticate(login, password, onSuccess, onError) {
    const AUTHENTICATION = '/authenticate';
    const body = JSON.stringify({ login, password });
    http.POST(AUTHENTICATION, body, onSuccess, errorHandler(onError));
  },

  me(onSuccess, onError) {
    const ME = '/api/me';
    http.GET(ME, onSuccess, errorHandler(onError));
  }

}

export default UserAPI;
