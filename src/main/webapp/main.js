(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/add-request/add-request.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-request/add-request.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#673ab7}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ffd740}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#673ab7}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ffd740}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(0,0,0,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#673ab7}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ffd740}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#673ab7}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ffd740}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ffd740}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,215,64,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ffd740}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(103,58,183,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#673ab7}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ffd740}.forms-container{\r\n  width: 600px;\r\n  position: relative;\r\n  margin: auto;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  background-color:white;\r\n  padding: 10px;\r\n}.forms-container .formHeader {\r\n  border-bottom: 1px solid #5a5a5a;\r\n\r\n}.forms-container .formHeader .close:hover{\r\n  cursor: pointer;\r\n}.forms-container .formTitle{\r\n  display: inline-block;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  color: #5a5a5a;\r\n  padding: 6px 10px;\r\n}.card{\r\n  height: auto !important;\r\n  border:none;\r\n}/*----------------------*/.card-header{\r\n  border: none;\r\n}a:not([href]):not([tabindex]){\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #b9b9b9;\r\n\r\n}li.active[_ngcontent-c6]{\r\n  border-bottom: 1px solid #0096d6;\r\n}li.active[_ngcontent-c6] a{\r\n  color: #0096d6 !important;\r\n\r\n}.nav-justified .nav-item {\r\n  padding: 10px 0 !important;\r\n  border-bottom: 1px solid #f2f2f2 !important;\r\n}.urgent{\r\n  margin-top: 15px;\r\n  background-color: #bbedff;\r\n  padding: 9px 20px;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  font-weight: bold\r\n}.urgent .urgent-text{\r\n  margin-right: 20px;\r\n}.radioContainer{\r\n  padding: 18px 10px;\r\n  display: flex;\r\n}.radioContainer .type{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #5a5a5a;\r\n  line-height: 1.2;\r\n  margin-right: 15px;\r\n}.radioContainer .TestRadioCont .TestRadio,.radioContainer .LabRadioCont .LabRadio{\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 2px solid #5a5a5a;\r\n  padding: 2px;\r\n}.radioContainer .TestRadioCont .TestRadio.checked,.radioContainer .LabRadioCont .LabRadio.checked {\r\n  border: 2px solid #0096d6;\r\n}.radioContainer .TestRadioCont:hover,.radioContainer .LabRadioCont:hover{\r\n  cursor: pointer;\r\n}.radioContainer .TestRadioCont .TestRadio .checkedTestRadio,.radioContainer .LabRadioCont .LabRadio .checkedLabRadio{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color:#0096d6;\r\n  border-radius:50% ;\r\n}.radioContainer .TestRadioCont .title,.radioContainer .LabRadioCont .title{\r\n  margin-right: 14px;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  display: inline-block;\r\n  color: #5a5a5a;\r\n  position: relative;\r\n  top: -5px;\r\n  margin-left: 4px;\r\n}.radioContainer input[type=\"checkbox\"]{\r\n  position: absolute;\r\n  z-index: -1;\r\n}.inputsForm{\r\n  display: grid;\r\n  grid-template-columns:1fr 1fr ;\r\n  grid-template-rows: repeat(3,65px);\r\n\r\n}.inputsForm input,.inputsForm select{\r\n  border: none;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  /*border-bottom: 1px solid #b9b9b9;*/\r\n\r\n}.inputsForm input::-webkit-input-placeholder{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n}.inputsForm input::-ms-input-placeholder{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n}.inputsForm input::placeholder{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n}.inputsForm .mat-form-field-appearance-legacy .mat-form-field-wrapper{\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\r\n\r\n}.inputsForm .halfShiftText {\r\n  position: relative;\r\n  margin-right: 15px;\r\n  top: -1px;\r\n}.inputsForm .halfShift{\r\n\r\n  padding-top: 30px;\r\n}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n  background-color: rgba(0,150,214,.54);\r\n}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\r\n  background-color: #0096d6;\r\n}.mat-slide-toggle.mat-checked .mat-ripple-element{\r\n  background-color: #0096d6;\r\n}.cancel{\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: -3px;\r\n  border: none;\r\n  background: rgba(0,0,0,0);\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n}.btn-secondary{\r\n  width: 60px;\r\n  height: 26px;\r\n  background-color: #0096d6;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  padding: 0;\r\n  color: #ffffff;\r\n  border-radius: 0;\r\n}.btn-secondary:hover{\r\n  background-color: #0096d6;\r\n}.halfShift{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  font-weight: bold;\r\n}.carouselItem{\r\n  height: 100%;\r\n  width: 50px;\r\n  background-color: red;\r\n}/*2*/.RequestDetails{\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}.RequestDetails input{\r\n  border: none;\r\n\r\n}.RequestDetails  .mat-form-field-appearance-legacy .mat-form-field-wrapper{\r\n  margin-top:15px;\r\n}.RequestDetails  .requestMedia {\r\n  margin-bottom: 25px;\r\n}.RequestDetails  .requestMedia span.title , .RequestDetails  .ReplaceComponent span.title {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #b9b9b9;\r\n  margin-bottom: 11px;\r\n  display: block;\r\n}.RequestDetails  .requestMedia .add , .RequestDetails  .ReplaceComponent .add{\r\n  display: grid;\r\n  grid-template-columns: 75px auto;\r\n  border-bottom:1px solid #b9b9b9;\r\n  position: relative;\r\n}.RequestDetails  .requestMedia .add .addedContent,\r\n.RequestDetails  .ReplaceComponent .add .addedContent{\r\n  border-left: 1px solid #0096d6;\r\n  margin-bottom: 3px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}.RequestDetails  .requestMedia .add .addedContent .addedMedia,\r\n.RequestDetails  .ReplaceComponent .add .addedContent .addedComp{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n  background-color: #e0e1e4;\r\n  margin: 2px 2px;\r\n  padding: 2px 6px;\r\n  display: flex;\r\n  position: relative;\r\n}.RequestDetails  .requestMedia .add .addedContent .addedMedia .sittings,\r\n.RequestDetails  .ReplaceComponent .add .addedContent .addedComp .sittings{\r\n  color: #5a5a5a;\r\n  font-size: 14px;\r\n  margin-left: 12px;\r\n}.RequestDetails  .requestMedia .add .addedContent .addedMedia .sittings i ,\r\n.RequestDetails  .ReplaceComponent .add .addedContent .addedComp .sittings i{\r\n  margin: 2px 3px;\r\n}.RequestDetails  .requestMedia .add .addedContent .addedMedia .sittings:hover ,\r\n.RequestDetails  .ReplaceComponent .add .addedContent .addedComp .sittings:hover{\r\n  cursor: pointer;\r\n}.RequestDetails  .requestMedia .add span ,\r\n.RequestDetails  .ReplaceComponent .add span{\r\n  cursor: pointer;\r\n  color: #0096d6;\r\n  font-size: 18px;\r\n  margin-bottom: 3px;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n}.RequestDetails  .requestMedia .add .popup .mat-form-field-infix,\r\n.RequestDetails  .ReplaceComponent .add .popup .mat-form-field-infix{\r\n  width: auto;\r\n}.RequestDetails  .requestMedia .add .popup .mat-form-field-appearance-legacy .mat-form-field-wrapper,\r\n.RequestDetails  .ReplaceComponent .add .popup .mat-form-field-appearance-legacy .mat-form-field-wrapper{\r\n  margin-right:15px;\r\n}.RequestDetails  .requestMedia .add .popup ,\r\n.RequestDetails  .ReplaceComponent .add .popup{\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 0px 15px;\r\n  position: absolute;\r\n  width: 317px;\r\n  height: 214px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  z-index: 100;\r\n  left: 90px;\r\n  top: -83px;\r\n}.RequestDetails  .requestMedia .add .popup mat-form-field,\r\n.RequestDetails  .ReplaceComponent .add .popup mat-form-field{\r\n  display: block;\r\n}.RequestDetails  .requestMedia .add .editPopup ,\r\n.RequestDetails  .ReplaceComponent .add .editPopup {\r\n  display: block;\r\n  left: 180px;\r\n  top: -91px;\r\n}.RequestDetails  .requestMedia .add .popup .media_info, .RequestDetails  .ReplaceComponent .add .popup .media_info{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}.RequestDetails  .requestMedia .add .popup .buttons ,\r\n.RequestDetails  .ReplaceComponent .add .popup .buttons {\r\n  border-top: 1px solid #e0e1e4;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  padding: 12px 0;\r\n\r\n}.RequestDetails  .requestMedia .add .popup .buttons button,\r\n.RequestDetails  .ReplaceComponent .add .popup .buttons button{\r\n  border: none;\r\n  padding: 5px 15px;\r\n}.RequestDetails  .requestMedia .add .popup .buttons .cancelBtn,\r\n.RequestDetails  .ReplaceComponent .add .popup .buttons .cancelBtn{\r\n\r\n  background-color: white;\r\n  color: #5a5a5a;\r\n  margin-left: auto;\r\n\r\n}.RequestDetails  .requestMedia .add .popup .buttons .done,\r\n.RequestDetails  .ReplaceComponent .add .popup .buttons .done{\r\n  background-color: #0096d6;\r\n  color: white;\r\n\r\n}/*3*/.optionalText{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #5a5a5a;\r\n  margin: 20px 0;\r\n}.addFile{\r\n  margin: 10px 0;\r\n}.addFile:hover{\r\n  cursor: pointer;\r\n}.addFile .add{\r\n  width: 20px;\r\n  font-size: 20px;\r\n  background-color: #0296d6;\r\n  height: 20px;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  color: white;\r\n  position: relative;\r\n}.addFile .add span{\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 3px;\r\n}.addFile span.text{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #5a5a5a;\r\n  position: relative;\r\n  top: -4px;\r\n  left: 4px;\r\n}/*4*/.submittedData{\r\n  overflow: auto;\r\n  height: 486px;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n\r\n}.submittedData div{\r\n  padding: 8px 5px;\r\n  border-bottom: 1px solid #b9b9b9;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MiLCJzcmMvYXBwL2FkZC1yZXF1ZXN0L2FkZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGVBQWUsQ0FBQyxjQUFjLENBQUMsOENBQThDLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLHlDQUF5QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMscURBQXFELENBQUMsZUFBZSxDQUFDLDZDQUE2QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLHdEQUF3RCxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsdURBQXVELENBQUMsZUFBZSxDQUFDLDZCQUE2QixxREFBcUQsQ0FBQyxzQ0FBc0MscURBQXFELENBQUMsNENBQTRDLGVBQWUsQ0FBQyx3QkFBd0IscURBQXFELENBQUMsOENBQThDLHVEQUF1RCxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIscURBQXFELENBQUMsNEdBQTRHLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLDhDQUE4QyxDQUFDLFVBQVUsOENBQThDLENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUNBQWlDLGNBQWMsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsOENBQThDLENBQUMseUNBQXlDLGdCQUFnQixDQUFDLFVBQVUsY0FBYyxDQUFDLGVBQWUsQ0FBQywrRUFBK0UsY0FBYyxDQUFDLFdBQVcsOENBQThDLENBQUMsaUJBQWlC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a0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBQ1gsQ0FFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWCxDQUVBLElBQUksQ0FDSjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjOztBQUVoQixDQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRkLXJlcXVlc3QvYWRkLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZTo2cHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjI0cHh9Lm1hdC1oMSwubWF0LWhlYWRsaW5lLC5tYXQtdHlwb2dyYXBoeSBoMXtmb250OjQwMCAyNHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWgyLC5tYXQtdGl0bGUsLm1hdC10eXBvZ3JhcGh5IGgye2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6NDAwIDE2cHgvMjhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIDExLjYycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIDkuMzhweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LTIsLm1hdC1ib2R5LXN0cm9uZ3tmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LWNhcHRpb24sLm1hdC1zbWFsbHtmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA1NnB4O2xldHRlci1zcGFjaW5nOi0uMDVlbX0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHg7bGV0dGVyLXNwYWNpbmc6LS4wMmVtfS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweDtsZXR0ZXItc3BhY2luZzotLjAwNWVtfS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJ1dHRvbiwubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1taW5pLWZhYiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtYnV0dG9uLXRvZ2dsZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYXJke2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1jb250ZW50LC5tYXQtY2FyZC1zdWJ0aXRsZXtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVse2xpbmUtaGVpZ2h0OjI0cHh9Lm1hdC1jaGlwe2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1oZWFkZXItY2VsbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Zm9udC1zaXplOjE0cHh9Lm1hdC1jYWxlbmRhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LS44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi40Mzc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMnB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzUlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMjgxMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7bWFyZ2luLXRvcDouNTQxNjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2N2VtKX1AbWVkaWEgcHJpbnR7Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSguNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKC43NSl9fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjI1ZW0gMCAuNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjA5Mzc1ZW07bWFyZ2luLXRvcDotLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MWVtIDAgMWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuODQzNzVlbTttYXJnaW4tdG9wOi0uMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyLC5tYXQtZ3JpZC10aWxlLWhlYWRlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0uMDYyNWVtfS5tYXQtbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5tYXQtcmFkaW8tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNlbGVjdHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10b29sYmFyLC5tYXQtdG9vbGJhciBoMSwubWF0LXRvb2xiYXIgaDIsLm1hdC10b29sYmFyIGgzLC5tYXQtdG9vbGJhciBoNCwubWF0LXRvb2xiYXIgaDUsLm1hdC10b29sYmFyIGg2e2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjB9Lm1hdC10b29sdGlwe2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNpbXBsZS1zbmFja2Jhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LW5lc3RlZC10cmVlLW5vZGUsLm1hdC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllcigwLDAsLjIsMSk7dHJhbnNmb3JtOnNjYWxlKDApfUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LXJpcHBsZS1lbGVtZW50e2Rpc3BsYXk6bm9uZX19LmNkay12aXN1YWxseS1oaWRkZW57Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7b3V0bGluZTowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciwuY2RrLW92ZXJsYXktY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eXtkaXNwbGF5Om5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNn19LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zMil9LmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MH0uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttaW4td2lkdGg6MXB4O21pbi1oZWlnaHQ6MXB4fS5jZGstZ2xvYmFsLXNjcm9sbGJsb2Nre3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7b3ZlcmZsb3cteTpzY3JvbGx9QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydHsvKiEqL31Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZHsvKiEqL30uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGx7YW5pbWF0aW9uLW5hbWU6Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbi1uYW1lOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemV7cmVzaXplOm5vbmV9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ3toZWlnaHQ6YXV0byFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjJweCAwIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudH0ubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksLm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCk7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uLm1hdC1vcHRpb24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojNjczYWI3fS5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmZmQ3NDB9Lm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmNDQzMzZ9Lm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXBzZXVkby1jaGVja2JveHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVye2NvbG9yOiNmYWZhZmF9Lm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmZmQ3NDB9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM2NzNhYjd9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2I5YjliOTtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1iYWRnZS1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoLjYpO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwb2ludGVyLWV2ZW50czpub25lfS5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZle3RyYW5zZm9ybTpub25lfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bGluZS1oZWlnaHQ6MTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDB9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiM2NzNhYjd9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1taW5pLWZhYiwubWF0LXJhaXNlZC1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LWFjY2VudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmQtc3VidGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWNoZWNrbWFya3tmaWxsOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6I2ZhZmFmYSFpbXBvcnRhbnR9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDpibGFjay1vbi13aGl0ZSl7Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzAwMCFpbXBvcnRhbnR9fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWRpc2FibGVke29wYWNpdHk6LjV9fUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZDowIDB9fS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiNztjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5tYXQtdGFibGV7YmFja2dyb3VuZDojZmZmfS5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCwubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUtc3RpY2t5LFttYXQtZm9vdGVyLXJvd10sW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sbWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvd3tiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvdyx0ZC5tYXQtY2VsbCx0ZC5tYXQtZm9vdGVyLWNlbGwsdGgubWF0LWhlYWRlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24sLm1hdC1kYXRlcGlja2VyLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0uY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZle2NvbG9yOiM2NzNhYjd9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1kaWFsb2ctY29udGFpbmVye2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGl2aWRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRpdmlkZXItdmVydGljYWx7Ym9yZGVyLXJpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnR7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzY3M2FiN30ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIsLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzY3M2FiN30ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLC5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1tZW51LWl0ZW17YmFja2dyb3VuZDowIDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2QxYzRlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZDFjNGU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZlNTdmfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmZTU3Zn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiM2NzNhYjd9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmZDc0MH0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzY3M2FiN30ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmZkNzQwfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSl7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZXtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjIpfS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLjAwMDFkZWcscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6MCAwfX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9ye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3Jle2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDksMTk2LDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjI5LDEyNywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmZDc0MH0iLCJAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzJztcclxuXHJcbi5mb3Jtcy1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybXMtY29udGFpbmVyIC5mb3JtSGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVhNWE1YTtcclxuXHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIgLmZvcm1IZWFkZXIgLmNsb3NlOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm1zLWNvbnRhaW5lciAuZm9ybVRpdGxle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jYXJkLWhlYWRlcntcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSl7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNiOWI5Yjk7XHJcblxyXG59XHJcbmxpLmFjdGl2ZVtfbmdjb250ZW50LWM2XXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOTZkNjtcclxufVxyXG5saS5hY3RpdmVbX25nY29udGVudC1jNl0gYXtcclxuICBjb2xvcjogIzAwOTZkNiAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLm5hdi1qdXN0aWZpZWQgLm5hdi1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnVyZ2VudHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmVkZmY7XHJcbiAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLnVyZ2VudCAudXJnZW50LXRleHR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmFkaW9Db250YWluZXJ7XHJcbiAgcGFkZGluZzogMThweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yYWRpb0NvbnRhaW5lciAudHlwZXtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4ucmFkaW9Db250YWluZXIgLlRlc3RSYWRpb0NvbnQgLlRlc3RSYWRpbywucmFkaW9Db250YWluZXIgLkxhYlJhZGlvQ29udCAuTGFiUmFkaW97XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLnJhZGlvQ29udGFpbmVyIC5UZXN0UmFkaW9Db250IC5UZXN0UmFkaW8uY2hlY2tlZCwucmFkaW9Db250YWluZXIgLkxhYlJhZGlvQ29udCAuTGFiUmFkaW8uY2hlY2tlZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOTZkNjtcclxufVxyXG4ucmFkaW9Db250YWluZXIgLlRlc3RSYWRpb0NvbnQ6aG92ZXIsLnJhZGlvQ29udGFpbmVyIC5MYWJSYWRpb0NvbnQ6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yYWRpb0NvbnRhaW5lciAuVGVzdFJhZGlvQ29udCAuVGVzdFJhZGlvIC5jaGVja2VkVGVzdFJhZGlvLC5yYWRpb0NvbnRhaW5lciAuTGFiUmFkaW9Db250IC5MYWJSYWRpbyAuY2hlY2tlZExhYlJhZGlve1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDk2ZDY7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCUgO1xyXG59XHJcbi5yYWRpb0NvbnRhaW5lciAuVGVzdFJhZGlvQ29udCAudGl0bGUsLnJhZGlvQ29udGFpbmVyIC5MYWJSYWRpb0NvbnQgLnRpdGxle1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTVweDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4ucmFkaW9Db250YWluZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmlucHV0c0Zvcm17XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciA7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyw2NXB4KTtcclxuXHJcbn1cclxuLmlucHV0c0Zvcm0gaW5wdXQsLmlucHV0c0Zvcm0gc2VsZWN0e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjliOWI5OyovXHJcblxyXG59XHJcbi5pbnB1dHNGb3JtIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW5wdXRzRm9ybSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRzRm9ybSAuaGFsZlNoaWZ0VGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB0b3A6IC0xcHg7XHJcbn1cclxuLmlucHV0c0Zvcm0gLmhhbGZTaGlmdHtcclxuXHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMTUwLDIxNCwuNTQpO1xyXG59XHJcblxyXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZkNjtcclxufVxyXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ZDY7XHJcbn1cclxuXHJcblxyXG4uY2FuY2Vse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE2cHg7XHJcbiAgbGVmdDogLTNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxufVxyXG4uYnRuLXNlY29uZGFyeXtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZkNjtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZkNjtcclxufVxyXG4uaGFsZlNoaWZ0e1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxJdGVte1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLyoyKi9cclxuLlJlcXVlc3REZXRhaWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuXHJcbi5SZXF1ZXN0RGV0YWlscyBpbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSBzcGFuLnRpdGxlICwgLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCBzcGFuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2I5YjliOTtcclxuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkICwgLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2I5YjliOTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLlJlcXVlc3REZXRhaWxzICAucmVxdWVzdE1lZGlhIC5hZGQgLmFkZGVkQ29udGVudCxcclxuLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRkIC5hZGRlZENvbnRlbnR7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA5NmQ2O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLlJlcXVlc3REZXRhaWxzICAucmVxdWVzdE1lZGlhIC5hZGQgLmFkZGVkQ29udGVudCAuYWRkZWRNZWRpYSxcclxuLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRkIC5hZGRlZENvbnRlbnQgLmFkZGVkQ29tcHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMWU0O1xyXG4gIG1hcmdpbjogMnB4IDJweDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5hZGRlZENvbnRlbnQgLmFkZGVkTWVkaWEgLnNpdHRpbmdzLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLmFkZGVkQ29udGVudCAuYWRkZWRDb21wIC5zaXR0aW5nc3tcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5hZGRlZENvbnRlbnQgLmFkZGVkTWVkaWEgLnNpdHRpbmdzIGkgLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLmFkZGVkQ29udGVudCAuYWRkZWRDb21wIC5zaXR0aW5ncyBpe1xyXG4gIG1hcmdpbjogMnB4IDNweDtcclxufVxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEgLmFkZCAuYWRkZWRDb250ZW50IC5hZGRlZE1lZGlhIC5zaXR0aW5nczpob3ZlciAsXHJcbi5SZXF1ZXN0RGV0YWlscyAgLlJlcGxhY2VDb21wb25lbnQgLmFkZCAuYWRkZWRDb250ZW50IC5hZGRlZENvbXAgLnNpdHRpbmdzOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEgLmFkZCBzcGFuICxcclxuLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRkIHNwYW57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMDA5NmQ2O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5wb3B1cCAubWF0LWZvcm0tZmllbGQtaW5maXgsXHJcbi5SZXF1ZXN0RGV0YWlscyAgLlJlcGxhY2VDb21wb25lbnQgLmFkZCAucG9wdXAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5wb3B1cCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIsXHJcbi5SZXF1ZXN0RGV0YWlscyAgLlJlcGxhY2VDb21wb25lbnQgLmFkZCAucG9wdXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIG1hcmdpbi1yaWdodDoxNXB4O1xyXG59XHJcblxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEgLmFkZCAucG9wdXAgLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLnBvcHVwe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMxN3B4O1xyXG4gIGhlaWdodDogMjE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGxlZnQ6IDkwcHg7XHJcbiAgdG9wOiAtODNweDtcclxufVxyXG5cclxuLlJlcXVlc3REZXRhaWxzICAucmVxdWVzdE1lZGlhIC5hZGQgLnBvcHVwIG1hdC1mb3JtLWZpZWxkLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLnBvcHVwIG1hdC1mb3JtLWZpZWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLlJlcXVlc3REZXRhaWxzICAucmVxdWVzdE1lZGlhIC5hZGQgLmVkaXRQb3B1cCAsXHJcbi5SZXF1ZXN0RGV0YWlscyAgLlJlcGxhY2VDb21wb25lbnQgLmFkZCAuZWRpdFBvcHVwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAxODBweDtcclxuICB0b3A6IC05MXB4O1xyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5wb3B1cCAubWVkaWFfaW5mbywgLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRkIC5wb3B1cCAubWVkaWFfaW5mb3tcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEgLmFkZCAucG9wdXAgLmJ1dHRvbnMgLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLnBvcHVwIC5idXR0b25zIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTFlNDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEycHggMDtcclxuXHJcbn1cclxuLlJlcXVlc3REZXRhaWxzICAucmVxdWVzdE1lZGlhIC5hZGQgLnBvcHVwIC5idXR0b25zIGJ1dHRvbixcclxuLlJlcXVlc3REZXRhaWxzICAuUmVwbGFjZUNvbXBvbmVudCAuYWRkIC5wb3B1cCAuYnV0dG9ucyBidXR0b257XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbi5SZXF1ZXN0RGV0YWlscyAgLnJlcXVlc3RNZWRpYSAuYWRkIC5wb3B1cCAuYnV0dG9ucyAuY2FuY2VsQnRuLFxyXG4uUmVxdWVzdERldGFpbHMgIC5SZXBsYWNlQ29tcG9uZW50IC5hZGQgLnBvcHVwIC5idXR0b25zIC5jYW5jZWxCdG57XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxufVxyXG4uUmVxdWVzdERldGFpbHMgIC5yZXF1ZXN0TWVkaWEgLmFkZCAucG9wdXAgLmJ1dHRvbnMgLmRvbmUsXHJcbi5SZXF1ZXN0RGV0YWlscyAgLlJlcGxhY2VDb21wb25lbnQgLmFkZCAucG9wdXAgLmJ1dHRvbnMgLmRvbmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZkNjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4vKjMqL1xyXG4ub3B0aW9uYWxUZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uYWRkRmlsZXtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmFkZEZpbGU6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkRmlsZSAuYWRke1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI5NmQ2O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkRmlsZSAuYWRkIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTZweDtcclxuICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5hZGRGaWxlIHNwYW4udGV4dHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGxlZnQ6IDRweDtcclxufVxyXG5cclxuLyo0Ki9cclxuLnN1Ym1pdHRlZERhdGF7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA0ODZweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuXHJcbn1cclxuXHJcbi5zdWJtaXR0ZWREYXRhIGRpdntcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjliOWI5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/add-request/add-request.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-request/add-request.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--elapses ... if text to long-->\r\n<!--if there is many parameter put them in separate class-->\r\n<!-- map find ...-->\r\n<!---->\r\n<div class=\"addRequest\">\r\n<div class=\"forms-container\">\r\n  <div class=\"formHeader\">\r\n    <div class=\"formTitle\">New Press Request</div>\r\n    <div class=\"close\" (click)=\"closeAddRequest()\">x</div>\r\n  </div>\r\n  <form-wizard >\r\n    <!--step1-->\r\n    <wizard-step [title]=\"'Basic info'\"  >\r\n\r\n      <div class=\"first-form\">\r\n        <div class=\"urgent\">\r\n          <span class=\"urgent-text\">Urgent submission during this week?</span>\r\n          <mat-slide-toggle name=\"urgent\" [(ngModel)]=\"urgent\"></mat-slide-toggle>\r\n        </div>\r\n\r\n        <div class=\"radioContainer\">\r\n          <div class=\"type\">Type</div>\r\n\r\n          <div class=\"TestRadioCont\" (click)=\"toggleTest()\">\r\n            <input type=\"checkbox\" [checked]=\"isTestChecked\">\r\n            <div class=\"TestRadio\" [class.checked]=\"isTestChecked\" >\r\n              <div class=\"checkedTestRadio\" *ngIf=\"isTestChecked\"></div>\r\n            </div>\r\n            <div class=\"title\">Test</div>\r\n          </div>\r\n\r\n          <div class=\"LabRadioCont\" (click)=\"toggleLab()\">\r\n            <input type=\"checkbox\" [checked]=\"isLabChecked\">\r\n            <div class=\"LabRadio\" [class.checked]=\"isLabChecked\" >\r\n              <div class=\"checkedLabRadio\" *ngIf=\"isLabChecked\"></div>\r\n            </div>\r\n            <div class=\"title\">Lab</div>\r\n          </div>\r\n        </div>\r\n\r\n        <form class=\"inputsForm\">\r\n          <mat-form-field>\r\n            <input matInput name=\"testName\"   type=\"text\" placeholder=\"Test Name\" required minlength=\"2\" [(ngModel)]=\"Test_Name\">\r\n            <!--<mat-hint class=\"errorTxt\" >invalid feild </mat-hint>-->\r\n          </mat-form-field>\r\n          <div></div>\r\n\r\n          <mat-form-field>\r\n            <select matNativeControl [(ngModel)]=\"Project_NameID\" name=\"Project_NameID\" placeholder=\"Project Name\" (change)=\"fillProductArray($event.target)\">\r\n              <option style=\"display:none;\"></option>\r\n            <option    *ngFor=\"let project of projectsArray\" [value]=\"project.id\">{{project.name}}</option>\r\n            </select>\r\n            <!--<mat-hint class=\"errorTxt\">invalid feild </mat-hint>-->\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <select matNativeControl [(ngModel)]=\"Product_NameID\" name=\"Product_NameID\" placeholder=\"Product Name\">\r\n              <option style=\"display:none;\"></option>\r\n              <option  *ngFor=\"let product of productsArray\" [value]=\"product.id\">{{product.name}}</option>\r\n            </select>\r\n            <!--<mat-hint class=\"errorTxt\">invalid feild </mat-hint>-->\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input  matInput type=\"number\" [disabled]=\"isHalfShift\" name=\"shift\" [(ngModel)]=\"shift\"  min=\"0\">\r\n            <!--<mat-hint class=\"errorTxt\">invalid feild </mat-hint>-->\r\n          </mat-form-field>\r\n          <div class=\"halfShift\" >\r\n            <span class=\"halfShiftText\" >Half shift</span>\r\n            <mat-slide-toggle [(ngModel)]=\"isHalfShift\" name=\"isHalfShift\" (change)=\"HalfShiftChange()\"></mat-slide-toggle>\r\n          </div>\r\n        </form>\r\n\r\n        <app-slider></app-slider>\r\n\r\n      </div>\r\n\r\n      <button class=\"cancel\" (click)=\"closeAddRequest()\">CANCEL</button>\r\n\r\n    </wizard-step>\r\n    <!--step2-->\r\n    <wizard-step [title]=\"'Request details'\" >\r\n      <div class=\"RequestDetails\">\r\n        <mat-form-field><input matInput type=\"text\" placeholder=\"Test Objectives\" name=\"Test_Objectives\" [(ngModel)]=\"Test_Objectives\"></mat-form-field>\r\n\r\n        <div class=\"requestMedia\">\r\n          <span class=\"title\">Request media</span>\r\n          <div class=\"add\">\r\n            <span (click)=\"requestMediaPopupShow()\">+ &nbsp;&nbsp; Add</span>\r\n            <div class=\"addedContent\">\r\n              <div class=\"addedMedia\" *ngFor=\"let addedMedia of requestMedia;let i = index\">\r\n                <div class=\"info\">{{addedMedia.media_name}} &nbsp; (Qty : {{addedMedia.media_Quantity}} {{addedMedia.media_type}})</div>\r\n                <div class=\"sittings\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"displayRequestEditPopup(i)\"></i>\r\n                  <div class=\"popup editPopup\" *ngIf=\"requestMediaEditPopup[i]==true\">\r\n                    <mat-form-field>\r\n                      <select matNativeControl  (input)=\"editMedia_name=$event.target.value\" name=\"media\" [ngModel]=\"addedMedia.id\" placeholder=\"media name\" required (change)=\"modifySelectedMediaTypes($event.target)\">\r\n                        <option [value]=\"media.id\" *ngFor=\"let media of mediaArray\" >{{media.name}}</option>\r\n                      </select>\r\n                    </mat-form-field>\r\n                    <div class=\"media_info\">\r\n                      <mat-form-field>\r\n                        <input matInput  type=\"number\" placeholder=\"Quantity\"  name=\"editMedia_Quantity\" [(ngModel)]=\"editMedia_Quantity\" required min=\"0\">\r\n                      </mat-form-field>\r\n                      <mat-form-field>\r\n                        <select matNativeControl  (input)=\"editMedia_type=$event.target.value\"  name=\"mediaID\" [ngModel]=\"addedMedia.mediaID\" placeholder=\"media type\" required >\r\n                          <option style=\"display:none;\"></option>\r\n                          <option [value]=\"mediaType.id\" *ngFor=\"let mediaType of selectedMediaTypes\">{{mediaType.name}}</option>\r\n                        </select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"buttons\">\r\n                      <button class=\"cancelBtn\" (click)=\"requestMediaEditPopupHide(i)\">CANCEL</button>\r\n                      <button class=\"done\" (click)=\"editRequestMedia(i)\" >Edit</button>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteMediaByIndex(i)\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"popup\">\r\n              <mat-form-field>\r\n                <select matNativeControl name=\"media_nameID\" [(ngModel)]=\"media_nameID\" placeholder=\"media name\" required (change)=\"modifySelectedMediaTypes($event.target)\">\r\n                  <option style=\"display:none;\"></option>\r\n                  <option [value]=\"media.id\" *ngFor=\"let media of mediaArray\">{{media.name}}</option>\r\n                </select>\r\n              </mat-form-field>\r\n              <div class=\"media_info\">\r\n                <mat-form-field>\r\n                  <input matInput  type=\"number\" placeholder=\"Quantity\" name=\"media_Quantity\" [(ngModel)]=\"media_Quantity\" required  min=\"0\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <select matNativeControl name=\"media_typeID\" [(ngModel)]=\"media_typeID\" placeholder=\"media type\" required >\r\n                    <option style=\"display:none;\"></option>\r\n                    <option [value]=\"mediaType.id\" *ngFor=\"let mediaType of selectedMediaTypes\">{{mediaType.name}}</option>\r\n                  </select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"buttons\">\r\n                <button class=\"cancelBtn\" (click)=\"requestMediaPopupHide()\">CANCEL</button>\r\n                <button class=\"done\" (click)=\"addRequestMedia()\" >Done</button>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"ReplaceComponent\">\r\n          <span class=\"title\">Replace Component</span>\r\n          <div class=\"add\">\r\n            <span (click)=\"replaceComponentPopupShow()\">+ &nbsp;&nbsp; Add</span>\r\n            <div class=\"addedContent\" >\r\n              <div class=\"addedComp\" *ngFor=\"let addedComp of replaceComponent;let i = index\">\r\n\r\n              <div class=\"info\">{{addedComp.compo_name}} &nbsp; (Num : {{addedComp.compo_num}})</div>\r\n                <div class=\"sittings\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"displayCompEditPopup(i)\"></i>\r\n                  <div class=\"popup editPopup\" *ngIf=\"compEditPopupViability[i]==true\">\r\n                    <mat-form-field>\r\n                      <select matNativeControl (input)=\"editComponent_name=$event.target.value\" name=\"addedComp\" [ngModel]=\"addedComp.id\"   placeholder=\"Component name\" required >\r\n                        <option [value]=\"component.id\" *ngFor=\"let component of componentArray\">{{component.name}}</option>\r\n                      </select>\r\n                    </mat-form-field>\r\n                    <div class=\"media_info\">\r\n                      <mat-form-field>\r\n                        <input matInput  type=\"number\" placeholder=\"Num\" name=\"editComponent_Num\" [(ngModel)]=\"editComponent_Num\"  required min=\"0\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"buttons\">\r\n                      <button class=\"cancelBtn\" (click)=\"replaceComponentEditPopupHide(i)\">CANCEL</button>\r\n                      <button class=\"done\" (click)=\"editComponent(i)\" >Edit</button>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deletecompByIndex(i)\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"popup\">\r\n              <mat-form-field>\r\n                <select matNativeControl name=\"Component_name\" [(ngModel)]=\"Component_name\" placeholder=\"Component name\" required>\r\n                  <option style=\"display:none;\"></option>\r\n                  <option [value]=\"component.id\" *ngFor=\"let component of componentArray\">{{component.name}}</option>\r\n                </select>\r\n              </mat-form-field>\r\n              <div class=\"media_info\">\r\n                <mat-form-field>\r\n                  <input matInput  type=\"number\" placeholder=\"Num\"  name=\"Component_Num\" [(ngModel)]=\"Component_Num\" required min=\"0\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"buttons\">\r\n                <button class=\"cancelBtn\" (click)=\"replaceComponentPopupHide()\">CANCEL</button>\r\n                <button class=\"done\" (click)=\"addReplaceComponentMedia()\" >Done</button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <mat-form-field><input matInput type=\"text\" placeholder=\"Additional Comment\" name=\"Additional_Comment\"  [(ngModel)]=\"Additional_Comment\"></mat-form-field>\r\n      </div>\r\n      <app-slider ></app-slider>\r\n\r\n\r\n    </wizard-step>\r\n    <!--step3-->\r\n    <wizard-step [title]=\"'Test plan'\" >\r\n      <div class=\"optionalText\">Locate and upload your test plan document (optional)</div>\r\n      <div id=\"fileBtns\">\r\n        <app-upload-file *ngFor=\"let file of filesToUpload,let i = index\" ></app-upload-file>\r\n      </div>\r\n      <div class=\"addFile\" (click)=\"addFileBtn()\"><div class=\"add\" ><span>+</span></div><span class=\"text\">Add File</span></div>\r\n      <!--<div (click)=\"submitRequest()\">Done</div>-->\r\n      <app-slider></app-slider>\r\n    </wizard-step>\r\n    <!--step4-->\r\n    <wizard-step [title]=\"'Submit'\" (onComplete)=\"submitRequest()\">\r\n          <div class=\"submittedData\">\r\n          <div><span>urgent </span><span>{{urgent}}</span></div>\r\n          <div><span>Product_Name </span><span *ngIf=\"Product_NameID\">{{getProductByID(Product_NameID).name}}</span></div>\r\n          <div><span>Project_Name</span><span *ngIf=\"Project_NameID\"> {{getProjectByID(Project_NameID).name}}</span></div>\r\n          <div><span>Test_Name </span><span>{{Test_Name}}</span></div>\r\n          <div><span>Test_type </span><span>{{isLabChecked?\"Lab\":\"Test\"}}</span></div>\r\n          <div><span>shift</span> <span>{{shift}}</span></div>\r\n          <div><span>Test_Objectives </span><span>{{Test_Objectives}}</span></div>\r\n          <div *ngIf=\"Additional_Comment !=''\"><span>Additional_Comment</span><span> {{Additional_Comment}}</span></div>\r\n          <div><span>request Media Num </span><span>{{requestMedia.length}}</span></div>\r\n          <div><span>replace Component Num </span><span>{{replaceComponent.length}}</span></div>\r\n        </div>\r\n    </wizard-step>\r\n  </form-wizard>\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/add-request/add-request.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-request/add-request.component.ts ***!
  \******************************************************/
/*! exports provided: AddRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestComponent", function() { return AddRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _upload_file_file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload-file/file-upload.service */ "./src/app/upload-file/file-upload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/slider.service */ "./src/app/services/slider.service.ts");






var AddRequestComponent = /** @class */ (function () {
    function AddRequestComponent(sliderService, datePipe, dataBaseService, fileUploadService) {
        this.sliderService = sliderService;
        this.datePipe = datePipe;
        this.dataBaseService = dataBaseService;
        this.fileUploadService = fileUploadService;
        //from DB
        this.productsArray = [];
        this.projectsArray = [];
        this.mediaArray = [];
        this.mediaArrayTypes = [];
        this.selectedMediaTypes = [];
        this.componentArray = [];
        //form1 data
        this.urgent = false;
        this.Test_type = "lab";
        this.shift = 0;
        this.isHalfShift = false;
        this.media_Quantity = 0;
        this.editMedia_Quantity = 0;
        this.requestMedia = [];
        this.requestMediaEditPopup = [];
        this.replaceComponent = [];
        this.compEditPopupViability = [];
        this.filesToUpload = [];
        this.submitRequesData = {};
        //checkbox - function
        this.isTestChecked = false;
        this.isLabChecked = true;
    }
    AddRequestComponent.prototype.toggleTest = function () {
        this.isTestChecked = !this.isTestChecked;
        this.isLabChecked = this.isTestChecked ? false : this.isLabChecked;
        this.Test_type = this.isTestChecked ? 'Test' : 'Lab';
    };
    AddRequestComponent.prototype.toggleLab = function () {
        this.isLabChecked = !this.isLabChecked;
        this.isTestChecked = this.isLabChecked ? false : this.isTestChecked;
        this.Test_type = this.isTestChecked ? 'Test' : 'Lab';
    };
    AddRequestComponent.prototype.HalfShiftChange = function () {
        if (this.isHalfShift) {
            this.shift = 0.5;
        }
    };
    AddRequestComponent.prototype.requestMediaPopupShow = function () {
        $('.requestMedia .add .popup').show(300);
        this.replaceComponentPopupHide();
    };
    AddRequestComponent.prototype.requestMediaPopupHide = function () {
        $('.requestMedia .add .popup').hide(300);
        this.media_nameID = '';
        this.media_typeID = '';
        this.media_Quantity = 0;
    };
    AddRequestComponent.prototype.requestMediaEditPopupHide = function (index) {
        this.requestMediaEditPopup[index] = false;
        this.editMedia_name = '';
        this.editMedia_type = '';
        this.editMedia_Quantity = 0;
    };
    AddRequestComponent.prototype.replaceComponentPopupShow = function () {
        $('.ReplaceComponent .add .popup').show(300);
        this.requestMediaPopupHide();
    };
    AddRequestComponent.prototype.replaceComponentPopupHide = function () {
        $('.ReplaceComponent .add .popup').hide(300);
        this.Component_name = '';
        this.Component_Num = 0;
    };
    AddRequestComponent.prototype.replaceComponentEditPopupHide = function (index) {
        this.compEditPopupViability[index] = false;
        this.editComponent_name = '';
        this.editComponent_Num = 0;
    };
    AddRequestComponent.prototype.displayRequestEditPopup = function (index) {
        for (var i = 0; i < this.requestMediaEditPopup.length; i++) {
            this.requestMediaEditPopup[i] = false;
        }
        this.requestMediaEditPopup[index] = true;
        this.editMedia_Quantity = this.requestMedia[index].media_Quantity;
        this.editMedia_name = this.requestMedia[index].media_name;
    };
    AddRequestComponent.prototype.displayCompEditPopup = function (index) {
        for (var i = 0; i < this.compEditPopupViability.length; i++) {
            this.compEditPopupViability[i] = false;
        }
        // this.compEditPopupViability.map((compObj)=>{
        //   compObj=false;
        // });
        this.compEditPopupViability[index] = true;
        this.editComponent_Num = this.replaceComponent[index].compo_num;
    };
    AddRequestComponent.prototype.addRequestMedia = function () {
        var currenRequest = { media_name: '', media_type: '', media_Quantity: 0, id: 0, mediaTypeID: 0 };
        if (this.media_nameID != '' && this.media_typeID != '' && this.media_Quantity != 0) {
            currenRequest.id = Number(this.media_nameID);
            currenRequest.mediaTypeID = Number(this.media_typeID);
            currenRequest.media_name = this.getSelectedMediaByID(Number(this.media_nameID)).name;
            currenRequest.media_type = this.getSelectedMediaTypeByID(Number(this.media_typeID)).name;
            currenRequest.media_Quantity = this.media_Quantity;
            this.requestMedia.push(currenRequest);
            this.requestMediaEditPopup.push(false);
            this.requestMediaPopupHide();
            console.log('in' + this.media_nameID + '-' + this.media_typeID + '-' + this.media_Quantity);
            this.media_nameID = '';
            this.media_typeID = '';
            this.media_Quantity = 0;
        }
        console.log(this.media_nameID + '-' + this.media_typeID + '-' + this.media_Quantity);
    };
    AddRequestComponent.prototype.editRequestMedia = function (index) {
        if (Number(this.editMedia_name)) {
            this.requestMedia[index].id = Number(this.editMedia_name);
            this.requestMedia[index].media_name = this.getSelectedMediaByID(Number(this.editMedia_name)).name;
        }
        if (Number(this.editMedia_type)) {
            this.requestMedia[index].mediaTypeID = Number(this.editMedia_type);
            this.requestMedia[index].media_type = this.getSelectedMediaTypeByID(Number(this.editMedia_type)).name;
        }
        if (this.editMedia_Quantity != 0) {
            this.requestMedia[index].media_Quantity = this.editMedia_Quantity;
        }
        this.requestMediaEditPopupHide(index);
        this.editMedia_name = '';
        this.editMedia_type = '';
        this.editMedia_Quantity = 0;
    };
    AddRequestComponent.prototype.addReplaceComponentMedia = function () {
        var currenComp = { compo_name: '', compo_num: 0, id: 0 };
        if (Number(this.Component_name)) {
            currenComp.id = Number(this.Component_name);
            currenComp.compo_name = this.getSelectedComponentByID(Number(this.Component_name)).name;
            currenComp.compo_num = this.Component_Num;
            this.replaceComponent.push(currenComp);
            this.compEditPopupViability.push(false);
            this.replaceComponentPopupHide();
            this.Component_name = '';
            this.Component_Num = 0;
        }
    };
    AddRequestComponent.prototype.editComponent = function (index) {
        if (Number(this.editComponent_name)) {
            this.replaceComponent[index].id = Number(this.editComponent_name);
            this.replaceComponent[index].compo_name = this.getSelectedComponentByID(Number(this.editComponent_name)).name;
        }
        if (this.editComponent_Num != 0) {
            this.replaceComponent[index].compo_num = this.editComponent_Num;
        }
        this.replaceComponentEditPopupHide(index);
        this.editComponent_name = '';
        this.editComponent_Num = 0;
    };
    AddRequestComponent.prototype.deleteMediaByIndex = function (index) {
        this.requestMedia.splice(index, 1);
        this.requestMediaEditPopup.splice(index, 1);
    };
    AddRequestComponent.prototype.deletecompByIndex = function (index) {
        this.replaceComponent.splice(index, 1);
        this.compEditPopupViability.splice(index, 1);
    };
    AddRequestComponent.prototype.modifySelectedMediaTypes = function (selectedElem) {
        var _this = this;
        this.selectedMediaID = selectedElem.value;
        this.selectedMediaTypes = [];
        // var media = this.getSelectedMediaByID(Number(this.selectedMediaID));
        this.mediaArrayTypes.map(function (type) {
            if (type.media.id == Number(selectedElem.value)) {
                _this.selectedMediaTypes.push(type);
            }
        });
    };
    AddRequestComponent.prototype.getSelectedMediaByID = function (mediaID) {
        for (var _i = 0, _a = this.mediaArray; _i < _a.length; _i++) {
            var media = _a[_i];
            if (media.id == mediaID) {
                return media;
            }
        }
        return null;
    };
    AddRequestComponent.prototype.getSelectedComponentByID = function (componentID) {
        for (var _i = 0, _a = this.componentArray; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.id == componentID) {
                return component;
            }
        }
        return null;
    };
    AddRequestComponent.prototype.getSelectedMediaTypeByID = function (mediaTypeID) {
        for (var _i = 0, _a = this.selectedMediaTypes; _i < _a.length; _i++) {
            var mediaType = _a[_i];
            if (mediaType.id == mediaTypeID) {
                return mediaType;
            }
        }
        return null;
    };
    AddRequestComponent.prototype.getProjectByID = function (projectID) {
        for (var _i = 0, _a = this.projectsArray; _i < _a.length; _i++) {
            var project = _a[_i];
            if (project.id == projectID) {
                return project;
            }
        }
        return null;
    };
    AddRequestComponent.prototype.getProductByID = function (productID) {
        for (var _i = 0, _a = this.productsArray; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id == productID) {
                return product;
            }
        }
        return null;
    };
    AddRequestComponent.prototype.addFileBtn = function () {
        this.filesToUpload.push(true);
    };
    AddRequestComponent.prototype.fillProductArray = function (selectedProject) {
        var _this = this;
        var selectedProjectID = selectedProject.value;
        this.projectsArray.map(function (project) {
            if (project.id == selectedProjectID) {
                _this.productsArray = project.product;
            }
        });
    };
    AddRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filesToUpload.push(true);
        // this.dataBaseService.getProducts().subscribe(
        //   (products) => {
        //     this.productsArray = products;
        //   }
        // );
        this.dataBaseService.getProjects().subscribe(function (projects) {
            _this.projectsArray = projects;
        });
        this.dataBaseService.getMedia().subscribe(function (media) {
            _this.mediaArray = media;
        });
        this.dataBaseService.getMediaTypes().subscribe(function (mediaTypes) {
            _this.mediaArrayTypes = mediaTypes;
        });
        this.dataBaseService.getComponents().subscribe(function (components) {
            _this.componentArray = components;
            if (_this.componentArray.length == 0) {
                _this.componentArray.push({ name: 'comp test name', id: 33 }, { name: 'comp test name22', id: 3 });
            }
        });
    };
    AddRequestComponent.prototype.closeAddRequest = function () {
        $('.addRequest').slideUp(100, function () {
            $('app-add-request').css('display', 'none');
        });
    };
    AddRequestComponent.prototype.submitFiles = function (requestID) {
        // var filesToUpload = [];
        // var filesTypes = [];
        // const children = document.getElementsByClassName('fileInputToUpload');
        // Array.from(children).forEach((child, index) => {
        //   if ('files' in child && child != null) {
        //     if (child.files.length == 0) {
        //       console.log('Select one or more files.');
        //     } else {
        //       filesToUpload.push(child.files[0]);
        //       filesTypes.push(this.getFileType(child.files[0].name.split('.').pop().toLowerCase()));
        //     }
        //   }
        // });
        // console.log(filesTypes);
        // this.fileUploadService.uploadFiles(requestID, filesToUpload,filesTypes);
    };
    AddRequestComponent.prototype.submitRequest = function () {
        this.closeAddRequest();
        this.initSubmitData();
        this.dataBaseService.createRequest(this.submitRequesData).subscribe(function (reqest) {
            console.log(reqest);
        }, function (error) {
            console.log(error);
        });
    };
    AddRequestComponent.prototype.initSubmitData = function () {
        var selectedProject = this.getProjectByID(Number(this.Project_NameID));
        var selectedProduct = this.getProductByID(Number(this.Product_NameID));
        var submitMedia = { id: 0, name: 'string', quantity: 0, types: [], mediaTypeID: 0 };
        var submitMediaTypeArray = [];
        var pressArray = [];
        var submitComponentArray = [];
        var submitComponent = { id: 0, name: 'string', quantity: 0 };
        var submitMediaQuantity = [];
        var submitCompQuantity = [];
        var submitMediaType = [];
        this.requestMedia.map(function (media) {
            submitMedia.id = media.id;
            submitMedia.name = media.media_name;
            submitMedia.quantity = media.media_Quantity;
            submitMedia.types.push(media.media_type);
            submitMedia.mediaTypeID = media.mediaTypeID;
            submitMediaTypeArray.push(submitMedia.mediaTypeID);
            submitMediaQuantity.push(submitMedia.quantity);
            // submitMediaType.push(media.media_type);
        });
        this.replaceComponent.map(function (comp) {
            submitComponent.quantity = comp.compo_num;
            submitComponent.name = comp.compo_name;
            submitComponent.id = comp.id;
            submitComponentArray.push(submitComponent.id);
            submitCompQuantity.push(submitComponent.quantity);
        });
        this.sliderService.chosenPressesArray.map(function (press) {
            pressArray.push(press.id);
        });
        this.submitRequesData = {
            weekNumber: 0,
            priority: 1,
            isConsecutive: true,
            hub: 1,
            description: '',
            mediaTypes: submitMediaTypeArray,
            shiftsLength: this.shift,
            type: this.Test_type,
            urgent: this.urgent,
            comment: this.Additional_Comment,
            name: this.Test_Name,
            project: selectedProject.id,
            product: selectedProduct.id,
            testObjecteves: this.Test_Objectives,
            components: submitComponentArray,
            presses: pressArray,
            submitMediaQuantity: submitMediaQuantity,
            submitCompQuantity: submitCompQuantity
        };
    };
    AddRequestComponent.prototype.getFileType = function (str) {
        var fileType;
        if (str == 'pdf') {
            fileType = 'application/pdf';
        }
        else if (str == 'png') {
            fileType = 'image/png ';
        }
        else if (str == 'gif') {
            fileType = 'image/gif';
        }
        else if (str == 'jpeg') {
            fileType = 'image/jpeg';
        }
        else if (str == 'jpg') {
            fileType = 'image/jpeg';
        }
        else if (str == 'zip') {
            fileType = 'application/zip';
        }
        else if (str == 'rar') {
            fileType = 'application/zip';
        }
        else if (str == 'doc') {
            fileType = 'application/msword';
        }
        else if (str == 'dot') {
            fileType = 'application/msword';
        }
        else if (str == 'docx') {
            fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        }
        else if (str == 'dotx') {
            fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.template';
        }
        else if (str == 'docm') {
            fileType = 'application/vnd.ms-word.document.macroEnabled.12';
        }
        else if (str == 'dotm') {
            fileType = 'application/vnd.ms-word.template.macroEnabled.12';
        }
        else if (str == 'xls') {
            fileType = 'application/vnd.ms-excel';
        }
        else if (str == 'xlt') {
            fileType = 'application/vnd.ms-excel';
        }
        else if (str == 'xla') {
            fileType = 'application/vnd.ms-excel';
        }
        else if (str == 'xlsx') {
            fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        }
        else if (str == 'xltx') {
            fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.template';
        }
        else if (str == 'xlsm') {
            fileType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
        }
        else if (str == 'xltm') {
            fileType = 'application/vnd.ms-excel.template.macroEnabled.12';
        }
        else if (str == 'xlam') {
            fileType = 'application/vnd.ms-excel.addin.macroEnabled.12';
        }
        else if (str == 'xlsb') {
            fileType = 'application/vnd.ms-excel.sheet.binary.macroEnabled.12';
        }
        else if (str == 'ppt') {
            fileType = 'application/vnd.ms-powerpoint';
        }
        else if (str == 'pot') {
            fileType = 'application/vnd.ms-powerpoint';
        }
        else if (str == 'pps') {
            fileType = 'application/vnd.ms-powerpoint';
        }
        else if (str == 'ppa') {
            fileType = 'application/vnd.ms-powerpoint';
        }
        else if (str == 'pptx') {
            fileType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        }
        else if (str == 'potx') {
            fileType = 'application/vnd.openxmlformats-officedocument.presentationml.template';
        }
        else if (str == 'ppsx') {
            fileType = 'application/vnd.openxmlformats-officedocument.presentationml.slideshow';
        }
        else if (str == 'ppam') {
            fileType = 'application/vnd.ms-powerpoint.addin.macroEnabled.12';
        }
        else if (str == 'pptm') {
            fileType = 'application/vnd.ms-powerpoint.presentation.macroEnabled.12';
        }
        else if (str == 'potm') {
            fileType = 'application/vnd.ms-powerpoint.template.macroEnabled.12';
        }
        else if (str == 'ppsm') {
            fileType = 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12';
        }
        else if (str == 'txt') {
            fileType = 'text/plain';
        }
        else {
            fileType = str;
        }
        return fileType;
    };
    AddRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-request',
            template: __webpack_require__(/*! ./add-request.component.html */ "./src/app/add-request/add-request.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./add-request.component.css */ "./src/app/add-request/add-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"], _upload_file_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"]])
    ], AddRequestComponent);
    return AddRequestComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests/requests.component */ "./src/app/requests/requests.component.ts");
