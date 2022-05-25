import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentPage } from './appointment.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage,
    children: [
      {
        path: 'appointment-history',
        loadChildren: () => import('../appointment-history/appointment-history.module').then(m => m.AppointmentHistoryPageModule)
      },
      {
        path: 'appointment-ongoing',
        loadChildren: () => import('../appointment-ongoing/appointment-ongoing.module').then(m => m.AppointmentOngoingPageModule)
      },
      {
        path: '',
        redirectTo: '/app/appointment/appointment-ongoing',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentPageRoutingModule {}
