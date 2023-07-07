import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { IWineNoteCategory } from '../../interfaces/wine-note-category';

@Component({
  selector: 'app-wine-note-categories-list',
  templateUrl: './wine-note-categories-list.component.html',
  styleUrls: ['./wine-note-categories-list.component.scss']
})
export class WineNoteCategoriesListComponent implements OnInit {

  noteCategories?: IWineNoteCategory[]

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.wineService.getNoteCategories().subscribe(categories => {
      this.noteCategories = categories;
    })
  }

}
