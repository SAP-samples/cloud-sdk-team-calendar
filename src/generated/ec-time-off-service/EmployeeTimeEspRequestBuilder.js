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
exports.EmployeeTimeEspRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeEsp_1 = require("./EmployeeTimeEsp");
/**
 * Request builder class for operations supported on the [[EmployeeTimeEsp]] entity.
 */
var EmployeeTimeEspRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeEspRequestBuilder, _super);
    function EmployeeTimeEspRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeEsp` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeEsp.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeEsp.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeEsp` entity based on its keys.
     */
    EmployeeTimeEspRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeEsp_1.EmployeeTimeEsp, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeEsp` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeEsp` entities.
     */
    EmployeeTimeEspRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeEsp_1.EmployeeTimeEsp);
    };
    /**
     * Returns a request builder for creating a `EmployeeTimeEsp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeEsp`.
     */
    EmployeeTimeEspRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeTimeEsp_1.EmployeeTimeEsp, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeEsp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeEsp`.
     */
    EmployeeTimeEspRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeTimeEsp_1.EmployeeTimeEsp, entity);
    };
    EmployeeTimeEspRequestBuilder.prototype.delete = function (employeeTimeExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(EmployeeTimeEsp_1.EmployeeTimeEsp, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeEsp_1.EmployeeTimeEsp ? employeeTimeExternalCodeOrEntity : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return EmployeeTimeEspRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeEspRequestBuilder = EmployeeTimeEspRequestBuilder;
//# sourceMappingURL=EmployeeTimeEspRequestBuilder.js.map