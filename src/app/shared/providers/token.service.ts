import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem(environment.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  refreshToken(newToken: string): void {
    localStorage.setItem(environment.tokenKey, newToken);
  }
}
