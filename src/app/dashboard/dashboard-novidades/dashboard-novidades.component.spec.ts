import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNovidadesComponent } from './dashboard-novidades.component';

describe('DashboardNovidadesComponent', () => {
  let component: DashboardNovidadesComponent;
  let fixture: ComponentFixture<DashboardNovidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNovidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNovidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
