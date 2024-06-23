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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/accessory-status-cell.component */ 31802);
/* harmony import */ var _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/actions-cell.component */ 78711);
/* harmony import */ var _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/price-cell.component */ 6515);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);











class AccessoriesComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_4__.BaseTable {
  constructor(service, dialogService) {
    super(dialogService);
    this.service = service;
    this.dialogService = dialogService;
    this.settings = {
      selectMode: "multi",
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        status: {
          title: "Status",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__.AccessoryStatusCellComponent
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
          renderComponent: _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__.PriceCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string"
        },
        customer: {
          title: "Customer",
          type: "string"
        },
        actions: {
          title: "Actions",
          type: "custom",
          width: "1%",
          renderComponent: _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__.ActionsCellComponent,
          sort: false,
          filter: false
        }
      }
    };
    this.localStorageSettingsKey = _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_KEYS_FOR_TABLE.accessories;
    this.hiddenColumns = ["price"];
    this.selectedColumns = [];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.LocalDataSource();
    const data = this.service.getData().accessories;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function AccessoriesComponent_Factory(t) {
    return new (t || AccessoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AccessoriesComponent,
    selectors: [["ngx-accessories"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 4,
    consts: [[3, "selectedRows", "handleRemoveAction", "handleReloadAction", "handleSettingsAction"], [1, "row", "align-items-center"], [1, "col-8"], [3, "settings", "source", "rowSelect"]],
    template: function AccessoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "nb-card-body")(4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("handleRemoveAction", function AccessoriesComponent_Template_ngx_custom_actions_handleRemoveAction_4_listener() {
          return ctx.removeItem();
        })("handleReloadAction", function AccessoriesComponent_Template_ngx_custom_actions_handleReloadAction_4_listener() {
          return ctx.reload();
        })("handleSettingsAction", function AccessoriesComponent_Template_ngx_custom_actions_handleSettingsAction_4_listener() {
          return ctx.settingsDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "nb-card-body")(12, "ng2-smart-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("rowSelect", function AccessoriesComponent_Template_ng2_smart_table_rowSelect_12_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_6__.CustomActionsComponent],
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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/accessory-status-cell.component */ 31802);
/* harmony import */ var _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/actions-cell.component */ 78711);
/* harmony import */ var _shared_components_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/color-cell.component */ 93120);
/* harmony import */ var _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/price-cell.component */ 6515);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);












class DevicesComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_5__.BaseTable {
  constructor(service, dialogService) {
    super(dialogService);
    this.service = service;
    this.dialogService = dialogService;
    this.settings = {
      selectMode: "multi",
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number"
        },
        status: {
          title: "Status",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_1__.AccessoryStatusCellComponent
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
          renderComponent: _shared_components_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_3__.ColorCellComponent
        },
        aslGroup: {
          title: "ASL Group",
          type: "string",
          hide: true
        },
        price: {
          title: "Price",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_4__.PriceCellComponent,
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
        },
        actions: {
          title: "Actions",
          type: "custom",
          width: "1%",
          renderComponent: _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__.ActionsCellComponent,
          sort: false,
          filter: false
        }
      }
    };
    this.localStorageSettingsKey = _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_KEYS_FOR_TABLE.devices;
    this.hiddenColumns = ["aslGroup", "location", "price", "customer"];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.LocalDataSource();
    const data = this.service.getData().devices;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function DevicesComponent_Factory(t) {
    return new (t || DevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_6__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: DevicesComponent,
    selectors: [["ngx-devices"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 4,
    consts: [[3, "selectedRows", "handleRemoveAction", "handleReloadAction", "handleSettingsAction"], [1, "row", "align-items-center"], [1, "col-8"], [3, "settings", "source", "rowSelect"]],
    template: function DevicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-card-body")(4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("handleRemoveAction", function DevicesComponent_Template_ngx_custom_actions_handleRemoveAction_4_listener() {
          return ctx.removeItem();
        })("handleReloadAction", function DevicesComponent_Template_ngx_custom_actions_handleReloadAction_4_listener() {
          return ctx.reload();
        })("handleSettingsAction", function DevicesComponent_Template_ngx_custom_actions_handleSettingsAction_4_listener() {
          return ctx.settingsDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "nb-card-body")(12, "ng2-smart-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("rowSelect", function DevicesComponent_Template_ng2_smart_table_rowSelect_12_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardHeaderComponent, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_7__.CustomActionsComponent],
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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/actions-cell.component */ 78711);
/* harmony import */ var _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/price-cell.component */ 6515);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);










function ServicesComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected services ");
  }
}
function ServicesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " services");
  }
}
class ServicesComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_2__.BaseTable {
  constructor(service, dialogService) {
    super(dialogService);
    this.service = service;
    this.dialogService = dialogService;
    this.settings = {
      selectMode: "multi",
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number",
          width: "1%"
        },
        name: {
          title: "Name",
          type: "string"
        },
        price: {
          title: "Price",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_1__.PriceCellComponent
        },
        actions: {
          title: "Actions",
          type: "custom",
          width: "1%",
          renderComponent: _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_0__.ActionsCellComponent,
          sort: false,
          filter: false
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.LocalDataSource();
    const data = this.service.getData().services;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_3__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["ngx-services"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows", "handleRemoveAction", "handleReloadAction"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body")(4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleRemoveAction", function ServicesComponent_Template_ngx_custom_actions_handleRemoveAction_4_listener() {
          return ctx.removeItem();
        })("handleReloadAction", function ServicesComponent_Template_ngx_custom_actions_handleReloadAction_4_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ServicesComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ServicesComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rowSelect", function ServicesComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_4__.CustomActionsComponent],
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
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/actions-cell.component */ 78711);
/* harmony import */ var _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/price-cell.component */ 6515);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);










class UtilitiesComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_4__.BaseTable {
  constructor(service, dialogService) {
    super(dialogService);
    this.service = service;
    this.dialogService = dialogService;
    this.settings = {
      selectMode: "multi",
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
          renderComponent: _shared_components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_3__.PriceCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string"
        },
        actions: {
          title: "Actions",
          type: "custom",
          width: "1%",
          renderComponent: _shared_components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_2__.ActionsCellComponent,
          sort: false,
          filter: false
        }
      }
    };
    this.localStorageSettingsKey = _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.utilities;
    this.hiddenColumns = ["price"];
    this.selectedColumns = [];
    const data = this.service.getData().utilities;
    this.source.load(data);
  }
  handleSelectedColumns(columns) {
    this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
    (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.setItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.utilities, columns);
  }
  static #_ = this.ɵfac = function UtilitiesComponent_Factory(t) {
    return new (t || UtilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_5__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: UtilitiesComponent,
    selectors: [["ngx-utilities"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 4,
    consts: [[3, "selectedRows", "handleRemoveAction", "handleReloadAction", "handleSettingsAction"], [1, "row", "align-items-center"], [1, "col-8"], [3, "settings", "source", "rowSelect"]],
    template: function UtilitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card-body")(4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("handleRemoveAction", function UtilitiesComponent_Template_ngx_custom_actions_handleRemoveAction_4_listener() {
          return ctx.removeItem();
        })("handleReloadAction", function UtilitiesComponent_Template_ngx_custom_actions_handleReloadAction_4_listener() {
          return ctx.reload();
        })("handleSettingsAction", function UtilitiesComponent_Template_ngx_custom_actions_handleSettingsAction_4_listener() {
          return ctx.settingsDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-card-body")(12, "ng2-smart-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("rowSelect", function UtilitiesComponent_Template_ng2_smart_table_rowSelect_12_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_6__.CustomActionsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map