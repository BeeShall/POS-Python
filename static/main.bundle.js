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
/*

AppAdminComponent

DESCRIPTION: This is a component class for thea admin page

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
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
/*

AddEmployeeComponent

DESCRIPTION: This is a component class for modal for adding and upadting employees

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(activeModal, employeeService) {
        this.activeModal = activeModal;
        this.employeeService = employeeService;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        if (this.newAdd) {
            //initialize the employee if opened in add mode
            this.employee = new employee_1.Employee();
        }
    };
    //this method is used to add or edit the employee in the database respectively
    AddEmployeeComponent.prototype.submit = function () {
        var _this = this;
        if (this.newAdd) {
            this.employeeService.addEmployee(this.employee)
                .subscribe(function (data) {
                if (data["success"]) {
                    console.log("Employee added");
                    //in the case of new add, the server returns the generated username
                    //so this usename is added to the existing data
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
/*

EmployeeComponent

DESCRIPTION: This is a component class for the employee page in the admin section

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(modalService, 
        //fetching all the employees from the databse
        employeeService) {
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
    //this method opens the add employee modal
    EmployeeComponent.prototype.openAddMenu = function () {
        var modalRef = this.modalService.open(add_employee_component_1.AddEmployeeComponent);
        modalRef.componentInstance.employees = this.employees;
        //to indicate if the modal should be opened in add mode
        modalRef.componentInstance.newAdd = true;
    };
    //this method opens the add employee modal in edit mode
    EmployeeComponent.prototype.edit = function (employee) {
        var modalRef = this.modalService.open(add_employee_component_1.AddEmployeeComponent);
        modalRef.componentInstance.employee = employee;
        //to indicate if the modal should be opened in edit mode
        modalRef.componentInstance.newAdd = false;
    };
    //this method deletes the employee from the database
    //PARAMETERS:
    //username: username of the employee to delete
    //index: index of the employee in the local array to delete locally
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

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-4\">\n  <div class=\"container\">\n    <div id=\"pwd-container\" class=\"row\">\n      <form #addMenuForm=\"ngForm\" (ngSubmit)=\"submit(addMenuForm)\" role=\"addMenu\" ngNativeValidate>\n        <div class=\"form-group row\">\n          <label for=\"name\">Name: </label>\n          <input type=\"text\" name=\"menu.name\" id=\"name\" placeholder=\"Name\" class=\"form-control input-lg\" [(ngModel)]=\"menu.name\">\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"desc\">Description: </label>\n          <input type=\"text\" name=\"menu.description\" id=\"desc\" placeholder=\"Name\" class=\"form-control input-lg\" [(ngModel)]=\"menu.description\">\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"ingredient\">Ingredients: </label>\n          <input type=\"text\" name=\"menu.ingredients\" id=\"ingredient\" placeholder=\"Add an ingredient\" class=\"form-control input-lg\"\n            [(ngModel)]=\"ingredient\">\n          <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"menu.ingredients.push(ingredient)\">Add</button>\n        </div>\n        <ul>\n          <li *ngFor=\"let ing of menu.ingredients; let i = index\">{{ing}}\n            <button class=\"btn btn-danger btn-sm\" (click)=\"menu.ingredients.splice(i,1)\"> X </button>\n          </li>\n        </ul>\n        <div class=\"form-group row\">\n          <label for=\"menuType\">Menu Type:</label>\n          <input type=\"text\" name=\"menu.menutype\" id=\"menutype\" class=\"form-control input-lg\" list=\"menuTypes\" [(ngModel)]=\"menu.menutype\">\n          <datalist id=\"menuTypes\">\n            <option *ngFor=\"let mt of menuTypes\"> {{mt}}</option>\n          </datalist>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"price\">Price: </label>\n          <input type=\"text\" name=\"type\" id=\"type\" placeholder=\"Type\" list=\"sizeList\" class=\"form-control col-sm-4\" [(ngModel)]=\"type\">\n          <datalist id=\"sizeList\">\n            <option *ngFor=\"let size of sizeList\"> {{size}}</option>\n          </datalist>\n          <input type=\"number\" min=\"0.00\" max=\"10000.00\" step=\"0.01\" name=\"price\" id=\"price\" placeholder=\"price\" class=\"form-control col-sm-3\"\n            [(ngModel)]=\"price\" />\n          <button type=\"button\" class=\"btn btn-small\" (click)=\"menu.prices.push({type : type, price: price})\">Add</button>\n          <ul>\n            <li *ngFor=\"let price of menu.prices; let i = index\">{{price.type}} : {{price.price}}\n              <button (click)=\"menu.prices.splice(i,1)\"> X </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"fileUpload\">Choose Files to Upload: </label>\n          <input type=\"file\" (change)=addImage($event) multiple />\n          <br/>\n          <ul>\n            <li *ngFor=\"let item of menu.images; let i = index\">\n                <strong>{{ item?.name }}</strong>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeImage(i)\">Remove\n              </button>\n            </li>\n          </ul>\n        </div>\n\n\n        <hr>\n\n        <section ngModelGroup=\"nutrition\" class=\" border m-0 p-2\">\n          <header class=\"h1\">Nutrition Facts\n          </header>\n          <table class=\"performance-facts__table small\">\n            <tbody>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Calories</b>\n                  <input type=\"number\" name=\"calories\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calories.calories\">\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Calories from Fat\n                  <input type=\"number\" name=\"caloriesFromFat\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calories.caloriesFromFat\">\n                </td>\n              </tr>\n              <tr class=\"thick-row\">\n                <td colspan=\"3\" class=\"small\">\n                  <b>% Daily Value*</b>\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Total Fat</b>\n                  <input type=\"number\" name=\"fat\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.fat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.fat.fat/dailyValues.fat).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Saturated Fat\n                  <input name=\"satFat\" type=\"number\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.satFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.fat.satFat/dailyValues.satFat).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Unsaturated Fat\n                  <input type=\"number\" name=\"unsaatFat\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.unsatFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Trans Fat\n                  <input type=\"number\" name=\"transFat\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.fat.transFat\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Cholesterol</b>\n                  <input type=\"number\" name=\"cholestrol\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.cholestrol\">mg\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.cholestrol/dailyValues.cholestrol).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Sodium</b>\n                  <input type=\"number\" name=\"sodium\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.sodium\">mg\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.sodium/dailyValues.sodium).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Total Carbohydrate</b>\n                  <input type=\"number\" name=\"carbs\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.carbs\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.carbs.carbs/dailyValues.carbs).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Dietary Fiber\n                  <input type=\"number\" name=\"fiber\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.fiber\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  {{(menu.nutrition.carbs.fiber/dailyValues.fiber).toPrecision(2)*100}}%\n                </td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\">\n                </td>\n                <th class=\"border-top font-weight-normal text-nowrap\">\n                  Sugars\n                  <input type=\"number\" name=\"sugar\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.carbs.sugar\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n              <tr class=\"thick-end\">\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  <b>Protein</b>\n                  <input type=\"number\" name=\"protein\" min=\"0\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.protein\">g\n                </th>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <table class=\"performance-facts__table--grid small\">\n            <tbody>\n              <tr>\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  Vitamin A\n                  <input type=\"number\" name=\"vita\" min=\"0\" max=\"100\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.vitamin.vita\">%\n                </td>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Vitamin C\n                  <input type=\"number\" name=\"vitc\" min=\"0\" max=\"100\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.vitamin.vitc\">%\n                </td>\n              </tr>\n              <tr class=\"border-bottom\">\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                  Calcium\n                  <input type=\"number\" name=\"calcium\" min=\"0\" max=\"100\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.calcium\">%\n                </td>\n                <td class=\"border-top font-weight-normal text-nowrap\">\n                  Iron\n                  <input type=\"number\" name=\"iron\" min=\"0\" max=\"100\" class=\"form-control form-control-sm col-sm-2 d-inline\" [(ngModel)]=\"menu.nutrition.iron\">%\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <p class=\"small\">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on\n            your calorie needs:</p>\n\n          <table class=\"performance-facts__table--small small border-bottom\">\n            <thead>\n              <tr>\n                <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\"></td>\n                <th class=\"border-top font-weight-normal text-nowrap\">Calories:</th>\n                <th class=\"border-top font-weight-normal text-nowrap\">2,000</th>\n                <th class=\"border-top font-weight-normal text-nowrap\">2,500</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Total Fat</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.fat}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">80g</td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\"></td>\n                <th class=\"border-top font-weight-normal text-nowrap\">Saturated Fat</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.satFat}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Cholesterol</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.cholestrol}}mg</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">300 mg</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Sodium</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.sodium}}mg</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n              </tr>\n              <tr>\n                <th colspan=\"3\" class=\"border-top font-weight-normal text-nowrap\">Total Carbohydrate</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.carbs}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">375g</td>\n              </tr>\n              <tr>\n                <td class=\"blank-cell\"></td>\n                <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Dietary Fiber</th>\n                <td class=\"border-top font-weight-normal text-nowrap\">{{dailyValues.fiber}}g</td>\n                <td class=\"border-top font-weight-normal text-nowrap\">30g</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <p class=\"small\">\n            Calories per gram:\n          </p>\n          <p class=\"small text-center\">\n            Fat 9 &bull; Carbohydrate 4 &bull; Protein 4\n          </p>\n\n        </section>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" name=\"go\" class=\"btn btn-outline-primary\">{{newAdd?\"Add\":\"Update\"}}</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
var fileUpload_service_1 = __webpack_require__("../../../../../src/app/services/fileUpload.service.ts");
/*

AddMenuComponent

DESCRIPTION: This is a component class for the modal for adding menu

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(activeModal, menuService, fileUploadService) {
        this.activeModal = activeModal;
        this.menuService = menuService;
        this.fileUploadService = fileUploadService;
        //list of all the types of menu possible
        this.menuTypes = menu_1.MenuType;
        //list of all the sizes available
        this.sizeList = menu_1.SizeList;
        //list of all the daily values for the nutrition
        this.dailyValues = nutrition_1.DailyValues;
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        if (this.newAdd) {
            //if a new menu is being added, initialize everything to empty
            this.menu = new menu_1.Menu();
            this.images = [];
        }
        else {
            this.images = this.menu.images;
        }
    };
    //this method is used to add image to the list of images
    AddMenuComponent.prototype.addImage = function (uploader) {
        var files = uploader.target.files;
        for (var i = 0; i < files.length; i++) {
            this.images.push(files[i]);
        }
        console.log(files);
        console.log(this.images);
    };
    //this method is used to remove the images 
    AddMenuComponent.prototype.removeImage = function (index) {
        //remove from firebase as well
        this.images.splice(index, 1);
    };
    //this method is used to commit the images to firebase and 
    //submit all the menu data to the databse
    AddMenuComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.menu);
        console.log(this.images);
        //uploading images to the firebase
        //and generating the URL for each image
        for (var i = 0; i < this.images.length; i++) {
            this.fileUploadService.pushUpload(this.images[i]);
            var data = {
                "name": this.images[i].name,
                "url": "https://firebasestorage.googleapis.com/v0/b/seniorproject-45c7b.appspot.com/o/" + this.images[i].name + "?alt=media"
            };
            console.log(data);
            if (data != null) {
                this.menu.images.push(data);
            }
        }
        //add pictures
        //if new menu is being added
        if (this.newAdd) {
            //add the menus and picture URLS to the databse
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
            menu_service_1.MenuService,
            fileUpload_service_1.FileUploadService])
    ], AddMenuComponent);
    return AddMenuComponent;
}());
exports.AddMenuComponent = AddMenuComponent;


/***/ }),

