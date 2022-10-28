import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private navigationService: NavigationService
  ) { }

  login() {
    // this.navigationService.goto('home');
    this.checkUserType();
  }

  register() {
    this.navigationService.goto('login');
  }

  checkUserType() {
    return this.navigationService.goto('index');
  }

  logout() { }
  

}
