webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-admin/app-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul li{\n\tdisplay: inline;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-admin/app-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between\">\n  <a class=\"navbar-brand\">Admin Menu</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/admin/menu'>Menus</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/admin/employee'>Employees</a>\n      </li>\n    </ul>\n    <div class=\"col text-right\">\n      <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn \" id=\"dropdownBasic1\" ngbDropdownToggle>Settings</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <button class=\"dropdown-item\">Change Password</button>\n          <button class=\"dropdown-item\">Logout</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app-admin/app-admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppAdminComponent = /** @class */ (function () {
    function AppAdminComponent() {
    }
    AppAdminComponent.prototype.ngOnInit = function () { };
    AppAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/app-admin/app-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-admin/app-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAdminComponent);
    return AppAdminComponent;
}());
exports.AppAdminComponent = AppAdminComponent;


/***/ }),

/***/ "../../../../../src/app/app-admin/app-admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_admin_component_1 = __webpack_require__("../../../../../src/app/app-admin/app-admin.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var employee_component_1 = __webpack_require__("../../../../../src/app/app-admin/employee/employee.component.ts");
var menu_component_1 = __webpack_require__("../../../../../src/app/app-admin/menu/menu.component.ts");
var add_menu_component_1 = __webpack_require__("../../../../../src/app/app-admin/menu/add-menu/add-menu.component.ts");
var add_employee_component_1 = __webpack_require__("../../../../../src/app/app-admin/employee/add-employee/add-employee.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var main_pipe_module_1 = __webpack_require__("../../../../../src/app/pipes/main-pipe.module.ts");
var AppAdminModule = /** @class */ (function () {
    function AppAdminModule() {
    }
    AppAdminModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, forms_1.ReactiveFormsModule, router_1.RouterModule, main_pipe_module_1.MainPipeModule],
            exports: [],
            declarations: [app_admin_component_1.AppAdminComponent, employee_component_1.EmployeeComponent, menu_component_1.MenuComponent, add_menu_component_1.AddMenuComponent, add_employee_component_1.AddEmployeeComponent],
            entryComponents: [add_menu_component_1.AddMenuComponent, add_employee_component_1.AddEmployeeComponent],
            providers: [],
        })
    ], AppAdminModule);
    return AppAdminModule;
}());
exports.AppAdminModule = AppAdminModule;


/***/ }),

