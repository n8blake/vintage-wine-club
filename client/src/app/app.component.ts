import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth/auth.service';
import { IUser } from './user/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vintage Wine Club';
  user?: IUser;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentIdentity().subscribe(user => {
      this.user = user;
    })
    this.authService.user$.subscribe(user => this.user = user);
    this.authService.logoutUser$.subscribe(logout => {
      if(logout) this.user = undefined;
    })
  }

}
