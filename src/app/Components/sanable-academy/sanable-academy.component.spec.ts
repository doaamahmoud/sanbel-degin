import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanableAcademyComponent } from './sanable-academy.component';

describe('SanableAcademyComponent', () => {
  let component: SanableAcademyComponent;
  let fixture: ComponentFixture<SanableAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanableAcademyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanableAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
