import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername:string = "";
  mPasssword:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }

    onClickSubmit(){
      if(this.mUsername == "jameszaro01@gmail.com" &&  this.mPasssword =="admin"){
        this.router.navigate(["/profile"]);
      }else{
        window.alert("Login Failed !");
      }
    }
    
  }
  


