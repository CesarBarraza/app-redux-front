import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy{

  modulos: string[] =[]
  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      this.modulos.push(route.path)
      console.log(route.path)
      return load();
    }else{
      return of(null)
    }
  }
}
