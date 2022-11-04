import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdherentPageRoutingModule } from './adherent-routing.module';

import { AdherentPage } from './adherent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdherentPageRoutingModule
  ],
  declarations: [AdherentPage]
})
export class AdherentPageModule {}
