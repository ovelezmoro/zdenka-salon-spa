import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SwiperOptions } from 'swiper';

declare var $: any;

@Component({
  selector: 'app-booking-appointment-modal',
  templateUrl: './booking-appointment-modal.component.html',
  styleUrls: ['./booking-appointment-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookingAppointmentModalComponent implements OnInit, AfterViewInit {
  //10min = 0.166667 hour
  //15min = 0.25 hour

  public swiper: any;
  public slideActive: number = 0;
  public requiredHours = 1.5;
  public slotsAvaliables

  public swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    allowTouchMove: false,
  };
  public daySelected: moment.Moment;
  public daysOfMothSelected: any[] = [];

  public hoursOfDaySelected: any[];

  constructor(private _modalCtrl: ModalController) {
    moment.locale('es');
    this.daySelected = moment();
    Array(this.daySelected.daysInMonth())
      .fill(0)
      .map((value, index) => {
        this.daysOfMothSelected.push({
          id: index + 1,
          dayString: moment().startOf('month').add(index, 'days').format('L'),
          dayNumber: moment().startOf('month').add(index, 'days').format('DD'),
          dayName: moment().startOf('month').add(index, 'days').format('ddd'),
          moment: moment().startOf('month').add(index, 'days'),
          selected: index + 1 == moment().date(),
          disabled: index + 1 < moment().date()
        });
      });
    //10:00am a 9:00pm (11hrs)

    this.hoursOfDaySelected = Array(11).fill(10).map((value, index) => {
      return {
        id: index,
        hour: moment(value, "hh").add(index, 'hour').format('hh:mm A'),
        used: Math.random() < 0.4
      }
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.handleScrollLeftAnimateToDay(this.daysOfMothSelected.find((value) => value.selected))
    }, 200)
  }

  ngOnInit() {
  }

  isDateDisabled(day) {
    return false;
  }

  handleBackButton() {
    if (this.slideActive > 0) {
      this.swiper.slidePrev();
      this.slideActive = this.slideActive - 1;
    } else {
      this._modalCtrl.dismiss();
    }
  }

  handleDateButton(day) {
    if(!day.disabled) {
      this.daysOfMothSelected.map((date) => {
        date.selected = false;
        return date;
      });
      day.selected = true;
      this.handleScrollLeftAnimateToDay(day);
    }
  }

  handleScrollLeftAnimateToDay(day) {
    if(day != null) {
      const active = $(`#day-${day.id}`);
      const activeWidth = active.width() / 2; 
      const pos = active.position().left + activeWidth; //get left position of active li + center position
      const elpos = $('.dates').scrollLeft(); // get current scroll position
      const elW = $('.dates').width(); //get div width
      $('.dates').animate({
        scrollLeft: (pos + elpos - elW / 2)
      }, 300);
    }
  }

  setSwiperInstance(swiper: any) {
    this.swiper = swiper;
    console.log(this.swiper);
  }

  handleNextStepOneButton() {
    this.slideActive = 1;
    this.swiper.slideNext();
  }

  handleNextStepTwoButton() {
    this.slideActive = 2;
    this.swiper.slideNext();
  }

  handleFinishButton() {
    //TODO: MOSTRAR ALERTA DE CONFIRMACIÓN
  }
}
