import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { races } from "../../../Mock/races"
import { IRace } from '../../../models/race.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit  {

  constructor(private renderer: Renderer2){}

  racesArray: IRace[] = races
  left_race!: IRace
  right_race!: IRace
  @ViewChild('left_bg') left_bg!: ElementRef;
  @ViewChild('right_bg') right_bg!: ElementRef;
  ngOnInit(): void {
  }

  selected_race_left(id: number): void {
    this.left_race = this.racesArray[id-1]
    this.change_bg_left();
    this.show_stats_left();
  }
  
  selected_race_right(id: number): void {
    this.right_race = this.racesArray[id-1]
    this.change_bg_right();
    this.show_stats_right();
  }

  change_bg_left(): void {
    this.renderer.setStyle(this.left_bg.nativeElement, 'background-image', `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.left_race.image_path})`)
    this.renderer.setStyle(this.left_bg.nativeElement, 'background-size', "180% 100%")
    this.renderer.setStyle(this.left_bg.nativeElement, 'background-position', "center")
    this.renderer.setStyle(this.left_bg.nativeElement, 'background-repeat', "no-repeat")
    this.renderer.setStyle(this.left_bg.nativeElement, 'width', "100%")
    this.renderer.setStyle(this.left_bg.nativeElement, 'height', "100vh")
    this.renderer.setStyle(this.left_bg.nativeElement, 'position', "fixed")
    this.renderer.setStyle(this.left_bg.nativeElement, 'top', "0")
    this.renderer.setStyle(this.left_bg.nativeElement, 'left', "-25%")
  }
  change_bg_right(): void {
    this.renderer.setStyle(this.right_bg.nativeElement, 'background-image', `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.right_race.image_path})`)
    this.renderer.setStyle(this.right_bg.nativeElement, 'background-size', "180% 100%")
    this.renderer.setStyle(this.right_bg.nativeElement, 'background-position', "center")
    this.renderer.setStyle(this.right_bg.nativeElement, 'background-repeat', "no-repeat")
    this.renderer.setStyle(this.right_bg.nativeElement, 'width', "50%")
    this.renderer.setStyle(this.right_bg.nativeElement, 'height', "100vh")
    this.renderer.setStyle(this.right_bg.nativeElement, 'position', "fixed")
    this.renderer.setStyle(this.right_bg.nativeElement, 'top', "0")
    this.renderer.setStyle(this.right_bg.nativeElement, 'right', "0")
  }

  show_stats_left():void {
    
  }
  show_stats_right():void {
    
  }
}
