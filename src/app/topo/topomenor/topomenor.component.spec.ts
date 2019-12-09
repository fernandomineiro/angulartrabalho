import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopomenorComponent } from './topomenor.component';

describe('TopomenorComponent', () => {
  let component: TopomenorComponent;
  let fixture: ComponentFixture<TopomenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopomenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopomenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
