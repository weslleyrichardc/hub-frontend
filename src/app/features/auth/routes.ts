import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup-page.component').then((m) => m.SignupPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login-page.component').then((m) => m.LoginPage)
  },
]

export default routes;
