import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbFormFieldModule,
  NbIconModule,
  NbPopoverModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbTagModule,
  NbTooltipModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { CustomActionsComponent } from "./components/custom-actions/custom-actions.component";
import { AccessoryStatusCellComponent } from "./components/custom-table-cell-render/accessory-status-cell.component";
import { ActionsCellComponent } from "./components/custom-table-cell-render/actions-cell.component";
import { AgeCellComponent } from "./components/custom-table-cell-render/age-cell.component";
import { BoldTextCellComponent } from "./components/custom-table-cell-render/bold-text-cell.component";
import { ColorCellComponent } from "./components/custom-table-cell-render/color-cell.component";
import { CommentCellComponent } from "./components/custom-table-cell-render/comment-cell.component";
import { CustomerStatusCellComponent } from "./components/custom-table-cell-render/customer-status-cell.component";
import { DateCellComponent } from "./components/custom-table-cell-render/date-cell.component";
import { EmailCellComponent } from "./components/custom-table-cell-render/email-cell.component";
import { GenderCellComponent } from "./components/custom-table-cell-render/gender-cell.component";
import { PhoneCellComponent } from "./components/custom-table-cell-render/phone-cell.component";
import { PriceCellComponent } from "./components/custom-table-cell-render/price-cell.component";
import { ProcessStatusCellComponent } from "./components/custom-table-cell-render/process-status-cell.component";
import { RoleCellComponent } from "./components/custom-table-cell-render/role-cell.component";
import { RemoveDialogComponent } from "./components/remove-dialog/remove-dialog.component";
import { SettingsDialogComponent } from "./components/settings-dialog/settings-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
    NbActionsModule,
    NbTooltipModule,
    NbSelectModule,
    NbFormFieldModule,
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
    CustomActionsComponent,
    CommentCellComponent,
    SettingsDialogComponent,
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
    CustomActionsComponent,
    CommentCellComponent,
    SettingsDialogComponent,
  ],
})
export class SharedModule {}
