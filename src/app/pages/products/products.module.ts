import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { DevicesComponent } from "./devices/devices.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ServicesComponent } from "./services/services.component";
import { UtilitiesComponent } from "./utilities/utilities.component";

@NgModule({
  declarations: [
    DevicesComponent,
    ServicesComponent,
    AccessoriesComponent,
    UtilitiesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
  ],
})
export class ProductsModule {}
