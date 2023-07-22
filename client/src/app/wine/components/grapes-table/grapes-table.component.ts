import { Component, OnInit } from '@angular/core';
import { GrapesService } from '../../services/grapes.service';
import { IGrapeVarietal } from '../../interfaces/grape-varietal';

@Component({
  selector: 'app-grapes-table',
  templateUrl: './grapes-table.component.html',
  styleUrls: ['./grapes-table.component.scss']
})
export class GrapesTableComponent implements OnInit {

  grapes?: IGrapeVarietal[]

  constructor(private grapesService: GrapesService) { }

  ngOnInit(): void {
    this.grapesService.getGrapes().subscribe(grapes => {
      this.grapes = grapes;
    })
  }

}
