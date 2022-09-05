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
exports.EmployeeTimeAus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeAusRequestBuilder_1 = require("./EmployeeTimeAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeAUS" of service "SFOData".
 */
var EmployeeTimeAus = /** @class */ (function (_super) {
    __extends(EmployeeTimeAus, _super);
    function EmployeeTimeAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeAus`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
     */
    EmployeeTimeAus.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeAus` entity type.
     * @returns A `EmployeeTimeAus` request builder.
     */
    EmployeeTimeAus.requestBuilder = function () {
        return new EmployeeTimeAusRequestBuilder_1.EmployeeTimeAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
     */
    EmployeeTimeAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeAus.
     */
    EmployeeTimeAus._entityName = 'EmployeeTimeAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeAus.
     */
    EmployeeTimeAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeAus._defaultServicePath = '/odata/v2';
    return EmployeeTimeAus;
}(core_1.Entity));
exports.EmployeeTimeAus = EmployeeTimeAus;
(function (EmployeeTimeAus) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeAus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeAus, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeAus, 'Edm.String');
    /**
     * Static representation of the [[requestAdvanceLeavePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.REQUEST_ADVANCE_LEAVE_PAYMENT = new core_1.BooleanField('requestAdvanceLeavePayment', EmployeeTimeAus, 'Edm.Boolean');
    /**
     * Static representation of the [[splitPaymentAcrossFinancialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR = new core_1.BooleanField('splitPaymentAcrossFinancialYear', EmployeeTimeAus, 'Edm.Boolean');
    /**
     * All fields of the EmployeeTimeAus entity.
     */
    EmployeeTimeAus._allFields = [
        EmployeeTimeAus.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeAus.CREATED_BY,
        EmployeeTimeAus.CREATED_DATE_TIME,
        EmployeeTimeAus.EXTERNAL_CODE,
        EmployeeTimeAus.LAST_MODIFIED_BY,
        EmployeeTimeAus.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeAus.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeAus.REQUEST_ADVANCE_LEAVE_PAYMENT,
        EmployeeTimeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeAus.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeAus);
    /**
     * All key fields of the EmployeeTimeAus entity.
     */
    EmployeeTimeAus._keyFields = [EmployeeTimeAus.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeAus.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeAus.
     */
    EmployeeTimeAus._keys = EmployeeTimeAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeAus = exports.EmployeeTimeAus || (exports.EmployeeTimeAus = {}));
exports.EmployeeTimeAus = EmployeeTimeAus;
//# sourceMappingURL=EmployeeTimeAus.js.map