/***/ "../../../../../src/app/app-admin/employee/add-employee/add-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container\">\n    <div id=\"pwd-container\" class=\"row\">\n      <form #addEmployeeForm=\"ngForm\" (ngSubmit)=\"submit()\" role=\"addEmployee\" ngNativeValidate>\n        <div class=\"form-group row\">\n          <label for=\"fName\">First Name: </label>\n          <input type=\"text\" name=\"employee.fName\" id=\"fName\" placeholder=\"First Name\" required class=\"form-control input-lg\" [(ngModel)]=\"employee.fName\">\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"lName\">Last Name: </label>\n            <input type=\"text\" name=\"employee.lName\" id=\"lName\" placeholder=\"Last Name\" required class=\"form-control input-lg\" [(ngModel)]=\"employee.lName\">\n          </div>\n\n        <div class=\"form-group row\">\n          <label for=\"address\">Address: </label>\n          <input type=\"text\" name=\"employee.address\" id=\"address\" placeholder=\"address\" required class=\"form-control input-lg\" [(ngModel)]=\"employee.address\">\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"address\">Phone: </label>\n          <input type=\"text\" name=\"employee.phone\" id=\"phone\" placeholder=\"phone\" required class=\"form-control input-lg\" [(ngModel)]=\"employee.phone\">\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"submit\" name=\"go\" class=\"btn btn-outline-primary\" >{{newAdd?\"Add\":\"Update\"}}</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-admin/employee/add-employee/add-employee.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var employee_1 = __webpack_require__("../../../../../src/app/dataModels/employee.ts");
var employee_service_1 = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(activeModal, employeeService) {
        this.activeModal = activeModal;
        this.employeeService = employeeService;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        if (this.newAdd) {
            this.employee = new employee_1.Employee();
        }
    };
    AddEmployeeComponent.prototype.submit = function () {
        var _this = this;
        if (this.newAdd) {
            this.employeeService.addEmployee(this.employee)
                .subscribe(function (data) {
                if (data["success"]) {
                    console.log("Employee added");
                    _this.employee.username = data["username"];
                    _this.employees.push(_this.employee);
                    _this.activeModal.close('Close click');
                }
                else {
                    console.log("Error adding employee!");
                }
            });
        }
        else {
            console.log(this.employee);
            this.employeeService.updateEmployee(this.employee)
                .subscribe(function (data) {
                if (data["success"]) {
                    console.log("Employee updated");
                    _this.activeModal.close('Close click');
                }
                else {
                    console.log("Error updating employee!");
                }
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AddEmployeeComponent.prototype, "employees", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AddEmployeeComponent.prototype, "newAdd", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], AddEmployeeComponent.prototype, "employee", void 0);
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'add-employee',
            template: __webpack_require__("../../../../../src/app/app-admin/employee/add-employee/add-employee.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            employee_service_1.EmployeeService])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;


/***/ }),

/***/ "../../../../../src/app/app-admin/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <nav class=\"navbar navbar-light bg-faded\">\n    <form class=\"form-inline\">\n      <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Search by username\" [(ngModel)]=\"searchString\">\n      <button class=\"btn btn-outline-primary m-2\" (click)=\"openAddMenu()\">Add</button>\n    </form>\n  </nav>\n  <table class=\"table table-hover table-responsive text-center\">\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Username</th>\n        <th>Address</th>\n        <th>Phone</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of employees | filter : 'username' : searchString; let i = index;\">\n        <td>{{employee?.fName}}</td>\n        <td>{{employee?.lName}}</td>\n        <td>{{employee?.username}}</td>\n        <td>{{employee?.address}}</td>\n        <td>{{employee?.phone}}</td>\n        <td>\n          <button class=\"btn btn-info\" (click)=\"edit(employee)\">Edit</button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"delete(employee.username, i)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-admin/employee/employee.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var add_employee_component_1 = __webpack_require__("../../../../../src/app/app-admin/employee/add-employee/add-employee.component.ts");
var employee_service_1 = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(modalService, employeeService) {
        var _this = this;
        this.modalService = modalService;
        this.employeeService = employeeService;
        this.employeeService.getAllEmployees()
            .subscribe(function (data) {
            _this.employees = data["employees"];
            console.log(data);
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () { };
    EmployeeComponent.prototype.openAddMenu = function () {
        var modalRef = this.modalService.open(add_employee_component_1.AddEmployeeComponent);
        modalRef.componentInstance.employees = this.employees;
        modalRef.componentInstance.newAdd = true;
    };
    EmployeeComponent.prototype.edit = function (employee) {
        var modalRef = this.modalService.open(add_employee_component_1.AddEmployeeComponent);
        modalRef.componentInstance.employee = employee;
        modalRef.componentInstance.newAdd = false;
    };
    EmployeeComponent.prototype.delete = function (username, index) {
        var _this = this;
        this.employeeService.deleteEmployee(username).subscribe(function (data) {
            if (data["success"]) {
                console.log("Employee successfully deleted");
                _this.employees.splice(index, 1);
            }
            else {
                console.log("Unable to delete the employee");
            }
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            template: __webpack_require__("../../../../../src/app/app-admin/employee/employee.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "../../../../../src/app/app-admin/menu/add-menu/add-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  font-size: small;\n  line-height: 1.4;\n}\n.performance-facts__table, .performance-facts__table--small, .performance-facts__table--grid {\n  width: 100%;\n}\n.performance-facts__table th, .performance-facts__table--small th, .performance-facts__table--grid th, .performance-facts__table td, .performance-facts__table--small td, .performance-facts__table--grid td {\n  font-weight: normal;\n  text-align: left;\n  padding: 0.25rem 0;\n  border-top: 1px solid black;\n  white-space: nowrap;\n}\n.performance-facts__table td:last-child, .performance-facts__table--small td:last-child, .performance-facts__table--grid td:last-child {\n  text-align: right;\n}\n.performance-facts__table .blank-cell, .performance-facts__table--small .blank-cell, .performance-facts__table--grid .blank-cell {\n  width: 1rem;\n  border-top: 0;\n}\n.performance-facts__table .thick-row th, .performance-facts__table--small .thick-row th, .performance-facts__table--grid .thick-row th, .performance-facts__table .thick-row td, .performance-facts__table--small .thick-row td, .performance-facts__table--grid .thick-row td {\n  border-top-width: 5px;\n}\n.performance-facts__table--small {\n  border-bottom: 1px solid #999;\n  margin: 0 0 0.5rem 0;\n}\n.performance-facts__table--small thead tr {\n  border-bottom: 1px solid black;\n}\n.performance-facts__table--small td:last-child {\n  text-align: left;\n}\n.performance-facts__table--small th, .performance-facts__table--small td {\n  border: 0;\n  padding: 0;\n}\n.performance-facts__table--grid {\n  margin: 0 0 0.5rem 0;\n}\n.performance-facts__table--grid td:last-child {\n  text-align: left;\n}\n.performance-facts__table--grid td:last-child::before {\n  content: \"\\2022\";\n  font-weight: bold;\n  margin: 0 0.25rem 0 0;\n}\n.text-center {\n  text-align: center;\n}\n.thick-end {\n  border-bottom: 10px solid black;\n}\n.thin-end {\n  border-bottom: 1px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-admin/menu/add-menu/add-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-4\">\n  <div class=\"container\">\n    <div id=\"pwd-container\" class=\"row\">\n      <form #addMenuForm=\"ngForm\" (ngSubmit)=\"submit(addMenuForm)\" role=\"addMenu\" ngNativeValidate>\n        <div class=\"form-group row\">\n          <label for=\"name\">Name: </label>\n          <input type=\"text\" name=\"menu.name\" id=\"name\" placeholder=\"Name\" class=\"form-control input-lg\" [(ngModel)]=\"menu.name\">\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"desc\">Description: </label>\n          <input type=\"text\" name=\"menu.description\" id=\"desc\" placeholder=\"Name\" class=\"form-control input-lg\" [(ngModel)]=\"menu.description\">\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"ingredient\">Ingredients: </label>\n          <input type=\"text\" name=\"menu.ingredients\" id=\"ingredient\" placeholder=\"Add an ingredient\" class=\"form-control input-lg\"\n            [(ngModel)]=\"ingredient\">\n          <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"menu.ingredients.push(ingredient)\">Add</button>\n        </div>\n        <ul>\n          <li *ngFor=\"let ing of menu.ingredients; let i = index\">{{ing}}\n            <button class = \"btn btn-danger btn-sm\" (click)=\"menu.ingredients.splice(i,1)\"> X </button>\n          </li>\n        </ul>\n        <div class=\"form-group row\">\n          <label for=\"menuType\">Menu Type:</label>\n          <input type=\"text\" name=\"menu.menutype\" id=\"menutype\" class=\"form-control input-lg\" list=\"menuTypes\" [(ngModel)]=\"menu.menutype\">\n          <datalist id=\"menuTypes\">\n            <option *ngFor=\"let mt of menuTypes\"> {{mt}}</option>\n          </datalist>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"price\">Price: </label>\n          <input type=\"text\" name=\"type\" id=\"type\" placeholder=\"Type\" list=\"sizeList\" class=\"form-control col-sm-4\" [(ngModel)]=\"type\">\n          <datalist id=\"sizeList\">\n            <option *ngFor=\"let size of sizeList\"> {{size}}</option>\n          </datalist>\n          <input type=\"number\" min=\"0.00\" max=\"10000.00\" step=\"0.01\" name=\"price\" id=\"price\" placeholder=\"price\" class=\"form-control col-sm-3\"\n            [(ngModel)]=\"price\" />\n          <button type=\"button\" class=\"btn btn-small\" (click)=\"menu.prices.push({type : type, price: price})\">Add</button>\n          <ul>\n            <li *ngFor=\"let price of menu.prices; let i = index\">{{price.type}} : {{price.price}}\n              <button (click)=\"menu.prices.splice(i,1)\"> X </button>\n            </li>\n          </ul>\n        </div>\n\n        <hr>\n\n        <section ngModelGroup=\"nutrition\" class=\" border m-0 p-2\">\n          <header class=\"h1\">Nutrition Facts\n          </header>\n          <table class=\"performance-facts__table small\">\n            <tbody>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Calories</b>\n                  <input type=\"number\" name=\"calories\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calories.calories\">\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Calories from Fat\n                  <input type=\"number\" name=\"caloriesFromFat\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calories.caloriesFromFat\">\n                </td>\n              </tr>\n              <tr class=\"thick-row\">\n                <td colspan=\"3\" class=\"small\">\n                  <b>% Daily Value*</b>\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Total Fat</b>\n                  <input type=\"number\" name=\"fat\"min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.fat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.fat.fat/dailyValues.fat).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Saturated Fat <input name=\"satFat\" type=\"number\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.satFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.fat.satFat/dailyValues.satFat).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Unsaturated Fat <input type=\"number\" name=\"unsaatFat\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.unsatFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Trans Fat <input type=\"number\" name=\"transFat\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.transFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Cholesterol</b>\n                  <input type=\"number\" name=\"cholestrol\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.cholestrol\">mg\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.cholestrol/dailyValues.cholestrol).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Sodium</b>\n                  <input type=\"number\" name =\"sodium\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.sodium\">mg\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.sodium/dailyValues.sodium).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Total Carbohydrate</b>\n                  <input type=\"number\" name=\"carbs\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.carbs\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.carbs.carbs/dailyValues.carbs).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Dietary Fiber <input type=\"number\" name=\"fiber\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.fiber\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                    {{(menu.nutrition.carbs.fiber/dailyValues.fiber).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Sugars <input type=\"number\" name=\"sugar\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.sugar\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr class=\"thick-end\">\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Protein</b>\n                  <input type=\"number\"  name = \"protein\" min=\"0\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.protein\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <table class=\"performance-facts__table--grid small\">\n            <tbody>\n              <tr>\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  Vitamin A <input type=\"number\" name=\"vita\" min=\"0\" max=\"100\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.vitamin.vita\">%\n                </td>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Vitamin C <input type=\"number\" name=\"vitc\" min=\"0\" max=\"100\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.vitamin.vitc\">%\n                </td>\n              </tr>\n              <tr class=\"border-bottom\">\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  Calcium <input type=\"number\"  name = \"calcium\" min=\"0\" max=\"100\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calcium\">%\n                </td>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Iron <input type=\"number\" name=\"iron\" min=\"0\" max=\"100\" class =\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.iron\">%\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <p class=\"small\">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on\n            your calorie needs:</p>\n\n          <table class=\"performance-facts__table--small small border-bottom\">\n            <thead>\n              <tr>\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\"></td>\n                <th class=\"border-top font-weight-normal text-nowrap\">Calories:</th>\n                <th class=\"border-top font-weight-normal text-nowrap\">2,000</th>\n                <th class=\"border-top font-weight-normal text-nowrap\">2,500</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Total Fat</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.fat}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">80g</td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\"></td>\n                <th class=\"border-top font-weight-normal text-nowrap\">Saturated Fat</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.satFat}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Cholesterol</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.cholestrol}}mg</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">300 mg</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Sodium</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.sodium}}mg</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n              </tr>\n              <tr>\n                <th colspan=\"3\" class=\"border-top font-weight-normal text-nowrap\">Total Carbohydrate</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.carbs}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">375g</td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\"></td>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Dietary Fiber</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.fiber}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">30g</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <p class=\"small\">\n            Calories per gram:\n          </p>\n          <p class=\"small text-center\">\n            Fat 9 &bull; Carbohydrate 4 &bull; Protein 4\n          </p>\n\n        </section>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" name=\"go\" class=\"btn btn-outline-primary\">{{newAdd?\"Add\":\"Update\"}}</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-admin/menu/add-menu/add-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var menu_1 = __webpack_require__("../../../../../src/app/dataModels/menu.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu.service.ts");
var nutrition_1 = __webpack_require__("../../../../../src/app/dataModels/nutrition.ts");
var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(activeModal, menuService) {
        this.activeModal = activeModal;
        this.menuService = menuService;
        this.menuTypes = menu_1.MenuType;
        this.sizeList = menu_1.SizeList;
        this.dailyValues = nutrition_1.DailyValues;
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        if (this.newAdd) {
            this.menu = new menu_1.Menu();
        }
    };
    AddMenuComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.menu);
        if (this.newAdd) {
            this.menuService.addMenu(this.menu)
                .subscribe(function (data) {
                if (data["success"]) {
                    console.log("Menu added");
                    _this.menu.menuId = data["id"];
                    _this.menus.push(_this.menu);
                    _this.activeModal.close('Close click');
                }
                else {
                    console.log("Error adding menu!");
                }
            });
        }
        else {
            this.menuService.updateMenu(this.menu)
                .subscribe(function (data) {
                if (data["success"]) {
                    console.log("Menu updated");
                    _this.activeModal.close('Close click');
                }
                else {
                    console.log("Error updating menu!");
                }
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AddMenuComponent.prototype, "menus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AddMenuComponent.prototype, "newAdd", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", menu_1.Menu)
    ], AddMenuComponent.prototype, "menu", void 0);
    AddMenuComponent = __decorate([
        core_1.Component({
            selector: 'add-menu',
            template: __webpack_require__("../../../../../src/app/app-admin/menu/add-menu/add-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-admin/menu/add-menu/add-menu.component.css")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            menu_service_1.MenuService])
    ], AddMenuComponent);
    return AddMenuComponent;
}());
exports.AddMenuComponent = AddMenuComponent;


/***/ }),

/***/ "../../../../../src/app/app-admin/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <nav class=\"navbar navbar-light bg-faded\">\n    <form class=\"form-inline\">\n      <input type=\"text\" class=\"form-control input-lg\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\n      <button class=\"btn btn-outline-primary m-2\" (click)=\"openAddMenu()\">Add</button>\n    </form>\n  </nav>\n  <table class=\"table table-hover table-responsive text-center\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Description</th>\n        <th>MenuType</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let menu of menus| filter : 'name' : searchString; let i = index;\">\n        <td>{{menu.name}}</td>\n        <td>{{menu.description}}</td>\n        <td>{{menu.menutype}}</td>\n        <td>\n          <button class=\"btn btn-info\" (click)=\"viewDetails(menu)\">View Details/Edit</button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"delete(menu.menuId, i)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-admin/menu/menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var add_menu_component_1 = __webpack_require__("../../../../../src/app/app-admin/menu/add-menu/add-menu.component.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu.service.ts");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(modalService, menuService) {
        var _this = this;
        this.modalService = modalService;
        this.menuService = menuService;
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            _this.menus = data["menus"];
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.openAddMenu = function () {
        var modalRef = this.modalService.open(add_menu_component_1.AddMenuComponent, { size: "lg" });
        modalRef.componentInstance.menus = this.menus;
        modalRef.componentInstance.newAdd = true;
    };
    MenuComponent.prototype.viewDetails = function (menu) {
        var modalRef = this.modalService.open(add_menu_component_1.AddMenuComponent, { size: "lg" });
        modalRef.componentInstance.menu = menu;
        modalRef.componentInstance.newAdd = false;
    };
    MenuComponent.prototype.delete = function (menuId, index) {
        var _this = this;
        this.menuService.deleteMenu(menuId).subscribe(function (data) {
            if (data["success"]) {
                console.log("Menu successfully deleted");
                _this.menus.splice(index, 1);
            }
            else {
                console.log("Unable to delete the menu");
            }
        });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: __webpack_require__("../../../../../src/app/app-admin/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            menu_service_1.MenuService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/app-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"Menus\">\n    <ng-template ngbTabContent>\n      <display-menu *ngIf=\"dispMenu\" [dispMenu]=\"dispMenu\" [pendingOrders]=\"pendingOrders\"></display-menu>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Orders\">\n    <ng-template ngbTabContent>\n      <orders *ngIf=\"activeOrders\" [pendingOrders]=\"pendingOrders\" [activeOrders]=\"activeOrders\" ></orders>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n\n"

/***/ }),

/***/ "../../../../../src/app/app-customer/app-customer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var menu_1 = __webpack_require__("../../../../../src/app/dataModels/menu.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu.service.ts");
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var AppCustomerComponent = /** @class */ (function () {
    function AppCustomerComponent(config, menuService, customerService) {
        var _this = this;
        this.menuService = menuService;
        this.customerService = customerService;
        config.justify = 'center';
        config.type = 'pills';
        this.pendingOrders = [];
        this.activeOrders = [];
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            if (data["success"]) {
                _this.sortMenus(data["menus"]);
            }
            else {
                console.log("Error fetching menus!");
            }
        });
    }
    AppCustomerComponent.prototype.sortMenus = function (menus) {
        var _this = this;
        this.dispMenu = {};
        for (var _i = 0, MenuType_1 = menu_1.MenuType; _i < MenuType_1.length; _i++) {
            var type = MenuType_1[_i];
            this.dispMenu[type] = [];
        }
        var idMenu = {};
        for (var _a = 0, menus_1 = menus; _a < menus_1.length; _a++) {
            var menu = menus_1[_a];
            idMenu[menu.menuId] = menu;
            this.dispMenu[menu.menutype].push(menu);
        }
        this.customerService.getAllOrders()
            .subscribe(function (data) {
            if (data["success"]) {
                var orders = data["orders"];
                console.log(data);
                console.log("Orders", orders);
                for (var i = 0; i < orders.length; i++) {
                    orders[i].menu = idMenu[orders[i].menuId];
                    _this.activeOrders.push(orders[i]);
                }
                console.log("ActiveOrders", _this.activeOrders);
            }
            else {
                console.log("Error fetching orders!");
            }
        });
        console.log("Display Menu", this.dispMenu);
        //sort the menus based on their menuSection
    };
    AppCustomerComponent.prototype.ngOnInit = function () { };
    AppCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-customer',
            template: __webpack_require__("../../../../../src/app/app-customer/app-customer.component.html"),
            providers: [ng_bootstrap_1.NgbTabsetConfig]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbTabsetConfig,
            menu_service_1.MenuService,
            customer_service_1.CustomerService])
    ], AppCustomerComponent);
    return AppCustomerComponent;
}());
exports.AppCustomerComponent = AppCustomerComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/app-customer.modules.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_customer_component_1 = __webpack_require__("../../../../../src/app/app-customer/app-customer.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var display_menu_component_1 = __webpack_require__("../../../../../src/app/app-customer/display-menu/display-menu.component.ts");
var orders_component_1 = __webpack_require__("../../../../../src/app/app-customer/orders/orders.component.ts");
var view_details_component_1 = __webpack_require__("../../../../../src/app/app-customer/display-menu/view-details/view-details.component.ts");
var AppCustomerModule = /** @class */ (function () {
    function AppCustomerModule() {
    }
    AppCustomerModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
            exports: [],
            declarations: [app_customer_component_1.AppCustomerComponent, display_menu_component_1.DisplayMenuComponent, orders_component_1.OrdersComponent, view_details_component_1.ViewDetailsComponent],
            entryComponents: [view_details_component_1.ViewDetailsComponent],
            providers: [],
        })
    ], AppCustomerModule);
    return AppCustomerModule;
}());
exports.AppCustomerModule = AppCustomerModule;


