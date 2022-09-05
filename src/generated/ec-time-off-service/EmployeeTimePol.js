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
exports.EmployeeTimePol = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimePolRequestBuilder_1 = require("./EmployeeTimePolRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimePOL" of service "SFOData".
 */
var EmployeeTimePol = /** @class */ (function (_super) {
    __extends(EmployeeTimePol, _super);
    function EmployeeTimePol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimePol`.
     * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
     */
    EmployeeTimePol.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimePol);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimePol` entity type.
     * @returns A `EmployeeTimePol` request builder.
     */
    EmployeeTimePol.requestBuilder = function () {
        return new EmployeeTimePolRequestBuilder_1.EmployeeTimePolRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimePol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
     */
    EmployeeTimePol.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimePol);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimePol.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimePol.
     */
    EmployeeTimePol._entityName = 'EmployeeTimePOL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimePol.
     */
    EmployeeTimePol._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimePol._defaultServicePath = '/odata/v2';
    return EmployeeTimePol;
}(core_1.Entity));
exports.EmployeeTimePol = EmployeeTimePol;
(function (EmployeeTimePol) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[absenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.ABSENCE_CODE = new core_1.StringField('absenceCode', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimePol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimePol, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimePol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[zlaDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.ZLA_DELIVERY_DATE = new core_1.DateField('zlaDeliveryDate', EmployeeTimePol, 'Edm.DateTime');
    /**
     * Static representation of the [[zlaDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.ZLA_DOCUMENT_NUMBER = new core_1.StringField('zlaDocumentNumber', EmployeeTimePol, 'Edm.String');
    /**
     * Static representation of the [[zlaIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimePol.ZLA_ISSUE_DATE = new core_1.DateField('zlaIssueDate', EmployeeTimePol, 'Edm.DateTime');
    /**
     * All fields of the EmployeeTimePol entity.
     */
    EmployeeTimePol._allFields = [
        EmployeeTimePol.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimePol.ABSENCE_CODE,
        EmployeeTimePol.CREATED_BY,
        EmployeeTimePol.CREATED_DATE_TIME,
        EmployeeTimePol.EXTERNAL_CODE,
        EmployeeTimePol.LAST_MODIFIED_BY,
        EmployeeTimePol.LAST_MODIFIED_DATE_TIME,
        EmployeeTimePol.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimePol.ZLA_DELIVERY_DATE,
        EmployeeTimePol.ZLA_DOCUMENT_NUMBER,
        EmployeeTimePol.ZLA_ISSUE_DATE
    ];
    /**
     * All fields selector.
     */
    EmployeeTimePol.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimePol);
    /**
     * All key fields of the EmployeeTimePol entity.
     */
    EmployeeTimePol._keyFields = [EmployeeTimePol.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimePol.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimePol.
     */
    EmployeeTimePol._keys = EmployeeTimePol._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimePol = exports.EmployeeTimePol || (exports.EmployeeTimePol = {}));
exports.EmployeeTimePol = EmployeeTimePol;
//# sourceMappingURL=EmployeeTimePol.js.map