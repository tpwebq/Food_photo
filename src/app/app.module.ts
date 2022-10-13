import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from "./comingsoon/comingsoon.module";
import { ContactModule} from "./contact/contact.module";
import { ErrorModule } from "./error/error.module";
import { HomeModule } from "./home/home.module";
import { InfoModule } from "./info/info.module";
import { OfferModule } from "./offer/offer.module";
import { PrivacyModule } from "./privacy/privacy.module";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ContactModule,
    ErrorModule,
    HomeModule,
    InfoModule,
    OfferModule,
    PrivacyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
