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
exports.EmployeeTimeUsa = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeUsaRequestBuilder_1 = require("./EmployeeTimeUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeUSA" of service "SFOData".
 */
var EmployeeTimeUsa = /** @class */ (function (_super) {
    __extends(EmployeeTimeUsa, _super);
    function EmployeeTimeUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeUsa`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeUsa`.
     */
    EmployeeTimeUsa.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeUsa` entity type.
     * @returns A `EmployeeTimeUsa` request builder.
     */
    EmployeeTimeUsa.requestBuilder = function () {
        return new EmployeeTimeUsaRequestBuilder_1.EmployeeTimeUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeUsa`.
     */
    EmployeeTimeUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeUsa.
     */
    EmployeeTimeUsa._entityName = 'EmployeeTimeUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeUsa.
     */
    EmployeeTimeUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeUsa._defaultServicePath = '/odata/v2';
    return EmployeeTimeUsa;
}(core_1.Entity));
exports.EmployeeTimeUsa = EmployeeTimeUsa;
(function (EmployeeTimeUsa) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[disabilityPeriodOneEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.DISABILITY_PERIOD_ONE_END_DATE = new core_1.DateField('disabilityPeriodOneEndDate', EmployeeTimeUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[disabilityPeriodThreeEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.DISABILITY_PERIOD_THREE_END_DATE = new core_1.DateField('disabilityPeriodThreeEndDate', EmployeeTimeUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[disabilityPeriodTwoEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.DISABILITY_PERIOD_TWO_END_DATE = new core_1.DateField('disabilityPeriodTwoEndDate', EmployeeTimeUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeUsa, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeUsa.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeUsa, 'Edm.String');
    /**
     * All fields of the EmployeeTimeUsa entity.
     */
    EmployeeTimeUsa._allFields = [
        EmployeeTimeUsa.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeUsa.CREATED_BY,
        EmployeeTimeUsa.CREATED_DATE_TIME,
        EmployeeTimeUsa.DISABILITY_PERIOD_ONE_END_DATE,
        EmployeeTimeUsa.DISABILITY_PERIOD_THREE_END_DATE,
        EmployeeTimeUsa.DISABILITY_PERIOD_TWO_END_DATE,
        EmployeeTimeUsa.EXTERNAL_CODE,
        EmployeeTimeUsa.LAST_MODIFIED_BY,
        EmployeeTimeUsa.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeUsa.MDF_SYSTEM_RECORD_STATUS
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeUsa.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeUsa);
    /**
     * All key fields of the EmployeeTimeUsa entity.
     */
    EmployeeTimeUsa._keyFields = [EmployeeTimeUsa.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeUsa.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeUsa.
     */
    EmployeeTimeUsa._keys = EmployeeTimeUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeUsa = exports.EmployeeTimeUsa || (exports.EmployeeTimeUsa = {}));
exports.EmployeeTimeUsa = EmployeeTimeUsa;
//# sourceMappingURL=EmployeeTimeUsa.js.map