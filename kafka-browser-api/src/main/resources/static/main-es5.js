function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./kafka-environment.service */
    "./src/app/kafka-environment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _kafka_environment_kafka_environment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kafka-environment/kafka-environment.component */
    "./src/app/kafka-environment/kafka-environment.component.ts");
    /* harmony import */


    var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error-modal/error-modal.component */
    "./src/app/error-modal/error-modal.component.ts");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Topics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Consumer Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-kafka-environment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-error-modal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "", ctx_r0.environmentService.getCurrentEnvironment(), "/topics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "", ctx_r0.environmentService.getCurrentEnvironment(), "/consumer-groups");
      }
    }

    function AppComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(environmentService, router, route) {
        _classCallCheck(this, AppComponent);

        this.environmentService = environmentService;
        this.router = router;
        this.route = route;
        this.applicationLoaded = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            _this.environmentService.loadEnvironment().subscribe(function (result) {
              _this.applicationLoaded = result;
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__["KafkaEnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "main-nav"], [3, "routerLink"], [1, "main-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 10, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.applicationLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _kafka_environment_kafka_environment_component__WEBPACK_IMPORTED_MODULE_4__["KafkaEnvironmentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_5__["ErrorModalComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__["KafkaEnvironmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _topic_topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./topic/topic.component */
    "./src/app/topic/topic.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _consumer_groups_consumer_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consumer-groups/consumer-groups.component */
    "./src/app/consumer-groups/consumer-groups.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./topic-details/topic-details.component */
    "./src/app/topic-details/topic-details.component.ts");
    /* harmony import */


    var _consumer_group_details_consumer_group_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./consumer-group-details/consumer-group-details.component */
    "./src/app/consumer-group-details/consumer-group-details.component.ts");
    /* harmony import */


    var _kafka_environment_kafka_environment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./kafka-environment/kafka-environment.component */
    "./src/app/kafka-environment/kafka-environment.component.ts");
    /* harmony import */


    var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./error-modal/error-modal.component */
    "./src/app/error-modal/error-modal.component.ts");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");

    var appRoutes = [{
      path: ':environment/topics',
      component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"]
    }, {
      path: ':environment/topics/:name',
      component: _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_8__["TopicDetailsComponent"]
    }, {
      path: ':environment/consumer-groups',
      component: _consumer_groups_consumer_groups_component__WEBPACK_IMPORTED_MODULE_6__["ConsumerGroupsComponent"]
    }, {
      path: ':environment/consumer-groups/:name',
      component: _consumer_group_details_consumer_group_details_component__WEBPACK_IMPORTED_MODULE_9__["ConsumerGroupDetailsComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _topic_topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], _consumer_groups_consumer_groups_component__WEBPACK_IMPORTED_MODULE_6__["ConsumerGroupsComponent"], _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_8__["TopicDetailsComponent"], _consumer_group_details_consumer_group_details_component__WEBPACK_IMPORTED_MODULE_9__["ConsumerGroupDetailsComponent"], _kafka_environment_kafka_environment_component__WEBPACK_IMPORTED_MODULE_10__["KafkaEnvironmentComponent"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_11__["ErrorModalComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _topic_topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], _consumer_groups_consumer_groups_component__WEBPACK_IMPORTED_MODULE_6__["ConsumerGroupsComponent"], _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_8__["TopicDetailsComponent"], _consumer_group_details_consumer_group_details_component__WEBPACK_IMPORTED_MODULE_9__["ConsumerGroupDetailsComponent"], _kafka_environment_kafka_environment_component__WEBPACK_IMPORTED_MODULE_10__["KafkaEnvironmentComponent"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_11__["ErrorModalComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/confirmation-modal/confirmation-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/confirmation-modal/confirmation-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfirmationModalComponent */

  /***/
  function srcAppConfirmationModalConfirmationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function () {
      return ConfirmationModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConfirmationModalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_div_3_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.emitResult(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Accept");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_div_3_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.emitResult(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.message);
      }
    }

    var ConfirmationModalComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationModalComponent() {
        _classCallCheck(this, ConfirmationModalComponent);

        this.confirmationResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden = true;
      }

      _createClass(ConfirmationModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emitResult",
        value: function emitResult(accepted) {
          this.confirmationResult.emit(accepted);
          this.hidden = true;
        }
      }, {
        key: "showModal",
        value: function showModal() {
          this.hidden = false;
        }
      }]);

      return ConfirmationModalComponent;
    }();

    ConfirmationModalComponent.ɵfac = function ConfirmationModalComponent_Factory(t) {
      return new (t || ConfirmationModalComponent)();
    };

    ConfirmationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationModalComponent,
      selectors: [["app-confirmation-modal"]],
      inputs: {
        message: "message",
        buttonName: "buttonName"
      },
      outputs: {
        confirmationResult: "confirmationResult"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "confirmation"], [3, "click"], ["class", "confirmation-modal", 4, "ngIf"], [1, "confirmation-modal"], [1, "window"]],
      template: function ConfirmationModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_1_listener() {
            return ctx.showModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmationModalComponent_div_3_Template, 8, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".confirmation-modal[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: var(--gb-color);\r\n  margin: 15% 0 0 10%;\r\n  border: 1px solid var(--table-border-color);\r\n  width: 80%;\r\n}\r\n\r\n.confirmation-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-of-type) {\r\n  margin-left: 0.5em;\r\n}\r\n\r\n.confirmation[_ngcontent-%COMP%] {\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1hdGlvbi1tb2RhbCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdiLWNvbG9yKTtcclxuICBtYXJnaW46IDE1JSAwIDAgMTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRhYmxlLWJvcmRlci1jb2xvcik7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1tb2RhbCBidXR0b246bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirmation-modal',
          templateUrl: './confirmation-modal.component.html',
          styleUrls: ['./confirmation-modal.component.css']
        }]
      }], function () {
        return [];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        confirmationResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/consumer-group-details/consumer-group-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/consumer-group-details/consumer-group-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ConsumerGroupDetailsComponent */

  /***/
  function srcAppConsumerGroupDetailsConsumerGroupDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsumerGroupDetailsComponent", function () {
      return ConsumerGroupDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_pulling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils/pulling */
    "./src/app/utils/pulling.ts");
    /* harmony import */


    var _consumer_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../consumer-groups.service */
    "./src/app/consumer-groups.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _error_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../error-service.service */
    "./src/app/error-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");

    function ConsumerGroupDetailsComponent_div_0_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var partitionInfo_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partitionInfo_r22.partition.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partitionInfo_r22.partition.lastLog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partitionInfo_r22.lag);
      }
    }

    function ConsumerGroupDetailsComponent_div_0_div_31_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var memberDescription_r24 = ctx.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberDescription_r24.memberId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberDescription_r24.clientId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberDescription_r24.host);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.joinPartitionAssigments(memberDescription_r24.assignment.topicPartitions));
      }
    }

    function ConsumerGroupDetailsComponent_div_0_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "State");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Partition assignor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coordinator");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Member id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Client id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Host");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Assign partitions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ConsumerGroupDetailsComponent_div_0_div_31_tr_26_Template, 9, 4, "tr", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.consumerGroupMetaData.consumerGroupState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.consumerGroupMetaData.partitionAssignor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.consumerGroupMetaData.coordinator);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.consumerGroupMetaData.memberDescriptionList);
      }
    }

    function ConsumerGroupDetailsComponent_div_0_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConsumerGroupDetailsComponent_div_0_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r25 = ctx.$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", ctx_r21.environment, "/topics/", topic_r25, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r25);
      }
    }

    function ConsumerGroupDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Lag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lag increase per second");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Message consumtion per second");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Partitions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Events count");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConsumerGroupDetailsComponent_div_0_tr_28_Template, 7, 3, "tr", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Consumer group state");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConsumerGroupDetailsComponent_div_0_div_31_Template, 27, 4, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ConsumerGroupDetailsComponent_div_0_div_32_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Topics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ConsumerGroupDetailsComponent_div_0_tr_39_Template, 4, 3, "tr", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-confirmation-modal", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirmationResult", function ConsumerGroupDetailsComponent_div_0_Template_app_confirmation_modal_confirmationResult_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onConfirmation($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.consumerGroup.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.lagSum);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.dataCollector.lagPerSec);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.dataCollector.messagesPerSec);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.consumerGroup.partitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.consumerGroupMetaData !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.consumerGroupMetaData === undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.consumerGroup.topicNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "Do you want to delete ", ctx_r17.consumerGroup.name, " consumer group?");
      }
    }

    var ConsumerGroupDetailsComponent =
    /*#__PURE__*/
    function () {
      function ConsumerGroupDetailsComponent(consumerGroupsService, route, errorService, router) {
        _classCallCheck(this, ConsumerGroupDetailsComponent);

        this.consumerGroupsService = consumerGroupsService;
        this.route = route;
        this.errorService = errorService;
        this.router = router;
      }

      _createClass(ConsumerGroupDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            _this2.removeSubscribtions();

            var name = params.name;
            _this2.environment = params.environment;

            var getter = function getter() {
              return _this2.consumerGroupsService.getConsumerGroup(name, _this2.environment);
            };

            var updater = function updater(cg) {
              _this2.dataCollector = _this2.calulcateConsumerGroupDataDiff(cg);
              _this2.consumerGroup = cg;
              _this2.lagSum = cg.partitions.map(function (it) {
                return it.lag;
              }).reduce(function (part, sum) {
                return part + sum;
              });
              _this2.lastCGUpdate = Date.now();
            };

            _this2.consumerGroupSubscription = Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_3__["pull"])(getter, updater).subscribe();

            var metaDataGetter = function metaDataGetter() {
              return _this2.consumerGroupsService.getConsumerGroupMetaData(name, _this2.environment);
            };

            var metaDataUpdater = function metaDataUpdater(cg) {
              return _this2.consumerGroupMetaData = cg;
            };

            _this2.consumerGroupMDSubscription = Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_3__["pull"])(metaDataGetter, metaDataUpdater, 10000).subscribe();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.removeSubscribtions();
        }
      }, {
        key: "removeSubscribtions",
        value: function removeSubscribtions() {
          Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_3__["unsubscribe"])(this.consumerGroupSubscription);
          Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_3__["unsubscribe"])(this.consumerGroupMDSubscription);
        }
      }, {
        key: "onConfirmation",
        value: function onConfirmation(shouldDelete) {
          if (shouldDelete) {
            this.delete();
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this3 = this;

          this.consumerGroupsService.deleteConsumerGroup(this.consumerGroup.name, this.environment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (val) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(val.error);
          })).subscribe(function (error) {
            if (error) {
              _this3.errorService.showError(error);
            } else {
              _this3.router.navigateByUrl('/' + _this3.environment + '/consumer-groups');
            }
          });
        }
      }, {
        key: "joinPartitionAssigments",
        value: function joinPartitionAssigments(assignments) {
          return assignments.map(function (assignment) {
            return assignment.topic + '_' + assignment.partition;
          }).join(' | ');
        }
      }, {
        key: "calulcateConsumerGroupDataDiff",
        value: function calulcateConsumerGroupDataDiff(newConsumerGroup) {
          if (this.consumerGroup === undefined) {
            var lagDiffMap = new Map();
            newConsumerGroup.partitions.forEach(function (part) {
              return lagDiffMap.set(part.partition, {
                lagValue: 0,
                lagPerSecound: 0
              });
            });
            return {
              messagesPerSec: 0,
              lagPerSec: 0 // lagDiff: lagDiffMap

            };
          }

          var timeDiffSec = (Date.now() - this.lastCGUpdate) / 1000;
          var newMessages = this.messageCount(newConsumerGroup) - this.messageCount(this.consumerGroup);
          var newLag = this.lagCount(newConsumerGroup) - this.lagCount(this.consumerGroup);
          var messagesPerSec = Math.round(newMessages / timeDiffSec * 100) / 100;
          var lagPerSec = Math.round(newLag / timeDiffSec * 100) / 100;
          return {
            messagesPerSec: messagesPerSec,
            lagPerSec: lagPerSec
          };
        }
      }, {
        key: "messageCount",
        value: function messageCount(consumerGroup) {
          return consumerGroup.partitions.map(function (it) {
            return it.partition.lastLog;
          }).reduce(function (a, b) {
            return a + b;
          });
        }
      }, {
        key: "lagCount",
        value: function lagCount(consumerGroup) {
          return consumerGroup.partitions.map(function (it) {
            return it.lag;
          }).reduce(function (a, b) {
            return a + b;
          });
        }
      }]);

      return ConsumerGroupDetailsComponent;
    }();

    ConsumerGroupDetailsComponent.ɵfac = function ConsumerGroupDetailsComponent_Factory(t) {
      return new (t || ConsumerGroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_consumer_groups_service__WEBPACK_IMPORTED_MODULE_4__["ConsumerGroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service_service__WEBPACK_IMPORTED_MODULE_6__["ErrorServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    ConsumerGroupDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsumerGroupDetailsComponent,
      selectors: [["app-consumer-group-details"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["buttonName", "Delete", 3, "message", "confirmationResult"], [3, "routerLink"]],
      template: function ConsumerGroupDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConsumerGroupDetailsComponent_div_0_Template, 41, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.consumerGroup !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bWVyLWdyb3VwLWRldGFpbHMvY29uc3VtZXItZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsumerGroupDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consumer-group-details',
          templateUrl: './consumer-group-details.component.html',
          styleUrls: ['./consumer-group-details.component.css']
        }]
      }], function () {
        return [{
          type: _consumer_groups_service__WEBPACK_IMPORTED_MODULE_4__["ConsumerGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _error_service_service__WEBPACK_IMPORTED_MODULE_6__["ErrorServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/consumer-groups.service.ts":
  /*!********************************************!*\
    !*** ./src/app/consumer-groups.service.ts ***!
    \********************************************/

  /*! exports provided: ConsumerGroupsService */

  /***/
  function srcAppConsumerGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsumerGroupsService", function () {
      return ConsumerGroupsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ConsumerGroupsService =
    /*#__PURE__*/
    function () {
      function ConsumerGroupsService(httpClient) {
        _classCallCheck(this, ConsumerGroupsService);

        this.httpClient = httpClient;
        this.url = 'http://localhost:8080/api/';
      }

      _createClass(ConsumerGroupsService, [{
        key: "getConsumerGroupsNames",
        value: function getConsumerGroupsNames(environment) {
          return this.httpClient.get(this.url + environment + '/consumer-groups');
        }
      }, {
        key: "getConsumerGroups",
        value: function getConsumerGroups(environment) {
          return this.httpClient.get(this.url + environment + '/consumer-groups');
        }
      }, {
        key: "getConsumerGroupMetaData",
        value: function getConsumerGroupMetaData(name, environment) {
          return this.httpClient.get(this.url + environment + '/consumer-groups' + '/' + name + '/meta-data');
        }
      }, {
        key: "getConsumerGroup",
        value: function getConsumerGroup(name, environment) {
          return this.httpClient.get(this.url + environment + '/consumer-groups' + '/' + name);
        }
      }, {
        key: "deleteConsumerGroup",
        value: function deleteConsumerGroup(name, environment) {
          return this.httpClient.delete(this.url + environment + '/consumer-groups' + '/' + name);
        }
      }]);

      return ConsumerGroupsService;
    }();

    ConsumerGroupsService.ɵfac = function ConsumerGroupsService_Factory(t) {
      return new (t || ConsumerGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ConsumerGroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConsumerGroupsService,
      factory: ConsumerGroupsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsumerGroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/consumer-groups/consumer-groups.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/consumer-groups/consumer-groups.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConsumerGroupsComponent */

  /***/
  function srcAppConsumerGroupsConsumerGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsumerGroupsComponent", function () {
      return ConsumerGroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _consumer_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../consumer-groups.service */
    "./src/app/consumer-groups.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConsumerGroupsComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var consumerGroup_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", consumerGroup_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](consumerGroup_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](consumerGroup_r5.topicNames);
      }
    }

    var ConsumerGroupsComponent =
    /*#__PURE__*/
    function () {
      function ConsumerGroupsComponent(consumerGroupsService, route) {
        _classCallCheck(this, ConsumerGroupsComponent);

        this.consumerGroupsService = consumerGroupsService;
        this.route = route;
      }

      _createClass(ConsumerGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.subscribe(function (params) {
            var environment = params.environment;

            _this4.consumerGroupsService.getConsumerGroups(environment).subscribe(function (cGroups) {
              _this4.consumerGroups = cGroups;
              _this4.displayGroups = cGroups;
            });
          });
        }
      }, {
        key: "onFilterInput",
        value: function onFilterInput(event) {
          var filterValue = event.target.value.toLowerCase();

          if (filterValue === undefined || filterValue === '') {
            this.displayGroups = this.consumerGroups;
          } else {
            this.displayGroups = this.consumerGroups.filter(function (cg) {
              return cg.name.toLowerCase().includes(filterValue);
            });
          }
        }
      }]);

      return ConsumerGroupsComponent;
    }();

    ConsumerGroupsComponent.ɵfac = function ConsumerGroupsComponent_Factory(t) {
      return new (t || ConsumerGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_consumer_groups_service__WEBPACK_IMPORTED_MODULE_1__["ConsumerGroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ConsumerGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsumerGroupsComponent,
      selectors: [["app-consumer-groups"]],
      decls: 12,
      vars: 1,
      consts: [[1, "filter"], ["for", "filter-input", 1, "filter-label"], ["id", "filter-input", 1, "filter-input", 3, "keyup"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function ConsumerGroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsumerGroupsComponent_Template_input_keyup_4_listener($event) {
            return ctx.onFilterInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConsumerGroupsComponent_tr_11_Template, 6, 3, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayGroups);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bWVyLWdyb3Vwcy9jb25zdW1lci1ncm91cHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsumerGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consumer-groups',
          templateUrl: './consumer-groups.component.html',
          styleUrls: ['./consumer-groups.component.css']
        }]
      }], function () {
        return [{
          type: _consumer_groups_service__WEBPACK_IMPORTED_MODULE_1__["ConsumerGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error-modal/error-modal.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/error-modal/error-modal.component.ts ***!
    \******************************************************/

  /*! exports provided: ErrorModalComponent */

  /***/
  function srcAppErrorModalErrorModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function () {
      return ErrorModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _error_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../error-service.service */
    "./src/app/error-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ErrorModalComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorModalComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OK");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.message);
      }
    }

    var ErrorModalComponent =
    /*#__PURE__*/
    function () {
      function ErrorModalComponent(errorServiceService) {
        _classCallCheck(this, ErrorModalComponent);

        this.errorServiceService = errorServiceService;
        this.message = 'no error';
        this.hidden = true;
      }

      _createClass(ErrorModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          console.log('subscribing to errors');
          this.subscription = this.errorServiceService.subscriveToErrors(function (error) {
            _this5.hidden = false;
            _this5.message = error;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.hidden = true;
        }
      }]);

      return ErrorModalComponent;
    }();

    ErrorModalComponent.ɵfac = function ErrorModalComponent_Factory(t) {
      return new (t || ErrorModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service_service__WEBPACK_IMPORTED_MODULE_1__["ErrorServiceService"]));
    };

    ErrorModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorModalComponent,
      selectors: [["app-error-modal"]],
      decls: 1,
      vars: 1,
      consts: [["class", "error-modal", 4, "ngIf"], [1, "error-modal"], [1, "window"], [3, "click"]],
      template: function ErrorModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorModalComponent_div_0_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".error-modal[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: #ff4747c9;\r\n  margin: 15% 0 0 10% ;\r\n  border: 1px solid #888;\r\n  width: 80%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NzQ3Yzk7XHJcbiAgbWFyZ2luOiAxNSUgMCAwIDEwJSA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyBcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-modal',
          templateUrl: './error-modal.component.html',
          styleUrls: ['./error-modal.component.css']
        }]
      }], function () {
        return [{
          type: _error_service_service__WEBPACK_IMPORTED_MODULE_1__["ErrorServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error-service.service.ts":
  /*!******************************************!*\
    !*** ./src/app/error-service.service.ts ***!
    \******************************************/

  /*! exports provided: ErrorServiceService */

  /***/
  function srcAppErrorServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorServiceService", function () {
      return ErrorServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ErrorServiceService =
    /*#__PURE__*/
    function () {
      function ErrorServiceService() {
        _classCallCheck(this, ErrorServiceService);

        this.errorsStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ErrorServiceService, [{
        key: "showError",
        value: function showError(error) {
          console.log('showing error' + error);
          this.errorsStream.next(error);
        }
      }, {
        key: "subscriveToErrors",
        value: function subscriveToErrors(errorHandler) {
          console.log('creating subscription for errors');
          return this.errorsStream.subscribe(errorHandler);
        }
      }]);

      return ErrorServiceService;
    }();

    ErrorServiceService.ɵfac = function ErrorServiceService_Factory(t) {
      return new (t || ErrorServiceService)();
    };

    ErrorServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorServiceService,
      factory: ErrorServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kafka-environment.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/kafka-environment.service.ts ***!
    \**********************************************/

  /*! exports provided: KafkaEnvironmentService */

  /***/
  function srcAppKafkaEnvironmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KafkaEnvironmentService", function () {
      return KafkaEnvironmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var KafkaEnvironmentService =
    /*#__PURE__*/
    function () {
      function KafkaEnvironmentService(httpClient, router) {
        _classCallCheck(this, KafkaEnvironmentService);

        this.httpClient = httpClient;
        this.router = router;
        this.serverUrl = 'http://localhost:8080/api';
      }

      _createClass(KafkaEnvironmentService, [{
        key: "getAwailableEnvironments",
        value: function getAwailableEnvironments() {
          return this.httpClient.get(this.serverUrl + '/environments');
        }
      }, {
        key: "loadEnvironment",
        value: function loadEnvironment() {
          var _this6 = this;

          return this.getAwailableEnvironments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (environments) {
            return _this6.environments = environments;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_) {
            return true;
          }));
        }
      }, {
        key: "getCurrentEnvironment",
        value: function getCurrentEnvironment() {
          var rsult = this.router.url.split('/')[1] || this.environments[0].name;
          return decodeURI(rsult);
        }
      }]);

      return KafkaEnvironmentService;
    }();

    KafkaEnvironmentService.ɵfac = function KafkaEnvironmentService_Factory(t) {
      return new (t || KafkaEnvironmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    KafkaEnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KafkaEnvironmentService,
      factory: KafkaEnvironmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KafkaEnvironmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/kafka-environment/kafka-environment.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/kafka-environment/kafka-environment.component.ts ***!
    \******************************************************************/

  /*! exports provided: KafkaEnvironmentComponent */

  /***/
  function srcAppKafkaEnvironmentKafkaEnvironmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KafkaEnvironmentComponent", function () {
      return KafkaEnvironmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../kafka-environment.service */
    "./src/app/kafka-environment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function KafkaEnvironmentComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var env_r29 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", env_r29 === ctx_r28.selectedEnv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", env_r29, " ");
      }
    }

    var KafkaEnvironmentComponent =
    /*#__PURE__*/
    function () {
      function KafkaEnvironmentComponent(kafkaEnvironmentService, router) {
        _classCallCheck(this, KafkaEnvironmentComponent);

        this.kafkaEnvironmentService = kafkaEnvironmentService;
        this.router = router;
        this.environments = [];
      }

      _createClass(KafkaEnvironmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.kafkaEnvironmentService.getAwailableEnvironments().subscribe(function (it) {
            return _this7.environments = it.map(function (env) {
              return env.name;
            });
          });
          this.selectedEnv = this.kafkaEnvironmentService.getCurrentEnvironment();
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event) {
          var envName = event.target.value;
          this.selectedEnv = this.environments.filter(function (it) {
            return it === envName;
          })[0];
          var urlParts = this.router.url.split('/');
          urlParts[1] = envName;
          this.router.navigateByUrl(urlParts.join('/'));
        }
      }]);

      return KafkaEnvironmentComponent;
    }();

    KafkaEnvironmentComponent.ɵfac = function KafkaEnvironmentComponent_Factory(t) {
      return new (t || KafkaEnvironmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__["KafkaEnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    KafkaEnvironmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KafkaEnvironmentComponent,
      selectors: [["app-kafka-environment"]],
      decls: 5,
      vars: 1,
      consts: [[1, "environment"], ["for", "environment"], ["id", "environment", 3, "change"], ["class", "environment-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "environment-option", 3, "selected"]],
      template: function KafkaEnvironmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Environments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KafkaEnvironmentComponent_Template_select_change_3_listener($event) {
            return ctx.onSelectChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KafkaEnvironmentComponent_option_4_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.environments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["#environment[_ngcontent-%COMP%] {\r\n     border: none;\r\n     background-color: #923828;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2Fma2EtZW52aXJvbm1lbnQva2Fma2EtZW52aXJvbm1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFlBQVk7S0FDWix5QkFBeUI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9rYWZrYS1lbnZpcm9ubWVudC9rYWZrYS1lbnZpcm9ubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Vudmlyb25tZW50IHtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkyMzgyODtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KafkaEnvironmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kafka-environment',
          templateUrl: './kafka-environment.component.html',
          styleUrls: ['./kafka-environment.component.css']
        }]
      }], function () {
        return [{
          type: _kafka_environment_service__WEBPACK_IMPORTED_MODULE_1__["KafkaEnvironmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topic-details/topic-details.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/topic-details/topic-details.component.ts ***!
    \**********************************************************/

  /*! exports provided: TopicDetailsComponent */

  /***/
  function srcAppTopicDetailsTopicDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicDetailsComponent", function () {
      return TopicDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_pulling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/pulling */
    "./src/app/utils/pulling.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../topic.service */
    "./src/app/topic.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _error_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../error-service.service */
    "./src/app/error-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../confirmation-modal/confirmation-modal.component */
    "./src/app/confirmation-modal/confirmation-modal.component.ts");

    function TopicDetailsComponent_div_0_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicDetailsComponent_div_0_tr_27_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var partition_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.getLastMessage(partition_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var partition_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partition_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partition_r10.lastLog);
      }
    }

    function TopicDetailsComponent_div_0_div_33_tr_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var consumerGroup_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/", ctx_r13.environment, "/consumer-groups/", consumerGroup_r14, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](consumerGroup_r14);
      }
    }

    function TopicDetailsComponent_div_0_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopicDetailsComponent_div_0_div_33_tr_5_Template, 4, 3, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.consumerGroups);
      }
    }

    function TopicDetailsComponent_div_0_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopicDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Topic name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Topic events count:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Topic partitions count:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Messages per second:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Partitions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Events count");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TopicDetailsComponent_div_0_tr_27_Template, 8, 2, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Consumer groups");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TopicDetailsComponent_div_0_div_33_Template, 6, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TopicDetailsComponent_div_0_div_34_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-confirmation-modal", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirmationResult", function TopicDetailsComponent_div_0_Template_app_confirmation_modal_confirmationResult_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onDeleteConfirmation($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.topic.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.topic.messages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.topic.partitionCount, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.messagesPerSec, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.topic.partitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.consumerGroups !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.consumerGroups === undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "Do you want to delete ", ctx_r6.topic.name, " topic ?");
      }
    }

    var TopicDetailsComponent =
    /*#__PURE__*/
    function () {
      function TopicDetailsComponent(topicService, route, errorService, router) {
        _classCallCheck(this, TopicDetailsComponent);

        this.topicService = topicService;
        this.route = route;
        this.errorService = errorService;
        this.router = router;
        this.CONSUMER_GROUP_PULL_INTERVAL_MS = 30000;
      }

      _createClass(TopicDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.params.subscribe(function (params) {
            var name = params.name;
            _this8.environment = params.environment;

            var getTopicDetails = function getTopicDetails() {
              return _this8.topicService.getTopic(name, _this8.environment);
            };

            var getConsumerGroups = function getConsumerGroups() {
              return _this8.topicService.getConsumerGroupsForTopic(name, _this8.environment);
            };

            _this8.topicUpdateSubscription = Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_1__["pull"])(getTopicDetails, function (topic) {
              _this8.messagesPerSec = _this8.calculateMessagePerSec(topic);
              _this8.lastUpdate = Date.now();
              _this8.topic = topic;
            }).subscribe();
            _this8.consumerGroupsUpdateSubscription = Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_1__["pull"])(getConsumerGroups, function (cGroups) {
              return _this8.consumerGroups = cGroups;
            }, _this8.CONSUMER_GROUP_PULL_INTERVAL_MS).subscribe();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_1__["unsubscribe"])(this.topicUpdateSubscription);
          Object(_utils_pulling__WEBPACK_IMPORTED_MODULE_1__["unsubscribe"])(this.consumerGroupsUpdateSubscription);
        }
      }, {
        key: "getLastMessage",
        value: function getLastMessage(partition) {
          var _this9 = this;

          this.topicService.getLastMessage(this.topic.name, partition.partitionNumber, this.environment).subscribe(function (message) {
            if (typeof message === 'object') {
              _this9.message = JSON.stringify(message);
            } else {
              _this9.message = message;
            }
          }, function (error) {
            _this9.errorService.showError(error.error);
          });
        }
      }, {
        key: "onDeleteConfirmation",
        value: function onDeleteConfirmation(shouldDelete) {
          if (shouldDelete) {
            this.delete();
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this10 = this;

          this.topicService.deleteTopic(this.topic.name, this.environment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (val) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(val.error);
          })).subscribe(function (error) {
            if (error) {
              _this10.errorService.showError(error);
            } else {
              _this10.router.navigateByUrl('/' + _this10.environment + '/topics');
            }
          });
        }
      }, {
        key: "calculateMessagePerSec",
        value: function calculateMessagePerSec(newTopicData) {
          if (this.topic === undefined) {
            return 0;
          } else {
            var newMessages = newTopicData.messages - this.topic.messages;
            var secPassed = (Date.now() - this.lastUpdate) / 1000;
            return Math.round(newMessages / secPassed * 100) / 100;
          }
        }
      }]);

      return TopicDetailsComponent;
    }();

    TopicDetailsComponent.ɵfac = function TopicDetailsComponent_Factory(t) {
      return new (t || TopicDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service_service__WEBPACK_IMPORTED_MODULE_6__["ErrorServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    TopicDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopicDetailsComponent,
      selectors: [["app-topic-details"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "topic-info"], [4, "ngFor", "ngForOf"], ["id", "lastMessageBox"], ["buttonName", "Delete", 3, "message", "confirmationResult"], [3, "click"], [3, "routerLink"]],
      template: function TopicDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopicDetailsComponent_div_0_Template, 36, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topic !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".topic-info[_ngcontent-%COMP%] {\r\n  margin-top: 1em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.topic-info[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 0 0 0.3em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtZGV0YWlscy90b3BpYy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdG9waWMtZGV0YWlscy90b3BpYy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9waWMtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi50b3BpYy1pbmZvID4gcCB7XHJcbiAgICBtYXJnaW46IDAgMCAwLjNlbSAwO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topic-details',
          templateUrl: './topic-details.component.html',
          styleUrls: ['./topic-details.component.css']
        }]
      }], function () {
        return [{
          type: _topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _error_service_service__WEBPACK_IMPORTED_MODULE_6__["ErrorServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topic.service.ts":
  /*!**********************************!*\
    !*** ./src/app/topic.service.ts ***!
    \**********************************/

  /*! exports provided: TopicService */

  /***/
  function srcAppTopicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicService", function () {
      return TopicService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _kafka_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kafka-environment.service */
    "./src/app/kafka-environment.service.ts");

    var TopicService =
    /*#__PURE__*/
    function () {
      function TopicService(httpClient, kafkaEnvironmentService) {
        _classCallCheck(this, TopicService);

        this.httpClient = httpClient;
        this.kafkaEnvironmentService = kafkaEnvironmentService;
        this.serverUrl = 'http://localhost:8080/api/';
      }

      _createClass(TopicService, [{
        key: "getTopics",
        value: function getTopics(environment) {
          return this.httpClient.get(this.serverUrl + environment + '/topics');
        }
      }, {
        key: "getTopic",
        value: function getTopic(name, environment) {
          return this.httpClient.get(this.serverUrl + environment + '/topics/' + name);
        }
      }, {
        key: "getConsumerGroupsForTopic",
        value: function getConsumerGroupsForTopic(topicName, environment) {
          return this.httpClient.get(this.serverUrl + environment + '/topics/' + topicName + '/consumer-groups');
        }
      }, {
        key: "getLastMessage",
        value: function getLastMessage(topic, partitionNumber, environment) {
          var url = this.serverUrl + environment + '/topics/' + topic + '/' + partitionNumber + '/lastMessage';
          return this.httpClient.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteTopic",
        value: function deleteTopic(topic, environment) {
          var url = this.serverUrl + environment + '/topics/' + topic;
          return this.httpClient.delete(url);
        }
      }]);

      return TopicService;
    }();

    TopicService.ɵfac = function TopicService_Factory(t) {
      return new (t || TopicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_kafka_environment_service__WEBPACK_IMPORTED_MODULE_2__["KafkaEnvironmentService"]));
    };

    TopicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TopicService,
      factory: TopicService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _kafka_environment_service__WEBPACK_IMPORTED_MODULE_2__["KafkaEnvironmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topic/topic.component.ts":
  /*!******************************************!*\
    !*** ./src/app/topic/topic.component.ts ***!
    \******************************************/

  /*! exports provided: TopicComponent */

  /***/
  function srcAppTopicTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicComponent", function () {
      return TopicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../topic.service */
    "./src/app/topic.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopicComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", topic_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r3.messages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r3.partitionCount);
      }
    }

    var TopicComponent =
    /*#__PURE__*/
    function () {
      function TopicComponent(topicService, route) {
        _classCallCheck(this, TopicComponent);

        this.topicService = topicService;
        this.route = route;
        this.topics = [];
        this.displayTopics = [];
      }

      _createClass(TopicComponent, [{
        key: "onFilterInput",
        value: function onFilterInput(event) {
          var filterValue = event.target.value.toLowerCase();

          if (filterValue === undefined || filterValue === '') {
            this.displayTopics = this.topics;
          } else {
            this.displayTopics = this.topics.filter(function (topic) {
              return topic.name.toLowerCase().includes(filterValue);
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.params.subscribe(function (params) {
            _this11.topicService.getTopics(params.environment).subscribe(function (topics) {
              _this11.topics = topics;
              _this11.displayTopics = topics;
            });
          });
        }
      }, {
        key: "partitionString",
        value: function partitionString(topic) {
          return topic.partitions.map(function (it) {
            return it.name;
          }).toString();
        }
      }]);

      return TopicComponent;
    }();

    TopicComponent.ɵfac = function TopicComponent_Factory(t) {
      return new (t || TopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topic_service__WEBPACK_IMPORTED_MODULE_1__["TopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    TopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopicComponent,
      selectors: [["app-topic"]],
      decls: 14,
      vars: 1,
      consts: [[1, "filter"], ["for", "filter-input", 1, "filter-label"], ["id", "filter-input", 1, "filter-input", 3, "keyup"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function TopicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TopicComponent_Template_input_keyup_4_listener($event) {
            return ctx.onFilterInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Partitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopicComponent_tr_13_Template, 8, 4, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayTopics);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topic',
          templateUrl: './topic.component.html',
          styleUrls: ['./topic.component.css']
        }]
      }], function () {
        return [{
          type: _topic_service__WEBPACK_IMPORTED_MODULE_1__["TopicService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/pulling.ts":
  /*!**********************************!*\
    !*** ./src/app/utils/pulling.ts ***!
    \**********************************/

  /*! exports provided: pull, unsubscribe */

  /***/
  function srcAppUtilsPullingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pull", function () {
      return pull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unsubscribe", function () {
      return unsubscribe;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function pull(getter, updater) {
      var delayMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_) {
        return getter();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(updater), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["repeat"])());
    }

    function unsubscribe(subscription) {
      if (subscription) {
        subscription.unsubscribe();
      }
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Workspaces\kafka-browser\kafka-browser-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map