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
exports.WorkScheduleDayModelRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var WorkScheduleDayModel_1 = require("./WorkScheduleDayModel");
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModel]] entity.
 */
var WorkScheduleDayModelRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelRequestBuilder, _super);
    function WorkScheduleDayModelRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModel` entity based on its keys.
     * @param externalCode Key property. See [[WorkScheduleDayModel.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModel` entity based on its keys.
     */
    WorkScheduleDayModelRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(WorkScheduleDayModel_1.WorkScheduleDayModel, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `WorkScheduleDayModel` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModel` entities.
     */
    WorkScheduleDayModelRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkScheduleDayModel_1.WorkScheduleDayModel);
    };
    /**
     * Returns a request builder for creating a `WorkScheduleDayModel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModel`.
     */
    WorkScheduleDayModelRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkScheduleDayModel_1.WorkScheduleDayModel, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModel`.
     */
    WorkScheduleDayModelRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkScheduleDayModel_1.WorkScheduleDayModel, entity);
    };
    WorkScheduleDayModelRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(WorkScheduleDayModel_1.WorkScheduleDayModel, externalCodeOrEntity instanceof WorkScheduleDayModel_1.WorkScheduleDayModel ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return WorkScheduleDayModelRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleDayModelRequestBuilder = WorkScheduleDayModelRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelRequestBuilder.js.map