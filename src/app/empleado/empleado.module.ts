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
import { EmpleadoViewComponent } from './componentes/empleado-view/empleado-view.component';

@NgModule({
  declarations: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    MenuComponent,
    EmpleadoViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromEmpleadoState.empleadoStateFeatureKey, fromEmpleadoState.empleadoReducers),
    EffectsModule.forFeature([EmpleadoEffects])
  ], 
  exports: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    MenuComponent
  ]
})
export class EmpleadoModule { }
