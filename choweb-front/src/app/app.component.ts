import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Basic Checkout Application';
  initPoint: string = "";
  preferenceId = "";

  preferenceCreated(preferenceConfirmation: PrefConfirmation) {
    this.initPoint = preferenceConfirmation.initPoint;
    this.preferenceId = preferenceConfirmation.preferenceId;
  }
}

export class PrefConfirmation {
  response: string;
  initPoint: string;
  preferenceId: string;
}

