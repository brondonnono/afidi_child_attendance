import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  template: `
      <ion-buttons class="ion-padding">
          <ion-button (click)="details()" color="success">
              <ion-icon slot="icon-only" name="eye"></ion-icon>
          </ion-button>
          <ion-button (click)="disabled()" color="warning">
              <ion-icon slot="icon-only" name="lock-closed"></ion-icon>
          </ion-button>
          <ion-button (click)="delete()" color="danger">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
          </ion-button>
      </ion-buttons>
  `
})
export class PopoverPage {

  translate: any = {};
  @Input() param: any;

  constructor(
    public popoverCtrl: PopoverController,
  ) {}

  public delete(): void  {
    console.log('Suppression de l\'adherent d\'id:', this.param.adherentID);
    this.popoverCtrl.dismiss();
  }

  public details(): void  {
    console.log('Détails de l\'adherent d\'id:', this.param.adherentID);
    this.popoverCtrl.dismiss();
  }
  
  public disabled(): void  {
    console.log('Désactivation du compte de l\'adherent d\'id:', this.param.adherentID);
    this.popoverCtrl.dismiss();
  }
}
