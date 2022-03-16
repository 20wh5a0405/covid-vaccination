import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService{
  
  userLoggedIn: boolean;
  register: any;
  constructor(private httpClient: HttpClient) { 
    this.userLoggedIn = false;
  }
  getuserLoggedIn(): any{
    return this.userLoggedIn;
  }
  setUserLoggedIn(): void{
    this.userLoggedIn = true;
  }
  setUserLoggedOut(): void{
    this.userLoggedIn = false;
  }
  
  fetchDetails(){
    return this.httpClient.get('http://localhost:3000/fetch');//observables:when response is given back by servers the output is observed by this and returned to service
  }
  fetchDetailsuser(){
    return this.httpClient.get('http://localhost:3000/fetchuser');//observables:when response is given back by servers the output is observed by this and returned to service
  }
  getEmployeeByEmailAndPassword(loginForm:any){
    return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
  }
  registerpro(registerp:any){
    return this.httpClient.post('http://localhost:3000/registerp',registerp);
  }
  registeruser(registeruser:any){
    return this.httpClient.post('http://localhost:3000/registeruser',registeruser);
  }
  registerEmp(register:any){
    return this.httpClient.post('http://localhost:3000/register',register);
  }
  deleteEmp(employee:any){
    return this.httpClient.delete('http://localhost:3000/delete',employee);
  }
  updateEmp(register:any){
    return this.httpClient.put('http://localhost:3000/update',register);
  }
}