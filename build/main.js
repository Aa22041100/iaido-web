webpackJsonp([1],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		430,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);
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
 * Class with utility functions
 */
var Utils = (function () {
    function Utils(platform, 
        // http://ionicframework.com/docs/v2/api/components/action-sheet/ActionSheetController/
        actionSheetCtrl, 
        // http://ionicframework.com/docs/v2/api/components/alert/AlertController/
        alertCtrl, 
        // http://ionicframework.com/docs/v2/api/components/loading/LoadingController/
        loadingCtrl, 
        // http://ionicframework.com/docs/v2/api/components/modal/ModalController/
        modalCtrl, 
        // http://ionicframework.com/docs/v2/api/components/popover/PopoverController/
        popoverCtrl, 
        // http://ionicframework.com/docs/v2/api/components/toast/ToastController/
        toastCtrl, 
        // https://github.com/driftyco/ionic-storage
        storage, 
        // Ionic Native
        appVersion, network, onesignal, ga, statusbar, themeableBrowser, 
        // 3-party providers
        // https://github.com/ngx-translate/core
        translate) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.appVersion = appVersion;
        this.network = network;
        this.onesignal = onesignal;
        this.ga = ga;
        this.statusbar = statusbar;
        this.themeableBrowser = themeableBrowser;
        this.translate = translate;
    }
    // Create ActionSheet object (without presenting to view)	
    Utils.prototype.createActionSheet = function (opts) {
        return this.actionSheetCtrl.create(opts);
    };
    // Display ActionSheet
    Utils.prototype.showActionSheet = function (opts) {
        var actionsheet = this.createActionSheet(opts);
        return actionsheet.present();
    };
    // Create Alert object (without presenting to view)	
    Utils.prototype.createAlert = function (opts) {
        return this.alertCtrl.create(opts);
    };
    // Display Basic Alert
    Utils.prototype.showAlert = function (title, subtitle, buttons) {
        if (subtitle === void 0) { subtitle = ''; }
        if (buttons === void 0) { buttons = ['OK']; }
        var alert = this.createAlert({ title: title, subTitle: subtitle, buttons: buttons });
        return alert.present();
    };
    // Display Confirmation Alert
    Utils.prototype.showConfirm = function (title, msg, confirm_handler, cancel_handler) {
        if (msg === void 0) { msg = ''; }
        if (cancel_handler === void 0) { cancel_handler = null; }
        var options = {
            title: title,
            message: msg,
            buttons: [
                {
                    text: this.translate.instant('ACTION.CANCEL'),
                    handler: cancel_handler
                },
                {
                    text: this.translate.instant('ACTION.CONFIRM'),
                    handler: confirm_handler
                }
            ]
        };
        var alert = this.createAlert(options);
        return alert.present();
    };
    // Create Loading object (without presenting to view)
    Utils.prototype.createLoading = function (opts) {
        return this.loadingCtrl.create(opts);
    };
    // Display Loading component
    Utils.prototype.showLoading = function (content, duration) {
        if (duration === void 0) { duration = 3000; }
        var loading = this.createLoading({ content: content, duration: duration });
        return loading.present();
    };
    // Create Modal object (without presenting to view)
    Utils.prototype.createModal = function (component, data, opts) {
        return this.modalCtrl.create(component, data, opts);
    };
    // Display Modal page
    Utils.prototype.showModal = function (component, data, opts) {
        var modal = this.createModal(component, data, opts);
        return modal.present();
    };
    // Create Popover object (without presenting to view)
    Utils.prototype.createPopover = function (component, data, opts) {
        return this.popoverCtrl.create(component, data, opts);
    };
    // Display Popover page
    Utils.prototype.showPopover = function (component, data, opts) {
        var popover = this.createPopover(component, data, opts);
        return popover.present();
    };
    // Create Toast object (without presenting to view)
    Utils.prototype.createToast = function (opts) {
        return this.toastCtrl.create(opts);
    };
    // Display Basic Toast
    Utils.prototype.showToast = function (msg, duration) {
        if (duration === void 0) { duration = 3000; }
        var toast = this.createToast({ message: msg, duration: duration });
        return toast.present();
    };
    // Get current platform name     
    Utils.prototype.currentOS = function () {
        if (this.platform.is('android'))
            return 'android';
        else if (this.platform.is('ios'))
            return 'ios';
        else
            return '';
    };
    // Set local data
    Utils.prototype.setLocal = function (key, value) {
        __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_LOCAL_DATA && console.log('Local Set (key = ' + key + ')', value);
        return this.storage.set(key, value);
    };
    // Get local data
    Utils.prototype.getLocal = function (key, default_value) {
        if (default_value === void 0) { default_value = null; }
        return this.storage.get(key).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_LOCAL_DATA && console.log('Local Get (key = ' + key + ')', data);
            return (typeof data == 'undefined' || data == null) ? default_value : data;
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_LOCAL_DATA && console.log('Local Get (key = ' + key + ')', default_value);
            return default_value;
        });
    };
    // Remove local data by key
    Utils.prototype.removeLocal = function (key) {
        return this.storage.remove(key);
    };
    // Remove all local data
    Utils.prototype.clearLocal = function () {
        return this.storage.clear();
    };
    // Init language setup
    Utils.prototype.setupLang = function () {
        var _this = this;
        // get stored interface language
        return this.getLocal('UI_LANGUAGE').then(function (saved_lang) {
            // this language will be used as a fallback when a translation isn't found in the current language
            _this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEFAULT_LANGUAGE);
            if (saved_lang) {
                // use language saved to local
                __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_VERBOSE && console.log('Use saved language: ' + saved_lang);
                _this.translate.use(saved_lang);
            }
            else {
                // detect device language (get only first 2 characters, e.g. en-US > en)
                var lang = _this.translate.getBrowserCultureLang().split('-')[0];
                lang = /(zh|en)/gi.test(lang) ? lang : __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEFAULT_LANGUAGE;
                __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_VERBOSE && console.log('Detect user language: ' + lang);
                _this.translate.use(lang);
            }
        });
    };
    // Change language
    Utils.prototype.changeLang = function (value) {
        // change language only when the target value is within "available list"
        if (__WEBPACK_IMPORTED_MODULE_12_lodash___default.a.includes(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].AVAILABLE_LANGUAGES, value)) {
            this.setLocal('UI_LANGUAGE', value);
            this.translate.use(value);
        }
    };
    // Get current app language
    Utils.prototype.currentLang = function () {
        return this.translate.currentLang;
    };
    // Get localized string (async)
    Utils.prototype.getLang = function (key, params) {
        return this.translate.get(key, params).toPromise();
    };
    // Get localized string (sync)
    Utils.prototype.instantLang = function (key, params) {
        return this.translate.instant(key, params);
    };
    // Check whether supports cordova or not	
    Utils.prototype.isCordova = function () {
        return this.platform.is('cordova');
    };
    // Check whether the device is online	
    Utils.prototype.isOnline = function () {
        if (this.isCordova()) {
            // Network types: unknown, ethernet, wifi, 2g, 3g, 4g, cellular, none
            __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_VERBOSE && console.log('Network.type = ' + this.network.type);
            return (this.network.type != 'none');
        }
        else {
            return true;
        }
    };
    // Get version number
    Utils.prototype.currentVersion = function () {
        return this.isCordova() ? this.appVersion.getVersionNumber() : Promise.resolve(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].APP_VERSION);
    };
    // Setup Google Analytics	
    Utils.prototype.setupGoogleAnalytics = function () {
        if (this.platform.is('cordova') && __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_TRACKER_ID) {
            __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_ANALYTICS && console.log('Setting up Google Analytics');
            if (__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_DEBUG_MODE) {
                this.ga.debugMode();
            }
            this.ga.startTrackerWithId(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_TRACKER_ID);
            this.ga.enableUncaughtExceptionReporting(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_DEBUG_MODE);
        }
    };
    // Google Analytics - Set User ID	
    Utils.prototype.setGoogleAnalyticsUserId = function (id) {
        if (this.platform.is('cordova') && __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_TRACKER_ID) {
            this.ga.setUserId(id + '');
        }
    };
    // Google Analytics - Track View
    Utils.prototype.trackView = function (title, campaign_url) {
        __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_ANALYTICS && console.log('Track View: ' + title);
        if (this.platform.is('cordova') && __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_TRACKER_ID) {
            return this.ga.trackView(title, campaign_url);
        }
        else {
            return Promise.resolve();
        }
    };
    // Google Analytics - Track Event
    Utils.prototype.trackEvent = function (category, action, label, value) {
        if (this.platform.is('cordova') && __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].GA_TRACKER_ID) {
            return this.ga.trackEvent(category, action, label, value);
        }
        else {
            return Promise.resolve();
        }
    };
    // Statusbar
    Utils.prototype.setupStatusbar = function () {
        if (this.isCordova()) {
            this.statusbar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].STATUSBAR_COLOR);
        }
    };
    // Setup OneSignal
    // http://ionicframework.com/docs/v2/native/onesignal/
    Utils.prototype.setupOneSignal = function (end_init) {
        if (end_init === void 0) { end_init = true; }
        if (this.platform.is('cordova') && __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].ONESIGNAL_APP_ID) {
            __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].DEBUG_PUSH_NOTIFICATION && console.log('Setting up OneSignal');
            this.onesignal.startInit(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].ONESIGNAL_APP_ID, __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].ONESIGNAL_GOOGLE_PROJECT_NUMBER);
            /*
            this.onesignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
            this.onesignal.handleNotificationReceived().subscribe(() => {
                // do something when notification is received
            });
            this.onesignal.handleNotificationOpened().subscribe(() => {
                // do something when a notification is opened
            });
            */
            if (end_init)
                this.onesignal.endInit();
            return this.onesignal;
        }
        else {
            return null;
        }
    };
    // Themeable In-App Browser
    // http://ionicframework.com/docs/v2/native/themeablebrowser/
    Utils.prototype.showBrowser = function (url, target, options) {
        if (target === void 0) { target = '_blank'; }
        if (options === void 0) { options = null; }
        if (options === null) {
            // use default options from config
            options = {
                statusbar: {
                    color: __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].BROWSER_STATUSBAR_COLOR
                },
                toolbar: {
                    height: 44,
                    color: __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].BROWSER_TOOBAR_COLOR
                },
                title: {
                    color: __WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].BROWSER_TITLE_COLOR,
                    showPageTitle: true
                },
                closeButton: {
                    wwwImage: 'assets/icon/cross.png',
                    wwwImagePressed: 'assets/icon/cross.png',
                    wwwImageDensity: 2,
                    align: 'left'
                },
                backButton: {
                    wwwImage: 'assets/icon/left_active.png',
                    wwwImagePressed: 'assets/icon/left_inactive.png',
                    wwwImageDensity: 2,
                    align: 'right'
                },
                forwardButton: {
                    wwwImage: 'assets/icon/right_active.png',
                    wwwImagePressed: 'assets/icon/right_active.png',
                    wwwImageDensity: 2,
                    align: 'right'
                },
                backButtonCanClose: true
            };
        }
        return this.themeableBrowser.create(url, target, options);
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export declarations */
/* unused harmony export entryComponents */
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_themeable_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_components_new_version_new_version__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_pipes_escape_html__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_components_inapp_href_inapp_href__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Ionic / Angular / 3rd-party dependencies








