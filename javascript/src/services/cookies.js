import Cookies from 'universal-cookie'

export default {
  set: function(cookieName,cookieValue){
    const cookies = new Cookies();
    cookies.set(cookieName,cookieValue, {path: 'http:localhost:3001'})
  },
  get: function(cookie){
    const cookies = new Cookies()
    return cookies.get(cookie)
  }
}