/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/display-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel *ngFor=\"let section of sections\" title=\"{{section}}\">\n    <ng-template ngbPanelContent>\n\n      <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n            <div *ngFor=\"let menu of dispMenu[section]\" class=\"col-md-4\">\n              <div class=\"card mb-4 box-shadow\">\n                <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\"\n                  style=\"height: 225px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161b452529a%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161b452529a%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.6%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                  data-holder-rendered=\"true\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">{{menu.name}}</p>\n                  <p class=\"card-text\">{{menu.description}}</p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div>\n                      <div>\n                        <select *ngIf=\"menu.prices.length > 1\" [(ngModel)]=\"priceIndex\" class=\"form-control mb-2 mr-sm-2\">\n                          <option *ngFor=\"let price of menu.prices; let i = index\" value=\"{{i}}\">{{price.type}}</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select [(ngModel)]=\"quantity\" class=\"form-control mb-2 mr-sm-2\">\n                          <option *ngFor=\"let index of numbers\" value=\"{{index}}\">{{index}}</option>\n                        </select>\n                      </div>\n                      <div>\n\n                      </div>\n                    </div>\n\n                    <small class=\"text-muted\">$ {{ (quantity ) ? ((menu.prices.length > 1 && priceIndex) ? menu.prices[priceIndex].price :menu.prices[0].price) * quantity : 0 }}</small>\n                  </div>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"btn-group\">\n                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"openDetails(menu)\">View</button>\n                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"addToOrders(menu, quantity, priceIndex)\">Add</button>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/display-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var menu_1 = __webpack_require__("../../../../../src/app/dataModels/menu.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var view_details_component_1 = __webpack_require__("../../../../../src/app/app-customer/display-menu/view-details/view-details.component.ts");
var DisplayMenuComponent = /** @class */ (function () {
    function DisplayMenuComponent(modalService) {
        this.modalService = modalService;
        this.sections = menu_1.MenuType;
        this.numbers = [];
        this.numbers = Array(5).fill(0).map(function (x, i) { return i + 1; });
    }
    DisplayMenuComponent.prototype.addToOrders = function (menu, quantity, priceIndex) {
        for (var i = 0; i < this.pendingOrders.length; i++) {
            if (this.pendingOrders[i].menu.menuId == menu.menuId) {
                this.pendingOrders[i]["quantity"] += parseInt(quantity);
                return;
            }
        }
        console.log(priceIndex);
        this.pendingOrders.push({
            "menu": menu,
            "orderType": "SELF",
            "quantity": parseInt(quantity),
            "size": (priceIndex) ? parseInt(priceIndex) : 0
        });
        console.log(this.pendingOrders);
    };
    DisplayMenuComponent.prototype.openDetails = function (menu) {
        var modalRef = this.modalService.open(view_details_component_1.ViewDetailsComponent, { size: "lg" });
        modalRef.componentInstance.menu = menu;
    };
    DisplayMenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DisplayMenuComponent.prototype, "dispMenu", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DisplayMenuComponent.prototype, "pendingOrders", void 0);
    DisplayMenuComponent = __decorate([
        core_1.Component({
            selector: 'display-menu',
            template: __webpack_require__("../../../../../src/app/app-customer/display-menu/display-menu.component.html"),
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], DisplayMenuComponent);
    return DisplayMenuComponent;
}());
exports.DisplayMenuComponent = DisplayMenuComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/view-details/view-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  font-size: small;\n  line-height: 1.4;\n}\n.performance-facts__table, .performance-facts__table--small, .performance-facts__table--grid {\n  width: 100%;\n}\n.performance-facts__table td:last-child, .performance-facts__table--small td:last-child, .performance-facts__table--grid td:last-child {\n  text-align: right;\n}\n.performance-facts__table .blank-cell, .performance-facts__table--small .blank-cell, .performance-facts__table--grid .blank-cell {\n  width: 1rem;\n  border-top: 0;\n}\n.performance-facts__table .thick-row th, .performance-facts__table--small .thick-row th, .performance-facts__table--grid .thick-row th, .performance-facts__table .thick-row td, .performance-facts__table--small .thick-row td, .performance-facts__table--grid .thick-row td {\n  border-top-width: 5px;\n}\n.performance-facts__table--small td:last-child {\n  text-align: left;\n}\n.performance-facts__table--grid td:last-child {\n  text-align: left;\n}\n.performance-facts__table--grid td:last-child::before {\n  content: \"\\2022\";\n  font-weight: bold;\n  margin: 0 0.25rem 0 0;\n}\n.thick-end {\n  border-bottom: 10px solid black;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/view-details/view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{menu.name}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-0\">\n\n  <div class=\"container my-2\">\n    <div class=\"card text-left p-2 mb-3\">\n      <div class=\"lead\">\n        <em>{{menu.description}} </em>\n      </div>\n\n      <div>\n        <span class=\"h5\">Ingredients:</span>\n        <span *ngFor=\"let ing of menu.ingredients\">\n          <em>{{ing}},</em>\n        </span>\n\n      </div>\n      <div class=\"text-left\">\n        <span class=\"h5\"> Prices: </span>\n        <div *ngFor=\"let price of menu.prices\" class=\"ml-4\">\n          <span>{{price.type}}</span> ......\n          <span>${{price.price}}</span>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class=\"m-0 p-0\">\n      <section class=\" border m-0 p-2\">\n        <header class=\"h1\">Nutrition Facts\n        </header>\n        <table class=\"performance-facts__table small\">\n          <tbody>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Calories</b>\n                {{menu.nutrition.calories.calories}}\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Calories from Fat {{menu.nutrition.calories.caloriesFromFat}}\n              </td>\n            </tr>\n            <tr class=\"thick-row\">\n              <td colspan=\"3\" class=\"small\">\n                <b>% Daily Value*</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Total Fat</b>\n                {{menu.nutrition.fat.fat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.fat.fat/dailyValues.fat).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Saturated Fat {{menu.nutrition.fat.satFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.fat.satFat/dailyValues.satFat).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Unsaturated Fat {{menu.nutrition.fat.unsatFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Trans Fat {{menu.nutrition.fat.transFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Cholesterol</b>\n                {{menu.nutrition.cholestrol}}mg\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.cholestrol/dailyValues.cholestrol).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Sodium</b>\n                {{menu.nutrition.sodium}}mg\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.sodium/dailyValues.sodium).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Total Carbohydrate</b>\n                {{menu.nutrition.carbs.carbs}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.carbs.carbs/dailyValues.carbs).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Dietary Fiber {{menu.nutrition.carbs.fiber}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.carbs.fiber/dailyValues.fiber).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Sugars {{menu.nutrition.carbs.sugar}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr class=\"thick-end\">\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Protein</b>\n                {{menu.nutrition.protein}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <table class=\"performance-facts__table--grid small\">\n          <tbody>\n            <tr>\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                Vitamin A {{menu.nutrition.vitamin.vita}}%\n              </td>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Vitamin C {{menu.nutrition.vitamin.vitc}}%\n              </td>\n            </tr>\n            <tr class=\"border-bottom\">\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                Calcium {{menu.nutrition.calcium}}%\n              </td>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Iron {{menu.nutrition.iron}}%\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <p class=\"small\">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your\n          calorie needs:</p>\n\n        <table class=\"performance-facts__table--small small border-bottom\">\n          <thead>\n            <tr>\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\"></td>\n              <th class=\"border-top font-weight-normal text-nowrap\">Calories:</th>\n              <th class=\"border-top font-weight-normal text-nowrap\">2,000</th>\n              <th class=\"border-top font-weight-normal text-nowrap\">2,500</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Total Fat</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">65g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">80g</td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\"></td>\n              <th class=\"border-top font-weight-normal text-nowrap\">Saturated Fat</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">20g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Cholesterol</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">300mg</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">300 mg</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Sodium</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n            </tr>\n            <tr>\n              <th colspan=\"3\" class=\"border-top font-weight-normal text-nowrap\">Total Carbohydrate</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">300g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">375g</td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\"></td>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Dietary Fiber</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">30g</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <p class=\"small\">\n          Calories per gram:\n        </p>\n        <p class=\"small text-center\">\n          Fat 9 &bull; Carbohydrate 4 &bull; Protein 4\n        </p>\n\n      </section>\n\n\n    </div>\n  </div>\n\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n    <ngb-panel title=\"Reviews\">\n      <ng-template ngbPanelContent>\n        <div class=\"card p-2\">\n          <span class=\"h6\">Rating: </span><ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </ng-template>\n    </ngb-panel>\n  </ngb-accordion>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/view-details/view-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var menu_1 = __webpack_require__("../../../../../src/app/dataModels/menu.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var nutrition_1 = __webpack_require__("../../../../../src/app/dataModels/nutrition.ts");
var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(activeModal) {
        this.activeModal = activeModal;
        this.dailyValues = nutrition_1.DailyValues;
        this.currentRate = 5;
    }
    ViewDetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", menu_1.Menu)
    ], ViewDetailsComponent.prototype, "menu", void 0);
    ViewDetailsComponent = __decorate([
        core_1.Component({
            selector: 'view-details',
            template: __webpack_require__("../../../../../src/app/app-customer/display-menu/view-details/view-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-customer/display-menu/view-details/view-details.component.css")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());
exports.ViewDetailsComponent = ViewDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-4\">\n  <h5 class=\"card-header\">Pending Orders</h5>\n  <div class=\"card-body\">\n    <ul class=\"list-group mb-3\">\n      <li *ngFor=\"let k of pendingOrders; let i = index\" class=\"list-group-item d-flex justify-content-between d-flex\">\n        <div class=\"d-inline d-flex d-flex\">\n          <div class=\"text-muted mr-2\">\n            <span> {{k.quantity}} </span>\n            <span> {{k.menu.prices[k.size].type}} </span>\n          </div>\n          <div class=\"d-inline\">\n            <h6 class=\"my-0\">{{k.menu.name}}</h6>\n            <small class=\"text-muted\">{{k.menu.description}}</small>\n          </div>\n        </div>\n        <span class=\"text-muted\">${{k.menu.prices[k.size].price * k.quantity}}</span>\n        <div class=\"ml-2\">\n          <button class=\"btn btn-danger btn-sm\" (click)=\"removeOrder(i)\">X</button>\n        </div>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Total (USD)</span>\n        <strong>${{getTotal(pendingOrders)}}</strong>\n      </li>\n    </ul>\n    <div class=\"input-group-append float-right\">\n      <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"addToActive()\">Confirm</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card my-4\">\n  <h5 class=\"card-header\">Active Orders</h5>\n  <div class=\"card-body\">\n    <ul class=\"list-group mb-3\">\n      <li *ngFor=\"let k of activeOrders\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\n        <div class=\"d-inline d-flex d-flex\">\n          <div class=\"text-muted mr-2\">\n            <span> {{k.quantity}} </span>\n            <span> {{k.menu.prices[k.size].type}} </span>\n          </div>\n          <div class=\"d-inline\">\n            <h6 class=\"my-0\">{{k.menu.name}}</h6>\n            <small class=\"text-muted\">{{k.menu.description}}</small>\n          </div>\n        </div>\n        <span class=\"text-muted\">${{k.menu.prices[k.size].price * k.quantity}}</span>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Total (USD)</span>\n        <strong>${{getTotal(activeOrders)}}</strong>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Tax (USD)</span>\n        <strong>${{getTax()}}</strong>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Tip (USD)</span>\n        <input type=\"number\" name=\"tipPercent\" min=\"0.00\" id=\"tipPercent\" class=\"form-control mb-2 ml-2 mr-sm-2\" (input)=\"getTip($event.target.value)\"\n          list=\"menuTypes\" [(ngModel)]=\"tipPercent\">\n        <strong class=\"col-md-2\">%</strong>\n        <datalist id=\"menuTypes\">\n          <option> 10</option>\n        </datalist>\n        <strong>$</strong>\n        <input type=\"number\" name=\"tip\" step='.01' id=\"tip\" class=\"form-control mb-2 ml-2 mr-sm-2\" [(ngModel)]=\"tip\">\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Grand Total (USD)</span>\n        <strong>${{ getGrandTotal() }}</strong>\n      </li>\n\n    </ul>\n\n    <div class=\"input-group-append float-right\">\n      <button type=\"submit\" class=\"btn btn-secondary \" href=\"#checkOut\" (click)=\"closeOrder()\">Pay and close order</button>\n    </div>\n  </div>\n</div>\n\n<div id=\"checkOut\" *ngIf=\"showCheckOut\" class=\"card my-4\">\n  <h5 class=\"card-header\">Check Out</h5>\n  <div class=\"card-body\">\n    <div class=\"col order-md-1\">\n      <form class=\"needs-validation\" novalidate=\"\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Complete Payment</button>\n      </form>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-customer/orders/orders.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var moment = __webpack_require__("../../../../moment/moment.js");
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(customerService) {
        this.customerService = customerService;
        this.taxRate = 7;
        this.tip = 0.0;
        this.showCheckOut = false;
    }
    OrdersComponent.prototype.addToActive = function () {
        var _this = this;
        //post all the pendingOrders
        var orders = [];
        for (var i = 0; i < this.pendingOrders.length; i++) {
            var tempOrder = this.pendingOrders[i];
            var order = {
                orderType: tempOrder.orderType,
                menuId: tempOrder.menu['_id']['$oid'],
                date: moment().toISOString(),
                quantity: tempOrder.quantity,
                size: tempOrder.size,
                status: "PLACED"
            };
            orders.push(order);
        }
        console.log(orders);
        this.customerService.addOrders(orders)
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Successfully added order");
                (_a = _this.activeOrders).push.apply(_a, _this.pendingOrders);
                _this.pendingOrders.splice(0, _this.pendingOrders.length);
            }
            else {
                console.log(data);
            }
            var _a;
        });
    };
    OrdersComponent.prototype.removeOrder = function (i) {
        console.log(this.pendingOrders[i]);
        this.pendingOrders.splice(i, 1);
    };
    OrdersComponent.prototype.getTotal = function (orders) {
        var total = 0;
        for (var i = 0; i < orders.length; i++) {
            total += orders[i].menu.prices[orders[i].size].price * orders[i].quantity;
        }
        this.total = total;
        return total;
    };
    OrdersComponent.prototype.getTax = function () {
        return this.total * this.taxRate / 100;
    };
    OrdersComponent.prototype.getTip = function (tipPercent) {
        console.log(tipPercent);
        this.tip = tipPercent / 100 * (this.total + this.getTax());
    };
    OrdersComponent.prototype.getGrandTotal = function () {
        return this.total + this.getTax() + this.tip;
    };
    OrdersComponent.prototype.closeOrder = function () {
        var _this = this;
        this.customerService.closeOrder()
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Order Successfully closed");
                _this.showCheckOut = true;
                //show the billing modal
                //websocket call
            }
            else {
                console.log("Problems Closing the order");
            }
        });
    };
    OrdersComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrdersComponent.prototype, "pendingOrders", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrdersComponent.prototype, "activeOrders", void 0);
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'orders',
            template: __webpack_require__("../../../../../src/app/app-customer/orders/orders.component.html")
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;


