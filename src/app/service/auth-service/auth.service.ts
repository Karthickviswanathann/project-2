import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl:string="https://localhost:44347/api/User/"


  constructor(private http:HttpClient) { }


  signUp(userObj:any){
    console.log(userObj);

    return this.http.post<any>(`${this.baseUrl}Signup`,userObj)
  }

  login(loginObj:any){
    console.log(loginObj);
    
    return this.http.post<any>(`${this.baseUrl}Login`,loginObj)
  }
}