/***/ "../../../../../src/app/app-admin/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <nav class=\"navbar navbar-light bg-faded\">\n    <form class=\"form-inline\">\n      <input type=\"text\" class=\"form-control input-lg\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\n      <button class=\"btn btn-outline-primary m-2\" (click)=\"openAddMenu()\">Add</button>\n    </form>\n  </nav>\n  <table class=\"table table-hover table-responsive text-center\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Description</th>\n        <th>MenuType</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let menu of menus| filter : 'name' : searchString; let i = index;\">\n        <td>{{menu.name}}</td>\n        <td>{{menu.description}}</td>\n        <td>{{menu.menutype}}</td>\n        <td>\n          <button class=\"btn btn-info\" (click)=\"viewDetails(menu)\">View Details/Edit</button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"delete(menu['_id']['$oid'], i)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

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
/*

MenuComponent

DESCRIPTION: This is a component class for the menu page in the admin section

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var MenuComponent = /** @class */ (function () {
    function MenuComponent(modalService, menuService) {
        var _this = this;
        this.modalService = modalService;
        this.menuService = menuService;
        //fecthcing all the menus in the database
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            _this.menus = data["menus"];
            console.log(_this.menus);
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    //this method is used to display the add-menu modal when add button is clicked
    MenuComponent.prototype.openAddMenu = function () {
        var modalRef = this.modalService.open(add_menu_component_1.AddMenuComponent, { size: "lg" });
        modalRef.componentInstance.menus = this.menus;
        //parameter to the modal to indicate that add mode is on
        modalRef.componentInstance.newAdd = true;
    };
    //this method is used to view the details of all give menu
    MenuComponent.prototype.viewDetails = function (menu) {
        var modalRef = this.modalService.open(add_menu_component_1.AddMenuComponent, { size: "lg" });
        modalRef.componentInstance.menu = menu;
        //parameter to the modal to indicate that add mode is on
        modalRef.componentInstance.newAdd = false;
    };
    //this method is used to delete a menu when the delete button is clicke
    //PARAMETERS:
    //menuId : id of the menu to be delete
    //index: index of the menu in the array to delete locally as well
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
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/*

MenuComponent

DESCRIPTION: This is a component class for the customer page of the application

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AppCustomerComponent = /** @class */ (function () {
    function AppCustomerComponent(config, menuService, customerService, socketService) {
        var _this = this;
        this.menuService = menuService;
        this.customerService = customerService;
        this.socketService = socketService;
        //configs for the tabs
        config.justify = 'center';
        config.type = 'pills';
        //initialization of the orders
        this.pendingOrders = [];
        this.activeOrders = [];
        //fetching all the menus from the database
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            if (data["success"]) {
                _this.sortMenus(data["menus"]);
            }
            else {
                console.log("Error fetching menus!");
            }
        });
        //indicating the server that a customer has joined and
        // opening a websocket connection for real time updates
        this.socketService.join({
            "staff": false,
        });
    }
    //this method sorts the menu list fetched from the database such that
    //1. They are easy to iterate thought HTML
    //2. keyed on ids so that they are easy to refer later
    //PARAMETERS: menus -> list of all the menus fetched from the database
    AppCustomerComponent.prototype.sortMenus = function (menus) {
        var _this = this;
        this.dispMenu = {};
        //initializing the object will all the menusections
        for (var _i = 0, MenuType_1 = menu_1.MenuType; _i < MenuType_1.length; _i++) {
            var type = MenuType_1[_i];
            this.dispMenu[type] = [];
        }
        //map to store menu keyed with their id
        var idMenu = {};
        //sorting the menus into idMenu and dispMenu
        for (var _a = 0, menus_1 = menus; _a < menus_1.length; _a++) {
            var menu = menus_1[_a];
            idMenu[menu["_id"]["$oid"]] = menu;
            this.dispMenu[menu.menutype].push(menu);
        }
        //fetching all the orders for the customer from the database
        //this is for when the customer is accessing the page agian after the order has already been started
        this.customerService.getAllOrders()
            .subscribe(function (data) {
            if (data["success"]) {
                var orders = data["orders"];
                console.log(data);
                console.log("Orders", orders);
                //adding the menu details to each order, so that its easy to fetch the menu details for calculations and display
                //adding the orders to the list of active orders
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
            customer_service_1.CustomerService,
            socket_service_1.SocketService])
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
var order_complete_component_1 = __webpack_require__("../../../../../src/app/app-customer/orders/order-complete/order-complete.component.ts");
var AppCustomerModule = /** @class */ (function () {
    function AppCustomerModule() {
    }
    AppCustomerModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
            exports: [],
            declarations: [app_customer_component_1.AppCustomerComponent, display_menu_component_1.DisplayMenuComponent, orders_component_1.OrdersComponent, view_details_component_1.ViewDetailsComponent, order_complete_component_1.OrderCompleteComponent],
            entryComponents: [view_details_component_1.ViewDetailsComponent, order_complete_component_1.OrderCompleteComponent],
            providers: [],
        })
    ], AppCustomerModule);
    return AppCustomerModule;
}());
exports.AppCustomerModule = AppCustomerModule;


/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/display-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg {\n\tdisplay: block;\n\tmax-width: 100%;\n\theight: auto;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/display-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel *ngFor=\"let section of sections\" title=\"{{section}}\">\n    <ng-template ngbPanelContent>\n\n      <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n            <div *ngFor=\"let menu of dispMenu[section]\" class=\"col-md-4\">\n              <div class=\"card mb-4 box-shadow\">\n                <div class=\"container my-2\">\n                  <ngb-carousel *ngFor=\"let image of menu.images\">\n                    <ng-template ngbSlide>\n                      <img [src]=\"image.url\" alt=\"image.name\">\n                    </ng-template>\n                  </ngb-carousel>\n                </div>\n                <div class=\"card-body\">\n                  <p class=\"card-text\">{{menu.name}}</p>\n                  <p class=\"card-text\">{{menu.description}}</p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div>\n                      <div>\n                        <select *ngIf=\"menu.prices.length > 1\" [(ngModel)]=\"priceIndex\" class=\"form-control mb-2 mr-sm-2\">\n                          <option *ngFor=\"let price of menu.prices; let i = index\" value=\"{{i}}\">{{price.type}}</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select [(ngModel)]=\"quantity\" class=\"form-control mb-2 mr-sm-2\">\n                          <option *ngFor=\"let index of numbers\" value=\"{{index}}\">{{index}}</option>\n                        </select>\n                      </div>\n                      <div>\n\n                      </div>\n                    </div>\n\n                    <small class=\"text-muted\">$ {{ (quantity ) ? ((menu.prices.length > 1 && priceIndex) ? menu.prices[priceIndex].price :menu.prices[0].price)\n                      * quantity : 0 }}</small>\n                  </div>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"btn-group\">\n                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"openDetails(menu)\">View</button>\n                      <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"addToOrders(menu, quantity, priceIndex)\">Add</button>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

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
/*

DisplayMenuComponent

DESCRIPTION: This is a component class for the menu page in the customer section

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var DisplayMenuComponent = /** @class */ (function () {
    function DisplayMenuComponent(modalService) {
        this.modalService = modalService;
        //all the different menu type available i.e. entree, appetizers etc
        this.sections = menu_1.MenuType;
        //array holding template numbers for quantity field
        this.numbers = [];
        //initialzing the qauntity array
        this.numbers = Array(5).fill(0).map(function (x, i) { return i + 1; });
    }
    //this method is used to add an order to the list of pending orders for the component
    //PARAMETERS:
    //menu : menu being added to order
    //quantity: quantity of menu being ordered
    //priceIndex: indicates the index of menu size selected to fetch the price
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
    //this method is used to view the modal for detailed menu including nutritional info, pictures and review for a specific menu
    //PARAMETERS: menu -> menu to view the details for
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
            styles: [__webpack_require__("../../../../../src/app/app-customer/display-menu/display-menu.component.css")]
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
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  font-size: small;\n  line-height: 1.4;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.performance-facts__table, .performance-facts__table--small, .performance-facts__table--grid {\n  width: 100%;\n}\n.performance-facts__table td:last-child, .performance-facts__table--small td:last-child, .performance-facts__table--grid td:last-child {\n  text-align: right;\n}\n.performance-facts__table .blank-cell, .performance-facts__table--small .blank-cell, .performance-facts__table--grid .blank-cell {\n  width: 1rem;\n  border-top: 0;\n}\n.performance-facts__table .thick-row th, .performance-facts__table--small .thick-row th, .performance-facts__table--grid .thick-row th, .performance-facts__table .thick-row td, .performance-facts__table--small .thick-row td, .performance-facts__table--grid .thick-row td {\n  border-top-width: 5px;\n}\n.performance-facts__table--small td:last-child {\n  text-align: left;\n}\n.performance-facts__table--grid td:last-child {\n  text-align: left;\n}\n.performance-facts__table--grid td:last-child::before {\n  content: \"\\2022\";\n  font-weight: bold;\n  margin: 0 0.25rem 0 0;\n}\n.thick-end {\n  border-bottom: 10px solid black;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-customer/display-menu/view-details/view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{menu.name}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-0\">\n\n  <div class=\"container my-2\">\n    <ngb-carousel *ngFor=\"let image of menu.images\">\n      <ng-template ngbSlide>\n        <img [src]=\"image.url\" alt=\"image.name\">\n      </ng-template>\n    </ngb-carousel>\n  </div>\n\n  <div class=\"container my-2\">\n    <div class=\"card text-left p-2 mb-3\">\n      <div class=\"lead\">\n        <em>{{menu.description}} </em>\n      </div>\n\n      <div>\n        <span class=\"h5\">Ingredients:</span>\n        <span *ngFor=\"let ing of menu.ingredients\">\n          <em>{{ing}},</em>\n        </span>\n\n      </div>\n      <div class=\"text-left\">\n        <span class=\"h5\"> Prices: </span>\n        <div *ngFor=\"let price of menu.prices\" class=\"ml-4\">\n          <span>{{price.type}}</span> ......\n          <span>${{price.price}}</span>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class=\"m-0 p-0\">\n      <section class=\" border m-0 p-2\">\n        <header class=\"h1\">Nutrition Facts\n        </header>\n        <table class=\"performance-facts__table small\">\n          <tbody>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Calories</b>\n                {{menu.nutrition.calories.calories}}\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Calories from Fat {{menu.nutrition.calories.caloriesFromFat}}\n              </td>\n            </tr>\n            <tr class=\"thick-row\">\n              <td colspan=\"3\" class=\"small\">\n                <b>% Daily Value*</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Total Fat</b>\n                {{menu.nutrition.fat.fat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.fat.fat/dailyValues.fat).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Saturated Fat {{menu.nutrition.fat.satFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.fat.satFat/dailyValues.satFat).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Unsaturated Fat {{menu.nutrition.fat.unsatFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Trans Fat {{menu.nutrition.fat.transFat}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Cholesterol</b>\n                {{menu.nutrition.cholestrol}}mg\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.cholestrol/dailyValues.cholestrol).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Sodium</b>\n                {{menu.nutrition.sodium}}mg\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.sodium/dailyValues.sodium).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Total Carbohydrate</b>\n                {{menu.nutrition.carbs.carbs}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.carbs.carbs/dailyValues.carbs).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Dietary Fiber {{menu.nutrition.carbs.fiber}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                <b>{{(menu.nutrition.carbs.fiber/dailyValues.fiber).toPrecision(2)*100}}%</b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\">\n              </td>\n              <th class=\"border-top font-weight-normal text-nowrap\">\n                Sugars {{menu.nutrition.carbs.sugar}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n            <tr class=\"thick-end\">\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                <b>Protein</b>\n                {{menu.nutrition.protein}}g\n              </th>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <table class=\"performance-facts__table--grid small\">\n          <tbody>\n            <tr>\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                Vitamin A {{menu.nutrition.vitamin.vita}}%\n              </td>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Vitamin C {{menu.nutrition.vitamin.vitc}}%\n              </td>\n            </tr>\n            <tr class=\"border-bottom\">\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">\n                Calcium {{menu.nutrition.calcium}}%\n              </td>\n              <td class=\"border-top font-weight-normal text-nowrap\">\n                Iron {{menu.nutrition.iron}}%\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <p class=\"small\">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your\n          calorie needs:</p>\n\n        <table class=\"performance-facts__table--small small border-bottom\">\n          <thead>\n            <tr>\n              <td colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\"></td>\n              <th class=\"border-top font-weight-normal text-nowrap\">Calories:</th>\n              <th class=\"border-top font-weight-normal text-nowrap\">2,000</th>\n              <th class=\"border-top font-weight-normal text-nowrap\">2,500</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Total Fat</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">65g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">80g</td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\"></td>\n              <th class=\"border-top font-weight-normal text-nowrap\">Saturated Fat</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">20g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Cholesterol</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">300mg</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">300 mg</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Sodium</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">Less than</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">2,400mg</td>\n            </tr>\n            <tr>\n              <th colspan=\"3\" class=\"border-top font-weight-normal text-nowrap\">Total Carbohydrate</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">300g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">375g</td>\n            </tr>\n            <tr>\n              <td class=\"blank-cell\"></td>\n              <th colspan=\"2\" class=\"border-top font-weight-normal text-nowrap\">Dietary Fiber</th>\n              <td class=\"border-top font-weight-normal text-nowrap\">25g</td>\n              <td class=\"border-top font-weight-normal text-nowrap\">30g</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <p class=\"small\">\n          Calories per gram:\n        </p>\n        <p class=\"small text-center\">\n          Fat 9 &bull; Carbohydrate 4 &bull; Protein 4\n        </p>\n\n      </section>\n\n\n    </div>\n  </div>\n\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n    <ngb-panel title=\"Reviews\">\n      <ng-template ngbPanelContent>\n        <div *ngFor=\"let review of menu.reviews \" class=\"card p-2 mb-2 container\">\n          <div>\n            <span class=\"h6\">Rating: </span>\n            <ngb-rating [(rate)]=\"review.rating\" [readonly]=\"true\"></ngb-rating>\n\n          </div>\n          <div>\n            <span class=\"h6\">Review: </span>\n            <p>\n              {{review.review}}\n            </p>\n          </div>\n        </div>\n      </ng-template>\n    </ngb-panel>\n  </ngb-accordion>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

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
/*

ViewDetailsComponent

DESCRIPTION: This is a component class for the modal to display the details of a menu

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(activeModal) {
        this.activeModal = activeModal;
        //daily values for nutritions
        this.dailyValues = nutrition_1.DailyValues;
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
            styles: [__webpack_require__("../../../../../src/app/app-customer/display-menu/view-details/view-details.component.css")],
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());
exports.ViewDetailsComponent = ViewDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/orders/order-complete/order-complete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Thank You!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-0\">\n  <div class=\"card container mb-3 p-2\">\n    <ngb-alert *ngIf=\"alertEmailed\" [type]=\"success\" (close)=\"alertEmailed=False\">Successfully emailed receipt!</ngb-alert>\n    <label for=\"receipt-email\">Email your Receipt: </label>\n    <div class=\"input-group mb-3\">\n      <input type=\"email\" class=\"form-control col-sm-4 mr-1\" name=\"email\" [(ngModel)]=\"email\">\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"emailReceipt(email)\">Send</button>\n    </div>\n  </div>\n  <div class=\"card p-2\">\n    <div class=\"h3\"> Please rate the food you ordered: </div>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel *ngFor=\"let k of activeOrders\" title=\"{{k.menu.name}}\">\n        <ng-template ngbPanelContent>\n          <div class=\"input-group mb-3\">\n            <div class=\"mb-2\">\n              <span class=\"h6\">Rating: </span>\n              <ngb-rating name=\"rating\" [(ngModel)]=\"k.menu.rating\"></ngb-rating>\n            </div>\n            <div>\n              <span class=\"h6\">Review:</span>\n              <textarea class=\"form-control mb-1\" name=\"review\" [(ngModel)]=\"k.menu.review\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addReview(k.menu['_id']['$oid'], k.menu.rating, k.menu.review)\">Add Review</button>\n          </div>\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-customer/orders/order-complete/order-complete.component.ts":
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
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/*

OrderCompleteComponent

DESCRIPTION: This is a component class for the modal that displays after the payment has been complete
                This modal allows user to email a receipt and provide reviews for the food

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var OrderCompleteComponent = /** @class */ (function () {
    function OrderCompleteComponent(activeModal, customerService) {
        this.activeModal = activeModal;
        this.customerService = customerService;
        this.alertEmailed = false;
    }
    //this method adds the reviews to the specifc menu among the ones user ordered
    //PARAMETERS:
    //menuId: id of the menu being reviewd
    //rating: rating as integer for the menu
    //review: revies as string for the menu
    OrderCompleteComponent.prototype.addReview = function (menuId, rating, review) {
        //creating POST JSON data for the review
        var data = {
            menuId: menuId,
            review: {
                rating: rating,
                review: review
            }
        };
        //posting rhe review to the server
        this.customerService.addReview(data)
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Successfully added review");
            }
            else {
                console.log(data["error"]);
            }
        });
    };
    //this method is used to email a receript to the customer
    //PARAMETERS: email -> email address for the receipt to be mailed at
    OrderCompleteComponent.prototype.emailReceipt = function (email) {
        var _this = this;
        var data = {
            orderId: this.orderId,
            email: email
        };
        console.log(data);
        this.customerService.emailReceipt(data)
            .subscribe(function (data) {
            if (data["success"]) {
                _this.alertEmailed = true;
                console.log("Successfully added review");
            }
            else {
                console.log(data["error"]);
            }
        });
    };
    OrderCompleteComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OrderCompleteComponent.prototype, "orderId", void 0);
    OrderCompleteComponent = __decorate([
        core_1.Component({
            selector: 'order-complete',
            template: __webpack_require__("../../../../../src/app/app-customer/orders/order-complete/order-complete.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            customer_service_1.CustomerService])
    ], OrderCompleteComponent);
    return OrderCompleteComponent;
}());
exports.OrderCompleteComponent = OrderCompleteComponent;


/***/ }),

/***/ "../../../../../src/app/app-customer/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-4\">\n  <h5 class=\"card-header\">Pending Orders</h5>\n  <div class=\"card-body\">\n    <ul class=\"list-group mb-3\">\n      <li *ngFor=\"let k of pendingOrders; let i = index\" class=\"list-group-item d-flex justify-content-between d-flex\">\n        <div class=\"d-inline d-flex d-flex\">\n          <div class=\"text-muted mr-2\">\n            <span> {{k.quantity}} </span>\n            <span> {{k.menu.prices[k.size].type}} </span>\n          </div>\n          <div class=\"d-inline\">\n            <h6 class=\"my-0\">{{k.menu.name}}</h6>\n            <small class=\"text-muted\">{{k.menu.description}}</small>\n          </div>\n        </div>\n        <span class=\"text-muted\">${{k.menu.prices[k.size].price * k.quantity}}</span>\n        <div class=\"ml-2\">\n          <button class=\"btn btn-danger btn-sm\" (click)=\"removeOrder(i)\">X</button>\n        </div>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Total (USD)</span>\n        <strong>${{getTotal(pendingOrders)}}</strong>\n      </li>\n    </ul>\n    <div class=\"input-group-append float-right\">\n      <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"addToActive()\">Confirm</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card my-4\">\n  <h5 class=\"card-header\">Active Orders</h5>\n  <div class=\"card-body\">\n    <ul class=\"list-group mb-3\">\n      <li *ngFor=\"let k of activeOrders\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\n        <div class=\"d-inline d-flex d-flex\">\n          <div class=\"text-muted mr-2\">\n            <span> {{k.quantity}} </span>\n            <span> {{k.menu.prices[k.size].type}} </span>\n          </div>\n          <div class=\"d-inline\">\n            <h6 class=\"my-0\">{{k.menu.name}}</h6>\n            <small class=\"text-muted\">{{k.menu.description}}</small>\n          </div>\n        </div>\n        <span class=\"text-muted\">${{k.menu.prices[k.size].price * k.quantity}}</span>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Total (USD)</span>\n        <strong>${{getTotal(activeOrders)}}</strong>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Tax (USD)</span>\n        <strong>${{getTax()}}</strong>\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Tip (USD)</span>\n        <input type=\"number\" name=\"tipPercent\" min=\"0.00\" id=\"tipPercent\" class=\"form-control mb-2 ml-2 mr-sm-2\" (input)=\"getTip($event.target.value)\"\n          list=\"menuTypes\" [(ngModel)]=\"tipPercent\">\n        <strong class=\"col-md-2\">%</strong>\n        <datalist id=\"menuTypes\">\n          <option> 10</option>\n        </datalist>\n        <strong>$</strong>\n        <input type=\"number\" name=\"tip\" step='.01' id=\"tip\" class=\"form-control mb-2 ml-2 mr-sm-2\" [(ngModel)]=\"tip\">\n      </li>\n      <li class=\"list-group-item d-flex justify-content-between\">\n        <span>Grand Total (USD)</span>\n        <strong>${{ getGrandTotal() }}</strong>\n      </li>\n\n    </ul>\n\n    <div class=\"input-group-append float-right\">\n      <button type=\"submit\" class=\"btn btn-secondary \" href=\"#checkOut\" (click)=\"closeOrder()\">Pay and close order</button>\n    </div>\n  </div>\n</div>\n\n<div id=\"checkOut\" *ngIf=\"showCheckOut\" class=\"card my-4\">\n  <h5 class=\"card-header\">Check Out</h5>\n  <div class=\"card-body\">\n    <div class=\"col order-md-1\">\n      <form class=\"needs-validation\" novalidate=\"\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n            <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" (click)=\"completePayment()\">Complete Payment</button>\n      </form>\n    </div>\n\n\n  </div>\n</div>\n"

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
var order_complete_component_1 = __webpack_require__("../../../../../src/app/app-customer/orders/order-complete/order-complete.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/*

OrdersComponent

DESCRIPTION: This is a component class for the orders page in the customer section

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(customerService, modalService, socketService) {
        this.customerService = customerService;
        this.modalService = modalService;
        this.socketService = socketService;
        //tax rate for the food
        this.taxRate = 7;
        //stores the tip for the order
        this.tip = 0.0;
        this.showCheckOut = true;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //listening to the socket for real time updates about a new order
        this.socketService.getUpdatedOrder("Order Added")
            .subscribe(function (data) {
            console.log(data);
            if (data["success"]) {
                //adding the orders to the list
                (_a = _this.activeOrders).push.apply(_a, _this.pendingOrders);
                _this.pendingOrders.splice(0, _this.pendingOrders.length);
            }
            else {
                console.log(data);
            }
            var _a;
        });
    };
    // this method adds all the pending orders to the list of active orders
    OrdersComponent.prototype.addToActive = function () {
        //post all the pendingOrders
        var orders = [];
        for (var i = 0; i < this.pendingOrders.length; i++) {
            var tempOrder = this.pendingOrders[i];
            //creating a standard order object such that to add to the database
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
        //adding the order to the databse
        this.socketService.addOrder({ "orders": orders });
        /*
        this.customerService.addOrders(orders)
            .subscribe(data => {
                if (data["success"]) {
                    console.log("Successfully added order")
                    this.activeOrders.push(...this.pendingOrders)

                    this.pendingOrders.splice(0, this.pendingOrders.length);
                }
                else {
                    console.log(data)
                }
            })
            */
    };
    //this method is used to remove an order from the list of pending orders
    OrdersComponent.prototype.removeOrder = function (i) {
        console.log(this.pendingOrders[i]);
        this.pendingOrders.splice(i, 1);
    };
    //this method is used to calculate the total for all the orders
    OrdersComponent.prototype.getTotal = function (orders) {
        var total = 0;
        for (var i = 0; i < orders.length; i++) {
            total += orders[i].menu.prices[orders[i].size].price * orders[i].quantity;
        }
        this.total = total;
        return total;
    };
    //this method is used to calculate the tax amount for the order
    OrdersComponent.prototype.getTax = function () {
        return this.total * this.taxRate / 100;
    };
    //this method is used to calculate the tip amount for the order 
    //PARAMETERS: tipPercent -> the percent tip the customer decides
    OrdersComponent.prototype.getTip = function (tipPercent) {
        console.log(tipPercent);
        this.tip = tipPercent / 100 * (this.total + this.getTax());
    };
    //this method is used to get grand total including tax and tip for the order
    OrdersComponent.prototype.getGrandTotal = function () {
        return this.total + this.getTax() + this.tip;
    };
    //this method is used to close the order 
    OrdersComponent.prototype.closeOrder = function () {
        var _this = this;
        this.customerService.closeOrder()
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Order Successfully closed");
                _this.showCheckOut = true;
            }
            else {
                console.log("Problems Closing the order");
            }
        });
    };
    //this method is used to make the payment and complete transaction
    OrdersComponent.prototype.completePayment = function () {
        var _this = this;
        //payment data to send to the server
        var paymentData = {
            tax: this.getTax(),
            tip: this.tip
        };
        //list of all the menu ids ordered by the customer to use later for asking reviews
        var orderedMenus = new Set();
        //list of all the menus ordered by the custome without repition
        var reviewMenus = [];
        for (var i = 0; i < this.activeOrders.length; i++) {
            if (!orderedMenus.has(this.activeOrders[i]['menuId'])) {
                orderedMenus.add(this.activeOrders[i]['menuId']);
                reviewMenus.push(this.activeOrders[i]);
            }
        }
        //completing the payment
        this.customerService.completePayment(paymentData)
            .subscribe(function (data) {
            if (data["success"]) {
                console.log(reviewMenus);
                _this.socketService.completeOrder(data["orderId"]);
                //opening the reviews modal to ask the user for reviews and email reeipt
                var modalRef = _this.modalService.open(order_complete_component_1.OrderCompleteComponent, { size: "lg" });
                modalRef.componentInstance.activeOrders = reviewMenus;
                modalRef.componentInstance.orderId = data["orderId"];
            }
        });
    };
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
        __metadata("design:paramtypes", [customer_service_1.CustomerService,
            ng_bootstrap_1.NgbModal,
            socket_service_1.SocketService])
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
/*

AppLoginComponent

DESCRIPTION: This is a component class for the login page

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AppLoginComponent = /** @class */ (function () {
    function AppLoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AppLoginComponent.prototype.ngOnInit = function () { };
    //This method is called when the login button is clicked from the page
    AppLoginComponent.prototype.submit = function (loginForm) {
        var _this = this;
        console.log(loginForm.value);
        //sending an HTTP request for logging in
        this.appService.login(loginForm.value)
            .subscribe(function (data) {
            if (data["success"]) {
                _this.router.navigate(["/" + data["redirect"]]);
            }
            else {
                console.log("Error loggin in");
            }
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
        __metadata("design:paramtypes", [app_service_1.AppService,
            router_1.Router])
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
var customer_service_1 = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var moment = __webpack_require__("../../../../moment/moment.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/*
AddOrderComponent

DESCRIPTION: This is a component class for the adding an order from waitress portal

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(activeModal, customerService, socketService) {
        this.activeModal = activeModal;
        this.customerService = customerService;
        this.socketService = socketService;
        //list of template numbers for quantity
        this.numbers = [];
        this.numbers = Array(5).fill(0).map(function (x, i) { return i + 1; });
    }
    AddOrderComponent.prototype.ngOnInit = function () {
    };
    //this method is used to add an order to a table/customer
    //PARAMETERS:
    //menuIndex: index of the menu to add
    //quantity: number of item
    //size: size of the menu to add
    AddOrderComponent.prototype.addOrder = function (menuIndex, quantity, size) {
        //temp structure to post to the databse for order
        //should match the structure in the databse
        var order = {
            orderType: "WAITRESS",
            menuId: this.data.menus[menuIndex]['_id']['$oid'],
            date: moment().toISOString(),
            quantity: quantity,
            size: size ? size : 0,
            status: "PLACED"
        };
        var orderNo = this.data["ordersByTable"][this.data["tableIndex"]]["orderId"];
        //websocket push to add order
        this.socketService.addOrder({ "orderNo": orderNo, "orders": [order] });
        /*
        this.customerService.addOrders([order])
            .subscribe(data => {
                if (data["success"]) {
                    console.log("Successfully added order")

                    console.log(order)
                    console.log(this.data)

                    this.data.orders.push({
                        orderNo: this.data.ordersByTable[this.data.tableIndex].orderNo,
                        tableNo: this.data.ordersByTable[this.data.tableIndex].tableNo,
                        quantity: quantity,
                        size: size ? MenuType[size] : "REGULAR",
                        server: this.data.server,
                        menu: this.data.menus[menuIndex]
                    });

                    order["menu"] = this.data.menus[menuIndex]

                    this.data.ordersByTable[this.data.tableIndex].orders.push(order);

                    //websocket call
                }
                else {
                    console.log(data)
                }
            })
            */
    };
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
            customer_service_1.CustomerService,
            socket_service_1.SocketService])
    ], AddOrderComponent);
    return AddOrderComponent;
}());
exports.AddOrderComponent = AddOrderComponent;


/***/ }),

