import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  userName: string = ''; 

  ngOnInit(): void {
    this.retrieveUserName();
  }

  retrieveUserName() {
    const storedData = localStorage.getItem('auth');
    if (storedData) {
      const authData = JSON.parse(storedData);
      this.userName = authData.name;
    }
    console.log(this.userName)
  }

  signOutCall() {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
  signOut()
  {
    this.signOutCall();
  }

}
