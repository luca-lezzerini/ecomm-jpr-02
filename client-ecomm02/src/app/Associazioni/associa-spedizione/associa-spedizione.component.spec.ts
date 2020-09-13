import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaSpedizioneComponent } from './associa-spedizione.component';

describe('AssociaSpedizioneComponent', () => {
  let component: AssociaSpedizioneComponent;
  let fixture: ComponentFixture<AssociaSpedizioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociaSpedizioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaSpedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
