import { Component, OnInit } from '@angular/core';
import { IWine } from '../../interfaces/wine.interface';
import { FormGroup } from '@angular/forms';
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
    this.wineForm = new FormGroup({})
  }

  saveWine(form: FormGroup): void {
    if(form.valid){
      
    }
  }

}
