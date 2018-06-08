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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Life.ts":
/*!*************************!*\
  !*** ./src/app/Life.ts ***!
  \*************************/
/*! exports provided: Life */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Life", function() { return Life; });
var Life = /** @class */ (function () {
    function Life() {
    }
    return Life;
}());



/***/ }),

/***/ "./src/app/ability.ts":
/*!****************************!*\
  !*** ./src/app/ability.ts ***!
  \****************************/
/*! exports provided: Ability */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ability", function() { return Ability; });
var Ability = /** @class */ (function () {
    function Ability() {
    }
    return Ability;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _life_life_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./life/life.component */ "./src/app/life/life.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _life_detail_life_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./life-detail/life-detail.component */ "./src/app/life-detail/life-detail.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'life', component: _life_life_component__WEBPACK_IMPORTED_MODULE_2__["LifeComponent"], outlet: 'primary',
        children: [
            { path: 'detail/:id', redirectTo: '/detail/:id(tutorial:detail)', pathMatch: 'full' },
        ] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], outlet: 'primary' },
    { path: 'life', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["TutorialComponent"], outlet: 'tutorial'
    },
    { path: 'menu', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["TutorialComponent"], outlet: 'tutorial' },
    { path: '', redirectTo: '/dashboard(tutorial:menu)', pathMatch: 'full' },
    { path: 'detail/:id', component: _life_detail_life_detail_component__WEBPACK_IMPORTED_MODULE_4__["LifeDetailComponent"], outlet: 'primary' },
    { path: 'detail', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["TutorialComponent"], outlet: 'tutorial' }
    /*,children:[
    {
      path: '',
      component: TutorialComponent,
      outlet:'tutorial'
    }]*/
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #333;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\ndiv {\r\n background-color: #f0f8ffd6;\r\n     height: auto;\r\n    min-height: -webkit-fill-available;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <nav>\r\n <!--<a routerLink=\"/dashboard\">Menu</a>\r\n\t  <a routerLink=\"/life\">Lifes</a>\r\n\t   <a routerLink=\"detail/0\">Novo</a>-->\r\n\t  <a [routerLink]=\"[{outlets:{tutorial:'menu',primary:'dashboard'}}]\">Menu</a>\r\n\t  <a [routerLink]=\"[{outlets:{tutorial:'life',primary:'life'}}]\">Lifes</a>\r\n\t   <a [routerLink]=\"[{outlets:{tutorial:'detail',primary:'detail/0'}}]\">Novo</a>\r\n\t</nav>\r\n\r\n  <router-outlet name=\"primary\"></router-outlet>\r\n  <app-messages></app-messages>\r\n  <router-outlet name=\"tutorial\"></router-outlet>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'IKRPG GM Sheet Control';
        this.backcount = 1;
        this.backmax = 3;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.style.background = "URL(assets/back1.jpg)";
        document.body.style.backgroundSize = "cover";
        setInterval(function () {
            _this.changeBack();
        }, 5000);
        /*setInterval(
        this.changeBack()
        ,2000);   */
    };
    AppComponent.prototype.changeBack = function () {
        if (this.backcount == this.backmax) {
            this.backcount = 1;
        }
        else {
            this.backcount++;
        }
        var image = "URL(assets/back" + this.backcount + ".jpg)";
        document.body.style.background = image;
        document.body.style.backgroundSize = "cover";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _life_life_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./life/life.component */ "./src/app/life/life.component.ts");
