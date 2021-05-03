import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitsComponent } from './cockpits.component';

describe('CockpitsComponent', () => {
  let component: CockpitsComponent;
  let fixture: ComponentFixture<CockpitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
