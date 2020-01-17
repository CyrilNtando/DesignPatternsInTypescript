/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/typescript/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/typescript/DatabaseConnectionManager.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/DatabaseConnectionManager.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Connect {
    constructor() {
        this.url = '';
    }
    getConnection(url) {
        this.url = url;
        return this;
    }
    prepareStatement(statement) {
        if (!statement)
            throw new Error('writing to database failed');
        return this;
    }
    disconnect() {
        console.log('disconnected');
    }
}
class DatabaseConnectManager {
    constructor() {
        this.conn = new Connect();
    }
    static getManagerInstance() {
        return this.connectionInstance;
    }
    connect() {
        this.conn.getConnection('some/database/url');
        console.log('establishing database connection ');
    }
    getConnectionObject() {
        return this.conn;
    }
}
exports.default = DatabaseConnectManager;
DatabaseConnectManager.connectionInstance = new DatabaseConnectManager();


/***/ }),

/***/ "./src/typescript/Employee.ts":
/*!************************************!*\
  !*** ./src/typescript/Employee.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, department, working) {
        this._this = this;
        this.id = id;
        this.name = name;
        this.department = department;
        this.working = working;
    }
    terminateEmployee() {
        this.working = false;
    }
    toString() {
        return `id=${this._this.id} name=${this._this.name} department=${this.department} working=${this.working} `;
    }
}
exports.default = Employee;


/***/ }),

/***/ "./src/typescript/EmployeeDAO.ts":
/*!***************************************!*\
  !*** ./src/typescript/EmployeeDAO.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseConnectionManager_1 = __importDefault(__webpack_require__(/*! ./DatabaseConnectionManager */ "./src/typescript/DatabaseConnectionManager.ts"));
class EmployeeDAO {
    constructor() {
        this.connectionManager = DatabaseConnectionManager_1.default.getManagerInstance();
    }
    saveEmployee(employee) {
        this.connectionManager.connect();
        this.connectionManager
            .getConnectionObject()
            .prepareStatement('insert into employees')
            .disconnect();
        console.log(`save ${employee.toString} into the database`);
    }
    deleteEmployee(employee) {
        console.log(`deleted ${employee.toString} from the database`);
    }
}
exports.default = EmployeeDAO;


/***/ }),

/***/ "./src/typescript/index.ts":
/*!*********************************!*\
  !*** ./src/typescript/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(__webpack_require__(/*! ./Employee */ "./src/typescript/Employee.ts"));
