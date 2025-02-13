import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasedPolicyComponent } from './component-based-policy.component';

describe('ComponentBasedPolicyComponent', () => {
  let component: ComponentBasedPolicyComponent;
  let fixture: ComponentFixture<ComponentBasedPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBasedPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBasedPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
