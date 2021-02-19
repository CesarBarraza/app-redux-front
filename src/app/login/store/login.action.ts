import { createAction, props } from '@ngrx/store';
import { User } from '../user';

//login user
export const login = createAction(
    '[Login Component] Login Component',
    props<{ user: User }>()
)
export const loginSuccess = createAction(
    '[Login Effect] Login Success',
    props<{ user: User }>()
)
export const loginFailure = createAction(
    '[Login Effect] Login Failure',
    props<{ error: any }>()
)

//registro user
export const registro = createAction(
    '[Registro Component] Registro Component',
    props<{ user: User }>()
)
export const registroSuccess = createAction(
    '[Effect Login] Registro Success',
    props<{ user: User}>()
)
export const registroFailure = createAction(
    '[Effect Login] Registro Failure',
    props<{ error: any }>()
)