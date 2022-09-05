"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEcTimeOffServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Ec Time Off Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilder(exports.defaultEcTimeOffServicePath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Ec Time Off Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
function changeset() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSet(requests);
}
exports.changeset = changeset;
exports.defaultEcTimeOffServicePath = '/sap/opu/odata/sap/SFOData';
var map = { 'AccrualCalculationBase': index_1.AccrualCalculationBase, 'TimeAccountPostingRule': index_1.TimeAccountPostingRule, 'WorkScheduleDay': index_1.WorkScheduleDay, 'WorkSchedule': index_1.WorkSchedule, 'TimeAccount': index_1.TimeAccount, 'EmployeeTime': index_1.EmployeeTime, 'HolidayCalendar': index_1.HolidayCalendar, 'EmployeeTimeCOL': index_1.EmployeeTimeCol, 'EmployeeTimePOL': index_1.EmployeeTimePol, 'EmployeeTimeAUS': index_1.EmployeeTimeAus, 'TimeTypeAUS': index_1.TimeTypeAus, 'TimeAccountTypeAUS': index_1.TimeAccountTypeAus, 'EmployeeTimeCAN': index_1.EmployeeTimeCan, 'EmployeeTimeUSA': index_1.EmployeeTimeUsa, 'TimeTypeCAN': index_1.TimeTypeCan, 'TimeTypeUSA': index_1.TimeTypeUsa, 'TimeAccountSnapshot': index_1.TimeAccountSnapshot, 'TimeAccountDetail': index_1.TimeAccountDetail, 'EmployeeTimeMEX': index_1.EmployeeTimeMex, 'TimeTypeProfile': index_1.TimeTypeProfile, 'Holiday': index_1.Holiday, 'ShiftClassification': index_1.ShiftClassification, 'WorkScheduleDayModel': index_1.WorkScheduleDayModel, 'TimeAccountType': index_1.TimeAccountType_1, 'TemporaryTimeInformation': index_1.TemporaryTimeInformation, 'EmployeeTimeESP': index_1.EmployeeTimeEsp, 'EmployeeTimeCalendar': index_1.EmployeeTimeCalendar, 'WorkScheduleDayModelAssignmentSegment': index_1.WorkScheduleDayModelAssignmentSegment, 'AvailableTimeType': index_1.AvailableTimeType, 'WorkScheduleDayModelSegment': index_1.WorkScheduleDayModelSegment, 'EmpTimeAccountBalance': index_1.EmpTimeAccountBalance, 'WorkScheduleDayModelAssignment': index_1.WorkScheduleDayModelAssignment, 'EmployeeTimeDEU': index_1.EmployeeTimeDeu, 'EmployeeTimeGroupItem': index_1.EmployeeTimeGroupItem, 'EmployeeTimeGroup': index_1.EmployeeTimeGroup, 'TimeType': index_1.TimeType, 'HolidayAssignment': index_1.HolidayAssignment, 'AbsenceCountingMethod': index_1.AbsenceCountingMethod, 'TimeAccountPurchaseProfile': index_1.TimeAccountPurchaseProfile, 'TimeAccountPayoutProfile': index_1.TimeAccountPayoutProfile, 'TimeAccountPurchaseProfilePayComponentAssignment': index_1.TimeAccountPurchaseProfilePayComponentAssignment };
//# sourceMappingURL=BatchRequest.js.map