/***/ }),

/***/ "../../../../../src/app/app-login/app-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n\n.form-signin .checkbox {\n  font-weight: normal;\n}\n\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-login/app-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\" role=\"login\" ngNativeValidate>\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <label for=\"username\" class=\"sr-only\">Username</label>\n    <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required=\"\" autofocus=\"\" required\n      ngModel>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\" ngModel>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-login/app-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_1 = __webpack_require__("../../../../../src/app/services/app.service.ts");
var AppLoginComponent = /** @class */ (function () {
    function AppLoginComponent(appService) {
        this.appService = appService;
    }
    AppLoginComponent.prototype.ngOnInit = function () { };
    AppLoginComponent.prototype.submit = function (loginForm) {
        console.log(loginForm.value);
        this.appService.login(loginForm.value)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AppLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/app-login/app-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-login/app-login.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppLoginComponent);
    return AppLoginComponent;
}());
exports.AppLoginComponent = AppLoginComponent;


/***/ }),

/***/ "../../../../../src/app/app-waitress/add-order/add-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <div class=\"input-group-addon\">\n          <i class=\"glyphicon glyphicon-search\"></i>\n        </div>\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\n      </div>\n    </div>\n  </form>\n\n  <table class=\"table\">\n    <tr>\n      <th>Name</th>\n      <th>Size</th>\n      <th>Quantity</th>\n      <th class=\"text-right\">Actions</th>\n    </tr>\n    <tr *ngFor=\"let menu of data.menus | filter : 'name' : searchString; let i = index\">\n      <td class=\"text-left\">\n        {{menu.name}}\n      </td>\n      <td>\n        <span *ngIf=\"menu.prices.length == 1\">REGULAR</span>\n        <select *ngIf=\"menu.prices.length > 1\" [(ngModel)]=\"priceIndex\" class=\"form-control mb-2 mr-sm-2\">\n          <option *ngFor=\"let price of menu.prices; let i = index\" value=\"{{i}}\">{{price.type}}</option>\n        </select>\n      </td>\n\n      <td>\n        <select [(ngModel)]=\"quantity\" class=\"form-control mb-2 mr-sm-2\">\n          <option *ngFor=\"let index of numbers\" value=\"{{index}}\">{{index}}</option>\n        </select>\n      </td>\n      <td>\n        <button class=\"btn btn-sm btn-success\" (click)=\"addOrder(i, quantity, priceIndex)\">Add</button>\n      </td>\n    </tr>\n  </table>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-waitress/add-order/add-order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var menu_1 = __webpack_require__("../../../../../src/app/dataModels/menu.ts");
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var moment = __webpack_require__("../../../../moment/moment.js");
var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(activeModal, customerService) {
        this.activeModal = activeModal;
        this.customerService = customerService;
        this.numbers = [];
        this.numbers = Array(5).fill(0).map(function (x, i) { return i + 1; });
    }
    AddOrderComponent.prototype.addOrder = function (menuIndex, quantity, size) {
        var _this = this;
        var order = {
            orderType: "WAITRESS",
            menuId: this.data.menus[menuIndex].menuId,
            date: moment().toISOString(),
            quantity: quantity,
            size: size ? size : 0,
            status: "PLACED"
        };
        this.customerService.addOrders([order])
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Successfully added order");
                console.log(order);
                console.log(_this.data);
                _this.data.orders.push({
                    orderNo: _this.data.ordersByTable[_this.data.tableIndex].orderNo,
                    tableNo: _this.data.ordersByTable[_this.data.tableIndex].tableNo,
                    quantity: quantity,
                    size: size ? menu_1.MenuType[size] : "REGULAR",
                    server: _this.data.server,
                    menu: _this.data.menus[menuIndex]
                });
                order["menu"] = _this.data.menus[menuIndex];
                _this.data.ordersByTable[_this.data.tableIndex].orders.push(order);
                //websocket call
            }
            else {
                console.log(data);
            }
        });
    };
    AddOrderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AddOrderComponent.prototype, "data", void 0);
    AddOrderComponent = __decorate([
        core_1.Component({
            selector: 'add-order',
            template: __webpack_require__("../../../../../src/app/app-waitress/add-order/add-order.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            customer_service_1.CustomerService])
    ], AddOrderComponent);
    return AddOrderComponent;
}());
exports.AddOrderComponent = AddOrderComponent;


/***/ }),

