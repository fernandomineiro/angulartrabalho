import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComentariosComponent } from './dashboard-comentarios.component';

describe('DashboardComentariosComponent', () => {
  let component: DashboardComentariosComponent;
  let fixture: ComponentFixture<DashboardComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
