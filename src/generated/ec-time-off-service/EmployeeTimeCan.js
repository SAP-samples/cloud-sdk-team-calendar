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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCan = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeCanRequestBuilder_1 = require("./EmployeeTimeCanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeCAN" of service "SFOData".
 */
var EmployeeTimeCan = /** @class */ (function (_super) {
    __extends(EmployeeTimeCan, _super);
    function EmployeeTimeCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeCan`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
     */
    EmployeeTimeCan.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeCan);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeCan` entity type.
     * @returns A `EmployeeTimeCan` request builder.
     */
    EmployeeTimeCan.requestBuilder = function () {
        return new EmployeeTimeCanRequestBuilder_1.EmployeeTimeCanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
     */
    EmployeeTimeCan.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeCan);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeCan.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeCan.
     */
    EmployeeTimeCan._entityName = 'EmployeeTimeCAN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeCan.
     */
    EmployeeTimeCan._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeCan._defaultServicePath = '/odata/v2';
    return EmployeeTimeCan;
}(core_1.Entity));
exports.EmployeeTimeCan = EmployeeTimeCan;
(function (EmployeeTimeCan) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeCan, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeCan, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[disabilityPeriodOneEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.DISABILITY_PERIOD_ONE_END_DATE = new core_1.DateField('disabilityPeriodOneEndDate', EmployeeTimeCan, 'Edm.DateTime');
    /**
     * Static representation of the [[disabilityPeriodThreeEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.DISABILITY_PERIOD_THREE_END_DATE = new core_1.DateField('disabilityPeriodThreeEndDate', EmployeeTimeCan, 'Edm.DateTime');
    /**
     * Static representation of the [[disabilityPeriodTwoEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.DISABILITY_PERIOD_TWO_END_DATE = new core_1.DateField('disabilityPeriodTwoEndDate', EmployeeTimeCan, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeCan, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCan.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeCan, 'Edm.String');
    /**
     * All fields of the EmployeeTimeCan entity.
     */
    EmployeeTimeCan._allFields = [
        EmployeeTimeCan.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeCan.CREATED_BY,
        EmployeeTimeCan.CREATED_DATE_TIME,
        EmployeeTimeCan.DISABILITY_PERIOD_ONE_END_DATE,
        EmployeeTimeCan.DISABILITY_PERIOD_THREE_END_DATE,
        EmployeeTimeCan.DISABILITY_PERIOD_TWO_END_DATE,
        EmployeeTimeCan.EXTERNAL_CODE,
        EmployeeTimeCan.LAST_MODIFIED_BY,
        EmployeeTimeCan.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeCan.MDF_SYSTEM_RECORD_STATUS
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeCan.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeCan);
    /**
     * All key fields of the EmployeeTimeCan entity.
     */
    EmployeeTimeCan._keyFields = [EmployeeTimeCan.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCan.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeCan.
     */
    EmployeeTimeCan._keys = EmployeeTimeCan._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeCan = exports.EmployeeTimeCan || (exports.EmployeeTimeCan = {}));
exports.EmployeeTimeCan = EmployeeTimeCan;
//# sourceMappingURL=EmployeeTimeCan.js.map