/***/ "../../../../../src/app/app-waitress/app-waitress.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"All Orders\">\n    <ng-template ngbTabContent>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-sm\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>Order #</th>\n              <th>Table #</th>\n              <th>Quantity</th>\n              <th>Size</th>\n              <th>Menu</th>\n              <th>Server</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of orders\">\n              <td>{{order.orderNo}}</td>\n              <td>{{order.tableNo}}</td>\n              <td>{{order.quantity}}</td>\n              <td>{{order.size}}</td>\n              <td>{{order.menu.name}}</td>\n              <td>{{order.server}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Orders by Table\">\n    <ng-template ngbTabContent>\n\n      <div class=\"container\">\n        <div class=\"row mb-3 text-center\">\n          <div *ngFor=\"let table of ordersByTable; let i =index\" class=\"card col-md-5 p-0 m-4 box-shadow\">\n            <div class=\"card-header\">\n              <div class=\"d-inline\">\n                <h4 class=\"my-0 font-weight-normal d-inline float-left\">Order # {{table.orderNo}}</h4>\n                <h4 class=\"my-0 font-weight-normal d-inline float-right\">Table # {{table.tableNo}}</h4>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"container\">\n                <div *ngFor=\"let order of table.orders; let j = index \" class=\"row\">\n                  <div class=\"col\">{{order.quantity}}</div>\n                  <div class=\"col\">{{order.menu.prices[order.size].type}}</div>\n                  <div class=\"col\"> {{order.menu.name}}</div>\n                  <div class=\"col\"> {{order.status}}</div>\n                  <button class=\"btn btn-danger btn-sm mb-3\" (click)=\"cancelOrder(i, j)\">X</button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-footer text-muted\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addOrder(i)\">Add</button>\n                <button type=\"button\" class=\"btn  btn-danger\" (click)=\"closeOrder(table.orderNo)\">Close</button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "../../../../../src/app/app-waitress/app-waitress.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu.service.ts");
var add_order_component_1 = __webpack_require__("../../../../../src/app/app-waitress/add-order/add-order.component.ts");
var waitress_service_1 = __webpack_require__("../../../../../src/app/services/waitress.service.ts");
var AppWaitressComponent = /** @class */ (function () {
    function AppWaitressComponent(config, socketService, waitressService, menuService, modalService) {
        this.socketService = socketService;
        this.waitressService = waitressService;
        this.menuService = menuService;
        this.modalService = modalService;
        this.orders = [];
        this.menus = {};
        this.menuKeys = [];
        this.ordersByTable = [];
        this.server = "";
        config.justify = 'center';
        config.type = 'pills';
        this.server = "BISHAL";
    }
    AppWaitressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            if (data["success"]) {
                _this.sortMenus(data["menus"]);
            }
            else {
                console.log("Error fetching menus!");
            }
        });
        this.socketService.hubConnection.on('test', function (receivedMessage) {
            console.log(receivedMessage);
            return receivedMessage;
        });
    };
    AppWaitressComponent.prototype.sortMenus = function (menus) {
        var _this = this;
        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
            var menu = menus_1[_i];
            this.menus[menu['_id']['$oid']] = menu;
            this.menuKeys.push(menu['_id']['$oid']);
        }
        this.waitressService.getAllActiveOrders()
            .subscribe(function (data) {
            if (data["success"]) {
                var orders = data["orders"];
                console.log(orders);
                console.log(menus);
                for (var i = 0; i < orders.length; i++) {
                    var ordersArray = [];
                    var tableOrders = orders[i].orders;
                    for (var j = 0; j < tableOrders.length; j++) {
                        tableOrders[j].menu = _this.menus[tableOrders[j].menuId];
                        ordersArray.push(tableOrders[j]);
                        _this.orders.push({
                            orderNo: orders[i].orderNo,
                            tableNo: orders[i].tableNo,
                            quantity: tableOrders[j].quantity,
                            size: tableOrders[j].menu.prices[tableOrders[j].size].type,
                            server: orders[i].server,
                            menu: tableOrders[j].menu
                        });
                    }
                    _this.ordersByTable.push({
                        orderNo: orders[i].orderNo,
                        tableNo: orders[i].tableNo,
                        orders: ordersArray
                    });
                }
                console.log(_this.ordersByTable);
            }
            else {
                console.log("Error fetching orders!");
            }
        });
        //sort the menus based on their menuSection
    };
    AppWaitressComponent.prototype.viewOrder = function (orderId) {
        //const modalRef = this.modalService.open(ViewDetailsComponent, { size: "lg" });
        //modalRef.componentInstance.menu = menu;
    };
    AppWaitressComponent.prototype.cancelOrder = function (tableIndex, OrderIndex) {
        var _this = this;
        this.waitressService.cancelOrder({ orderId: this.ordersByTable[tableIndex].orderNo, cancelId: this.ordersByTable[tableIndex].orders[OrderIndex].date })
            .subscribe(function (data) {
            if (data["success"]) {
                var orderMenu = _this.ordersByTable[tableIndex].orders[OrderIndex].menu;
                var orderNo = _this.ordersByTable[tableIndex].orderNo;
                for (var i = 0; i < _this.orders.length; i++) {
                    if (_this.orders[i].orderNo == orderNo && _this.orders[i].menu == orderMenu) {
                        _this.orders.splice(i, 1);
                        break;
                    }
                }
                _this.ordersByTable[tableIndex].orders.splice(OrderIndex, 1);
                console.log("Order Successfully canceled");
                //websocket call
            }
            else {
                console.log("Problems Canceling the order");
            }
        });
    };
    AppWaitressComponent.prototype.closeOrder = function (orderId) {
        var _this = this;
        console.log("orderId", orderId);
        this.waitressService.closeOrder(orderId)
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Order Successfully closed");
                //remove from ordersByTable
                for (var i = 0; i < _this.ordersByTable.length; i++) {
                    if (_this.ordersByTable[i].orderNo == orderId) {
                        _this.ordersByTable.splice(i, 1);
                    }
                }
                //websocket call
            }
            else {
                console.log("Problems Closing the order");
            }
        });
    };
    AppWaitressComponent.prototype.addOrder = function (tableIndex) {
        var modalRef = this.modalService.open(add_order_component_1.AddOrderComponent);
        modalRef.componentInstance.data = {
            menus: Object.values(this.menus),
            server: this.server,
            tableIndex: tableIndex,
            orders: this.orders,
            ordersByTable: this.ordersByTable
        };
        this.socketService.hubConnection
            .invoke('test', "Testing 1 2 3!")
            .catch(function (err) { return console.error(err); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AppWaitressComponent.prototype, "server", void 0);
    AppWaitressComponent = __decorate([
        core_1.Component({
            selector: 'app-waitress',
            template: __webpack_require__("../../../../../src/app/app-waitress/app-waitress.component.html"),
            providers: [ng_bootstrap_1.NgbTabsetConfig]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbTabsetConfig,
            socket_service_1.SocketService,
            waitress_service_1.WaitressService,
            menu_service_1.MenuService,
            ng_bootstrap_1.NgbModal])
    ], AppWaitressComponent);
    return AppWaitressComponent;
}());
exports.AppWaitressComponent = AppWaitressComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Rosas Italian And Mexican\n  </h1>\n  </div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var app_admin_module_1 = __webpack_require__("../../../../../src/app/app-admin/app-admin.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app.routing.module.ts");
var app_login_component_1 = __webpack_require__("../../../../../src/app/app-login/app-login.component.ts");
var app_service_1 = __webpack_require__("../../../../../src/app/services/app.service.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu.service.ts");
var employee_service_1 = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var app_customer_modules_1 = __webpack_require__("../../../../../src/app/app-customer/app-customer.modules.ts");
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var app_waitress_component_1 = __webpack_require__("../../../../../src/app/app-waitress/app-waitress.component.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var add_order_component_1 = __webpack_require__("../../../../../src/app/app-waitress/add-order/add-order.component.ts");
var waitress_service_1 = __webpack_require__("../../../../../src/app/services/waitress.service.ts");
var main_pipe_module_1 = __webpack_require__("../../../../../src/app/pipes/main-pipe.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, app_login_component_1.AppLoginComponent, page_not_found_component_1.PageNotFoundComponent, app_waitress_component_1.AppWaitressComponent, add_order_component_1.AddOrderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                app_admin_module_1.AppAdminModule,
                app_customer_modules_1.AppCustomerModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                main_pipe_module_1.MainPipeModule
            ],
            providers: [app_service_1.AppService, menu_service_1.MenuService, employee_service_1.EmployeeService, customer_service_1.CustomerService, socket_service_1.SocketService, waitress_service_1.WaitressService],
            entryComponents: [add_order_component_1.AddOrderComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_login_component_1 = __webpack_require__("../../../../../src/app/app-login/app-login.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var menu_component_1 = __webpack_require__("../../../../../src/app/app-admin/menu/menu.component.ts");
var employee_component_1 = __webpack_require__("../../../../../src/app/app-admin/employee/employee.component.ts");
var app_admin_component_1 = __webpack_require__("../../../../../src/app/app-admin/app-admin.component.ts");
var app_customer_component_1 = __webpack_require__("../../../../../src/app/app-customer/app-customer.component.ts");
var app_waitress_component_1 = __webpack_require__("../../../../../src/app/app-waitress/app-waitress.component.ts");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'customer', component: app_customer_component_1.AppCustomerComponent },
    { path: 'login', component: app_login_component_1.AppLoginComponent },
    {
        path: "admin", component: app_admin_component_1.AppAdminComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: "menu", component: menu_component_1.MenuComponent },
            { path: "employee", component: employee_component_1.EmployeeComponent }
        ]
    },
    { path: 'waitress', component: app_waitress_component_1.AppWaitressComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/dataModels/employee.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "../../../../../src/app/dataModels/menu.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nutrition_1 = __webpack_require__("../../../../../src/app/dataModels/nutrition.ts");
exports.MenuType = ["PASTA A LA CARTE", "SAUCES", "ENTREES A LA CARTE", "SOUP & SALAD", "SANDWICHES", "SIDES", "DESSERTS", "BEVERAGES"];
exports.SizeList = ["REGULAR", "SMALL", "LARGE"];
var Menu = /** @class */ (function () {
    function Menu() {
        this.prices = [];
        this.ingredients = [];
        this.nutrition = new nutrition_1.Nutrition();
    }
    return Menu;
}());
exports.Menu = Menu;
var Price = /** @class */ (function () {
    function Price() {
    }
    return Price;
}());
exports.Price = Price;


/***/ }),