// Ionic Native







// Core dependencies






/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
var pages = [
    __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
];
var components = [
    __WEBPACK_IMPORTED_MODULE_16__core_components_new_version_new_version__["a" /* NewVersionPage */]
];
var directives = [
    __WEBPACK_IMPORTED_MODULE_20__core_components_inapp_href_inapp_href__["a" /* InappHref */]
];
var pipes = [
    __WEBPACK_IMPORTED_MODULE_19__core_pipes_escape_html__["a" /* EscapeHtml */]
];
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function declarations() {
    return [pages].concat(components, directives, pipes);
}
function entryComponents() {
    return [pages].concat(components);
}
function providers() {
    return [
        // Ionic Native
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__["a" /* OneSignal */],
        // Custom
        __WEBPACK_IMPORTED_MODULE_18__providers__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_17__core_providers_utils__["a" /* Utils */],
        // Here we tell the Angular ErrorHandling class
        // that it should be using the IonicErrorHandler class for any errors
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] }
    ];
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: declarations(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                    prodMode: false,
                    tabsPlacement: 'bottom'
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: entryComponents(),
            providers: providers()
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(403);
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




var Api = (function (_super) {
    __extends(Api, _super);
    function Api(platform, utils) {
        var _this = _super.call(this, platform, utils) || this;
        // override API URL prefix and anonymous API key
        //protected api_prefix: string = 'http://localhost/juicylauncher2_web/api';
        _this.api_prefix = 'http://127.0.0.1/iaido-cms/api';
        return _this;
    }
    /** Set API header jwt token */
    Api.prototype.setJwtHeader = function (jwtToken) {
        this.headers.append('Authorization', jwtToken);
    };
    /** API: Post init to activate this device */
    Api.prototype.postInit = function (postParam) {
        return this.post('/init', postParam);
    };
    /** API: Get member list from server database */
    Api.prototype.getMemebers = function () {
        return this.getRemote('/memeber');
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__core_providers_utils__["a" /* Utils */]])
    ], Api);
    return Api;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseService */]));

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);


