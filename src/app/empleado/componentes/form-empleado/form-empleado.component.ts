import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../servicios/empleado.service';
import * as fromAction from '../../store/empleado.action';
import { selectEmpleados } from '../../store/empleado.select';
import { EmpleadoState } from '../../store/reducer';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  emp: any={}

  formEmpleado= new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required)
  })
  constructor(private store: Store<EmpleadoState>, public service: EmpleadoService) { 
  }

  ngOnInit(): void {
    this.service.empleadoService={
      id: null,
      nombre: '',
      apellido: '',
      email: '',
      dni: null
    }
    
  }

  agregarEmpleado(){
    if(this.formEmpleado.valid){
      this.store.dispatch(fromAction.addEmpleado({empleado: this.formEmpleado.value}))
      this.resetForm()
    }else{
      alert('todos los campos son necesarios')
    }
  }

  modificarEmpleado(){
    const edit: Update<Empleado> ={
      id: this.emp.id,
      changes: this.formEmpleado.value
    }

    this.store.dispatch(fromAction.editEmpleado({ empleado: edit }))
    this.store.dispatch(fromAction.loadEmpleados())
  }

  resetForm(){
    this.formEmpleado.reset();
  }

}
