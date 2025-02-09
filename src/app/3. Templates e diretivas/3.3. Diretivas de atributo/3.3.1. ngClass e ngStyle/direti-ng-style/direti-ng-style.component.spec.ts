import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiNgStyleComponent } from './direti-ng-style.component';

describe('DiretiNgStyleComponent', () => {
  let component: DiretiNgStyleComponent;
  let fixture: ComponentFixture<DiretiNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretiNgStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
