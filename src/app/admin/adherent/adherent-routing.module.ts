import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdherentPage } from './adherent.page';

const routes: Routes = [
  {
    path: '',
    component: AdherentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdherentPageRoutingModule {}
