import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedizioneCRUDComponent } from './spedizione-crud.component';

describe('SpedizioneCRUDComponent', () => {
  let component: SpedizioneCRUDComponent;
  let fixture: ComponentFixture<SpedizioneCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpedizioneCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpedizioneCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
