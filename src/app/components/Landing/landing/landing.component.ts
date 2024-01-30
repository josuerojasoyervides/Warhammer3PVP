import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
// ? Data
import { races } from "../../../Mock/races"
import { counters } from "../../../Mock/counters"
import { countered } from "../../../Mock/countered"
// ? Interfaces
import { IRace } from '../../../models/race.interface';
import { ICounters } from '../../../models/counters.interface';
import { IRaceMilitaryStats } from '../../../models/race_military.interface';
import { ICountered } from '../../../models/countered.interface';

interface BackgroundStyles {
  [key: string]: string;
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit  {

  racesArray: IRace[] = races
  leftRace!: IRace
  rightRace!: IRace
  leftPotential!: IRaceMilitaryStats
  rightPotential!: IRaceMilitaryStats
  leftCounterPotential!: IRaceMilitaryStats
  rightCounterPotential!: IRaceMilitaryStats
  counterStatValue!: IRaceMilitaryStats
  counteredStatValue!: IRaceMilitaryStats
  @ViewChild('left_bg') leftBg!: ElementRef;
  @ViewChild('right_bg') rightBg!: ElementRef;
  counters: ICounters = counters
  countered: ICountered = countered

  constructor(private renderer: Renderer2){}

  ngOnInit(): void {
    this.counterStatValue = this.sumOfStats(this.counters);
    this.counteredStatValue = this.sumOfStats(this.countered);
    
  }
  sumOfStats(counters: ICounters): IRaceMilitaryStats {
    const avgResults: IRaceMilitaryStats = {} as IRaceMilitaryStats;
    for (const key in counters) {
      if (counters.hasOwnProperty(key)) {
        avgResults[key as keyof typeof counters] = this.calculateSum(counters[key as keyof typeof counters]);
      }
    }    
    return avgResults;
  }


/* 
  ? 1: Calculate allie's potential per each area
  ? 2: Calculate enemie's potential per each area
  ? 3: Sort enemie's potential
  ? 3: Get best counters for each area
  ? 4: Calculate best counters for enemie's potential
*/

  selectRace(id: number, racesArray: IRace[], isLeft: boolean): void {
    const selectedRace = racesArray[id - 1];
    if (isLeft){      
      this.leftRace = selectedRace;
      this.selectAndChangeBg(selectedRace, this.leftBg, "left", "0");
      this.calculate(this.leftRace, true)
    } else {      
      this.rightRace = selectedRace;
      this.selectAndChangeBg(selectedRace, this.rightBg, "right", "0");
      this.calculate(this.rightRace, false)
    }

    
  }

  private calculate(race: IRace, isLeft: boolean){
    if(this.leftRace && this.rightRace) {
      this.calculatePotential(this.leftRace, false, this.rightRace)
    }
  }
  private calculatePotential(race: IRace, isLeft: boolean, enemyRace: IRace){
    
    for (const key in this.counters) {
      if (Object.prototype.hasOwnProperty.call(this.counters, key)) {
        const element = this.counters[key as keyof typeof this.counters];
      }
    }
  }


  private calculateSum(element: IRaceMilitaryStats): number {
    return Object.values(element).reduce((acc, value) => acc + value, 0);
  }
  private selectAndChangeBg(selectedRace: IRace, bgElement: ElementRef, key: string, value: string): void {
    const styles = this.createBackgroundStyles(selectedRace, key, value);    
    this.applyStyles(bgElement, styles);
  }
  private createBackgroundStyles(race: IRace, key: string, value: string): BackgroundStyles {
    return {
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${race.imagePath})`,
      'background-size': '180% 100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'width': '50%',
      'height': '100vh',
      'position': 'fixed',
      'top': '0',
      [key]: value,
    };
  }
  private applyStyles(elementRef: ElementRef, styles: BackgroundStyles): void {    
    Object.entries(styles).forEach(([property, value]) => {      
      this.renderer.setStyle(elementRef.nativeElement, property, value);
    });
  }
}
