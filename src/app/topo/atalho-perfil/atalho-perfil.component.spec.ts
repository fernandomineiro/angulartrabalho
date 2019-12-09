import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtalhoPerfilComponent } from './atalho-perfil.component';

describe('AtalhoPerfilComponent', () => {
  let component: AtalhoPerfilComponent;
  let fixture: ComponentFixture<AtalhoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtalhoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtalhoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
