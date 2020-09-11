import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaOffertaComponent } from './associa-offerta.component';

describe('AssociaOffertaComponent', () => {
  let component: AssociaOffertaComponent;
  let fixture: ComponentFixture<AssociaOffertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaOffertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
