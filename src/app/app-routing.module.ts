import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import {
//   redirectUnauthorizedTo,
//   redirectLoggedInTo,
//   canActivate,
// } from '@angular/fire/auth-guard';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToTab = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule),
    // ...canActivate(redirectLoggedInToTab)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/office_view/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/office_view/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
