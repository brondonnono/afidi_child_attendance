import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials: FormGroup;
  isVisible: boolean = false;
  errorMessages = { email: '', password: '' };
  isLoading: boolean = false;
  isErrors: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private utilService: UtilService,
    public navigationService: NavigationService,
  ) { }

  // acces facile aux donnees du formulaire
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  get username() {
    return this.credentials.get('username');
  }

  get Cpassword() {
    return this.credentials.get('Cpassword');
  }

  get tel() {
    return this.credentials.get('tel');
  }


  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Cpassword: ['', [Validators.required, Validators.minLength(6)]],
      tel: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
    });
  }

  async register() {
    let errMsg = {title: '', msg: ''};
    await this.utilService.showLoader();
    const loginData = {email: this.email.value, password: this.password.value};
    const user = await this.authService.register(loginData);
    await this.utilService.dismiss();
    if (user.user) {
      const result = await this.storageService.storeUserEmail(this.email.value);
      if (result)
        this.navigationService.goto('login');
      else {
        // this.authService.deleteUser();
        this.authService.authErrorsCodes.forEach(err => {
          if (err.code == user)  {
            errMsg.title = 'Erreur réseau';
            errMsg.msg = 'Vérifiez votre connexion internet puis réésayez!';
          }
        });
        if (errMsg.title != '') this.utilService.showAlert(errMsg.title, errMsg.msg);
        else this.utilService.showAlert('Echec d\'inscription', 'Veuillez reéssayer SVP!');
      }
    } else {
      this.authService.authErrorsCodes.forEach(err => {
        if (err.code == user)  {
          errMsg.title = 'Erreur réseau';
          errMsg.msg = 'Vérifiez votre connexion internet puis réésayez!';
        }
      });
      if (errMsg.title != '') this.utilService.showAlert(errMsg.title, errMsg.msg);
      else this.utilService.showAlert('Echec d\'inscription', 'Veuillez reéssayer SVP!');
    }
  }

}
