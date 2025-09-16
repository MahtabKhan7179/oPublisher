import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registeration.html',
  styleUrls: ['./registeration.css']
})
export class RegistrationComponent {
  registeredUsers: any[] = [];
  registerObj:any = {
  username: '',
  email: '',
  password: '',
  };
  isAgent: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.registerObj.username && this.registerObj.email && this.registerObj.password) {
      this.registeredUsers.push(this.registerObj);

      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
      this.registerObj.username = '';
      this.registerObj.email = '';
      this.registerObj.password = '';
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'All fields are required.';
      this.successMessage = '';
    }
  }
}
