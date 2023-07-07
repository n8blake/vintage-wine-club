import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersManagerComponent } from './pages/users-manager/users-manager.component';
import { UserRouteActivatorService } from './user/user-route-activator.service';
import { UserProfileResolverService } from './user/user-profile-resolver.service';
import { NewUserComponent } from './pages/new-user/new-user.component';

export const userRoutes: Routes = [
  { path: 'profile/:id', component: ProfileComponent,
    canActivate: [UserRouteActivatorService], 
    resolve: {user: UserProfileResolverService}
  },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: UsersManagerComponent },
  { path: 'new', component: NewUserComponent },
  { path: '', component: UsersManagerComponent },
];
