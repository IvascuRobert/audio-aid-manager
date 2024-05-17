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
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);





class CustomersComponent {
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
  static #_ = this.ɵfac = function CustomersComponent_Factory(t) {
    return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CustomersComponent,
    selectors: [["ngx-customers"]],
    decls: 5,
    vars: 2,
    consts: [[3, "settings", "source", "deleteConfirm"]],
    template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Smart Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteConfirm", function CustomersComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) {
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
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomersRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomersModule, {
    declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_3__.CustomersComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsComponent, _customer_apportunity_customer_apportunity_component__WEBPACK_IMPORTED_MODULE_0__.CustomerApportunityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomersRoutingModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_customers_module_ts.js.map