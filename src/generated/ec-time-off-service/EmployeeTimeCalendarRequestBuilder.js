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
exports.EmployeeTimeCalendarRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeCalendar_1 = require("./EmployeeTimeCalendar");
/**
 * Request builder class for operations supported on the [[EmployeeTimeCalendar]] entity.
 */
var EmployeeTimeCalendarRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeCalendarRequestBuilder, _super);
    function EmployeeTimeCalendarRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCalendar` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See [[EmployeeTimeCalendar.employeeTimeExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeCalendar.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCalendar` entity based on its keys.
     */
    EmployeeTimeCalendarRequestBuilder.prototype.getByKey = function (employeeTimeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeCalendar_1.EmployeeTimeCalendar, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeCalendar` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCalendar` entities.
     */
    EmployeeTimeCalendarRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeCalendar_1.EmployeeTimeCalendar);
    };
    return EmployeeTimeCalendarRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeCalendarRequestBuilder = EmployeeTimeCalendarRequestBuilder;
//# sourceMappingURL=EmployeeTimeCalendarRequestBuilder.js.map