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
exports.WorkScheduleDayRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var WorkScheduleDay_1 = require("./WorkScheduleDay");
/**
 * Request builder class for operations supported on the [[WorkScheduleDay]] entity.
 */
var WorkScheduleDayRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkScheduleDayRequestBuilder, _super);
    function WorkScheduleDayRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkScheduleDay` entity based on its keys.
     * @param workScheduleExternalCode Key property. See [[WorkScheduleDay.workScheduleExternalCode]].
     * @param day Key property. See [[WorkScheduleDay.day]].
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDay` entity based on its keys.
     */
    WorkScheduleDayRequestBuilder.prototype.getByKey = function (workScheduleExternalCode, day) {
        return new core_1.GetByKeyRequestBuilder(WorkScheduleDay_1.WorkScheduleDay, {
            WorkSchedule_externalCode: workScheduleExternalCode,
            day: day
        });
    };
    /**
     * Returns a request builder for querying all `WorkScheduleDay` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDay` entities.
     */
    WorkScheduleDayRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkScheduleDay_1.WorkScheduleDay);
    };
    /**
     * Returns a request builder for creating a `WorkScheduleDay` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDay`.
     */
    WorkScheduleDayRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(WorkScheduleDay_1.WorkScheduleDay, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDay`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDay`.
     */
    WorkScheduleDayRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(WorkScheduleDay_1.WorkScheduleDay, entity);
    };
    WorkScheduleDayRequestBuilder.prototype.delete = function (workScheduleExternalCodeOrEntity, day) {
        return new core_1.DeleteRequestBuilder(WorkScheduleDay_1.WorkScheduleDay, workScheduleExternalCodeOrEntity instanceof WorkScheduleDay_1.WorkScheduleDay ? workScheduleExternalCodeOrEntity : {
            WorkSchedule_externalCode: workScheduleExternalCodeOrEntity,
            day: day
        });
    };
    return WorkScheduleDayRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkScheduleDayRequestBuilder = WorkScheduleDayRequestBuilder;
//# sourceMappingURL=WorkScheduleDayRequestBuilder.js.map