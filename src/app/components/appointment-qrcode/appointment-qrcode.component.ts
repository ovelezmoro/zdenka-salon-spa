import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-appointment-qrcode',
  templateUrl: './appointment-qrcode.component.html',
  styleUrls: ['./appointment-qrcode.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppointmentQrcodeComponent implements OnInit {
  @Input() ongoing: any;

  constructor(private _modalCtrl: ModalController) {
  }

  ngOnInit() {}

  handleBackButton() {
    this._modalCtrl.dismiss();
  }
}
