import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import * as fromActionLogin from './login/store/login.action';

@Injectable()
export class AppEffects {

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActionLogin.loginSuccess),
            tap((action) => this.alert.success('Binevenido/a @'+action.user.nombre))
        ),
        { dispatch: false }
    )

    loginFailure$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromActionLogin.loginFailure),
        tap((action) => this.alert.danger('Los datos ingresados son incorrectos!!'))
    ),
    { dispatch: false }
)

    constructor(private actions$: Actions, private alert: AlertService) {}
}