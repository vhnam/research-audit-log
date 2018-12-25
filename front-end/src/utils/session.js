export const getSession = () => {
  const session = window.localStorage.getItem('session');

  if (!session) return {};

  return JSON.stringify(session);
};

export const setSession = user => {
  window.localStorage.setItem('session', JSON.stringify(user));
};
