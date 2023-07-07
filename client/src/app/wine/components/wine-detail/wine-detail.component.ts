import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  wine: any = {}

  constructor(private wineService: WineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wine = this.wineService.getWine(+this.route.snapshot.params['id'])
  }

  getSomImageUrl(name: string): string {
    return `/assets/soms/${name.toLocaleLowerCase()}.png`
  }

}
