import { NgModule} from "@angular/core";
import { SelectBoxComponent } from './select-box/select-box.component'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IconHoverComponent } from './icon-hover/icon-hover.component';

@NgModule({
    declarations:[
            SelectBoxComponent,
            IconHoverComponent
        ],
    imports:[CommonModule, FormsModule],
    exports:[SelectBoxComponent, IconHoverComponent],
    bootstrap: []
})
export class SharedModule {}