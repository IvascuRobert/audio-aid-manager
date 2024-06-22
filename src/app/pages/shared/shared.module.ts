import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbPopoverModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbTagModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { AccessoryStatusCellComponent } from "./custom-table-cell-render/accessory-status-cell.component";
import { ActionsCellComponent } from "./custom-table-cell-render/actions-cell.component";
import { AgeCellComponent } from "./custom-table-cell-render/age-cell.component";
import { BoldTextCellComponent } from "./custom-table-cell-render/bold-text-cell.component";
import { ColorCellComponent } from "./custom-table-cell-render/color-cell.component";
import { CustomerStatusCellComponent } from "./custom-table-cell-render/customer-status-cell.component";
import { DateCellComponent } from "./custom-table-cell-render/date-cell.component";
import { EmailCellComponent } from "./custom-table-cell-render/email-cell.component";
import { GenderCellComponent } from "./custom-table-cell-render/gender-cell.component";
import { PhoneCellComponent } from "./custom-table-cell-render/phone-cell.component";
import { PriceCellComponent } from "./custom-table-cell-render/price-cell.component";
import { ProcessStatusCellComponent } from "./custom-table-cell-render/process-status-cell.component";
import { RoleCellComponent } from "./custom-table-cell-render/role-cell.component";
import { RemoveDialogComponent } from "./remove-dialog/remove-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbTagModule,
    NbButtonModule,
    NbPopoverModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbContextMenuModule,
    NbSpinnerModule,
  ],
  declarations: [
    AgeCellComponent,
    PhoneCellComponent,
    CustomerStatusCellComponent,
    DateCellComponent,
    EmailCellComponent,
    ProcessStatusCellComponent,
    BoldTextCellComponent,
    GenderCellComponent,
    PriceCellComponent,
    AccessoryStatusCellComponent,
    ColorCellComponent,
    RoleCellComponent,
    ActionsCellComponent,
    RemoveDialogComponent,
  ],
  exports: [
    AgeCellComponent,
    PhoneCellComponent,
    CustomerStatusCellComponent,
    DateCellComponent,
    EmailCellComponent,
    ProcessStatusCellComponent,
    BoldTextCellComponent,
    GenderCellComponent,
    PriceCellComponent,
    AccessoryStatusCellComponent,
    ColorCellComponent,
    RoleCellComponent,
    ActionsCellComponent,
    RemoveDialogComponent,
  ],
})
export class SharedModule {}
