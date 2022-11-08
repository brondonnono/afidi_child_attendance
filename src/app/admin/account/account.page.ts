import { NavigationService } from './../../services/navigation.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  @ViewChild(IonModal) myModal: IonModal;

  currentAccount = {} as any;
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  public changeAdminStatus(event): void {
    if (event.target.checked)
      console.log(event.target.checked);
  }

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

  cancel() {
    this.myModal.dismiss(null, 'cancel');
  }


}
