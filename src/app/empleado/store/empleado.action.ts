import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Empleado } from '../empleado';


//load empleados
export const loadEmpleados= createAction(
    '[Empleado List Component] Load Empleado'
);
export const loadEmpleadosSuccess= createAction(
    '[Empleado List Components] Load Empleado Success',
    props<{ empleado: Empleado[] }>()
);
export const loadEmpleadosFailure= createAction(
    '[Empleado List Component] Load Empleado Failure',
    props<{ error: any }>()
);

//select empleado
export const loadEmpleado= createAction(
    '[List Empleado component] load Empleado',
    props<{id: number}>()
);
export const loadEmpleadoSuccess= createAction(
    '[List Empleado component] load Empleado Success',
    props<{ selectEmpleado: Empleado }>()
);
export const loadEmpleadoFailure= createAction(
    '[List Empleado component] load Empleado Failuer',
    props<{error: any }>()
)

//delete empleado
export const deleteEmpleado= createAction(
    '[Empleado List Components] Delete Empleado',
    props<{ id:number }>()
);
export const deleteEmpleadoSuccess= createAction(
    '[Empleado List Components] Delete Empleado Success',
    props<{ id:number }>()
);
export const deleteEmpleadoFailure= createAction(
    '[List Empleado Components] Delete Empleado Failure',
    props<{ error: any }>()
);

//add empleado
export const addEmpleado= createAction(
    '[Empleado Form Component] Add Empleado',
    props<{ empleado: Empleado }>()
);
export const addEmpleadoSuccess= createAction(
    "[Empleado Effect] Add Empleado Success",
    props<{empleado: Empleado}>()
);
export const addEmpleadoFailure= createAction(
    '[Empleado Form Component] Add Empleado Failure',
    props<{ error: any }>()
);

//update enpleado
export const editEmpleado= createAction(
    '[Update Empleado] Update Empleado',
    props<{ empleado: Update<Empleado> }>()
)