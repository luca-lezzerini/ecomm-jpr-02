import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCRUDComponent } from './home-crud.component';

describe('HomeCRUDComponent', () => {
  let component: HomeCRUDComponent;
  let fixture: ComponentFixture<HomeCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
