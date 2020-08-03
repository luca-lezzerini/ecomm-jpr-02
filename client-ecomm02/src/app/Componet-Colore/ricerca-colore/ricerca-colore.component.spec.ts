import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaColoreComponent } from './ricerca-colore.component';

describe('RicercaColoreComponent', () => {
  let component: RicercaColoreComponent;
  let fixture: ComponentFixture<RicercaColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
