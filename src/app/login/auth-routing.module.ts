import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes =[
  { 
    path: '' , 
    children: [
      { path: 'user-login', component: UserLoginComponent },
      { path: 'registro', component: RegistroComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