/***/ "../../../../../src/app/app-waitress/add-order/close-order/close-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Thank You!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body m-0\">\n  <div id=\"checkOut\" *ngIf=\"showCheckOut\" class=\"card my-4 p-2\">\n    <h5 class=\"card-header\">Check Out</h5>\n    <div class=\"card-body\">\n      <div class=\"col order-md-1\">\n        <form class=\"needs-validation\" novalidate=\"\">\n\n          <h4 class=\"mb-3\">Payment</h4>\n\n          <div class=\"d-block my-3\">\n            <div class=\"custom-control custom-radio\">\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-name\">Name on card</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n              <small class=\"text-muted\">Full name as displayed on card</small>\n              <div class=\"invalid-feedback\">\n                Name on card is required\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-number\">Credit card number</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n              <div class=\"invalid-feedback\">\n                Credit card number is required\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-expiration\">Expiration</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n              <div class=\"invalid-feedback\">\n                Expiration date required\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-expiration\">CVV</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n              <div class=\"invalid-feedback\">\n                Security code required\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" (click)=\"completePayment()\">Complete Payment</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!showCheckOut\" class=\"card container mb-3 p-2\">\n    <div *ngIf=\"!tipAdded\" class=\"input-group mb-3\">\n      <label for=\"tip\">Include a tip: </label>\n      <input type=\"number\" class=\"form-control col-sm-6 m-1\" name=\"tip\" id=\"tip\" [(ngModel)]=\"tip\">\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"addTip(tip)\">Add tip</button>\n    </div>\n    <ngb-alert *ngIf=\"alertEmailed\" [type]=\"success\" (close)=\"alertEmailed=False\">Successfully emailed receipt!</ngb-alert>\n    <label for=\"receipt-email\">Email your Receipt: </label>\n    <div class=\"input-group mb-3\">\n      <input type=\"email\" class=\"form-control col-sm-6 mr-1\" name=\"email\" [(ngModel)]=\"email\">\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"emailReceipt(email)\">Send</button>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-waitress/add-order/close-order/close-order.component.ts":
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
var waitress_service_1 = __webpack_require__("../../../../../src/app/services/waitress.service.ts");
/*
CloseOrderComponent

DESCRIPTION: This is a component class for the closing an order from waitress portal

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var CloseOrderComponent = /** @class */ (function () {
    function CloseOrderComponent(activeModal, waitressService) {
        this.activeModal = activeModal;
        this.waitressService = waitressService;
        this.showCheckOut = true;
        this.alertEmailed = false;
        this.tipAdded = false;
    }
    //this method is used to make the payment bill
    CloseOrderComponent.prototype.completePayment = function () {
        var _this = this;
        //data structure to post to he databse
        var paymentData = {
            orderNo: this.orderId,
            tax: 0.14 * this.total,
            tip: 0
        };
        this.waitressService.completePayment(paymentData)
            .subscribe(function (data) {
            if (data["success"]) {
                //if the payment is completed, hide the checkout screen
                _this.showCheckOut = false;
            }
            else {
                console.log(data["err"]);
            }
        });
    };
    //this method is used to send an email of receipt to the customer
    CloseOrderComponent.prototype.emailReceipt = function (email) {
        var _this = this;
        var data = {
            orderId: this.orderId,
            email: email
        };
        console.log(data);
        this.waitressService.emailReceipt(data)
            .subscribe(function (data) {
            if (data["success"]) {
                _this.alertEmailed = true;
                console.log("Successfully added review");
            }
            else {
                console.log(data["error"]);
            }
        });
    };
    //this method is ised to add a tip for the order
    //PARAMETERS:
    //tip: tip amount to be added as number
    CloseOrderComponent.prototype.addTip = function (tip) {
        var _this = this;
        //data structure to post the tip data
        var data = {
            orderId: this.orderId,
            tip: tip
        };
        console.log(data);
        this.waitressService.addTip(data)
            .subscribe(function (data) {
            if (data["success"]) {
                _this.tipAdded = true;
                console.log("Successfully added tip");
            }
            else {
                console.log(data["error"]);
            }
        });
    };
    CloseOrderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloseOrderComponent.prototype, "orderId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CloseOrderComponent.prototype, "total", void 0);
    CloseOrderComponent = __decorate([
        core_1.Component({
            selector: 'close-order',
            template: __webpack_require__("../../../../../src/app/app-waitress/add-order/close-order/close-order.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
            waitress_service_1.WaitressService])
    ], CloseOrderComponent);
    return CloseOrderComponent;
}());
exports.CloseOrderComponent = CloseOrderComponent;


/***/ }),

