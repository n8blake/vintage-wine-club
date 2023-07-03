import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth/auth.service';
import { IUser } from 'src/app/user/user/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  user?: IUser;
  authServiceUser?: IUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentIdentity().subscribe((data) => {
      this.user = <IUser>data;
    })
  }

}
