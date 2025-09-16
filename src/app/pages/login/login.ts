import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Master } from '../../master';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  registeredUsers: any[] = [];
  loginObj: any = {
    username: '',
    password: ''
  }

  errorMessage: string = '';

  constructor(private master: Master,private router: Router) {}

  login() {
    const user = { username: this.loginObj.username, password: this.loginObj.password }; // or full user object
    this.master.login(user);
    this.router.navigate(['/home']);
    const localData = localStorage.getItem('registeredUsers')
    if(localData != null) {
      this.registeredUsers = JSON.parse(localData)
    }
    const isUserExist = this.registeredUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      this.errorMessage = '';
      alert('Login successful!');
      localStorage.setItem('loggedUser', JSON.stringify(this.loginObj));
      this.router.navigate(['']);
    } else {
      this.errorMessage = 'Please enter both username and password.';
      alert('Wrong credentials');
    }
  }
}