/**
 * Base class for services, normally linked with remote API
 * @Injectable to be defined in child classes
 **/
var BaseService = (function () {
    function BaseService(platform, utils) {
        this.platform = platform;
        this.utils = utils;
        // member variables accessible from child classes
        this.api_prefix = '';
        this.headers = new Headers();
        this.local_key_prefix = 'API ';
        this.headers.append('Content-Type', 'application/json');
    }
    // Start calling list of promises, with loading spinner in between
    BaseService.prototype.startQueue = function (promises, loading_opts) {
        var loading = this.utils.createLoading(loading_opts);
        return loading.present().then(function () {
            return Promise.all(promises).then(function (data) {
                loading.dismiss();
                return Promise.resolve(data);
            }).catch(function (err) {
                loading.dismiss();
                return Promise.reject(err);
            });
        });
    };
    // Get versions later than current app version
    BaseService.prototype.getVersions = function () {
        var _this = this;
        return this.utils.currentVersion().then(function (curr_version) {
            var os = _this.utils.currentOS();
            var url = '/versions?from_code=' + curr_version + '&platform=' + os;
            return _this.get(url).then(function (data) {
                data.curr_version = curr_version;
                data.os = os;
                return Promise.resolve(data);
            });
        });
    };
    // Get App config
    BaseService.prototype.getAppConfig = function () {
        return this.get('/config');
    };
    // GET request (with local data checking logic)
    BaseService.prototype.get = function (url, local_expiry) {
        var _this = this;
        if (local_expiry === void 0) { local_expiry = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEFAULT_LOCAL_EXPIRY; }
        if (!this.utils.isOnline()) {
            // device no connection > get local data
            return this.getLocal(url, 0);
        }
        else if (local_expiry > 0) {
            // device has connection > check local data first
            return this.getLocal(url, local_expiry).then(function (data) {
                return (data) ? Promise.resolve(data) : _this.getRemote(url, local_expiry);
            });
        }
        else {
            // device has connection > skip local data checking, directly call API
            return this.getRemote(url, local_expiry);
        }
    };
    // GET request (from local data)
    BaseService.prototype.getLocal = function (url, local_expiry) {
        if (local_expiry === void 0) { local_expiry = 0; }
        var key = this.local_key_prefix + url;
        return this.utils.getLocal(key, null).then(function (value) {
            if (local_expiry == 0) {
                // ignore expiry > return data directly
                return (value.data) ? Promise.resolve(value.data) : Promise.resolve(value);
            }
            else if (value.last_update) {
                // check expiry > return null if data has expired
                var expiry = __WEBPACK_IMPORTED_MODULE_1_moment___default()(value.last_update).valueOf() + local_expiry * 1000;
                var now = __WEBPACK_IMPORTED_MODULE_1_moment___default()().valueOf();
                __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_VERBOSE && console.log('last_update', value.last_update);
                __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_VERBOSE && console.log('expiry', expiry);
                __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_VERBOSE && console.log('now', now);
                __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_VERBOSE && console.log('expired?', (expiry < now));
                return (expiry < now) ? Promise.resolve(null) : Promise.resolve(value.data);
            }
            else {
                return Promise.resolve(null);
            }
        }).catch(function (err) {
            return Promise.resolve(null);
        });
    };
    // GET request (from remote API)
    BaseService.prototype.getRemote = function (url, local_expiry) {
        if (local_expiry === void 0) { local_expiry = 0; }
        var req = new Request(this.api_prefix + url, {
            method: 'GET',
            headers: this.headers,
            mode: 'cors',
            cache: 'default'
        });
        return this.startFetch(req, local_expiry);
    };
    // POST request
    BaseService.prototype.post = function (url, body) {
        if (body === void 0) { body = {}; }
        var req = new Request(this.api_prefix + url, {
            method: 'POST',
            headers: this.headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        });
        return this.startFetch(req);
    };
    // PUT request
    BaseService.prototype.put = function (url, body) {
        if (body === void 0) { body = {}; }
        var req = new Request(this.api_prefix + url, {
            method: 'PUT',
            headers: this.headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        });
        return this.startFetch(req);
    };
    // PATCH request
    BaseService.prototype.patch = function (url, body) {
        if (body === void 0) { body = {}; }
        var req = new Request(this.api_prefix + url, {
            method: 'PATCH',
            headers: this.headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        });
        return this.startFetch(req);
    };
    // DELETE request
    BaseService.prototype.delete = function (url) {
        var req = new Request(this.api_prefix + url, {
            method: 'DELETE',
            headers: this.headers,
            mode: 'cors',
            cache: 'default'
        });
        return this.startFetch(req);
    };
    // Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/
    BaseService.prototype.startFetch = function (req, local_expiry) {
        var _this = this;
        if (local_expiry === void 0) { local_expiry = 0; }
        var short_url = req.url.replace(this.api_prefix, '');
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_API_REQUEST && console.log('API Request: [' + req.method + '] ' + short_url);
        return fetch(req)
            .then(function (res) {
            return _this.handleFetchResponse(res, req.method, short_url, local_expiry);
        })
            .catch(function (err) {
            return _this.handleFetchError(err, req.method, short_url);
        });
    };
    // Fetch API Response
    BaseService.prototype.handleFetchResponse = function (res, method, url, local_expiry) {
        var _this = this;
        if (local_expiry === void 0) { local_expiry = 0; }
        var key = this.local_key_prefix + url;
        if (res.ok) {
            return res.json().then(function (data) {
                // API error
                if (data['error']) {
                    var err_1 = data['error'];
                    __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_API_REQUEST && console.error('API Error: [' + method + '] ' + url, err_1);
                    var localized_msg = _this.utils.instantLang('ERROR.' + err_1.toUpperCase());
                    var toast_msg = _this.utils.instantLang('MSG.ERROR') + ': ' + localized_msg;
                    _this.utils.showToast(toast_msg, 3000);
                    return Promise.reject(localized_msg);
                }
                // API Response
                __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_API_REQUEST && console.log('API Response: [' + method + '] ' + url, data);
                if (method == 'GET' && local_expiry > 0) {
                    // save to local data for offline use
                    return _this.utils.setLocal(key, { data: data, last_update: __WEBPACK_IMPORTED_MODULE_1_moment___default()().valueOf() }).then(function (res) {
                        return data;
                    });
                }
                else {
                    return data;
                }
            });
        }
        var err = new TypeError('Error ' + res.status + ': ' + res.statusText);
        return this.handleFetchError(err, method, url);
    };
    // Fetch API Error
    BaseService.prototype.handleFetchError = function (err, method, url) {
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_API_REQUEST && console.error('API Fetch API Error: [' + method + '] ' + url);
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* Config */].DEBUG_API_REQUEST && console.error(err);
        // TODO: localize error message (e.g. err.name = TypeError)
        var toast_msg = this.utils.instantLang('MSG.ERROR') + ': ' + err.message;
        this.utils.showToast(toast_msg, 3000);
        return Promise.reject(toast_msg);
    };
    return BaseService;
}());

