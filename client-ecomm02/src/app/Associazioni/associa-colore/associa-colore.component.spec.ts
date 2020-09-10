import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaColoreComponent } from './associa-colore.component';

describe('AssociaColoreComponent', () => {
  let component: AssociaColoreComponent;
  let fixture: ComponentFixture<AssociaColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