/* harmony import */ var _life_detail_life_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./life-detail/life-detail.component */ "./src/app/life-detail/life-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _life_search_life_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./life-search/life-search.component */ "./src/app/life-search/life-search.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _life_life_component__WEBPACK_IMPORTED_MODULE_4__["LifeComponent"],
                _life_detail_life_detail_component__WEBPACK_IMPORTED_MODULE_5__["LifeDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _life_search_life_search_component__WEBPACK_IMPORTED_MODULE_12__["LifeSearchComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], { dataEncapsulation: false }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n\r\n}\r\n.col-1-4 {\r\n  width: 50%;\r\n\r\n}\r\n.module {\r\n  padding: 10px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 80px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 120px;\r\n  }\r\n}\r\n.hidden{\r\n\tdisplay:none;\r\n}\r\nlabel {\r\n  /*display: inline-block;*/\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n\r\n  \r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\ninput[type=\"number\"]{\r\n\twidth:50px;\r\n}\r\nbutton {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nbutton:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n*:focus {\r\n\t-webkit-animation: blink 0.85s step-end infinite alternate; \r\n}\r\n@-webkit-keyframes blink { 50% { border-color: aqua;background-color: aqua; }  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"grid grid-pad\">\r\n  <!--a *ngFor=\"let life of lifes\" class=\"col-1-4\"\r\n   routerLink=\"/detail/{{life.id}}\">\r\n    <div class=\"module life\">\r\n      <h4>{{life.name}}</h4>\r\n    </div>\r\n  </a-->\r\n  <div>\r\n  <input type=\"text\" id=\"namefile\" value=\"lifes\" placeholder=\"Name of file\">\r\n  <button id=\"savebutton\" (click)=\"saveTextAsFile()\">Export lifes</button>\r\n  <input type=\"file\" id=\"importedfile\">\r\n  <button id=\"readbutton\" (click)=\"readtext()\">Read file</button> <!--problema de sincronia-->\r\n  <!-- não funciona <button (click)=\"deleteAll()\">Limpar</button> -->\r\n  <textarea class=\"hidden\" id=\"arearesp\"></textarea>\r\n  <div id=\"divready\" class=\"hidden\">\r\n  <label>Ready to load!</label>\r\n  <button id=\"loadbutton\" (click)=\"importLifes()\">Import lifes</button> <!--problema de sincronia-->\r\n  </div>\r\n  <div>\r\n  <br>\r\n  <div>\r\n  <input type=\"number\" id=\"inicvalue\" placeholder=\"init value\">\r\n  :\r\n  <input type=\"text\" id=\"inicname\" placeholder=\"Name\">\r\n  <button id=\"inicbutton\" (click)=\"addInic()\">add</button>\r\n  <button id=\"inicclearbutton\" (click)=\"clearInic()\">clean</button>\r\n  </div>\r\n  <br>\r\n  <table border=\"1px\" align=\"left\">\r\n  <tr>\r\n\t<th>init</th>\r\n\t<th>name</th>\r\n  </tr>\r\n  <tr *ngFor=\"let inic of this.inics\">\r\n\t<td >{{inic.id}}</td>\r\n\t<td *ngFor=\"let name of inic.names\">{{name}}</td>\r\n  </tr>\r\n  \r\n  </table>\r\n</div>\r\n<app-life-search></app-life-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../life.service */ "./src/app/life.service.ts");
/* harmony import */ var _iniciativa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iniciativa.service */ "./src/app/iniciativa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(lifeService, iniciativaService) {
        this.lifeService = lifeService;
        this.iniciativaService = iniciativaService;
        this.lifes = [];
        this.inics = [];
        this.ordenedinics = new Array();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getLifes();
        this.getInics();
    };
    DashboardComponent.prototype.start = function (inics) {
        for (var l = 0; l < inics.length; l++) {
            this.ordenedinics[inics[l].id] = inics[l].names;
        }
        this.sort();
    };
    DashboardComponent.prototype.sort = function () {
        this.inics = [];
        for (var i = this.ordenedinics.length - 1; i >= 0; i--) {
            if (this.ordenedinics[i] != undefined) {
                var names = this.ordenedinics[i];
                var id = i;
                var newinic = { id: id, names: names };
                this.inics.push(newinic);
            }
        }
    };
    DashboardComponent.prototype.getLifes = function () {
        var _this = this;
        this.lifeService.getLifes()
            .subscribe(function (lifes) { return _this.lifes = lifes; }); //.slice(0, 2)
    };
    DashboardComponent.prototype.getInics = function () {
        var _this = this;
        this.iniciativaService.getInics()
            .subscribe(function (iniciativas) { return _this.start(iniciativas); });
    };
    DashboardComponent.prototype.saveTextAsFile = function () {
        var namefile = document.getElementById("namefile");
        var filename = namefile.value;
        var data = JSON.stringify(this.lifes);
        var blob = new Blob([data], { type: 'text/plain' }), e = document.createEvent('MouseEvents'), a = document.createElement('a');
        // FOR IE:
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            var e_1 = document.createEvent('MouseEvents'), a_1 = document.createElement('a');
            a_1.download = filename;
            a_1.href = window.URL.createObjectURL(blob);
            a_1.dataset.downloadurl = ['text/plain', a_1.download, a_1.href].join(':');
            e_1.initEvent('click', true, false); /*, window,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);*/
            a_1.dispatchEvent(e_1);
        }
    };
    /*problema de sincronia*/
    DashboardComponent.prototype.readtext = function () {
        var importedfile = document.getElementById("importedfile");
        var reader = new FileReader();
        reader.onloadend = function (e) {
            var target = e.target;
            var data = target.result;
            var arearesp = document.getElementById("arearesp");
            arearesp.value = data;
            var dr = document.getElementById("divready");
            dr.classList.remove('hidden');
        };
        reader.readAsText(importedfile.files[0]);
    };
    DashboardComponent.prototype.importLifes = function () {
        var arearesp = document.getElementById("arearesp");
        var importedlifes = JSON.parse(arearesp.value);
        for (var i = 0; i < importedlifes.length; i++) {
            this.add(importedlifes[i]);
        }
        var dr = document.getElementById("divready");
        dr.classList.add('hidden');
    };
    DashboardComponent.prototype.add = function (l) {
        this.lifeService.addLife(l).subscribe(function (life) {
            l = life;
        });
    };
    /* não funciona
    deleteAll(): void{
        let listId=new Array();
        for(let i=0;i<this.lifes.length;i++){
          listId.push(this.lifes[i].id);
        }
        for(let i=0;i<listId.length;i++){
          
          this.lifeService.deleteLife(listId[i]).subscribe();
          
        }
        
         
    }*/
    DashboardComponent.prototype.addInic = function () {
        var pos = document.getElementById("inicvalue");
        var name = document.getElementById("inicname");
        if (this.ordenedinics[+pos.value] == undefined) {
            this.ordenedinics[+pos.value] = new Array();
        }
        this.ordenedinics[+pos.value].push(name.value);
        this.sort();
        //não pode ficar dentro do for
        var names = this.ordenedinics[+pos.value];
        var id = +pos.value;
        var newinic = { id: id, names: names };
        if (names.length > 1) {
            this.iniciativaService.updateInic(newinic)
                .subscribe();
        }
        else {
            this.iniciativaService.addInic(newinic).subscribe(function (inic) {
                newinic = inic;
            });
        }
        /* let pos=  <HTMLInputElement>  document.getElementById("inicvalue");
         let name=  <HTMLInputElement>  document.getElementById("inicname");
         let has=false;
         for(let i=0;i<this.inics.length;i++){
             if(this.inics[i].value==+pos.value){
                 this.inics[i].names.push(name.value);
                 has=true;
                 break;
             }
         }
         if(!has){
             let value:number =+pos.value;
             let names:String[]=[];
             names.push(name.value);
             this.inics.push({value,names} as Iniciativa);
         }*/
    };
    DashboardComponent.prototype.clearInic = function () {
        for (var l = 0; l < this.inics.length; l++) {
            this.iniciativaService.deleteInic(this.inics[l].id).subscribe();
        }
        this.inics = [];
        this.ordenedinics = [];
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_life_service__WEBPACK_IMPORTED_MODULE_1__["LifeService"], _iniciativa_service__WEBPACK_IMPORTED_MODULE_2__["IniciativaService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var lifes = [
            { id: 1, name: 'BoneSwarm', type: 'espiral', value: '10,6,4,0', base: "medium", spd: 5, arm: 15, def: 13, inc: 13, von: 11, arc: 3, cmd: 0, thr: 9,
                melleweapons: [
                    { name: 'bone strike', hit: 6, pod: 4, pf: 12, note: 'inimigos no alcance não avançam, só viram' }
                ],
                rangeweapons: [],
                abilities: [
                    { name: 'Terro', desc: '14', pg: 'u366' }
                ],
                magics: [
                    { name: 'swarm', cost: '2', alc: 'cjr', ade: 2, pod: 0, man: false, off: false, note: 'inimigos -2 atk' }
                ]
            }
        ];
        var iniciativas = [];
        var infos = [
            { id: 'menuoi', text: [
                    'Bem vindo a página de menu', 'Welcome to menu page '
                ], for: '', pos: 0 },
            { id: 'lifeoi', text: [
                    'Bem vindo a página de planilhas', 'Welcome to sheet page '
                ], for: '', pos: 0 },
            { id: 'detailoi', text: [
                    'Bem vindo a página de detalhe', 'Welcome to detail page '
                ], for: '', pos: 0 },
            { id: 'menuintro', text: [
                    'Nesta página você pode salvar e carregar suas fichas, e também adicionar iniciativas',
                    'In this page you can save and load your sheets, and add initiatives as well'
                ], for: '', pos: 1 },
            { id: 'menuinic', text: [
                    'para adicionar uma iniciativa preencha os campos (primeiro com valor',
                    'to add an initiative fulfil the blanks (the first with value'
                ], for: 'inicvalue', pos: 2 },
            { id: 'menuinic', text: [
                    'e segundo com nome)',
                    'and the second with name)'
                ], for: 'inicname', pos: 2 },
            { id: 'menuinic', text: [
                    'e clique no botão ao lado',
                    'click on the button at side'
                ], for: 'inicbutton', pos: 2 },
            { id: 'menuinicclear', text: [
                    'para remover todas as iniciativas clique no botão clean',
                    'to remove all initiatives just click on the clean button'
                ], for: 'inicclearbutton', pos: 2 },
            { id: 'menuname', text: [
                    'para salvar suas planilhas escolha o nome do arquivo',
                    'to save your sheets tip a name for the file'
                ], for: 'namefile', pos: 3 },
            { id: 'menusave', text: [
                    'e clique no botão ao lado',
                    'and click on the button at side'
                ], for: 'savebutton', pos: 3 },
            { id: 'menuread', text: [
                    'para carregar suas planilhas escolha um arquivo(json)',
                    'to load your sheets choose a file(json)'
                ], for: 'importedfile', pos: 4 },
            { id: 'menuread', text: [
                    ' e clique no botão ao lado',
                    ' and click on the button at side'
                ], for: 'readbutton', pos: 4 },
            { id: 'menuload', text: [
                    'após aparecer amensagem de pronto clique no botão ao lado',
                    'after showing the message of ready click on the button at side'
                ], for: 'loadbutton', pos: 4 },
            { id: 'lifeintro', text: [
                    'Nesta página você pode ver o nome de suas planilhas e deletar alguma',
                    'In this page you can see the name of your sheets and delete someone'
                ], for: '', pos: 1 },
            { id: 'lifeid', text: [
                    'você vê o id de sua planilha aqui',
                    'you see the id of your sheet here'
                ], for: 'lifeid0', pos: 2 },
            { id: 'lifelist', text: [
                    'para ver mais detalhado clique sobre um nome',
                    'to see more details click on the name'
                ], for: 'lifelink0', pos: 2 },
            { id: 'lifedelete', text: [
                    'para deletar clique no botão de x',
                    'to delete click on the x button'
                ], for: 'lifebutton0', pos: 2 }
        ];
        return { lifes: lifes, iniciativas: iniciativas, infos: infos };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/info.service.ts":
/*!*********************************!*\
  !*** ./src/app/info.service.ts ***!
  \*********************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoService = /** @class */ (function () {
    function InfoService(http) {
        this.http = http;
        this.infoUrl = 'api/infos'; //return do in memory
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    InfoService.prototype.getInfo = function (id) {
        var url = this.infoUrl + "/" + id;
        return this.http.get(url).pipe();
    };
    InfoService.prototype.getInfos = function (aba) {
        return this.http.get(this.infoUrl + "/?id=" + aba)
            .pipe();
    };
    InfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/app/iniciativa.service.ts":
/*!***************************************!*\
  !*** ./src/app/iniciativa.service.ts ***!
  \***************************************/
/*! exports provided: IniciativaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciativaService", function() { return IniciativaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IniciativaService = /** @class */ (function () {
    function IniciativaService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.inicUrl = 'api/iniciativas'; //return do in memory
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    IniciativaService.prototype.getInics = function () {
        var _this = this;
        this.messageService.add('IniciativaService: fetched inics');
        return this.http.get(this.inicUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (iniciativas) { return _this.log('fetched inics'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getInics', [])));
        //return of(LIFES);
    };
    IniciativaService.prototype.addInic = function (inic) {
        var _this = this;
        return this.http.post(this.inicUrl, inic, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (inic) { return _this.log("added inic w/ id=" + inic.id + " and names=" + inic.names); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addInic')));
    };
    IniciativaService.prototype.updateInic = function (inic) {
        var _this = this;
        return this.http.put(this.inicUrl, inic, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated inic id=" + inic.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateInic')));
    };
    IniciativaService.prototype.deleteInic = function (id) {
        var _this = this;
        var url = this.inicUrl + "/" + id;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted inic cursed id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteInic')));
    };
    IniciativaService.prototype.log = function (message) {
        this.messageService.add('IniciativaService: ' + message);
    };
    IniciativaService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    IniciativaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], IniciativaService);
    return IniciativaService;
}());



/***/ }),

/***/ "./src/app/life-detail/life-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/life-detail/life-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  /*display: inline-block;*/\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n\r\n  \r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\ninput[type=\"number\"]{\r\n\twidth:50px;\r\n}\r\nselect {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #ddd;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n  float:center;\r\n}\r\nbutton:hover {\r\n  background-color: #27ace8;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n.firsts {\r\n\tfloat: left;\r\n\ttop: 19px;\r\n    position: relative;\r\n}\r\n.container{\r\n\tfloat: left;\r\n\twidth: 12%;\r\n\tmin-width: 222px;\r\n}\r\n.radio{\r\n\tbackground-color: #a77e2d !important;\r\n  color: #ffffff !important;\r\n}\r\n.top{\r\n\tposition: relative;\r\n    margin-left: -25px;\r\n}\r\n.bot{\r\n\ttop: 39px;\r\n    position: relative;\r\n\tleft: -27px;\r\n}\r\n.agidiv{\r\n\theight: 70px;\r\n\tbackground: #12ff1073;\r\n\tmargin-left: 43%;\r\n    width: 326px;\r\n    min-width: 326px;\r\n}\r\n.fisdiv{\r\n\theight: 70px;\r\n\tbackground: #e8121273;\r\n\tmargin-left: 43%;\r\n    width: 326px;\r\n    min-width: 326px;\r\n}\r\n.intdiv{\r\n\theight: 70px;\r\n\tbackground: #039be573;\r\n\tmargin-left: 43%;\r\n    width: 326px;\r\n    min-width: 326px;\r\n}\r\n.damaged {\r\n\tbackground: red !important;;\r\n    color: #03ff24;\r\n}\r\n.bodygrid {\r\n\tcolor:#ffffff00  !important;\r\n}\r\n.offgrid {\r\n\tbackground: #1f0400 !important;\r\n\tcolor:#ffffff00;\r\n}\r\ntable{\r\n\tmargin-top: 10px;\r\n}\r\ntable button{\r\n\tmargin-top: 0px !important;\r\n\tmin-width: 34px;\r\n}\r\n.local{\r\n\twidth: 20px;\r\n    height: 13px;\r\n    position: relative;\r\n    top: 2px;\r\n    left: -8px;\r\n    padding: 0px;\r\n\tborder-color: #ffffff00;\r\n    background: #ffffff00;\r\n    color: brown;\r\n}\r\n.pg{\r\n\twidth: 64px;\r\n}\r\n.desc{\r\n\theight: 59px;\r\n}\r\n.gridcomp{\r\n\theight: 25px;\r\n}\r\n.tablegrid{\r\n\t/*background-image: url(assets/grid.png);*/\r\n    /*background-size: cover;*/\r\n\twidth: 254px;\r\n    height: 269px;\r\n\tbackground-size: cover;\r\n}\r\n.gridbuton{\r\n\tborder-radius: 0px;\r\n    height: 34px;\r\n    top: -2px;\r\n    position: relative;\r\n\tbackground:#ffffff00;\r\n\t    font-size: 15px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n}\r\n.inputdesc{\r\n    width: 76%;\r\n}\r\n.vitcheck{\r\n\ttop: 12px;\r\n    position: relative;\r\n\r\n}\r\n.vitcheck:checked {\r\n    background-color: #a3b1b39c;\r\n}\r\n.spirallabel {\r\n\ttop: 19px;\r\n    float: left;\r\n    position: relative;\r\n    color: black;\r\n    left: -45px;\r\n}\r\ninput[type=\"checkbox\"]{\r\n\twidth: 1.3em;\r\n    height: 1.3em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #060606;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.fisdiv input[type=\"checkbox\"]:checked{\r\n\tbackground-color: #aa0000bb;\r\n}\r\n.agidiv input[type=\"checkbox\"]:checked{\r\n\tbackground-color: #1b791eb0;\r\n}\r\n.intdiv input[type=\"checkbox\"]:checked{\r\n\tbackground-color: #1b30c19e;\r\n}\r\n.fieldcheck:checked{\r\n\tbackground-color: #14cfe2bb;\r\n}\r\ntable input[type=\"checkbox\"]:checked{\r\n\tbackground-color: #03ff24;\r\n}"

/***/ }),

/***/ "./src/app/life-detail/life-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/life-detail/life-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"life\">\n\t<!--div><span>{{life.name | uppercase }} </span></div>\n\t<div><span>Tipo: </span>{{life.type }}</div>\n\t<div><span>Total: </span>{{life.value}}</div-->\n    <label>New Name:\n      <input [(ngModel)]=\"life.name\" placeholder=\"name\" />\n    </label>\n\t<br>\n\t<label>\n\t\tNew Base:\n\t\t<select  [(ngModel)]=\"life.base\"  >\n\t  <option value=\"small\">Small</option>\n\t  <option value=\"medium\">Medium</option>\n\t  <option value=\"large\">Large</option>\n\t  </select>\n\t</label>\n\t<br>\n\t<label>\n\t\tNew Type:\n\t\t<select (change)=\"setdefault()\" [(ngModel)]=\"life.type\"  >\n\t  <option value=\"vitalidade\">Vitality</option>\n\t  <option value=\"espiral\">Spiral</option>\n\t  <option value=\"grid\">Warjack</option>\n\t  </select>\n\t</label>\n\t<br>\n\t<label>\n\t<!--  status  -->\n\tSPD:<input type=\"number\" [(ngModel)]=\"life.spd\" placeholder=\"spd\" />\n\tARM:<input type=\"number\" [(ngModel)]=\"life.arm\" placeholder=\"arm\" />\n\tDEF:<input type=\"number\" [(ngModel)]=\"life.def\" placeholder=\"def\" />\n\tINIT:<input type=\"number\" [(ngModel)]=\"life.inc\" placeholder=\"init\" />\n\tWILL:<input type=\"number\" [(ngModel)]=\"life.von\" placeholder=\"will\" />\n\tARC:<input type=\"number\" [(ngModel)]=\"life.arc\" placeholder=\"arc\" />\n\tCMD:<input type=\"number\" [(ngModel)]=\"life.cmd\" placeholder=\"cmd\" />\n\tTHR:<input type=\"number\" [(ngModel)]=\"life.thr\" placeholder=\"Threshold\" />\n\t</label>\n\t<!--div [ngSwitch]=\"life.type\">\n\t\t<div *ngSwitchCase=\"'vitalidade'\">\n\t\t<input [(ngModel)]=\"life.value\" placeholder=\"quantidade\" />\n\t\t</div>\n\t\t<div *ngSwitchCase=\"'espiral'\">\n\t\t<input [(ngModel)]=\"life.value\" placeholder=\"fis,agi,int\" />\n\t\t</div>\n\t\t<div *ngSwitchCase=\"'grid'\">\n\t\t<input [(ngModel)]=\"life.value\" placeholder=\"caixas\" />\n\t\t</div>\n\t</div-->\n\t<div  *ngIf=\"life.type === 'vitalidade'\">\n\t\n\t<!--input [(ngModel)]=\"life.value\" placeholder=\"quantidade\" /-->\n\t<!--[checked]=\"i < life.value\" não funcionou, logo tive que trapaçear-->\n\t<!--  vit  -->\n\t<button (click)=\"addVitality()\"><label>Add new Vitality bar</label></button>\n\t<button (click)=\"delVitality()\"><label>Remove last Vitality bar</label></button>\n\t<div *ngFor=\"let vit of getVitalities(),let i = index\">\n\t\n\t<label class=\"vitcheck\">{{i+1}}:</label><input class=\"vitcheck\" id=\"cb{{i}}{{c}}\" (change)=\"vitalityup(i,c)\" type=\"checkbox\" *ngFor=\"let c of numerica(0,15)\" [checked]=\"c< vit\" /><label class=\"vitcheck\">{{vit}}</label>\n\t\n\t\n\t</div>\n\t\n\t<!--input  (click)=\"vitalityup(this.checked)\" type=\"checkbox\" *ngFor=\"let i of numerica(+life.value,15)\" /-->\n\t</div>\n\t\n\t<div *ngIf=\"life.type === 'espiral'\">\n\t\n\t\n\t<!--  Fis  -->\n\t<div class=\"fisdiv\">\n\t\n\t<div class=\"firsts\">\n\t<input  id=\"cbf{{i}}\" (change)=\"fisup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(0,2)\" [checked]=\"i< getFis()\" />\n\t</div>\n\t<div class=\"container\">\n\t\t<input [class.top]=\"i%2==0\" [class.bot]=\"i%2==1\"  id=\"cbf{{i}}\" (change)=\"fisup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(2,16)\" [checked]=\"i< getFis()\" />\n\t</div>\n\t<label class=\"spirallabel\">{{getFis()}}</label>\n\t</div>\n\t\n\t<!--  Agi  -->\n\t<div class=\"agidiv\">\n\t\n\t<div class=\"firsts\">\n\t<input  id=\"cba{{i}}\" (change)=\"agiup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(0,2)\" [checked]=\"i< getAgi()\" />\n\t</div>\n\t<div class=\"container\">\n\t\t<input [class.top]=\"i%2==0\" [class.bot]=\"i%2==1\"  id=\"cba{{i}}\" (change)=\"agiup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(2,16)\" [checked]=\"i< getAgi()\" />\n\t</div>\n\t<label class=\"spirallabel\">{{getAgi()}}</label>\n\t</div>\n\t\n\t<!--  Int  -->\n\t<div class=\"intdiv\">\n\t\n\t<div class=\"firsts\">\n\t<input class=\"btn-primary\" id=\"cbi{{i}}\" (change)=\"intup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(0,2)\" [checked]=\"i< getInt()\" />\n\t</div>\n\t<div class=\"container\">\n\t\t<input [class.top]=\"i%2==0\" [class.bot]=\"i%2==1\" id=\"cbi{{i}}\" (change)=\"intup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(2,16)\" [checked]=\"i< getInt()\" />\n\t</div>\n\t<label class=\"spirallabel\">{{getInt()}}</label>\n\t</div>\n\t<br>\n\t<!--  field  -->\n\t<input class=\"fieldcheck\" id=\"cbd{{i}}\" (change)=\"fieldup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(0,6)\" [checked]=\"i< getField()\" />\n\t</div>\n\t<!--  grid  -->\n\t<div *ngIf=\"life.type === 'grid'\">\n\t\n\t\t<table  align=\"center\" class=\"tablegrid\" style=\"background-image: url(assets/grid.png)\">\n\t\t<tr class=\"gridcomp\">\n\t\t\t<th *ngFor=\"let i of numerica(0,6)\"></th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let l of numerica(0,6)\">\n\t\t\t<td *ngFor=\"let letra of getColumn(l),let x = index\">\n\t\t\t\t<button class=\"gridcomp gridbuton\" id=\"btn{{l}}{{x}}\" [class.damaged]=\"letra.indexOf('.')!=-1\" [class.offgrid]=\"letra.indexOf('x')!=-1\" [class.bodygrid]=\"letra.indexOf('o')!=-1\" (click)=\"callchoice($event)\">{{letra[0]}}</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t</table>\n\t\t<input class=\"fieldcheck\" id=\"cbgd{{i}}\" (change)=\"Gfieldup(i)\" type=\"checkbox\" *ngFor=\"let i of numerica(0,10)\" [checked]=\"i< getGField()\"/>\n\t</div>\n\t<!--  adds  -->\n\t<button (click)=\"addMeeleWepon()\"><label>New Meele Weapon</label></button>\n\t<button (click)=\"addRageWepon()\"><label>New Range Weapon</label></button>\n\t<button (click)=\"addAbility()\"><label>New Ability</label></button>\n\t<button (click)=\"addMagic()\"><label>New Magic</label></button>\n\t<br>\n\t<!--  weapons  -->\n\t<!--  meele weapons  -->\n\t<!--align=\"{{wep.local == 'd' ? 'right' : wep.local == 'e' ? 'left' : 'center' }}\"-->\n\t<table border=\"1px\" align=\"center\" *ngFor=\"let wep of life.melleweapons\">\n\t<tr>\n\t\t<th colspan=\"4\">\n\t\t<input [(ngModel)]=\"wep.name\" placeholder=\"name\" />\n\t\t<button (click)=\"deleteMeeleWeapon(wep)\">Remove</button>\n\t\t</th>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t<img src=\"assets/meele.png\" />\n\t\t\n\t\t<input class=\"local\" type=\"text\" [(ngModel)]=\"wep.local\" />\n\t\t</td>\n\t\t<td>\n\t\tMAT:<input type=\"number\" [(ngModel)]=\"wep.hit\" placeholder=\"mat\" />\n\t\t</td>\n\t\t<td>\n\t\tPOW:<input type=\"number\" [(ngModel)]=\"wep.pod\" placeholder=\"pow\" />\n\t\t</td>\n\t\t<td>\n\t\tS+P:<input type=\"number\" [(ngModel)]=\"wep.pf\" placeholder=\"s + p\" />\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"4\">Note:<input class=\"inputdesc\" [(ngModel)]=\"wep.note\" placeholder=\"note\" /></td>\n\t</tr>\n\t</table>\n\t<!--  range weapons  -->\n\t<!--align=\"{{wep.local == 'd' ? 'right' : wep.local == 'e' ? 'left' : 'center' }}\"-->\n\t<table border=\"1px\" align=\"center\" *ngFor=\"let wep of life.rangeweapons\">\n\t<tr>\n\t\t<th colspan=\"6\">\n\t\t<input [(ngModel)]=\"wep.name\" placeholder=\"name\" />\n\t\t<button (click)=\"deleteRangeWeapon(wep)\">Remove</button>\n\t\t</th>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t<img src=\"assets/range.png\" />\n\t\t<input class=\"local\" type=\"text\" [(ngModel)]=\"wep.local\" />\n\t\t</td>\n\t\t<td>\n\t\tRAT:<input type=\"number\" [(ngModel)]=\"wep.hit\" placeholder=\"rat\" />\n\t\t</td>\n\t\t<td>\n\t\tRNG:<input type=\"number\" [(ngModel)]=\"wep.alc\" placeholder=\"rng\" />\n\t\t</td>\n\t\t<td>\n\t\tROF:<input type=\"number\" [(ngModel)]=\"wep.munition\" placeholder=\"rof\" />\n\t\t</td>\n\t\t<td>\n\t\tAOE:<input type=\"number\" [(ngModel)]=\"wep.ade\" placeholder=\"aoe\" />\n\t\t</td>\n\t\t<td>\n\t\tPOW:<input type=\"number\" [(ngModel)]=\"wep.pod\" placeholder=\"pow\" />\n\t\t</td>\n\t\t\n\t\t\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"6\">Note:<input class=\"inputdesc\" [(ngModel)]=\"wep.note\" placeholder=\"note\" /></td>\n\t</tr>\n\t</table>\n\t<!--  abilities  -->\n\t<table border=\"1px\" align=\"center\" *ngFor=\"let ability of life.abilities,let i = index\">\n\t\t<tr *ngIf=\"i==0\">\n\t\t\t<th >NAME</th>\n\t\t\t<th >DESCRIPTION</th>\n\t\t\t<th >PAG</th>\n\t\t</tr>\n\t\t\n\t\t<tr >\n\t\t\t<td rowspan=\"2\">\n\t\t\t\t<input  type=\"text\" [(ngModel)]=\"ability.name\" placeholder=\"name\" />\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t\t<textarea class=\"desc\" placeholder=\"ability description\" [(ngModel)]=\"ability.desc\" ></textarea>\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input class=\"pg\" type=\"text\" [(ngModel)]=\"ability.pg\" placeholder=\"book + pag\" />\n\t\t\t\t\n\t\t\t</td>\n\t\t\t\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button (click)=\"deleteAbility(ability)\">x</button>\n\t\t\t</td>\n\t\t</tr>\n\t\n\t</table>\n\t<!--  Magic  -->\n\t<table border=\"1px\" align=\"center\" *ngFor=\"let magic of life.magics,let i = index\">\n\t\t<tr *ngIf=\"i==0\">\n\t\t\t<th >NAME</th>\n\t\t\t<th >COST</th>\n\t\t\t<th >RNG</th>\n\t\t\t<th >AOE</th>\n\t\t\t<th >POW</th>\n\t\t\t<th >UP</th>\n\t\t\t<th >OFF</th>\n\t\t</tr>\n\t\t\n\t\t<tr >\n\t\t\t<td >\n\t\t\t\t<input  type=\"text\" [(ngModel)]=\"magic.name\" placeholder=\"name\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input  type=\"number\" [(ngModel)]=\"magic.cost\" placeholder=\"cost\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input class=\"pg\" type=\"text\" [(ngModel)]=\"magic.alc\" placeholder=\"rng\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input  type=\"number\" [(ngModel)]=\"magic.ade\" placeholder=\"aoe\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input  type=\"number\" [(ngModel)]=\"magic.pod\" placeholder=\"pow\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input  type=\"checkbox\" [(ngModel)]=\"magic.man\" />\n\t\t\t</td>\n\t\t\t<td >\n\t\t\t\t<input  type=\"checkbox\" [(ngModel)]=\"magic.off\" />\n\t\t\t</td>\n\t\t\t\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"6\">\n\t\t\t\t<label>Note:</label><input class=\"inputdesc\" type=\"text\" [(ngModel)]=\"magic.note\" placeholder=\"note\" />\n\t\t\t\t<button (click)=\"deleteMagic(magic)\">x</button>\n\t\t\t</td>\n\t\t</tr>\n\t\n\t</table>\n\t<br>\n\n\t<button (click)=\"save()\">update</button>\n\t <button (click)=\"add();\">\n\t\tadd new\n\t  </button>\n\n</div> \n\n\n<button (click)=\"goBack()\">go back</button>"

/***/ }),

/***/ "./src/app/life-detail/life-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/life-detail/life-detail.component.ts ***!
  \******************************************************/
/*! exports provided: LifeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeDetailComponent", function() { return LifeDetailComponent; });
/* harmony import */ var _Life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Life */ "./src/app/Life.ts");
/* harmony import */ var _meeleweapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meeleweapon */ "./src/app/meeleweapon.ts");
/* harmony import */ var _rangeweapon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rangeweapon */ "./src/app/rangeweapon.ts");
/* harmony import */ var _ability__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ability */ "./src/app/ability.ts");
/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../magic */ "./src/app/magic.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _life_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../life.service */ "./src/app/life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LifeDetailComponent = /** @class */ (function () {
    function LifeDetailComponent(route, lifeService, location) {
        this.route = route;
        this.lifeService = lifeService;
        this.location = location;
        this.spirals = new Array();
        this.grid = new Array();
        this.letras = ['x', 'o', 'R', 'L', 'M', 'C', 'A', 'G'];
        this.vitalities = [];
    }
    LifeDetailComponent.prototype.ngOnInit = function () {
        this.getLife();
    };
    LifeDetailComponent.prototype.getLife = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id'); // put (+) in front of this to converto to number
        if (id == 0) {
            this.life = new _Life__WEBPACK_IMPORTED_MODULE_0__["Life"](); //({ 'mob', 'vitalidade', '0',[],[],'10','12','11','8' } as Life);
            this.life.rangeweapons = new Array();
            this.life.melleweapons = new Array();
            this.life.abilities = new Array();
            this.life.magics = new Array();
        }
        else {
            this.lifeService.getLife(id)
                .subscribe(function (life) { return _this.life = life; });
        }
    };
    LifeDetailComponent.prototype.save = function () {
        var _this = this;
        this.lifeService.updateLife(this.life)
            .subscribe(function () { return _this.goBack(); });
    };
    LifeDetailComponent.prototype.add = function () {
        var _this = this;
        this.life.id = undefined;
        this.lifeService.addLife(this.life).subscribe(function (life) {
            _this.life = life;
        });
    };
    LifeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    LifeDetailComponent.prototype.setdefault = function () {
        if (this.life.type == 'vitalidade') {
            this.life.value = '0';
        }
        else if (this.life.type == 'espiral') {
            this.life.value = '0,0,0';
        }
        else {
            this.life.value = 'o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;0';
        }
    };
    LifeDetailComponent.prototype.numerica = function (start, max) {
        var resp = new Array();
        while (start < max) {
            resp.push(start);
            start++;
        }
        return resp;
        //return new Array(max);
    };
    LifeDetailComponent.prototype.getVitalities = function () {
        if (this.vitalities.length < 1) {
            var vits = this.life.value.split(",");
            for (var i = 0; i < vits.length; i++) {
                this.vitalities.push(+vits[i]);
            }
        }
        return this.vitalities;
    };
    LifeDetailComponent.prototype.vitalityup = function (i, c) {
        var cb = document.getElementById("cb" + i + c);
        if (cb.checked) {
            this.vitalities[i]++;
        }
        else {
            this.vitalities[i]--;
        }
        this.life.value = this.vitalities.toString();
    };
    LifeDetailComponent.prototype.addVitality = function () {
        var n = this.vitalities[this.vitalities.length - 1];
        this.vitalities.push(n);
        this.life.value += "," + n;
    };
    LifeDetailComponent.prototype.delVitality = function () {
        if (this.vitalities.length > 1) {
            this.vitalities.pop();
            this.life.value = this.life.value.substring(0, this.life.value.lastIndexOf(','));
        }
    };
    LifeDetailComponent.prototype.checkSpiral = function () {
        if (this.spirals.length < 1) {
            var temp = this.life.value.split(',');
            this.spirals[0] = +temp[0];
            this.spirals[1] = +temp[1];
            this.spirals[2] = +temp[2];
            this.spirals[3] = +temp[3];
        }
    };
    LifeDetailComponent.prototype.getFis = function () {
        this.checkSpiral();
        return this.spirals[0];
    };
    LifeDetailComponent.prototype.fisup = function (i) {
        var cb = document.getElementById("cbf" + i);
        if (cb.checked) {
            this.spirals[0]++;
        }
        else {
            this.spirals[0]--;
        }
        this.life.value = this.spirals[0] + "," + this.spirals[1] + "," + this.spirals[2] + "," + this.spirals[3];
    };
    LifeDetailComponent.prototype.getAgi = function () {
        this.checkSpiral();
        return this.spirals[1];
    };
    LifeDetailComponent.prototype.agiup = function (i) {
        var cb = document.getElementById("cba" + i);
        if (cb.checked) {
            this.spirals[1]++;
        }
        else {
            this.spirals[1]--;
        }
        this.life.value = this.spirals[0] + "," + this.spirals[1] + "," + this.spirals[2] + "," + this.spirals[3];
    };
    LifeDetailComponent.prototype.getInt = function () {
        this.checkSpiral();
        return this.spirals[2];
    };
    LifeDetailComponent.prototype.intup = function (i) {
        var cb = document.getElementById("cbi" + i);
        if (cb.checked) {
            this.spirals[2]++;
        }
        else {
            this.spirals[2]--;
        }
        this.life.value = this.spirals[0] + "," + this.spirals[1] + "," + this.spirals[2] + "," + this.spirals[3];
    };
    LifeDetailComponent.prototype.getField = function () {
        this.checkSpiral();
        return this.spirals[3];
    };
    LifeDetailComponent.prototype.fieldup = function (i) {
        var cb = document.getElementById("cbd" + i);
        if (cb.checked) {
            this.spirals[3]++;
        }
        else {
            this.spirals[3]--;
        }
        this.life.value = this.spirals[0] + "," + this.spirals[1] + "," + this.spirals[2] + "," + this.spirals[3];
    };
    LifeDetailComponent.prototype.checkGrid = function () {
        if (this.grid.length < 1) {
            var temp = this.life.value.split(';');
            for (var i = 0; i < temp.length; i++) {
                this.grid.push(temp[i].split(','));
            }
        }
    };
    LifeDetailComponent.prototype.getColumn = function (i) {
        this.checkGrid();
        return this.grid[i];
    };
    LifeDetailComponent.prototype.getGField = function () {
        this.checkGrid();
        return +this.grid[6][0];
    };
    LifeDetailComponent.prototype.Gfieldup = function (i) {
        var novo = +this.grid[6][0];
        var cb = document.getElementById("cbgd" + i);
        if (cb.checked) {
            novo++;
        }
        else {
            novo--;
        }
        this.grid[6][0] = "" + novo;
        this.savegrid();
    };
    LifeDetailComponent.prototype.changeButton = function (l, c) {
        var temp = this.grid[l][c];
        var position = this.letras.indexOf(temp[0]);
        if (position == this.letras.length - 1) {
            position = 0;
        }
        else {
            position++;
        }
        this.grid[l][c] = this.letras[position];
        this.savegrid();
    };
    LifeDetailComponent.prototype.savegrid = function () {
        var novo = '';
        for (var l = 0; l < 6; l++) {
            for (var c = 0; c < 6; c++) {
                novo += this.grid[l][c];
                if (c < 5) {
                    novo += ",";
                }
            }
            if (l < 5) {
                novo += ";";
            }
        }
        this.life.value = novo + ";" + this.grid[6][0];
    };
    LifeDetailComponent.prototype.damageButton = function (l, c) {
        if (this.grid[l][c].indexOf('.') != -1) {
            this.grid[l][c] = this.grid[l][c][0];
        }
        else {
            this.grid[l][c] += '.';
        }
        this.savegrid();
        /*let btn=document.getElementById("btn"+l+c);
        if ( btn.classList.contains('damaged') ){
            btn.classList.remove('damaged');
        }else{
            btn.classList.add('damaged');
        }*/
    };
    LifeDetailComponent.prototype.callchoice = function (e) {
        var temp = e.srcElement.id.substring(3).split('');
        var l = +temp[0];
        var c = +temp[1];
        if (e.shiftKey || e.ctrlKey) {
            this.damageButton(l, c);
        }
        else {
            this.changeButton(l, c);
        }
    };
    LifeDetailComponent.prototype.addMeeleWepon = function () {
        var mw = new _meeleweapon__WEBPACK_IMPORTED_MODULE_1__["MeeleWeapon"]();
        this.life.melleweapons.push(mw);
    };
    LifeDetailComponent.prototype.addRageWepon = function () {
        var rw = new _rangeweapon__WEBPACK_IMPORTED_MODULE_2__["RangeWeapon"]();
        this.life.rangeweapons.push(rw);
    };
    LifeDetailComponent.prototype.addAbility = function () {
        var a = new _ability__WEBPACK_IMPORTED_MODULE_3__["Ability"]();
        this.life.abilities.push(a);
    };
    LifeDetailComponent.prototype.addMagic = function () {
        var m = new _magic__WEBPACK_IMPORTED_MODULE_4__["Magic"]();
        this.life.magics.push(m);
    };
    LifeDetailComponent.prototype.deleteMeeleWeapon = function (mw) {
        this.life.melleweapons = this.life.melleweapons.filter(function (m) { return m !== mw; });
    };
    LifeDetailComponent.prototype.deleteRangeWeapon = function (rw) {
        this.life.rangeweapons = this.life.rangeweapons.filter(function (r) { return r !== rw; });
    };
    LifeDetailComponent.prototype.deleteAbility = function (a) {
        this.life.abilities = this.life.abilities.filter(function (h) { return h !== a; });
    };
    LifeDetailComponent.prototype.deleteMagic = function (m) {
        this.life.magics = this.life.magics.filter(function (g) { return g !== m; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        __metadata("design:type", _Life__WEBPACK_IMPORTED_MODULE_0__["Life"])
    ], LifeDetailComponent.prototype, "life", void 0);
    LifeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-life-detail',
            template: __webpack_require__(/*! ./life-detail.component.html */ "./src/app/life-detail/life-detail.component.html"),
            styles: [__webpack_require__(/*! ./life-detail.component.css */ "./src/app/life-detail/life-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _life_service__WEBPACK_IMPORTED_MODULE_8__["LifeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], LifeDetailComponent);
    return LifeDetailComponent;
}());



