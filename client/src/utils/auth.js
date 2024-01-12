// calling jwt-decode to decode the token and get user info
import decode from 'jwt-decode';

// creating auth service
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // checking if token exists
    const token = this.getToken();
    return token ? true:false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();