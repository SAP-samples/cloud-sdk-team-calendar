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
exports.EmployeeTimeMexRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeMex_1 = require("./EmployeeTimeMex");
/**
 * Request builder class for operations supported on the [[EmployeeTimeMex]] entity.
 */
var EmployeeTimeMexRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeMexRequestBuilder, _super);
    function EmployeeTimeMexRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeMex` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeMex.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeMex.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeMex` entity based on its keys.
     */
    EmployeeTimeMexRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeMex_1.EmployeeTimeMex, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeMex` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeMex` entities.
     */
    EmployeeTimeMexRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeMex_1.EmployeeTimeMex);
    };
    return EmployeeTimeMexRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeMexRequestBuilder = EmployeeTimeMexRequestBuilder;
//# sourceMappingURL=EmployeeTimeMexRequestBuilder.js.map