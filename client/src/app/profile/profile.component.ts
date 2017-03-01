import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user:User;
  
  constructor(auth: Auth) 
  { 
    this.user = JSON.parse(localStorage.getItem('profile'));
  }

  ngOnInit() {
  }

}
