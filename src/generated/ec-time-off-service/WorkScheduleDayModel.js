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
exports.WorkScheduleDayModel = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WorkScheduleDayModelRequestBuilder_1 = require("./WorkScheduleDayModelRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkScheduleDayModel" of service "SFOData".
 */
var WorkScheduleDayModel = /** @class */ (function (_super) {
    __extends(WorkScheduleDayModel, _super);
    function WorkScheduleDayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModel`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
     */
    WorkScheduleDayModel.builder = function () {
        return core_1.Entity.entityBuilder(WorkScheduleDayModel);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModel` entity type.
     * @returns A `WorkScheduleDayModel` request builder.
     */
    WorkScheduleDayModel.requestBuilder = function () {
        return new WorkScheduleDayModelRequestBuilder_1.WorkScheduleDayModelRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
     */
    WorkScheduleDayModel.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkScheduleDayModel);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkScheduleDayModel.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkScheduleDayModel.
     */
    WorkScheduleDayModel._entityName = 'WorkScheduleDayModel';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModel.
     */
    WorkScheduleDayModel._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkScheduleDayModel._defaultServicePath = '/odata/v2';
    return WorkScheduleDayModel;
}(core_1.Entity));
exports.WorkScheduleDayModel = WorkScheduleDayModel;
var WorkScheduleDayModelSegment_1 = require("./WorkScheduleDayModelSegment");
var ShiftClassification_1 = require("./ShiftClassification");
(function (WorkScheduleDayModel) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.COUNTRY = new core_1.StringField('country', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.CREATED_BY = new core_1.StringField('createdBy', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.CREATED_DATE = new core_1.DateField('createdDate', WorkScheduleDayModel, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WorkScheduleDayModel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.DESCRIPTION = new core_1.StringField('description', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_CODE = new core_1.StringField('externalCode', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.HOURS_AND_MINUTES = new core_1.StringField('hoursAndMinutes', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', WorkScheduleDayModel, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WorkScheduleDayModel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', WorkScheduleDayModel, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModel, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModel, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModel, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', WorkScheduleDayModel, 'Edm.Int64');
    /**
     * Static representation of the [[shiftClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.SHIFT_CLASSIFICATION = new core_1.StringField('shiftClassification', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.TIME_RECORDING_VARIANT = new core_1.StringField('timeRecordingVariant', WorkScheduleDayModel, 'Edm.String');
    /**
     * Static representation of the [[workingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.WORKING_HOURS = new core_1.BigNumberField('workingHours', WorkScheduleDayModel, 'Edm.Decimal');
    /**
     * Static representation of the one-to-many navigation property [[segments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.SEGMENTS = new core_1.Link('segments', WorkScheduleDayModel, WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment);
    /**
     * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkScheduleDayModel.SHIFT_CLASSIFICATION_NAV = new core_1.OneToOneLink('shiftClassificationNav', WorkScheduleDayModel, ShiftClassification_1.ShiftClassification);
    /**
     * All fields of the WorkScheduleDayModel entity.
     */
    WorkScheduleDayModel._allFields = [
        WorkScheduleDayModel.COUNTRY,
        WorkScheduleDayModel.CREATED_BY,
        WorkScheduleDayModel.CREATED_DATE,
        WorkScheduleDayModel.CREATED_DATE_TIME,
        WorkScheduleDayModel.DESCRIPTION,
        WorkScheduleDayModel.EXTERNAL_CODE,
        WorkScheduleDayModel.EXTERNAL_NAME_DE_DE,
        WorkScheduleDayModel.EXTERNAL_NAME_DEFAULT_VALUE,
        WorkScheduleDayModel.EXTERNAL_NAME_EN_GB,
        WorkScheduleDayModel.EXTERNAL_NAME_EN_US,
        WorkScheduleDayModel.EXTERNAL_NAME_ES_ES,
        WorkScheduleDayModel.EXTERNAL_NAME_FR_FR,
        WorkScheduleDayModel.EXTERNAL_NAME_JA_JP,
        WorkScheduleDayModel.EXTERNAL_NAME_KO_KR,
        WorkScheduleDayModel.EXTERNAL_NAME_LOCALIZED,
        WorkScheduleDayModel.EXTERNAL_NAME_NL_NL,
        WorkScheduleDayModel.EXTERNAL_NAME_PT_BR,
        WorkScheduleDayModel.EXTERNAL_NAME_PT_PT,
        WorkScheduleDayModel.EXTERNAL_NAME_RU_RU,
        WorkScheduleDayModel.EXTERNAL_NAME_ZH_CN,
        WorkScheduleDayModel.EXTERNAL_NAME_ZH_TW,
        WorkScheduleDayModel.HOURS_AND_MINUTES,
        WorkScheduleDayModel.LAST_MODIFIED_BY,
        WorkScheduleDayModel.LAST_MODIFIED_DATE,
        WorkScheduleDayModel.LAST_MODIFIED_DATE_TIME,
        WorkScheduleDayModel.LAST_MODIFIED_DATE_WITH_TZ,
        WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_END_DATE,
        WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_START_DATE,
        WorkScheduleDayModel.MDF_SYSTEM_ENTITY_ID,
        WorkScheduleDayModel.MDF_SYSTEM_OBJECT_TYPE,
        WorkScheduleDayModel.MDF_SYSTEM_RECORD_ID,
        WorkScheduleDayModel.MDF_SYSTEM_RECORD_STATUS,
        WorkScheduleDayModel.MDF_SYSTEM_STATUS,
        WorkScheduleDayModel.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        WorkScheduleDayModel.MDF_SYSTEM_VERSION_ID,
        WorkScheduleDayModel.SHIFT_CLASSIFICATION,
        WorkScheduleDayModel.TIME_RECORDING_VARIANT,
        WorkScheduleDayModel.WORKING_HOURS,
        WorkScheduleDayModel.SEGMENTS,
        WorkScheduleDayModel.SHIFT_CLASSIFICATION_NAV
    ];
    /**
     * All fields selector.
     */
    WorkScheduleDayModel.ALL_FIELDS = new core_1.AllFields('*', WorkScheduleDayModel);
    /**
     * All key fields of the WorkScheduleDayModel entity.
     */
    WorkScheduleDayModel._keyFields = [WorkScheduleDayModel.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModel.
     */
    WorkScheduleDayModel._keys = WorkScheduleDayModel._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkScheduleDayModel = exports.WorkScheduleDayModel || (exports.WorkScheduleDayModel = {}));
exports.WorkScheduleDayModel = WorkScheduleDayModel;
//# sourceMappingURL=WorkScheduleDayModel.js.map