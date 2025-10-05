import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-page.component').then((m) => m.HomePage)
  }
]

export default routes;
