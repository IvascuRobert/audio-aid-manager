import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { SharedModule } from '../shared/shared.module';
import { AccessoriesAddDialogComponent } from "./accessories-add-dialog/accessories-add-dialog.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { DevicesAddDialogComponent } from './devices-add-dialog/devices-add-dialog.component';
import { DevicesComponent } from "./devices/devices.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ServicesAddDialogComponent } from "./services-add-dialog/services-add-dialog.component";
import { ServicesComponent } from "./services/services.component";
import { UtilitiesAddDialogComponent } from './utilities-add-dialog/utilities-add-dialog.component';
import { UtilitiesComponent } from "./utilities/utilities.component";

@NgModule({
  declarations: [
    DevicesComponent,
    ServicesComponent,
    ServicesAddDialogComponent,
    AccessoriesComponent,
    AccessoriesAddDialogComponent,
    UtilitiesComponent,
    UtilitiesAddDialogComponent,
    DevicesAddDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule,
    SharedModule,
    NbDialogModule.forChild(),
    NbIconModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbFormFieldModule,
    NbSelectModule,
    NbRadioModule,
    NbButtonModule,
    NbSpinnerModule
  ],
})
export class ProductsModule { }
