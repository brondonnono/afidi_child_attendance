import { User } from './../models/user';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  currentUser: User = new User();

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private utilService: UtilService
  ) {
    this.currentUser.setDefaultValue();
  }

  getCurrentUserData() {
    this.storageService.getUserByUid(this.authService.getUid()).then(
      res => {
        this.currentUser = res.data() as User;
      },
      err => {
        this.utilService.showAlert('Erreur', 'Une erreur est survenue lors de la recupération des données de l\'utilisateur \n' + err)
      }
    );
  }

  getStatus(): string {
    return this.currentUser.getIsParent() ? 'Parent' : 'Adherent';
  }


}
