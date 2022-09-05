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
exports.WorkScheduleDayModelAssignmentSegmentRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var WorkScheduleDayModelAssignmentSegment_1 = require("./WorkScheduleDayModelAssignmentSegment");
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelAssignmentSegment]] entity.
 */
var WorkScheduleDayModelAssignmentSegmentRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelAssignmentSegmentRequestBuilder, _super);
    function WorkScheduleDayModelAssignmentSegmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     * @param workScheduleDayModelAssignmentDay Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay]].
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode]].
     * @param externalCode Key property. See [[WorkScheduleDayModelAssignmentSegment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     */
    WorkScheduleDayModelAssignmentSegmentRequestBuilder.prototype.getByKey = function (workScheduleDayModelAssignmentDay, workScheduleExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment, {
            WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDay,
            WorkSchedule_externalCode: workScheduleExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignmentSegment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignmentSegment` entities.
     */
    WorkScheduleDayModelAssignmentSegmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment);
    };
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignmentSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    WorkScheduleDayModelAssignmentSegmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignmentSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    WorkScheduleDayModelAssignmentSegmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment, entity);
    };
    WorkScheduleDayModelAssignmentSegmentRequestBuilder.prototype.delete = function (workScheduleDayModelAssignmentDayOrEntity, workScheduleExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment, workScheduleDayModelAssignmentDayOrEntity instanceof WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment ? workScheduleDayModelAssignmentDayOrEntity : {
            WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDayOrEntity,
            WorkSchedule_externalCode: workScheduleExternalCode,
            externalCode: externalCode
        });
    };
    return WorkScheduleDayModelAssignmentSegmentRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleDayModelAssignmentSegmentRequestBuilder = WorkScheduleDayModelAssignmentSegmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegmentRequestBuilder.js.map