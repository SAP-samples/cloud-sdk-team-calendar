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
exports.EmployeeTimeCol = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeColRequestBuilder_1 = require("./EmployeeTimeColRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeCOL" of service "SFOData".
 */
var EmployeeTimeCol = /** @class */ (function (_super) {
    __extends(EmployeeTimeCol, _super);
    function EmployeeTimeCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeCol`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeCol`.
     */
    EmployeeTimeCol.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeCol);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeCol` entity type.
     * @returns A `EmployeeTimeCol` request builder.
     */
    EmployeeTimeCol.requestBuilder = function () {
        return new EmployeeTimeColRequestBuilder_1.EmployeeTimeColRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeCol`.
     */
    EmployeeTimeCol.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeCol);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeCol.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeCol.
     */
    EmployeeTimeCol._entityName = 'EmployeeTimeCOL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeCol.
     */
    EmployeeTimeCol._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeCol._defaultServicePath = '/odata/v2';
    return EmployeeTimeCol;
}(core_1.Entity));
exports.EmployeeTimeCol = EmployeeTimeCol;
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
(function (EmployeeTimeCol) {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.EMPLOYEE_TIME_EXTERNAL_CODE = new core_1.StringField('EmployeeTime_externalCode', EmployeeTimeCol, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeCol, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeCol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', EmployeeTimeCol, 'Edm.Int64');
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP = new core_1.StringField('identicalSicknessGroup', EmployeeTimeCol, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeCol, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeCol, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeCol, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP_NAV = new core_1.OneToOneLink('identicalSicknessGroupNav', EmployeeTimeCol, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * All fields of the EmployeeTimeCol entity.
     */
    EmployeeTimeCol._allFields = [
        EmployeeTimeCol.EMPLOYEE_TIME_EXTERNAL_CODE,
        EmployeeTimeCol.CREATED_BY,
        EmployeeTimeCol.CREATED_DATE_TIME,
        EmployeeTimeCol.EXTERNAL_CODE,
        EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP,
        EmployeeTimeCol.LAST_MODIFIED_BY,
        EmployeeTimeCol.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeCol.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeCol.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeCol);
    /**
     * All key fields of the EmployeeTimeCol entity.
     */
    EmployeeTimeCol._keyFields = [EmployeeTimeCol.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCol.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeCol.
     */
    EmployeeTimeCol._keys = EmployeeTimeCol._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeCol = exports.EmployeeTimeCol || (exports.EmployeeTimeCol = {}));
exports.EmployeeTimeCol = EmployeeTimeCol;
//# sourceMappingURL=EmployeeTimeCol.js.map