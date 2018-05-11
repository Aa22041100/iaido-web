webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(425);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewVersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(106);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(389);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__(402);
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export declarations */
/* unused harmony export entryComponents */
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_themeable_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_components_new_version_new_version__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers__ = __webpack_require__(106);
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_base_app__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(106);
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
        // set rootpage only when the app is ready
        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].DEBUG_VERBOSE && console.log('MyApp onAppLoaded');
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].START_PAGE;
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

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_new_version_new_version__ = __webpack_require__(214);
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
            utils.setupOneSignal();
            // check force or soft update
            _this.checkVersion();
        });
    }
    // Version checking	
    BaseApp.prototype.checkVersion = function () {
        var _this = this;
        this.api.getVersions().then(function (data) {
            // Prepare modal or popover, based on whether need to force upgrade
            if (data) {
                if (data.force_upgrade) {
                    _this.utils.showModal(__WEBPACK_IMPORTED_MODULE_3__components_new_version_new_version__["a" /* NewVersionPage */], { version_response: data });
                }
                else {
                    // check whether user has dismissed version upgrade notice before
                    var latest_version_code = data.latest_version;
                    var key = 'VERSION_CHECK_FROM_' + data.curr_version + '_TO_' + latest_version_code;
                    _this.utils.getLocal(key, false).then(function (skipped) {
                        if (!skipped) {
                            _this.utils.showModal(__WEBPACK_IMPORTED_MODULE_3__components_new_version_new_version__["a" /* NewVersionPage */], { version_response: data });
                        }
                    });
                }
            }
            // indicate the app is successfully loaded
            _this.onAppLoaded();
        }).catch(function (err) {
            // version cannot be found from server, but still proceed to init the app
            _this.onAppLoaded();
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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_providers_utils__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(426);
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
        _this.api_prefix = 'https://dev.juicyapphk.com/juicylauncher2_web/api';
        return _this;
    }
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__core_providers_utils__["a" /* Utils */]])
    ], Api);
    return Api;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseService */]));

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 426:
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

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
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
webpackContext.id = 427;

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
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map