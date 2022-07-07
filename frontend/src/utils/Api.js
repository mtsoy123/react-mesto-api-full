class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (url, options = {}) => {
    return fetch(url, options)
    .then((res) => res.ok ? res.json() : Promise.reject(res.status))
  }

  getProfile() {
    return this._checkResponse(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
  };

  getInitialCards() {
    return this._checkResponse(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: 'include',
    })
  }

  editProfile(userInfo) {
    return this._checkResponse(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userInfo),
      credentials: 'include',
    })
  }

  addCard(item) {
    return this._checkResponse(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(item),
      credentials: 'include',
    })
  }

  editAvatar(link) {
    return this._checkResponse(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(link),
      credentials: 'include',
    })
  }

  deleteCard(id) {
    return this._checkResponse(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
  }

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this._checkResponse(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
      })
    } else {
      return this._checkResponse(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
    }
  }

}

export const api = new Api({
  baseUrl: 'https://api.mtsoy.numberone.nomoredomains.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
});