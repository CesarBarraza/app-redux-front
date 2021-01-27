import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEmpleadoComponent } from './empleado/componentes/form-empleado/form-empleado.component';
import { EmpleadoModule } from './empleado/empleado.module';

const routes: Routes = [
  {path: 'administrar', component: FormEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, EmpleadoModule]
})
export class AppRoutingModule { }
