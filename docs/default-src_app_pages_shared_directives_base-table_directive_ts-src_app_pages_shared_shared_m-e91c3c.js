"use strict";
(self["webpackChunkaudio_aid_manager_demo"] = self["webpackChunkaudio_aid_manager_demo"] || []).push([["default-src_app_pages_shared_directives_base-table_directive_ts-src_app_pages_shared_shared_m-e91c3c"],{

/***/ 95430:
/*!*********************************************************!*\
  !*** ./src/app/@core/utils/map-hide-or-show-columns.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapHideOrShowColumns": () => (/* binding */ mapHideOrShowColumns),
/* harmony export */   "mapShowColumns": () => (/* binding */ mapShowColumns)
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
function mapShowColumns(columns, settings) {
  const cloneSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(settings);
  for (let column of columns) {
    cloneSettings.columns[column].hide = false;
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

/***/ 64522:
/*!************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-actions/custom-actions.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomActionsComponent": () => (/* binding */ CustomActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../remove-dialog/remove-dialog.component */ 73509);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function CustomActionsComponent_nb_action_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-action", 7);
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbTooltip", action_r1.nbTooltip)("nbTooltipPlacement", action_r1.nbTooltipPlacement)("icon", action_r1.icon);
  }
}
class CustomActionsComponent {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.selectedRows = [];
    this.actions = [];
    this.handleAddAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.handleRemoveAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.handleViewAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.handleReloadAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.handleSettingsAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  removeDialog() {
    if (this.selectedRows.length > 0) {
      this.dialogService.open(_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_0__.RemoveDialogComponent).onClose.subscribe(remove => {
        if (remove) {
          this.handleRemoveAction.emit(true);
        }
      });
    }
  }
  static #_ = this.ɵfac = function CustomActionsComponent_Factory(t) {
    return new (t || CustomActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomActionsComponent,
    selectors: [["ngx-custom-actions"]],
    inputs: {
      selectedRows: "selectedRows",
      actions: "actions"
    },
    outputs: {
      handleAddAction: "handleAddAction",
      handleRemoveAction: "handleRemoveAction",
      handleViewAction: "handleViewAction",
      handleReloadAction: "handleReloadAction",
      handleSettingsAction: "handleSettingsAction"
    },
    decls: 7,
    vars: 10,
    consts: [["size", "medium"], ["nbTooltipPlacement", "top", 3, "nbTooltip", "icon", "click"], ["nbTooltipPlacement", "top", "icon", "trash-2-outline", "badgeStatus", "warning", 3, "nbTooltip", "badgeText", "disabled", "click"], ["nbTooltipPlacement", "top", "icon", "eye-outline", 3, "disabled", "nbTooltip", "click"], ["icon", "refresh-outline", "nbTooltipPlacement", "top", 3, "nbTooltip", "click"], ["nbTooltipPlacement", "top", "icon", "settings-2-outline", 3, "nbTooltip", "click"], [3, "nbTooltip", "nbTooltipPlacement", "icon", 4, "ngFor", "ngForOf"], [3, "nbTooltip", "nbTooltipPlacement", "icon"]],
    template: function CustomActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-actions", 0)(1, "nb-action", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomActionsComponent_Template_nb_action_click_1_listener() {
          return ctx.handleAddAction.emit(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-action", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomActionsComponent_Template_nb_action_click_2_listener() {
          return ctx.removeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-action", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomActionsComponent_Template_nb_action_click_3_listener() {
          return ctx.handleViewAction.emit(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomActionsComponent_Template_nb_action_click_4_listener() {
          return ctx.handleReloadAction.emit(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomActionsComponent_Template_nb_action_click_5_listener() {
          return ctx.handleSettingsAction.emit(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomActionsComponent_nb_action_6_Template, 1, 3, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbTooltip", ctx.selectedRows.length === 1 ? "Edit" : "Add")("icon", ctx.selectedRows.length === 1 ? "edit-2-outline" : "plus-circle-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbTooltip", ctx.selectedRows.length === 0 ? "Please select an item" : "Remove")("badgeText", ctx.selectedRows.length)("disabled", ctx.selectedRows.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selectedRows.length !== 1)("nbTooltip", ctx.selectedRows.length !== 1 ? "Please select an item" : "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbTooltip", "Reload data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbTooltip", "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbActionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTooltipDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31802:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/accessory-status-cell.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessoryStatusCellComponent": () => (/* binding */ AccessoryStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_accessory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@core/data/accessory */ 15104);
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
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXRhYmxlLWNlbGwtcmVuZGVyL2FjY2Vzc29yeS1zdGF0dXMtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsU0FBUztRQUNULGdCQUFnQjtNQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbmItY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 78711:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/actions-cell.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsCellComponent": () => (/* binding */ ActionsCellComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);



const _c0 = function () {
  return {
    type: "pulse"
  };
};
const _c1 = function (a0) {
  return {
    animation: a0
  };
};
class ActionsCellComponent {
  constructor() {
    this.items = [{
      title: "View",
      icon: "eye-outline"
    }, {
      title: "Edit",
      icon: "edit-2-outline"
    }, {
      title: "Remove",
      icon: "trash-2-outline"
    }];
  }
  ngOnInit() {
    this.renderValue = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.value, "years");
  }
  static #_ = this.ɵfac = function ActionsCellComponent_Factory(t) {
    return new (t || ActionsCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ActionsCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value",
      rowData: "rowData"
    },
    decls: 3,
    vars: 5,
    consts: [[1, "d-flex", "justify-content-center"], ["nbButton", "", "ghost", "", "status", "basic", 3, "nbContextMenu"], ["icon", "more-vertical-outline", "pack", "eva", 1, "skip", 3, "options"]],
    template: function ActionsCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nb-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbContextMenu", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0)));
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbContextMenuDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 54169:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/age-cell.component.ts ***!
  \****************************************************************************************/
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

/***/ 53093:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/bold-text-cell.component.ts ***!
  \**********************************************************************************************/
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

/***/ 93120:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/color-cell.component.ts ***!
  \******************************************************************************************/
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

/***/ 6498:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/comment-cell.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCellComponent": () => (/* binding */ CommentCellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 96953);


function CommentCellComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 3)(1, "nb-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hello! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passdata_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", passdata_r2.value, " ");
  }
}
const _c0 = function () {
  return {
    type: "pulse"
  };
};
const _c1 = function (a0) {
  return {
    animation: a0
  };
};
const _c2 = function (a0) {
  return {
    value: a0
  };
};
class CommentCellComponent {
  static #_ = this.ɵfac = function CommentCellComponent_Factory(t) {
    return new (t || CommentCellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CommentCellComponent,
    selectors: [["ng-component"]],
    inputs: {
      value: "value"
    },
    decls: 4,
    vars: 8,
    consts: [[1, "d-flex", "justify-content-center"], ["status", "basic", "icon", "file-text-outline", "pack", "eva", "nbPopoverTrigger", "hint", 1, "skip", 3, "options", "nbPopover", "nbPopoverContext"], ["commentRef", ""], ["accent", "basic", 1, "popover-card"], ["status", "warning"]],
    template: function CommentCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentCellComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)))("nbPopover", _r0)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.value));
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbPopoverDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent],
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXRhYmxlLWNlbGwtcmVuZGVyL2NvbW1lbnQtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsU0FBUztRQUNULGdCQUFnQjtNQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbmItY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 60304:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/customer-status-cell.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerStatusCellComponent": () => (/* binding */ CustomerStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@core/data/customer */ 35051);
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
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXRhYmxlLWNlbGwtcmVuZGVyL2N1c3RvbWVyLXN0YXR1cy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxTQUFTO1FBQ1QsZ0JBQWdCO01BQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuYi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 49265:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/date-cell.component.ts ***!
  \*****************************************************************************************/
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

/***/ 82263:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/email-cell.component.ts ***!
  \******************************************************************************************/
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

/***/ 82195:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/gender-cell.component.ts ***!
  \*******************************************************************************************/
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

/***/ 83057:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/phone-cell.component.ts ***!
  \******************************************************************************************/
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

/***/ 6515:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/price-cell.component.ts ***!
  \******************************************************************************************/
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

/***/ 58472:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/process-status-cell.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessStatusCellComponent": () => (/* binding */ ProcessStatusCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@core/data/customer */ 35051);
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
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXRhYmxlLWNlbGwtcmVuZGVyL3Byb2Nlc3Mtc3RhdHVzLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFNBQVM7UUFDVCxnQkFBZ0I7TUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG5iLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1heC13aWR0aDogMjByZW07XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83181:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/shared/components/custom-table-cell-render/role-cell.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleCellComponent": () => (/* binding */ RoleCellComponent)
/* harmony export */ });
/* harmony import */ var _core_data_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@core/data/role */ 12854);
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
    styles: ["nb-card[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 20rem;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLXRhYmxlLWNlbGwtcmVuZGVyL3JvbGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsU0FBUztRQUNULGdCQUFnQjtNQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbmItY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 73509:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/shared/components/remove-dialog/remove-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveDialogComponent": () => (/* binding */ RemoveDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 96953);


const _c0 = function () {
  return {
    type: "pulse"
  };
};
const _c1 = function (a0) {
  return {
    animation: a0
  };
};
class RemoveDialogComponent {
  constructor(ref) {
    this.ref = ref;
    this.loadingLargeGroup = false;
  }
  cancel() {
    this.ref.close();
  }
  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;
    setTimeout(() => {
      this.ref.close(true);
      this.loadingLargeGroup = false;
    }, 3000);
  }
  static #_ = this.ɵfac = function RemoveDialogComponent_Factory(t) {
    return new (t || RemoveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RemoveDialogComponent,
    selectors: [["ngx-remove-dialog"]],
    decls: 13,
    vars: 5,
    consts: [[1, "d-flex", "align-items-center"], ["icon", "trash-2-outline", "pack", "eva", "status", "danger", 1, "skip", "mr-2", 3, "options"], [1, "d-flex", "justify-content-end"], ["type", "button", "nbButton", "", "status", "basic", 1, "mr-2", 3, "click"], ["nbButton", "", "hero", "", "status", "danger", "nbSpinnerStatus", "success", "nbSpinnerMessage", "", 3, "nbSpinner", "click"]],
    template: function RemoveDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header")(2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Remove items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Are you sure you want to delete this item? This action cannot be undone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-footer")(8, "div", 2)(9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveDialogComponent_Template_button_click_9_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveDialogComponent_Template_button_click_11_listener() {
          return ctx.toggleLoadingLargeGroupAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loadingLargeGroup);
      }
    },
    dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbSpinnerDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 81512:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/shared/components/settings-dialog/settings-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsDialogComponent": () => (/* binding */ SettingsDialogComponent)
