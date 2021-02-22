//modulos angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoRoutingModule } from './empleado-routing.module';

//componentes
import { FormEmpleadoComponent } from 'src/app/empleado/componentes/form-empleado/form-empleado.component';
import { ListEmpleadoComponent } from 'src/app/empleado/componentes/list-empleado/list-empleado.component';
import { EmpleadoViewComponent } from './componentes/empleado-view/empleado-view.component';

//modulos ngrx
import * as fromEmpleadoState from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmpleadoEffects } from './store/empleado.effects';


@NgModule({
  declarations: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    EmpleadoViewComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromEmpleadoState.empleadoStateFeatureKey, fromEmpleadoState.empleadoReducers),
    EffectsModule.forFeature([EmpleadoEffects])
  ], 
  exports: [
    /*ListEmpleadoComponent,
    FormEmpleadoComponent,
    EmpleadoViewComponent*/
  ]
})
export class EmpleadoModule { }
