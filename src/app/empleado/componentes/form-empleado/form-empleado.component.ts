import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromAction from '../../store/empleado.action';
import { selectEmpleados } from '../../store/empleado.select';
import { EmpleadoState } from '../../store/reducer';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  formEmpleado= new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required)
  })
  constructor(private store: Store<EmpleadoState>) { 
  }

  ngOnInit(): void { 
    
  }

  agregarEmpleado(){
    if(this.formEmpleado.valid){
      this.store.dispatch(fromAction.addEmpleado({empleado: this.formEmpleado.value}))
      this.resetForm()
    }else{
      alert('todos los campos son necesarios')
    }
  }

  resetForm(){
    this.formEmpleado.reset();
  }

}
