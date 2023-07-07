import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  wineList: any = []

  constructor(private wineService:WineService) { }

  ngOnInit(): void {
    this.wineList = this.wineService.getWines()
  }

}
