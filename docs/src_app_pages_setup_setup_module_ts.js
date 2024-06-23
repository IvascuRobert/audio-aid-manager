"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["src_app_pages_setup_setup_module_ts"],{

/***/ 98186:
/*!**********************************************************!*\
  !*** ./src/app/pages/setup/clinics/clinics.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicsComponent": () => (/* binding */ ClinicsComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);








function ClinicsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected clinics ");
  }
}
function ClinicsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " clinics");
  }
}
class ClinicsComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__.BaseTable {
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
          width: "10%"
        },
        name: {
          title: "Name",
          type: "string"
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    const data = this.service.getData().clinics;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function ClinicsComponent_Factory(t) {
    return new (t || ClinicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ClinicsComponent,
    selectors: [["ngx-clinics"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function ClinicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ClinicsComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ClinicsComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowSelect", function ClinicsComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__.CustomActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78756:
/*!**********************************************************!*\
  !*** ./src/app/pages/setup/doctors/doctors.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorsComponent": () => (/* binding */ DoctorsComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);








function DoctorsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected doctors ");
  }
}
function DoctorsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " doctors");
  }
}
class DoctorsComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__.BaseTable {
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
          width: "10%"
        },
        name: {
          title: "Name",
          type: "string"
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    const data = this.service.getData().doctors;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function DoctorsComponent_Factory(t) {
    return new (t || DoctorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DoctorsComponent,
    selectors: [["ngx-doctors"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function DoctorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DoctorsComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DoctorsComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowSelect", function DoctorsComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__.CustomActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 77365:
/*!************************************************************!*\
  !*** ./src/app/pages/setup/employee/employee.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeComponent": () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_components_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/email-cell.component */ 82263);
/* harmony import */ var _shared_components_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/gender-cell.component */ 82195);
/* harmony import */ var _shared_components_custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-table-cell-render/role-cell.component */ 83181);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);











function EmployeeComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected employees ");
  }
}
function EmployeeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " employees");
  }
}
class EmployeeComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_3__.BaseTable {
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
          width: "10%"
        },
        email: {
          title: "Email",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_0__.EmailCellComponent
        },
        gender: {
          title: "Gender",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_1__.GenderCellComponent
        },
        name: {
          title: "Name",
          type: "string"
        },
        password: {
          title: "Password",
          type: "string"
        },
        role: {
          title: "Role",
          type: "custom",
          renderComponent: _shared_components_custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_2__.RoleCellComponent
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.LocalDataSource();
    const data = this.service.getData().users;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function EmployeeComponent_Factory(t) {
    return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_4__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EmployeeComponent,
    selectors: [["ngx-employee"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function EmployeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EmployeeComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EmployeeComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("rowSelect", function EmployeeComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_5__.CustomActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22308:
/*!**************************************************************!*\
  !*** ./src/app/pages/setup/locations/locations.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsComponent": () => (/* binding */ LocationsComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);








function LocationsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected locations ");
  }
}
function LocationsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " locations");
  }
}
class LocationsComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__.BaseTable {
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
          width: "10%"
        },
        name: {
          title: "Name",
          type: "string"
        },
        address: {
          title: "Address",
          type: "string"
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    const data = this.service.getData().locations;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function LocationsComponent_Factory(t) {
    return new (t || LocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LocationsComponent,
    selectors: [["ngx-locations"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function LocationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LocationsComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LocationsComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowSelect", function LocationsComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__.CustomActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 79649:
/*!******************************************************!*\
  !*** ./src/app/pages/setup/rooms/rooms.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsComponent": () => (/* binding */ RoomsComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/base-table.directive */ 43194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/smart-table */ 98152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-actions/custom-actions.component */ 64522);








function RoomsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedRows.length, " selected employees ");
  }
}
function RoomsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.source.count(), " employees");
  }
}
class RoomsComponent extends _shared_directives_base_table_directive__WEBPACK_IMPORTED_MODULE_0__.BaseTable {
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
          width: "10%"
        },
        name: {
          title: "Name",
          type: "string"
        }
      }
    };
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    const data = this.service.getData().rooms;
    this.source.load(data);
  }
  static #_ = this.ɵfac = function RoomsComponent_Factory(t) {
    return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_1__.SmartTableData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RoomsComponent,
    selectors: [["ngx-rooms"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 5,
    consts: [[3, "selectedRows"], [1, "row", "align-items-center"], [1, "col-8"], [4, "ngIf", "ngIfElse"], ["allRows", ""], [1, "col-4"], [3, "settings", "source", "rowSelect"]],
    template: function RoomsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-custom-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card")(6, "nb-card-header")(7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RoomsComponent_span_9_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RoomsComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nb-card-body")(14, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowSelect", function RoomsComponent_Template_ng2_smart_table_rowSelect_14_listener($event) {
          return ctx.handleSelectedRow($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedRows", ctx.selectedRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedRows.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_2__.CustomActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49135:
/*!*****************************************************!*\
  !*** ./src/app/pages/setup/setup-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoutingModule": () => (/* binding */ SetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctors/doctors.component */ 78756);
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee/employee.component */ 77365);
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations/locations.component */ 22308);
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms/rooms.component */ 79649);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup.component */ 44012);
/* harmony import */ var _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clinics/clinics.component */ 98186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [{
  path: "",
  component: _setup_component__WEBPACK_IMPORTED_MODULE_4__.SetupComponent,
  children: [{
    path: "employee",
    component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeComponent
  }, {
    path: "rooms",
    component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__.RoomsComponent
  }, {
    path: "locations",
    component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_2__.LocationsComponent
  }, {
    path: "clinics",
    component: _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_5__.ClinicsComponent
  }, {
    path: "doctors",
    component: _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_0__.DoctorsComponent
  }]
}];
class SetupRoutingModule {
  static #_ = this.ɵfac = function SetupRoutingModule_Factory(t) {
    return new (t || SetupRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SetupRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 44012:
/*!************************************************!*\
  !*** ./src/app/pages/setup/setup.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupComponent": () => (/* binding */ SetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class SetupComponent {
  static #_ = this.ɵfac = function SetupComponent_Factory(t) {
    return new (t || SetupComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SetupComponent,
    selectors: [["ngx-setup"]],
    decls: 1,
    vars: 0,
    template: function SetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 81686:
/*!*********************************************!*\
  !*** ./src/app/pages/setup/setup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupModule": () => (/* binding */ SetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinics/clinics.component */ 98186);
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctors/doctors.component */ 78756);
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ 77365);
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations/locations.component */ 22308);
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms/rooms.component */ 79649);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup-routing.module */ 49135);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setup.component */ 44012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);












class SetupModule {
  static #_ = this.ɵfac = function SetupModule_Factory(t) {
    return new (t || SetupModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: SetupModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_6__.SetupRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__.Ng2SmartTableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SetupModule, {
    declarations: [_employee_employee_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeComponent, _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__.RoomsComponent, _locations_locations_component__WEBPACK_IMPORTED_MODULE_4__.LocationsComponent, _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_1__.ClinicsComponent, _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__.RoomsComponent, _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_2__.DoctorsComponent, _setup_component__WEBPACK_IMPORTED_MODULE_7__.SetupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_6__.SetupRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__.Ng2SmartTableModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_setup_setup_module_ts.js.map