//# sourceMappingURL=base-service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 175,
	"./af.js": 175,
	"./ar": 176,
	"./ar-dz": 177,
	"./ar-dz.js": 177,
	"./ar-kw": 178,
	"./ar-kw.js": 178,
	"./ar-ly": 179,
	"./ar-ly.js": 179,
	"./ar-ma": 180,
	"./ar-ma.js": 180,
	"./ar-sa": 181,
	"./ar-sa.js": 181,
	"./ar-tn": 182,
	"./ar-tn.js": 182,
	"./ar.js": 176,
	"./az": 183,
	"./az.js": 183,
	"./be": 184,
	"./be.js": 184,
	"./bg": 185,
	"./bg.js": 185,
	"./bm": 186,
	"./bm.js": 186,
	"./bn": 187,
	"./bn.js": 187,
	"./bo": 188,
	"./bo.js": 188,
	"./br": 189,
	"./br.js": 189,
	"./bs": 190,
	"./bs.js": 190,
	"./ca": 191,
	"./ca.js": 191,
	"./cs": 192,
	"./cs.js": 192,
	"./cv": 193,
	"./cv.js": 193,
	"./cy": 194,
	"./cy.js": 194,
	"./da": 195,
	"./da.js": 195,
	"./de": 196,
	"./de-at": 197,
	"./de-at.js": 197,
	"./de-ch": 198,
	"./de-ch.js": 198,
	"./de.js": 196,
	"./dv": 199,
	"./dv.js": 199,
	"./el": 200,
	"./el.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-nz": 205,
	"./en-nz.js": 205,
	"./eo": 206,
	"./eo.js": 206,
	"./es": 207,
	"./es-do": 208,
	"./es-do.js": 208,
	"./es-us": 209,
	"./es-us.js": 209,
	"./es.js": 207,
	"./et": 210,
	"./et.js": 210,
	"./eu": 211,
	"./eu.js": 211,
	"./fa": 212,
	"./fa.js": 212,
	"./fi": 213,
	"./fi.js": 213,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 215,
	"./fr-ca": 216,
	"./fr-ca.js": 216,
	"./fr-ch": 217,
	"./fr-ch.js": 217,
	"./fr.js": 215,
	"./fy": 218,
	"./fy.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-latn": 221,
	"./gom-latn.js": 221,
	"./gu": 222,
	"./gu.js": 222,
	"./he": 223,
	"./he.js": 223,
	"./hi": 224,
	"./hi.js": 224,
	"./hr": 225,
	"./hr.js": 225,
	"./hu": 226,
	"./hu.js": 226,
	"./hy-am": 227,
	"./hy-am.js": 227,
	"./id": 228,
	"./id.js": 228,
	"./is": 229,
	"./is.js": 229,
	"./it": 230,
	"./it.js": 230,
	"./ja": 231,
	"./ja.js": 231,
	"./jv": 232,
	"./jv.js": 232,
	"./ka": 233,
	"./ka.js": 233,
	"./kk": 234,
	"./kk.js": 234,
	"./km": 235,
	"./km.js": 235,
	"./kn": 236,
	"./kn.js": 236,
	"./ko": 237,
	"./ko.js": 237,
	"./ky": 238,
	"./ky.js": 238,
	"./lb": 239,
	"./lb.js": 239,
	"./lo": 240,
	"./lo.js": 240,
	"./lt": 241,
	"./lt.js": 241,
	"./lv": 242,
	"./lv.js": 242,
	"./me": 243,
	"./me.js": 243,
	"./mi": 244,
	"./mi.js": 244,
	"./mk": 245,
	"./mk.js": 245,
	"./ml": 246,
	"./ml.js": 246,
	"./mr": 247,
	"./mr.js": 247,
	"./ms": 248,
	"./ms-my": 249,
	"./ms-my.js": 249,
	"./ms.js": 248,
	"./mt": 250,
	"./mt.js": 250,
	"./my": 251,
	"./my.js": 251,
	"./nb": 252,
	"./nb.js": 252,
	"./ne": 253,
	"./ne.js": 253,
	"./nl": 254,
	"./nl-be": 255,
	"./nl-be.js": 255,
	"./nl.js": 254,
	"./nn": 256,
	"./nn.js": 256,
	"./pa-in": 257,
	"./pa-in.js": 257,
	"./pl": 258,
	"./pl.js": 258,
	"./pt": 259,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 259,
	"./ro": 261,
	"./ro.js": 261,
	"./ru": 262,
	"./ru.js": 262,
	"./sd": 263,
	"./sd.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 269,
	"./sr-cyrl": 270,
	"./sr-cyrl.js": 270,
	"./sr.js": 269,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./tet": 276,
	"./tet.js": 276,
	"./th": 277,
	"./th.js": 277,
	"./tl-ph": 278,
	"./tl-ph.js": 278,
	"./tlh": 279,
	"./tlh.js": 279,
	"./tr": 280,
	"./tr.js": 280,
	"./tzl": 281,
	"./tzl.js": 281,
	"./tzm": 282,
	"./tzm-latn": 283,
	"./tzm-latn.js": 283,
	"./tzm.js": 282,
	"./uk": 284,
	"./uk.js": 284,
	"./ur": 285,
	"./ur.js": 285,
	"./uz": 286,
	"./uz-latn": 287,
	"./uz-latn.js": 287,
	"./uz.js": 286,
	"./vi": 288,
	"./vi.js": 288,
	"./x-pseudo": 289,
	"./x-pseudo.js": 289,
	"./yo": 290,
	"./yo.js": 290,
	"./zh-cn": 291,
	"./zh-cn.js": 291,
	"./zh-hk": 292,
	"./zh-hk.js": 292,
	"./zh-tw": 293,
	"./zh-tw.js": 293
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 404;

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_base_app__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(58);
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






