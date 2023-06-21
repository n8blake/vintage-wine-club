import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: IUser

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user']
    if(!this.user){
      this.router.navigate(['/404']);
    }
  }

}
