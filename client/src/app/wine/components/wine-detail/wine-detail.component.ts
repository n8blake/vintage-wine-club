import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineService } from '../../services/wine.service';
import { IWine } from '../../interfaces/wine.interface';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  wine?:IWine

  constructor(private wineService: WineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wineService.getWineById(this.route.snapshot.params['wineId']).subscribe(wine => {
      this.wine = wine
      console.log(this.wine);
    })

  }

  getSomImageUrl(name: string): string {
    return `/assets/soms/${name.toLocaleLowerCase()}.png`
  }

}
