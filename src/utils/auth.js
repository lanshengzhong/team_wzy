import Cookies from 'js-cookie'

// cookie存入token
const TokenKey = 'Token'

export default {
  getToken() {
    return Cookies.get(TokenKey)
  },
  setToken(token) {
    return Cookies.set(TokenKey, token)
  },
  removeToken() {
    return Cookies.remove(TokenKey)
  }
}
