import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEmpReducer from '../empleado/store/reducer';
import * as fromLoginReducer from '../login/store/login.reducer';

export interface AppState {
 // [fromEmpReducer.empleadoStateFeatureKey]: fromEmpReducer.EmpleadoState
}

export const reducers: ActionReducerMap<AppState> = {
[fromEmpReducer.empleadoStateFeatureKey]: fromEmpReducer.empleadoReducers,
[fromLoginReducer.loginStateFeatureKey]: fromLoginReducer.loginReducers,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
