import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementsComponent } from './server-elements.component';

describe('ServerElementsComponent', () => {
  let component: ServerElementsComponent;
  let fixture: ComponentFixture<ServerElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
