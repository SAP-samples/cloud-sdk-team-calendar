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
exports.WorkScheduleDayModelAssignmentSegment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WorkScheduleDayModelAssignmentSegmentRequestBuilder_1 = require("./WorkScheduleDayModelAssignmentSegmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkScheduleDayModelAssignmentSegment" of service "SFOData".
 */
var WorkScheduleDayModelAssignmentSegment = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModelAssignmentSegment, _super);
    function WorkScheduleDayModelAssignmentSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModelAssignmentSegment`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
     */
    WorkScheduleDayModelAssignmentSegment.builder = function () {
        return core_1.Entity.entityBuilder(WorkScheduleDayModelAssignmentSegment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignmentSegment` entity type.
     * @returns A `WorkScheduleDayModelAssignmentSegment` request builder.
     */
    WorkScheduleDayModelAssignmentSegment.requestBuilder = function () {
        return new WorkScheduleDayModelAssignmentSegmentRequestBuilder_1.WorkScheduleDayModelAssignmentSegmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignmentSegment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
     */
    WorkScheduleDayModelAssignmentSegment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkScheduleDayModelAssignmentSegment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkScheduleDayModelAssignmentSegment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkScheduleDayModelAssignmentSegment.
     */
    WorkScheduleDayModelAssignmentSegment._entityName = 'WorkScheduleDayModelAssignmentSegment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModelAssignmentSegment.
     */
    WorkScheduleDayModelAssignmentSegment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkScheduleDayModelAssignmentSegment._defaultServicePath = '/odata/v2';
    return WorkScheduleDayModelAssignmentSegment;
}(core_1.Entity));
exports.WorkScheduleDayModelAssignmentSegment = WorkScheduleDayModelAssignmentSegment;
(function (WorkScheduleDayModelAssignmentSegment) {
    /**
     * Static representation of the [[workScheduleDayModelAssignmentDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY = new core_1.BigNumberField('WorkScheduleDayModelAssignment_day', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_EXTERNAL_CODE = new core_1.StringField('WorkSchedule_externalCode', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.CATEGORY = new core_1.StringField('category', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.CREATED_BY = new core_1.StringField('createdBy', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.CREATED_DATE = new core_1.DateField('createdDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.DURATION = new core_1.BigNumberField('duration', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.END_TIME = new core_1.TimeField('endTime', WorkScheduleDayModelAssignmentSegment, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.EXTERNAL_CODE = new core_1.StringField('externalCode', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModelAssignmentSegment.START_TIME = new core_1.TimeField('startTime', WorkScheduleDayModelAssignmentSegment, 'Edm.Time');
    /**
     * All fields of the WorkScheduleDayModelAssignmentSegment entity.
     */
    WorkScheduleDayModelAssignmentSegment._allFields = [
        WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY,
        WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_EXTERNAL_CODE,
        WorkScheduleDayModelAssignmentSegment.CATEGORY,
        WorkScheduleDayModelAssignmentSegment.CREATED_BY,
        WorkScheduleDayModelAssignmentSegment.CREATED_DATE,
        WorkScheduleDayModelAssignmentSegment.CREATED_DATE_TIME,
        WorkScheduleDayModelAssignmentSegment.DURATION,
        WorkScheduleDayModelAssignmentSegment.END_TIME,
        WorkScheduleDayModelAssignmentSegment.EXTERNAL_CODE,
        WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_BY,
        WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE,
        WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_TIME,
        WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_WITH_TZ,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_END_DATE,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_START_DATE,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_ENTITY_ID,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_OBJECT_TYPE,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_ID,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_STATUS,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_STATUS,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_VERSION_ID,
        WorkScheduleDayModelAssignmentSegment.START_TIME
    ];
    /**
     * All fields selector.
     */
    WorkScheduleDayModelAssignmentSegment.ALL_FIELDS = new core_1.AllFields('*', WorkScheduleDayModelAssignmentSegment);
    /**
     * All key fields of the WorkScheduleDayModelAssignmentSegment entity.
     */
    WorkScheduleDayModelAssignmentSegment._keyFields = [WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY, WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDayModelAssignmentSegment.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignmentSegment.
     */
    WorkScheduleDayModelAssignmentSegment._keys = WorkScheduleDayModelAssignmentSegment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkScheduleDayModelAssignmentSegment = exports.WorkScheduleDayModelAssignmentSegment || (exports.WorkScheduleDayModelAssignmentSegment = {}));
exports.WorkScheduleDayModelAssignmentSegment = WorkScheduleDayModelAssignmentSegment;
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegment.js.map