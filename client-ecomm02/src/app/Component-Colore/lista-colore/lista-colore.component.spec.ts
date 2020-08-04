import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColoreComponent } from './lista-colore.component';

describe('ListaColoreComponent', () => {
  let component: ListaColoreComponent;
  let fixture: ComponentFixture<ListaColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
