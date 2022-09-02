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



var routes = [];
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

module.exports = "<div style=\"text-align:right;\">\n  <label>語言：</label>\n  <select pInputText [(ngModel)]=\"currentLang\" (ngModelChange)=\"onChangeLang()\">\n    <option value=\"en-US\">英文</option>\n    <option value=\"zh-TW\">繁體中文</option>\n  </select>\n</div>\n\n<app-dog></app-dog>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
        this.title = "test0608";
        // 目前的語言
        this.currentLang = "zh-TW";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setLang();
    };
    AppComponent.prototype.setLang = function () {
        this._translate.setDefaultLang("zh-TW");
        this._translate.use("zh-TW");
    };
    AppComponent.prototype.onChangeLang = function () {
        this._translate.use(this.currentLang);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dog_dog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dog/dog.component */ "./src/app/dog/dog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");











// primeng module





// ngx-translate



function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dog_dog_component__WEBPACK_IMPORTED_MODULE_5__["DogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                // primeng
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["GrowlModule"],
                // ngx-translate
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                })
            ],
            providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__["MessageService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dog/dog.component.css":
/*!***************************************!*\
  !*** ./src/app/dog/dog.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvZy9kb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dog/dog.component.html":
/*!****************************************!*\
  !*** ./src/app/dog/dog.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dataTable\n  [value]=\"dogs\"\n  selectionMode=\"single\"\n  [(selection)]=\"selectedDog\"\n  (onRowSelect)=\"onRowSelectDog($event)\"\n  [paginator]=\"true\"\n  [rows]=\"10\"\n  [paginator]=\"true\"\n  [rowsPerPageOptions]=\"[10, 20, 30, 40, 50]\"\n  [responsive]=\"true\"\n  #dt\n>\n  <p-header>{{ \"dog.crud_for_dog\" | translate }}</p-header>\n  <p-column\n    *ngFor=\"let col of cols\"\n    [field]=\"col.field\"\n    [header]=\"col.header | translate\"\n    [sortable]=\"true\"\n    [filter]=\"true\"\n    [filterPlaceholder]=\"'dog.please_enter_a_keyword_to_search' | translate\"\n    filterMatchMode=\"contains\"\n  ></p-column>\n  <p-footer\n    ><div class=\"ui-helper-clearfix\" style=\"width:100%\">\n      <button\n        type=\"button\"\n        pButton\n        icon=\"fa-plus\"\n        style=\"float:left\"\n        (click)=\"onCreateDog()\"\n        [label]=\"'button.add' | translate\"\n      ></button></div\n  ></p-footer>\n</p-dataTable>\n\n<p-dialog\n  [header]=\"'dog.edit_dog_information' | translate\"\n  [(visible)]=\"displayDialog\"\n  [responsive]=\"true\"\n  showEffect=\"fade\"\n  [modal]=\"true\"\n>\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"dog\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\">\n        <label for=\"name\">{{ \"dog.name\" | translate }}</label>\n      </div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"name\" [(ngModel)]=\"dog.name\"/>\n        <!-- <input pInputText id=\"name\" [(ngModel)]=\"dog.name\" (ngModelChange)=\"onChang()\"/> -->\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\">\n        <label for=\"year\">{{ \"dog.year\" | translate }}</label>\n      </div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"year\" [(ngModel)]=\"dog.years\" />\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\">\n        <label for=\"kind\">{{ \"dog.kind\" | translate }}</label>\n      </div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"kind\" [(ngModel)]=\"dog.variety\" />\n      </div>\n    </div>\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n      <button\n        type=\"button\"\n        pButton\n        icon=\"fa-close\"\n        (click)=\"onCancelDog()\"\n        [label]=\"'button.cancel' | translate\"\n      ></button>\n      <button\n        *ngIf=\"!newDog\"\n        type=\"button\"\n        pButton\n        icon=\"fa-trash\"\n        (click)=\"onDeleteDog()\"\n        [label]=\"'button.delete' | translate\"\n        class=\"ui-button-danger\"\n      ></button>\n      <button\n        type=\"button\"\n        pButton\n        icon=\"fa-file\"\n        (click)=\"onSaveDog()\"\n        [label]=\"'button.save' | translate\"\n        [disabled]=\"onDisabledRequired()\"\n        class=\"ui-button-success\"\n      ></button>\n    </div>\n  </p-footer>\n</p-dialog>\n\n<p-growl [(value)]=\"msgs\"></p-growl>\n"

/***/ }),

/***/ "./src/app/dog/dog.component.ts":
/*!**************************************!*\
  !*** ./src/app/dog/dog.component.ts ***!
  \**************************************/
