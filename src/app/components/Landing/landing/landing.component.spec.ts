import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { races } from "../../../Mock/races"
import { counters } from "../../../Mock/counters"
import { ICounters } from '../../../models/counters.interface';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with races', () => {
    expect(component.racesArray).toEqual(races);
  });

  it('should initialize counters', () => {
    expect(component.counters).toEqual(counters);
  });

  it('should calculate the sum of stats correctly', () => {
    const result = component.sumOfStats(component.counters);
    expect(result).toBeDefined();
  });

  it('should calculate the sum correctly', () => {
    const testStats = { 
      archery: 1,
      antilarge: 2,
      artillery: 3,
      cavalry: 4,
      magic: 5,
      monsters: 6,
      missiles: 7,
      flyingUnits: 8,
      flyingMonsters: 9,
      frontline: 10,
      swordsmen: 11,
    };
    const result = component.calculateSum(testStats);
    expect(result).toEqual(66);
  });

  it('should select and change background on selecting a race', () => {
    const mockRace = races[0];
    component.selectRace(1, component.racesArray, true);
    expect(component.leftRace).toEqual(mockRace);
  });
});