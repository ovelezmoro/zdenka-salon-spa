import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        loadChildren: () => import('../pages/discover/discover.module').then(m => m.DiscoverPageModule)
      },{
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'local',
        loadChildren: () => import('../pages/local/local.module').then(m => m.LocalPageModule)
      },
      {
        path: 'appointment',
        loadChildren: () => import('../pages/appointment/appointment.module').then(m => m.AppointmentPageModule)
      },
      {
        path: '',
        redirectTo: '/app/discover',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
