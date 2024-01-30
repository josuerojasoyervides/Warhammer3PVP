import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-icon-hover',
  templateUrl: './icon-hover.component.html',
  styleUrl: './icon-hover.component.scss'
})
export class IconHoverComponent{
  @Input() text!: string;
}
