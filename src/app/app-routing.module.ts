import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoViewComponent } from './empleado/componentes/empleado-view/empleado-view.component';
import { FormEmpleadoComponent } from './empleado/componentes/form-empleado/form-empleado.component';

import { EmpleadoModule } from './empleado/empleado.module';
import { RegistroComponent } from './login/componentes/registro/registro.component';
import { UserLoginComponent } from './login/componentes/user-login/user-login.component';

const routes: Routes = [
  { path: 'administrar', component: FormEmpleadoComponent },
  { path: 'vistaEmpleado', component: EmpleadoViewComponent },
  { path: 'user-login', component: UserLoginComponent},
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, EmpleadoModule]
})
export class AppRoutingModule { }
