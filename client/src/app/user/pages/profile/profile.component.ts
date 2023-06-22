import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { UsersManagerService } from '../../user/users-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: IUser
  canEdit: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService, private usersService: UsersManagerService) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user']
    if(!this.user){
      this.router.navigate(['/404']);
    }
    if(this.authService.currentUser){
      this.canEdit = this.authService.currentUser._id == this.user?._id;
    }
    
  }

  update(form: NgForm): void {
    if(this.canEdit && this.user){
      console.log("saving user");
      console.log(this.user);
      this.usersService.saveUser(this.user).subscribe(data => {
        if(data && data._id){
          this.user = <IUser>data;
        }
      });
    }
  }

}
