import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEnergySolutionsComponent } from './solar-energy-solutions.component';

describe('SolarEnergySolutionsComponent', () => {
  let component: SolarEnergySolutionsComponent;
  let fixture: ComponentFixture<SolarEnergySolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarEnergySolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarEnergySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
