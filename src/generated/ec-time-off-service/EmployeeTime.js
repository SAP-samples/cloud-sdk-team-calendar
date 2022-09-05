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
exports.EmployeeTime = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeRequestBuilder_1 = require("./EmployeeTimeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTime" of service "SFOData".
 */
var EmployeeTime = /** @class */ (function (_super) {
    __extends(EmployeeTime, _super);
    function EmployeeTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTime`.
     * @returns A builder that constructs instances of entity type `EmployeeTime`.
     */
    EmployeeTime.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTime);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTime` entity type.
     * @returns A `EmployeeTime` request builder.
     */
    EmployeeTime.requestBuilder = function () {
        return new EmployeeTimeRequestBuilder_1.EmployeeTimeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTime`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTime`.
     */
    EmployeeTime.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTime);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTime.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTime.
     */
    EmployeeTime._entityName = 'EmployeeTime';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTime.
     */
    EmployeeTime._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTime._defaultServicePath = '/odata/v2';
    return EmployeeTime;
}(core_1.Entity));
exports.EmployeeTime = EmployeeTime;
var EmployeeTimeDeu_1 = require("./EmployeeTimeDeu");
var EmployeeTimeEsp_1 = require("./EmployeeTimeEsp");
var EmployeeTimeMex_1 = require("./EmployeeTimeMex");
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
var EmployeeTimeCalendar_1 = require("./EmployeeTimeCalendar");
var TimeType_1 = require("./TimeType");
(function (EmployeeTime) {
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.APPROVAL_STATUS = new core_1.StringField('approvalStatus', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[cancellationWorkflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CANCELLATION_WORKFLOW_REQUEST_ID = new core_1.BigNumberField('cancellationWorkflowRequestId', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.COMMENT = new core_1.StringField('comment', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CREATED_BY = new core_1.StringField('createdBy', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CREATED_DATE = new core_1.DateField('createdDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTime, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custDeliverytype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CUST_DELIVERYTYPE = new core_1.StringField('cust_deliverytype', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[custExpectedweek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CUST_EXPECTEDWEEK = new core_1.DateField('cust_expectedweek', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[custNotificationdate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.CUST_NOTIFICATIONDATE = new core_1.DateField('cust_notificationdate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[deductionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.DEDUCTION_QUANTITY = new core_1.BigNumberField('deductionQuantity', EmployeeTime, 'Edm.Decimal');
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.EDITABLE = new core_1.BooleanField('editable', EmployeeTime, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.END_DATE = new core_1.DateField('endDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.END_TIME = new core_1.TimeField('endTime', EmployeeTime, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[flexibleRequesting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.FLEXIBLE_REQUESTING = new core_1.BooleanField('flexibleRequesting', EmployeeTime, 'Edm.Boolean');
    /**
     * Static representation of the [[fractionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.FRACTION_QUANTITY = new core_1.BigNumberField('fractionQuantity', EmployeeTime, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTime, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', EmployeeTime, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loaActualReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LOA_ACTUAL_RETURN_DATE = new core_1.DateField('loaActualReturnDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[loaEndJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LOA_END_JOB_INFO_ID = new core_1.BigNumberField('loaEndJobInfoId', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the [[loaExpectedReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LOA_EXPECTED_RETURN_DATE = new core_1.DateField('loaExpectedReturnDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[loaStartJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.LOA_START_JOB_INFO_ID = new core_1.BigNumberField('loaStartJobInfoId', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the [[originalQuantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.ORIGINAL_QUANTITY_IN_DAYS = new core_1.BigNumberField('originalQuantityInDays', EmployeeTime, 'Edm.Decimal');
    /**
     * Static representation of the [[quantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.QUANTITY_IN_DAYS = new core_1.BigNumberField('quantityInDays', EmployeeTime, 'Edm.Decimal');
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.QUANTITY_IN_HOURS = new core_1.BigNumberField('quantityInHours', EmployeeTime, 'Edm.Decimal');
    /**
     * Static representation of the [[recurrenceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.RECURRENCE_GROUP = new core_1.StringField('recurrenceGroup', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.START_DATE = new core_1.DateField('startDate', EmployeeTime, 'Edm.DateTime');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.START_TIME = new core_1.TimeField('startTime', EmployeeTime, 'Edm.Time');
    /**
     * Static representation of the [[timeRecordOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.TIME_RECORD_ORIGIN = new core_1.StringField('timeRecordOrigin', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.TIME_TYPE = new core_1.StringField('timeType', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[undeterminedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.UNDETERMINED_END_DATE = new core_1.BooleanField('undeterminedEndDate', EmployeeTime, 'Edm.Boolean');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.USER_ID = new core_1.StringField('userId', EmployeeTime, 'Edm.String');
    /**
     * Static representation of the [[workflowInitiatedByAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.WORKFLOW_INITIATED_BY_ADMIN = new core_1.BooleanField('workflowInitiatedByAdmin', EmployeeTime, 'Edm.Boolean');
    /**
     * Static representation of the [[workflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.WORKFLOW_REQUEST_ID = new core_1.BigNumberField('workflowRequestId', EmployeeTime, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.COUNTRY_EXTENSION_DEU = new core_1.OneToOneLink('countryExtensionDEU', EmployeeTime, EmployeeTimeDeu_1.EmployeeTimeDeu);
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.COUNTRY_EXTENSION_ESP = new core_1.OneToOneLink('countryExtensionESP', EmployeeTime, EmployeeTimeEsp_1.EmployeeTimeEsp);
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionMex]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.COUNTRY_EXTENSION_MEX = new core_1.OneToOneLink('countryExtensionMEX', EmployeeTime, EmployeeTimeMex_1.EmployeeTimeMex);
    /**
     * Static representation of the one-to-one navigation property [[recurrenceGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.RECURRENCE_GROUP_NAV = new core_1.OneToOneLink('recurrenceGroupNav', EmployeeTime, EmployeeTimeGroup_1.EmployeeTimeGroup);
    /**
     * Static representation of the one-to-many navigation property [[timeCalendar]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.TIME_CALENDAR = new core_1.Link('timeCalendar', EmployeeTime, EmployeeTimeCalendar_1.EmployeeTimeCalendar);
    /**
     * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTime.TIME_TYPE_NAV = new core_1.OneToOneLink('timeTypeNav', EmployeeTime, TimeType_1.TimeType);
    /**
     * All fields of the EmployeeTime entity.
     */
    EmployeeTime._allFields = [
        EmployeeTime.APPROVAL_STATUS,
        EmployeeTime.CANCELLATION_WORKFLOW_REQUEST_ID,
        EmployeeTime.COMMENT,
        EmployeeTime.CREATED_BY,
        EmployeeTime.CREATED_DATE,
        EmployeeTime.CREATED_DATE_TIME,
        EmployeeTime.CUST_DELIVERYTYPE,
        EmployeeTime.CUST_EXPECTEDWEEK,
        EmployeeTime.CUST_NOTIFICATIONDATE,
        EmployeeTime.DEDUCTION_QUANTITY,
        EmployeeTime.EDITABLE,
        EmployeeTime.END_DATE,
        EmployeeTime.END_TIME,
        EmployeeTime.EXTERNAL_CODE,
        EmployeeTime.FLEXIBLE_REQUESTING,
        EmployeeTime.FRACTION_QUANTITY,
        EmployeeTime.LAST_MODIFIED_BY,
        EmployeeTime.LAST_MODIFIED_DATE,
        EmployeeTime.LAST_MODIFIED_DATE_TIME,
        EmployeeTime.LAST_MODIFIED_DATE_WITH_TZ,
        EmployeeTime.LOA_ACTUAL_RETURN_DATE,
        EmployeeTime.LOA_END_JOB_INFO_ID,
        EmployeeTime.LOA_EXPECTED_RETURN_DATE,
        EmployeeTime.LOA_START_JOB_INFO_ID,
        EmployeeTime.MDF_SYSTEM_EFFECTIVE_END_DATE,
        EmployeeTime.MDF_SYSTEM_EFFECTIVE_START_DATE,
        EmployeeTime.MDF_SYSTEM_ENTITY_ID,
        EmployeeTime.MDF_SYSTEM_OBJECT_TYPE,
        EmployeeTime.MDF_SYSTEM_RECORD_ID,
        EmployeeTime.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTime.MDF_SYSTEM_STATUS,
        EmployeeTime.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        EmployeeTime.MDF_SYSTEM_VERSION_ID,
        EmployeeTime.ORIGINAL_QUANTITY_IN_DAYS,
        EmployeeTime.QUANTITY_IN_DAYS,
        EmployeeTime.QUANTITY_IN_HOURS,
        EmployeeTime.RECURRENCE_GROUP,
        EmployeeTime.START_DATE,
        EmployeeTime.START_TIME,
        EmployeeTime.TIME_RECORD_ORIGIN,
        EmployeeTime.TIME_TYPE,
        EmployeeTime.UNDETERMINED_END_DATE,
        EmployeeTime.USER_ID,
        EmployeeTime.WORKFLOW_INITIATED_BY_ADMIN,
        EmployeeTime.WORKFLOW_REQUEST_ID,
        EmployeeTime.COUNTRY_EXTENSION_DEU,
        EmployeeTime.COUNTRY_EXTENSION_ESP,
        EmployeeTime.COUNTRY_EXTENSION_MEX,
        EmployeeTime.RECURRENCE_GROUP_NAV,
        EmployeeTime.TIME_CALENDAR,
        EmployeeTime.TIME_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeTime.ALL_FIELDS = new core_1.AllFields('*', EmployeeTime);
    /**
     * All key fields of the EmployeeTime entity.
     */
    EmployeeTime._keyFields = [EmployeeTime.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTime.
     */
    EmployeeTime._keys = EmployeeTime._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTime = exports.EmployeeTime || (exports.EmployeeTime = {}));
exports.EmployeeTime = EmployeeTime;
//# sourceMappingURL=EmployeeTime.js.map