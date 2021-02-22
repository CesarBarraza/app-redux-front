import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormEmpleadoComponent } from './componentes/form-empleado/form-empleado.component';
import { AuthGuard } from '../login/servicio/auth.guard';
import { EmpleadoViewComponent } from './componentes/empleado-view/empleado-view.component';

const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'administrar', component: FormEmpleadoComponent, canActivate: [AuthGuard] },
      { path: 'vista', component: EmpleadoViewComponent, canActivate: [AuthGuard] }
    ]
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmpleadoRoutingModule { }
