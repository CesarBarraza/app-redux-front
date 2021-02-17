import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginState } from '../../store/login.reducer';
import * as fromActionLogin from '../../store/login.action';
import { NgxSpinnerService } from "ngx-spinner";

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
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {  }

  loginUser(){
    this.store.dispatch(fromActionLogin.login({user: this.formLogin.value}))
  }

}
