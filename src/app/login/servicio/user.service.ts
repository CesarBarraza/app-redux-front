import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<User>
  isLogged: Observable<User>

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('usuario')));
    //this.isLogged = this.userSubject.asObservable();
   }

  login(usuario: User): Observable<any>{
    return this.http.post(environment.URL_API+'/usuario', usuario).pipe(
      map((users: User) =>{
        let user = users;
        if(user.email){
          localStorage.setItem('usuario', JSON.stringify(user))
          this.router.navigate(['/'])
          this.userSubject.next(users)
          return user
        }else{
          return catchError((error:any) => error)
        }
      })
    )
  }

  registro(usuario: User): Observable<User>{
    return this.http.post<User>(environment.URL_API+'/registro', usuario)
    .pipe(
      map(() =>{
        this.router.navigate(['/user-login'])
        return usuario;
      }),
      catchError(error => of(error))
    )
  }

  logOut(){
    localStorage.removeItem('usuario')
    this.userSubject.next(null)
  }
}
