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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);





class AccessoriesComponent {
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
        firstName: {
          title: "First Name",
          type: "string"
        },
        lastName: {
          title: "Last Name",
          type: "string"
        },
        username: {
          title: "Username",
          type: "string"
        },
        email: {
          title: "E-mail",
          type: "string"
        },
        age: {
          title: "Age",
          type: "number"
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
  static #_ = this.ɵfac = function AccessoriesComponent_Factory(t) {
    return new (t || AccessoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AccessoriesComponent,
    selectors: [["ngx-accessories"]],
    decls: 5,
    vars: 2,
    consts: [[3, "settings", "source", "deleteConfirm"]],
    template: function AccessoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Smart Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteConfirm", function AccessoriesComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) {
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

/***/ 10788:
/*!*************************************************************!*\
  !*** ./src/app/pages/products/devices/devices.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesComponent": () => (/* binding */ DevicesComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);





class DevicesComponent {
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
        firstName: {
          title: "First Name",
          type: "string"
        },
        lastName: {
          title: "Last Name",
          type: "string"
        },
        username: {
          title: "Username",
          type: "string"
        },
        email: {
          title: "E-mail",
          type: "string"
        },
        age: {
          title: "Age",
          type: "number"
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
  static #_ = this.ɵfac = function DevicesComponent_Factory(t) {
    return new (t || DevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DevicesComponent,
    selectors: [["ngx-devices"]],
    decls: 5,
    vars: 2,
    consts: [[3, "settings", "source", "deleteConfirm"]],
    template: function DevicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Smart Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteConfirm", function DevicesComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) {
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessories/accessories.component */ 6785);
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices/devices.component */ 10788);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ 29679);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 40445);
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/utilities.component */ 11412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class ProductsModule {
  static #_ = this.ɵfac = function ProductsModule_Factory(t) {
    return new (t || ProductsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ProductsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductsRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductsModule, {
    declarations: [_devices_devices_component__WEBPACK_IMPORTED_MODULE_1__.DevicesComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent, _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_0__.AccessoriesComponent, _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__.UtilitiesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductsRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule]
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
        firstName: {
          title: "First Name",
          type: "string"
        },
        lastName: {
          title: "Last Name",
          type: "string"
        },
        username: {
          title: "Username",
          type: "string"
        },
        email: {
          title: "E-mail",
          type: "string"
        },
        age: {
          title: "Age",
          type: "number"
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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);





class UtilitiesComponent {
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
        firstName: {
          title: "First Name",
          type: "string"
        },
        lastName: {
          title: "Last Name",
          type: "string"
        },
        username: {
          title: "Username",
          type: "string"
        },
        email: {
          title: "E-mail",
          type: "string"
        },
        age: {
          title: "Age",
          type: "number"
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
  static #_ = this.ɵfac = function UtilitiesComponent_Factory(t) {
    return new (t || UtilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UtilitiesComponent,
    selectors: [["ngx-utilities"]],
    decls: 5,
    vars: 2,
    consts: [[3, "settings", "source", "deleteConfirm"]],
    template: function UtilitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Smart Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteConfirm", function UtilitiesComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) {
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

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map