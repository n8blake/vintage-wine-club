import { Component, OnInit } from '@angular/core';
import { UsersManagerService } from '../../user/users-manager.service';
import { IRole, IUser } from '../../user/user';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss']
})
export class UsersManagerComponent implements OnInit {

  users?: IUser[]
  roles?: IRole[];

  constructor(private usersService: UsersManagerService) { }

  ngOnInit(): void {
    this.updateUsers();
    this.usersService.getRoles().subscribe(roles => {
      this.roles = roles
    })
  }

  userHasRole(user: IUser, role: IRole): boolean {
    if (!user.roles) return false;
    const _role = user.roles.find(userRole => userRole._id == role._id);
    return _role ? true : false;
  }

  addRoleToUser(user: IUser, role:IRole): void {
    const roles = user.roles;
    if(roles && !this.userHasRole(user, role)){
        roles.push(role);
    } else {
      user.roles = [role];
    }
    this.usersService.saveUser(user).subscribe(updatedUser => {
      if(!this.userHasRole(updatedUser, role)){
        console.log('user not updated...');
      }
      this.updateUsers();
    })
  }

  removeRoleFromUser(user: IUser, role:IRole): void {
    if(user.roles && this.userHasRole(user, role)){
      const roleIndex = user.roles.indexOf(role);
      console.log(roleIndex);
      user.roles.splice(roleIndex, 1);
      this.usersService.saveUser(user).subscribe(updatedUser => {
        if(!this.userHasRole(updatedUser, role)){
          console.log('user not updated...');
        }
        this.updateUsers();
      })
    }
  }

  updateUsers(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
    })
  }

}
