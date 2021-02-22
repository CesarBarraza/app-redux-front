import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmpleadoState, selectIds } from '../../store/reducer';
import * as fromAction from '../../store/empleado.action';
import { Empleado } from '../../empleado';
import { selectEmplado, selectEmpleados } from '../../store/empleado.select';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleados$: Observable<Empleado[]>
  empleado: any={}

  constructor(private store: Store<EmpleadoState>, 
              private service: EmpleadoService,
              public router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(fromAction.loadEmpleados())
    this.loadEmpleados()
  }

  loadEmpleados(){
    this.empleados$= this.store.pipe(select(selectEmpleados))
  }

  deleteEmpelado(id: number){
    if(confirm("esta seguro de eliminar?")){
      this.store.dispatch(fromAction.deleteEmpleado({id:id}))
    }
  }

  hola(){
    this.router.navigate(['/empleados/vista'])
  }

}
//(click)="selectEmp(emp)"
