import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-create-preference',
  templateUrl: './create-preference.component.html',
  styleUrls: ['./create-preference.component.css']
})

export class CreatePreferenceComponent implements OnInit {
  payer : String;

  items : Item[] = new Array();
  active : Item = new Item();


  @Output() emitter = new EventEmitter<any>();

  addItem(item : Item){
      this.items.push(item);
      this.active = new Item();
  }

  removeItem(item){
    this.items.splice(this.items.indexOf(item), 1);
  }

  generatePreference(){
    let theItems = this.items;
    let thePayer = this.payer
    this.emitter.emit({theItems, thePayer});
  }

  autofill(){
    this.active.title = "Pikachu de la suerte";
    this.active.amount = 44;
    this.active.price = 999;
    this.active.pictureUrl = "https://res.cloudinary.com/teepublic/image/private/s---Orh_gAT--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1489813788/production/designs/1332589_1.jpg"
    this.payer = "titisimo@mercadolibre.com"
  }

  constructor() {
  }

  ngOnInit() {
  }

}
