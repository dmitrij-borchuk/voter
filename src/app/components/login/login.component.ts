import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getStatus();
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      console.log(data);
      this.user = this.authService.getStatus();
      // this.router.navigate(['']);
    })
  }
}
