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
exports.EmployeeTimeCanRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeCan_1 = require("./EmployeeTimeCan");
/**
 * Request builder class for operations supported on the [[EmployeeTimeCan]] entity.
 */
var EmployeeTimeCanRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeCanRequestBuilder, _super);
    function EmployeeTimeCanRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCan` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCan.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeCan.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCan` entity based on its keys.
     */
    EmployeeTimeCanRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeCan_1.EmployeeTimeCan, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeCan` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCan` entities.
     */
    EmployeeTimeCanRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeCan_1.EmployeeTimeCan);
    };
    return EmployeeTimeCanRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeCanRequestBuilder = EmployeeTimeCanRequestBuilder;
//# sourceMappingURL=EmployeeTimeCanRequestBuilder.js.map