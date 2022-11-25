import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanableLaboratoryComponent } from './sanable-laboratory.component';

describe('SanableLaboratoryComponent', () => {
  let component: SanableLaboratoryComponent;
  let fixture: ComponentFixture<SanableLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanableLaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanableLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
