import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { IRace } from '../../models/race.interface'

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SelectBoxComponent  {
  
  @Input() races!: IRace[];
  @Output() selected_race: EventEmitter<number> = new EventEmitter()
  private _selected_id: number = 0;
  public get selected_id(): number {
    return this._selected_id;
  }
  public set selected_id(value: number) {
    this._selected_id = value
    this.selected_race.emit(this._selected_id)
  }

}
