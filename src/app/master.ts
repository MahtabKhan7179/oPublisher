import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  registeredUsers: any[] = [];
  private userSignal = signal<any>(null);

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage() {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      this.userSignal.set(JSON.parse(storedUser));
    }
  }

  get user() {
    return this.userSignal;
  }

  login(userData: any) {
    this.userSignal.set(userData);
    localStorage.setItem('loggedUser', JSON.stringify(userData));
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.userSignal.set(null);
  }
}
