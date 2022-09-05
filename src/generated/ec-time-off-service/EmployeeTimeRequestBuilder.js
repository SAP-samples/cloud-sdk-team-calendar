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
exports.EmployeeTimeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTime_1 = require("./EmployeeTime");
/**
 * Request builder class for operations supported on the [[EmployeeTime]] entity.
 */
var EmployeeTimeRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeRequestBuilder, _super);
    function EmployeeTimeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTime` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTime.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTime` entity based on its keys.
     */
    EmployeeTimeRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTime_1.EmployeeTime, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeTime` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTime` entities.
     */
    EmployeeTimeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTime_1.EmployeeTime);
    };
    /**
     * Returns a request builder for creating a `EmployeeTime` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTime`.
     */
    EmployeeTimeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeTime_1.EmployeeTime, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeTime`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTime`.
     */
    EmployeeTimeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeTime_1.EmployeeTime, entity);
    };
    EmployeeTimeRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(EmployeeTime_1.EmployeeTime, externalCodeOrEntity instanceof EmployeeTime_1.EmployeeTime ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return EmployeeTimeRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeRequestBuilder = EmployeeTimeRequestBuilder;
//# sourceMappingURL=EmployeeTimeRequestBuilder.js.map