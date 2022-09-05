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
exports.EmployeeTimeMex = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeMexRequestBuilder_1 = require("./EmployeeTimeMexRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeMEX" of service "SFOData".
 */
var EmployeeTimeMex = /** @class */ (function (_super) {
    __extends(EmployeeTimeMex, _super);
    function EmployeeTimeMex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeMex`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeMex`.
     */
    EmployeeTimeMex.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeMex);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeMex` entity type.
     * @returns A `EmployeeTimeMex` request builder.
     */
    EmployeeTimeMex.requestBuilder = function () {
        return new EmployeeTimeMexRequestBuilder_1.EmployeeTimeMexRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeMex`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeMex`.
     */
    EmployeeTimeMex.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeMex);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeMex.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeMex.
     */
    EmployeeTimeMex._entityName = 'EmployeeTimeMEX';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeMex.
     */
    EmployeeTimeMex._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeMex._defaultServicePath = '/odata/v2';
    return EmployeeTimeMex;
}(core_1.Entity));
exports.EmployeeTimeMex = EmployeeTimeMex;
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
(function (EmployeeTimeMex) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeMex, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[daysAlreadyCumulatedForSameSickness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS = new core_1.BigNumberField('daysAlreadyCumulatedForSameSickness', EmployeeTimeMex, 'Edm.Decimal');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeMex, 'Edm.Int64');
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP = new core_1.StringField('identicalSicknessGroup', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeMex, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the [[referenceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.REFERENCE_NUMBER = new core_1.StringField('referenceNumber', EmployeeTimeMex, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP_NAV = new core_1.OneToOneLink('identicalSicknessGroupNav', EmployeeTimeMex, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * All fields of the EmployeeTimeMex entity.
     */
    EmployeeTimeMex._allFields = [
        EmployeeTimeMex.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeMex.CREATED_BY,
        EmployeeTimeMex.CREATED_DATE_TIME,
        EmployeeTimeMex.DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS,
        EmployeeTimeMex.EXTERNAL_CODE,
        EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP,
        EmployeeTimeMex.LAST_MODIFIED_BY,
        EmployeeTimeMex.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeMex.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeMex.REFERENCE_NUMBER,
        EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeMex.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeMex);
    /**
     * All key fields of the EmployeeTimeMex entity.
     */
    EmployeeTimeMex._keyFields = [EmployeeTimeMex.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeMex.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeMex.
     */
    EmployeeTimeMex._keys = EmployeeTimeMex._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeMex = exports.EmployeeTimeMex || (exports.EmployeeTimeMex = {}));
exports.EmployeeTimeMex = EmployeeTimeMex;
//# sourceMappingURL=EmployeeTimeMex.js.map