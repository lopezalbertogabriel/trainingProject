import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePreferenceComponent } from './create-preference.component';

describe('CreatePreferenceComponent', () => {
  let component: CreatePreferenceComponent;
  let fixture: ComponentFixture<CreatePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
