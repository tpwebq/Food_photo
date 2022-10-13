import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferS2Component } from './offer-s2.component';

describe('OfferS2Component', () => {
  let component: OfferS2Component;
  let fixture: ComponentFixture<OfferS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
