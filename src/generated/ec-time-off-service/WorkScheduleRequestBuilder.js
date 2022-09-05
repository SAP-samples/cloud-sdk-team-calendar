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
exports.WorkScheduleRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var WorkSchedule_1 = require("./WorkSchedule");
/**
 * Request builder class for operations supported on the [[WorkSchedule]] entity.
 */
var WorkScheduleRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleRequestBuilder, _super);
    function WorkScheduleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkSchedule` entity based on its keys.
     * @param externalCode Key property. See [[WorkSchedule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkSchedule` entity based on its keys.
     */
    WorkScheduleRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(WorkSchedule_1.WorkSchedule, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `WorkSchedule` entities.
     * @returns A request builder for creating requests to retrieve all `WorkSchedule` entities.
     */
    WorkScheduleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkSchedule_1.WorkSchedule);
    };
    /**
     * Returns a request builder for creating a `WorkSchedule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkSchedule`.
     */
    WorkScheduleRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkSchedule_1.WorkSchedule, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkSchedule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkSchedule`.
     */
    WorkScheduleRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkSchedule_1.WorkSchedule, entity);
    };
    WorkScheduleRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(WorkSchedule_1.WorkSchedule, externalCodeOrEntity instanceof WorkSchedule_1.WorkSchedule ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return WorkScheduleRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleRequestBuilder = WorkScheduleRequestBuilder;
//# sourceMappingURL=WorkScheduleRequestBuilder.js.map