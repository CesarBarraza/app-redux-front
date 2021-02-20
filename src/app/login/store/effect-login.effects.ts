import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActionLogin from './login.action';
import { map, concatMap, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../servicio/user.service';
import { Router } from '@angular/router';
import { User } from '../user';



@Injectable()
export class EffectLoginEffects {

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActionLogin.login),
    concatMap(action => this.service.login(action.user).pipe(
      map((data: User) => fromActionLogin.loginSuccess({user: data })),
      catchError((error) => of(fromActionLogin.loginFailure(error)))
    ))
  )
  )

  registro$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActionLogin.registro),
    mergeMap(action => this.service.registro(action.user).pipe(
      map((data: User) => fromActionLogin.registroSuccess({ user: action.user })),
      catchError((error:any) => of(fromActionLogin.registroFailure(error)))
    ))
  )
  )

  /*logOut$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActionLogin.logOut),
    mergeMap(() => this.service.logOut().pipe(
      map((user: User) => fromActionLogin.logOut())
    ))
  ))*/


  constructor(private actions$: Actions, private service: UserService, private router: Router) {}

}
