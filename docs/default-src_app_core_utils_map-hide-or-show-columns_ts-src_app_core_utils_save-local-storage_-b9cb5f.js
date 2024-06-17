"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["default-src_app_core_utils_map-hide-or-show-columns_ts-src_app_core_utils_save-local-storage_-b9cb5f"],{

/***/ 95430:
/*!*********************************************************!*\
  !*** ./src/app/@core/utils/map-hide-or-show-columns.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapHideOrShowColumns": () => (/* binding */ mapHideOrShowColumns)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapHideOrShowColumns(columns, settings, hiddenColumns) {
  const cloneSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(settings);
  for (let hiddenColumn of hiddenColumns) {
    if (columns.includes(hiddenColumn)) {
      cloneSettings.columns[hiddenColumn].hide = false;
    } else {
      cloneSettings.columns[hiddenColumn].hide = true;
    }
  }
  return cloneSettings;
}

/***/ }),

/***/ 80392:
/*!***************************************************!*\
  !*** ./src/app/@core/utils/save-local-storage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCAL_STORAGE_KEYS_FOR_TABLE": () => (/* binding */ LOCAL_STORAGE_KEYS_FOR_TABLE),
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "setItem": () => (/* binding */ setItem)
/* harmony export */ });
var LOCAL_STORAGE_KEYS_FOR_TABLE;
(function (LOCAL_STORAGE_KEYS_FOR_TABLE) {
  LOCAL_STORAGE_KEYS_FOR_TABLE["customers"] = "customer_table";
  LOCAL_STORAGE_KEYS_FOR_TABLE["utilities"] = "utilities_table";
  LOCAL_STORAGE_KEYS_FOR_TABLE["accessories"] = "accessories_table";
  LOCAL_STORAGE_KEYS_FOR_TABLE["devices"] = "devices_table";
})(LOCAL_STORAGE_KEYS_FOR_TABLE || (LOCAL_STORAGE_KEYS_FOR_TABLE = {}));
function setItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getItem(key) {
  const columns = JSON.parse(localStorage.getItem(key));
  if (columns) {
    return columns;
  }
}

/***/ }),

