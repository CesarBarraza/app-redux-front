import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ : Observable<User>

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {

   }

  login(usuario: User): Observable<any>{
    return this.http.post(environment.URL_API+'/usuario', usuario).pipe(
      switchMap((users) =>{
        let user = users;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.alertService.success('Bienvenido/a '+usuario.email);
          this.router.navigate(['/'])
          return of(user);
        }else {
          this.alertService.danger('Los datos ingresados son incorrectos');
          return throwError('Datos incorrectos')
        }
      })
    )
  }
}
