import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaImballoComponent } from './associa-imballo.component';

describe('AssociaImballoComponent', () => {
  let component: AssociaImballoComponent;
  let fixture: ComponentFixture<AssociaImballoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaImballoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaImballoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
