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
exports.EmployeeTimeUsaRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeUsa_1 = require("./EmployeeTimeUsa");
/**
 * Request builder class for operations supported on the [[EmployeeTimeUsa]] entity.
 */
var EmployeeTimeUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeUsaRequestBuilder, _super);
    function EmployeeTimeUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeUsa.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
     */
    EmployeeTimeUsaRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeUsa_1.EmployeeTimeUsa, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeUsa` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
     */
    EmployeeTimeUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeUsa_1.EmployeeTimeUsa);
    };
    return EmployeeTimeUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeUsaRequestBuilder = EmployeeTimeUsaRequestBuilder;
//# sourceMappingURL=EmployeeTimeUsaRequestBuilder.js.map