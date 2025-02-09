import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgSwitchComponent } from './diretiva-ng-switch.component';

describe('DiretivaNgSwitchComponent', () => {
  let component: DiretivaNgSwitchComponent;
  let fixture: ComponentFixture<DiretivaNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
