import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferS1Component } from './offer-s1/offer-s1.component';
import { OfferS2Component } from './offer-s2/offer-s2.component';
import { OfferFiltersComponent } from './offer-filters/offer-filters.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferComponent } from './offer.component';


@NgModule({
  declarations: [
    OfferS1Component,
    OfferS2Component,
    OfferFiltersComponent,
    OfferListComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
