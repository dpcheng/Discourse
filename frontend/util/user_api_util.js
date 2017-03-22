export const fetchUsers = () => (
  $.ajax({
    url: 'api/users'
  })
);

export const fetchUser = id => (
  $.ajax({
    url: `api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    data: { user },
    type: 'PATCH'
  })
);
