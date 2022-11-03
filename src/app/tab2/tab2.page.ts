import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  histories = [];
  tmp = [];
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  getHistories(){}

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }
}
