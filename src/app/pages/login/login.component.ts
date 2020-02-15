import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { IUser } from '../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSrv: AuthService,
    private route: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {
    // const user: IUser = {
    //   email: 'test@test.com',
    //   password: '123456'
    // };
    // this.authSrv.loginByEamil(user);
  }

  onLogin(formValue: IUser) {
    this.authSrv.loginByEamil(formValue)
      .then(
        (res) => {
          console.log('Login successfully >>>>>> ', res);
          sessionStorage.setItem('uid', res.user.uid);
          this.route.navigate(['/']);
        }
      )
      .catch(
        (err) => {
          console.log('Login Error >>>>>>>>>>>>>> ', err);
        }
      );
  }

}
