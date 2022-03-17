import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdetail : any;
 
  constructor(private httpClient:HttpClient,private service:UserService,private router:Router) {
    this.userdetail={id:' ',sname:' ',email : ' ',password : ' '};
  }

  ngOnInit(): void {
  }
  checkPwd(){
    console.log("Check");

  }
  async signUp(registerForm:any){
    // alert(this.email);
    console.log(registerForm.password);
    console.log(registerForm.c_password);
    this.userdetail.sname = registerForm.sname;
    this.userdetail.email = registerForm.email;
    this.userdetail.password = registerForm.password;
    console.log(this.userdetail.sname);
    console.log(this.userdetail.email);
    console.log(this.userdetail.password);
    if(registerForm.password===registerForm.c_password){
      // this.service.signUp(this.userdetails).subscribe();
      this.userRegister();
      // alert("Registered");

    }
    else{
      alert("Check your password");
    }
  }
  // userRegister(){
  //   this.service.userRegister(this.userdetails).subscribe();
  // }
  userRegister(){
    this.service.userRegister(this.userdetail).subscribe();
    // this.service.showAllUsers().subscribe();
    alert("Registered");
    this.router.navigate(['/login']);
  }

}