/*! exports provided: DogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogComponent", function() { return DogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dog.service */ "./src/app/services/dog.service.ts");
/* harmony import */ var _models_dog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/dog */ "./src/app/models/dog.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var DogComponent = /** @class */ (function () {
    function DogComponent(dogservice, messageService, _translate) {
        this.dogservice = dogservice;
        this.messageService = messageService;
        this._translate = _translate;
        this.dogs = [];
        this.newDog = false;
        this.cols = [
            { field: "name", header: "dog.name" },
            { field: "years", header: "dog.year" },
            { field: "variety", header: "dog.kind" }
        ];
    }
    DogComponent.prototype.ngOnInit = function () {
        this.getdog();
    };
    /**
     * 取得所有的資料
     */
    DogComponent.prototype.getdog = function () {
        var _this = this;
        this.dogservice.getdogs().subscribe(function (data) {
            _this.dogs = data.data;
        }, function (err) {
            console.error(err);
        });
    };
    /**
     * 點選一筆資料，並開窗編輯畫面
     * @param event 取得點選的那筆資料
     */
    DogComponent.prototype.onRowSelectDog = function (event) {
        this.newDog = false;
        this.dog = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event.data);
        this.displayDialog = true;
    };
    /**
     * 新增一筆資料
     */
    DogComponent.prototype.onCreateDog = function () {
        this.newDog = true;
        this.dog = new _models_dog__WEBPACK_IMPORTED_MODULE_3__["Dog"]();
        this.displayDialog = true;
    };
    /**
     * 新增或修改一筆資料
     */
    DogComponent.prototype.onSaveDog = function () {
        if (!this.onDisabledRequired()) {
            var dogs = this.dogs.slice();
            if (this.newDog) {
                dogs.push(this.dog);
                this.messageService.add({
                    severity: "success",
                    summary: 'Service Message',
                    detail: this.getTranslate('message.successfully_added')
                });
            }
            else {
                var index = dogs.indexOf(this.selectedDog);
                console.log(index);
                dogs[index] = this.dog;
                this.messageService.add({
                    severity: "success",
                    summary: 'Service Message',
                    detail: this.getTranslate('message.successfully_modified')
                });
            }
            this.dogs = dogs;
            this.newDog = false;
            this.onCancelDog();
        }
        else {
            this.messageService.add({
                severity: "error",
                summary: 'Service Message',
                detail: this.getTranslate('message.fields_that_are_required')
            });
        }
    };
    /**
     * 刪除一筆資料
     */
    DogComponent.prototype.onDeleteDog = function () {
        var index = this.dogs.indexOf(this.selectedDog);
        this.dogs = this.dogs.filter(function (val, i) { return i !== index; });
        this.messageService.add({
            severity: "success",
            summary: "Service Message",
            detail: this.getTranslate("message.successfully_deleted")
        });
        this.onCancelDog();
    };
    // onChang(){
    //   this.dog.change = true;
    //   return this.dog.change;
    // }
    /**
     * 取消
     */
    DogComponent.prototype.onCancelDog = function () {
        // this.dog.change = false;
        this.dog = this.selectedDog = null;
        this.displayDialog = false;
    };
    /**
     * 檢查必填欄位，是否都有填
     */
    DogComponent.prototype.onDisabledRequired = function () {
        if (this.dog) {
            if (!(this.dog.name && this.dog.years && this.dog.variety)) {
                return true;
            }
            return false;
        }
    };
    /**
     * 多國語言
     */
    DogComponent.prototype.getTranslate = function (key) {
        this._translate.get(key).subscribe(function (res) { return (key = res); });
        return key;
    };
    DogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dog",
            template: __webpack_require__(/*! ./dog.component.html */ "./src/app/dog/dog.component.html"),
            styles: [__webpack_require__(/*! ./dog.component.css */ "./src/app/dog/dog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dog_service__WEBPACK_IMPORTED_MODULE_2__["DogService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], DogComponent);
    return DogComponent;
}());



/***/ }),

/***/ "./src/app/models/dog.ts":
/*!*******************************!*\
  !*** ./src/app/models/dog.ts ***!
  \*******************************/
/*! exports provided: Dog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dog", function() { return Dog; });
var Dog = /** @class */ (function () {
    function Dog() {
        this.change = false;
    }
    return Dog;
}());



/***/ }),

/***/ "./src/app/services/dog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dog.service.ts ***!
  \*****************************************/
/*! exports provided: DogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogService", function() { return DogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DogService = /** @class */ (function () {
    function DogService(http) {
        this.http = http;
    }
    DogService.prototype.getdogs = function () {
        return this.http.get('../../assets/data/dogs.json');
    };
    DogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DogService);
    return DogService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dog.service */ "./src/app/services/dog.service.ts");




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ], providers: [_dog_service__WEBPACK_IMPORTED_MODULE_3__["DogService"]]
        })
    ], ServicesModule);
    return ServicesModule;
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

module.exports = __webpack_require__(/*! C:\Users\User\test0608\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map