/***/ "../../../../../src/app/dataModels/nutrition.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyValues = {
    "fat": 65,
    "satFat": 20,
    "cholestrol": 300,
    "sodium": 2400,
    "carbs": 300,
    "fiber": 25
};
var Fat = /** @class */ (function () {
    function Fat() {
        this.fat = 0;
        this.satFat = 0;
        this.unsatFat = 0;
        this.transFat = 0;
    }
    return Fat;
}());
var Vitamin = /** @class */ (function () {
    function Vitamin() {
        this.vita = 0;
        this.vitc = 0;
    }
    return Vitamin;
}());
var Carbs = /** @class */ (function () {
    function Carbs() {
        this.carbs = 0;
        this.sugar = 0;
        this.fiber = 0;
    }
    return Carbs;
}());
var Calories = /** @class */ (function () {
    function Calories() {
        this.calories = 0;
        this.caloriesFromFat = 0;
    }
    return Calories;
}());
var Nutrition = /** @class */ (function () {
    function Nutrition() {
        this.calories = new Calories();
        this.fat = new Fat();
        this.cholestrol = 0;
        this.sodium = 0;
        this.carbs = new Carbs();
        this.protein = 0;
        this.vitamin = new Vitamin();
        this.calcium = 0;
        this.iron = 0;
    }
    return Nutrition;
}());
exports.Nutrition = Nutrition;


