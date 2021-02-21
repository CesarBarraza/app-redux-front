import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoModule } from './empleado/empleado.module';

const routes: Routes = [
  { path: 'empleados', 
  loadChildren: () => import('./empleado/empleado.module').then(m => m.EmpleadoModule)
  },
  { path: 'auth',
    loadChildren: () => import('./login/user-login.module').then(m => m.UserLoginModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, EmpleadoModule]
})
export class AppRoutingModule { }
