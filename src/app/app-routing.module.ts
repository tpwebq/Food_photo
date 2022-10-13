import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from "./comingsoon/comingsoon/comingsoon.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error/error.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { OfferComponent } from "./offer/offer.component";
import {PrivacyComponent} from "./privacy/privacy/privacy.component";

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"comingsoon",
    component: ComingsoonComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"info",
    component: InfoComponent
  },
  {
    path:"offer",
    component: OfferComponent
  },
  {
    path:"privacy",
    component: PrivacyComponent
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
