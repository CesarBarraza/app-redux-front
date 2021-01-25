import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmpleadoState } from '../../store/reducer';
import * as fromAction from '../../store/empleado.action';
import { Empleado } from '../../empleado';
import { selectEmpleados, selectEmpladoId } from '../../store/empleado.select';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleados$: Observable<Empleado[]>

  constructor(private store: Store<EmpleadoState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromAction.loadEmpleado())
    this.loadEmpleados()
  }

  loadEmpleados(){
    this.empleados$= this.store.pipe(select(selectEmpleados))
  }

  deleteEmpelado(id: number){
    this.store.dispatch(fromAction.deleteEmpleado({id:id}))
  }

}