/***/ }),

/***/ "./src/app/life-search/life-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/life-search/life-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LifeSearch private styles */\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result li:hover {\n  background-color: #607D8B;\n}\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result li a:hover {\n  color: white;\n}\n.search-result li a:active {\n  color: white;\n}\n#search-box {\n  width: 200px;\n  height: 20px;\n}\nul.search-result {\n  margin-top: 0;\n  padding-left: 0;\n}"

/***/ }),

/***/ "./src/app/life-search/life-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/life-search/life-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Life Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let life of lifes$ | async\" >\n      <a routerLink=\"/detail/{{life.id}}\">\n        {{life.name}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/life-search/life-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/life-search/life-search.component.ts ***!
  \******************************************************/
/*! exports provided: LifeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeSearchComponent", function() { return LifeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../life.service */ "./src/app/life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LifeSearchComponent = /** @class */ (function () {
    function LifeSearchComponent(lifeService) {
        this.lifeService = lifeService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    LifeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    LifeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lifes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.lifeService.searchLifes(term); }));
    };
    LifeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-life-search',
            template: __webpack_require__(/*! ./life-search.component.html */ "./src/app/life-search/life-search.component.html"),
            styles: [__webpack_require__(/*! ./life-search.component.css */ "./src/app/life-search/life-search.component.css")]
        }),
        __metadata("design:paramtypes", [_life_service__WEBPACK_IMPORTED_MODULE_3__["LifeService"]])
    ], LifeSearchComponent);
    return LifeSearchComponent;
}());