/***/ "../../../../../src/app/app-waitress/app-waitress.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"All Orders\">\n    <ng-template ngbTabContent>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-sm\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>Order #</th>\n              <th>Table #</th>\n              <th>Quantity</th>\n              <th>Size</th>\n              <th>Menu</th>\n              <th>Server</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of orders\">\n              <td>{{order.orderNo}}</td>\n              <td>{{order.tableNo}}</td>\n              <td>{{order.quantity}}</td>\n              <td>{{order.size}}</td>\n              <td>{{order.menu.name}}</td>\n              <td>{{order.server}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Orders by Table\">\n    <ng-template ngbTabContent>\n\n      <div class=\"container\">\n        <div class=\"row mb-3 text-center\">\n          <div *ngFor=\"let table of ordersByTable; let i =index\" class=\"card col-md-5 p-0 m-4 box-shadow\">\n            <div class=\"card-header\">\n              <div class=\"d-inline\">\n                <h4 class=\"my-0 font-weight-normal d-inline float-left\">Order # {{table.orderNo}}</h4>\n                <h4 class=\"my-0 font-weight-normal d-inline float-right\">Table # {{table.tableNo}}</h4>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"container\">\n                <div *ngFor=\"let order of table.orders; let j = index \" class=\"row\">\n                  <div class=\"col\">{{order.quantity}}</div>\n                  <div class=\"col\">{{order.menu.prices[order.size].type}}</div>\n                  <div class=\"col\"> {{order.menu.name}}</div>\n                  <div class=\"col\"> {{order.status}}</div>\n                  <button class=\"btn btn-danger btn-sm mb-3\" (click)=\"cancelOrder(i, j)\">X</button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-footer text-muted\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addOrder(i)\">Add</button>\n                <button type=\"button\" class=\"btn  btn-danger\" (click)=\"closeOrder(table.orderId, table.orders)\">Close</button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-tab>\n  \n  <ngb-tab title=\"Reservations\">\n    <ng-template ngbTabContent>\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped table-sm\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th>Time</th>\n                  <th>Number of People</th>\n                  <th>Phone Number</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let reservation of reservations\">\n                  <td>{{formatDateTime(reservation.date)}}</td>\n                  <td>{{reservation.people}}</td>\n                  <td>{{reservation.number}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n    </ng-template>\n  </ngb-tab>\n\n</ngb-tabset>\n"

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
var close_order_component_1 = __webpack_require__("../../../../../src/app/app-waitress/add-order/close-order/close-order.component.ts");
var moment = __webpack_require__("../../../../moment/moment.js");
/*

AppWaitressComponent

DESCRIPTION: This is a component class for the waitress portal

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AppWaitressComponent = /** @class */ (function () {
    function AppWaitressComponent(config, socketService, waitressService, menuService, modalService) {
        this.socketService = socketService;
        this.waitressService = waitressService;
        this.menuService = menuService;
        this.modalService = modalService;
        //list to hold all the orders for the list view
        this.orders = [];
        //object to hold all the menus keyed by their ids
        this.menus = {};
        //list of all the menu keys
        this.menuKeys = [];
        //list of all the orders based on their table for thr order by table view
        this.ordersByTable = [];
        //list of all the reservations
        this.reservations = [];
        //name of the server passed by reference
        this.server = "";
        //config for the tabs setting 
        config.justify = 'center';
        config.type = 'pills';
        //setting the default server for testing purpopses
        this.server = "BISHAL";
    }
    AppWaitressComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fetching all the menus from the database
        this.menuService.getAllMenu()
            .subscribe(function (data) {
            if (data["success"]) {
                _this.sortMenus(data["menus"]);
            }
            else {
                console.log("Error fetching menus!");
            }
        });
        //fetching all the reservations from the database
        this.waitressService.getReservations()
            .subscribe(function (data) {
            if (data["success"]) {
                _this.reservations = data["reservations"];
                console.log(_this.reservations);
                //initializing the alerts
                if (_this.reservations.length > 0) {
                    //this.setAlertForReminder()
                }
            }
            else {
                console.log("Database error in the server");
            }
        }, function (err) {
            console.log("Error while fetching reservations!");
        });
        //notifying the websocket to start a connection
        this.socketService.join({
            "staff": true
        });
        //listeing to the websocket for all the new orders
        this.socketService.getNewOrder().subscribe(function (data) {
            data = JSON.parse(data);
            _this.ordersByTable.push({
                orderNo: data['orderNo'],
                tableNo: data['tableNo'],
                orderId: data['_id']['$oid'],
                orders: []
            });
        });
        //listening to the websockets for all the completed order notifications
        this.socketService.getUpdatedOrder("Completed Order")
            .subscribe(function (data) {
            var index = 0;
            for (var i = 0; i < _this.ordersByTable.length; i++) {
                if (_this.ordersByTable[i].orderId == data["orderNo"]) {
                    index = i;
                    break;
                }
            }
            //deleting the orders form the list of orders
            _this.ordersByTable.splice(index, 1);
            for (var i = 0; i < _this.orders.length; i++) {
                if (_this.orders[i].orderId == data["orderNo"]) {
                    _this.orders.splice(i, 1);
                    i--;
                }
            }
        });
        //listening to the websocket for all the added order notifications
        this.socketService.getUpdatedOrder("Order Added")
            .subscribe(function (data) {
            if (data["success"]) {
                //find the orders
                var tempOrders = data["data"]["orders"];
                var ordersIndex = 0;
                var index = 0;
                //find the index for ordersByTableList
                for (var i = 0; i < _this.ordersByTable.length; i++) {
                    if (_this.ordersByTable[i].orderId == data["data"]["orderNo"]) {
                        index = i;
                        break;
                    }
                }
                //find the respective menus for each order
                for (var i = 0; i < tempOrders.length; i++) {
                    tempOrders[i]["menu"] = _this.menus[tempOrders[i]["menuId"]];
                    _this.orders.push({
                        orderNo: _this.ordersByTable[index].orderNo,
                        orderId: _this.ordersByTable[index].orderId,
                        tableNo: _this.ordersByTable[index].tableNo,
                        quantity: tempOrders[i].quantity,
                        size: tempOrders[i].menu.prices[tempOrders[i].size].type,
                        server: tempOrders[i].server,
                        menu: tempOrders[i].menu
                    });
                }
                (_a = _this.ordersByTable[index].orders).push.apply(_a, tempOrders);
            }
            else {
                console.log(data);
            }
            var _a;
        });
    };
    //this method is used to set alert for the next reservation
    AppWaitressComponent.prototype.setAlertForReminder = function () {
        var _this = this;
        //get the earliest reservation
        var earliestReservationIndex = this.getEarliestReservationIndex();
        var resTime = moment(this.reservations[earliestReservationIndex]['date']);
        setTimeout(function () {
            _this.reservations.splice(earliestReservationIndex, 1);
        }, resTime.diff(moment.now()));
        //calculate the timeout
        //setting alert for 30 minutes before the reservations
        var alertTime = resTime.subtract(30, "minutes");
        var timeOut = alertTime.diff(moment.now());
        //calculate the timeout to delete it
        setTimeout(function () {
            //what if the reservations are very close? work on that
            //alert("Reservation at "+resTime.format('MM/DD/YYYY hh:mm A')+"for "+this.reservations[earliestReservationIndex]['people']+" people!")
            _this.setAlertForReminder();
        }, alertTime);
    };
    AppWaitressComponent.prototype.popAlert = function (time) {
    };
    //this method is used to get the next earliest reservation
    AppWaitressComponent.prototype.getEarliestReservationIndex = function () {
        //get all the reservation within the next 30 mins
        //reservations alerts come every 30 mins
        var earliestReservation = moment(this.reservations[0]['date']);
        var earlyIndex = 0;
        for (var i = 0; i < this.reservations.length; i++) {
            var tempDate = moment(this.reservations[i]['date']);
            if (tempDate.isBefore(earliestReservation)) {
                earliestReservation = tempDate;
                earlyIndex = i;
            }
        }
        return earlyIndex;
    };
    //this method sorts the menu list fetched from the database such that
    //1. They are easy to iterate thought HTML
    //2. keyed on ids so that they are easy to refer later
    //PARAMETERS: menus -> list of all the menus fetched from the database
    AppWaitressComponent.prototype.sortMenus = function (menus) {
        var _this = this;
        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
            var menu = menus_1[_i];
            this.menus[menu['_id']['$oid']] = menu;
            this.menuKeys.push(menu['_id']['$oid']);
        }
        //getting all the orders that are in processing from the database
        this.waitressService.getAllActiveOrders()
            .subscribe(function (data) {
            if (data["success"]) {
                var tempOrders = data["orders"];
                console.log(tempOrders);
                console.log(menus);
                for (var i = 0; i < tempOrders.length; i++) {
                    var ordersArray = [];
                    var tableOrders = tempOrders[i].orders;
                    console.log(tableOrders);
                    //adding the orders to the list view
                    for (var j = 0; j < tableOrders.length; j++) {
                        tableOrders[j].menu = _this.menus[tableOrders[j].menuId];
                        ordersArray.push(tableOrders[j]);
                        _this.orders.push({
                            orderNo: tempOrders[i].orderNo,
                            orderId: tempOrders[i]['_id']['$oid'],
                            tableNo: tempOrders[i].tableNo,
                            quantity: tableOrders[j].quantity,
                            size: tableOrders[j].menu.prices[tableOrders[j].size].type,
                            server: tempOrders[i].server,
                            menu: tableOrders[j].menu
                        });
                    }
                    //adding the orders to the orders by table
                    //data structure has been customized to make ot easy for iterating through HTML
                    _this.ordersByTable.push({
                        orderNo: tempOrders[i].orderNo,
                        tableNo: tempOrders[i].tableNo,
                        orderId: tempOrders[i]['_id']['$oid'],
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
    //this method is used to cancel an order
    //PARAMETERS:
    //tableIndex: the index of the order in orders by table
    //orderIndex: the index of the order in the orders list view
    AppWaitressComponent.prototype.cancelOrder = function (tableIndex, OrderIndex) {
        var _this = this;
        //canceling the order from the databse
        this.waitressService.cancelOrder({ orderId: this.ordersByTable[tableIndex].orderId, cancelId: this.ordersByTable[tableIndex].orders[OrderIndex].date })
            .subscribe(function (data) {
            if (data["success"]) {
                var orderMenu = _this.ordersByTable[tableIndex].orders[OrderIndex].menu;
                var orderNo = _this.ordersByTable[tableIndex].orderNo;
                //removing the orders locally
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
    //this method is used to close the order
    //PARAMETERS:
    //orderId: id of the order to delete
    //orders: the order to close
    AppWaitressComponent.prototype.closeOrder = function (orderId, orders) {
        var _this = this;
        console.log("orderId", orderId);
        this.waitressService.closeOrder(orderId)
            .subscribe(function (data) {
            if (data["success"]) {
                console.log("Order Successfully closed");
                //remove from ordersByTable
                var total = 0;
                //calculate the total of all orders
                for (var i = 0; i < orders.length; i++) {
                    var price = orders[i].menu.prices[orders[i].size].price;
                    total += orders[i].quantity * price;
                }
                //open a model for completing the payment
                var modalRef = _this.modalService.open(close_order_component_1.CloseOrderComponent);
                modalRef.componentInstance.orderId = orderId;
                modalRef.componentInstance.total = total;
                //remove the order lcoally
                for (var i = 0; i < _this.ordersByTable.length; i++) {
                    if (_this.ordersByTable[i].orderId == orderId) {
                        _this.ordersByTable.splice(i, 1);
                    }
                }
                for (var i = 0; i < _this.orders.length; i++) {
                    if (_this.orders[i].orderId == orderId) {
                        _this.orders.splice(i, 1);
                        i--;
                    }
                }
            }
            else {
                console.log("Problems Closing the order");
            }
        });
    };
    //this method is to add an order for the specific table
    //PARAMETERS: tableInde: index for the orders by table array
    AppWaitressComponent.prototype.addOrder = function (tableIndex) {
        //open the addo order modal component
        var modalRef = this.modalService.open(add_order_component_1.AddOrderComponent);
        modalRef.componentInstance.data = {
            menus: Object.values(this.menus),
            server: this.server,
            tableIndex: tableIndex,
            orders: this.orders,
            ordersByTable: this.ordersByTable
        };
    };
    //this method is a utility function to format the time to a readable format
    AppWaitressComponent.prototype.formatDateTime = function (date) {
        return moment(date).format('MM/DD/YYYY hh:mm A');
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

/***/ "../../../../../src/app/app-waitress/app-waitress.module.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_waitress_component_1 = __webpack_require__("../../../../../src/app/app-waitress/app-waitress.component.ts");
var add_order_component_1 = __webpack_require__("../../../../../src/app/app-waitress/add-order/add-order.component.ts");
var close_order_component_1 = __webpack_require__("../../../../../src/app/app-waitress/add-order/close-order/close-order.component.ts");
var main_pipe_module_1 = __webpack_require__("../../../../../src/app/pipes/main-pipe.module.ts");
var AppWaitressModule = /** @class */ (function () {
    function AppWaitressModule() {
    }
    AppWaitressModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, forms_1.ReactiveFormsModule, router_1.RouterModule, main_pipe_module_1.MainPipeModule],
            exports: [],
            declarations: [app_waitress_component_1.AppWaitressComponent, add_order_component_1.AddOrderComponent, close_order_component_1.CloseOrderComponent],
            entryComponents: [add_order_component_1.AddOrderComponent, close_order_component_1.CloseOrderComponent],
            providers: [],
        })
    ], AppWaitressModule);
    return AppWaitressModule;
}());
exports.AppWaitressModule = AppWaitressModule;


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
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var waitress_service_1 = __webpack_require__("../../../../../src/app/services/waitress.service.ts");
var main_pipe_module_1 = __webpack_require__("../../../../../src/app/pipes/main-pipe.module.ts");
var app_waitress_module_1 = __webpack_require__("../../../../../src/app/app-waitress/app-waitress.module.ts");
var fileUpload_service_1 = __webpack_require__("../../../../../src/app/services/fileUpload.service.ts");
var ngx_socket_io_1 = __webpack_require__("../../../../ngx-socket-io/index.js");
var config = { url: 'http://localhost:5000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, app_login_component_1.AppLoginComponent, page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                app_admin_module_1.AppAdminModule,
                app_customer_modules_1.AppCustomerModule,
                app_waitress_module_1.AppWaitressModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                main_pipe_module_1.MainPipeModule,
                ngx_socket_io_1.SocketIoModule.forRoot(config)
            ],
            providers: [app_service_1.AppService, menu_service_1.MenuService, employee_service_1.EmployeeService, customer_service_1.CustomerService, socket_service_1.SocketService, waitress_service_1.WaitressService, fileUpload_service_1.FileUploadService],
            entryComponents: [],
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

/*

Employee

DESCRIPTION: This is a model class for the employee data structure

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
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

/*

Menu

DESCRIPTION: This is a model class for the menu data structure

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
Object.defineProperty(exports, "__esModule", { value: true });
var nutrition_1 = __webpack_require__("../../../../../src/app/dataModels/nutrition.ts");
//list of all the menu sections
exports.MenuType = ["PASTA A LA CARTE", "SAUCES", "ENTREES A LA CARTE", "SOUP & SALAD", "SANDWICHES", "SIDES", "DESSERTS", "BEVERAGES"];
//lis of all the food sizes
exports.SizeList = ["REGULAR", "SMALL", "LARGE"];
//data model for Menu
var Menu = /** @class */ (function () {
    function Menu() {
        this.prices = [];
        this.ingredients = [];
        this.nutrition = new nutrition_1.Nutrition();
        this.reviews = [];
        this.images = [];
    }
    return Menu;
}());
exports.Menu = Menu;
//data model for different prices for different types
var Price = /** @class */ (function () {
    function Price() {
    }
    return Price;
}());
exports.Price = Price;
//data model for the review for a menu
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());
exports.Review = Review;


/***/ }),

/***/ "../../../../../src/app/dataModels/nutrition.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

Nutrition

DESCRIPTION: This is a model class for the nutitional information of a menu

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
Object.defineProperty(exports, "__esModule", { value: true });
//object holding constant values for daily nutritional value
exports.DailyValues = {
    "fat": 65,
    "satFat": 20,
    "cholestrol": 300,
    "sodium": 2400,
    "carbs": 300,
    "fiber": 25
};
//data model for Fat 
var Fat = /** @class */ (function () {
    function Fat() {
        this.fat = 0;
        this.satFat = 0;
        this.unsatFat = 0;
        this.transFat = 0;
    }
    return Fat;
}());
//dagta model for vitamin
var Vitamin = /** @class */ (function () {
    function Vitamin() {
        this.vita = 0;
        this.vitc = 0;
    }
    return Vitamin;
}());
//data model for carbohydrates
var Carbs = /** @class */ (function () {
    function Carbs() {
        this.carbs = 0;
        this.sugar = 0;
        this.fiber = 0;
    }
    return Carbs;
}());
//data model for calories
var Calories = /** @class */ (function () {
    function Calories() {
        this.calories = 0;
        this.caloriesFromFat = 0;
    }
    return Calories;
}());
//data model for Nutritonal facts in a menu
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
/*

Filter Pipe

DESCRIPTION: This is a piope class to use for filtering in the search bar

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
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
/*

AppService

DESCRIPTION: This is a service class for the intial actions of the application i.e login

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        //base url for REST API
        this.apiUrl = "http://localhost:5000/api/";
        //header data for the HTTP call
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    /*
        DESCRIPTION:
            This method is used to verify login for the servers anf admins

        PARAMETERS:
            data: JSON containing login data

    */
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
/*

CustomerService

DESCRIPTION: This is a service class for the APIs needed to be accessed by the customer

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        //base URL for the API call
        this.apiUrl = "http://localhost:5000/api/";
        //headers for the HTTP call
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //this method is used to add orders to the table/customer order
    //PARAMETERS: data -> array of all order objects
    CustomerService.prototype.addOrders = function (data) {
        return this.http.post(this.apiUrl + "addOrders", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to get all the orders from the server for the customer
    CustomerService.prototype.getAllOrders = function () {
        return this.http.get(this.apiUrl + "getAllOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to get all the active orders for the customer
    CustomerService.prototype.getAllActiveOrders = function () {
        return this.http.get(this.apiUrl + "getAllActiveOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to close the order for the customer
    CustomerService.prototype.closeOrder = function () {
        return this.http.get(this.apiUrl + "closeOrder", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to complete/billing for the customer
    //PARAMETERS: data -> JSON object containing billing details
    CustomerService.prototype.completePayment = function (data) {
        return this.http.post(this.apiUrl + "completeOrder", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is to add a review/rating to the menus customer has ordered
    //PARAMETERS: data -> JSON containing a review
    CustomerService.prototype.addReview = function (data) {
        return this.http.post(this.apiUrl + "addReview", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to email a receipt to the customer for their order
    //PARAMETERS: data-> JSON containing email address of the customer
    CustomerService.prototype.emailReceipt = function (data) {
        return this.http.post(this.apiUrl + "emailReceipt", data, this.options)
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
/*

EmployeeService

DESCRIPTION: This is a service class for the APIs that need to be accessed by the admin to update employee details

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        //base URL for the API
        this.apiUrl = "http://localhost:5000/api/";
        //headers for the HTTP call
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //this method gets all the employees exisiting in the database
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.apiUrl + "getAllEmployees", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method adds an employee to the database
    //PARAMETERS: emlployee : employee details to add ob type Employee
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.apiUrl + "addEmployee", employee, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to update details for a specific employee
    //PARAMETERS: emlployee : employee details to update of type Employee
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.post(this.apiUrl + "updateEmployee", employee, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to delete a specific employee from the database
    //PARAMETERS: id : string representing the username for the emoloyee
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.apiUrl + "deleteEmployee?username=" + id, this.options)
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

/***/ "../../../../../src/app/services/fileUpload.service.ts":
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
var firebase = __webpack_require__("../../../../firebase/app/index.js");
__webpack_require__("../../../../firebase/storage/index.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/*

FileUploadService

DESCRIPTION: This is a service class for uploading the pictures to the firebasae database

    This method uses Google Firebase to store the pictures

AUTHOR: BISHAL REGMI

DATE: 3/28/2018

*/
var FileUploadService = /** @class */ (function () {
    function FileUploadService() {
        //config for the Google Firebase
        //Please refer to FIREBASE API for detailed information about the configs
        this.config = {
            apiKey: "AIzaSyA4Wsc8xn7euyS1Fn45fbdFd82ZRf37zlk",
            authDomain: "seniorproject-45c7b.firebaseapp.com",
            databaseURL: "https://seniorproject-45c7b.firebaseio.com",
            projectId: "seniorproject-45c7b",
            storageBucket: "seniorproject-45c7b.appspot.com",
            messagingSenderId: "940441894733"
        };
        //storage directory in the firebase database to store the pictures to
        this.basePath = '/uploads';
        //initialzing firebase with the configs
        firebase.initializeApp(this.config);
    }
    //This method is used to upload a document to the firebase directory
    //PARAMETERS: upload: the file to be upoloaded of type FILE
    FileUploadService.prototype.pushUpload = function (upload) {
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child("" + upload.name).put(upload);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
            return null;
        }, function () {
            // upload success
            console.log(uploadTask.snapshot.downloadURL);
            return {
                "url": uploadTask.snapshot.downloadURL,
                "name": upload.name
            };
        });
    };
    FileUploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;


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
/*

MeniService

DESCRIPTION: This is a service class for the all the APIs that needs to be accessed to operation related to menus

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
        //base URL for API
        this.apiUrl = "http://localhost:5000/api/";
        //headers for the API call
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //This method is used to fetch all the menus from the database
    MenuService.prototype.getAllMenu = function () {
        return this.http.get(this.apiUrl + "getAllMenu", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to add a new menu to the database
    //PARAMETERS: menu: new menu to add of type Menu
    MenuService.prototype.addMenu = function (menu) {
        return this.http.post(this.apiUrl + "addMenu", menu, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to update a menu in the database
    //PARAMETERS: menu: menu to update with new details add of type Menu
    MenuService.prototype.updateMenu = function (menu) {
        return this.http.post(this.apiUrl + "updateMenu", menu, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to delete a menu from the databse
    //PARAMETERS: id: id of the menu to delete
    MenuService.prototype.deleteMenu = function (id) {
        return this.http.delete(this.apiUrl + "deleteMenu?menuId=" + id, this.options)
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
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
/*

SocketService

DESCRIPTION: This is a service class for accessing all the websockets

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var SocketService = /** @class */ (function () {
    function SocketService(http) {
        this.http = http;
        //URL to the socket application 
        this.socket = io("http://localhost:5000/");
    }
    //this method is used to notify servers that a customer joined
    //PARAMETERS: data : JSON containing information about whether the joned person is staff or not
    SocketService.prototype.join = function (data) {
        this.socket.emit('join', data);
    };
    //this method is used to add an order to the database
    //PARAMETERS: data : JSON containing order information for the order
    SocketService.prototype.addOrder = function (data) {
        this.socket.emit('addOrder', data);
    };
    //this method is used to closed an order
    SocketService.prototype.closeOrder = function () {
        this.socket.emit('closeOrder');
    };
    //this method is used to cancel an order
    //PARAMETERS: data : JSON containing information about the order to cancel
    SocketService.prototype.cancelOrder = function (data) {
        this.socket.emit('cancelOrder', data);
    };
    //this method is used to complete an order
    //PARAMETERS: orderNo: order id for the order to cancel
    SocketService.prototype.completeOrder = function (orderNo) {
        this.socket.emit('completeOrder', orderNo);
    };
    //this method is a subscribing method for all the event emmitted by the server regarding any order updates
    //PARAMETER: event: event name for which subscribtion is needed
    SocketService.prototype.getUpdatedOrder = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    //this method is a subscribing method for any new order started by the customer i.e new customer
    //this is only listened by the waitress for a new order on a new table
    SocketService.prototype.getNewOrder = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('newCustomer', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
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
/*

WaitressService

DESCRIPTION: This is a service class for the waitress portal for any order operationt to be performed by the waitresses

    The return types of all the methods in the service are Observables

AUTHOR: BISHAL REGMI

DATE: 2/28/2018

*/
var WaitressService = /** @class */ (function () {
    function WaitressService(http) {
        this.http = http;
        //base URL
        this.apiUrl = "http://localhost:5000/api/";
        //API headers
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //this method is used to add orders to the table/customer order
    //PARAMETERS: data -> array of all order objects
    WaitressService.prototype.addOrders = function (data) {
        return this.http.post(this.apiUrl + "addOrders", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to get all the orders from the server for the customer
    WaitressService.prototype.getAllOrders = function () {
        return this.http.get(this.apiUrl + "getAllOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to get all the active orders for the customer
    WaitressService.prototype.getAllActiveOrders = function () {
        return this.http.get(this.apiUrl + "getAllActiveOrders", this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to close the order for the customer
    //PARAMETERS: orderID-> order id for the order to be closed
    WaitressService.prototype.closeOrder = function (orderId) {
        console.log(orderId);
        return this.http.get(this.apiUrl + "closeOrder?orderNo=" + orderId, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to cancel a specific order from a table
    //PARAMETERS: data-> JSON containing the details for the order to be canceled
    WaitressService.prototype.cancelOrder = function (data) {
        console.log(JSON.stringify(data));
        return this.http.post(this.apiUrl + "cancelOrder", JSON.stringify(data), this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to email a receipt to the customer for their order
    //PARAMETERS: data-> JSON containing email address of the customer
    WaitressService.prototype.emailReceipt = function (data) {
        return this.http.post(this.apiUrl + "emailReceipt", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to complete/billing for the customer
    //PARAMETERS: data -> JSON object containing billing details
    WaitressService.prototype.completePayment = function (data) {
        return this.http.post(this.apiUrl + "completeOrder", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to add a tip to the order after the payment has been complete
    //PARAMETERS: data -> JSON object containing tip data and orderId
    WaitressService.prototype.addTip = function (data) {
        return this.http.post(this.apiUrl + "addTip", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //this method is used to get all upcoming reservations
    WaitressService.prototype.getReservations = function () {
        return this.http.get(this.apiUrl + "getReservations", this.options)
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