import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { JoinComponent } from './pages/join/join.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'members', component: JoinComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wine', loadChildren: () => 
    import('./wine/wine.module').then(mod =>  mod.WineModule) },

  { path: '404', component: PageNotFoundComponent, pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
