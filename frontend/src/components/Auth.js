const BASE_URL = 'https://api.mtsoy.numberone.nomoredomains.sbs';

const _checkResponse = (url, options = {}) => {
  return fetch(url, options)
  .then((res) => res.ok ? res.json() : Promise.reject(res.status))
}

export const register = (email, password) => {
  return _checkResponse(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
      return res
    }
  )
};

export const authorize = (email, password) => {
  return _checkResponse(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
  })
};

export const getSignOut = () => {
  return _checkResponse(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
  .then((res) => {
      return res
    }
  )
}

export const getContent = (token) => {
  return _checkResponse(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
  })
  .then(data => data)
}