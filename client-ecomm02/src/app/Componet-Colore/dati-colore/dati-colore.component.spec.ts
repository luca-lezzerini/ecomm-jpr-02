import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiColoreComponent } from './dati-colore.component';

describe('DatiColoreComponent', () => {
  let component: DatiColoreComponent;
  let fixture: ComponentFixture<DatiColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatiColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatiColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
