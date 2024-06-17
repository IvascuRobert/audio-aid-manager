import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NbCardModule, NbSelectModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { CustomerApportunityComponent } from "./customer-apportunity/customer-apportunity.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerApportunityComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule
  ],
})
export class CustomersModule {}
