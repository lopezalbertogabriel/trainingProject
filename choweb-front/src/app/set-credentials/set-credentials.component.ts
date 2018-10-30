import {Component, Input, OnInit} from '@angular/core';
import {Credentials} from "../credentials";

@Component({
  selector: 'app-set-credentials',
  templateUrl: './set-credentials.component.html',
  styleUrls: ['./set-credentials.component.css']
})
export class SetCredentialsComponent implements OnInit {

  @Input('credentials') credentials: Credentials;

  constructor() {
  }

  ngOnInit() {

  }

}
