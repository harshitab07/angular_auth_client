import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  dob: string = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  signupCall() {
    let body = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
      "dob": this.dob
    }

    this.http.post("http://localhost:8080/api/v1/auth/signup", body).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.router.navigateByUrl('/');
    });
  }

  signup()
  {
    this.signupCall();
  }

}
