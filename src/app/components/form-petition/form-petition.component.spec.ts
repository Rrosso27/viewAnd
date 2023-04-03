import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPetitionComponent } from './form-petition.component';

describe('FormPetitionComponent', () => {
  let component: FormPetitionComponent;
  let fixture: ComponentFixture<FormPetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
