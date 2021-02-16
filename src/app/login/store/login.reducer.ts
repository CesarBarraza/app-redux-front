import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../user';
import * as fromAction from './login.action';

export const loginStateFeatureKey = 'loginState';

export interface LoginState extends EntityState<User>{
  error: any,
  user: User
}

export const loginAdapter: EntityAdapter<User>= createEntityAdapter()

export const loginInitialState = loginAdapter.getInitialState({
  error: undefined,
  user: undefined
})

export const loginReducers = createReducer(
  loginInitialState,
  on(fromAction.loginSuccess, (state, action) =>{
    return {
      ...state,
      user: action.user
    }
  }),
  on(fromAction.loginFailure, (state, action) =>{
    return {
      ...state,
      error: action.error
    }
  })
)
/*export const reducers: ActionReducerMap<LoginState> = {

};*/


export const metaReducers: MetaReducer<LoginState>[] = !environment.production ? [] : [];
