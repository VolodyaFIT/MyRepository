import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserAuth: boolean;
  constructor() { }
  logIn() {
    this.isUserAuth = true
  }
  logOut() {
    this.isUserAuth = false
  }

  getIsUserAuth() {
    return this.isUserAuth
  }
}