/* harmony export */ });
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





function SettingsDialogComponent_nb_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
const _c0 = function () {
  return {
    type: "pulse"
  };
};
const _c1 = function (a0) {
  return {
    animation: a0
  };
};
class SettingsDialogComponent {
  constructor(ref, fb) {
    this.ref = ref;
    this.fb = fb;
    this.settingsForm = this.fb.group({
      columns: [null]
    });
    this.hiddenColumns = [];
    this.loadingLargeGroup = false;
  }
  ngOnInit() {
    this.loadSelectColumnsFromLocalStorage();
  }
  cancel() {
    this.ref.close();
  }
  submit() {
    this.loadingLargeGroup = true;
    setTimeout(() => {
      const settingsFormValue = this.settingsForm.getRawValue();
      this.loadingLargeGroup = false;
      this.ref.close({
        ...settingsFormValue,
        ...{
          hiddenColumns: this.hiddenColumns
        }
      });
    }, 3000);
  }
  isValid(controlName) {
    return this.settingsForm.controls[controlName].invalid && (this.settingsForm.controls[controlName].dirty || this.settingsForm.controls[controlName].touched);
  }
  loadSelectColumnsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_0__.getItem)(this.localStorageSettingsKey);
    this.settingsForm.controls.columns.setValue(columns);
  }
  static #_ = this.ɵfac = function SettingsDialogComponent_Factory(t) {
    return new (t || SettingsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingsDialogComponent,
    selectors: [["ngx-settings-dialog"]],
    inputs: {
      hiddenColumns: "hiddenColumns",
      localStorageSettingsKey: "localStorageSettingsKey"
    },
    decls: 20,
    vars: 8,
    consts: [[3, "formGroup", "ngSubmit"], [1, "d-flex", "align-items-center"], ["icon", "settings-2-outline", "pack", "eva", "status", "basic", 1, "skip", "mr-2", 3, "options"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "columns", 1, "label"], ["id", "columns", "fullWidth", "", "placeholder", "Columns", "formControlName", "columns", "multiple", "", 3, "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", "nbButton", "", "status", "basic", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "hero", "", "status", "primary", "nbSpinnerStatus", "success", "nbSpinnerMessage", "", 3, "nbSpinner"], [3, "value"]],
    template: function SettingsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsDialogComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card")(2, "nb-card-header")(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nb-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body")(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SettingsDialogComponent_nb_option_13_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nb-card-footer")(15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsDialogComponent_Template_button_click_16_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.isValid("columns") ? "danger" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hiddenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbSpinner", ctx.loadingLargeGroup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbOptionComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43194:
/*!*****************************************************************!*\
  !*** ./src/app/pages/shared/directives/base-table.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTable": () => (/* binding */ BaseTable)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/map-hide-or-show-columns */ 95430);
