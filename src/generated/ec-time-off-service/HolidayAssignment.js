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
exports.HolidayAssignment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var HolidayAssignmentRequestBuilder_1 = require("./HolidayAssignmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HolidayAssignment" of service "SFOData".
 */
var HolidayAssignment = /** @class */ (function (_super) {
    __extends(HolidayAssignment, _super);
    function HolidayAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `HolidayAssignment`.
     * @returns A builder that constructs instances of entity type `HolidayAssignment`.
     */
    HolidayAssignment.builder = function () {
        return core_1.Entity.entityBuilder(HolidayAssignment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HolidayAssignment` entity type.
     * @returns A `HolidayAssignment` request builder.
     */
    HolidayAssignment.requestBuilder = function () {
        return new HolidayAssignmentRequestBuilder_1.HolidayAssignmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HolidayAssignment`.
     */
    HolidayAssignment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, HolidayAssignment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HolidayAssignment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HolidayAssignment.
     */
    HolidayAssignment._entityName = 'HolidayAssignment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HolidayAssignment.
     */
    HolidayAssignment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    HolidayAssignment._defaultServicePath = '/odata/v2';
    return HolidayAssignment;
}(core_1.Entity));
exports.HolidayAssignment = HolidayAssignment;
var Holiday_1 = require("./Holiday");
(function (HolidayAssignment) {
    /**
     * Static representation of the [[holidayCalendarExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE = new core_1.StringField('HolidayCalendar_externalCode', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.CREATED_BY = new core_1.StringField('createdBy', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.CREATED_DATE = new core_1.DateField('createdDate', HolidayAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.DATE = new core_1.DateField('date', HolidayAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[holiday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.HOLIDAY = new core_1.StringField('holiday', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[holidayClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.HOLIDAY_CLASS = new core_1.StringField('holidayClass', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', HolidayAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', HolidayAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', HolidayAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', HolidayAssignment, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', HolidayAssignment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', HolidayAssignment, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', HolidayAssignment, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[holidayNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayAssignment.HOLIDAY_NAV = new core_1.OneToOneLink('holidayNav', HolidayAssignment, Holiday_1.Holiday);
    /**
     * All fields of the HolidayAssignment entity.
     */
    HolidayAssignment._allFields = [
        HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE,
        HolidayAssignment.CREATED_BY,
        HolidayAssignment.CREATED_DATE,
        HolidayAssignment.CREATED_DATE_TIME,
        HolidayAssignment.DATE,
        HolidayAssignment.HOLIDAY,
        HolidayAssignment.HOLIDAY_CLASS,
        HolidayAssignment.LAST_MODIFIED_BY,
        HolidayAssignment.LAST_MODIFIED_DATE,
        HolidayAssignment.LAST_MODIFIED_DATE_TIME,
        HolidayAssignment.LAST_MODIFIED_DATE_WITH_TZ,
        HolidayAssignment.MDF_SYSTEM_EFFECTIVE_END_DATE,
        HolidayAssignment.MDF_SYSTEM_EFFECTIVE_START_DATE,
        HolidayAssignment.MDF_SYSTEM_ENTITY_ID,
        HolidayAssignment.MDF_SYSTEM_OBJECT_TYPE,
        HolidayAssignment.MDF_SYSTEM_RECORD_ID,
        HolidayAssignment.MDF_SYSTEM_RECORD_STATUS,
        HolidayAssignment.MDF_SYSTEM_STATUS,
        HolidayAssignment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        HolidayAssignment.MDF_SYSTEM_VERSION_ID,
        HolidayAssignment.HOLIDAY_NAV
    ];
    /**
     * All fields selector.
     */
    HolidayAssignment.ALL_FIELDS = new core_1.AllFields('*', HolidayAssignment);
    /**
     * All key fields of the HolidayAssignment entity.
     */
    HolidayAssignment._keyFields = [HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE, HolidayAssignment.DATE];
    /**
     * Mapping of all key field names to the respective static field property HolidayAssignment.
     */
    HolidayAssignment._keys = HolidayAssignment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HolidayAssignment = exports.HolidayAssignment || (exports.HolidayAssignment = {}));
exports.HolidayAssignment = HolidayAssignment;
//# sourceMappingURL=HolidayAssignment.js.map