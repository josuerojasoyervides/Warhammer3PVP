import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { StatColorPipe } from '../../pipes/stat-color.pipe'
import { SortByPipe } from '../../pipes/sortBy.pipe'

@NgModule({
    declarations: [ 
    LandingComponent
  ],
    imports: [ SharedModule, CommonModule, StatColorPipe, SortByPipe ],
    exports: [ LandingComponent ],
    providers: [ ],
})
export class LandingModule{}