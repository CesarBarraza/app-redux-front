import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/login/servicio/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: string= localStorage.getItem('isLogged')
  constructor(private router: Router, public service: UserService) { }

  ngOnInit(): void { 
    this.user
  }

  salir(){
    this.service.logOut()
    this.router.navigate(['/user-login'])
  }

}
