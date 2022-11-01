import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    alert.present();
  }

  async showToast(message: string, type: string) {
    const toast = await this.toastController.create({
      header: message,
      position: 'top',
      duration: 5000,
      color: type,
      buttons: [{
        text: 'fermer',
        role: 'cancel'
      }]
    });

    // Present the toast at the top of the page
    await toast.present();
  }

  async showLoader() {
    const loading = await this.loadingController.create({
      message: 'Patientez...',
      mode: 'ios',
      spinner: 'circular'
    });
    await loading.present();
  }

  async dismiss() {
    await this.loadingController.dismiss();
  }
}