/***/ }),

/***/ "./src/app/life.service.ts":
/*!*********************************!*\
  !*** ./src/app/life.service.ts ***!
  \*********************************/
/*! exports provided: LifeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeService", function() { return LifeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { LIFES } from './mock-lifes'; // substituido pelo in memory




var LifeService = /** @class */ (function () {
    function LifeService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.lifeUrl = 'api/lifes'; //return do in memory
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    LifeService.prototype.getLifes = function () {
        var _this = this;
        // TODO: send the message _after_ fetching the lifes
        this.messageService.add('LifeSevice: fetched lifes');
        return this.http.get(this.lifeUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (lifes) { return _this.log('fetched lifes'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLifes', [])));
        //return of(LIFES);
    };
    LifeService.prototype.getLife = function (id) {
        var _this = this;
        // TODO: send the message _after_ fetching the life
        var url = this.lifeUrl + "/" + id; // will use a cursed fucking id, even if it doesn't exist
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched life cursed id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getLife id=" + id)));
        //this.messageService.add(`LifeService: fetched life name=${name}`);
        //return of(LIFES.find(life => life.name === name));
    };
    /** PUT: update the hero on the server */
    LifeService.prototype.updateLife = function (life) {
        var _this = this;
        return this.http.put(this.lifeUrl, life, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated life name=" + life.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateLife')));
    };
    LifeService.prototype.addLife = function (life) {
        var _this = this;
        return this.http.post(this.lifeUrl, life, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (life) { return _this.log("added life w/ name=" + life.name + " and cursed id=" + life.id); }), //can't see the cursed id because it doesn't exist
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addLife')));
    };
    /** DELETE: delete the life from the server */
    LifeService.prototype.deleteLife = function (life) {
        var _this = this;
        var id = typeof life === 'number' ? life : life.id;
        var url = this.lifeUrl + "/" + id;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted life cursed id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteLife')));
    };
    /*não funcionou
    deleteAllLife (): Observable<Life[]> {
        let term="";
      return this.http.delete<Life[]>(`${this.lifeUrl}/?name=${term}`, this.httpOptions).pipe(
        tap(_ => this.log(`deleted all`)),
        catchError(this.handleError<Life[]>('deleteLife',[]))
      );
    }*/
    /* GET lifes whose name contains search term */
    LifeService.prototype.searchLifes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty life array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.lifeUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found lifes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchLifes', [])));
    };
    LifeService.prototype.log = function (message) {
        this.messageService.add('LifeService: ' + message);
    };
    LifeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    LifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], LifeService);
    return LifeService;
}());



/***/ }),

