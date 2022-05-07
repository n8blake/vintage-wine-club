import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { JoinComponent } from './pages/join/join.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineRouteActivatorService } from './wine/wine-route-activator.service';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'members', component: JoinComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wine', component: WineListComponent},
  { path: 'wine/:id', component: WineDetailComponent, canActivate: [WineRouteActivatorService]},
  { path: '404', component: PageNotFoundComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
