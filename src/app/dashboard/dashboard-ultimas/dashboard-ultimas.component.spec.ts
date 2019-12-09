import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUltimasComponent } from './dashboard-ultimas.component';

describe('DashboardUltimasComponent', () => {
  let component: DashboardUltimasComponent;
  let fixture: ComponentFixture<DashboardUltimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUltimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUltimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
