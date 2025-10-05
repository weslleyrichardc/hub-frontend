import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { RegisterResponseInterface } from '../interfaces/register-response.interface';

import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = signal(!!localStorage.getItem('token'));

  private apiUrl = environment.apiUrl + '/api/auth';
  private http = inject(HttpClient);
  private router = inject(Router);

  async register(user: any) {
    this.csrfToken().subscribe(() => {
      this.http.post<RegisterResponseInterface>(
        this.apiUrl + '/user',
        {
          name: user.name,
          email: user.email,
          password: user.password
        },
        this.getOptions()
      ).subscribe(result => {
        localStorage.setItem('token', result.token);
        this.isAuthenticated$.set(true);

        this.router.navigateByUrl('/');
      });
    });
  }

  async login(credentials: any) {
    this.csrfToken().subscribe(() => {
      this.http.post<LoginResponseInterface>(
        this.apiUrl + '/login',
        {
          "email": credentials.email,
          "password": credentials.password
        },
        this.getOptions()
      ).subscribe(result => {
        localStorage.setItem('token', result.token);
        this.isAuthenticated$.set(true);

        this.router.navigateByUrl('/');
      });
    });
  }

  async logout() {
    this.http.post(
      this.apiUrl + '/logout',
      {},
      {
        ...this.getOptions(),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe();

    localStorage.removeItem('token');
    this.isAuthenticated$.set(false);

    this.router.navigateByUrl('/auth/login');
  }

  private getOptions() {
    return {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  private csrfToken() {
    return this.http.get('/sanctum/csrf-cookie', { withCredentials: true });
  }
}
