import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginState } from '../../store/login.reducer';
import * as fromActionLogin from '../../store/login.action';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

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

  constructor(private store: Store<LoginState>,
              private alert: AlertService,
              public router: Router
              ) { }

  ngOnInit(): void {  }

  loginUser(){
    if(this.formLogin.valid){
      this.store.dispatch(fromActionLogin.login({user: this.formLogin.value}))
    }else{
      this.alert.warning('Los datos ingresados no son correctos!!')
    }
  }

}
