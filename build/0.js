webpackJsonp([0],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_header_common_header__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_footer_common_footer__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
// Reference: http://blog.ionic.io/ionic-and-lazy-loading-pt-2/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__common_header_common_header__["a" /* CommonHeader */],
                __WEBPACK_IMPORTED_MODULE_2__common_footer_common_footer__["a" /* CommonFooter */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__common_header_common_header__["a" /* CommonHeader */],
                __WEBPACK_IMPORTED_MODULE_2__common_footer_common_footer__["a" /* CommonFooter */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Common header across pages
 *
 * Usage:
 *	<common-header [title]="'PAGE.HOME' | translate" [enable-menu]="true" [enable-back]="true"></common-header>
 */
var CommonHeader = (function () {
    function CommonHeader(el) {
        this.el = el;
        this.enable_menu = true;
        this.enable_back = false;
    }
    // To remove unnecessary <common-header></common-header> tag
    // Reference: http://stackoverflow.com/questions/34280475/remove-the-host-html-element-selectors-created-by-angular-component
    CommonHeader.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CommonHeader.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('logo-url'),
        __metadata("design:type", String)
    ], CommonHeader.prototype, "logo_url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('enable-menu'),
        __metadata("design:type", Boolean)
    ], CommonHeader.prototype, "enable_menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('enable-back'),
        __metadata("design:type", Boolean)
    ], CommonHeader.prototype, "enable_back", void 0);
    CommonHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'common-header',template:/*ion-inline-start:"D:\Work\Salf\HKIaido\iaido-app\src\components\common-header\common-header.html"*/'<ion-header class="my-header">\n\n  <ion-navbar>\n    <ion-title class="logo" *ngIf="logo_url">\n      <img [src]="logo_url" />\n    </ion-title>\n\n    <ion-title *ngIf="title">{{title}}</ion-title>\n\n    <!-- Menu button -->\n    <button *ngIf="enable_menu" ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n    <!-- Back button -->\n    <ion-buttons *ngIf="enable_back" left>\n      <button ion-button navPop>\n				<ion-icon name="ios-arrow-back-outline"></ion-icon>\n			</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"D:\Work\Salf\HKIaido\iaido-app\src\components\common-header\common-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CommonHeader);
    return CommonHeader;
}());

//# sourceMappingURL=common-header.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Common footer across pages
 *
 * Usage:
 *	<common-footer [title]="'My Footer'"></common-footer>
 */
var CommonFooter = (function () {
    function CommonFooter(el) {
        this.el = el;
    }
    // To remove unnecessary <common-footer></common-footer> tag
    // Reference: http://stackoverflow.com/questions/34280475/remove-the-host-html-element-selectors-created-by-angular-component
    CommonFooter.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CommonFooter.prototype, "title", void 0);
    CommonFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'common-footer',template:/*ion-inline-start:"D:\Work\Salf\HKIaido\iaido-app\src\components\common-footer\common-footer.html"*/'<ion-footer class="my-footer">\n  <ion-toolbar>\n    <ion-title *ngIf="title">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Work\Salf\HKIaido\iaido-app\src\components\common-footer\common-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CommonFooter);
    return CommonFooter;
}());

//# sourceMappingURL=common-footer.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_base_page__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_providers_utils__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(platform, view, nav, utils) {
        var _this = _super.call(this, platform, view, nav, utils) || this;
        _this.platform = platform;
        _this.view = view;
        _this.nav = nav;
        _this.utils = utils;
        _this.name = 'HomePage';
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].DEBUG_VERBOSE && console.log('HomePage constructor');
        return _this;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\Salf\HKIaido\iaido-app\src\pages\home\home.html"*/'<common-header [title]="\'PAGE.HOME\' | translate"></common-header>\n\n<ion-content padding>\n	<h2>Welcome to JuicyLauncher!</h2>\n</ion-content>'/*ion-inline-end:"D:\Work\Salf\HKIaido\iaido-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__core_providers_utils__["a" /* Utils */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__core_base_page__["a" /* BasePage */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(45);

var BasePage = (function () {
    function BasePage(platform, view, nav, utils) {
        this.platform = platform;
        this.view = view;
        this.nav = nav;
        this.utils = utils;
        this.language = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEFAULT_LANGUAGE;
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_VERBOSE && console.log('BasePage constructor');
    }
    // Back to previous page, or to root page
    BasePage.prototype.goBack = function (toRoot, opts) {
        if (toRoot === void 0) { toRoot = false; }
        if (opts === void 0) { opts = {}; }
        (toRoot) ? this.nav.popToRoot(opts) : this.nav.pop(opts);
    };
    // Nav events: http://ionicframework.com/docs/v2/api/navigation/NavController/
    BasePage.prototype.ionViewDidLoad = function () {
        this.content = this.view.getContent();
    };
    BasePage.prototype.ionViewWillEnter = function () {
        this.language = this.utils.currentLang();
    };
    BasePage.prototype.ionViewDidEnter = function () {
        // Google Analytics track view
        if (this.name) {
            this.utils.trackView(this.name);
        }
    };
    BasePage.prototype.ionViewWillLeave = function () {
    };
    BasePage.prototype.ionViewDidLeave = function () {
    };
    BasePage.prototype.ionViewWillUnload = function () {
    };
    return BasePage;
}());

//# sourceMappingURL=base-page.js.map

/***/ })

});
//# sourceMappingURL=0.js.map