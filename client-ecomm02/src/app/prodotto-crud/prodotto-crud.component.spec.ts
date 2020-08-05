import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoCrudComponent } from './prodotto-crud.component';

describe('ProdottoCrudComponent', () => {
  let component: ProdottoCrudComponent;
  let fixture: ComponentFixture<ProdottoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdottoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
