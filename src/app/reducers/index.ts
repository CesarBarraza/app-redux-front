import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEmpReducer from '../empleado/store/reducer';

export interface AppState {
  [fromEmpReducer.empleadoStateFeatureKey]: fromEmpReducer.EmpleadoState
}

export const reducers: ActionReducerMap<AppState> = {
[fromEmpReducer.empleadoStateFeatureKey]: fromEmpReducer.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