var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(platform, api, utils) {
        var _this = _super.call(this, platform, api, utils) || this;
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].DEBUG_VERBOSE && console.log('MyApp constructor');
        return _this;
    }
    // override parent
    MyApp.prototype.onAppLoaded = function () {
        var _this = this;
        // set rootpage only when the app is ready
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].DEBUG_VERBOSE && console.log('MyApp onAppLoaded');
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].START_PAGE;
        // check local jwt token
        this.utils.getLocal(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].SAVED_JWT_TOKEN_KEY, 'undefined').then(function (token) {
            if (token !== 'undefined') {
                console.log("found saved jwt token, going to set to the header: " + token);
                _this.api.setJwtHeader(token);
            }
            else {
                console.log("can not find saved jwt token, going to call init api");
                _this.initApi();
            }
        });
    };
    MyApp.prototype.initApi = function () {
        var _this = this;
        this.utils.currentVersion().then(function (curVersion) {
            var initParam = {
                platform: 'android',
                device_id: 'abcdefg',
                version: curVersion,
            };
            _this.api.postInit(initParam).then(function (resp) {
                if (resp.token) {
                    _this.utils.setLocal(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].SAVED_JWT_TOKEN_KEY, resp.token);
                    _this.api.setJwtHeader(resp.token);
                }
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\Salf\HKIaido\iaido-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\Work\Salf\HKIaido\iaido-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__core_providers_utils__["a" /* Utils */]])
    ], MyApp);
    return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2__core_base_app__["a" /* BaseApp */]));

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(45);
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
 * Base class for application, with common workflow when upon app start
 * @Component to be defined in child classes
 **/



