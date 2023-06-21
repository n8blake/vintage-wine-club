import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    this.authService
      .loginUser(form.value.email, form.value.password)
      .subscribe((response) => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/users/profile']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
