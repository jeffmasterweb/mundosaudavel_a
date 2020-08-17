import { RouterModule, Routes } from '@angular/router';



const AppRoutes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'loja', loadChildren: () => import('./pages/lojas/lojas.module').then(m => m.LojasModule) }
];

export const APP_ROUTE = RouterModule.forRoot(AppRoutes);