var BaseApp = (function () {
    function BaseApp(platform, api, utils) {
        var _this = this;
        this.platform = platform;
        this.api = api;
        this.utils = utils;
        __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].DEBUG_VERBOSE && console.log('BaseApp constructor');
        // override Android hardware back button
        platform.registerBackButtonAction(function () {
            // check current page name
            var page = _this.nav.root;
            if (!_this.nav.canGoBack() && page.name == __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].ROOT_PAGE_NAME) {
                // show Exit App confirmation box
                _this.utils.showConfirm('', _this.utils.instantLang('MSG.CONFIRM_EXIT_APP'), function () {
                    _this.platform.exitApp();
                });
            }
            else {
                // normal go back navigation
                _this.nav.pop();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.utils.setupStatusbar();
            // JuicyLauncher setup
            utils.setupLang();
            utils.setupGoogleAnalytics();
            // utils.setupOneSignal();
            // check force or soft update
            // this.checkVersion();
            _this.onAppLoaded();
        });
    }
    // Version checking	
    BaseApp.prototype.checkVersion = function () {
        // this.api.getVersions().then(data => {
        // 	// Prepare modal or popover, based on whether need to force upgrade
        // 	if (data) {
        // 		if (data.force_upgrade) {
        // 			this.utils.showModal(NewVersionPage, { version_response: data });
        // 		} else {
        // 			// check whether user has dismissed version upgrade notice before
        // 			let latest_version_code: string = data.latest_version;
        // 			let key: string = 'VERSION_CHECK_FROM_' + data.curr_version + '_TO_' + latest_version_code;
        // 			this.utils.getLocal(key, false).then(skipped => {
        // 				if (!skipped) {
        // 					this.utils.showModal(NewVersionPage, { version_response: data });
        // 				}
        // 			});
        // 		}
        // 	}
        var _this = this;
        // 	// indicate the app is successfully loaded
        // 	this.onAppLoaded();
        // }).catch(err => {
        // 	// version cannot be found from server, but still proceed to init the app
        // 	this.onAppLoaded();
        // });
        this.utils.currentVersion().then(function (curVersion) {
            var appInitParam = {
                platform: 'android',
                device_id: 'abc',
                version: curVersion,
            };
            _this.api.postInit(appInitParam).then(function (resp) {
                if (!resp.err_code) {
                    if (resp.token) {
                        _this.utils.setLocal(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].SAVED_JWT_TOKEN_KEY, resp.token);
                        _this.api.setJwtHeader(resp.token);
                        _this.onAppLoaded();
                    }
                    else {
                        _this.utils.getLocal(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].SAVED_JWT_TOKEN_KEY, null).then(function (token) {
                            if (token) {
                                _this.api.setJwtHeader(token);
                                _this.onAppLoaded();
                            }
                            else {
                                _this.onAppLoaded();
                            }
                        });
                    }
                }
                else {
                    _this.onAppLoaded();
                }
            });
        });
    };
    // inherit this function from child class (e.g. MyApp)
    BaseApp.prototype.onAppLoaded = function () {
        __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].DEBUG_VERBOSE && console.log('BaseApp onAppLoaded');
    };
    // [For App with Tab / Sidemenu root only]
    BaseApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (this.nav && page) {
            this.nav.setRoot(page);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], BaseApp.prototype, "nav", void 0);
    return BaseApp;
}());

