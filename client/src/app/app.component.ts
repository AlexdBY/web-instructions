import { Component } from '@angular/core';
import { Auth } from './auth.service';
import { TranslateService } from 'ng2-translate';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user:User;
  
  constructor(private auth: Auth, private translate:TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    this.user = JSON.parse(localStorage.getItem('profile'));
  }

  ChangeLang(lang:string)
  {
    this.translate.use(lang);
  }
  
  ChangeTheme(theme:string)
  {
    let styleUrl = document.getElementById('style');
    styleUrl.attributes.getNamedItem('href').value = 'https://bootswatch.com/' + theme + '/bootstrap.min.css';
  }
  
}
