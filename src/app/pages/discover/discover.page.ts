import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookingAppointmentModalComponent } from 'src/app/components/booking-appointment-modal/booking-appointment-modal.component';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  public categories: any[] = [];
  public services: any[] = [];
  public servicesSelected: any[] = [];
  public isModalOpen: boolean = false;
  constructor(private _rest: RestService, private router: Router, public modalController: ModalController) {
    this.services = this._rest.getServices();
    this.categories = this._rest.getCategories();
  }

  ngOnInit() {
  }

  handleOnSelectService(service: any){
    service.selected = !service.selected;
    if(service.selected) {
      this.servicesSelected.push(service);
    } else {
      const idx = this.servicesSelected.findIndex((value) => {
        return service.id = value.id;
      });
      if(idx >= 0) {
        this.servicesSelected.splice(idx, 1);
      }
    }
  }

  async handleActionBookAppointmentButton() {
    console.log(this.servicesSelected);
    if(this.servicesSelected.length) {
      const modal = await this.modalController.create({
        component: BookingAppointmentModalComponent,
        cssClass: 'discover-modal'
      });
      return await modal.present();
    }
  }

  isActiveBookAppointment() {
    const countSelects = this.services.filter((service) => {
      return service.selected;
    }).length;
    /*this.services.forEach(services => {
      countSelects = countSelects + (<any[]>services.childrens).filter((children) => {
        return children.selected;
      }).length
    });*/
    return countSelects ? 'primary' : 'medium';
  }

}
