import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  
  @ViewChild('map', {static: true}) mapRef: ElementRef<HTMLElement>;
  googleMap: GoogleMap;
  enterprise: any;

  constructor(private rest_: RestService) {
    this.enterprise = rest_.getEnterpriseSelected();
    console.log(this.enterprise);
  }

  async ngOnInit() {
    this.googleMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: 'AIzaSyBMaS3zYhfpLOvRE_LF6MsBQIxjEgI1WYo',
      config: {
        center: {
          lat: this.enterprise.latitude,
          lng: this.enterprise.longitude,
        },
        zoom: 18,
      },
    });
    this.googleMap.addMarker({
      coordinate: {
        lat: this.enterprise.latitude,
        lng: this.enterprise.longitude, 
      },
      draggable: false
    })
  }

}
