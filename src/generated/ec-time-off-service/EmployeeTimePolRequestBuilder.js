"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimePolRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimePol_1 = require("./EmployeeTimePol");
/**
 * Request builder class for operations supported on the [[EmployeeTimePol]] entity.
 */
var EmployeeTimePolRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimePolRequestBuilder, _super);
    function EmployeeTimePolRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimePol.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimePol.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
     */
    EmployeeTimePolRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimePol_1.EmployeeTimePol, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimePol` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
     */
    EmployeeTimePolRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimePol_1.EmployeeTimePol);
    };
    return EmployeeTimePolRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimePolRequestBuilder = EmployeeTimePolRequestBuilder;
//# sourceMappingURL=EmployeeTimePolRequestBuilder.js.map