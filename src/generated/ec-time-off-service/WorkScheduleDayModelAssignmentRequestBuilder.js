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
exports.WorkScheduleDayModelAssignmentRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var WorkScheduleDayModelAssignment_1 = require("./WorkScheduleDayModelAssignment");
/**
 * Request builder class for operations supported on the [[WorkScheduleDayModelAssignment]] entity.
 */
var WorkScheduleDayModelAssignmentRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelAssignmentRequestBuilder, _super);
    function WorkScheduleDayModelAssignmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignment` entity based on its keys.
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDayModelAssignment.workScheduleExternalCode]].
     * @param day Key property. See [[WorkScheduleDayModelAssignment.day]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignment` entity based on its keys.
     */
    WorkScheduleDayModelAssignmentRequestBuilder.prototype.getByKey = function (workScheduleExternalCode, day) {
        return new core_1.GetByKeyRequestBuilder(WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment, {
            WorkSchedule_externalCode: workScheduleExternalCode,
            day: day
        });
    };
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignment` entities.
     */
    WorkScheduleDayModelAssignmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment);
    };
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignment`.
     */
    WorkScheduleDayModelAssignmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignment`.
     */
    WorkScheduleDayModelAssignmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment, entity);
    };
    WorkScheduleDayModelAssignmentRequestBuilder.prototype.delete = function (workScheduleExternalCodeOrEntity, day) {
        return new core_1.DeleteRequestBuilder(WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment, workScheduleExternalCodeOrEntity instanceof WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment ? workScheduleExternalCodeOrEntity : {
            WorkSchedule_externalCode: workScheduleExternalCodeOrEntity,
            day: day
        });
    };
    return WorkScheduleDayModelAssignmentRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleDayModelAssignmentRequestBuilder = WorkScheduleDayModelAssignmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelAssignmentRequestBuilder.js.map