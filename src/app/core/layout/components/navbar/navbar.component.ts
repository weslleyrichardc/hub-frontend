import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private authService = inject(AuthService);

  isAuthenticated$ = this.authService.isAuthenticated$;

  logout() {
    this.authService.logout();
  }
}
