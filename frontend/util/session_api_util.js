export const signup = user => (
  $.ajax({
    url: 'api/users',
    type: 'POST',
    data: user
  })
);

export const login = user => (
  $.ajax({
    url: 'api/session',
    type: 'POST',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    type: 'DELETE'
  })
);

export const refresh = id => (
  $.ajax({
    url: `api/users/${id}`
  })
);
