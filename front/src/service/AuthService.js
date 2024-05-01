class AuthService {
    static saveToken(token) {
      localStorage.setItem('accessToken', token);
    }
    static getToken() {
      return localStorage.getItem('accessToken');
    }
  }
  export default AuthService;
  