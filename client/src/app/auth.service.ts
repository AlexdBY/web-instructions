import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth {

  lock = new Auth0Lock('S9hMJI7sUl2wJ2hOhxgm94OaksNl007p', 'web-instructions.eu.auth0.com', {});

  constructor() {
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