/***/ "./src/app/life/life.component.css":
/*!*****************************************!*\
  !*** ./src/app/life/life.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* lifesComponent's private CSS styles */\r\n.lifes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.lifes  li{\r\n\r\n   position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.lifes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n\r\n}\r\n.lifes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 22em;\r\n}\r\n.lifes a:hover {\r\n  color:#607D8B;\r\n}\r\n.lifes .badge {\r\n   display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 1.7em 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  /*left: -1px;*/\r\n  top: -3px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  float:left;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n \r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  //left: 108px;\r\n  top: -18px;\r\n  background-color: gray !important;\r\n  color: white;\r\n  float:right;\r\n}\r\nlabel:hover {\r\n\tborder-color: aqua;background-color: aqua !important;\r\n}\r\n*:focus {\r\n\t-webkit-animation: blink 0.85s step-end infinite alternate; \r\n}\r\n@-webkit-keyframes blink { 50% { border-color: aqua;background-color: aqua; }  }"

/***/ }),

/***/ "./src/app/life/life.component.html":
/*!******************************************!*\
  !*** ./src/app/life/life.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div>\n  <label>Life nome:\n    <input #lifeName />\n  </label>\n  <label>Life tipo:\n    <input #lifeType />\n  </label>\n  <label>Life valor:\n    <input #lifeValue />\n  </label>\n  \n  <button (click)=\"add(lifeName.value,lifeType.value,lifeValue.value); \n  lifeName.value='';lifeType.value='';lifeValue.value=''\">\n    add\n  </button>\n</div-->\n<div ><h2>My Lifes</h2>\n<ul class=\"lifes\">\n  <li *ngFor=\"let life of lifes;let i = index\" >\n  <!--[class.selected]=\"life === selectedLife\" (click)=\"onSelect(life)\"-->\n  \t\n\t<a id=\"lifelink{{i}}\"[routerLink]=\"[{outlets:{primary:['detail',life.id]}}]\">\n\t<button  id=\"lifeid{{i}}\" class=\"badge\">{{life.id}}</button>\n\t\n\t{{life.name }}\n\t\n\t<!--Tipo: {{life.type  }}\n\tTotal: {{life.value}}-->\n\t\n\n\t</a>\n\t<button id=\"lifebutton{{i}}\" class=\"delete\" title=\"delete life\"\n\t(click)=\"delete(life)\">x</button>\n\t<!--<div>\n\t    <label>Novo valor:\n\t      <input [(ngModel)]=\"life.value\" placeholder=\"quantidade\">\n\t    </label>\n\t</div> -->\n  </li>\n</ul>\n<!--app-life-detail [life]=\"selectedLife\"></app-life-detail-->\n</div>\n"

/***/ }),

