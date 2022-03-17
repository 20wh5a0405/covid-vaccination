import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    userdetail : any;
    email : any;
    password: any;
    c : any;
    constructor(private httpClient:HttpClient,private service:UserService,private router:Router) {
    this.email='';
    this.password='';
  }

  ngOnInit(): void {
 
  this.service.showAllUsers().subscribe((result:any)=>{
    this.userdetail=result;
  });
}

  loginSubmit(LoginForm:any){
    // alert(this.email);
    this.userdetail.forEach((u:any) => {
    if(u.email === LoginForm.email && u.password === LoginForm.password){
      // this.service.signUp(this.userdetails).subscribe();
      this.c=1;
      // alert("Registered");
      alert("Succesfully Loggedin");
      alert("Welcome to Home Page "+ u.sname);
      this.router.navigate(['/home']);
    }
  });
  if(this.c!=1){alert("Invalid Login");}
  }
}