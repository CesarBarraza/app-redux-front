import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormEmpleadoComponent } from './componentes/form-empleado/form-empleado.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'administrar', component: FormEmpleadoComponent, canActivate: [AuthGuard] }
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
