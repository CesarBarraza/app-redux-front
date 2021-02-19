import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: User): Observable<any>{
    return this.http.post(environment.URL_API+'/usuario', usuario).pipe(
      switchMap((users) =>{
        let user = users;
        if(user){
          this.isLogged = true
          localStorage.setItem('isLogged', JSON.stringify(true))
          this.router.navigate(['/'])
          return of(user);
        }else {
          return throwError('Datos incorrectos')
        }
      })
    )
  }

  registro(user: User): Observable<User>{
    return this.http.post<User>(environment.URL_API+'/registro', user)
  }

  logOut(){
    this.isLogged = false
    localStorage.removeItem('isLogged')
  }
}
