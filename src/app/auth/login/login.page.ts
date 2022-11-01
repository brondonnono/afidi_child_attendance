import { AuthService } from './../../services/auth.service';
import { UtilService } from './../../services/util.service';
import { NavigationService } from './../../services/navigation.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;
  isVisible: boolean = false;
  errorMessages = { tel: '', password: '' };
  isLoading: boolean = false;
  isErrors: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private utilService: UtilService,
    private storageService: StorageService,
    private navigationService: NavigationService
  ) { }

  // acces facile aux donnees du formulaire
  get tel() {
    return this.credentials.get('tel');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      tel: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isCredentials(): boolean {
    return ((this.credentials.get('tel').value).trim() == '' || (this.credentials.get('password').value).trim() == '') ? false : true;
  }

  async login() {
    console.log(this.credentials);
    if (this.isCredentials()) {
      console.log('ok debut');
      if (this.credentials.valid) {
        await this.utilService.showLoader();
  
        const user = this.authService.login(this.credentials.value);
        await this.utilService.dismiss();
  
        if (user) {
          this.navigationService.goto('');
        } else {
          this.utilService.showAlert('Echec de connexion', 'Veuillez reéssayer SVP!');
        }
      }
    } else {
      this.utilService.showAlert('Informations requises', 'Tous les champs sont obligatoires');
    }
  }

  public getPasswordType() {
    return this.isVisible ? 'text' : 'password';
  }

  async changePasswordVisibility() {
    this.isVisible = !this.isVisible;
  }

}