/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n\tline-height: 1.2;\n\tmargin: 0;\n}\nhtml {\n\tcolor: #888;\n\tdisplay: table;\n\tfont-family: sans-serif;\n\theight: 100%;\n\ttext-align: center;\n\twidth: 100%;\n}\nbody {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\tmargin: 2em auto;\n}\nh1 {\n\tcolor: #555;\n\tfont-size: 2em;\n\tfont-weight: 400;\n}\np {\n\tmargin: 0 auto;\n\twidth: 280px;\n}\n@media only screen and (max-width: 280px) {\n\tbody, p {\n\t\twidth: 95%;\n\t}\n\th1 {\n\t\tfont-size: 1.5em;\n\t\tmargin: 0 0 0.3em;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404 Page Not Found</h1>\n<p>Sorry, but the page you were trying to view does not exist.</p>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].toLowerCase().includes(value.toLowerCase()); });
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        }),
        core_1.Injectable()
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ "../../../../../src/app/pipes/main-pipe.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var filter_pipe_1 = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
var MainPipeModule = /** @class */ (function () {
    function MainPipeModule() {
    }
    MainPipeModule = __decorate([
        core_1.NgModule({
            declarations: [filter_pipe_1.FilterPipe],
            imports: [common_1.CommonModule],
            exports: [filter_pipe_1.FilterPipe]
        })
    ], MainPipeModule);
    return MainPipeModule;
}());
exports.MainPipeModule = MainPipeModule;


