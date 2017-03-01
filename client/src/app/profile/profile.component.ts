import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../models/page.model';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  page:Page;

  constructor(private route: ActivatedRoute, private http: Http) {
    route.url.subscribe(urlSegments => {
        this.getPageData(urlSegments[0].path);
    });

  }

  private getPageData(urlSegment: string) {
    let token =localStorage.getItem('id_token');
    let headers = new Headers({ 'authorization': 'Bearer ' + token});
    let options = new RequestOptions({ headers: headers });
    this.http.get('api/profile/'+urlSegment, options).subscribe(res => {
      this.page = res.json();
      console.log(this.page);
    });
  }

  ngOnInit() {
  }

}
