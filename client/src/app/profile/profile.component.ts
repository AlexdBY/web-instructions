import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { AuthHttp } from 'angular2-jwt';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  page:Page;

  constructor(private route: ActivatedRoute, private authHttp: AuthHttp) {
    route.url.subscribe(urlSegments => {
        this.getPageData(urlSegments[0].path);
    });

  }

  private getPageData(urlSegment: string) {
    this.authHttp.get('api/profile/'+urlSegment).subscribe(res => {
        this.page = res.json();
        console.log(this.page);
    });
  }

  ngOnInit() {
  }

}
