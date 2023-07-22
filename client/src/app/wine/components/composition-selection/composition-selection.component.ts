import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IWineComponent } from '../../interfaces/wine.interface';
import { GrapesService } from '../../services/grapes.service';

@Component({
  selector: 'app-composition-selection',
  templateUrl: './composition-selection.component.html',
  styleUrls: ['./composition-selection.component.scss']
})
export class CompositionSelectionComponent implements OnInit {

  @Input() wineComposition?: IWineComponent[];
  @Output() updatedWineComposition: EventEmitter<IWineComponent[]> = new EventEmitter<IWineComponent[]>;

  composition: IWineComponent[];

  constructor(private grapesService: GrapesService) { 
    this.composition = []
  }

  ngOnInit(): void {
    if(this.wineComposition){
      this.composition = this.wineComposition;
    } 
  }

  addNewWineComponent(): void {
    const newComponent:IWineComponent = {
      grape: ""
    }
    console.log(`Adding ${newComponent}`);
    this.composition.push(newComponent);
  }

}