/* harmony import */ var _core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/utils/save-local-storage */ 80392);
/* harmony import */ var _components_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/settings-dialog/settings-dialog.component */ 81512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 96953);







class BaseTable {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.settings = {};
    this.selectedRows = [];
    this.isAllSelected = false;
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
    this.loadTableSettingsFromLocalStorage();
  }
  handleSelectedRow(row) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNull)(row.data)) {
      this.isAllSelected = !this.isAllSelected;
      if (this.isAllSelected) {
        row.source.getAll().then(value => this.selectedRows = value);
      } else {
        this.selectedRows = [];
      }
    } else if (row.isSelected) {
      this.selectedRows.push(row.data);
    } else {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.selectedRows, ["id", row.data.id]);
    }
  }
  removeItem() {
    if (this.selectedRows.length > 0) {
      this.source.remove(this.selectedRows[0]);
    }
  }
  reload() {
    this.source.refresh();
  }
  settingsDialog() {
    this.dialogService.open(_components_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SettingsDialogComponent, {
      context: {
        hiddenColumns: this.hiddenColumns,
        localStorageSettingsKey: this.localStorageSettingsKey
      }
    }).onClose.subscribe(settings => {
      if (settings) {
        const {
          columns,
          hiddenColumns
        } = settings;
        this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_1__.mapHideOrShowColumns)(columns, this.settings, hiddenColumns);
        (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_2__.setItem)(this.localStorageSettingsKey, columns);
      }
    });
  }
  loadTableSettingsFromLocalStorage() {
    const columns = (0,_core_utils_save_local_storage__WEBPACK_IMPORTED_MODULE_2__.getItem)(this.localStorageSettingsKey);
    if (columns) {
      this.settings = (0,_core_utils_map_hide_or_show_columns__WEBPACK_IMPORTED_MODULE_1__.mapShowColumns)(columns, this.settings);
    }
  }
  static #_ = this.ɵfac = function BaseTable_Factory(t) {
    return new (t || BaseTable)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: BaseTable
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nebular/eva-icons */ 39557);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/custom-actions/custom-actions.component */ 64522);
/* harmony import */ var _components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/custom-table-cell-render/accessory-status-cell.component */ 31802);
/* harmony import */ var _components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-table-cell-render/actions-cell.component */ 78711);
/* harmony import */ var _components_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-table-cell-render/age-cell.component */ 54169);
/* harmony import */ var _components_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/custom-table-cell-render/bold-text-cell.component */ 53093);
/* harmony import */ var _components_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-table-cell-render/color-cell.component */ 93120);
/* harmony import */ var _components_custom_table_cell_render_comment_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-table-cell-render/comment-cell.component */ 6498);
/* harmony import */ var _components_custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-table-cell-render/customer-status-cell.component */ 60304);
/* harmony import */ var _components_custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custom-table-cell-render/date-cell.component */ 49265);
/* harmony import */ var _components_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/custom-table-cell-render/email-cell.component */ 82263);
/* harmony import */ var _components_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/custom-table-cell-render/gender-cell.component */ 82195);
/* harmony import */ var _components_custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/custom-table-cell-render/phone-cell.component */ 83057);
/* harmony import */ var _components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/custom-table-cell-render/price-cell.component */ 6515);
/* harmony import */ var _components_custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/custom-table-cell-render/process-status-cell.component */ 58472);
/* harmony import */ var _components_custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/custom-table-cell-render/role-cell.component */ 83181);
/* harmony import */ var _components_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/remove-dialog/remove-dialog.component */ 73509);
/* harmony import */ var _components_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/settings-dialog/settings-dialog.component */ 81512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);