/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AppService.prototype.login = function (data) {
        return this.http.post(this.apiUrl + "login", data, this.options)
            .map(function (res) { return res.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    CustomerService.prototype.addOrders = function (data) {
        return this.http.post(this.apiUrl + "addOrders", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAllOrders = function () {
        return this.http.get(this.apiUrl + "getAllOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAllActiveOrders = function () {
        return this.http.get(this.apiUrl + "getAllActiveOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.closeOrder = function () {
        return this.http.get(this.apiUrl + "closeOrder/", this.options)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.cancelOrder = function (data) {
        return this.http.post(this.apiUrl + "closeOrder", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;


/***/ }),

/***/ "../../../../../src/app/services/employee.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.apiUrl + "getAllEmployees", this.options)
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.apiUrl + "addEmployee", employee, this.options)
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.post(this.apiUrl + "updateEmployee", employee, this.options)
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.apiUrl + "deleteEmployee/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    MenuService.prototype.getAllMenu = function () {
        return this.http.get(this.apiUrl + "getAllMenu", this.options)
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.addMenu = function (menu) {
        return this.http.post(this.apiUrl + "addMenu", menu, this.options)
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.updateMenu = function (menu) {
        return this.http.post(this.apiUrl + "updateMenu", menu, this.options)
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.deleteMenu = function (id) {
        return this.http.delete(this.apiUrl + "deleteMenu/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    MenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;


/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var signalr_client_1 = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var SocketService = /** @class */ (function () {
    function SocketService(http) {
        this.http = http;
        this.hubConnection = new signalr_client_1.HubConnection('http://localhost:5000/test');
        this.hubConnection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection :('); });
    }
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;


/***/ }),

/***/ "../../../../../src/app/services/waitress.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var WaitressService = /** @class */ (function () {
    function WaitressService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:5000/api/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    WaitressService.prototype.addOrders = function (data) {
        return this.http.post(this.apiUrl + "addOrders", data, this.options)
            .map(function (res) { return res.json(); });
    };
    WaitressService.prototype.getAllOrders = function () {
        return this.http.get(this.apiUrl + "getAllOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    WaitressService.prototype.getAllActiveOrders = function () {
        return this.http.get(this.apiUrl + "getAllActiveOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    WaitressService.prototype.closeOrder = function (orderId) {
        console.log(orderId);
        return this.http.get(this.apiUrl + "closeOrder?orderNo=" + orderId, this.options)
            .map(function (res) { return res.json(); });
    };
    WaitressService.prototype.cancelOrder = function (data) {
        console.log(JSON.stringify(data));
        return this.http.post(this.apiUrl + "cancelOrder", JSON.stringify(data), this.options)
            .map(function (res) { return res.json(); });
    };
    WaitressService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WaitressService);
    return WaitressService;
}());
exports.WaitressService = WaitressService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map