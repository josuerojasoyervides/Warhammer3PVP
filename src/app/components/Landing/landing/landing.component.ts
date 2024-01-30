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
  raceHover: string = "0 of 5: lacks of that unit\n1 of 5: so worthless as it they dont have\n2 of 5: weak units\n3 of 5: gets job done\n4 of 5: excels\n5 of 5: MVP"

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
  selectRace(id: number, racesArray: IRace[], isLeft: boolean): void {
    const selectedRace = racesArray[id - 1];
    const targetRace = isLeft ? this.leftRace : this.rightRace;
    const targetBg = isLeft ? this.leftBg : this.rightBg;
    
    this.updateRaceAndBackground(selectedRace, targetRace, targetBg, isLeft);
    this.calculate(targetRace, !isLeft);
  }
  private updateRaceAndBackground(selectedRace: IRace, targetRace: IRace, targetBg: ElementRef, isLeft: boolean): void {
    if (isLeft) {
      this.leftRace = selectedRace;
    } else {
      this.rightRace = selectedRace;
    }
    
    if(this.isMobileView()){
      this.selectAndChangeBg(selectedRace, targetBg, isLeft ? "top" : "bottom", "0");
    } else {
      this.selectAndChangeBg(selectedRace, targetBg, isLeft ? "left" : "right", "0");
    }

  }
  private calculate(race: IRace, isLeft: boolean): void{
    if(this.leftRace && this.rightRace) {
      this.calculatePotential(this.leftRace, false, this.rightRace)
    }
  }
  private calculatePotential(race: IRace, isLeft: boolean, enemyRace: IRace): void{
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
    const styles = this.isMobileView() ? 
    this.createSPBackgroundStyles(selectedRace, key, value) : 
    this.createPCBackgroundStyles(selectedRace, key, value);

  this.applyStyles(bgElement, styles);
  }
  isMobileView(): boolean{
    console.log(this.vw());
    return this.vw() <= 1200;
  }
  private vw(): number{
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  private createPCBackgroundStyles(race: IRace, key: string, value: string): BackgroundStyles {
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
  private createSPBackgroundStyles(race: IRace, key: string, value: string): BackgroundStyles {
    console.log(key);
    return {
      'width': '100dvw',
      'height': '50%',
      'position': 'fixed',
      'left': '0',
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${race.imagePath})`,
      'background-size': '100% 200%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      [key]: value,
    };
  }
  private applyStyles(elementRef: ElementRef, styles: BackgroundStyles): void {    
    Object.entries(styles).forEach(([property, value]) => {      
      this.renderer.setStyle(elementRef.nativeElement, property, value);
    });
  }
}
