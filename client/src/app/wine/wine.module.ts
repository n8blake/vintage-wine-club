import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineLandingPageComponent } from '../pages/wine-landing-page/wine-landing-page.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { wineRoutes } from './wine.routes';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineNoteCategoriesListComponent } from './components/wine-note-categories-list/wine-note-categories-list.component';
import { WineNoteCategoriesDetailComponent } from './components/wine-note-categories-detail/wine-note-categories-detail.component';

@NgModule({
  declarations: [
    WineListComponent,
    WineDetailComponent,
    WineLandingPageComponent,
    WineNoteCategoriesListComponent,
    WineNoteCategoriesDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(wineRoutes)
  ]
})
export class WineModule { }
