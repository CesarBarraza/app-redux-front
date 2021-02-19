import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLoginState from './store/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectLoginEffects } from './store/effect-login.effects';
import { RegistroComponent } from './componentes/registro/registro.component';



@NgModule({
  declarations: [UserLoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 3000, positionX: 'right', positionY: 'top'}),
    StoreModule.forFeature(fromLoginState.loginStateFeatureKey, fromLoginState.loginReducers, { metaReducers: fromLoginState.metaReducers }),
    EffectsModule.forFeature([EffectLoginEffects])
  ],
  exports: [UserLoginComponent, RegistroComponent] 
})
export class UserLoginModule { }
