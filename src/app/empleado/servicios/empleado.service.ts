import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../empleado';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  nuevoEmpleado= new Subject<any>()
  empleadoService: Empleado

  getEmpleado(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(environment.URL_API+'/empleado');
  }

  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete<any>(environment.URL_API+'/empleado/'+id)
  }

  addEmpleado(emp: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(environment.URL_API+'/empleado', emp)
  }

  editEmpleado(empId: string | number, changes: Partial<Empleado>): Observable<Empleado>{
    return this.http.put<Empleado>(environment.URL_API+'/empleado/'+ empId, changes)
  }

  refreshList(): Observable<Empleado>{
    return this.nuevoEmpleado.asObservable();
  }

  filterEmpleado(filter: string){
    this.nuevoEmpleado.next(filter)
  }
}
