/**
 * Session store
 * implements securityCtx methods //TODO: MIXIN
 */

const SESSION_NAME = 'TatamiSession';

const SessionStore = {

  token() {
    const item = localStorage.getItem(SESSION_NAME);
    const json = item ? JSON.parse(localStorage.getItem(SESSION_NAME)) : {};
    return json.token;
  },

  rol() {
    const item = localStorage.getItem(SESSION_NAME);
    const json = item ? JSON.parse(localStorage.getItem(SESSION_NAME)) : {};
    return json.rol;
  },

  name() {
    const item = localStorage.getItem(SESSION_NAME);
    const json = item ? JSON.parse(localStorage.getItem(SESSION_NAME)) : {};
    return json.name;
  },

  init(token, rol, name) {
    localStorage.setItem(SESSION_NAME, JSON.stringify({ token, rol, name }));
  },

  refresh(token) {
    const rol = this.rol();
    const name = this.name();
    localStorage.setItem(SESSION_NAME, JSON.stringify({ token, rol, name }));
  },

  isLoggedIn() {
    return !!localStorage.DSSession;
  },

  logout() {
    localStorage.removeItem(SESSION_NAME);
  },

}

export default SessionStore;
