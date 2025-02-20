import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _Router = inject(Router);
  private loggedInStatus  = new BehaviorSubject<boolean>(false)
  private http = inject(HttpClient)
  isLogin:boolean = false;
   get isAuthenticated():Observable<boolean>{
    return this.loggedInStatus.asObservable()
  }
  setLoginStatue(token:string){
    localStorage.setItem("token",token);
    this.loggedInStatus.next(true)
  }
  logout(){
    localStorage.removeItem('token');
    this.loggedInStatus.next(false);
    this._Router.navigate(['/login'])
  }
  checkAuthentication(){
    const token = localStorage.getItem('token');
    // i need to make check about session expiry
    if(token){ this.loggedInStatus.next(true);}
   else {this.loggedInStatus.next(false)}
  }
  //**************** LOGIN *************/
  login(data:any){
    return this.http.post('https://dummyjson.com/auth/login',data)
  }
  private loadingStatus = new BehaviorSubject<boolean>(false);
  get isLoading(): Observable<boolean> {
    return this.loadingStatus.asObservable();
  }
  setLoadingStatus(isLoading: boolean): void {
    this.loadingStatus.next(isLoading);
  }
}

