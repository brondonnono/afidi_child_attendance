import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.page.html',
  styleUrls: ['./adherent.page.scss'],
})
export class AdherentPage implements OnInit {

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
