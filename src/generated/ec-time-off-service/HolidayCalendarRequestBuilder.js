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
exports.HolidayCalendarRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var HolidayCalendar_1 = require("./HolidayCalendar");
/**
 * Request builder class for operations supported on the [[HolidayCalendar]] entity.
 */
var HolidayCalendarRequestBuilder = /** @class */ (function (_super) {
    __extends(HolidayCalendarRequestBuilder, _super);
    function HolidayCalendarRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HolidayCalendar` entity based on its keys.
     * @param externalCode Key property. See [[HolidayCalendar.externalCode]].
     * @returns A request builder for creating requests to retrieve one `HolidayCalendar` entity based on its keys.
     */
    HolidayCalendarRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(HolidayCalendar_1.HolidayCalendar, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `HolidayCalendar` entities.
     * @returns A request builder for creating requests to retrieve all `HolidayCalendar` entities.
     */
    HolidayCalendarRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(HolidayCalendar_1.HolidayCalendar);
    };
    return HolidayCalendarRequestBuilder;
}(core_1.RequestBuilder));
exports.HolidayCalendarRequestBuilder = HolidayCalendarRequestBuilder;
//# sourceMappingURL=HolidayCalendarRequestBuilder.js.map