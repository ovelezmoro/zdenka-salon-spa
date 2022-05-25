import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { RestService } from 'src/app/services/rest.service';
import { ModalController } from '@ionic/angular';
import { AppointmentQrcodeComponent } from 'src/app/components/appointment-qrcode/appointment-qrcode.component';


@Component({
  selector: 'app-appointment-ongoing',
  templateUrl: './appointment-ongoing.page.html',
  styleUrls: ['./appointment-ongoing.page.scss'],
})
export class AppointmentOngoingPage implements OnInit {

  calendarMinDate = moment().format("YYYY-MM-DD");
  ongoings: any[] = [];

  constructor(private _rest: RestService, private _modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  handleChangeDate(value) {
    const date = format(parseISO(value), 'dd-MM-yyyy');
    this.ongoings = this._rest.getOngoings(date);
    console.log(this.ongoings);
  }

  async handleActionQRCodeButton(ongoing) {
      const modal = await this._modalCtrl.create({
        component: AppointmentQrcodeComponent,
        cssClass: 'appointment-qrcode-modal',
        componentProps: {
          ongoing
        }
      });
      return await modal.present();
  }

}
