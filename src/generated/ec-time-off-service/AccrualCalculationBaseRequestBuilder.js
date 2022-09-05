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
exports.AccrualCalculationBaseRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AccrualCalculationBase_1 = require("./AccrualCalculationBase");
/**
 * Request builder class for operations supported on the [[AccrualCalculationBase]] entity.
 */
var AccrualCalculationBaseRequestBuilder = /** @class */ (function (_super) {
    __extends(AccrualCalculationBaseRequestBuilder, _super);
    function AccrualCalculationBaseRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AccrualCalculationBase` entity based on its keys.
     * @param externalCode Key property. See [[AccrualCalculationBase.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AccrualCalculationBase` entity based on its keys.
     */
    AccrualCalculationBaseRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(AccrualCalculationBase_1.AccrualCalculationBase, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `AccrualCalculationBase` entities.
     * @returns A request builder for creating requests to retrieve all `AccrualCalculationBase` entities.
     */
    AccrualCalculationBaseRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AccrualCalculationBase_1.AccrualCalculationBase);
    };
    /**
     * Returns a request builder for creating a `AccrualCalculationBase` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccrualCalculationBase`.
     */
    AccrualCalculationBaseRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AccrualCalculationBase_1.AccrualCalculationBase, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccrualCalculationBase`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccrualCalculationBase`.
     */
    AccrualCalculationBaseRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AccrualCalculationBase_1.AccrualCalculationBase, entity);
    };
    AccrualCalculationBaseRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(AccrualCalculationBase_1.AccrualCalculationBase, externalCodeOrEntity instanceof AccrualCalculationBase_1.AccrualCalculationBase ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return AccrualCalculationBaseRequestBuilder;
}(core_1.RequestBuilder));
exports.AccrualCalculationBaseRequestBuilder = AccrualCalculationBaseRequestBuilder;
//# sourceMappingURL=AccrualCalculationBaseRequestBuilder.js.map