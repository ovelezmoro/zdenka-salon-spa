import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.page.html',
  styleUrls: ['./appointment-history.page.scss'],
})
export class AppointmentHistoryPage implements OnInit {
  public histories: any[];
  public stars: number[] = Array(5).fill(1);
  constructor(private _rest: RestService, private _alertCtrl: AlertController) {
    this.histories = this._rest.getHistorial();
    console.log(this.histories);
  }
  

  ngOnInit() {
  }

  async handleUploadStar(history, value) {
    if(history.stars == 0) {
      const alert = await this._alertCtrl.create({
        cssClass: 'alert-stars',
        header: 'Calificar Servicio',
        message: `Desea colocar ${value} estrellas?`,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: (blah) => {
              console.log("No califico")
            }
          }, {
            text: 'Si',
            id: 'confirm-button',
            handler: () => {
              history = this._rest.uploadStarsHistory(history, value);
            }
          }
        ]
      });
  
      await alert.present();

    }
  }

}
