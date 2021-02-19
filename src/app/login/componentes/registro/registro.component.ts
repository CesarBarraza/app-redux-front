import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from 'ngx-alerts';
import * as fromActionLogin from '../../store/login.action';
import { LoginState } from '../../store/login.reducer';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    clave: new FormControl('', Validators.required)
  })

  constructor(private store: Store<LoginState>,
     private router: Router,
     private alert: AlertService) { }

  ngOnInit(): void {
  }

  registroUser(){
    if(this.registerForm.valid){
      this.store.dispatch(fromActionLogin.registro({user:this.registerForm.value}))
    }else{
      this.alert.warning('Todos los campos son obligatorios!!!')
    }
  }

}
