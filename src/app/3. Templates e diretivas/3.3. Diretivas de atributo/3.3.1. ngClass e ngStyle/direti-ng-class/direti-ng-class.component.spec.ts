import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiNgClassComponent } from './direti-ng-class.component';

describe('DiretiNgClassComponent', () => {
  let component: DiretiNgClassComponent;
  let fixture: ComponentFixture<DiretiNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretiNgClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
