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
exports.EmployeeTimeAusRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeAus_1 = require("./EmployeeTimeAus");
/**
 * Request builder class for operations supported on the [[EmployeeTimeAus]] entity.
 */
var EmployeeTimeAusRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeAusRequestBuilder, _super);
    function EmployeeTimeAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeAus` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeAus.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeAus` entity based on its keys.
     */
    EmployeeTimeAusRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeAus_1.EmployeeTimeAus, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeAus` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeAus` entities.
     */
    EmployeeTimeAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeAus_1.EmployeeTimeAus);
    };
    return EmployeeTimeAusRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeAusRequestBuilder = EmployeeTimeAusRequestBuilder;
//# sourceMappingURL=EmployeeTimeAusRequestBuilder.js.map