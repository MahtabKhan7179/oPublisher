import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule, Router } from '@angular/router';
import { Master } from './master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private master: Master, private router: Router) {}

  get loggedUser() {
    return this.master.user();
  }

  logOut() {
    this.master.logout();
    this.router.navigate(['/home']);
  }
}
