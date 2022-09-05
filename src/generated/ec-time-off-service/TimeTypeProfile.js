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
exports.TimeTypeProfile = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeTypeProfileRequestBuilder_1 = require("./TimeTypeProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeTypeProfile" of service "SFOData".
 */
var TimeTypeProfile = /** @class */ (function (_super) {
    __extends(TimeTypeProfile, _super);
    function TimeTypeProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeTypeProfile`.
     * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
     */
    TimeTypeProfile.builder = function () {
        return core_1.Entity.entityBuilder(TimeTypeProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeProfile` entity type.
     * @returns A `TimeTypeProfile` request builder.
     */
    TimeTypeProfile.requestBuilder = function () {
        return new TimeTypeProfileRequestBuilder_1.TimeTypeProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
     */
    TimeTypeProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeTypeProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeTypeProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeTypeProfile.
     */
    TimeTypeProfile._entityName = 'TimeTypeProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeProfile.
     */
    TimeTypeProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeTypeProfile._defaultServicePath = '/odata/v2';
    return TimeTypeProfile;
}(core_1.Entity));
exports.TimeTypeProfile = TimeTypeProfile;
var AvailableTimeType_1 = require("./AvailableTimeType");
var TimeType_1 = require("./TimeType");
var TimeAccountType_1_1 = require("./TimeAccountType_1");
(function (TimeTypeProfile) {
    /**
     * Static representation of the [[bookTimeOffInLieuOnTimeSheetApproval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL = new core_1.BooleanField('bookTimeOffInLieuOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[bookWorkingTimeOnTimeSheetApproval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL = new core_1.BooleanField('bookWorkingTimeOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.COUNTRY = new core_1.StringField('country', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.CREATED_BY = new core_1.StringField('createdBy', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.CREATED_DATE = new core_1.DateField('createdDate', TimeTypeProfile, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultImportAttendanceTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE = new core_1.StringField('defaultImportAttendanceTimeType', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', TimeTypeProfile, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', TimeTypeProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mainAttendanceTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE = new core_1.StringField('mainAttendanceTimeType', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mainBreakTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE = new core_1.StringField('mainBreakTimeType', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mainEssTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_ESS_TIME_TYPE = new core_1.StringField('mainESSTimeType', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', TimeTypeProfile, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', TimeTypeProfile, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', TimeTypeProfile, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', TimeTypeProfile, 'Edm.Int64');
    /**
     * Static representation of the [[timeAccountTypeForTimeOffInLieu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU = new core_1.StringField('timeAccountTypeForTimeOffInLieu', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[timeAccountTypeForWorkingTimeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT = new core_1.StringField('timeAccountTypeForWorkingTimeAccount', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.TIME_RECORDING_VARIANT = new core_1.StringField('timeRecordingVariant', TimeTypeProfile, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[availableTimeTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.AVAILABLE_TIME_TYPES = new core_1.Link('availableTimeTypes', TimeTypeProfile, AvailableTimeType_1.AvailableTimeType);
    /**
     * Static representation of the one-to-one navigation property [[defaultImportAttendanceTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV = new core_1.OneToOneLink('defaultImportAttendanceTimeTypeNav', TimeTypeProfile, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[mainAttendanceTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE_NAV = new core_1.OneToOneLink('mainAttendanceTimeTypeNav', TimeTypeProfile, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[mainBreakTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE_NAV = new core_1.OneToOneLink('mainBreakTimeTypeNav', TimeTypeProfile, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[mainEssTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.MAIN_ESS_TIME_TYPE_NAV = new core_1.OneToOneLink('mainESSTimeTypeNav', TimeTypeProfile, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[timeAccountTypeForTimeOffInLieuNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV = new core_1.OneToOneLink('timeAccountTypeForTimeOffInLieuNav', TimeTypeProfile, TimeAccountType_1_1.TimeAccountType_1);
    /**
     * Static representation of the one-to-one navigation property [[timeAccountTypeForWorkingTimeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV = new core_1.OneToOneLink('timeAccountTypeForWorkingTimeAccountNav', TimeTypeProfile, TimeAccountType_1_1.TimeAccountType_1);
    /**
     * All fields of the TimeTypeProfile entity.
     */
    TimeTypeProfile._allFields = [
        TimeTypeProfile.BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL,
        TimeTypeProfile.BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL,
        TimeTypeProfile.COUNTRY,
        TimeTypeProfile.CREATED_BY,
        TimeTypeProfile.CREATED_DATE,
        TimeTypeProfile.CREATED_DATE_TIME,
        TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE,
        TimeTypeProfile.EXTERNAL_CODE,
        TimeTypeProfile.EXTERNAL_NAME_DE_DE,
        TimeTypeProfile.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeTypeProfile.EXTERNAL_NAME_EN_GB,
        TimeTypeProfile.EXTERNAL_NAME_EN_US,
        TimeTypeProfile.EXTERNAL_NAME_ES_ES,
        TimeTypeProfile.EXTERNAL_NAME_FR_FR,
        TimeTypeProfile.EXTERNAL_NAME_JA_JP,
        TimeTypeProfile.EXTERNAL_NAME_KO_KR,
        TimeTypeProfile.EXTERNAL_NAME_LOCALIZED,
        TimeTypeProfile.EXTERNAL_NAME_NL_NL,
        TimeTypeProfile.EXTERNAL_NAME_PT_BR,
        TimeTypeProfile.EXTERNAL_NAME_PT_PT,
        TimeTypeProfile.EXTERNAL_NAME_RU_RU,
        TimeTypeProfile.EXTERNAL_NAME_ZH_CN,
        TimeTypeProfile.EXTERNAL_NAME_ZH_TW,
        TimeTypeProfile.LAST_MODIFIED_BY,
        TimeTypeProfile.LAST_MODIFIED_DATE,
        TimeTypeProfile.LAST_MODIFIED_DATE_TIME,
        TimeTypeProfile.LAST_MODIFIED_DATE_WITH_TZ,
        TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE,
        TimeTypeProfile.MAIN_BREAK_TIME_TYPE,
        TimeTypeProfile.MAIN_ESS_TIME_TYPE,
        TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_END_DATE,
        TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_START_DATE,
        TimeTypeProfile.MDF_SYSTEM_ENTITY_ID,
        TimeTypeProfile.MDF_SYSTEM_OBJECT_TYPE,
        TimeTypeProfile.MDF_SYSTEM_RECORD_ID,
        TimeTypeProfile.MDF_SYSTEM_RECORD_STATUS,
        TimeTypeProfile.MDF_SYSTEM_STATUS,
        TimeTypeProfile.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        TimeTypeProfile.MDF_SYSTEM_VERSION_ID,
        TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU,
        TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT,
        TimeTypeProfile.TIME_RECORDING_VARIANT,
        TimeTypeProfile.AVAILABLE_TIME_TYPES,
        TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV,
        TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE_NAV,
        TimeTypeProfile.MAIN_BREAK_TIME_TYPE_NAV,
        TimeTypeProfile.MAIN_ESS_TIME_TYPE_NAV,
        TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV,
        TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV
    ];
    /**
     * All fields selector.
     */
    TimeTypeProfile.ALL_FIELDS = new core_1.AllFields('*', TimeTypeProfile);
    /**
     * All key fields of the TimeTypeProfile entity.
     */
    TimeTypeProfile._keyFields = [TimeTypeProfile.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeTypeProfile.
     */
    TimeTypeProfile._keys = TimeTypeProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeTypeProfile = exports.TimeTypeProfile || (exports.TimeTypeProfile = {}));
exports.TimeTypeProfile = TimeTypeProfile;
//# sourceMappingURL=TimeTypeProfile.js.map