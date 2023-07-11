import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { IWine } from '../../interfaces/wine.interface';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  wineList: IWine[] = []

  constructor(private wineService:WineService) { }

  ngOnInit(): void {
    this.wineService.getWines().subscribe(wines => {
      console.log(wines);
      this.wineList = wines;
    })
  }

}