//# sourceMappingURL=base-app.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewVersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
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
 * Modal page for display latest versions returned from API
 */
var NewVersionPage = (function () {
    function NewVersionPage(platform, view, params, api, utils) {
        var _this = this;
        this.platform = platform;
        this.view = view;
        this.params = params;
        this.api = api;
        this.utils = utils;
        this.version_response = null;
        this.force_upgrade = false;
        this.show_release_notes = false;
        this.show_release_notes_icon = 'arrow-dropdown-circle';
        console.log('NewVersionPage > params', this.params.data);
        this.version_response = this.params.data.version_response;
        this.force_upgrade = (this.version_response.force_upgrade) ? !!this.version_response.force_upgrade : false;
        // disable hardware back button when force upgrade
        console.log('NewVersionPage > force_upgrade = ' + this.force_upgrade);
        if (this.force_upgrade) {
            this.platform.registerBackButtonAction(function () { });
        }
        // get App download URL from API
        this.api.getAppConfig().then(function (data) {
            if (_this.utils.currentOS() == 'ios') {
                _this.download_url = data['ios_url'];
            }
            else if (_this.utils.currentOS() == 'android') {
                _this.download_url = data['android_url'];
            }
        });
    }
    // Toggle release notes
    NewVersionPage.prototype.onClickReleaseNotes = function () {
        this.show_release_notes = !this.show_release_notes;
        this.show_release_notes_icon = this.show_release_notes ? 'arrow-dropup-circle' : 'arrow-dropdown-circle';
    };
    // Dismiss this modal / popup
    NewVersionPage.prototype.onClickSkipBtn = function (data) {
        var _this = this;
        if (!this.force_upgrade) {
            var key_1 = 'VERSION_CHECK_FROM_' + this.version_response.curr_version + '_TO_' + this.version_response.latest_version;
            this.utils.setLocal(key_1, true).then(function () {
                console.log('Finish setting to key: ' + key_1);
                _this.view.dismiss(data);
            });
        }
    };
    NewVersionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-version',template:/*ion-inline-start:"D:\Work\Salf\HKIaido\iaido-app\src\core\components\new-version\new-version.html"*/'<ion-content padding>\n\n	<div class="container">\n\n		<!-- logo -->\n		<!--<img src="assets/img/logo.png" />-->\n\n		<!-- description -->\n		<h5>New Version Available</h5>\n		<p>There is a newer version available for download.<br/>Please update the app to continue.</p>\n		<p>Latest Version: <strong>{{version_response.latest_version}}</strong></p>\n		<p>Current Version: <strong>{{version_response.curr_version}}</strong></p>\n		\n		<!-- release notes -->\n		<ion-list *ngIf="version_response.new_versions">\n			<ion-list-header (click)="onClickReleaseNotes()">\n				Release Notes\n				<ion-icon item-right name="{{ show_release_notes_icon }}"></ion-icon>\n			</ion-list-header>\n			<div *ngIf="show_release_notes">\n				<ion-item *ngFor="let version of version_response.new_versions">\n					<h2>Version: {{version.code}} ({{version.publish_date}})</h2>\n					<br/>\n					<div [innerHTML]="version.release_notes"></div>\n				</ion-item>\n			</div>\n		</ion-list>\n\n		<!-- force upgrade -->\n		<div *ngIf="force_upgrade">\n			<a class="download-btn" ion-button href="{{ download_url }}" target="_blank" round>Update</a>\n		</div>\n		\n		<!-- soft upgrade -->\n		<div *ngIf="!force_upgrade">\n			<a class="download-btn" ion-button *ngIf="download_url" href="{{ download_url }}" target="_blank" round>Update</a>\n			<br/>\n			<button ion-button class="skip-btn" (click)="onClickSkipBtn()" round color="light">Skip</button>\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"D:\Work\Salf\HKIaido\iaido-app\src\core\components\new-version\new-version.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utils__["a" /* Utils */]])
    ], NewVersionPage);
    return NewVersionPage;
}());

