import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BookingAppointmentModalComponentModule } from 'src/app/components/booking-appointment-modal/booking-appointment-modal.module';
import { SwiperModule } from 'swiper/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    SwiperModule,
    BookingAppointmentModalComponentModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
