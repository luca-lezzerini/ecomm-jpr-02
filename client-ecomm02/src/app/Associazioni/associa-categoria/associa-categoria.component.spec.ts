import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaCategoriaComponent } from './associa-categoria.component';

describe('AssociaCategoriaComponent', () => {
  let component: AssociaCategoriaComponent;
  let fixture: ComponentFixture<AssociaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
