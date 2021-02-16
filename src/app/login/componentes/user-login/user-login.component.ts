import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../servicio/user.service';
import { LoginState } from '../../store/login.reducer';
import * as fromActionLogin from '../../store/login.action';
import { User } from '../../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    clave: new FormControl('', Validators.required)
  })

  constructor(private service: UserService,
              private router: Router,
              private store: Store<LoginState>
              ) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginUser(this.formLogin.value).subscribe(data =>{
      if(data == null) alert('datos incorrectos')
      else{
        this.router.navigate(['/'])
      }
    })
  }

  loginUser(){
    this.store.dispatch(fromActionLogin.login({user: this.formLogin.value}))
  }

}
