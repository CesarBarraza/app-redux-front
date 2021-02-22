import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/login/servicio/user.service';
import { LoginState } from 'src/app/login/store/login.reducer';
import * as fromActionLogin from '../login/store/login.action';

import { User } from 'src/app/login/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;

  constructor(private router: Router, public service: UserService, private store: Store<LoginState>) { 
    this.service.userSubject.subscribe(data =>{
      this.user = data
    })
  }

  ngOnInit(): void { }

  salir(){
    this.service.logOut()
    this.router.navigate(['/auth/user-login'])
    this.store.dispatch(fromActionLogin.logOut())
  }

}
