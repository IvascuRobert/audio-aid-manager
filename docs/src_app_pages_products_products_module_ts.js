"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 6785:
/*!*********************************************************************!*\
  !*** ./src/app/pages/products/accessories/accessories.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessoriesComponent": () => (/* binding */ AccessoriesComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/accessory-status-cell.component */ 1949);
/* harmony import */ var _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/price-cell.component */ 41681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);










function AccessoriesComponent_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
class AccessoriesComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        status: {
          title: "Status",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_2__.AccessoryStatusCellComponent
        },
        group: {
          title: "Group",
          type: "string"
        },
        serialNumber: {
          title: "Serial number",
          type: "string"
        },
        name: {
          title: "Name",
          type: "string"
        },
        brand: {
          title: "Brand",
          type: "string"
        },
        type: {
          title: "Type",
          type: "string"
        },
        price: {
          title: "Price",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__.PriceCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string"
        },
        customer: {
          title: "Customer",
          type: "string"
        }
      }
    };
    this.hiddenColumns = ["price"];
    this.selectedColumns = [];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.LocalDataSource();
    const data = this.service.getData().accessories;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }
  handleSelectedColumns(columns) {
    this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
    (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.setItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.accessories, columns);
  }
  loadTableSettingsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.getItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.accessories);
    if (columns) {
      this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
      this.selectedColumns = columns;
    }
  }
  static #_ = this.ɵfac = function AccessoriesComponent_Factory(t) {
    return new (t || AccessoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_4__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AccessoriesComponent,
    selectors: [["ngx-accessories"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], ["fullWidth", "", "multiple", "", "placeholder", "Columns", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "settings", "source"], [3, "value"]],
    template: function AccessoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "div", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "nb-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function AccessoriesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.selectedColumns = $event;
        })("selectedChange", function AccessoriesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.handleSelectedColumns($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AccessoriesComponent_nb_option_8_Template, 2, 2, "nb-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ng2-smart-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.selectedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.hiddenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbOptionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10788:
/*!*************************************************************!*\
  !*** ./src/app/pages/products/devices/devices.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesComponent": () => (/* binding */ DevicesComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/price-cell.component */ 41681);
/* harmony import */ var _shared_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/color-cell.component */ 21559);
/* harmony import */ var _shared_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/accessory-status-cell.component */ 1949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);











function DevicesComponent_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
class DevicesComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        status: {
          title: "Status",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_4__.AccessoryStatusCellComponent
        },
        group: {
          title: "Group",
          type: "string"
        },
        brand: {
          title: "Brand",
          type: "string"
        },
        name: {
          title: "Name",
          type: "string"
        },
        serialNumber: {
          title: "Serial Number",
          type: "string"
        },
        type: {
          title: "Type",
          type: "string"
        },
        battery: {
          title: "Battery",
          type: "string"
        },
        qualityLevel: {
          title: "Quality Level",
          type: "string"
        },
        color: {
          title: "Color",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_3__.ColorCellComponent
        },
        aslGroup: {
          title: "ASL Group",
          type: "string",
          hide: true
        },
        price: {
          title: "Price",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_2__.PriceCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string",
          hide: true
        },
        customer: {
          title: "Customer",
          type: "string",
          hide: true
        }
      }
    };
    this.hiddenColumns = ["aslGroup", "location", "price", "customer"];
    this.selectedColumns = [];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.LocalDataSource();
    const data = this.service.getData().devices;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }
  handleSelectedColumns(columns) {
    this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
    (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.setItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.devices, columns);
  }
  loadTableSettingsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.getItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.devices);
    if (columns) {
      this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
      this.selectedColumns = columns;
    }
  }
  static #_ = this.ɵfac = function DevicesComponent_Factory(t) {
    return new (t || DevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DevicesComponent,
    selectors: [["ngx-devices"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], ["fullWidth", "", "multiple", "", "placeholder", "Columns", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "settings", "source"], [3, "value"]],
    template: function DevicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "div", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2)(7, "nb-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function DevicesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.selectedColumns = $event;
        })("selectedChange", function DevicesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.handleSelectedColumns($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DevicesComponent_nb_option_8_Template, 2, 2, "nb-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ng2-smart-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.selectedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.hiddenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29679:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/layout.component */ 37703);
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessories/accessories.component */ 6785);
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices/devices.component */ 10788);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 40445);
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/utilities.component */ 11412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{
  path: "",
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: "devices",
    component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_2__.DevicesComponent
  }, {
    path: "accessories",
    component: _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_1__.AccessoriesComponent
  }, {
    path: "utilities",
    component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__.UtilitiesComponent
  }, {
    path: "services",
    component: _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent
  }]
}];
class ProductsRoutingModule {
  static #_ = this.ɵfac = function ProductsRoutingModule_Factory(t) {
    return new (t || ProductsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ProductsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 95712:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessories/accessories.component */ 6785);
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices/devices.component */ 10788);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ 29679);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 40445);
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/utilities.component */ 11412);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










