import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormEmpleadoComponent } from 'src/app/empleado/componentes/form-empleado/form-empleado.component';
import { ListEmpleadoComponent } from 'src/app/empleado/componentes/list-empleado/list-empleado.component';
import * as fromEmpleadoState from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmpleadoEffects } from './store/empleado.effects';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromEmpleadoState.empleadoStateFeatureKey, fromEmpleadoState.reducer),
    EffectsModule.forFeature([EmpleadoEffects])
  ], 
  exports: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    MenuComponent
  ]
})
export class EmpleadoModule { }
