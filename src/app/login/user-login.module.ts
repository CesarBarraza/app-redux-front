import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLoginState from './store/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectLoginEffects } from './store/effect-login.effects';



@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromLoginState.loginStateFeatureKey, fromLoginState.loginReducers, { metaReducers: fromLoginState.metaReducers }),
    EffectsModule.forFeature([EffectLoginEffects])
  ],
  exports: [UserLoginComponent]
})
export class UserLoginModule { }
