import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAction from './empleado.action';
import { EmpleadoService } from '../servicios/empleado.service';
import { map, mergeMap, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class EmpleadoEffects {

  //load empleado
  loadEmpleados$= createEffect(() =>
  this.actions$.pipe(
    ofType(fromAction.loadEmpleado),
    mergeMap(() => this.service.getEmpleado().pipe(
      map(empleados => fromAction.loadEmpleadoSuccess({empleado: empleados})),
      catchError(error => of(fromAction.loadEmpleadoFailure({error})))
    ))
    )
  )

  //delete empleado
  deleteEmpleado$= createEffect(() =>
  this.actions$.pipe(
    ofType(fromAction.deleteEmpleado),
    mergeMap(action => this.service.deleteEmpleado(action.id).pipe(
      map(() => fromAction.deleteEmpleadoSuccess({ id: action.id})),
      catchError(error => of(fromAction.deleteEmpleadoFailure({ error })))
    ))
    )
  )

  //add empleado
  addEmpleado$=createEffect(() =>
  this.actions$.pipe( 
    ofType(fromAction.addEmpleado), 
    mergeMap(action => this.service.addEmpleado(action.empleado).pipe(
      map(() => fromAction.addEmpleadoSuccess({empleado: action.empleado})),
      catchError(error => of(fromAction.addEmpleadoFailure(error)))
    ))
    )
  )

  //edit empleado
  editEmpleado$= createEffect(() => 
  this.actions$.pipe(
    ofType(fromAction.editEmpleado),
    concatMap(action => this.service.editEmpleado(
      action.empleado.id,
      action.empleado.changes
    ))
    ), {dispatch: false}
  )

  constructor(private actions$: Actions, private service: EmpleadoService) {}

}
