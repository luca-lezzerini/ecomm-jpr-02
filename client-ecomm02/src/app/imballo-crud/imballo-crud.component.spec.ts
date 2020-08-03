import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImballoCrudComponent } from './imballo-crud.component';

describe('ImballoCrudComponent', () => {
  let component: ImballoCrudComponent;
  let fixture: ComponentFixture<ImballoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImballoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImballoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
