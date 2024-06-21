import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTooltipModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { CustomerAddDialogComponent } from "./customer-add-dialog/customer-add-dialog.component";
import { CustomerApportunityComponent } from "./customer-apportunity/customer-apportunity.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerApportunityComponent,
    CustomerAddDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbDatepickerModule,
    NbSpinnerModule,
    NbRadioModule,
    NbFormFieldModule,
    NbTooltipModule,
  ],
})
export class CustomersModule {}
