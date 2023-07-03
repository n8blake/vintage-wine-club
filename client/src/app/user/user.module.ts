import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersManagerComponent } from './pages/users-manager/users-manager.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    LoginComponent, 
    UsersManagerComponent, 
    NewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
  ],
})
export class UserModule {}
