import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Social } from './models/social.handler';

declare var Auth0Lock: any;

@Injectable()
export class Auth {

  lock = new Auth0Lock('S9hMJI7sUl2wJ2hOhxgm94OaksNl007p', 'web-instructions.eu.auth0.com', {});

  constructor(private http:Http) {
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        let social = new Social;
        var user = social.createUserModelFromAuthResult(profile);
        http.post('api/users/auth', user).subscribe(res => { 
          user.role = res['_body']; 
          localStorage.setItem('profile', JSON.stringify(user));
          console.log(user); 
        });
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
