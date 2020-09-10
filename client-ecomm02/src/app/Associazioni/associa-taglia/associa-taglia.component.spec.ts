import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaTagliaComponent } from './associa-taglia.component';

describe('AssociaTagliaComponent', () => {
  let component: AssociaTagliaComponent;
  let fixture: ComponentFixture<AssociaTagliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaTagliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaTagliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
