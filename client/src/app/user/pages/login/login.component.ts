import { ApplicationRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../user/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  mouseoverLogin = false;
  loginInvalid = false;

  constructor(private router: Router, private authService: AuthService, private appRef: ApplicationRef) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    this.authService
      .loginUser(form.value.email, form.value.password)
      .subscribe((response) => {
        console.log(response);
        if (!response) {
          this.loginInvalid = true;
        } else if(response._id) {
          this.authService.getCurrentIdentity().subscribe(identity => {
            if(response._id == identity._id){
              this.router.navigate(['/users/profile', response._id]);
            } else {
              console.log("error when navigating");
              console.log(response);
              console.log(identity);
            }
            //
          });
          //this.appRef.tick();
          
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
