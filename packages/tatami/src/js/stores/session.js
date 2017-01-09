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

  me() {
    const item = localStorage.getItem(SESSION_NAME);
    const json = item ? JSON.parse(localStorage.getItem(SESSION_NAME)) : {};
    return json.me;
  },

  init(token, me) {
    localStorage.setItem(SESSION_NAME, JSON.stringify({ token, me }));
  },

  refresh(token) {
    const me = this.me();
    localStorage.setItem(SESSION_NAME, JSON.stringify({ token, me }));
  },

  isLoggedIn() {
    return !!localStorage.DSSession;
  },

  logout() {
    localStorage.removeItem(SESSION_NAME);
  },

}

export default SessionStore;
