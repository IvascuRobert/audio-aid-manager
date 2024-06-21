"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["common"],{

/***/ 37703:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class LayoutComponent {
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["ngx-components"]],
    decls: 1,
    vars: 0,
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 19190:
/*!******************************************************************************!*\
  !*** ./src/app/pages/shared/custom-table-cell-render/role-cell.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleCellComponent": () => (/* binding */ RoleCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/data/role */ 12854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);




const _c0 = function (a0) {
  return {
    value: a0
  };
};
function RoleCellComponent_nb_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r2)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.value))("text", ctx_r0.value)("size", "tiny");
  }
}
function RoleCellComponent_nb_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-tag", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbPopover", _r4)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.value))("text", ctx_r1.value)("size", "tiny");
  }
}
function RoleCellComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 7)(1, "nb-card-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r6.value, " ");
  }
}
function RoleCellComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 7)(1, "nb-card-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello! ", passdata_r7.value, " ");
  }
}
class RoleCellComponent {
  constructor() {
    this.roleStatusTpl = _core_data_role__WEBPACK_IMPORTED_MODULE_0__.Role;
  }
  static #_ = this.ɵfac = function RoleCellComponent_Factory(t) {
    return new (t || RoleCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RoleCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 7,
    vars: 3,
    consts: [[3, "ngSwitch"], ["status", "warning", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["status", "primary", "class", "text-uppercase", "appearance", "outline", "nbPopoverTrigger", "hint", 3, "nbPopover", "nbPopoverContext", "text", "size", 4, "ngSwitchCase"], ["adminRef", ""], ["employeeRef", ""], ["status", "warning", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["status", "primary", "appearance", "outline", "nbPopoverTrigger", "hint", 1, "text-uppercase", 3, "nbPopover", "nbPopoverContext", "text", "size"], ["accent", "basic", 1, "popover-card"], ["status", "warning"]],
    template: function RoleCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-tag-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoleCellComponent_nb_tag_1_Template, 1, 6, "nb-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RoleCellComponent_nb_tag_2_Template, 1, 6, "nb-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoleCellComponent_ng_template_3_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RoleCellComponent_ng_template_5_Template, 5, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.roleStatusTpl.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.roleStatusTpl.employee);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTagListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent],
    styles: ["nb-card[_ngcontent-%COMP%] {\n          margin: 0;\n          max-width: 20rem;\n        }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2N1c3RvbS10YWJsZS1jZWxsLXJlbmRlci9yb2xlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUTtVQUNFLFNBQVM7VUFDVCxnQkFBZ0I7UUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgbmItY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogMjByZW07XG4gICAgICAgIH1cbiAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map