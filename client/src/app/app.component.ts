import { Component } from '@angular/core';
import { Auth } from './auth.service';
import { TranslateService } from 'ng2-translate';
import { User } from './models/user.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Social } from './models/social.handler';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(private auth: Auth, private translate: TranslateService, private authHttp: AuthHttp) {
    this.setTranslateSettings();
    this.userAuthenticatedHandler();
    this.getUserData();
  }

  setTranslateSettings() {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  getUserData() {
    if (localStorage.getItem('id_token')) {
      this.authHttp.get('api/userinfo').subscribe(res => {
        this.user = res.json();
        console.log(this.user);
      })
    }
  }

  userAuthenticatedHandler() {
    this.auth.lock.on("authenticated", (authResult) => {
      this.auth.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        let social = new Social;
        this.user = social.createUserModelFromAuthResult(profile);
        this.authHttp.post('api/login', this.user).subscribe(res => {
          this.user.role = res.json().role;
          console.log(this.user);
        });
      });
    });
  }

  ChangeLang(lang: string) {
    this.translate.use(lang);
  }

  ChangeTheme(theme: string) {
    let styleUrl = document.getElementById('style');
    styleUrl.attributes.getNamedItem('href').value = 'https://bootswatch.com/' + theme + '/bootstrap.min.css';
  }

}
