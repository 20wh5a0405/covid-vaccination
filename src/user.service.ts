import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient:HttpClient) { }
  showAllUsers(){
    return this.HttpClient.get('http://localhost:3000/fetch');
  };
  userEmp(user:any){
    return this.HttpClient.post('http://localhost:3000/register',user);
  }
  userRegister(userdetails:any){
    return this.HttpClient.post('http://localhost:3000/register',userdetails);
  }
}


