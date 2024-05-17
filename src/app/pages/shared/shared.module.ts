import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbTagModule } from "@nebular/theme";
import { DeviceTypeCellComponent } from "./custom-table-cell-render/device-type-cell.component";

@NgModule({
  declarations: [DeviceTypeCellComponent],
  imports: [CommonModule, NbTagModule],
  exports: [DeviceTypeCellComponent],
})
export class SharedModule {}
