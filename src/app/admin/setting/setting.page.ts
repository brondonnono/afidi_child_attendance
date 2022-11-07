import { AuthService } from './../../services/auth.service';
import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  public changeThemeMode(event): void {}

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

}
