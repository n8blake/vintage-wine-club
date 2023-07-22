import { Component, OnInit } from '@angular/core';
import { IWine } from '../../interfaces/wine.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/user/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-add-edit',
  templateUrl: './wine-add-edit.component.html',
  styleUrls: ['./wine-add-edit.component.scss']
})
export class WineAddEditComponent implements OnInit {

  wine?: IWine
  public wineForm!: FormGroup
  locationLabel: string = 'Location';

  constructor(private authService: AuthService, private router: Router, private wineService: WineService, private route: ActivatedRoute) {
    // if(!this.authService.isAuthenticated()){
    //   this.router.navigate(['/login'])
    // }
  }

  ngOnInit(): void {
    const wineId = this.route.snapshot.params['wineId'];
    if(wineId) {
      this.wineService.getWineById(this.route.snapshot.params['wineId']).subscribe(wine => {
        this.wine = wine  
      })
    } 
    this.wineForm = new FormGroup({
      name: new FormControl(''),
      year: new FormControl(''),
      type: new FormControl(''),
      sparkling: new FormControl(''),
      location: new FormControl(''),
      color: new FormControl('#720618'),
      abv: new FormControl(''),
      description: new FormControl(''),
    });
  }

  saveWine(form: FormGroup): void {
    if(form.valid){
      
    }
  }

  startSearch(): void {
    this.locationLabel = 'Searching...'
    if(this.wineForm.value.location){
      console.log(this.wineForm.value.location``);
    }
    
  }

}
