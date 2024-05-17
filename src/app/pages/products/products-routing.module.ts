import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { DevicesComponent } from "./devices/devices.component";
import { ServicesComponent } from "./services/services.component";
import { UtilitiesComponent } from "./utilities/utilities.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "devices",
        component: DevicesComponent,
      },
      {
        path: "accessories",
        component: AccessoriesComponent,
      },
      {
        path: "utilities",
        component: UtilitiesComponent,
      },
      {
        path: "services",
        component: ServicesComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
