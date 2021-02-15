import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoViewComponent } from './empleado/componentes/empleado-view/empleado-view.component';
import { FormEmpleadoComponent } from './empleado/componentes/form-empleado/form-empleado.component';

import { EmpleadoModule } from './empleado/empleado.module';

const routes: Routes = [
  { path: 'administrar', component: FormEmpleadoComponent },
  { path: 'vistaEmpleado', component: EmpleadoViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, EmpleadoModule]
})
export class AppRoutingModule { }
