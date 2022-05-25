import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { AppointmentQrcodeComponent } from './appointment-qrcode.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SwiperModule, NgxQRCodeModule],
  declarations: [AppointmentQrcodeComponent],
  exports: [AppointmentQrcodeComponent]
})
export class AppointmentQrcodeComponentModule {}