const EmployeeDAO_1 = __importDefault(__webpack_require__(/*! ./EmployeeDAO */ "./src/typescript/EmployeeDAO.ts"));
const jane = new Employee_1.default(234, 'Jane', 'Finance', true);
class ClientModule {
    static hireEmployee(employee) {
        this.employeeDAO.saveEmployee(employee);
    }
    static terminateEmployee(employee) {
        this.employeeDAO.deleteEmployee(employee);
    }
}
ClientModule.employeeDAO = new EmployeeDAO_1.default();
ClientModule.hireEmployee(jane);
ClientModule.hireEmployee(jane);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzY3JpcHQvRGF0YWJhc2VDb25uZWN0aW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXNjcmlwdC9FbXBsb3llZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXNjcmlwdC9FbXBsb3llZURBTy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXNjcmlwdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYyxRQUFRLGdCQUFnQixjQUFjLGdCQUFnQixXQUFXLGFBQWE7QUFDakg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxvREFBb0QsbUJBQU8sQ0FBQyxrRkFBNkI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsZ0RBQVk7QUFDdkQsc0NBQXNDLG1CQUFPLENBQUMsc0RBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGVzY3JpcHQvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBDb25uZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICB9XHJcbiAgICBnZXRDb25uZWN0aW9uKHVybCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXN0YXRlbWVudClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3cml0aW5nIHRvIGRhdGFiYXNlIGZhaWxlZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRGF0YWJhc2VDb25uZWN0TWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbm4gPSBuZXcgQ29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldE1hbmFnZXJJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uSW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuY29ubi5nZXRDb25uZWN0aW9uKCdzb21lL2RhdGFiYXNlL3VybCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlc3RhYmxpc2hpbmcgZGF0YWJhc2UgY29ubmVjdGlvbiAnKTtcclxuICAgIH1cclxuICAgIGdldENvbm5lY3Rpb25PYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBEYXRhYmFzZUNvbm5lY3RNYW5hZ2VyO1xyXG5EYXRhYmFzZUNvbm5lY3RNYW5hZ2VyLmNvbm5lY3Rpb25JbnN0YW5jZSA9IG5ldyBEYXRhYmFzZUNvbm5lY3RNYW5hZ2VyKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEVtcGxveWVlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXBhcnRtZW50LCB3b3JraW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudDtcclxuICAgICAgICB0aGlzLndvcmtpbmcgPSB3b3JraW5nO1xyXG4gICAgfVxyXG4gICAgdGVybWluYXRlRW1wbG95ZWUoKSB7XHJcbiAgICAgICAgdGhpcy53b3JraW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYGlkPSR7dGhpcy5fdGhpcy5pZH0gbmFtZT0ke3RoaXMuX3RoaXMubmFtZX0gZGVwYXJ0bWVudD0ke3RoaXMuZGVwYXJ0bWVudH0gd29ya2luZz0ke3RoaXMud29ya2luZ30gYDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFbXBsb3llZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRGF0YWJhc2VDb25uZWN0aW9uTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RhdGFiYXNlQ29ubmVjdGlvbk1hbmFnZXJcIikpO1xyXG5jbGFzcyBFbXBsb3llZURBTyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyID0gRGF0YWJhc2VDb25uZWN0aW9uTWFuYWdlcl8xLmRlZmF1bHQuZ2V0TWFuYWdlckluc3RhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBzYXZlRW1wbG95ZWUoZW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgICAgIC5nZXRDb25uZWN0aW9uT2JqZWN0KClcclxuICAgICAgICAgICAgLnByZXBhcmVTdGF0ZW1lbnQoJ2luc2VydCBpbnRvIGVtcGxveWVlcycpXHJcbiAgICAgICAgICAgIC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNhdmUgJHtlbXBsb3llZS50b1N0cmluZ30gaW50byB0aGUgZGF0YWJhc2VgKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUVtcGxveWVlKGVtcGxveWVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGRlbGV0ZWQgJHtlbXBsb3llZS50b1N0cmluZ30gZnJvbSB0aGUgZGF0YWJhc2VgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFbXBsb3llZURBTztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRW1wbG95ZWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9FbXBsb3llZVwiKSk7XHJcbmNvbnN0IEVtcGxveWVlREFPXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRW1wbG95ZWVEQU9cIikpO1xyXG5jb25zdCBqYW5lID0gbmV3IEVtcGxveWVlXzEuZGVmYXVsdCgyMzQsICdKYW5lJywgJ0ZpbmFuY2UnLCB0cnVlKTtcclxuY2xhc3MgQ2xpZW50TW9kdWxlIHtcclxuICAgIHN0YXRpYyBoaXJlRW1wbG95ZWUoZW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlREFPLnNhdmVFbXBsb3llZShlbXBsb3llZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGVybWluYXRlRW1wbG95ZWUoZW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlREFPLmRlbGV0ZUVtcGxveWVlKGVtcGxveWVlKTtcclxuICAgIH1cclxufVxyXG5DbGllbnRNb2R1bGUuZW1wbG95ZWVEQU8gPSBuZXcgRW1wbG95ZWVEQU9fMS5kZWZhdWx0KCk7XHJcbkNsaWVudE1vZHVsZS5oaXJlRW1wbG95ZWUoamFuZSk7XHJcbkNsaWVudE1vZHVsZS5oaXJlRW1wbG95ZWUoamFuZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=