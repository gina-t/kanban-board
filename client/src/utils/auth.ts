// client/src/utils/auth.ts
import  { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(idToken: string) {
    localStorage.setItem('token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.assign('/login');
  }
}

export default new AuthService();
