import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { RegisterResponseInterface } from '../interfaces/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth';
  private http = inject(HttpClient);
  private router = inject(Router);

  async register(user: any) {
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

      this.router.navigateByUrl('/');
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

    let removeToken = localStorage.removeItem('token');

    if (removeToken == null) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  public get isAuthenticated(): boolean {
    //TODO: Check token expiry and other security checks

    return localStorage.getItem('token') !== null;
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
