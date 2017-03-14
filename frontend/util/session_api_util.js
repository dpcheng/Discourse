export const signup = data => (
  $.ajax({
    url: 'api/users',
    type: 'POST',
    data
  })
);

export const login = data => (
  $.ajax({
    url: 'api/session',
    type: 'POST',
    data
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    type: 'DELETE'
  })
);
