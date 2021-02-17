import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActionLogin from './login.action';
import { map, concatMap, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../servicio/user.service';
import { Router } from '@angular/router';



@Injectable()
export class EffectLoginEffects {

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActionLogin.login),
    concatMap(action => this.service.login(action.user).pipe(
      map((data) => fromActionLogin.loginSuccess({user: data })),
      catchError((error) => of(fromActionLogin.loginFailure(error)))
    ))
  )
  )


  constructor(private actions$: Actions, private service: UserService, private router: Router) {}

}
