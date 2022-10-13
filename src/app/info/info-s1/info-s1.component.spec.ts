import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoS1Component } from './info-s1.component';

describe('InfoS1Component', () => {
  let component: InfoS1Component;
  let fixture: ComponentFixture<InfoS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
