import { NgModule} from "@angular/core";
import { SelectBoxComponent } from './select-box/select-box.component'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
            SelectBoxComponent
        ],
    imports:[CommonModule, FormsModule],
    exports:[SelectBoxComponent],
    bootstrap: []
})
export class SharedModule {}