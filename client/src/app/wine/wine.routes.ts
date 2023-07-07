import { Route, Routes } from '@angular/router';
import { WineLandingPageComponent } from '../pages/wine-landing-page/wine-landing-page.component';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';
import { WineRouteActivatorService } from './services/wine-route-activator.service';
import { WineNoteCategoriesListComponent } from './components/wine-note-categories-list/wine-note-categories-list.component';
import { WineNoteCategoriesDetailComponent } from './components/wine-note-categories-detail/wine-note-categories-detail.component';
import { NoteCategoryRouteActivatorService } from './services/note-category-route-activator.service';
import { NoteCategoryResolverServiceService } from './services/note-category-resolver-service.service';

export const wineRoutes: Routes = [
    { path: '', component: WineLandingPageComponent},
    { path: 'list', component: WineListComponent },
    { path: 'notes', component: WineNoteCategoriesListComponent },
    {
      path: 'notes/:category',
      component: WineNoteCategoriesDetailComponent,
      canActivate: [NoteCategoryRouteActivatorService],
      resolve: {category:NoteCategoryResolverServiceService}
    },
    {
        path: ':id',
        component: WineDetailComponent,
        canActivate: [WineRouteActivatorService],
    },
]