/* harmony import */ var _work_plan_work_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-plan/work-plan.component */ "./src/app/work-plan/work-plan.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _enter_enter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enter/enter.component */ "./src/app/enter/enter.component.ts");









var routes = [
    {
        path: 'enter',
        component: _enter_enter_component__WEBPACK_IMPORTED_MODULE_8__["EnterComponent"],
        children: [
            { path: 'logIn', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
            { path: '', redirectTo: 'logIn', pathMatch: 'full' },
        ]
    },
    {
        path: 'secure/main',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
        children: [
            { path: 'myRequest', component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_3__["RequestsComponent"] },
            { path: 'workPlan', component: _work_plan_work_plan_component__WEBPACK_IMPORTED_MODULE_4__["WorkPlanComponent"] },
            { path: '', redirectTo: 'myRequest', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: '/enter/logIn', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requests/requests.component */ "./src/app/requests/requests.component.ts");
/* harmony import */ var _work_plan_work_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-plan/work-plan.component */ "./src/app/work-plan/work-plan.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/jwt-interceptor.service */ "./src/app/services/jwt-interceptor.service.ts");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-request/add-request.component */ "./src/app/add-request/add-request.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _enter_enter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./enter/enter.component */ "./src/app/enter/enter.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/upload-file/upload-file.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"],
                _work_plan_work_plan_component__WEBPACK_IMPORTED_MODULE_12__["WorkPlanComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__["LogInComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__["MainPageComponent"],
                _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_21__["AddRequestComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_22__["SliderComponent"],
                _enter_enter_component__WEBPACK_IMPORTED_MODULE_23__["EnterComponent"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_24__["UploadFileComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                angular2_wizard__WEBPACK_IMPORTED_MODULE_18__["FormWizardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], useClass: _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["JwtInterceptorService"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constant.ts":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
// export const data={
//   baseURL:"https://hptestinghub.com/testhub"
// };
var data = {
    baseURL: 'http://localhost:8090'
};


/***/ }),

/***/ "./src/app/enter/enter.component.css":
/*!*******************************************!*\
  !*** ./src/app/enter/enter.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logInRegContainer{\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('beaches.jpg');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXIvZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQXdEO0FBQzFEIiwiZmlsZSI6InNyYy9hcHAvZW50ZXIvZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dJblJlZ0NvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWFjaGVzLmpwZ1wiKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/enter/enter.component.html":
/*!********************************************!*\
  !*** ./src/app/enter/enter.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logInRegContainer\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enter/enter.component.ts":
/*!******************************************!*\
  !*** ./src/app/enter/enter.component.ts ***!
  \******************************************/
/*! exports provided: EnterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterComponent", function() { return EnterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnterComponent = /** @class */ (function () {
    function EnterComponent() {
    }
    EnterComponent.prototype.ngOnInit = function () {
    };
    EnterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter',
            template: __webpack_require__(/*! ./enter.component.html */ "./src/app/enter/enter.component.html"),
            styles: [__webpack_require__(/*! ./enter.component.css */ "./src/app/enter/enter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnterComponent);
    return EnterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainNavbar{\r\n  display:flex;\r\n  border-bottom:2px solid #0096d6;\r\n  background-color: white;\r\n  height: 55px;\r\n}\r\n\r\n.mainNavbar .nav_icon{\r\n  padding: 18px;\r\n  color: #5a5a5a;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n}\r\n\r\n.mainNavbar .nav_icon:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  transition: -webkit-transform 0.2s;\r\n  transition: transform 0.2s;\r\n  transition: transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n\r\n.logo{\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.mainNavbar .title{\r\n  padding: 5px 0px 0px 12px;\r\n}\r\n\r\n.mainNavbar .title .subtitle1{\r\n  color: #5a5a5a;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n}\r\n\r\n.mainNavbar .title .subtitle2{\r\n  font-family: Roboto;\r\n  color: #5a5a5a;\r\n  font-size: 18px;\r\n}\r\n\r\n.mainNavbar .user_icon{\r\n  margin-left:auto;\r\n  font-size: 21px;\r\n  color: #0096d6;\r\n  font-weight: bold;\r\n  padding: 15px 20px 0 15px;\r\n}\r\n\r\n.mainNavbar .user_icon:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.userDetails{\r\n  margin: 3px;\r\n  height: 100px;\r\n  width: 170px;\r\n  display: grid;\r\n  grid-template-rows:53px 47px;\r\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 0;\r\n  background-color: white;\r\n}\r\n\r\n.userDetails .details .name{\r\n\r\n  font-weight:bold ;\r\n  font-family: Roboto;\r\n  color: #5a5a5a;\r\n  font-size: 14px;\r\n  padding: 5px 5px 0 10px ;\r\n}\r\n\r\n.userDetails .details .position{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n  padding: 0 0 10px 10px;\r\n  border-bottom: 1px solid #f2f2f2;\r\n}\r\n\r\n.userDetails .signOut {\r\n  display: flex;\r\n  padding: 11px;\r\n\r\n}\r\n\r\n.userDetails .signOut button{\r\n  margin-left: auto;\r\n  width: 72px;\r\n  height: 26px;\r\n  background-color: #5a5a5a;\r\n  border: none;\r\n  color: white;\r\n  font-size: 13px\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7O0FBRWY7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTmF2YmFye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMDA5NmQ2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuLm1haW5OYXZiYXIgLm5hdl9pY29ue1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWFpbk5hdmJhciAubmF2X2ljb246aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1haW5OYXZiYXIgLnRpdGxle1xyXG4gIHBhZGRpbmc6IDVweCAwcHggMHB4IDEycHg7XHJcbn1cclxuLm1haW5OYXZiYXIgLnRpdGxlIC5zdWJ0aXRsZTF7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1haW5OYXZiYXIgLnRpdGxlIC5zdWJ0aXRsZTJ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5tYWluTmF2YmFyIC51c2VyX2ljb257XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgY29sb3I6ICMwMDk2ZDY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDAgMTVweDtcclxufVxyXG5cclxuLm1haW5OYXZiYXIgLnVzZXJfaWNvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJEZXRhaWxze1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjUzcHggNDdweDtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTFweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udXNlckRldGFpbHMgLmRldGFpbHMgLm5hbWV7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OmJvbGQgO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDVweCA1cHggMCAxMHB4IDtcclxufVxyXG4udXNlckRldGFpbHMgLmRldGFpbHMgLnBvc2l0aW9ue1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuLnVzZXJEZXRhaWxzIC5zaWduT3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcblxyXG59XHJcbi51c2VyRGV0YWlscyAuc2lnbk91dCBidXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEzcHhcclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"mainNavbar\">\r\n  <i class=\"fa fa-align-justify nav_icon \" (click)=\"toggleSidebar()\" ></i>\r\n  <div><img alt=\"logo\" src=\"../../assets/images/hp.png\" class=\"logo \"></div>\r\n  <div class=\"title \">\r\n    <div class=\"subtitle1\">Workflow Tool</div>\r\n    <div class=\"subtitle2\">Testing Hub Management</div>\r\n  </div>\r\n\r\n\r\n  <div class=\"user_icon\" (click)=\"showUserInfo=!showUserInfo\">\r\n   <i class=\"fa fa-user-o \" ></i>\r\n   <div class=\"userDetails\" *ngIf=\"showUserInfo\">\r\n     <div class=\"details\" >\r\n       <div class=\"name\">John Smith</div>\r\n       <div class=\"position\">Test Owner</div>\r\n     </div>\r\n     <div class=\"signOut\"><button>Sign Out</button></div>\r\n   </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sidebar.service */ "./src/app/services/sidebar.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.showUserInfo = false;
    }
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.isSidebarHidden = !this.sidebarService.isSidebarHidden;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .signIn-Container{\r\n  padding: 20px 22px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: white;\r\n  width:320px ;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n .header{\r\n  display: flex;\r\n\r\n}\r\n .header .logo{\r\n  width:30px ;\r\n  height:30px ;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n .header .logo img{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n .header .companyName{\r\n  padding-left: 10px;\r\n}\r\n .header .title1{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n}\r\n .header .title2{\r\n  font-family: Roboto;\r\n  font-size: 18px;\r\n  color: #5a5a5a;\r\n}\r\n .signIn-form .title{\r\n  padding:20px 0 10px 0;\r\n  font-family: Roboto;\r\n  font-size: 18px;\r\n  color: #0096d6;\r\n}\r\n .signIn-form input[type=\"email\"],\r\n .signIn-form input[type=\"password\"]\r\n{\r\n  border: none;\r\n  border-bottom: 1px solid #f2f2f2;\r\n  width: 100%;\r\n  height:26px;\r\n}\r\n .signIn-form input::-webkit-input-placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n .signIn-form input::-ms-input-placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n .signIn-form input::placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n .signIn-form a.forgetPass{\r\n  color: #0096d6;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  text-align: right;\r\n  width: 100%;\r\n  display: inline-block;\r\n  margin: 9px 0;\r\n}\r\n .signIn-form a.forgetPass:hover {\r\n  cursor: pointer;\r\n}\r\n .signIn-form input[type=checkbox]{\r\n  position: absolute;\r\n  /*left: -10px;*/\r\n  z-index: -100;\r\n}\r\n .signIn-form .checkBoxes{\r\n  display: flex;\r\n}\r\n .signIn-form .checkBoxes:hover{\r\n  cursor: pointer;\r\n}\r\n .signIn-form .choice{\r\n  color: #5a5a5a;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  position: relative;\r\n  top: 7px;\r\n}\r\n .signIn-form .checkBox{\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 2px solid #5a5a5a;\r\n  border-radius: 2px;\r\n  margin: 5px;\r\n\r\n}\r\n .signIn-form .checkBox .icon{\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  padding: 1px;\r\n}\r\n .signIn-form .checked{\r\n  background-color: #0096d6;\r\n}\r\n .signIn-form .signInBtn{\r\n  background-color: #0096d6;\r\n  border: none;\r\n  width: 100%;\r\n  color: white;\r\n  margin-top: 32px;\r\n  height: 26px;\r\n  font-size: 12px;\r\n  font-family: Roboto;\r\n\r\n}\r\n .signIn-form .signInBtn:hover{\r\n  cursor: pointer;\r\n}\r\n .signIn-form .errorMsg{\r\n  font-size: 12px;\r\n  color: red;\r\n  font-family: Roboto;\r\n  padding-top: 10px;\r\n}\r\n .signIn-Container .copy-right{\r\n  margin-top: auto;\r\n  font-family: Roboto;\r\n  font-size: 10px;\r\n  color: #5a5a5a;\r\n  text-align: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdGQUFnRjtBQUNsRjtDQUNDO0VBQ0MsYUFBYTs7QUFFZjtDQUVDO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsWUFBWTtBQUNkO0NBRUM7RUFDQyxrQkFBa0I7QUFDcEI7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0NBQ0M7RUFDQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0NBQ0M7OztFQUdDLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7QUFDYjtDQUNDO0VBQ0MsY0FBYztFQUNkLGVBQWU7QUFDakI7Q0FIQztFQUNDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0NBSEM7RUFDQyxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtDQUNDO0VBQ0MsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0NBRUM7RUFDQyxlQUFlO0FBQ2pCO0NBRUM7RUFDQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjtDQUNDO0VBQ0MsYUFBYTtBQUNmO0NBQ0M7RUFDQyxlQUFlO0FBQ2pCO0NBQ0M7RUFDQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVzs7QUFFYjtDQUNDO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0NBQ0M7RUFDQyx5QkFBeUI7QUFDM0I7Q0FHQztFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCO0NBQ0M7RUFDQyxlQUFlO0FBQ2pCO0NBRUM7RUFDQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7Q0FFQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAuc2lnbkluLUNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAyMHB4IDIycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6MzIwcHggO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4gLmhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5cclxuIC5oZWFkZXIgLmxvZ297XHJcbiAgd2lkdGg6MzBweCA7XHJcbiAgaGVpZ2h0OjMwcHggO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDNweDtcclxufVxyXG4gLmhlYWRlciAubG9nbyBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4gLmhlYWRlciAuY29tcGFueU5hbWV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiAuaGVhZGVyIC50aXRsZTF7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbn1cclxuIC5oZWFkZXIgLnRpdGxlMntcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxufVxyXG4gLnNpZ25Jbi1mb3JtIC50aXRsZXtcclxuICBwYWRkaW5nOjIwcHggMCAxMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDk2ZDY7XHJcbn1cclxuIC5zaWduSW4tZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAuc2lnbkluLWZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXHJcbntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjI2cHg7XHJcbn1cclxuIC5zaWduSW4tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICNiOWI5Yjk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiAuc2lnbkluLWZvcm0gYS5mb3JnZXRQYXNze1xyXG4gIGNvbG9yOiAjMDA5NmQ2O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDlweCAwO1xyXG59XHJcblxyXG4gLnNpZ25Jbi1mb3JtIGEuZm9yZ2V0UGFzczpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gLnNpZ25Jbi1mb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKmxlZnQ6IC0xMHB4OyovXHJcbiAgei1pbmRleDogLTEwMDtcclxufVxyXG4gLnNpZ25Jbi1mb3JtIC5jaGVja0JveGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIC5zaWduSW4tZm9ybSAuY2hlY2tCb3hlczpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIC5zaWduSW4tZm9ybSAuY2hvaWNle1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDdweDtcclxufVxyXG4gLnNpZ25Jbi1mb3JtIC5jaGVja0JveHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcblxyXG59XHJcbiAuc2lnbkluLWZvcm0gLmNoZWNrQm94IC5pY29ue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuIC5zaWduSW4tZm9ybSAuY2hlY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmQ2O1xyXG59XHJcblxyXG5cclxuIC5zaWduSW4tZm9ybSAuc2lnbkluQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ZDY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuXHJcbn1cclxuIC5zaWduSW4tZm9ybSAuc2lnbkluQnRuOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIC5zaWduSW4tZm9ybSAuZXJyb3JNc2d7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuIC5zaWduSW4tQ29udGFpbmVyIC5jb3B5LXJpZ2h0e1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"signIn-container\">\r\n    <div class=\"header\">\r\n      <div class=\"logo\"><img src=\"../../assets/images/hp.png\" alt=\"logo\"></div>\r\n      <div class=\"companyName\">\r\n        <div class=\"title1\">Workflow Tool</div>\r\n        <div class=\"title2\">Testing Hub Management</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"signIn-form\">\r\n      <div class=\"title\">SIGN IN</div>\r\n      <input #userEmail type=\"email\" placeholder=\"Email Address\" (keydown)=\"signInKeyDown($event,userEmail.value,userPass.value)\" >\r\n      <input #userPass type=\"password\" placeholder=\"Password\"    (keydown)=\"signInKeyDown($event,userEmail.value,userPass.value)\" >\r\n      <a class=\"forgetPass\">Forgot password?</a>\r\n\r\n      <div class=\"checkBoxes\" (click)=\"toggleRememberMe()\" >\r\n        <input type=\"checkbox\" [checked]=\"isRememberMeChecked\"  >\r\n        <div class=\"checkBox\" [class.checked]=\"isRememberMeChecked\">\r\n          <i class=\"fa fa-check icon\" aria-hidden=\"true\" *ngIf=\"isRememberMeChecked\"></i>\r\n        </div>\r\n        <div class=\"choice\">Remember me</div>\r\n      </div>\r\n\r\n      <div class=\"checkBoxes\" (click)=\"toggleKeepMeSignedIn()\">\r\n        <input type=\"checkbox\" [checked]=\"KeepMeSignedIn\"  >\r\n        <div class=\"checkBox\" [class.checked]=\"KeepMeSignedIn\"  >\r\n          <i class=\"fa fa-check icon\" aria-hidden=\"true\" *ngIf=\"KeepMeSignedIn\"></i>\r\n        </div>\r\n        <div class=\"choice\" >Keep me signed in</div>\r\n      </div>\r\n      <div class=\"errorMsg\" *ngIf=\"showErrorMsg\">{{errorMsg}}</div>\r\n      <button class=\"signInBtn\"  (click)=\"signIn(userEmail.value,userPass.value)\">SIGN IN</button>\r\n    </div>\r\n\r\n    <div class=\"copy-right\">© Copyright 2018 HP Development Company, L.P.</div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/locale.service */ "./src/app/services/locale.service.ts");






var LogInComponent = /** @class */ (function () {
    function LogInComponent(dataBaseService, router, localeService) {
        this.dataBaseService = dataBaseService;
        this.router = router;
        this.localeService = localeService;
        this.isRememberMeChecked = false;
        this.KeepMeSignedIn = false;
        this.showErrorMsg = false;
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.userInfo = new _User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    LogInComponent.prototype.toggleRememberMe = function () {
        this.isRememberMeChecked = !this.isRememberMeChecked;
    };
    LogInComponent.prototype.toggleKeepMeSignedIn = function () {
        this.KeepMeSignedIn = !this.KeepMeSignedIn;
    };
    LogInComponent.prototype.signInKeyDown = function (event, userEmail, userPass) {
        if (event.key === 'Enter') {
            this.signIn(userEmail, userPass);
        }
    };
    LogInComponent.prototype.saveToken = function (token) {
        localStorage.setItem('auth_token', JSON.stringify(token));
    };
    LogInComponent.prototype.signIn = function (userEmail, userPass) {
        var _this = this;
        userEmail = userEmail.trim();
        userPass = userPass.trim();
        if (!userEmail || !userPass) {
            alert('please fill all spaces!');
        }
        this.userInfo.email = userEmail;
        this.userInfo.password = userPass;
        this.dataBaseService.getLogInToken(this.userInfo).subscribe(function (token) {
            _this.saveToken(token);
            _this.showErrorMsg = false;
            _this.router.navigate(['/secure/main']);
            return;
        }, function (error) {
            _this.errorMsg = error.error.message;
            _this.showErrorMsg = true;
        });
    };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.main-container{\r\n  display: grid;\r\n  grid-template-rows:55px auto;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.header{\r\n  grid-column: 1/-1;\r\n\r\n}\r\n.content-container{\r\n  display: flex;\r\n  align-items: stretch;\r\n\r\n}\r\n.sidebar{\r\n  position: absolute;\r\n  top:50px;\r\n  bottom: 0;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  background-color: #ffffff;\r\n  display: block;\r\n  width: 247px;\r\n  -webkit-transform: translate(0px,0px);\r\n          transform: translate(0px,0px);\r\n  transition: -webkit-transform 1s ease;\r\n  transition: transform 1s ease;\r\n  transition: transform 1s ease, -webkit-transform 1s ease;\r\n  z-index: 100;\r\n\r\n}\r\n.content{\r\n  justify-self: stretch;\r\n  background: rgba(50,50,50,0.1);\r\n  flex: auto;\r\n\r\n}\r\n.hiddenSidebar .sidebar{\r\n  -webkit-transform: translate(-247px,0px);\r\n          transform: translate(-247px,0px);\r\n  transition: -webkit-transform 1s ease;\r\n  transition: transform 1s ease;\r\n  transition: transform 1s ease, -webkit-transform 1s ease;\r\n\r\n\r\n}\r\n.hiddenSidebar .content{\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjs7QUFFdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdGQUFnRjtFQUNoRix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFBN0Isd0RBQTZCO0VBQzdCLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsVUFBVTs7QUFFWjtBQUVBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxxQ0FBNkI7RUFBN0IsNkJBQTZCO0VBQTdCLHdEQUE2Qjs7O0FBRy9CO0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6NTVweCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlcntcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNDdweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG59XHJcblxyXG4uY29udGVudHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MCw1MCw1MCwwLjEpO1xyXG4gIGZsZXg6IGF1dG87XHJcblxyXG59XHJcblxyXG4uaGlkZGVuU2lkZWJhciAuc2lkZWJhcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjQ3cHgsMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcclxuXHJcblxyXG59XHJcblxyXG4uaGlkZGVuU2lkZWJhciAuY29udGVudHtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\"  [class.hiddenSidebar]=\"sidebarService.isSidebarHidden\"  >\r\n  <div class=\"header\">\r\n    <app-header></app-header>\r\n  </div>\r\n  <div class=\"content-container\" >\r\n    <div class=\"sidebar\" >\r\n      <app-sidebar ></app-sidebar>\r\n    </div>\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sidebar.service */ "./src/app/services/sidebar.service.ts");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    MainPageComponent.prototype.ngOnInit = function () { };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .signUp-container{\r\n  padding: 20px 22px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: white;\r\n  width:320px ;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n .header{\r\n  display: flex;\r\n\r\n}\r\n\r\n .header .logo{\r\n  width:30px ;\r\n  height:30px ;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n .header .logo img{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n .header .companyName{\r\n  padding-left: 10px;\r\n}\r\n\r\n .header .title1{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n}\r\n\r\n .header .title2{\r\n  font-family: Roboto;\r\n  font-size: 18px;\r\n  color: #5a5a5a;\r\n}\r\n\r\n .signUp-form .title{\r\n  padding:20px 0 10px 0;\r\n  font-family: Roboto;\r\n  font-size: 18px;\r\n  color: #0096d6;\r\n}\r\n\r\n .signUp-form input[type=\"email\"],\r\n .signUp-form input[type=\"password\"]\r\n{\r\n  border: none;\r\n  border-bottom: 1px solid #f2f2f2;\r\n  width: 100%;\r\n  height:26px;\r\n}\r\n\r\n .signUp-form input::-webkit-input-placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n\r\n .signUp-form input::-ms-input-placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n\r\n .signUp-form input::placeholder{\r\n  color: #b9b9b9;\r\n  font-size: 12px;\r\n}\r\n\r\n .signUp-form .signUpBtn{\r\n  background-color: #0096d6;\r\n  border: none;\r\n  width: 100%;\r\n  color: white;\r\n  margin-top: 32px;\r\n  height: 26px;\r\n  font-size: 12px;\r\n  font-family: Roboto;\r\n\r\n}\r\n\r\n .signUp-form .signUpBtn:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n .signUp-container .copy-right{\r\n  margin-top: auto;\r\n  font-family: Roboto;\r\n  font-size: 10px;\r\n  color: #5a5a5a;\r\n  text-align: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnRkFBZ0Y7QUFDbEY7O0NBRUM7RUFDQyxhQUFhOztBQUVmOztDQUVDO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztDQUNDO0VBQ0MsV0FBVztFQUNYLFlBQVk7QUFDZDs7Q0FFQztFQUNDLGtCQUFrQjtBQUNwQjs7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7Q0FDQztFQUNDLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0NBQ0M7OztFQUdDLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7QUFDYjs7Q0FDQztFQUNDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztDQUhDO0VBQ0MsY0FBYztFQUNkLGVBQWU7QUFDakI7O0NBSEM7RUFDQyxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7Q0FHQztFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztDQUNDO0VBQ0MsZUFBZTtBQUNqQjs7Q0FFQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLnNpZ25VcC1jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMjBweCAyMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOjMyMHB4IDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbiAuaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4gLmhlYWRlciAubG9nb3tcclxuICB3aWR0aDozMHB4IDtcclxuICBoZWlnaHQ6MzBweCA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcbiAuaGVhZGVyIC5sb2dvIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiAuaGVhZGVyIC5jb21wYW55TmFtZXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIC5oZWFkZXIgLnRpdGxlMXtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxufVxyXG4gLmhlYWRlciAudGl0bGUye1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG59XHJcbiAuc2lnblVwLWZvcm0gLnRpdGxle1xyXG4gIHBhZGRpbmc6MjBweCAwIDEwcHggMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwOTZkNjtcclxufVxyXG4gLnNpZ25VcC1mb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuIC5zaWduVXAtZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cclxue1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MjZweDtcclxufVxyXG4gLnNpZ25VcC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogI2I5YjliOTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4gLnNpZ25VcC1mb3JtIC5zaWduVXBCdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZkNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG5cclxufVxyXG4gLnNpZ25VcC1mb3JtIC5zaWduVXBCdG46aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gLnNpZ25VcC1jb250YWluZXIgLmNvcHktcmlnaHR7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"signUp-container\">\r\n    <div class=\"header\">\r\n      <div class=\"logo\"><img src=\"../../assets/images/hp.png\" alt=\"logo\"></div>\r\n      <div class=\"companyName\">\r\n        <div class=\"title1\">Workflow Tool</div>\r\n        <div class=\"title2\">Testing Hub Management</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"signUp-form\">\r\n      <div class=\"title\">SIGN UP</div>\r\n      <input type=\"email\" placeholder=\"Email Address\">\r\n      <input type=\"password\" placeholder=\"Password\">\r\n      <button class=\"signUpBtn\">SIGN UP</button>\r\n\r\n  </div>\r\n    <div class=\"copy-right\">© Copyright 2018 HP Development Company, L.P.</div>\r\n\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regester',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/requests/requests.component.css":
/*!*************************************************!*\
  !*** ./src/app/requests/requests.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.grid{\r\n  height:1000px;\r\n  display:grid;\r\n  grid-template-rows:40px auto;\r\n}\r\n.remove{\r\n  display: none;\r\n}\r\n.request{\r\n  display:flex;\r\n  grid-column:1/-1;\r\n  background-color:#f2f2f2;\r\n}\r\n.request .req-title{\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  color: #5a5a5a;\r\n  padding: 14px 0 0 10px;\r\n  font-weight: bold;\r\n}\r\n.request .req-btn{\r\n  margin: 7px 10px 0 0;\r\n  margin-left:auto;\r\n  width: 130px;\r\n  height: 26px;\r\n  background-color: #0096d6;\r\n  color: white;\r\n  border: none;\r\n}\r\n.request .req-btn:hover{\r\n  cursor: pointer;\r\n}\r\n.requestTable{\r\n  margin:10px;\r\n  grid-column:1/-1;\r\n  background-color:white;\r\n  display:grid;\r\n  grid-template-rows:repeat(auto-fit,minmax(20px,50px));\r\n  grid-template-columns:repeat(6,1fr);\r\n  position: relative;\r\n\r\n}\r\n.requestTable ul{\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n  grid-column: 1/-1;\r\n  list-style-type: none;\r\n  margin:0;\r\n  padding:0;\r\n\r\n}\r\n.requestTable ul:nth-child(even){\r\n  background-color:#f2f2f2;\r\n}\r\n.requestTable ul.selected{\r\n  background-color: #bbedff;\r\n}\r\n.requestTable ul:first-child{\r\n\r\n  border-bottom: 1px solid #b9b9b9;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #5a5a5a;\r\n}\r\n.requestTable ul li{\r\n  flex:1;\r\n  margin:0;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  text-align: center;\r\n}\r\n.requestTable ul li .status{\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n.requestTable ul li .icon{\r\n  font-weight: normal;\r\n  font-size: 22px;\r\n  padding-right: 10px;\r\n}\r\n.requestTable ul li .pending {\r\n  color: #f5a623;\r\n}\r\n.requestTable ul li .status-icon {\r\n  color: red;\r\n}\r\n.requestTable ul .note-icon{\r\n  padding-right: 15px;\r\n  visibility:hidden;\r\n  position: relative;\r\n}\r\n.requestTable ul .note-icon .note{\r\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  width: 187px;\r\n  position: absolute;\r\n  background-color: white;\r\n  padding: 10px;\r\n  right: 10px;\r\n  top: 25px;\r\n  z-index: 100;\r\n\r\n}\r\n.requestTable ul.noted .note-icon{\r\n  visibility:visible;\r\n}\r\n.requestTable ul.noted .note-icon:hover{\r\n  cursor: pointer;\r\n}\r\n.requestTable ul .sittings-icon {\r\n  position: relative;\r\n  padding: 10px 30px;right: 0px;\r\n}\r\n.requestTable ul .sittings-icon:hover{\r\n  cursor: pointer;\r\n}\r\n.requestTable ul .sittings-icon .sittings{\r\n  position: absolute;\r\n  background-color: white;\r\n  padding: 0 5px;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  width: 100px;\r\n  right: 0px;\r\n  top: 30px;\r\n  z-index: 100;\r\n\r\n}\r\n.requestTable ul .sittings-icon .sittings div{\r\n  height: 26px;\r\n  line-height: 30px;\r\n}\r\n.requestTable ul .sittings-icon .sittings .delete{\r\n  color: #d7410b;\r\n\r\n}\r\n.requestTable ul li .press_img{\r\n  padding:3px;\r\n  width: 122.6px;\r\n  height: 32px;\r\n}\r\n.inline-block {\r\n  display: inline-block;\r\n}\r\n.requestTable ul.selected .info-icon{\r\n  visibility:visible;\r\n}\r\n.requestTable ul .info-link{\r\n  position:relative;\r\n}\r\n.requestTable ul .info-icon{\r\n  visibility:hidden;\r\n\r\n}\r\n.requestTable ul .info-link .info-list img{\r\n  width: 122.6px;\r\n  height: 32px;\r\n}\r\n.requestTable ul .info-link .info-list{\r\n  position:absolute;\r\n  padding: 6px;\r\n  right: -4px;\r\n  width: 269.5px;\r\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  background-color: #ffffff;\r\n  list-style-type:none;\r\n  display:none;\r\n}\r\n.requestTable ul .info-link .info-list li:nth-child(even){\r\n  background-color:#f2f2f2;\r\n}\r\n.requestTable ul .info-link:hover .info-list{\r\n  display:block;\r\n}\r\n.requestTable app-add-request{\r\n  position: absolute;\r\n  top: 94px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCxtQ0FBbUM7RUFDbkMsa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsU0FBUzs7QUFFWDtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUlBO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLENBQUMsVUFBVTtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5ncmlke1xyXG4gIGhlaWdodDoxMDAwcHg7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czo0MHB4IGF1dG87XHJcbn1cclxuLnJlbW92ZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVxdWVzdHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZ3JpZC1jb2x1bW46MS8tMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XHJcbn1cclxuXHJcbi5yZXF1ZXN0IC5yZXEtdGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgcGFkZGluZzogMTRweCAwIDAgMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJlcXVlc3QgLnJlcS1idG57XHJcbiAgbWFyZ2luOiA3cHggMTBweCAwIDA7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ZDY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnJlcXVlc3QgLnJlcS1idG46aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxle1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIGdyaWQtY29sdW1uOjEvLTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMjBweCw1MHB4KSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg2LDFmcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG4ucmVxdWVzdFRhYmxlIHVse1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxuXHJcbn1cclxuXHJcbi5yZXF1ZXN0VGFibGUgdWw6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcclxufVxyXG5cclxuLnJlcXVlc3RUYWJsZSB1bC5zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlZGZmO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsOmZpcnN0LWNoaWxke1xyXG5cclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I5YjliOTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxufVxyXG5cclxuXHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsIGxpe1xyXG4gIGZsZXg6MTtcclxuICBtYXJnaW46MDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCBsaSAuc3RhdHVze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCBsaSAuaWNvbntcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5yZXF1ZXN0VGFibGUgdWwgbGkgLnBlbmRpbmcge1xyXG4gIGNvbG9yOiAjZjVhNjIzO1xyXG59XHJcbi5yZXF1ZXN0VGFibGUgdWwgbGkgLnN0YXR1cy1pY29uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsIC5ub3RlLWljb257XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB2aXNpYmlsaXR5OmhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCAubm90ZS1pY29uIC5ub3Rle1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB3aWR0aDogMTg3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bC5ub3RlZCAubm90ZS1pY29ue1xyXG4gIHZpc2liaWxpdHk6dmlzaWJsZTtcclxufVxyXG4ucmVxdWVzdFRhYmxlIHVsLm5vdGVkIC5ub3RlLWljb246aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsIC5zaXR0aW5ncy1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O3JpZ2h0OiAwcHg7XHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCAuc2l0dGluZ3MtaWNvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXF1ZXN0VGFibGUgdWwgLnNpdHRpbmdzLWljb24gLnNpdHRpbmdze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCAuc2l0dGluZ3MtaWNvbiAuc2l0dGluZ3MgZGl2e1xyXG4gIGhlaWdodDogMjZweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4ucmVxdWVzdFRhYmxlIHVsIC5zaXR0aW5ncy1pY29uIC5zaXR0aW5ncyAuZGVsZXRle1xyXG4gIGNvbG9yOiAjZDc0MTBiO1xyXG5cclxufVxyXG4ucmVxdWVzdFRhYmxlIHVsIGxpIC5wcmVzc19pbWd7XHJcbiAgcGFkZGluZzozcHg7XHJcbiAgd2lkdGg6IDEyMi42cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uaW5saW5lLWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsLnNlbGVjdGVkIC5pbmZvLWljb257XHJcbiAgdmlzaWJpbGl0eTp2aXNpYmxlO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxlIHVsIC5pbmZvLWxpbmt7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnJlcXVlc3RUYWJsZSB1bCAuaW5mby1pY29ue1xyXG4gIHZpc2liaWxpdHk6aGlkZGVuO1xyXG5cclxufVxyXG5cclxuLnJlcXVlc3RUYWJsZSB1bCAuaW5mby1saW5rIC5pbmZvLWxpc3QgaW1ne1xyXG4gIHdpZHRoOiAxMjIuNnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLnJlcXVlc3RUYWJsZSB1bCAuaW5mby1saW5rIC5pbmZvLWxpc3R7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHJpZ2h0OiAtNHB4O1xyXG4gIHdpZHRoOiAyNjkuNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLnJlcXVlc3RUYWJsZSB1bCAuaW5mby1saW5rIC5pbmZvLWxpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcclxufVxyXG4ucmVxdWVzdFRhYmxlIHVsIC5pbmZvLWxpbms6aG92ZXIgLmluZm8tbGlzdHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4ucmVxdWVzdFRhYmxlIGFwcC1hZGQtcmVxdWVzdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5NHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/requests/requests.component.html":
/*!**************************************************!*\
  !*** ./src/app/requests/requests.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\r\n\r\n  <div class=\"request\">\r\n    <div class=\"req-title\">My Requests</div>\r\n    <button class=\"req-btn\" (click)=\"addRequest()\">+ New Request</button>\r\n  </div>\r\n\r\n  <div class=\"requestTable\">\r\n    <ul>\r\n      <li>Test name</li>\r\n      <li>Project name</li>\r\n      <li>Requested Date</li>\r\n      <li>Press</li>\r\n      <li>Status</li>\r\n      <li></li>\r\n    </ul>\r\n\r\n    <ul *ngFor=\"let request of requests;let i = index\" [class.noted]=\"request.comment\">\r\n      <li>{{request.name}}</li>\r\n      <li>{{request.project.name}}</li>\r\n      <!--<li>{{request.created | date:'dd-mm-yyyy' }}</li>-->\r\n      <li>{{request.created }}</li>\r\n      <li><img class=\"press_img inline-block\" [src]=\"baseURL+request.presses[0].imageUrl\">\r\n        <div class=\"note inline-block\">{{request.presses[0].name}}</div>\r\n        <a href=\"#\" class=\"info-link\"><i class=\"info-icon fa fa-info-circle\" aria-hidden=\"true\"></i></a></li>\r\n      <li *ngIf=\"request.status=='PENDING' || request.status=='PLANNED'\">\r\n        <i class=\"pending icon fa fa-clock-o\" aria-hidden=\"true\"></i>\r\n        <div class=\"status inline-block\">Pending Approval</div>\r\n      </li>\r\n      <!--<li [class.remove]=\"!(request.status=='PENDING' || request.status=='PLANNED')\" ><i class=\"status-icon icon inline-block fa fa-check-circle-o\"></i><div class=\" status inline-block\">Pending Approval</div></li>-->\r\n\r\n      <li>\r\n        <i class=\"note-icon fa fa-list-alt\" aria-hidden=\"true\" (click)=\"toggleNoteDiv(i)\">\r\n          <div class=\"note\" *ngIf=\"noteDivs[i]\">{{request.comment}}</div>\r\n        </i>\r\n\r\n        <i class=\"sittings-icon fa fa-ellipsis-v\" (click)=\"toggleSittingDiv(i)\">\r\n          <div class=\"sittings\" *ngIf=\"sittingDivs[i]\">\r\n            <div class=\"duplicate\">Duplicate</div>\r\n            <div class=\"delete\">Delete Request</div>\r\n          </div>\r\n        </i>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <app-add-request></app-add-request>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/requests/requests.component.ts":
/*!************************************************!*\
  !*** ./src/app/requests/requests.component.ts ***!
  \************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");




var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(dataBaseService) {
        this.dataBaseService = dataBaseService;
        this.requests = [];
        this.sittingDivs = [];
        this.noteDivs = [];
        this.baseURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('app-add-request').css("display", "none");
        this.dataBaseService.getRequestByUserId().subscribe(function (requests) {
            _this.requests = requests;
            for (var i = 0; i < _this.requests.length; i++) {
                _this.sittingDivs.push(false);
                _this.noteDivs.push(false);
            }
        });
    };
    RequestsComponent.prototype.toggleSittingDiv = function (index) {
        for (var i = 0; i < this.sittingDivs.length; i++) {
            if (i != index)
                this.sittingDivs[i] = false;
            this.noteDivs[i] = false;
        }
        this.sittingDivs[index] = !this.sittingDivs[index];
    };
    RequestsComponent.prototype.toggleNoteDiv = function (index) {
        for (var i = 0; i < this.noteDivs.length; i++) {
            if (i != index)
                this.noteDivs[i] = false;
            this.sittingDivs[i] = false;
        }
        this.noteDivs[index] = !this.noteDivs[index];
    };
    RequestsComponent.prototype.addRequest = function () {
        $('app-add-request').css("display", "block");
        $('.addRequest').slideDown(100);
    };
    RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__(/*! ./requests.component.html */ "./src/app/requests/requests.component.html"),
            styles: [__webpack_require__(/*! ./requests.component.css */ "./src/app/requests/requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/services/data-base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data-base.service.ts ***!
  \***********************************************/
/*! exports provided: DataBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseService", function() { return DataBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataBaseService = /** @class */ (function () {
    function DataBaseService(http) {
        this.http = http;
        // all secure except login and register
        this.AuthURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + '/login';
        this.secure = '/secure';
        this.RequestURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/request';
        this.PressesURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/presses' + '?hubId=1';
        this.ProductURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/products' + '?hubId=1';
        this.ProjectURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/projects' + '?hubId=1';
        this.MediaURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/media' + '?hubId=1';
        this.MediaTypeURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/mediaType' + '?hubId=1';
        this.ComponentURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/components' + '?hubId=1';
        this.AddRequestURL = _constant__WEBPACK_IMPORTED_MODULE_3__["data"].baseURL + this.secure + '/api/v1/request';
        this.userInfo = {};
    }
    DataBaseService.prototype.getLogInToken = function (userInfo) {
        return this.http.post(this.AuthURL, userInfo);
    };
    DataBaseService.prototype.getRequestByUserId = function () {
        return this.http.get(this.RequestURL, httpOptions);
    };
    DataBaseService.prototype.getAvailablePresses = function () {
        return this.http.get(this.PressesURL, httpOptions);
    };
    DataBaseService.prototype.getProducts = function () {
        return this.http.get(this.ProductURL, httpOptions);
    };
    DataBaseService.prototype.getProjects = function () {
        return this.http.get(this.ProjectURL, httpOptions);
    };
    DataBaseService.prototype.getMedia = function () {
        return this.http.get(this.MediaURL, httpOptions);
    };
    DataBaseService.prototype.getMediaTypes = function () {
        return this.http.get(this.MediaTypeURL, httpOptions);
    };
    DataBaseService.prototype.getComponents = function () {
        return this.http.get(this.ComponentURL, httpOptions);
    };
    DataBaseService.prototype.createRequest = function (submitRequestData) {
        console.log(submitRequestData);
        return this.http.post(this.AddRequestURL, submitRequestData);
    };
    DataBaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataBaseService);
    return DataBaseService;
}());



/***/ }),

/***/ "./src/app/services/jwt-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/jwt-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService() {
    }
    JwtInterceptorService.prototype.intercept = function (req, next) {
        var token = '';
        if (localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== 'undefined') {
            token = JSON.parse(localStorage.getItem('auth_token')).tokenValue;
        }
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(req);
    };
    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/locale.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/locale.service.ts ***!
  \********************************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = {
    "english": {
        "auth_error_msg": "Wrong email or password"
    }
};
var LocaleService = /** @class */ (function () {
    function LocaleService() {
    }
    LocaleService.prototype.getMessage = function (language, msg) {
        return data[language][msg];
    };
    LocaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocaleService);
    return LocaleService;
}());



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.isSidebarHidden = true;
    }
    SidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/services/slider.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/slider.service.ts ***!
  \********************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderService = /** @class */ (function () {
    function SliderService() {
        this.chosenPressesArray = [];
        this.isPressSelected = [];
    }
    SliderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-container{\r\n  padding-top: 10px;\r\n}\r\n.sidebar-container i{\r\n  padding: 10px;\r\n}\r\n.sidebar-container a{\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n.sidebar-container .selected{\r\n  background-color: #bbedff;\r\n}\r\n.sidebar-container a div{\r\n  padding: 10px;\r\n  padding-left: 0;\r\n  cursor: pointer;\r\n}\r\n.font{\r\n  font-family: Roboto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyLWNvbnRhaW5lciBpe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciAuc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZWRmZjtcclxufVxyXG5cclxuLnNpZGViYXItY29udGFpbmVyIGEgZGl2e1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvbnR7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"sidebar-container\" >\r\n  <div [class.selected]=\"selectedTap[myRequestTap]\" (click)=\"selectTap(myRequestTap)\">\r\n    <a routerLink=\"myRequest\" >\r\n     <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n     <div class=\"font inline-block\">My Requests</div>\r\n    </a>\r\n  </div>\r\n\r\n  <div  [class.selected]=\"selectedTap[workPlanTap]\" (click)=\"selectTap(workPlanTap)\">\r\n    <a routerLink=\"workPlan\" >\r\n      <i class=\"fa fa-files-o\" aria-hidden=\"true\"></i>\r\n      <div class=\"font inline-block\">Weekly Work Plan</div>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: Taps, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taps", function() { return Taps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sidebar.service */ "./src/app/services/sidebar.service.ts");



var Taps;
(function (Taps) {
    Taps[Taps["myRequest"] = 0] = "myRequest";
    Taps[Taps["workPlan"] = 1] = "workPlan";
})(Taps || (Taps = {}));
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.myRequestTap = Taps.myRequest;
        this.workPlanTap = Taps.workPlan;
        this.selectedTap = [true, false];
    }
    SidebarComponent.prototype.selectTap = function (id) {
        for (var i = 0; i < this.selectedTap.length; i++) {
            this.selectedTap[i] = (i == id ? true : false);
        }
        this.sidebarService.isSidebarHidden = true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider{\r\n  position: relative;\r\n  height: 146px;\r\n  background-color: #f2f2f2;\r\n  margin: 20px 0;\r\n  overflow: hidden;\r\n  padding-left: 4px;\r\n\r\n}\r\n\r\n.slider ul{\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type:none ;\r\n}\r\n\r\n.slider li.slideItem{\r\n  float: left;\r\n  width: 170px;\r\n  height: 90px;\r\n  background-color: white;\r\n  margin: 10px;\r\n}\r\n\r\n.slider li.selected{\r\n  border:3px solid  #0096d6;\r\n}\r\n\r\n.slider li.slideItem .img{\r\n  margin-top: 10px;\r\n  height: 30px;\r\n}\r\n\r\n.slider li.slideItem .img img{\r\n\r\n  height: 100%;\r\n  margin: auto;\r\n  position: relative;\r\n  display: block;\r\n\r\n}\r\n\r\n.slider li.slideItem .title{\r\n  text-align: center;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  margin: 2px;\r\n}\r\n\r\n.slider li.slideItem .subTitle{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #b9b9b9;\r\n  text-align: center;\r\n}\r\n\r\n.slider .sliderTitle{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  font-weight: bold;\r\n  margin: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.slider .slideLeft{\r\n  left: -5px;\r\n}\r\n\r\n.slider .slideRight{\r\n  right: -5px;\r\n}\r\n\r\n.slider .slideRight,.slider .slideLeft{\r\n  position: absolute;\r\n  z-index: 100;\r\n  font-size: 20px;\r\n  padding-top: 46px;\r\n  font-weight: bold;\r\n}\r\n\r\n.slider .slideLeft .fa-angle-left,.slider .slideRight .fa-angle-right{\r\n  padding: 3px;\r\n  height: 27px;\r\n  width: 27px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.slider .slideLeft:hover .fa-angle-left,.slider .slideRight:hover .fa-angle-right{\r\n  background-color: rgba(50,50,50,0.1);\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYzs7QUFFaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG9DQUFvQzs7RUFFcEMsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG5cclxufVxyXG5cclxuLnNsaWRlciB1bHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmUgO1xyXG59XHJcbi5zbGlkZXIgbGkuc2xpZGVJdGVte1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc2xpZGVyIGxpLnNlbGVjdGVke1xyXG4gIGJvcmRlcjozcHggc29saWQgICMwMDk2ZDY7XHJcbn1cclxuLnNsaWRlciBsaS5zbGlkZUl0ZW0gLmltZ3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uc2xpZGVyIGxpLnNsaWRlSXRlbSAuaW1nIGltZ3tcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcbi5zbGlkZXIgbGkuc2xpZGVJdGVtIC50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuLnNsaWRlciBsaS5zbGlkZUl0ZW0gLnN1YlRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjYjliOWI5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2xpZGVyIC5zbGlkZXJUaXRsZXtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uc2xpZGVyIC5zbGlkZUxlZnR7XHJcbiAgbGVmdDogLTVweDtcclxufVxyXG4uc2xpZGVyIC5zbGlkZVJpZ2h0e1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG59XHJcbi5zbGlkZXIgLnNsaWRlUmlnaHQsLnNsaWRlciAuc2xpZGVMZWZ0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zbGlkZXIgLnNsaWRlTGVmdCAuZmEtYW5nbGUtbGVmdCwuc2xpZGVyIC5zbGlkZVJpZ2h0IC5mYS1hbmdsZS1yaWdodHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIHdpZHRoOiAyN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNsaWRlciAuc2xpZGVMZWZ0OmhvdmVyIC5mYS1hbmdsZS1sZWZ0LC5zbGlkZXIgLnNsaWRlUmlnaHQ6aG92ZXIgLmZhLWFuZ2xlLXJpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsNTAsNTAsMC4xKTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\r\n  <div class=\"sliderTitle\">Available Presses</div>\r\n  <div class=\"slideLeft\" (click)=\"sliderLeftArrow()\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></div>\r\n  <div class=\"slideRight\" (click)=\"sliderRightArrow()\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n  <ul>\r\n    <li class=\"slideItem\" *ngFor=\"let item of sliderService.pressesArray;let i=index\" (click)=\"saveSelectedItem(i)\" [class.selected]=\"sliderService.isPressSelected[i]\">\r\n      <div class=\"img\">  <img [src]=\"baseURL+item.imageUrl\" alt=\"\"></div>\r\n      <div class=\"title\">{{item.name}}</div>\r\n      <div class=\"subTitle\">{{item.serialNumber}}</div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_slider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/slider.service */ "./src/app/services/slider.service.ts");





var SliderComponent = /** @class */ (function () {
    function SliderComponent(dataBaseService, sliderService) {
        this.dataBaseService = dataBaseService;
        this.sliderService = sliderService;
        this.baseURL = _constant__WEBPACK_IMPORTED_MODULE_2__["data"].baseURL;
        this.slide = { count: 0, marginLeft: 0, marginRight: 0, width: 0, slideToSHow: 3, left: 0, widthIncMargin: 0, index: 0 };
    }
    SliderComponent.prototype.initSlider = function () {
        this.slide.marginLeft = 10;
        this.slide.marginRight = 10;
        this.slide.width = 170;
        this.slide.count = this.sliderService.pressesArray ? this.sliderService.pressesArray.length : 0;
        this.slide.left = parseInt($('.slider ul').css('left'), 10);
        this.slide.widthIncMargin = this.slide.width + this.slide.marginLeft + this.slide.marginRight;
        var sliderUlWidth = this.slide.count * this.slide.widthIncMargin;
        $('.slider ul').css({ width: sliderUlWidth });
    };
    SliderComponent.prototype.sliderLeftArrow = function () {
        var sliderLeft = parseInt($('.slider ul').css('left'), 10);
        if (this.slide.index > 0) {
            $('.slider ul').animate({
                left: sliderLeft + (this.slide.widthIncMargin * this.slide.slideToSHow)
            });
            this.slide.index--;
        }
    };
    SliderComponent.prototype.sliderRightArrow = function () {
        var sliderLeft = parseInt($('.slider ul').css('left'), 10);
        if (this.slide.index < (this.slide.count / this.slide.slideToSHow) - 1) {
            $('.slider ul').animate({
                left: sliderLeft - (this.slide.width + this.slide.marginLeft + this.slide.marginRight) * this.slide.slideToSHow
            });
            this.slide.index++;
        }
    };
    SliderComponent.prototype.saveSelectedItem = function (index) {
        this.sliderService.isPressSelected[index] = !this.sliderService.isPressSelected[index];
        if (this.sliderService.isPressSelected[index]) {
            this.sliderService.chosenPressesArray.push(this.sliderService.pressesArray[index]);
        }
        else {
            this.sliderService.chosenPressesArray.splice(this.sliderService.chosenPressesArray.indexOf(this.sliderService.pressesArray[index]), 1);
        }
    };
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataBaseService.getAvailablePresses().subscribe(function (presses) {
            _this.sliderService.pressesArray = presses;
            for (var i = 0; i < _this.sliderService.pressesArray.length; i++) {
                _this.sliderService.isPressSelected.push(false);
            }
            _this.initSlider();
        });
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"], _services_slider_service__WEBPACK_IMPORTED_MODULE_4__["SliderService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/upload-file/file-upload.service.ts":
/*!****************************************************!*\
  !*** ./src/app/upload-file/file-upload.service.ts ***!
  \****************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' })
};
var FileUploadService = /** @class */ (function () {
    function FileUploadService(httpClient) {
        this.httpClient = httpClient;
    }
    FileUploadService.prototype.uploadFiles = function (requestID, filesToUpload, filesTypes) {
        var formData = new FormData();
        var fileUrl = _constant__WEBPACK_IMPORTED_MODULE_2__["data"].baseURL + '/api/v1/request/file/' + requestID;
        filesToUpload.map(function (file) {
            return formData.append('file', file);
        });
        filesTypes.map(function (fileType) {
            return formData.append('type', fileType);
        });
        return this.httpClient.post(fileUrl, formData, httpOptions);
    };
    FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/app/upload-file/upload-file.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testPlan {\r\n  /*margin-bottom: 200px;*/\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.testPlan .fileUpload{\r\n  display: block;\r\n  border-bottom: 1px solid #b9b9b9;\r\n}\r\n\r\n.testPlan .UploadFileTitle{\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #b9b9b9;\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.testPlan .fileUpload input{\r\n  border: none;\r\n  width: 90%;\r\n  position: relative;\r\n  left: -94px;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n\r\n}\r\n\r\n.testPlan .fileUpload span{\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #0096d6\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7O0FBRWhCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0UGxhbiB7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAyMDBweDsqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRlc3RQbGFuIC5maWxlVXBsb2Fke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjliOWI5O1xyXG59XHJcblxyXG4udGVzdFBsYW4gLlVwbG9hZEZpbGVUaXRsZXtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2I5YjliOTtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcbi50ZXN0UGxhbiAuZmlsZVVwbG9hZCBpbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTk0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcblxyXG59XHJcbi50ZXN0UGxhbiAuZmlsZVVwbG9hZCBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDA5NmQ2XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/upload-file/upload-file.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"testPlan\">\r\n  <div class=\"UploadFileTitle\">Upload file</div>\r\n  <label class=\"fileUpload\">\r\n    <input  type=\"file\" class=\"fileInputToUpload\"/>\r\n    <span>Choose</span>\r\n  </label>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/upload-file/upload-file.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.ts ***!
  \******************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent() {
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/app/upload-file/upload-file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/work-plan/work-plan.component.css":
/*!***************************************************!*\
  !*** ./src/app/work-plan/work-plan.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.weeklyWorkPlan {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\r\n}\r\n.weeklyWorkPlan .mainHeader {\r\n  display: flex;\r\n}\r\n.weeklyWorkPlan .mainHeader .buttons {\r\n  margin-left: auto;\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n.weeklyWorkPlan .mainHeader .buttons .submit {\r\n  background-color: #b9b9b9;\r\n  width: 100px;\r\n  height: 26px;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  border: none;\r\n}\r\n.weeklyWorkPlan .mainHeader .buttons .submit i {\r\n  padding-right: 6px;\r\n}\r\n.weeklyWorkPlan .mainHeader .buttons .mode {\r\n  width: 140px;\r\n  height: 26px;\r\n  background-color: #0096d6;\r\n  border: none;\r\n  margin-right: 10px;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n.weeklyWorkPlan .mainHeader .buttons .mode i {\r\n  padding-right: 5px;\r\n  font-size: 15px;\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n.weeklyWorkPlan .mainHeader .sideTitles > .title {\r\n  position: relative;\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  color: #5a5a5a;\r\n  font-weight: bold;\r\n\r\n}\r\n.weeklyWorkPlan .mainHeader .sideTitles .status {\r\n  position: relative;\r\n}\r\n.weeklyWorkPlan .mainHeader .sideTitles .status .statusTitle {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n}\r\n.weeklyWorkPlan .mainHeader .sideTitles .status .info-icon {\r\n  font-size: 19px;\r\n  padding: 0 6px;\r\n  position: absolute;\r\n  top: 1px;\r\n}\r\n/*-----------------------------------*/\r\n.weeklyWorkPlan .mainContainer {\r\n  margin: 6px 0;\r\n  display: grid;\r\n  grid-template-columns: 273px auto;\r\n}\r\n.weeklyWorkPlan .mainContainer .requests {\r\n  background-color: white;\r\n  margin-right: 10px;\r\n}\r\n.weeklyWorkPlan .mainContainer .requests > .title {\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #5a5a5a;\r\n  padding: 5px 10px;\r\n  border-bottom: 1px solid #e0e1e4;\r\n}\r\n.mainContainer .requests .content .request {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 242px;\r\n  height: 104px;\r\n  border-radius: 4px;\r\n  margin: 10px;\r\n  border: solid 1px #e0e1e4;\r\n  background-color: #ffffff;\r\n  overflow: hidden;\r\n}\r\n.mainContainer .requests .content .request.halfShift {\r\n  border: solid 1px #e0e1e4;\r\n  background-color: #fef0da;\r\n}\r\n.mainContainer .requests .content .request:hover {\r\n  border: solid 1px #0096d6;\r\n  background-color: #f2f2f2;\r\n  cursor: pointer;\r\n}\r\n.mainContainer .requests .content .request:hover .manageInfo .icons {\r\n  visibility: visible;\r\n}\r\n.mainContainer .requests .content .request .info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Roboto;\r\n  font-size: 11px;\r\n  border-right: 1px solid #e0e1e4;\r\n  margin: 10px;\r\n  margin-right: 0;\r\n  padding-right: 8px;\r\n\r\n}\r\n.mainContainer .requests .content .request .info div {\r\n\r\n  font-family: Roboto;\r\n  font-size: 11px;\r\n  color: #5a5a5a;\r\n  line-height: 1.36;\r\n}\r\n.mainContainer .requests .content .request .info > .title {\r\n\r\n  color: #0096d6;\r\n  font-weight: bold;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  padding-bottom: 6px;\r\n}\r\n.mainContainer .requests .content .request .manageInfo {\r\n  flex: auto;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.mainContainer .requests .content .request .manageInfo .shiftType {\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n}\r\n.mainContainer .requests .content .request .manageInfo .shifts {\r\n\r\n  font-family: Roboto;\r\n  font-size: 10px;\r\n  color: #5a5a5a;\r\n}\r\n.mainContainer .requests .content .request .manageInfo .icons {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  color: #5a5a5a;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  width: 59px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  visibility: hidden;\r\n}\r\n.mainContainer .requests .content .request .manageInfo .fireContainer {\r\n  position: absolute;\r\n  top: -29px;\r\n  right: -33px;\r\n  background-color: #f5a623;\r\n  height: 50px;\r\n  width: 105px;\r\n  z-index: 0;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n.mainContainer .requests .content .request .manageInfo .fire-icon {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  color: white;\r\n  right: 22px;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan {\r\n  flex: auto;\r\n  background-color: white;\r\n\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header {\r\n  padding: 5px 10px;\r\n  display: flex;\r\n  border-bottom: 1px solid #e0e1e4;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header > .title {\r\n  font-family: Roboto;\r\n  font-size: 16px;\r\n  color: #5a5a5a;\r\n  font-weight: bold;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header > .status {\r\n  margin-left: auto;\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #0096d6;\r\n  font-weight: 500;\r\n  border-right: 1px solid #e0e1e4;\r\n  padding: 0 10px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header .next {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #b9b9b9;\r\n  border-right: 1px solid #e0e1e4;\r\n  padding: 0 10px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header .month {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n  padding: 0 5px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header .month i {\r\n  padding: 0 4px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .header .month span {\r\n  padding: 0 2px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content {\r\n\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableHeader {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  border-bottom: 1px solid #e0e1e4;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableHeader li {\r\n  flex: 1;\r\n  color: #5a5a5a;\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  border-right: 1px solid #e0e1e4;\r\n  text-align: center;\r\n  padding: 5px 10px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableHeader li:last-child {\r\n  border-right: none;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableHeader li:first-child {\r\n  text-align: left;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow {\r\n  display: flex;\r\n  border-bottom: 1px solid #e0e1e4;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow > div {\r\n  flex: 1;\r\n  border-right: 1px solid #e0e1e4;\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow > div:last-child {\r\n  border-right: none;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .press img {\r\n  width: 99px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .press .name {\r\n  font-family: Roboto;\r\n  font-size: 14px;\r\n  color: #5a5a5a;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .press .type {\r\n  font-family: Roboto;\r\n  font-size: 12px;\r\n  color: #5a5a5a;\r\n  text-align: center;\r\n  padding-bottom: 10px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayOff {\r\n  font-family: Roboto;\r\n  color: #b9b9b9;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayOff i {\r\n  font-size: 16px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayOff span {\r\n  width: 98.9px;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayShifts .shift {\r\n  width: 98.9px;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  border: dashed 1px #0096d6;\r\n  background-color: #f2f2f2;\r\n  text-align: center;\r\n  color: #0096d6;\r\n  margin: 5px 0;\r\n  font-size: 12px;\r\n  position: relative;\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayShifts .shift.dragOver {\r\n  background-color: white;\r\n\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayShifts .shift.dragOver .slash {\r\n  display: none;\r\n  pointer-events: none;\r\n\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayShifts .shift .drop {\r\n  display: none;\r\n  pointer-events: none;\r\n\r\n}\r\n.weeklyWorkPlan .mainContainer .weeklyPlan .content .tableRow .dayShifts .shift.dragOver .drop {\r\n  display: block;\r\n}\r\n.requestInShift{\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -1px;\r\n  right: -1px;\r\n  bottom: -1px;\r\n  background: red;\r\n  padding: 0px 5px;\r\n  color: white;\r\n  font-family: Roboto;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  border-radius: 3px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n\r\n}\r\n.requestInShift div {\r\n  text-align: left;\r\n}\r\n.requestInShift .shiftIcon{\r\n  border: 1px solid white;\r\n  border-radius: 50%;\r\n  height: 18px;\r\n  width: 18px;\r\n  padding: 3px;\r\n  margin-top: 6px;\r\n  margin-left: auto;\r\n}\r\n.half1RequestInShift{\r\n  right: 50%;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n.half2RequestInShift{\r\n  left: 50%;\r\n  border-radius: 0 3px 3px 0;\r\n  border-left: 1px solid #f2f2f2;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay1wbGFuL3dvcmstcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7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QUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjs7QUFFdEI7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7O0FBRXRCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvd29yay1wbGFuL3dvcmstcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ud2Vla2x5V29ya1BsYW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluSGVhZGVyIC5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkhlYWRlciAuYnV0dG9ucyAuc3VibWl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5IZWFkZXIgLmJ1dHRvbnMgLnN1Ym1pdCBpIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkhlYWRlciAuYnV0dG9ucyAubW9kZSB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmQ2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkhlYWRlciAuYnV0dG9ucyAubW9kZSBpIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluSGVhZGVyIC5zaWRlVGl0bGVzID4gLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5IZWFkZXIgLnNpZGVUaXRsZXMgLnN0YXR1cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5IZWFkZXIgLnNpZGVUaXRsZXMgLnN0YXR1cyAuc3RhdHVzVGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5IZWFkZXIgLnNpZGVUaXRsZXMgLnN0YXR1cyAuaW5mby1pY29uIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIHtcclxuICBtYXJnaW46IDZweCAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzNweCBhdXRvO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLnJlcXVlc3RzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgPiAudGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMWU0O1xyXG59XHJcblxyXG5cclxuLm1haW5Db250YWluZXIgLnJlcXVlc3RzIC5jb250ZW50IC5yZXF1ZXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDI0MnB4O1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMWU0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5tYWluQ29udGFpbmVyIC5yZXF1ZXN0cyAuY29udGVudCAucmVxdWVzdC5oYWxmU2hpZnQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGUxZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjBkYTtcclxufVxyXG5cclxuLm1haW5Db250YWluZXIgLnJlcXVlc3RzIC5jb250ZW50IC5yZXF1ZXN0OmhvdmVyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjMDA5NmQ2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgLmNvbnRlbnQgLnJlcXVlc3Q6aG92ZXIgLm1hbmFnZUluZm8gLmljb25zIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluQ29udGFpbmVyIC5yZXF1ZXN0cyAuY29udGVudCAucmVxdWVzdCAuaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUxZTQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblxyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgLmNvbnRlbnQgLnJlcXVlc3QgLmluZm8gZGl2IHtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XHJcbn1cclxuXHJcbi5tYWluQ29udGFpbmVyIC5yZXF1ZXN0cyAuY29udGVudCAucmVxdWVzdCAuaW5mbyA+IC50aXRsZSB7XHJcblxyXG4gIGNvbG9yOiAjMDA5NmQ2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5tYWluQ29udGFpbmVyIC5yZXF1ZXN0cyAuY29udGVudCAucmVxdWVzdCAubWFuYWdlSW5mbyB7XHJcbiAgZmxleDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgLmNvbnRlbnQgLnJlcXVlc3QgLm1hbmFnZUluZm8gLnNoaWZ0VHlwZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbn1cclxuXHJcbi5tYWluQ29udGFpbmVyIC5yZXF1ZXN0cyAuY29udGVudCAucmVxdWVzdCAubWFuYWdlSW5mbyAuc2hpZnRzIHtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbn1cclxuXHJcblxyXG4ubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgLmNvbnRlbnQgLnJlcXVlc3QgLm1hbmFnZUluZm8gLmljb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA1OXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1haW5Db250YWluZXIgLnJlcXVlc3RzIC5jb250ZW50IC5yZXF1ZXN0IC5tYW5hZ2VJbmZvIC5maXJlQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMjlweDtcclxuICByaWdodDogLTMzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YTYyMztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwNXB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciAucmVxdWVzdHMgLmNvbnRlbnQgLnJlcXVlc3QgLm1hbmFnZUluZm8gLmZpcmUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHJpZ2h0OiAyMnB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiB7XHJcbiAgZmxleDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMWU0O1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmhlYWRlciA+IC50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuaGVhZGVyID4gLnN0YXR1cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDk2ZDY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMWU0O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5oZWFkZXIgLm5leHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNiOWI5Yjk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTFlNDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuaGVhZGVyIC5tb250aCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuaGVhZGVyIC5tb250aCBpIHtcclxuICBwYWRkaW5nOiAwIDRweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5oZWFkZXIgLm1vbnRoIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG59XHJcblxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IHtcclxuXHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuY29udGVudCAudGFibGVIZWFkZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTFlNDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZUhlYWRlciBsaSB7XHJcbiAgZmxleDogMTtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMWU0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZUhlYWRlciBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuY29udGVudCAudGFibGVIZWFkZXIgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuY29udGVudCAudGFibGVSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUxZTQ7XHJcbn1cclxuXHJcbi53ZWVrbHlXb3JrUGxhbiAubWFpbkNvbnRhaW5lciAud2Vla2x5UGxhbiAuY29udGVudCAudGFibGVSb3cgPiBkaXYge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTFlNDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93ID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAucHJlc3MgaW1nIHtcclxuICB3aWR0aDogOTlweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAucHJlc3MgLm5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAucHJlc3MgLnR5cGUge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAuZGF5T2ZmIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGNvbG9yOiAjYjliOWI5O1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93IC5kYXlPZmYgaSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93IC5kYXlPZmYgc3BhbiB7XHJcbiAgd2lkdGg6IDk4LjlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93IC5kYXlTaGlmdHMgLnNoaWZ0IHtcclxuICB3aWR0aDogOTguOXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICMwMDk2ZDY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDk2ZDY7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93IC5kYXlTaGlmdHMgLnNoaWZ0LmRyYWdPdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAuZGF5U2hpZnRzIC5zaGlmdC5kcmFnT3ZlciAuc2xhc2gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG59XHJcblxyXG4ud2Vla2x5V29ya1BsYW4gLm1haW5Db250YWluZXIgLndlZWtseVBsYW4gLmNvbnRlbnQgLnRhYmxlUm93IC5kYXlTaGlmdHMgLnNoaWZ0IC5kcm9wIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxufVxyXG5cclxuLndlZWtseVdvcmtQbGFuIC5tYWluQ29udGFpbmVyIC53ZWVrbHlQbGFuIC5jb250ZW50IC50YWJsZVJvdyAuZGF5U2hpZnRzIC5zaGlmdC5kcmFnT3ZlciAuZHJvcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXF1ZXN0SW5TaGlmdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgcmlnaHQ6IC0xcHg7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG59XHJcblxyXG4ucmVxdWVzdEluU2hpZnQgZGl2IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5yZXF1ZXN0SW5TaGlmdCAuc2hpZnRJY29ue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmhhbGYxUmVxdWVzdEluU2hpZnR7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxufVxyXG5cclxuLmhhbGYyUmVxdWVzdEluU2hpZnR7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/work-plan/work-plan.component.html":
/*!****************************************************!*\
  !*** ./src/app/work-plan/work-plan.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weeklyWorkPlan\">\r\n\r\n\r\n  <div class=\"mainHeader\">\r\n    <div class=\"sideTitles\">\r\n      <div class=\"title\">Weekly Work Plan</div>\r\n      <div class=\"status\">\r\n        <span class=\"statusTitle\">Status: Pending Planner Action</span>\r\n        <i class=\"info-icon fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons\">\r\n\r\n      <button class=\"mode\">\r\n        <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n        <span>Presentation Mode</span>\r\n      </button>\r\n\r\n      <button class=\"submit\">\r\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n        <span>Submit Plan</span>\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"mainContainer\">\r\n    <div class=\"requests\">\r\n      <div class=\"title\">Requests</div>\r\n      <div class=\"content\">\r\n\r\n        <!--req card (dragstart)-->\r\n        <div class=\"request \" [class.halfShift]=\"req.shiftsLength==0.5\" *ngFor=\"let req of requests;let i=index\"\r\n             draggable=\"true\" (drag)=\"requestDragged($event,req.id,i)\" (dragend)=\"dragRequestEnd()\">\r\n          <div class=\"info\">\r\n            <div class=\"title\">Yegor G.{{req.name}}</div>\r\n            <div class=\"event\">VIP event preparation</div>\r\n            <div class=\"projectName\">Project Name</div>\r\n            <div class=\"productName\">Product Name</div>\r\n            <div class=\"productName\">Indigo 6600 or Indigo 6000</div>\r\n          </div>\r\n          <div class=\"manageInfo\">\r\n            <div class=\"shift\">\r\n              <div class=\"shiftType\">{{req.shiftsLength}}\r\n                <span *ngIf=\"req.isConsecutive\">Cons</span>\r\n              </div>\r\n              <div class=\"shifts\">Shifts</div>\r\n            </div>\r\n            <div *ngIf=\"req.shiftsLength==0.5\" class=\"fireContainer\">\r\n              <i class=\"fa fa-free-code-camp fire-icon\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"icons\">\r\n              <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--req card -->\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"weeklyPlan\">\r\n      <div class=\"header\">\r\n        <div class=\"title\">Weekly Plan</div>\r\n        <div class=\"status\">Current/Running plan</div>\r\n        <div class=\"next\">Next week plan</div>\r\n        <div class=\"month\">\r\n          <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n          <span>Feb 11 to Feb 21</span>\r\n          <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"content\">\r\n\r\n        <ul class=\"tableHeader\">\r\n          <li>Presses</li>\r\n          <li>Sun</li>\r\n          <li>Mon</li>\r\n          <li>Tue</li>\r\n          <li>Wed</li>\r\n          <li>Thu</li>\r\n          <li>Fri</li>\r\n          <li>Sat</li>\r\n        </ul>\r\n\r\n        <div class=\"tableRow\" *ngFor=\"let weak of workingDaysPerWeek;let w=index\">\r\n          <div class=\"press\">\r\n            <img src=\"../../assets/images/press.png\" alt=\"\">\r\n            <div class=\"name\">T400S</div>\r\n            <div class=\"type\">A10203040</div>\r\n          </div>\r\n\r\n          <div *ngFor=\"let day of weak;let d=index\" [class.dayOff]=\"!day.isWorkingDay\"\r\n               [class.dayShifts]=\"day.isWorkingDay\">\r\n            <i *ngIf=\"!day.isWorkingDay\" class=\"fa fa-calendar-times-o\" aria-hidden=\"true\"></i>\r\n            <span *ngIf=\"!day.isWorkingDay\">Day Off</span>\r\n\r\n            <div class=\"shift\"\r\n                 *ngFor=\"let shift of [].constructor(day.shiftsNumber);let s=index\"\r\n                 (drop)=\"dropRequest($event,w,d,s)\"\r\n                 (dragover)=\"onDragOver($event)\"\r\n                 (dragleave)=\"onDragLeave($event)\"\r\n                 (dragenter)=\"onDragenter($event)\">\r\n              <span class=\"slash\">--</span>\r\n              <span class=\"drop\">Done</span>\r\n\r\n              <div class=\"requestInShift\" (drag)=\"shiftDragged($event,w,d,s,'firstHalf')\"  draggable=\"true\" (dragend)=\"dragShiftEnd()\"\r\n                   [class.half1RequestInShift]=\"shiftsReq[w][d][s].firstR!=null && shiftsReq[w][d][s].firstR.shiftsLength==0.5\"\r\n                   [style.background-color]=\"shiftsReqColors[w][d][s].firstR\"\r\n                   *ngIf=\"shiftsReq[w][d][s].firstR!=null\">\r\n                <div>\r\n                  <div>{{(shiftsReq[w][d][s]).firstR != null ? (shiftsReq[w][d][s]).firstR.name : \"\"}}</div>\r\n                  <div>Private..</div>\r\n                </div>\r\n                <i class=\"fa fa-info\" aria-hidden=\"true\"\r\n                   [class.shiftIcon]=\"shiftsReq[w][d][s].firstR.shiftsLength!=0.5\"></i>\r\n              </div>\r\n\r\n              <div class=\" requestInShift half2RequestInShift\"  (drag)=\"shiftDragged($event,w,d,s,'secondHalf')\"  draggable=\"true\" (dragend)=\"dragShiftEnd()\"\r\n                   [style.background-color]=\"shiftsReqColors[w][d][s].secondR\"\r\n                   *ngIf=\"shiftsReq[w][d][s].secondR!=null\">\r\n                <div>\r\n                  <div>{{(shiftsReq[w][d][s]).secondR != null ? (shiftsReq[w][d][s]).secondR.name : \"\"}}</div>\r\n                  <div>Private..</div>\r\n                </div>\r\n                <i class=\"fa fa-info\" aria-hidden=\"true\"\r\n                   [class.shiftIcon]=\"shiftsReq[w][d][s].secondR.shiftsLength!=0.5\"></i>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/work-plan/work-plan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/work-plan/work-plan.component.ts ***!
  \**************************************************/
/*! exports provided: WorkPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPlanComponent", function() { return WorkPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkPlanComponent = /** @class */ (function () {
    function WorkPlanComponent() {
        this.requests = [
            { id: 0, name: 'req0', shiftsLength: 0.5, isConsecutive: false },
            { id: 5, name: 'req5', shiftsLength: 0.5, isConsecutive: false },
            { id: 1, name: 'req1', shiftsLength: 2, isConsecutive: true },
            { id: 2, name: 'req2', shiftsLength: 3, isConsecutive: true },
            { id: 3, name: 'req3', shiftsLength: 4, isConsecutive: false },
            { id: 6, name: 'req6', shiftsLength: 0.5, isConsecutive: false },
            { id: 4, name: 'req4', shiftsLength: 1, isConsecutive: false }
        ];
        this.workingDays = [
            {
                'dayIndex': 0,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 3
            },
            {
                'dayIndex': 1,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 2
            },
            {
                'dayIndex': 2,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 3
            },
            {
                'dayIndex': 3,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 2
            },
            {
                'dayIndex': 4,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 1
            },
            {
                'dayIndex': 5,
                'id': 0,
                'isWorkingDay': false,
                'shiftsNumber': 0
            },
            {
                'dayIndex': 6,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 3
            },
            {
                'dayIndex': 0,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 2
            },
            {
                'dayIndex': 1,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 2
            },
            {
                'dayIndex': 2,
                'id': 0,
                'isWorkingDay': false,
                'shiftsNumber': 0
            },
            {
                'dayIndex': 3,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 1
            },
            {
                'dayIndex': 4,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 1
            },
            {
                'dayIndex': 5,
                'id': 0,
                'isWorkingDay': true,
                'shiftsNumber': 2
            },
            {
                'dayIndex': 6,
                'id': 0,
                'isWorkingDay': false,
                'shiftsNumber': 0
            }
        ];
        this.workingDaysPerWeek = [];
        this.shiftsReq = [[[]]];
        this.shiftsReqColors = [[[]]];
        this.consIndexArray = [];
        this.draggedShiftIndex = { w: 0, d: 0, s: 0 };
    }
    WorkPlanComponent.prototype.ngOnInit = function () {
        var week = [];
        var w = -1, d = 0, s = 0;
        for (var _i = 0, _a = this.workingDays; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day.dayIndex == 0) {
                w++;
                this.shiftsReq[w] = [[]];
                this.shiftsReqColors[w] = [[]];
                week = [];
            }
            week.push(day);
            this.shiftsReq[w][d] = new Array(day.shiftsNumber).fill(null).map(function () { return ({ firstR: null, secondR: null }); });
            this.shiftsReqColors[w][d] = new Array(day.shiftsNumber).fill(null).map(function () { return ({ firstR: null, secondR: null }); });
            d++;
            if (day.dayIndex == 6) {
                d = 0;
                this.workingDaysPerWeek.push(week);
            }
        }
    };
    WorkPlanComponent.prototype.requestDragged = function (event, id, index) {
        // this.requests.slice(index, 1);
        this.draggedData = this.getReqWithID(id);
    };
    WorkPlanComponent.prototype.dropRequest = function (event, w, d, s) {
        event.preventDefault();
        if (this.draggedData == null && this.draggedShift != null) {
            this.dropShift(event, w, d, s);
            this.draggedData = null;
            return;
        }
        //check if drop shift is not full
        if (this.draggedData == null ||
            (this.draggedData.shiftsLength == 0.5 && this.shiftsReq[w][d][s].firstR != null && this.shiftsReq[w][d][s].secondR != null) ||
            (this.draggedData.shiftsLength == 0.5 && this.shiftsReq[w][d][s].firstR != null && this.shiftsReq[w][d][s].firstR.shiftsLength != 0.5) ||
            (this.draggedData.shiftsLength != 0.5 && !(this.shiftsReq[w][d][s].firstR == null && this.shiftsReq[w][d][s].secondR == null))) {
            var elem_1 = event.target;
            elem_1.classList.remove('dragOver');
            this.draggedData == null ? alert('null request') : alert('shift is full');
            this.draggedData = null;
            return;
        }
        var randomColor = this.getRandomColor();
        var numShift = this.draggedData.shiftsLength;
        var addedSuccessfully = true;
        if (this.draggedData.shiftsLength == 0.5) {
            if (this.shiftsReq[w][d][s].firstR == null) {
                this.shiftsReq[w][d][s].firstR = this.draggedData;
                this.shiftsReqColors[w][d][s].firstR = randomColor;
                numShift -= 0.5;
            }
            else if (this.shiftsReq[w][d][s].secondR == null && this.shiftsReq[w][d][s].firstR.shiftsLength == 0.5) {
                this.shiftsReq[w][d][s].secondR = this.draggedData;
                this.shiftsReqColors[w][d][s].secondR = randomColor;
                numShift -= 0.5;
            }
            else {
                addedSuccessfully = false;
            }
        }
        else {
            numShift = this.fillIndexs(numShift, w, d, s, this.draggedData);
            //fill data in the index's from consIndexArray
            if (this.draggedData.isConsecutive == true && numShift == 0) {
                if (this.areConsecutiveShifts()) {
                    addedSuccessfully = this.fillRequestShiftIndex(this.draggedData.shiftsLength, randomColor, this.draggedData);
                }
                else {
                    addedSuccessfully = false;
                    alert('not consecutive shifts');
                }
            }
            else if (this.draggedData.isConsecutive == false && numShift == 0) {
                addedSuccessfully = this.fillRequestShiftIndex(this.draggedData.shiftsLength, randomColor, this.draggedData);
            }
            else if (numShift != 0) {
                addedSuccessfully = false;
                alert('not enough shifts');
            }
        }
        this.consIndexArray = [];
        if (addedSuccessfully) {
            this.removeReq(this.draggedData);
        }
        this.draggedData = null;
        var elem = event.target;
        elem.classList.remove('dragOver');
    };
    WorkPlanComponent.prototype.fillIndexs = function (numShift, w, d, s, draggedData) {
        for (var wi = w; wi < this.shiftsReq.length && (numShift != 0); wi++) {
            var di = wi == w ? d : 0;
            for (; di < this.shiftsReq[wi].length && (numShift != 0); di++) {
                var si = (wi == w && di == d) ? s : 0;
                for (; si < this.shiftsReq[wi][di].length && (numShift != 0); si++) {
                    if (this.shiftsReq[wi][di][si].firstR == null && this.shiftsReq[wi][di][si].secondR == null && draggedData.isConsecutive) {
                        //add available index's to the consIndexArray array
                        var consIndex = { w: wi, d: di, s: si };
                        this.consIndexArray.push(consIndex);
                        numShift--;
                    }
                    else if (this.shiftsReq[wi][di][si].firstR == null && this.shiftsReq[wi][di][si].secondR == null) {
                        var consIndex = { w: wi, d: di, s: si };
                        this.consIndexArray.push(consIndex);
                        numShift--;
                    }
                }
            }
        }
        return numShift;
    };
    WorkPlanComponent.prototype.areConsecutiveShifts = function () {
        var canAddConsecutiveReq = true;
        var cw = this.consIndexArray[0].w, cd = this.consIndexArray[0].d, cs = this.consIndexArray[0].s;
        for (var i = 1; i < this.consIndexArray.length && canAddConsecutiveReq; i++) {
            //same week and day
            if (this.consIndexArray[i].w == cw && this.consIndexArray[i].d == cd) {
                if (this.consIndexArray[i].s - this.consIndexArray[i - 1].s != 1) {
                    canAddConsecutiveReq = false;
                    break;
                }
            }
            //same week
            else if (this.consIndexArray[i].w == cw && this.consIndexArray[i].d - cd == 1 && this.consIndexArray[i].s == 0) {
                var j = cd == this.consIndexArray[0].d ? cs : 0;
                for (; j < this.shiftsReq[cw][cd].length; j++) {
                    if (this.containsShiftIndexObject({ w: cw, d: cd, s: j }, this.consIndexArray) == false) {
                        canAddConsecutiveReq = false;
                        break;
                    }
                }
                cd = this.consIndexArray[i].d;
            }
            else {
                canAddConsecutiveReq = false;
                break;
            }
        }
        return canAddConsecutiveReq;
    };
    WorkPlanComponent.prototype.fillRequestShiftIndex = function (numShift, randomColor, draggedData) {
        var _this = this;
        this.consIndexArray.map(function (index) {
            _this.shiftsReq[index.w][index.d][index.s].firstR = draggedData;
            _this.shiftsReqColors[index.w][index.d][index.s].firstR = randomColor;
            numShift--;
        });
        return numShift == 0 ? true : false;
    };
    WorkPlanComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    WorkPlanComponent.prototype.onDragenter = function (event) {
        if (this.draggedData != null) {
            var elem = event.target;
            elem.classList.add('dragOver');
        }
    };
    WorkPlanComponent.prototype.onDragLeave = function (event) {
        event.preventDefault();
        var elem = event.target;
        elem.classList.remove('dragOver');
    };
    WorkPlanComponent.prototype.removeReq = function (req) {
        var index = this.requests.indexOf(req, 0);
        this.requests.splice(index, 1);
    };
    WorkPlanComponent.prototype.getReqWithID = function (id) {
        var relem = null;
        this.requests.map(function (elem) {
            if (elem.id == id) {
                relem = elem;
            }
        });
        return relem;
    };
    WorkPlanComponent.prototype.getRandomColor = function () {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    };
    WorkPlanComponent.prototype.containsShiftIndexObject = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].w === obj.w && list[i].d === obj.d && list[i].s === obj.s) {
                return true;
            }
        }
        return false;
    };
    WorkPlanComponent.prototype.shiftDragged = function ($event, w, d, s, shiftPart) {
        this.draggedShift = this.shiftsReq[w][d][s];
        this.draggedShiftIndex = { w: w, d: d, s: s };
        this.draggedShiftPart = shiftPart;
    };
    WorkPlanComponent.prototype.dropShift = function (event, newW, newD, newS) {
        var oldRequest;
        var oldColor;
        if (this.draggedShiftPart.localeCompare('firstHalf') == 0) {
            oldRequest = this.shiftsReq[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR;
            oldColor = this.shiftsReqColors[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR;
        }
        else if (this.draggedShiftPart.localeCompare('secondHalf') == 0) {
            oldRequest = this.shiftsReq[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].secondR;
            oldColor = this.shiftsReqColors[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].secondR;
        }
        if (oldRequest.shiftsLength == 0.5 && this.shiftsReq[newW][newD][newS].firstR != null && this.shiftsReq[newW][newD][newS].secondR != null ||
            (oldRequest.shiftsLength == 0.5 && this.shiftsReq[newW][newD][newS].firstR != null && this.shiftsReq[newW][newD][newS].firstR.shiftsLength != 0.5) ||
            (oldRequest.shiftsLength != 0.5 && (this.shiftsReq[newW][newD][newS].firstR != null || this.shiftsReq[newW][newD][newS].secondR != null))) {
            alert('this shift is full ');
            this.draggedShiftPart = '';
            this.draggedShiftIndex = { w: null, d: null, s: null };
            this.draggedShift = null;
            return;
        }
        if (oldRequest.isConsecutive == false && oldRequest.shiftsLength != 0.5) {
            this.shiftsReq[newW][newD][newS].firstR = oldRequest;
            this.shiftsReqColors[newW][newD][newS].firstR = oldColor;
            this.shiftsReq[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR = null;
            this.shiftsReqColors[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR = null;
        }
        else if (oldRequest.shiftsLength == 0.5) {
            if (this.shiftsReq[newW][newD][newS].firstR == null) {
                this.shiftsReq[newW][newD][newS].firstR = oldRequest;
                this.shiftsReqColors[newW][newD][newS].firstR = oldColor;
            }
            else {
                this.shiftsReq[newW][newD][newS].secondR = oldRequest;
                this.shiftsReqColors[newW][newD][newS].secondR = oldColor;
            }
            if (this.draggedShiftPart.localeCompare('firstHalf') == 0) {
                this.shiftsReq[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR = null;
                this.shiftsReqColors[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].firstR = null;
            }
            else {
                this.shiftsReq[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].secondR = null;
                this.shiftsReqColors[this.draggedShiftIndex.w][this.draggedShiftIndex.d][this.draggedShiftIndex.s].secondR = null;
            }
        }
        else {
            var numShift = this.fillIndexs(oldRequest.shiftsLength, newW, newD, newS, this.draggedShift);
            if (this.areConsecutiveShifts() && numShift == 0) {
                for (var wi = 0; wi < this.shiftsReq.length; wi++) {
                    for (var di = 0; di < this.shiftsReq[wi].length; di++) {
                        for (var si = 0; si < this.shiftsReq[wi][di].length; si++) {
                            if (this.shiftsReq[wi][di][si].firstR != null && this.shiftsReq[wi][di][si].firstR.id == oldRequest.id) {
                                this.shiftsReq[wi][di][si].firstR = null;
                            }
                        }
                    }
                }
                this.fillRequestShiftIndex(oldRequest.shiftsLength, oldColor, oldRequest);
            }
            else {
                alert('there is no consecutive shifts');
            }
            this.consIndexArray = [];
        }
        this.draggedShiftPart = '';
        this.draggedShiftIndex = { w: null, d: null, s: null };
        this.draggedShift = null;
    };
    WorkPlanComponent.prototype.dragShiftEnd = function () {
        this.draggedShiftPart = '';
        this.draggedShiftIndex = { w: null, d: null, s: null };
        this.draggedShift = null;
    };
    WorkPlanComponent.prototype.dragRequestEnd = function () {
        this.draggedData = null;
    };
    WorkPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-plan',
            template: __webpack_require__(/*! ./work-plan.component.html */ "./src/app/work-plan/work-plan.component.html"),
            styles: [__webpack_require__(/*! ./work-plan.component.css */ "./src/app/work-plan/work-plan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkPlanComponent);
    return WorkPlanComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\eclipse-workspace\test\exalt-angular-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map