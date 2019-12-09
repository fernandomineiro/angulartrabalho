import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAutoresComponent } from './dashboard-autores.component';

describe('DashboardAutoresComponent', () => {
  let component: DashboardAutoresComponent;
  let fixture: ComponentFixture<DashboardAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
