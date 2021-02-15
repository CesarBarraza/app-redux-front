import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, MetaReducer, on} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Empleado } from '../empleado';
import * as fromAction from './empleado.action';

export const empleadoStateFeatureKey = 'empleadoState';

export interface EmpleadoState extends EntityState<Empleado>{
  error: any
  selectEmpleado: Empleado;
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
  error: undefined,
  selectEmplado: undefined
})


export const empleadoReducers = createReducer(
  initialState,
  //agregar empleado
  on(fromAction.addEmpleadoSuccess, (state, action) =>{
    return adapter.upsertOne(action.empleado, state)
  }),
   on(fromAction.addEmpleadoFailure, (state, action) =>{
     return {
       ...state,
       error: action.error
     }
   }),
   //listar empleados
  on(fromAction.loadEmpleadosSuccess, (state, action) =>{
    return adapter.setAll(action.empleado, state)
  }),
  on(fromAction.loadEmpleadosFailure, (state, action) =>{
    return {
      error: action.error,
      ...state
    }
  }),
  //selecionar un empleado
  on(fromAction.loadEmpleadoSuccess, (state, action) =>{
    return {
      ...state,
      selectEmplado: action.selectEmpleado
    }
  }),
  on(fromAction.loadEmpleadoFailure, (state, action) =>{
    return {
      error: action.error,
      ...state
    }
  }),
  //eliminar empleado
  on(fromAction.deleteEmpleadoSuccess, (state, action) =>{
    return adapter.removeOne(action.id, state)
  }),
  on(fromAction.deleteEmpleadoFailure, (state, action) =>{
    return {
      ...state,
      error: action.error
    }
  }),
  //editar empleado
  on(fromAction.editEmpleado, (state, action) =>
  adapter.updateOne(action.empleado, state)
  )
)

/*export function reducer(state: EmpleadoState | undefined, action: Action) {
  return empleadoReducers(state, action);
}*/


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors()


export const metaReducers: MetaReducer<EmpleadoState>[] = !environment.production ? [] : [];