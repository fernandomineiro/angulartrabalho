import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankNoticiasComponent } from './rank-noticias.component';

describe('RankNoticiasComponent', () => {
  let component: RankNoticiasComponent;
  let fixture: ComponentFixture<RankNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
