import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  isLogin: boolean = true;

  errorMessage: string = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  loginCall() {
    let body = {
      "email": this.email,
      "password": this.password
    }

    this.http.post("http://localhost:8080/api/v1/auth/login", body).subscribe((resultData: any)=>
    {
      if (resultData?.success) {
        localStorage.setItem('auth', JSON.stringify(resultData?.user));
        localStorage.setItem('token', JSON.stringify(resultData?.token));
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect email or password!");
      }
    });
  }
  login()
  {
    this.loginCall();
  }
};