class ProductsModule {
  static #_ = this.ɵfac = function ProductsModule_Factory(t) {
    return new (t || ProductsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ProductsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductsRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductsModule, {
    declarations: [_devices_devices_component__WEBPACK_IMPORTED_MODULE_1__.DevicesComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent, _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_0__.AccessoriesComponent, _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__.UtilitiesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductsRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 40445:
/*!***************************************************************!*\
  !*** ./src/app/pages/products/services/services.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);





class ServicesComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
      },
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        name: {
          title: "Last Name",
          type: "string"
        },
        price: {
          // optional
          title: "Age",
          type: "number"
        },
        brand: {
          title: "Username",
          type: "string"
        },
        quantity: {
          title: "Username",
          type: "string"
        },
        type: {
          title: "E-mail",
          type: "string"
        },
        location: {
          title: "E-mail",
          type: "string"
        },
        customer: {
          title: "E-mail",
          type: "string"
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    const data = this.service.getData();
    this.source.load(data);
  }
  onDeleteConfirm(event) {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["ngx-services"]],
    decls: 5,
    vars: 2,
    consts: [[3, "settings", "source", "deleteConfirm"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Smart Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteConfirm", function ServicesComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) {
          return ctx.onDeleteConfirm($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11412:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/utilities/utilities.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesComponent": () => (/* binding */ UtilitiesComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/custom-table-cell-render/price-cell.component */ 41681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);









function UtilitiesComponent_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
class UtilitiesComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        type: {
          title: "Type",
          type: "string"
        },
        name: {
          title: "Name",
          type: "string"
        },
        brand: {
          title: "Brand",
          type: "string"
        },
        quantity: {
          title: "Quantity",
          type: "string"
        },
        price: {
          title: "Price",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_2__.PriceCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string"
        }
      }
    };
    this.hiddenColumns = ["price"];
    this.selectedColumns = [];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.LocalDataSource();
    const data = this.service.getData().utilities;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }
  handleSelectedColumns(columns) {
    this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
    (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.setItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.utilities, columns);
  }
  loadTableSettingsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.getItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.utilities);
    if (columns) {
      this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
      this.selectedColumns = columns;
    }
  }
  static #_ = this.ɵfac = function UtilitiesComponent_Factory(t) {
    return new (t || UtilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: UtilitiesComponent,
    selectors: [["ngx-utilities"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], ["fullWidth", "", "multiple", "", "placeholder", "Columns", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "settings", "source"], [3, "value"]],
    template: function UtilitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "div", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "nb-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function UtilitiesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.selectedColumns = $event;
        })("selectedChange", function UtilitiesComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.handleSelectedColumns($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UtilitiesComponent_nb_option_8_Template, 2, 2, "nb-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ng2-smart-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.selectedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hiddenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbOptionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1949:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/accessory-status-cell.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessoryStatusCellComponent": () => (/* binding */ AccessoryStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_accessory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/accessory */ 15104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);




const _c0 = function (a0) {
  return {
    value: a0
  };
};
function AccessoryStatusCellComponent_nb_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r5)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.value))("text", ctx_r0.value)("size", "tiny");
  }
}
function AccessoryStatusCellComponent_nb_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r7)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.value))("text", ctx_r1.value)("size", "tiny");
  }
}
function AccessoryStatusCellComponent_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r9)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.value))("text", ctx_r2.value)("size", "tiny");
  }
}
function AccessoryStatusCellComponent_nb_tag_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r11)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r3.value))("text", ctx_r3.value)("size", "tiny");
  }
}
function AccessoryStatusCellComponent_nb_tag_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 15);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r11)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r4.value))("text", ctx_r4.value)("size", "tiny");
  }
}
function AccessoryStatusCellComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 16)(1, "nb-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r15.value, " ");
  }
}
function AccessoryStatusCellComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 18)(1, "nb-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r16.value, " ");
  }
}
function AccessoryStatusCellComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 19)(1, "nb-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r17.value, " ");
  }
}
function AccessoryStatusCellComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 20)(1, "nb-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r18.value, " ");
  }
}
function AccessoryStatusCellComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 16)(1, "nb-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r19.value, " ");
  }
}
class AccessoryStatusCellComponent {
  constructor() {
    this.accessoryStatusTpl = _core_data_accessory__WEBPACK_IMPORTED_MODULE_0__.AccessoryStatus;
  }
  static #_ = this.ɵfac = function AccessoryStatusCellComponent_Factory(t) {
    return new (t || AccessoryStatusCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AccessoryStatusCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 16,
    vars: 6,
    consts: [[3, "ngSwitch"], ["status", "warning", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["status", "basic", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["status", "danger", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["status", "primary", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["status", "success", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["ccRef", ""], ["clRef", ""], ["noRef", ""], ["pcRef", ""], ["defaultRef", ""], ["status", "warning", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["status", "basic", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["status", "danger", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["status", "primary", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["status", "success", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["accent", "basic", 1, "popover-card"], ["status", "warning"], ["accent", "primary", 1, "popover-card"], ["accent", "success", 1, "popover-card"], ["accent", "warning", 1, "popover-card"]],
    template: function AccessoryStatusCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-tag-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccessoryStatusCellComponent_nb_tag_1_Template, 1, 6, "nb-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AccessoryStatusCellComponent_nb_tag_2_Template, 1, 6, "nb-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AccessoryStatusCellComponent_nb_tag_3_Template, 1, 6, "nb-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AccessoryStatusCellComponent_nb_tag_4_Template, 1, 6, "nb-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AccessoryStatusCellComponent_nb_tag_5_Template, 1, 6, "nb-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccessoryStatusCellComponent_ng_template_6_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccessoryStatusCellComponent_ng_template_8_Template, 5, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AccessoryStatusCellComponent_ng_template_10_Template, 5, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AccessoryStatusCellComponent_ng_template_12_Template, 5, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AccessoryStatusCellComponent_ng_template_14_Template, 5, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.accessoryStatusTpl.free);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.accessoryStatusTpl.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.accessoryStatusTpl.reserved);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.accessoryStatusTpl.trial);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.accessoryStatusTpl.sold);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2N1c3RvbS10YWJsZS1jZWxsLXJlbmRlci9hY2Nlc3Nvcnktc3RhdHVzLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFNBQVM7UUFDVCxnQkFBZ0I7TUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG5iLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1heC13aWR0aDogMjByZW07XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21559:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/color-cell.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorCellComponent": () => (/* binding */ ColorCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);



const _c0 = function (a0) {
  return {
    color: a0
  };
};
class ColorCellComponent {
  static #_ = this.ɵfac = function ColorCellComponent_Factory(t) {
    return new (t || ColorCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ColorCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 1,
    vars: 3,
    consts: [["icon", "color-palette", 3, "ngStyle"]],
    template: function ColorCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.value));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 41681:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/price-cell.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceCellComponent": () => (/* binding */ PriceCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


class PriceCellComponent {
  static #_ = this.ɵfac = function PriceCellComponent_Factory(t) {
    return new (t || PriceCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PriceCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 4,
    template: function PriceCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "currency");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx.value, "EUR"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40950:
/*!***********************************************!*\
  !*** ./src/app/pages/shared/shared.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nebular/eva-icons */ 39557);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-table-cell-render/accessory-status-cell.component */ 1949);
/* harmony import */ var _custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-table-cell-render/actions-cell.component */ 28204);
/* harmony import */ var _custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-table-cell-render/age-cell.component */ 44759);
/* harmony import */ var _custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-table-cell-render/bold-text-cell.component */ 43691);
/* harmony import */ var _custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-table-cell-render/color-cell.component */ 21559);
/* harmony import */ var _custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-table-cell-render/customer-status-cell.component */ 22122);
/* harmony import */ var _custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-table-cell-render/date-cell.component */ 11808);
/* harmony import */ var _custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-table-cell-render/email-cell.component */ 24502);
/* harmony import */ var _custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-table-cell-render/gender-cell.component */ 53161);
/* harmony import */ var _custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-table-cell-render/phone-cell.component */ 59209);
/* harmony import */ var _custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-table-cell-render/price-cell.component */ 41681);
/* harmony import */ var _custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-table-cell-render/process-status-cell.component */ 79555);
/* harmony import */ var _custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-table-cell-render/role-cell.component */ 19190);
/* harmony import */ var _remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove-dialog/remove-dialog.component */ 60302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);



















