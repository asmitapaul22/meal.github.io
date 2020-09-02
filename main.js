(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _socialfeed_socialfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socialfeed/socialfeed.component */ "./src/app/socialfeed/socialfeed.component.ts");
/* harmony import */ var _featuredfood_featuredfood_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featuredfood/featuredfood.component */ "./src/app/featuredfood/featuredfood.component.ts");
/* harmony import */ var _chefs_chefs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chefs/chefs.component */ "./src/app/chefs/chefs.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reservation/reservation.component */ "./src/app/reservation/reservation.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












class AppComponent {
    constructor() {
        this.title = 'project1';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-socialfeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-featuredfood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _socialfeed_socialfeed_component__WEBPACK_IMPORTED_MODULE_3__["SocialfeedComponent"], _featuredfood_featuredfood_component__WEBPACK_IMPORTED_MODULE_4__["FeaturedfoodComponent"], _chefs_chefs_component__WEBPACK_IMPORTED_MODULE_5__["ChefsComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_8__["ReservationComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _featuredfood_featuredfood_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./featuredfood/featuredfood.component */ "./src/app/featuredfood/featuredfood.component.ts");
/* harmony import */ var _socialfeed_socialfeed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socialfeed/socialfeed.component */ "./src/app/socialfeed/socialfeed.component.ts");
/* harmony import */ var _chefs_chefs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chefs/chefs.component */ "./src/app/chefs/chefs.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reservation/reservation.component */ "./src/app/reservation/reservation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _featuredfood_featuredfood_component__WEBPACK_IMPORTED_MODULE_5__["FeaturedfoodComponent"],
        _socialfeed_socialfeed_component__WEBPACK_IMPORTED_MODULE_6__["SocialfeedComponent"],
        _chefs_chefs_component__WEBPACK_IMPORTED_MODULE_7__["ChefsComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_10__["ReservationComponent"],
        _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _featuredfood_featuredfood_component__WEBPACK_IMPORTED_MODULE_5__["FeaturedfoodComponent"],
                    _socialfeed_socialfeed_component__WEBPACK_IMPORTED_MODULE_6__["SocialfeedComponent"],
                    _chefs_chefs_component__WEBPACK_IMPORTED_MODULE_7__["ChefsComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                    _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_10__["ReservationComponent"],
                    _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chefs/chefs.component.ts":
/*!******************************************!*\
  !*** ./src/app/chefs/chefs.component.ts ***!
  \******************************************/
/*! exports provided: ChefsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefsComponent", function() { return ChefsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChefsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChefsComponent.ɵfac = function ChefsComponent_Factory(t) { return new (t || ChefsComponent)(); };
ChefsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChefsComponent, selectors: [["app-chefs"]], decls: 24, vars: 0, consts: [["id", "Chef", 1, "chefs"], [1, "fluid-container"], [1, "row"], [1, "col-12", "heading"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "text-center", "text-light"], [1, "container"], [1, "row", "text-center"], [1, "col-md-6", "col-12"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "src", "..//..//assets/images/chef1.jpg", "alt", "chef pic"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear", "src", "../../assets/images/chef2.png", "alt", "chef pic"]], template: function ChefsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meet The Chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "John Mathews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MASTER CHEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta repellat fugiat quis rerum! Nulla porro dolore obcaecati aut velit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lisa Adams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MASTER CHEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta repellat fugiat quis rerum! Nulla porro dolore obcaecati aut velit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".chefs[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    height: 300px;\r\n    border-radius: 15px 50px;\r\n    margin-bottom: 20px;\r\n    \r\n \r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        \r\n        \r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n    text-decoration: underline;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n}\r\n\r\n@media only screen and (max-width: 1000px){\r\n    img[_ngcontent-%COMP%]{\r\n        width:250px;\r\n        height: 200px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 780px){\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem;\r\n        border-bottom: 1px solid #000;\r\n        margin-bottom: 10px;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 1.2rem;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n        width: 60%;\r\n        height: 200px;\r\n\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlZnMvY2hlZnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtRQUNmLHdGQUE0RztRQUM1RyxzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLFlBQVk7OztBQUdwQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQiw2QkFBNkI7UUFDN0IsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsYUFBYTs7SUFFakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NoZWZzL2NoZWZzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNoZWZze1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHJcbiBcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpLHJnYmEoMCwgMCwgMCwgMC44KSksIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkaW5nLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpe1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChefsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chefs',
                templateUrl: './chefs.component.html',
                styleUrls: ['./chefs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/enrollment.service.ts":
/*!***************************************!*\
  !*** ./src/app/enrollment.service.ts ***!
  \***************************************/
/*! exports provided: EnrollmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService", function() { return EnrollmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EnrollmentService {
    constructor(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/enroll';
    }
    enroll(user) {
        return this._http.post(this._url, user);
    }
}
EnrollmentService.ɵfac = function EnrollmentService_Factory(t) { return new (t || EnrollmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EnrollmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnrollmentService, factory: EnrollmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnrollmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/featuredfood/featuredfood.component.ts":
/*!********************************************************!*\
  !*** ./src/app/featuredfood/featuredfood.component.ts ***!
  \********************************************************/
/*! exports provided: FeaturedfoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedfoodComponent", function() { return FeaturedfoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class FeaturedfoodComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
}
FeaturedfoodComponent.ɵfac = function FeaturedfoodComponent_Factory(t) { return new (t || FeaturedfoodComponent)(); };
FeaturedfoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedfoodComponent, selectors: [["app-featuredfood"]], decls: 33, vars: 0, consts: [["id", "featuring", 1, "foodfeature", "fluid-container"], [1, "row"], [1, "col-md-12", "heading"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "feature-heading"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "feature-data"], [1, "container"], [1, "row", "grid-part"], [1, "col-md-4"], ["data-aos", "flip-down", "data-aos-duration", "1000", "data-aos-easing", "linear", "src", "../../assets/images/food1.png", "alt", "food1", 1, "d-block", "mx-auto"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "col-md-4", "text-center"], ["data-aos", "flip-down", "data-aos-duration", "1000", "data-aos-easing", "linear", "src", "../../assets/images/food2.jpg", "alt", "food2", 1, "d-block", "mx-auto"], [1, "col-md-4", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-left", 1, "col-md-4"], ["data-aos", "flip-down", "data-aos-duration", "1000", "data-aos-easing", "linear", "src", "../../assets/images/food3.jpg", "alt", "food3", 1, "d-block", "mx-auto"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"]], template: function FeaturedfoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Find your best food ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "welcome to website template for Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nemo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nemo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nemo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".foodfeature[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        \r\n        \r\n}\r\n\r\n.feature-heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.feature-data[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.grid-part[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    margin-bottom: 200px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 200px;\r\n    margin-bottom: 15px;\r\n    border-radius: 50px;\r\n}\r\n\r\n@media only screen and (max-width: 780px){\r\n  h2[_ngcontent-%COMP%]{\r\n      font-size: 1rem;\r\n  }\r\n  p[_ngcontent-%COMP%]{\r\n      font-size: 0.8rem;\r\n  }\r\n  img[_ngcontent-%COMP%]{\r\n      width: 70%;\r\n      \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWRmb29kL2ZlYXR1cmVkZm9vZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7UUFDWix3RkFBNEc7UUFDNUcsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixZQUFZOzs7QUFHcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNFO01BQ0ksZUFBZTtFQUNuQjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCO0VBQ0E7TUFDSSxVQUFVOztFQUVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlZGZvb2QvZmVhdHVyZWRmb29kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZGZlYXR1cmV7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkscmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRpbmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICBcclxufVxyXG4uZmVhdHVyZS1oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mZWF0dXJlLWRhdGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdyaWQtcGFydHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICBoMntcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBwe1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedfoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featuredfood',
                templateUrl: './featuredfood.component.html',
                styleUrls: ['./featuredfood.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.lat = 28.5355;
        this.long = 77.3910;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 43, vars: 0, consts: [["id", "contact", 1, "fluid-container"], [1, "container", "text-center"], [1, "row"], [1, "col-md-4", "col-12"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["type", "button", "data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["href", "http://www.instagram.com", "target", "\u201D_blank\u201D", 1, "text-light"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "src", "../../assets/images/Instagram-PNG-Image.png", "alt", "instagram"], ["href", "http://www.facebook.com", "target", "\u201D_blank\u201D", 1, "text-light"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "src", "../../assets/images/Facebook-Like-PNG-Pic.png", "alt", "facebook"], ["href", "http://www.twitter.com", "target", "\u201D_blank\u201D", 1, "text-light"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "src", "../../assets/images/Twitter-PNG-Transparent-Image.png", "alt", "twitter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium pariatur, ratione maiores odit porro nesciunt dolorem eum harum quia, iusto reprehenderit adipisci excepturi assumenda laboriosam aliquam. Maxime, debitis recusandae.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Breakfast Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Booking from 8:00am - 11:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lunch Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Booking from 12:00pm - 3:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dinner Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Booking from 8:00pm - 10:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact us:-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "0788-443525");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Follow Along");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fluid-container[_ngcontent-%COMP%]{\r\n    background-color:#333333 ;\r\n    padding-top: 40px;\r\n    padding-bottom: 100px;\r\n    overflow-x: hidden;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    background-color:#333333 ;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border-color: red;\r\n    color: red;\r\n    margin-bottom: 20px;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    background-color: red;\r\n    color: white;\r\n\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    margin-left: 10px;\r\n}\r\n@media only screen and (max-width:780px){\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem\r\n    }\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZsdWlkLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMzMzMzMyA7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzIDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCl7XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtXHJcbiAgICB9XHJcbiBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "collapse": a0, "navbar-collapse": true }; };
class HeaderComponent {
    constructor() {
        this.collapsed = true;
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 47, vars: 3, consts: [["id", "header"], [1, "fluid-container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 2, "padding", "10px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-light", "bg-warning", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 3, "ngClass"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link", "text-warning", "active"], [1, "sr-only"], ["href", "#about", 1, "nav-link", "text-warning"], ["href", "#featuring", 1, "nav-link", "text-warning"], ["href", "#Chef", 1, "nav-link", "text-warning"], ["href", "#menu", 1, "nav-link", "text-warning"], ["href", "#services", 1, "nav-link", "text-warning"], ["href", "#reserve", 1, "nav-link", "text-warning"], ["href", "#review", 1, "nav-link", "text-warning"], ["href", "#contact", 1, "nav-link", "text-warning"], [1, "jumbotron", "text-center"], [1, "intro"], ["href", "#"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "logo"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], [1, "color-change"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "type", "button", 1, "btn", "btn-outline-light", "reserve"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The Chefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "MEAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Reserve a Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.collapsed));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n\r\n}\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0, 0, 0, 0.7)), url('meal.jpg');\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: white;\r\n    \r\n}\r\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin: 30px 0;\r\n    font-size: 4rem;\r\n    \r\n}\r\n.intro[_ngcontent-%COMP%]{\r\n    padding-top: 250px;\r\n}\r\n.reserve[_ngcontent-%COMP%]{\r\n    border: 2px solid white;\r\n    \r\n    background-color: transparent;\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 15px 30px;\r\n    font-size: 1.4rem;\r\n\r\n\r\n}\r\n.reserve[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: red;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    color: white;\r\n    font-size: 2rem;\r\n    border-radius: 50%;\r\n    padding: 30px 35px;\r\n    border: 1px solid white;\r\n}\r\n.logo[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(250, 213, 7, 0.3);\r\n    color:white;\r\n}\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n.color-change[_ngcontent-%COMP%]{\r\n    animation: colorchangemeal 5s infinite;\r\n}\r\n@keyframes colorchangemeal{\r\n    0%{color:yellow;}\r\n    25%{color: orangered;}\r\n    50%{color: orange;}\r\n    75%{color:  red;}\r\n    100%{color: white;}\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin: 0 20px;\r\n    margin-top: 20px;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover{\r\n    color: white !important;\r\n    text-decoration: underline;\r\n    \r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n}\r\n@media only screen and (max-width:1000px){\r\n\r\n    .nav-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        margin: 0px 5px 0px 17px;\r\n        margin-top: 30px;\r\n        background-color: yellow;\r\n\r\n    }\r\n    \r\n    .nav-link[_ngcontent-%COMP%]:hover{\r\n        font-weight: bolder;\r\n        font-size: 1rem;\r\n    }\r\n    .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        \r\n        font-size: 3rem;\r\n        \r\n    }\r\n    .reserve[_ngcontent-%COMP%]{\r\n        border: 1px solid white;\r\n        \r\n        background-color: transparent;\r\n        color: white;\r\n        border-radius: 5px;\r\n        padding: 10px 20px;\r\n        font-size: 1.5rem;\r\n    \r\n    \r\n    }\r\n    .logo[_ngcontent-%COMP%]{\r\n        padding: 20px 25px;\r\n    }\r\n    \r\n}\r\n@media only screen and (max-width:420px){\r\n    .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem !important;\r\n        \r\n    }\r\n    .reserve[_ngcontent-%COMP%]{\r\n        font-size:1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBO0lBQ0kscUZBQTJHO0lBQzNHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCOztJQUV2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCOzs7QUFHckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLEdBQUcsWUFBWSxDQUFDO0lBQ2hCLElBQUksZ0JBQWdCLENBQUM7SUFDckIsSUFBSSxhQUFhLENBQUM7SUFDbEIsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxZQUFZLENBQUM7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjs7QUFFOUI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBOztJQUVJO1FBQ0ksd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQix3QkFBd0I7O0lBRTVCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixlQUFlOztJQUVuQjtJQUNBO1FBQ0ksdUJBQXVCOztRQUV2Qiw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUJBQWlCOzs7SUFHckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSw0QkFBNEI7O0lBRWhDO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFJSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRUciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjcpLHJnYmEoMCwgMCwgMCwgMC43KSksIHVybCgnLi4vLy4uLy9hc3NldHMvaW1hZ2VzL21lYWwuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcbi5qdW1ib3Ryb24gaDF7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIFxyXG59XHJcbi5pbnRyb3tcclxuICAgIHBhZGRpbmctdG9wOiAyNTBweDtcclxufVxyXG4ucmVzZXJ2ZXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cclxuXHJcbn1cclxuLnJlc2VydmU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5sb2dvOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIxMywgNywgMC4zKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jb2xvci1jaGFuZ2V7XHJcbiAgICBhbmltYXRpb246IGNvbG9yY2hhbmdlbWVhbCA1cyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGNvbG9yY2hhbmdlbWVhbHtcclxuICAgIDAle2NvbG9yOnllbGxvdzt9XHJcbiAgICAyNSV7Y29sb3I6IG9yYW5nZXJlZDt9XHJcbiAgICA1MCV7Y29sb3I6IG9yYW5nZTt9XHJcbiAgICA3NSV7Y29sb3I6ICByZWQ7fVxyXG4gICAgMTAwJXtjb2xvcjogd2hpdGU7fVxyXG59XHJcbi5uYXZiYXItbmF2IGxpe1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgXHJcbn1cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xyXG5cclxuICAgIC5uYXYtbGluayBhe1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDVweCAwcHggMTdweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtbGluazpob3ZlcntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5qdW1ib3Ryb24gaDF7XHJcbiAgICAgICAgLyogbWFyZ2luOiAzMHB4IDA7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnJlc2VydmV7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyMHB4KXtcclxuICAgIC5qdW1ib3Ryb24gaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5yZXNlcnZle1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tbmF2IHVse1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5uYXYgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxubmF2IGF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxubmF2IGEuYWN0aXZlLG5hdiBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLyogLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC41KSxyZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoJy4uLy8uLi8vYXNzZXRzL2ltYWdlcy9tZWFsLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICBcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgXHJcbn0gIFxyXG5uYXYgbGkgYXtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5uYXYgbGkgYTpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5qdW1ib3Ryb24gaDF7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIFxyXG59XHJcbi5pbnRyb3tcclxuICAgIHBhZGRpbmctdG9wOiAyNTBweDtcclxufVxyXG4ucmVzZXJ2ZXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cclxuXHJcbn1cclxuLnJlc2VydmU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5sb2dvOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uY29sb3ItY2hhbmdle1xyXG4gICAgYW5pbWF0aW9uOiBjb2xvcmNoYW5nZW1lYWwgNXMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBjb2xvcmNoYW5nZW1lYWx7XHJcbiAgICAwJXtjb2xvcjp5ZWxsb3c7fVxyXG4gICAgMjUle2NvbG9yOiBvcmFuZ2VyZWQ7fVxyXG4gICAgNTAle2NvbG9yOiBvcmFuZ2U7fVxyXG4gICAgNzUle2NvbG9yOiAgcmVkO31cclxuICAgIDEwMCV7Y29sb3I6IHdoaXRlO31cclxufSAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MenuComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
} }
class MenuComponent {
    constructor() {
        this.menudetails = [{
                image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/oats-upma-recipe-1737051.jpg',
                name: "OATS UPMA",
                price: "40 Rs",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
            },
            {
                image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/idli-recipe-how-to-make-idli-soft-idli-recipe-idli-with-idli-rava-2170173.jpg',
                name: "IDLI",
                price: "30 Rs",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
            },
            {
                image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-paratha-recipe-aloo-ka-paratha-recipe-alu-paratha-recipe-1812720.jpg',
                name: "ALOO PARATHA",
                price: "30 Rs",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
            },
            {
                image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/failproof-instant-nylon-khaman-ce367b.jpg',
                name: "NYLON KHAMAN DHOKLA",
                price: "40 Rs",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
            }
        ];
    }
    details(i) {
        if (i == 1) {
            this.menudetails = [{
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/oats-upma-recipe-1737051.jpg',
                    name: "OATS UPMA",
                    price: "40 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/idli-recipe-how-to-make-idli-soft-idli-recipe-idli-with-idli-rava-2170173.jpg',
                    name: "IDLI",
                    price: "30 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-paratha-recipe-aloo-ka-paratha-recipe-alu-paratha-recipe-1812720.jpg',
                    name: "ALOO PARATHA",
                    price: "30 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/failproof-instant-nylon-khaman-ce367b.jpg',
                    name: "NYLON KHAMAN DHOKLA",
                    price: "40 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                }
            ];
        }
        else if (i == 2) {
            this.menudetails = [{
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/instant-chole-bhature-recipe-1998148.jpg',
                    name: "CHANA KULCHA",
                    price: "100 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-egg-curry-potato-egg-curry-aloo-anda-curry-2339236.jpg',
                    name: "SHAHI EGG CURRY",
                    price: "150 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/slow-cooker-dal-makhani-2578915.jpg',
                    name: "DAL MAKHANI",
                    price: "130 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pulao-recipe-veg-pulao-recipe-vegetable-pulav-recipe-2179670.jpg',
                    name: "VEG PULAO",
                    price: "210 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                }];
        }
        else if (i == 3) {
            this.menudetails = [{
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/chicken-biryani-recipe-aab154.jpg',
                    name: "CHICKEN BIRYANI",
                    price: "250 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/paneer-butter-masala-1c1b56.jpg',
                    name: "BUTTER PANEER WITH NAAN",
                    price: "270 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/paneer-butter-masala-paneer-makhani-in-instant-pot-2342040.jpg',
                    name: "PANEER BUTTER MASALA",
                    price: "220 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                },
                {
                    image: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/palak-methi-paneer-2290914.jpg',
                    name: "PALAK PANEER WITH ROTI",
                    price: "240 Rs",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'
                }];
        }
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 15, vars: 1, consts: [["id", "menu", 1, "Menu"], [1, "fluid-container", "heading"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "text-center", "text-light"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "text-center", "text-light"], [1, "container"], [1, "d-flex", "justify-content-center"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 3, "click"], ["class", "card ", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-3", "text-center"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "alt", "", 3, "src"], [1, "col-md-7", "text-center"], [1, "col", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "amount"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, esse!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_8_listener() { return ctx.details(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_10_listener() { return ctx.details(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_12_listener() { return ctx.details(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenuComponent_div_14_Template, 13, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menudetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".Menu[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n    \r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    padding: 10px 10px;\r\n    border: none;\r\n    background-color: transparent;\r\n    font-size: large;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    color: red;\r\n}\r\nbutton[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 100px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n.amount[_ngcontent-%COMP%]{\r\n\r\n    font-weight: bolder;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        \r\n        \r\n}\r\n@media only screen and (max-width: 998px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.9rem;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        width:150px;\r\n    }\r\n}\r\n@media only screen and (max-width: 780px){\r\nh1[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 0.8rem;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\nfont-size: 0.9rem;\r\n\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtRQUNaLHdGQUE0RztRQUM1RyxzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLFlBQVk7OztBQUdwQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFDQTtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uTWVudXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgXHJcbn1cclxuYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hbW91bnR7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSxyZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGluZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk4cHgpe1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpe1xyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmgze1xyXG5mb250LXNpemU6IDAuOXJlbTtcclxuXHJcbn1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/reservation/reservation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/reservation/reservation.component.ts ***!
  \******************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user */ "./src/app/user.ts");
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enrollment.service */ "./src/app/enrollment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function ReservationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "YOUR SEATS ARE RESERVED!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_8_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Name Format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationComponent_form_11_div_8_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReservationComponent_form_11_div_8_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);
} }
function ReservationComponent_form_11_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email Format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationComponent_form_11_div_15_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReservationComponent_form_11_div_15_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.pattern);
} }
function ReservationComponent_form_11_div_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_23_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number must be of 10 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservationComponent_form_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationComponent_form_11_div_23_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReservationComponent_form_11_div_23_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.pattern);
} }
function ReservationComponent_form_11_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r17);
} }
function ReservationComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReservationComponent_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.userModel.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReservationComponent_form_11_div_8_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.userModel.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReservationComponent_form_11_div_15_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.userModel.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReservationComponent_form_11_div_23_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "No. of Persons:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ReservationComponent_form_11_Template_select_blur_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.validatePerson(_r9.value); })("change", function ReservationComponent_form_11_Template_select_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.validatePerson(_r9.value); })("ngModelChange", function ReservationComponent_form_11_Template_select_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.userModel.person = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reserve for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReservationComponent_form_11_option_32_Template, 2, 1, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Please choose a category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.userModel.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.userModel.timePreference = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Morning (8AM - 11AM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.userModel.timePreference = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Afternoon (12PM - 4PM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_form_11_Template_input_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.userModel.timePreference = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Night (8PM - 10:30PM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Reserve Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.invalid && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && (_r3.invalid || _r3.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors && (_r5.invalid || _r5.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.invalid && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && (_r7.invalid || _r7.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r1.personHasError && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.person);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.persons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r1.personHasError || _r9.untouched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.timePreference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.timePreference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userModel.timePreference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.form.invalid || ctx_r1.personHasError);
} }
class ReservationComponent {
    constructor(_enrollmentService) {
        this._enrollmentService = _enrollmentService;
        this.persons = ['1 person', '2 persons', '3 persons', '4 persons', '5 persons', 'More than 5 persons'];
        this.personHasError = true;
        this.submitted = false;
        this.userModel = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]('Name', 'abc123@xyz.com', 1234567890, 'default', 'dd/mm/yyyy', 'morning');
    }
    ngOnInit() {
    }
    validatePerson(value) {
        if (value === "default") {
            this.personHasError = true;
        }
        else {
            this.personHasError = false;
        }
    }
    onSubmit() {
        this.submitted = true;
        this._enrollmentService.enroll(this.userModel)
            .subscribe(data => console.log('success!', data), error => console.log('Error!', error));
    }
}
ReservationComponent.ɵfac = function ReservationComponent_Factory(t) { return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"])); };
ReservationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReservationComponent, selectors: [["app-reservation"]], decls: 12, vars: 2, consts: [["id", "reserve", 1, "reservation"], [1, "fluid-container"], [1, "heading", "text-center", "text-light", "heading"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], [1, "container", "d-flex", "h-70"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "card", "justify-content-center", "align-self-center", "mx-auto"], [1, "card-body"], [4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [1, "text-danger"], ["novalidate", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "row"], [1, "form-group", "col-md-4", "col-12"], ["type", "text", "required", "", "pattern", "[A-Za-z ]{1,23}$", "name", "username", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "email", "required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "tel", "required", "", "pattern", "^\\d{10}$", "name", "phone", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["name", "persons", 1, "custom-select", 3, "ngModel", "blur", "change", "ngModelChange"], ["person", "ngModel"], ["value", "default"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12"], ["type", "text", "name", "date", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["type", "radio", "name", "timePreference", "value", "morning", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["type", "radio", "name", "timePreference", "value", "afternoon", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "timePreference", "value", "night", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "col-12"], ["type", "submit", 1, "d-block", "mx-auto", 3, "disabled"], ["class", "text-danger", 4, "ngIf"]], template: function ReservationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, recusandae?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReservationComponent_div_10_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReservationComponent_form_11_Template, 64, 23, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], styles: [".fluid-container[_ngcontent-%COMP%]{\r\n    background-color: #ebebe0;\r\n    \r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        overflow-x: hidden; \r\n        \r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    min-height: 75vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 1px solid red;\r\n    color: red;\r\n    padding: 5px 30px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n\r\n@media only screen and (max-width:780px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7SUFFekIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7UUFDWix3RkFBNEc7UUFDNUcsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osa0JBQWtCOztBQUUxQjs7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmx1aWQtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlMDtcclxuICAgIFxyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkscmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRpbmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgICAgIFxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNzV2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservation',
                templateUrl: './reservation.component.html',
                styleUrls: ['./reservation.component.css']
            }]
    }], function () { return [{ type: _enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReviewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], decls: 46, vars: 0, consts: [["id", "review", 1, "reviews"], [1, "fluid-container"], [1, "heading", "text-center", "text-light"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], [1, "container", "my-custom-container"], ["id", "carouselExampleCaptions", "data-ride", "carousel", "data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "carousel", "slide", "my-auto"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "content", "text-center"], [1, "content-image", "text", "text-center"], ["src", "../../assets/images/review1.png", "alt", "review1"], [1, "carousel-item"], ["src", "../../assets/images/review2.png", "alt", "review2"], ["src", "../../assets/images/review3.jpg", "alt", "review3"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active", "bg-dark"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1", 1, "bg-dark"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2", 1, "bg-dark"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, veritatis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident temporibus. Porro deserunt ducimus, tempore ipsum ea alias accusantium magni reiciendis obcaecati temporibus nemo velit. Facere labore voluptatum enim, maiores placeat id voluptate blanditiis qui magni, ullam dolor, repellendus tenetur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolor veritatis vero neque deserunt. Nobis dicta odit quam dolore maxime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "John Andrew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident temporibus. Porro deserunt ducimus, tempore ipsum ea alias accusantium magni reiciendis obcaecati temporibus nemo velit. Facere labore voluptatum enim, maiores placeat id voluptate blanditiis qui magni, ullam dolor, repellendus tenetur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolor veritatis vero neque deserunt. Nobis dicta odit quam dolore maxime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lisa Abraham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident temporibus. Porro deserunt ducimus, tempore ipsum ea alias accusantium magni reiciendis obcaecati temporibus nemo velit. Facere labore voluptatum enim, maiores placeat id voluptate blanditiis qui magni, ullam dolor, repellendus tenetur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolor veritatis vero neque deserunt. Nobis dicta odit quam dolore maxime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "James Charles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".reviews[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 100%;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n  }\r\n.my-custom-container[_ngcontent-%COMP%]{\r\n      width: 700px;\r\n  }\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        margin-bottom: 30px;\r\n        \r\n        \r\n}\r\n@media only screen and (max-width:780px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.7rem;\r\n    }\r\n    .my-custom-container[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        width: 150px;\r\n        height: 150px;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNBO01BQ0ksWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7RUFDdEI7QUFDQTtNQUNJLFlBQVk7RUFDaEI7QUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7UUFDWix3RkFBNEc7UUFDNUcsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osbUJBQW1COzs7QUFHM0I7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXdze1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAubXktY3VzdG9tLWNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZ3tcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSxyZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGluZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuICAgIC5teS1jdXN0b20tY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviews',
                templateUrl: './reviews.component.html',
                styleUrls: ['./reviews.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ServicesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", service_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.description);
} }
class ServicesComponent {
    constructor() {
        this.servicedetails = [
            {
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiRuFBrLsvIQeRhQaMcD02dQ_9K3QHMsUXng&usqp=CAU",
                title: "QUALITY CUISINE",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            },
            {
                picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD8/Pz5+fny8vL19fXm5ubv7+/Ly8v39/fj4+Pr6+umpqbg4ODY2NjOzs4wMDBycnKAgIBra2sNDQ1AQEBTU1MoKCirq6tmZmaampq0tLTFxcU4ODigoKAXFxd6enpKSkq9vb0eHh4bGxtXV1eLi4uTk5MzMzNERESHh4ddXV2QgIv/AAAKiElEQVR4nO2d55qyOhCAP4piAxtWsHe9//s7tiWFTCAhATxP3p+6mzCkTvXfP4PBYDAYDAaDwWAwGAwGg8FgMPwYjt+P48Cr+jH00b88rtZmt43cqp9ED8F9Yn04jPt21U+jgWhlIVpVP40G7iEmYFT106jHn2LybeYaemh0m50nzWazkkUeT3ABe8rbd4P9+TEIj7PZdbUbRa2gq7wLPtEAE9Baq27e2Y/wNf5kMlzvm6q74dDbaBUw2M6sNMfFslXWhr0ker4Q3yl4BmIFEKwWvUbx9jOx76SAbfzL6FH4fjNnDWCy5AeX7BYKQgl4Jja63tGaFBzFPU/AF4e5U6yHDBojors7Pmsa59dHk0Kbe7DLEPDVw17jRdgjR3CES9Mcfj6cFtj0GneGRGkesa49hxJwi7/L4JR8LD+N4qw5+sdaz9nhklN0iB/DreQEm8lf4agOeCzi4vKkaGzJqYILiO4AYU9+Bvl5h/DJYKl8NbqUgB30lbNGj3YusNXF+QV8vspTJ7tFESgBpz76qnFGesapwB7g5J+kb45BcbEQ3pBofIcJ6C3Q59cih1VjJyahZSlcjE1SwCn29jpXTMBCOoC7sUSJ2tnN5oIScNdHXwWYJnzt4/8kPF89YQEta6nmpkoJOEE2C2d/RJ8PIkwoOxY+ll0JCTdrFZe4xoJo9IBGyl0f0OdHorNohq9VbRIWOX4R1BaHRtC7YyNojfAJ05tRl7o8EoaWBLPiVjBSH8T2L48Y2xO+6HvvhxXczd2jJcOs6A0uOhDtIQG7hC3jgE/R5Wc0LmJrxBW40uA8ii3FFmEyOeyTLwKilw1+h7p8PxyITVOXss7kppCtz3/gTaFl7UREHzPsnGhfko/Fro4OuWULUGCets94Q5vl3+fukjidD9iG1kACWoJbDfnWBBjLSxgQi//298TdEbHthUu0EvB3chSUkJz4Ahyk91ObPCh234875AFJHAv4BX0qeOHwB5YkW1kJO2Q7g89qC27kxwtsuRFLSfQw7o5lJVzJDiI1Vtb29WGfOpgn2DonHnEgeqmxe7ISWnc5ATuphgZRQCtxM6SIklcAS1zbF1KBCR6ib/MDPYQsQjQ/muQk24krqPQCzw92UIuQZ+Ejx5NPCjiT6XMtK6Gc+6RzyG4YWdl96v3fZZTTFui0yGIsc+rPs+/6SJ/wT+Q3O6l7hrNl95PNRMZok93bOLFa+Dvym7DPaxmmJ27J+HCQ6fCR1Soy16T8DXIL/3kk0g3lRsIq5WetiVXy2vr0n8q7TS/MrnIg8U5bGcrMMbmypJyakufvi4bsXiMhYXzlN7kFBRwWMYDNJSWUmKVxxnH4d9Tv6bFeFDMrSF6/JSRsZYzh96yPaNuD5AUqYV+ahP6N3+RHl4roa8G0qMOkvZMRMJTQLpxpRqPD52CtaQFXxYN7pBRhiVtwjot3OEhZxzYKrOy2zO1U1Dj7ZpndLs1ViduyKaFiSIWeBcIWWmFDPkDWUZxGSpP590+0n6kql6W9FDXwj+Umj+B62Enethl4mXdiEtn4SEeol4k6AZ+6qZiFfyq7/kX2mplSr/o/X0jCkWw3IndEtQI+dxsRCTeSyoyAcS9ULeCfhy5v/zK+4LbAHB1oCNZ3LiL6Pu5ZyIl7yf8Op1qyERproe3mImie9c753+BC/RR940RCmpTYduOO8o/gSFuQud0SGkUREUWclYpCWti4WQoOwTZ/wwLt6giDxJmL7Dd5L29ObmvQTH02SQp/LLAah7lWDNNmyVqWk0s5qYcxnWHyeaIHa5GOc6g3tH3+zW15PpFCToYXTVtoGjteUr1bx+G8s2dN4EWmiAFLwNVztfnz8/j2VBk3h9nqdJ639GYF0PjxerH6k3Ky7cUvawnTaHXKEDFgbTJf/dJuBvE+jlutvl9BRqXd9YNgv2/1g8D3vv0zozf4amrA3GRkvRDasZm6Ac8qFTBdhrUV8B+gHcCBC33WnxcLqtKNvWbt8lfglN6z/jgs4cgrgsPUEAaseeek7PMvjuJaSck0zozHZkXWOnPW1WFzqX+uPTtb6kgvLrvHGsHwXn8BnyIy9QTa/nZh7qLbXxDwqcwyw8VI4w07LW5R9zX4R5ftB8AyTtn5OLfqHlkUpqvjkCxFQN+dVvnIovhpK/kg2U49duBM8azlUkldqJGzpgsIqDj5TTvUlXqQXGu67Cl6Kk35UwaegoWlLnnsXUjKaVw1mHv8lriJGuxwBMVulrJINAc0QB5gc1Lkyy2d1ufeggJefLaXV4ObpSzeNRkWySbZ37Gn6C/XRHoqSCgmtMUW8FpnlT4Te75NBIzZAhKZoD+IkygLqYC77xTVXDukPJgK/cuX+tsjiIgAf4f+CjclAUXKnKt+MEWwLXBWgaCNmtGGYqpG/5M16EDh8FIBjHUEqlS0/S2NFwbKhJGM7qsfUAiCdOxbzWhA0beTv5uMc/np5QiGF68SAZ8n5bbsSpPq8KFMYpRK93bHDX9VRDoHEq3BROP9ulSl0hWrhxmC8B7BxGqTuMXzxGzUDjAFBtndsPyXx+8ZMugyAQnIcrrHHYg/Zy8FMxg2iYBU0UKpxNrq2IOhYYlRJlWV8fBLIoICokLV/XQu3uZ3bG6AxcKyjokjOJXJ++ZXROxB+UubxCgDbLSS2URlA+YUoPB2FzoqlVRD0w2cJIUV4gSrTv6AiHB++xb/Mzjjr+YiOsx4obSAVO0cgl6dTcQuLCBdHqsBi1jjuC8PLh49Tj01p0iT1nyDIrhwcZIhw2bBKfBzrqeJw4OzQtj6nw9mWYT3OurEnFkHVT3ogIm/YQ0tG5yMbzjjugv+T/2Mjcykia+AnFCgLpzPNa3XKDJzCj5MuAaKAM7AmdRJRCAE4cUqQ+vjJPvf6mO84dQEm2SmmsWwiLUJlOI84ypbHbJhe4DKmgJFAEIQXjBj9GnsCK6HcauDTswZglT4OgAnDX9Q/ShCIQiWSPEIXiJ+xaPIznT6EArUHeCl4utOi+XCE9BaZv8/aoiXjL+v0N3PK7ciFinTPsMihlFVCiO3vpJoxQGX88NEh56qn5UQA4yxeHEWVmI52qV1WFchYhu2WMgFkoAecetliCx/LfJmlbWVM0PsOE0WKP4oB5A08WEoO6d4lQeG5Y5ik1fHYiwdXMGtSlFqXhu3hFuR7J4Or+ZWvgoNSgBDEN4CFsruAZ3/78lRVuJQwHvRRR3y3F8kXJQjIsdioaIMXp9Xea/Ijx3mBgxBeKGiShz9SwEEakpBcgHSXtQJmFVPVEUPXHi/XLJSpOjEvPLzur1vPH1J8vcCGPBqbmkvuQAX3wvVOeFtzq/0are/BeA+oHL6OD1woirshQ3ogFFbkcSBwgFKSPgGthrlywNQzkowErMdm8p/8RyI8T+VoQozqsOHIlan3DAUtJLyhdM5Pprys1IiHkrKVXRo6+ZZU7/Ubx5bs3VZIQwOaWQbaVsbZH2JY4n2KBsfxZHGyzBxNpUaSmQjx6beVIIu0oj7JZvb3K+ReqzZF+3tPru1vqXA6Xv92N30B75449tuvP7lzCGDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgUMp/ylOVY6CDGEIAAAAASUVORK5CYII=",
                title: "FRESH FOOD",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            },
            {
                picture: "https://cdn.iconscout.com/icon/premium/png-256-thumb/cheese-pancake-1878860-1592822.png",
                title: "BREAD & PANCAKES",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            },
            {
                picture: "https://freeiconshop.com/wp-content/uploads/edd/food-solid.png",
                title: "EVERYDAY NEW",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            },
            {
                picture: "https://cdn.iconscout.com/icon/premium/png-256-thumb/fruits-and-vegetables-1469302-1243737.png",
                title: "FRESH VEGIES SALAD",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            },
            {
                picture: "https://lh3.googleusercontent.com/proxy/e0FrcaPAuSYunGZnI-X1nSfiDt9HVDez9g5Nu923OtzkLkOb9LO5BgmouXP-FQnJij_48_KGa2y7-6ftfR_bd4NcsUBpkJzhvZMLE8IEsnSYN1ok2ZrBmIC9Fc-uILxs8ZLcKAPZj4XUafwsBjABqaQ",
                title: "WHOLE CHICKEN",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
            }
        ];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 10, vars: 1, consts: [["id", "services", 1, "service"], [1, "fluid-container"], [1, "heading", "text-center", "text-light"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], [1, "container"], [1, "row"], ["class", "col-12 col-md-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-4", "mb-3"], [1, "card"], ["data-aos", "flip-left", "data-aos-duration", "2000", "data-aos-easing", "linear", "alt", "Card image cap", 1, "card-img-top", "d-block", "mx-auto", 3, "src"], [1, "card-body"], ["data-aos", "flip-right", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "card-text", "text-center"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Other Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nostrum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServicesComponent_div_9_Template, 9, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicedetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["span[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\n.service[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 140px;\r\n    height: 120px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 40px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        \r\n        \r\n}\r\n@media only screen and (max-width:780px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO1FBQ1osd0ZBQTRHO1FBQzVHLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsWUFBWTs7O0FBR3BCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zZXJ2aWNle1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpLHJnYmEoMCwgMCwgMCwgMC44KSksIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkaW5nLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/socialfeed/socialfeed.component.ts":
/*!****************************************************!*\
  !*** ./src/app/socialfeed/socialfeed.component.ts ***!
  \****************************************************/
/*! exports provided: SocialfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialfeedComponent", function() { return SocialfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialfeedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialfeedComponent.ɵfac = function SocialfeedComponent_Factory(t) { return new (t || SocialfeedComponent)(); };
SocialfeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialfeedComponent, selectors: [["app-socialfeed"]], decls: 13, vars: 0, consts: [["id", "about", 1, "socialfeed", "fluid-container"], [1, "row"], [1, "col-md-12", "heading"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear"], ["data-aos", "fade-right", "data-aos-duration", "2000", "data-aos-easing", "linear"], [1, "container"], ["data-aos", "fade-left", "data-aos-duration", "2000", "data-aos-easing", "linear", 1, "col-md-12"], ["src", "../../assets/images/food.jpg", "alt", "FOOD"]], template: function SocialfeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae modi necessitatibus maxime commodi facilis Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit corrupti ipsa quasi excepturi, similique velit cupiditate accusantium? Debitis, perferendis.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%]{\r\n    \r\n    max-width: 100%;\r\n    height: auto;\r\n\r\n    \r\n}\r\n\r\n.socialfeed[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n       \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    padding-bottom: 20px ;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    padding: 30px;\r\n    margin-top: 20px;\r\n        background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8)), url('heading.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: auto;\r\n        \r\n        \r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 780px){\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    p[_ngcontent-%COMP%]{\r\n        font-size: 0.8rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsZmVlZC9zb2NpYWxmZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7UUFDWix3RkFBNEc7UUFDNUcsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixZQUFZOzs7QUFHcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsZmVlZC9zb2NpYWxmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBcclxufVxyXG5cclxuLnNvY2lhbGZlZWR7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgIFxyXG59XHJcbi5jb250YWluZXIgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4IDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSxyZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGluZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG59XHJcbi5oZWFkaW5nIGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5nIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCl7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialfeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-socialfeed',
                templateUrl: './socialfeed.component.html',
                styleUrls: ['./socialfeed.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, email, phone, person, date, timePreference) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.person = person;
        this.date = date;
        this.timePreference = timePreference;
    }
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANGULAR\project1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map