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
exports.EmployeeTimeColRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeCol_1 = require("./EmployeeTimeCol");
/**
 * Request builder class for operations supported on the [[EmployeeTimeCol]] entity.
 */
var EmployeeTimeColRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeColRequestBuilder, _super);
    function EmployeeTimeColRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCol` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCol.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeCol.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCol` entity based on its keys.
     */
    EmployeeTimeColRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeCol_1.EmployeeTimeCol, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeCol` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCol` entities.
     */
    EmployeeTimeColRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeCol_1.EmployeeTimeCol);
    };
    return EmployeeTimeColRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeColRequestBuilder = EmployeeTimeColRequestBuilder;
//# sourceMappingURL=EmployeeTimeColRequestBuilder.js.map