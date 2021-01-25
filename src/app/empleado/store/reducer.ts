import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, MetaReducer, on} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Empleado } from '../empleado';
import * as fromAction from './empleado.action';

export const empleadoStateFeatureKey = 'empleadoState';

export interface EmpleadoState extends EntityState<Empleado>{
  //error: any
}

export function selectedtEmpId(e: Empleado): number{
  return e.id
}

export function sortByName(a: Empleado, b: Empleado): number {
  return a.nombre.localeCompare(b.nombre);
}

export const adapter: EntityAdapter<Empleado>= createEntityAdapter<Empleado>({
  selectId: selectedtEmpId,
  sortComparer: sortByName,
})

export const initialState= adapter.getInitialState({
  //error: undefined,
})


export const empleadoReducers = createReducer(
  initialState,
  on(fromAction.addEmpleadoSuccess, (state, action) =>{
    return adapter.upsertOne(action.empleado, state)
  }),
   on(fromAction.addEmpleadoFailure, (state, action) =>{
     return {
       ...state,
       error: action.error
     }
   }),
  on(fromAction.loadEmpleadoSuccess, (state, action) =>{
    return adapter.setAll(action.empleado, state)
  }),
  on(fromAction.loadEmpleadoFailure, (state, action) =>{
    return {
      error: action.error,
      ...state
    }
  }),
  on(fromAction.deleteEmpleadoSuccess, (state, action) =>{
    return adapter.removeOne(action.id, state)
  }),
  on(fromAction.deleteEmpleadoFailure, (state, action) =>{
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromAction.editEmpleado, (state, action) =>
  adapter.updateOne(action.empleado, state)
  )
)

export function reducer(state: EmpleadoState | undefined, action: Action) {
  return empleadoReducers(state, action);
}


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors()


export const metaReducers: MetaReducer<EmpleadoState>[] = !environment.production ? [] : [];