/***/ "./src/app/life/life.component.ts":
/*!****************************************!*\
  !*** ./src/app/life/life.component.ts ***!
  \****************************************/
/*! exports provided: LifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeComponent", function() { return LifeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../life.service */ "./src/app/life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifeComponent = /** @class */ (function () {
    function LifeComponent(lifeService) {
        this.lifeService = lifeService;
    }
    LifeComponent.prototype.getLifes = function () {
        var _this = this;
        this.lifeService.getLifes()
            .subscribe(function (lifes) { return _this.lifes = lifes; });
    };
    /*add(name:String, type:String, value:String) {
        name=name.trim();
        if(!name) { return;}
        this.lifeService.addLife({ name, type, value } as Life)
        .subscribe(life => {
            this.lifes.push(life);
        });
    }*/
    LifeComponent.prototype.delete = function (life) {
        this.lifes = this.lifes.filter(function (l) { return l !== life; });
        this.lifeService.deleteLife(life).subscribe();
    };
    LifeComponent.prototype.ngOnInit = function () {
        this.getLifes();
    };
    LifeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-life',
            template: __webpack_require__(/*! ./life.component.html */ "./src/app/life/life.component.html"),
            styles: [__webpack_require__(/*! ./life.component.css */ "./src/app/life/life.component.css")]
        }),
        __metadata("design:paramtypes", [_life_service__WEBPACK_IMPORTED_MODULE_1__["LifeService"]])
    ], LifeComponent);
    return LifeComponent;
}());



