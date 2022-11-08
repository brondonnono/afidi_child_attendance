import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdherentPageRoutingModule } from './adherent-routing.module';

import { AdherentPage } from './adherent.page';
import { PopoverPage } from '../../components/popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdherentPageRoutingModule
  ],
  declarations: [
    AdherentPage,
    PopoverPage
  ]
})
export class AdherentPageModule {}
