import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingAdvisingComponent } from './consulting-advising.component';

describe('ConsultingAdvisingComponent', () => {
  let component: ConsultingAdvisingComponent;
  let fixture: ComponentFixture<ConsultingAdvisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingAdvisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingAdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
