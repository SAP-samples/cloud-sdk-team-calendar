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
exports.EmployeeTimeGroupItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeGroupItemRequestBuilder_1 = require("./EmployeeTimeGroupItemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeGroupItem" of service "SFOData".
 */
var EmployeeTimeGroupItem = /** @class */ (function (_super) {
    __extends(EmployeeTimeGroupItem, _super);
    function EmployeeTimeGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeGroupItem`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
     */
    EmployeeTimeGroupItem.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeGroupItem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeGroupItem` entity type.
     * @returns A `EmployeeTimeGroupItem` request builder.
     */
    EmployeeTimeGroupItem.requestBuilder = function () {
        return new EmployeeTimeGroupItemRequestBuilder_1.EmployeeTimeGroupItemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroupItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
     */
    EmployeeTimeGroupItem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeGroupItem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeGroupItem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeGroupItem.
     */
    EmployeeTimeGroupItem._entityName = 'EmployeeTimeGroupItem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeGroupItem.
     */
    EmployeeTimeGroupItem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeGroupItem._defaultServicePath = '/odata/v2';
    return EmployeeTimeGroupItem;
}(core_1.Entity));
exports.EmployeeTimeGroupItem = EmployeeTimeGroupItem;
var EmployeeTime_1 = require("./EmployeeTime");
(function (EmployeeTimeGroupItem) {
    /**
     * Static representation of the [[employeeTimeGroupExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.EMPLOYEE_TIME_GROUP_EXTERNAL_CODE = new core_1.StringField('EmployeeTimeGroup_externalCode', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.COMMENT = new core_1.StringField('comment', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.CREATED_DATE = new core_1.DateField('createdDate', EmployeeTimeGroupItem, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeGroupItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.EMPLOYEE_TIME = new core_1.StringField('employeeTime', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', EmployeeTimeGroupItem, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeGroupItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', EmployeeTimeGroupItem, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', EmployeeTimeGroupItem, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', EmployeeTimeGroupItem, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', EmployeeTimeGroupItem, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', EmployeeTimeGroupItem, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', EmployeeTimeGroupItem, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroupItem.EMPLOYEE_TIME_NAV = new core_1.OneToOneLink('employeeTimeNav', EmployeeTimeGroupItem, EmployeeTime_1.EmployeeTime);
    /**
     * All fields of the EmployeeTimeGroupItem entity.
     */
    EmployeeTimeGroupItem._allFields = [
        EmployeeTimeGroupItem.EMPLOYEE_TIME_GROUP_EXTERNAL_CODE,
        EmployeeTimeGroupItem.COMMENT,
        EmployeeTimeGroupItem.CREATED_BY,
        EmployeeTimeGroupItem.CREATED_DATE,
        EmployeeTimeGroupItem.CREATED_DATE_TIME,
        EmployeeTimeGroupItem.EMPLOYEE_TIME,
        EmployeeTimeGroupItem.EXTERNAL_CODE,
        EmployeeTimeGroupItem.LAST_MODIFIED_BY,
        EmployeeTimeGroupItem.LAST_MODIFIED_DATE,
        EmployeeTimeGroupItem.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeGroupItem.LAST_MODIFIED_DATE_WITH_TZ,
        EmployeeTimeGroupItem.MDF_SYSTEM_EFFECTIVE_END_DATE,
        EmployeeTimeGroupItem.MDF_SYSTEM_EFFECTIVE_START_DATE,
        EmployeeTimeGroupItem.MDF_SYSTEM_ENTITY_ID,
        EmployeeTimeGroupItem.MDF_SYSTEM_OBJECT_TYPE,
        EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_ID,
        EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeGroupItem.MDF_SYSTEM_STATUS,
        EmployeeTimeGroupItem.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        EmployeeTimeGroupItem.MDF_SYSTEM_VERSION_ID,
        EmployeeTimeGroupItem.EMPLOYEE_TIME_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeGroupItem.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeGroupItem);
    /**
     * All key fields of the EmployeeTimeGroupItem entity.
     */
    EmployeeTimeGroupItem._keyFields = [EmployeeTimeGroupItem.EMPLOYEE_TIME_GROUP_EXTERNAL_CODE, EmployeeTimeGroupItem.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeGroupItem.
     */
    EmployeeTimeGroupItem._keys = EmployeeTimeGroupItem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeGroupItem = exports.EmployeeTimeGroupItem || (exports.EmployeeTimeGroupItem = {}));
exports.EmployeeTimeGroupItem = EmployeeTimeGroupItem;
//# sourceMappingURL=EmployeeTimeGroupItem.js.map