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
exports.WorkScheduleDayModelSegmentRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var WorkScheduleDayModelSegment_1 = require("./WorkScheduleDayModelSegment");
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelSegment]] entity.
 */
var WorkScheduleDayModelSegmentRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelSegmentRequestBuilder, _super);
    function WorkScheduleDayModelSegmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelSegment` entity based on its keys.
     * @param workScheduleDayModelExternalCode Key property. See [[WorkScheduleDayModelSegment.workScheduleDayModelExternalCode]].
     * @param externalCode Key property. See [[WorkScheduleDayModelSegment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelSegment` entity based on its keys.
     */
    WorkScheduleDayModelSegmentRequestBuilder.prototype.getByKey = function (workScheduleDayModelExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment, {
            WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelSegment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelSegment` entities.
     */
    WorkScheduleDayModelSegmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment);
    };
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelSegment`.
     */
    WorkScheduleDayModelSegmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelSegment`.
     */
    WorkScheduleDayModelSegmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment, entity);
    };
    WorkScheduleDayModelSegmentRequestBuilder.prototype.delete = function (workScheduleDayModelExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment, workScheduleDayModelExternalCodeOrEntity instanceof WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment ? workScheduleDayModelExternalCodeOrEntity : {
            WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return WorkScheduleDayModelSegmentRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleDayModelSegmentRequestBuilder = WorkScheduleDayModelSegmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelSegmentRequestBuilder.js.map