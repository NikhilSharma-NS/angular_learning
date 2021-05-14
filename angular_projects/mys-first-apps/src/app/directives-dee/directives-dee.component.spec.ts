import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDeeComponent } from './directives-dee.component';

describe('DirectivesDeeComponent', () => {
  let component: DirectivesDeeComponent;
  let fixture: ComponentFixture<DirectivesDeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesDeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
