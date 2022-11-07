import { NavigationService } from './../../services/navigation.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

}
