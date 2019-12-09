import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfgMenuComponent } from './confg-menu.component';

describe('ConfgMenuComponent', () => {
  let component: ConfgMenuComponent;
  let fixture: ComponentFixture<ConfgMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfgMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
