import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-page.component').then((m) => m.HomePage)
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user-page.component').then((m) => m.UserPage)
  }
]

export default routes;
