import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentOngoingPage } from './appointment-ongoing.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentOngoingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentOngoingPageRoutingModule {}
