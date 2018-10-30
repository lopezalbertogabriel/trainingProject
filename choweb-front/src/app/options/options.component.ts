import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Option} from "../option";
import {Credentials} from "../credentials";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent implements OnInit {

  ROOT_URL = 'http://localhost:8089';

  credentialsOpt: Option;
  readyToCheckout = false;

  credentials: Credentials;

  @Output() emitter = new EventEmitter<any>();

  confirmationMsj: String;

  response: {
    response: string,
    initPoint: string,
    preference_id: string,
  };

  constructor(private http: HttpClient) {
    //this.response.initPoint = "";
  }

  onSelect(opt: Option) {
    opt.selected = !opt.selected;
  }

  savePreference(value) {
    let jsonMessage = JSON.stringify({
      items: value.theItems,
      payerEmail: value.thePayer,
      clientId: this.credentials.CLIENT_ID,
      clientSecret: this.credentials.CLIENT_SECRET
    })
    this.postPreference(jsonMessage);
  }

  postPreference(jsonPreference: string) {
    let header = {
      headers: new HttpHeaders({
        "accept": "application/json"
      })
    };

    this.http.post(this.ROOT_URL + "/createPreference", jsonPreference, header)
      .subscribe(value => {
        this.response = (<any>value);
        if (this.response.initPoint.length) {
          this.confirmationMsj = "http://localhost:8080/trainingProject/payment/payment.html?" +
            "init_point=" + this.response.initPoint +
            "&preference_id=" + this.response.preference_id;
          document.getElementById("payment_button").style.display = "inline-block";
          this.readyToCheckout = true;
          this.emitter.emit(this.response);
        }
      });
  }

  ngOnInit() {
    this.credentialsOpt = new Option("Credenciales");
    this.credentials = new Credentials();
    this.credentials.CLIENT_ID = "458135539432788";
    this.credentials.CLIENT_SECRET = "godDx4YpwY5pJ4bfZrej0cCKarovvBj0";
  }

}


