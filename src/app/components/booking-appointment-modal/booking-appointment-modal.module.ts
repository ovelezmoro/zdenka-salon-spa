import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { BookingAppointmentModalComponent } from './booking-appointment-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [BookingAppointmentModalComponent],
  exports: [BookingAppointmentModalComponent]
})
export class BookingAppointmentModalComponentModule {}