/***/ }),

/***/ "./src/app/magic.ts":
/*!**************************!*\
  !*** ./src/app/magic.ts ***!
  \**************************/
/*! exports provided: Magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magic", function() { return Magic; });
var Magic = /** @class */ (function () {
    function Magic() {
    }
    return Magic;
}());



/***/ }),

/***/ "./src/app/meeleweapon.ts":
/*!********************************!*\
  !*** ./src/app/meeleweapon.ts ***!
  \********************************/
/*! exports provided: MeeleWeapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeleWeapon", function() { return MeeleWeapon; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon */ "./src/app/weapon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MeeleWeapon = /** @class */ (function (_super) {
    __extends(MeeleWeapon, _super);
    function MeeleWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MeeleWeapon;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]));



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n\t\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n\t\n  margin: 2em;\n  /*margin-top:15px;*/\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/rangeweapon.ts":
/*!********************************!*\
  !*** ./src/app/rangeweapon.ts ***!
  \********************************/
/*! exports provided: RangeWeapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeWeapon", function() { return RangeWeapon; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon */ "./src/app/weapon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangeWeapon = /** @class */ (function (_super) {
    __extends(RangeWeapon, _super);
    function RangeWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeWeapon;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]));



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  /*display: inline-block;*/\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #351cf3;\r\n  font-weight: bold;\r\n}\r\nh2 {\r\n  font-size: 1.2em;\r\n}\r\nbutton {\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background: #00000000;\r\n  border-color: #00000000;\r\n  border-radius: 4px;\r\n  position:relative;\r\n  \r\n}\r\nbutton:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\ndiv{\r\n\tmargin-top:10px;\r\n}\r\n.right{\r\n\tfloat:right;\r\n}\r\n.hidden{\r\n\tdisplay:none;\r\n}"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n\t<div>\r\n\t<select class=\"right\" (change)=\"setdefault()\" [(ngModel)]=\"idioma\"  >\r\n\t  <option value=\"0\">Português(Brasil)</option>\r\n\t  <option value=\"1\">English</option>\r\n\t  </select>\r\n\t<img class=\"right\" src=\"assets/language.png\" width=\"24px\" height=\"24px\"/>\r\n\t </div>\r\n\t<h3><label>{{this.oi.text[this.idioma]}} <button (click)=\"hide()\" ><img class=\"right\" src=\"assets/eye.png\" width=\"24px\" height=\"24px\"/></button></label></h3>\r\n\t<!--<button *ngFor=\"let info of this.infos.slice(1)\" (click)=\"focalizar(info.for)\" [ngStyle]=\"{'top':(info.pos*15)+'px','width':info.width+'%'}\"><label>  {{info.text[this.idioma]}}</label></button>-->\r\n\t<ul id=\"ulhelp\" type=\"none\">\r\n\t\t<li *ngFor=\"let infos of this.infosmatrix\">\r\n\t\t\t<button *ngFor=\"let info of infos\" (click)=\"focalizar(info.for)\" ><label>  {{info.text[this.idioma]}}</label></button>\r\n\t\t</li>\r\n\t</ul>\r\n\t<!-- ================ MENU ================ -->\r\n\t<!--\t<div *ngIf=\"this.aba === 'menu'\">\r\n\t\t<div  >\r\n\t\t<button *ngFor=\"let info of this.infos.slice(1)\" (click)=\"focalizar(info.for)\" [ngStyle]=\"{'width':info.width+'%'}\"><label>  {{info.text[this.idioma]}}</label></button>\r\n\t\t</div>\r\n\t\t-->\r\n\t\t\r\n\t<!-- ================ LIFES ================ -->\r\n\t<!--\t<div *ngIf=\"this.aba === 'life'\">\r\n\t\t<div  >\r\n\t\t<button *ngFor=\"let info of this.infos.slice(1)\" (click)=\"focalizartag(info.for)\" [ngStyle]=\"{'width':info.width+'%'}\"><label>  {{info.text[this.idioma]}}</label></button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t-->\r\n\t\t\r\n\t<!-- ================ DETAIL ================ -->\r\n\t<!--\t<div *ngIf=\"this.aba === 'detail'\">\r\n\t\t  \r\n\t\t</div>\r\n\t\t-->\r\n\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info.service */ "./src/app/info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(route, infoService) {
        this.route = route;
        this.infoService = infoService;
        this.aba = "dashboard";
        this.idioma = 0;
        this.infosmatrix = new Array();
    }
    TutorialComponent.prototype.ngOnInit = function () {
        this.aba = this.route.snapshot.url[0].path;
        this.getInfos(this.aba);
    };
    TutorialComponent.prototype.getInfos = function (aba) {
        var _this = this;
        this.infoService.getInfos(aba)
            .subscribe(function (infos) { return _this.ordenai(infos); });
    };
    /*getInfo(id:string):Info{
        id=this.aba+id;
        let info= this.infos.filter(i => i.id === id)[0];
        return info;
    }*/
    TutorialComponent.prototype.ordenai = function (infos) {
        for (var i = 0; i < infos.length; i++) {
            if (infos[i].pos == 0) {
                this.oi = infos[i];
            }
            else {
                if (this.infosmatrix[infos[i].pos - 1] == undefined) {
                    this.infosmatrix[infos[i].pos - 1] = new Array();
                }
                this.infosmatrix[infos[i].pos - 1].push(infos[i]);
            }
        }
    };
    TutorialComponent.prototype.focalizar = function (id) {
        if (id != '') {
            var element = document.getElementById(id);
            element.focus();
        }
    };
    TutorialComponent.prototype.hide = function () {
        var ul = document.getElementById("ulhelp");
        if (ul.classList.contains('hidden')) {
            ul.classList.remove('hidden');
        }
        else {
            ul.classList.add('hidden');
        }
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"]])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/weapon.ts":
/*!***************************!*\
  !*** ./src/app/weapon.ts ***!
  \***************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    return Weapon;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Pastinha\IKRPG-estudo\angule-IKRPG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map