import { createAction, props } from '@ngrx/store';
import { User } from '../user';

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