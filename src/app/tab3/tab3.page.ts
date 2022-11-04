import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  credentials: FormGroup;
  isLoading: boolean = false;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private utilService: UtilService
  ) {
    this.currentUser.setDefaultValue();
    this.credentials = this.fb.group({
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      username: [this.currentUser.username, [Validators.required, Validators.minLength(6)]],
      firstName: [this.currentUser.firstName, [Validators.required]],
      lastName: [this.currentUser.lastName, [Validators.required, Validators.minLength(6)]],
      language: [this.currentUser.language, [Validators.required]],
      city: [this.currentUser.city, [Validators.required]],
      quater: [this.currentUser.quater, [Validators.required]],
      sex: [this.currentUser.sex, [Validators.required]],
      phoneNumber: [this.currentUser.phoneNumber, [Validators.required]],
    });
  }

    // acces facile aux donnees du formulaire
    get email() {
      return this.credentials.get('email');
    }
    get username() {
      return this.credentials.get('username');
    }
    get firstName() {
      return this.credentials.get('firstName');
    }
    get lastName() {
      return this.credentials.get('lastName');
    }
    get language() {
      return this.credentials.get('language');
    }
    get city() {
      return this.credentials.get('city');
    }
    get quater() {
      return this.credentials.get('quater');
    }
    get sex() {
      return this.credentials.get('sex');
    }
    get phoneNumber() {
      return this.credentials.get('phoneNumber');
    }

  getCurrentUserData() {
    this.isLoading = true;
    this.utilService.showLoader();
    this.storageService.getUserByUid(this.authService.getUid()).then(
      res => {
        this.currentUser = res.data() as User;
        this.utilService.dismiss();
        this.isLoading = false;
      },
      err => {
        this.utilService.dismiss();
        this.utilService.showAlert('Erreur', 'Une erreur est survenue lors de la recupération des données de l\'utilisateur \n' + err)
        this.isLoading = false;
      }
    )
    .catch (rejected => {
      this.utilService.dismiss();
      this.utilService.showAlert('Erreur', 'Une erreur est survenue lors de la recupération des données de l\'utilisateur \n' + rejected);
      this.isLoading = false;
    })
    .finally( () => {
      this.utilService.dismiss();
      this.isLoading = false;
    });
  }

  getStatus(): string {
    return this.currentUser.getIsParent() ? 'Parent' : 'Adherent';
  }

  edit() {
    this.isEditing = true;
  }

  save() {
    this.isEditing = false;
    this.currentUser.setUserValue(this.username.value, this.currentUser.getPswd(), this.email.value, this.language.value, this.firstName.value, this.lastName.value, this.sex.value, this.currentUser.img, this.city.value, this.quater.value, this.phoneNumber.value, this.currentUser.getIsParent(), this.currentUser.getIsAdmin(), this.currentUser.isMember);
  }

  updatePicture() {}

}
