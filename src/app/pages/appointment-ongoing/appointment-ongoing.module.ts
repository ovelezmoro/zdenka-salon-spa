import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentOngoingPageRoutingModule } from './appointment-ongoing-routing.module';

import { AppointmentOngoingPage } from './appointment-ongoing.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AppointmentQrcodeComponentModule } from 'src/app/components/appointment-qrcode/appointment-qrcode.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentOngoingPageRoutingModule,
    NgxQRCodeModule,
    AppointmentQrcodeComponentModule
  ],
  declarations: [AppointmentOngoingPage]
})
export class AppointmentOngoingPageModule {}
