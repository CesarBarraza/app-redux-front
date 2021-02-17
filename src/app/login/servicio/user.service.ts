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

  constructor(private http: HttpClient, private router: Router) { }

  /*loginUser(user: User): Observable<User>{
    return this.http.post<User>(environment.URL_API+'/Usuario', user);
  }*/

  login(user: User): Observable<User>{
    return this.http.post<User>(environment.URL_API+'/usuario', user).pipe(
      switchMap((users) =>{
        let user = users;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/'])
          return of(user);
        }else {
          return throwError('Datos incorrectos')
        }
      })
    )
  }
}
