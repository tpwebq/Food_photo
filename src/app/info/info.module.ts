import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoS1Component } from './info-s1/info-s1.component';
import { InfoS2Component } from './info-s2/info-s2.component';
import { InfoComponent } from './info.component';


@NgModule({
  declarations: [
    InfoS1Component,
    InfoS2Component,
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
