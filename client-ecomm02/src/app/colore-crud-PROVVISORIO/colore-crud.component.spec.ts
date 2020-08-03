import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreCrudComponent } from './colore-crud.component';

describe('ColoreCrudComponent', () => {
  let component: ColoreCrudComponent;
  let fixture: ComponentFixture<ColoreCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoreCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
