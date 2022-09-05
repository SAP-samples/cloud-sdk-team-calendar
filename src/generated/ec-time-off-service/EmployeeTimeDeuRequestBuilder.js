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
exports.EmployeeTimeDeuRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeDeu_1 = require("./EmployeeTimeDeu");
/**
 * Request builder class for operations supported on the [[EmployeeTimeDeu]] entity.
 */
var EmployeeTimeDeuRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeDeuRequestBuilder, _super);
    function EmployeeTimeDeuRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeDeu.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeDeu.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
     */
    EmployeeTimeDeuRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeDeu_1.EmployeeTimeDeu, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeDeu` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
     */
    EmployeeTimeDeuRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeDeu_1.EmployeeTimeDeu);
    };
    return EmployeeTimeDeuRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeDeuRequestBuilder = EmployeeTimeDeuRequestBuilder;
//# sourceMappingURL=EmployeeTimeDeuRequestBuilder.js.map