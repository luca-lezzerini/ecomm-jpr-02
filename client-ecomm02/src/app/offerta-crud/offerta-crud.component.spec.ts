import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertaCrudComponent } from './offerta-crud.component';

describe('OffertaCrudComponent', () => {
  let component: OffertaCrudComponent;
  let fixture: ComponentFixture<OffertaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
