import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profile: any;
  constructor(private rest_: RestService, private router: Router) {
    this.profile = rest_.getProfile();
  }

  ngOnInit() {
  }

  handleLogoutButton() {
    this.router.navigate(['/login']);
  }

}
