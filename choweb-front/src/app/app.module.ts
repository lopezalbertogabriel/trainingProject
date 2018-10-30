import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {OptionsComponent} from './options/options.component';
import {CreatePreferenceComponent} from './create-preference/create-preference.component';
import {SetCredentialsComponent} from './set-credentials/set-credentials.component';

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    CreatePreferenceComponent,
    SetCredentialsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
