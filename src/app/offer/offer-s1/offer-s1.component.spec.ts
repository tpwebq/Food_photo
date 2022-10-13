import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferS1Component } from './offer-s1.component';

describe('OfferS1Component', () => {
  let component: OfferS1Component;
  let fixture: ComponentFixture<OfferS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
