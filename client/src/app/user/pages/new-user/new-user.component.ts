import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { UsersManagerService } from '../../user/users-manager.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUser?: IUser
  firstName = new FormControl(this.newUser?.firstName, Validators.required)
  lastName = new FormControl(this.newUser?.lastName, Validators.required)
  email = new FormControl(this.newUser?.email, [Validators.required, Validators.email])
  password = new FormControl(this.newUser?.password, Validators.required)
  passwordConfirmation = new FormControl('', Validators.required)
  newUserForm: FormGroup

  constructor(private usersService: UsersManagerService) {
    this.newUserForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    })
  }

  ngOnInit(): void {
    
  }

  passwordsConfirmationMatches(): boolean {
    //console.log("matching...")
    if(this.password.value && this.password.value == this.passwordConfirmation.value){
      //console.log("passwords match");
      this.password.setErrors(null);
      this.passwordConfirmation.setErrors(null);
      return true;
    }
    if(this.password.touched && this.passwordConfirmation.touched){
      //console.log("validating...")
      if(this.password.value != this.passwordConfirmation.value){
        //console.log('passwords dont match');
        this.passwordConfirmation.setErrors({
          invalid: true
        })
        this.password.setErrors({
          invalid: true
        })
        return false;
      } else {
        this.passwordConfirmation.setErrors({
          invalid: false,
          valid: true
        })
        this.password.setErrors({
          invalid: false,
          valid: true
        })
        return true;
      }
    }
    return false;
  }

  submitNewUser(formValues: IUser): void {
    console.log(formValues);
    this.newUser = formValues
    console.log(this.newUser);
    if(this.newUser && this.newUserForm.valid) {
      this.usersService.saveUser(this.newUser).subscribe(data => {
        // ... check return data and route to a page
        
      })
    }
  }

}
