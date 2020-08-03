import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCRUDComponent } from './categoria-crud.component';

describe('CategoriaCRUDComponent', () => {
  let component: CategoriaCRUDComponent;
  let fixture: ComponentFixture<CategoriaCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
