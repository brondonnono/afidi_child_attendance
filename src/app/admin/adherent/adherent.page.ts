import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/components/popover';
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
    private navigationService: NavigationService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(id) {
    const param = {
      'adherentID': id
    };
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {
        'param': param
      }
    });
    await popover.present();
  }

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

}