class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbTagModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_18__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_3__.AgeCellComponent, _custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_10__.PhoneCellComponent, _custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_6__.CustomerStatusCellComponent, _custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_7__.DateCellComponent, _custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_8__.EmailCellComponent, _custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_12__.ProcessStatusCellComponent, _custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_4__.BoldTextCellComponent, _custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_9__.GenderCellComponent, _custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_11__.PriceCellComponent, _custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__.AccessoryStatusCellComponent, _custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_5__.ColorCellComponent, _custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_13__.RoleCellComponent, _custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__.ActionsCellComponent, _remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_14__.RemoveDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbTagModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_18__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__.NbSpinnerModule],
    exports: [_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_3__.AgeCellComponent, _custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_10__.PhoneCellComponent, _custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_6__.CustomerStatusCellComponent, _custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_7__.DateCellComponent, _custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_8__.EmailCellComponent, _custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_12__.ProcessStatusCellComponent, _custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_4__.BoldTextCellComponent, _custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_9__.GenderCellComponent, _custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_11__.PriceCellComponent, _custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__.AccessoryStatusCellComponent, _custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_5__.ColorCellComponent, _custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_13__.RoleCellComponent, _custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__.ActionsCellComponent, _remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_14__.RemoveDialogComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map