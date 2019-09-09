import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private readonly AUTH_TOKEN = new BehaviorSubject<string>(null);
  readonly authToken$ = this.AUTH_TOKEN.asObservable();

  get authToken(): string {
    return this.AUTH_TOKEN.getValue();
  }

  set authToken(newToken: string) {
    localStorage.setItem(environment.tokenKey, newToken);
    this.AUTH_TOKEN.next(newToken);
  }

  clearToken(): void {
    localStorage.removeItem(environment.tokenKey);
    this.AUTH_TOKEN.next(null);
  }

}
