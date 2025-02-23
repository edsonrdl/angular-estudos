import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOInitComponent } from './ng-oinit.component';

describe('NgOInitComponent', () => {
  let component: NgOInitComponent;
  let fixture: ComponentFixture<NgOInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
