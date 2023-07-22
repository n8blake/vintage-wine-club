import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineLandingPageComponent } from './pages/wine-landing-page/wine-landing-page.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { wineRoutes } from './wine.routes';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineNoteCategoriesListComponent } from './components/wine-note-categories-list/wine-note-categories-list.component';
import { WineNoteCategoriesDetailComponent } from './components/wine-note-categories-detail/wine-note-categories-detail.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { WineAddEditComponent } from './components/wine-add-edit/wine-add-edit.component';
import { GrapesTableComponent } from './components/grapes-table/grapes-table.component';
import { GrapesComponent } from './pages/grapes/grapes.component';
import { CompositionSelectionComponent } from './components/composition-selection/composition-selection.component';

@NgModule({
  declarations: [
    WineListComponent,
    WineDetailComponent,
    WineLandingPageComponent,
    WineNoteCategoriesListComponent,
    WineNoteCategoriesDetailComponent,
    NoteDetailComponent,
    WineAddEditComponent,
    GrapesTableComponent,
    GrapesComponent,
    CompositionSelectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(wineRoutes),
  ],
})
export class WineModule {}