//# sourceMappingURL=new-version.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
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
 * Escape HTML content
 *
 * Usage:
 *	<div [innerHTML]="content | escape-html"></div>
 */
var EscapeHtml = (function () {
    function EscapeHtml(sce) {
        this.sce = sce;
    }
    EscapeHtml.prototype.transform = function (data) {
        return this.sce.bypassSecurityTrustHtml(data);
    };
    EscapeHtml = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'escape-html'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EscapeHtml);
    return EscapeHtml;
}());

//# sourceMappingURL=escape-html.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InappHref; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils__ = __webpack_require__(34);
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
 * Enable hyperlinks to open from in-app browser
 *
 * Usage:
 *	<div inapp-href [innerHTML]="content | escape-html"></div>
 */
var InappHref = (function () {
    function InappHref(el, utils) {
        this.utils = utils;
        this.el = el.nativeElement;
    }
    InappHref.prototype.ngAfterViewInit = function () {
        var self = this;
        this.el.addEventListener('click', function (event) {
            var targetNode = event.target;
            var element = event.currentTarget;
            while (targetNode && targetNode !== element) {
                if (targetNode['tagName'] === 'A') {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    var href = targetNode['href'];
                    self.utils.showBrowser(href, '_blank');
                    return false;
                }
                targetNode = targetNode['parentNode'];
            }
            return true;
        });
    };
    InappHref = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[inapp-href]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__providers_utils__["a" /* Utils */]])
    ], InappHref);
    return InappHref;
}());

//# sourceMappingURL=inapp-href.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/**
 * Global constants and configuration values
 */
var Config = (function () {
    function Config() {
    }
    // For development purpose
    Config.JUICYLAUNCHER_VERSION = 'build 20171117';
    Config.DEBUG_MODE = true;
    Config.APP_VERSION = '0.0.1'; // only for non-cordova environment
    // Native config
    Config.STATUSBAR_COLOR = '#000';
    // Localization
    Config.DEFAULT_LANGUAGE = 'zh';
    Config.AVAILABLE_LANGUAGES = ['zh', 'en'];
    // First page to enter when the App is started
    Config.START_PAGE = 'HomePage';
    // For checking root page which shows Exit App confirmation box
    Config.ROOT_PAGE_NAME = 'HomePage';
    // Local data
    Config.DEFAULT_LOCAL_EXPIRY = 300; // unit: seconds
    // Google Analytics (set GA_TRACKER_ID as empty to disable)
    Config.GA_TRACKER_ID = ''; // UA-000000-01
    Config.GA_DEBUG_MODE = true;
    // Push Notifications (set ONESIGNAL_APP_ID as empty to disable)
    Config.ONESIGNAL_APP_ID = 'd284b536-47d9-11e5-a647-478fe54bb917';
    Config.ONESIGNAL_GOOGLE_PROJECT_NUMBER = '606380984953';
    // In-App Browser
    Config.BROWSER_STATUSBAR_COLOR = '#ffffffff';
    Config.BROWSER_TOOBAR_COLOR = '#f0f0f0ff';
    Config.BROWSER_TITLE_COLOR = '#003264ff';
    // Turn on/off debug messages
    Config.DEBUG_VERBOSE = false; // Messages for non-critical points
    Config.DEBUG_API_REQUEST = true; // Messages before API requests
    Config.DEBUG_API_REPONSE = true; // Messages upon receiving API responses
    Config.DEBUG_LOCAL_DATA = false; // Messages related to local data & storage
    Config.DEBUG_ANALYTICS = false; // Messages related to Analytics platform (e.g. Google Analytics)
    Config.DEBUG_PUSH_NOTIFICATION = false; // Messages related to push notifications (e.g. OneSignal) 
    // Local Storage Key
    Config.SAVED_JWT_TOKEN_KEY = 'LOCAL_JWT_TOKEN';
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(402);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map