/***/ 44759:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/age-cell.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeCellComponent": () => (/* binding */ AgeCellComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AgeCellComponent {
  ngOnInit() {
    this.renderValue = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.value, "years");
  }
  static #_ = this.ɵfac = function AgeCellComponent_Factory(t) {
    return new (t || AgeCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AgeCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value",
      rowData: "rowData"
    },
    decls: 1,
    vars: 1,
    template: function AgeCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.renderValue);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 43691:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/bold-text-cell.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoldTextCellComponent": () => (/* binding */ BoldTextCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BoldTextCellComponent {
  static #_ = this.ɵfac = function BoldTextCellComponent_Factory(t) {
    return new (t || BoldTextCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BoldTextCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 1,
    template: function BoldTextCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 22122:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/customer-status-cell.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerStatusCellComponent": () => (/* binding */ CustomerStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/customer */ 35051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);




const _c0 = function (a0) {
  return {
    value: a0
  };
};
function CustomerStatusCellComponent_nb_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r5)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.value))("text", ctx_r0.value);
  }
}
function CustomerStatusCellComponent_nb_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r7)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.value))("text", ctx_r1.value);
  }
}
function CustomerStatusCellComponent_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r9)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.value))("text", ctx_r2.value);
  }
}
function CustomerStatusCellComponent_nb_tag_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r11)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r3.value))("text", ctx_r3.value);
  }
}
function CustomerStatusCellComponent_nb_tag_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 13);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r13)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r4.value))("text", ctx_r4.value);
  }
}
function CustomerStatusCellComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 15)(1, "nb-card-header", 16);
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
function CustomerStatusCellComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 17)(1, "nb-card-header", 16);
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
function CustomerStatusCellComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 18)(1, "nb-card-header", 16);
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
function CustomerStatusCellComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 19)(1, "nb-card-header", 16);
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
function CustomerStatusCellComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 15)(1, "nb-card-header", 16);
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
class CustomerStatusCellComponent {
  constructor() {
    this.customerStatusTpl = _core_data_customer__WEBPACK_IMPORTED_MODULE_0__.CustomerStatus;
  }
  static #_ = this.ɵfac = function CustomerStatusCellComponent_Factory(t) {
    return new (t || CustomerStatusCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomerStatusCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 16,
    vars: 5,
    consts: [[3, "ngSwitch"], ["status", "danger", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "success", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "basic", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "warning", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "basic", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchDefault"], ["ccRef", ""], ["clRef", ""], ["noRef", ""], ["pcRef", ""], ["defaultRef", ""], ["status", "danger", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "success", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "basic", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "warning", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["accent", "basic", 1, "popover-card"], ["status", "warning"], ["accent", "primary", 1, "popover-card"], ["accent", "success", 1, "popover-card"], ["accent", "warning", 1, "popover-card"]],
    template: function CustomerStatusCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-tag-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerStatusCellComponent_nb_tag_1_Template, 1, 6, "nb-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerStatusCellComponent_nb_tag_2_Template, 1, 6, "nb-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomerStatusCellComponent_nb_tag_3_Template, 1, 6, "nb-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerStatusCellComponent_nb_tag_4_Template, 1, 6, "nb-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerStatusCellComponent_nb_tag_5_Template, 1, 6, "nb-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomerStatusCellComponent_ng_template_6_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomerStatusCellComponent_ng_template_8_Template, 5, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomerStatusCellComponent_ng_template_10_Template, 5, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomerStatusCellComponent_ng_template_12_Template, 5, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CustomerStatusCellComponent_ng_template_14_Template, 5, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.customerStatusTpl.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.customerStatusTpl.cl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.customerStatusTpl.no);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.customerStatusTpl.pc);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2N1c3RvbS10YWJsZS1jZWxsLXJlbmRlci9jdXN0b21lci1zdGF0dXMtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsU0FBUztRQUNULGdCQUFnQjtNQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbmItY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 11808:
/*!******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/date-cell.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateCellComponent": () => (/* binding */ DateCellComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



const _c0 = function (a0) {
  return {
    "text-warning": a0
  };
};
class DateCellComponent {
  constructor() {
    this.isInPresent = false;
  }
  ngOnInit() {
    this.renderValue = moment__WEBPACK_IMPORTED_MODULE_0__(this.value).format("L");
    this.isInPresent = moment__WEBPACK_IMPORTED_MODULE_0__().isSame(moment__WEBPACK_IMPORTED_MODULE_0__(this.value), "day");
  }
  static #_ = this.ɵfac = function DateCellComponent_Factory(t) {
    return new (t || DateCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DateCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 4,
    consts: [[3, "ngClass"]],
    template: function DateCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !ctx.isInPresent));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.renderValue, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 24502:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/email-cell.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailCellComponent": () => (/* binding */ EmailCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 96953);


class EmailCellComponent {
  static #_ = this.ɵfac = function EmailCellComponent_Factory(t) {
    return new (t || EmailCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmailCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 2,
    consts: [["nbButton", "", "ghost", "", 1, "text-lowercase", 3, "href"]],
    template: function EmailCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, " ");
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 53161:
/*!********************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/gender-cell.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderCellComponent": () => (/* binding */ GenderCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 96953);


class GenderCellComponent {
  static #_ = this.ɵfac = function GenderCellComponent_Factory(t) {
    return new (t || GenderCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GenderCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "d-flex", "justify-content-center"], ["nbPopoverTrigger", "hint", "pack", "ion", 3, "nbPopover", "icon"]],
    template: function GenderCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", ctx.value)("icon", ctx.value);
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59209:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/phone-cell.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneCellComponent": () => (/* binding */ PhoneCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 96953);


class PhoneCellComponent {
  static #_ = this.ɵfac = function PhoneCellComponent_Factory(t) {
    return new (t || PhoneCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PhoneCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 2,
    vars: 2,
    consts: [["nbButton", "", "ghost", "", 3, "href"]],
    template: function PhoneCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "tel:" + ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, " ");
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 79555:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/process-status-cell.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessStatusCellComponent": () => (/* binding */ ProcessStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/customer */ 35051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);




const _c0 = function (a0) {
  return {
    value: a0
  };
};
function ProcessStatusCellComponent_nb_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r5)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.value))("text", ctx_r0.value);
  }
}
function ProcessStatusCellComponent_nb_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r7)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.value))("text", ctx_r1.value);
  }
}
function ProcessStatusCellComponent_nb_tag_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r9)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.value))("text", ctx_r2.value);
  }
}
function ProcessStatusCellComponent_nb_tag_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r11)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r3.value))("text", ctx_r3.value);
  }
}
function ProcessStatusCellComponent_nb_tag_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 15);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "tiny")("nbPopover", _r11)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r4.value))("text", ctx_r4.value);
  }
}
function ProcessStatusCellComponent_ng_template_6_Template(rf, ctx) {
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
function ProcessStatusCellComponent_ng_template_8_Template(rf, ctx) {
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
function ProcessStatusCellComponent_ng_template_10_Template(rf, ctx) {
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
function ProcessStatusCellComponent_ng_template_12_Template(rf, ctx) {
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
function ProcessStatusCellComponent_ng_template_14_Template(rf, ctx) {
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
class ProcessStatusCellComponent {
  constructor() {
    this.processStatusTypeTpl = _core_data_customer__WEBPACK_IMPORTED_MODULE_0__.ProcessStatusType;
  }
  static #_ = this.ɵfac = function ProcessStatusCellComponent_Factory(t) {
    return new (t || ProcessStatusCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProcessStatusCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 16,
    vars: 6,
    consts: [[3, "ngSwitch"], ["status", "warning", "class", "text-uppercase", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "basic", "class", "text-uppercase", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "danger", "class", "text-uppercase", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "primary", "class", "text-uppercase", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["status", "success", "class", "text-uppercase", "nbPopoverTrigger", "hint", 3, "size", "nbPopover", "nbPopoverContext", "text", 4, "ngSwitchCase"], ["ccRef", ""], ["clRef", ""], ["noRef", ""], ["pcRef", ""], ["defaultRef", ""], ["status", "warning", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "basic", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "danger", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "primary", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["status", "success", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "size", "nbPopover", "nbPopoverContext", "text"], ["accent", "basic", 1, "popover-card"], ["status", "warning"], ["accent", "primary", 1, "popover-card"], ["accent", "success", 1, "popover-card"], ["accent", "warning", 1, "popover-card"]],
    template: function ProcessStatusCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-tag-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProcessStatusCellComponent_nb_tag_1_Template, 1, 6, "nb-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProcessStatusCellComponent_nb_tag_2_Template, 1, 6, "nb-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProcessStatusCellComponent_nb_tag_3_Template, 1, 6, "nb-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProcessStatusCellComponent_nb_tag_4_Template, 1, 6, "nb-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProcessStatusCellComponent_nb_tag_5_Template, 1, 6, "nb-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProcessStatusCellComponent_ng_template_6_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProcessStatusCellComponent_ng_template_8_Template, 5, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProcessStatusCellComponent_ng_template_10_Template, 5, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProcessStatusCellComponent_ng_template_12_Template, 5, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProcessStatusCellComponent_ng_template_14_Template, 5, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.processStatusTypeTpl.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.processStatusTypeTpl.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.processStatusTypeTpl.lost);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.processStatusTypeTpl.trial);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.processStatusTypeTpl.win);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2N1c3RvbS10YWJsZS1jZWxsLXJlbmRlci9wcm9jZXNzLXN0YXR1cy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxTQUFTO1FBQ1QsZ0JBQWdCO01BQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuYi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_utils_map-hide-or-show-columns_ts-src_app_core_utils_save-local-storage_-b9cb5f.js.map