import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoS2Component } from './info-s2.component';

describe('InfoS2Component', () => {
  let component: InfoS2Component;
  let fixture: ComponentFixture<InfoS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
