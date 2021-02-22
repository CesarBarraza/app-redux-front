import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  { path: 'empleados', 
    loadChildren: () => import('./empleado/empleado.module').then(m => m.EmpleadoModule)
  },
  { path: 'auth',
    loadChildren: () => import('./login/user-login.module').then(m => m.UserLoginModule),
    data: { preload: true }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: []
})
export class AppRoutingModule { }
