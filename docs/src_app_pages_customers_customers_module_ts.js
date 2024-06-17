"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["src_app_pages_customers_customers_module_ts"],{

/***/ 50842:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/customers/customer-apportunity/customer-apportunity.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerApportunityComponent": () => (/* binding */ CustomerApportunityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CustomerApportunityComponent {
  static #_ = this.ɵfac = function CustomerApportunityComponent_Factory(t) {
    return new (t || CustomerApportunityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomerApportunityComponent,
    selectors: [["ngx-customer-apportunity"]],
    decls: 2,
    vars: 0,
    template: function CustomerApportunityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer-apportunity works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49699:
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/customer-details/customer-details.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsComponent": () => (/* binding */ CustomerDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CustomerDetailsComponent {
  static #_ = this.ɵfac = function CustomerDetailsComponent_Factory(t) {
    return new (t || CustomerDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomerDetailsComponent,
    selectors: [["ngx-customer-details"]],
    decls: 2,
    vars: 0,
    template: function CustomerDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 81930:
/*!*************************************************************!*\
  !*** ./src/app/pages/customers/customers-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersRoutingModule": () => (/* binding */ CustomersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _customer_apportunity_customer_apportunity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-apportunity/customer-apportunity.component */ 50842);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 49699);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ 92953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: "",
  component: _customers_component__WEBPACK_IMPORTED_MODULE_2__.CustomersComponent,
  children: [{
    path: "details/:id",
    component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsComponent
  }, {
    path: "details/:id/opportunity",
    component: _customer_apportunity_customer_apportunity_component__WEBPACK_IMPORTED_MODULE_0__.CustomerApportunityComponent
  }]
}];
class CustomersRoutingModule {
  static #_ = this.ɵfac = function CustomersRoutingModule_Factory(t) {
    return new (t || CustomersRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CustomersRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92953:
/*!********************************************************!*\
  !*** ./src/app/pages/customers/customers.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersComponent": () => (/* binding */ CustomersComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _shared_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/custom-table-cell-render/age-cell.component */ 44759);
/* harmony import */ var _shared_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/custom-table-cell-render/bold-text-cell.component */ 43691);
/* harmony import */ var _shared_custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/custom-table-cell-render/customer-status-cell.component */ 22122);
/* harmony import */ var _shared_custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/custom-table-cell-render/date-cell.component */ 11808);
/* harmony import */ var _shared_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/custom-table-cell-render/email-cell.component */ 24502);
/* harmony import */ var _shared_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/custom-table-cell-render/gender-cell.component */ 53161);
/* harmony import */ var _shared_custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/custom-table-cell-render/phone-cell.component */ 59209);
/* harmony import */ var _shared_custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/custom-table-cell-render/process-status-cell.component */ 79555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@core/data/smart-table */ 98152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 96953);
















function CustomersComponent_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
class CustomersComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      actions: false,
      columns: {
        id: {
          title: "ID",
          type: "number",
          width: "1%"
        },
        status: {
          title: "Status",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_4__.CustomerStatusCellComponent
        },
        firstName: {
          title: "First Name",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_3__.BoldTextCellComponent
        },
        lastName: {
          title: "Last Name",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_3__.BoldTextCellComponent
        },
        gender: {
          title: "Gender",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_7__.GenderCellComponent
        },
        age: {
          title: "Age",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_2__.AgeCellComponent
        },
        telephone: {
          title: "Telephone",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_8__.PhoneCellComponent
        },
        email: {
          title: "E-mail",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_6__.EmailCellComponent,
          hide: true
        },
        address: {
          title: "Address",
          type: "string",
          hide: true
        },
        doctor: {
          title: "Doctor",
          type: "string",
          hide: true
        },
        clinic: {
          title: "Clinic",
          type: "string",
          hide: true
        },
        contactNote: {
          title: "Contact Note",
          type: "string",
          hide: true
        },
        processStatus: {
          title: "Process status",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_9__.ProcessStatusCellComponent,
          hide: true
        },
        location: {
          title: "Location",
          type: "string",
          hide: true
        },
        appointment: {
          title: "Appointment",
          type: "custom",
          renderComponent: _shared_custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_5__.DateCellComponent,
          hide: true
        }
      }
    };
    this.hiddenColumns = ["email", "address", "doctor", "clinic", "contactNote", "processStatus", "location", "appointment"];
    this.selectedColumns = [];
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__.LocalDataSource();
    const data = this.service.getData().customers;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }
  handleSelectedColumns(columns) {
    this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
    (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.setItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.customers, columns);
  }
  loadTableSettingsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.getItem)(_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_KEYS_FOR_TABLE.customers);
    if (columns) {
      this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_0__.mapHideOrShowColumns)(columns, this.settings, this.hiddenColumns);
      this.selectedColumns = columns;
    }
  }
  static #_ = this.ɵfac = function CustomersComponent_Factory(t) {
    return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_10__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: CustomersComponent,
    selectors: [["ngx-customers"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], ["fullWidth", "", "multiple", "", "placeholder", "Columns", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "settings", "source"], [3, "value"]],
    template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header")(2, "div", 0)(3, "div", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 2)(7, "nb-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectedChange", function CustomersComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.selectedColumns = $event;
        })("selectedChange", function CustomersComponent_Template_nb_select_selectedChange_7_listener($event) {
          return ctx.handleSelectedColumns($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CustomersComponent_nb_option_8_Template, 2, 2, "nb-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ng2-smart-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.source.count(), " Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selected", ctx.selectedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.hiddenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26056:
/*!*****************************************************!*\
  !*** ./src/app/pages/customers/customers.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersModule": () => (/* binding */ CustomersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _customer_apportunity_customer_apportunity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-apportunity/customer-apportunity.component */ 50842);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 49699);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-routing.module */ 81930);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ 92953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class CustomersModule {
  static #_ = this.ɵfac = function CustomersModule_Factory(t) {
    return new (t || CustomersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CustomersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomersRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomersModule, {
    declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_3__.CustomersComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsComponent, _customer_apportunity_customer_apportunity_component__WEBPACK_IMPORTED_MODULE_0__.CustomerApportunityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomersRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_customers_module_ts.js.map