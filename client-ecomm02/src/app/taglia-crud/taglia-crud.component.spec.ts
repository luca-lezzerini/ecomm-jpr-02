import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliaCrudComponent } from './taglia-crud.component';

describe('TagliaCrudComponent', () => {
  let component: TagliaCrudComponent;
  let fixture: ComponentFixture<TagliaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagliaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagliaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
