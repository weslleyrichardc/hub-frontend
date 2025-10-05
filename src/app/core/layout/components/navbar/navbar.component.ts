import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private authService = inject(AuthService);

  isAuthenticated = signal(false);

  constructor() {
    this.isAuthenticated.set(this.authService.isAuthenticated);
  }

  logout() {
    this.authService.logout();
  }
}
