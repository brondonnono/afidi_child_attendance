import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { AdminGuard } from './guard/admin.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    // ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'index',
    loadChildren: () => import('./admin/index/index.module').then( m => m.IndexPageModule),
    // ...canActivate(redirectUnauthorizedToLogin),
    // canLoad: [AdminGuard] 
  },
  {
    path: 'home',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./admin/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'adherent',
    loadChildren: () => import('./admin/adherent/adherent.module').then( m => m.AdherentPageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
