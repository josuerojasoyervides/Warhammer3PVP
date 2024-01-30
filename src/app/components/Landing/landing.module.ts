import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { StatColorPipe } from '../../pipes/stat-color.pipe'
import { SortByPipe } from '../../pipes/sortBy.pipe'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
    declarations: [ 
    LandingComponent
  ],
    imports: [ SharedModule, CommonModule, StatColorPipe, SortByPipe, NzIconModule, NzToolTipModule ],
    exports: [ LandingComponent ],
    providers: [ ],
})
export class LandingModule{}