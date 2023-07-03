import { Component, OnInit } from '@angular/core';
import { IRole, IUser } from '../../user/user';
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
  isPreviewing: boolean = false;
  profilePhotoSrc?: string;
  profilePhotoFile?: any;
  roles?: Array<IRole>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService, private usersService: UsersManagerService) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user']
    if(!this.user){
      this.router.navigate(['/404']);
    }
    if(this.authService.currentUser){
      this.canEdit = this.authService.currentUser._id == this.user?._id;
    }
    this.usersService.getRoles().subscribe(roles => {
      this.roles = roles;
      console.log('got roles');
      console.log(this.roles);
    })
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(this.user) this.user.image = reader.result as string;
      }
    }
  }

  togglePreview(): void {
    this.isPreviewing = !this.isPreviewing;
  }

  update(form: NgForm): void {
    if(this.canEdit && this.user){
      console.log("saving user");
      console.log(this.user);
      if(this.profilePhotoFile){
        // save profile photo file
      }
      this.usersService.saveUser(this.user).subscribe(data => {
        if(data && data._id){
          this.refreshUserData();
        }
      });
    }
  }

  roleUuidToName(roleUUID: any): string | undefined {
    console.log('getting role name');
    const role = this.roles?.find(role => role._id == roleUUID );
    return role?.role ? role.role : undefined;
  }

  refreshUserData(): void {
    if(this.user && this.user._id) this.usersService.getUser(this.user._id).subscribe(data => {
      this.user = <IUser>data;
      console.log('user refreshed');
    });
  }

  logout(): void {
    if(window.confirm('Are you sure you want to log out?')) {
      this.authService.logout().subscribe(data => {
        this.router.navigate(['/welcome']);
      })
    } 
  }

}
