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
exports.HolidayAssignmentRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var HolidayAssignment_1 = require("./HolidayAssignment");
/**
 * Request builder class for operations supported on the [[HolidayAssignment]] entity.
 */
var HolidayAssignmentRequestBuilder = /** @class */ (function (_super) {
    __extends(HolidayAssignmentRequestBuilder, _super);
    function HolidayAssignmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HolidayAssignment` entity based on its keys.
     * @param holidayCalendarExternalCode Key property. See [[HolidayAssignment.holidayCalendarExternalCode]].
     * @param date Key property. See [[HolidayAssignment.date]].
     * @returns A request builder for creating requests to retrieve one `HolidayAssignment` entity based on its keys.
     */
    HolidayAssignmentRequestBuilder.prototype.getByKey = function (holidayCalendarExternalCode, date) {
        return new core_1.GetByKeyRequestBuilder(HolidayAssignment_1.HolidayAssignment, {
            HolidayCalendar_externalCode: holidayCalendarExternalCode,
            date: date
        });
    };
    /**
     * Returns a request builder for querying all `HolidayAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `HolidayAssignment` entities.
     */
    HolidayAssignmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(HolidayAssignment_1.HolidayAssignment);
    };
    return HolidayAssignmentRequestBuilder;
}(core_1.RequestBuilder));
exports.HolidayAssignmentRequestBuilder = HolidayAssignmentRequestBuilder;
//# sourceMappingURL=HolidayAssignmentRequestBuilder.js.map