class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTagModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_22__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbSpinnerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbFormFieldModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_4__.AgeCellComponent, _components_custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_12__.PhoneCellComponent, _components_custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_8__.CustomerStatusCellComponent, _components_custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_9__.DateCellComponent, _components_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_10__.EmailCellComponent, _components_custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_14__.ProcessStatusCellComponent, _components_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_5__.BoldTextCellComponent, _components_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_11__.GenderCellComponent, _components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_13__.PriceCellComponent, _components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_2__.AccessoryStatusCellComponent, _components_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_6__.ColorCellComponent, _components_custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_15__.RoleCellComponent, _components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_3__.ActionsCellComponent, _components_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_16__.RemoveDialogComponent, _components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_1__.CustomActionsComponent, _components_custom_table_cell_render_comment_cell_component__WEBPACK_IMPORTED_MODULE_7__.CommentCellComponent, _components_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_17__.SettingsDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTagModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbPopoverModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_22__.NbEvaIconsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbSpinnerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbTooltipModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__.NbFormFieldModule],
    exports: [_components_custom_table_cell_render_age_cell_component__WEBPACK_IMPORTED_MODULE_4__.AgeCellComponent, _components_custom_table_cell_render_phone_cell_component__WEBPACK_IMPORTED_MODULE_12__.PhoneCellComponent, _components_custom_table_cell_render_customer_status_cell_component__WEBPACK_IMPORTED_MODULE_8__.CustomerStatusCellComponent, _components_custom_table_cell_render_date_cell_component__WEBPACK_IMPORTED_MODULE_9__.DateCellComponent, _components_custom_table_cell_render_email_cell_component__WEBPACK_IMPORTED_MODULE_10__.EmailCellComponent, _components_custom_table_cell_render_process_status_cell_component__WEBPACK_IMPORTED_MODULE_14__.ProcessStatusCellComponent, _components_custom_table_cell_render_bold_text_cell_component__WEBPACK_IMPORTED_MODULE_5__.BoldTextCellComponent, _components_custom_table_cell_render_gender_cell_component__WEBPACK_IMPORTED_MODULE_11__.GenderCellComponent, _components_custom_table_cell_render_price_cell_component__WEBPACK_IMPORTED_MODULE_13__.PriceCellComponent, _components_custom_table_cell_render_accessory_status_cell_component__WEBPACK_IMPORTED_MODULE_2__.AccessoryStatusCellComponent, _components_custom_table_cell_render_color_cell_component__WEBPACK_IMPORTED_MODULE_6__.ColorCellComponent, _components_custom_table_cell_render_role_cell_component__WEBPACK_IMPORTED_MODULE_15__.RoleCellComponent, _components_custom_table_cell_render_actions_cell_component__WEBPACK_IMPORTED_MODULE_3__.ActionsCellComponent, _components_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_16__.RemoveDialogComponent, _components_custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_1__.CustomActionsComponent, _components_custom_table_cell_render_comment_cell_component__WEBPACK_IMPORTED_MODULE_7__.CommentCellComponent, _components_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_17__.SettingsDialogComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_shared_directives_base-table_directive_ts-src_app_pages_shared_shared_m-e91c3c.js.map