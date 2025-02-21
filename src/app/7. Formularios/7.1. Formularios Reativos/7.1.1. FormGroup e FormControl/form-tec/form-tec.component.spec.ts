import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTecComponent } from './form-tec.component';

describe('FormTecComponent', () => {
  let component: FormTecComponent;
  let fixture: ComponentFixture<FormTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
