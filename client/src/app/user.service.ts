import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from './models/user.model';

@Injectable()
export class UserService {

  private userSource = new Subject<User>();

  user$ = this.userSource.asObservable();

  setUser(user:User)
  {
    this.userSource.next(user);
  }
}
