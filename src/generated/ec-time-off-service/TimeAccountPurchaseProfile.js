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
exports.TimeAccountPurchaseProfile = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountPurchaseProfileRequestBuilder_1 = require("./TimeAccountPurchaseProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountPurchaseProfile" of service "SFOData".
 */
var TimeAccountPurchaseProfile = /** @class */ (function (_super) {
    __extends(TimeAccountPurchaseProfile, _super);
    function TimeAccountPurchaseProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountPurchaseProfile`.
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
     */
    TimeAccountPurchaseProfile.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountPurchaseProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfile` entity type.
     * @returns A `TimeAccountPurchaseProfile` request builder.
     */
    TimeAccountPurchaseProfile.requestBuilder = function () {
        return new TimeAccountPurchaseProfileRequestBuilder_1.TimeAccountPurchaseProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
     */
    TimeAccountPurchaseProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountPurchaseProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountPurchaseProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountPurchaseProfile.
     */
    TimeAccountPurchaseProfile._entityName = 'TimeAccountPurchaseProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPurchaseProfile.
     */
    TimeAccountPurchaseProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountPurchaseProfile._defaultServicePath = '/odata/v2';
    return TimeAccountPurchaseProfile;
}(core_1.Entity));
exports.TimeAccountPurchaseProfile = TimeAccountPurchaseProfile;
var TimeAccountPurchaseProfilePayComponentAssignment_1 = require("./TimeAccountPurchaseProfilePayComponentAssignment");
(function (TimeAccountPurchaseProfile) {
    /**
     * Static representation of the [[allowDeductionStartDateSelection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.ALLOW_DEDUCTION_START_DATE_SELECTION = new core_1.BooleanField('allowDeductionStartDateSelection', TimeAccountPurchaseProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.COUNTRY = new core_1.StringField('country', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.CREATED_BY = new core_1.StringField('createdBy', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountPurchaseProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deductionSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.DEDUCTION_SCHEDULE = new core_1.StringField('deductionSchedule', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[deductionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.DEDUCTION_TYPE = new core_1.StringField('deductionType', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[equivalentUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EQUIVALENT_UNITS = new core_1.StringField('equivalentUnits', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_DE_DE = new core_1.StringField('helpText_de_DE', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_DEFAULT_VALUE = new core_1.StringField('helpText_defaultValue', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_EN_DEBUG = new core_1.StringField('helpText_en_DEBUG', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_EN_GB = new core_1.StringField('helpText_en_GB', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_EN_US = new core_1.StringField('helpText_en_US', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_ES_ES = new core_1.StringField('helpText_es_ES', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_FR_FR = new core_1.StringField('helpText_fr_FR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_JA_JP = new core_1.StringField('helpText_ja_JP', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_KO_KR = new core_1.StringField('helpText_ko_KR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_LOCALIZED = new core_1.StringField('helpText_localized', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_NL_NL = new core_1.StringField('helpText_nl_NL', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_PT_BR = new core_1.StringField('helpText_pt_BR', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextPtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_PT_PT = new core_1.StringField('helpText_pt_PT', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_RU_RU = new core_1.StringField('helpText_ru_RU', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_ZH_CN = new core_1.StringField('helpText_zh_CN', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[helpTextZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.HELP_TEXT_ZH_TW = new core_1.StringField('helpText_zh_TW', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountPurchaseProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.WORKFLOW_CONFIGURATION = new core_1.StringField('workflowConfiguration', TimeAccountPurchaseProfile, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[deductionPayComponents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfile.DEDUCTION_PAY_COMPONENTS = new core_1.Link('deductionPayComponents', TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment);
    /**
     * All fields of the TimeAccountPurchaseProfile entity.
     */
    TimeAccountPurchaseProfile._allFields = [
        TimeAccountPurchaseProfile.ALLOW_DEDUCTION_START_DATE_SELECTION,
        TimeAccountPurchaseProfile.COUNTRY,
        TimeAccountPurchaseProfile.CREATED_BY,
        TimeAccountPurchaseProfile.CREATED_DATE_TIME,
        TimeAccountPurchaseProfile.DEDUCTION_SCHEDULE,
        TimeAccountPurchaseProfile.DEDUCTION_TYPE,
        TimeAccountPurchaseProfile.EQUIVALENT_UNITS,
        TimeAccountPurchaseProfile.EXTERNAL_CODE,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_DE_DE,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_DEBUG,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_GB,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_US,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_ES_ES,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_FR_FR,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_JA_JP,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_KO_KR,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_LOCALIZED,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_NL_NL,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_BR,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_PT,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_RU_RU,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_CN,
        TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_TW,
        TimeAccountPurchaseProfile.HELP_TEXT_DE_DE,
        TimeAccountPurchaseProfile.HELP_TEXT_DEFAULT_VALUE,
        TimeAccountPurchaseProfile.HELP_TEXT_EN_DEBUG,
        TimeAccountPurchaseProfile.HELP_TEXT_EN_GB,
        TimeAccountPurchaseProfile.HELP_TEXT_EN_US,
        TimeAccountPurchaseProfile.HELP_TEXT_ES_ES,
        TimeAccountPurchaseProfile.HELP_TEXT_FR_FR,
        TimeAccountPurchaseProfile.HELP_TEXT_JA_JP,
        TimeAccountPurchaseProfile.HELP_TEXT_KO_KR,
        TimeAccountPurchaseProfile.HELP_TEXT_LOCALIZED,
        TimeAccountPurchaseProfile.HELP_TEXT_NL_NL,
        TimeAccountPurchaseProfile.HELP_TEXT_PT_BR,
        TimeAccountPurchaseProfile.HELP_TEXT_PT_PT,
        TimeAccountPurchaseProfile.HELP_TEXT_RU_RU,
        TimeAccountPurchaseProfile.HELP_TEXT_ZH_CN,
        TimeAccountPurchaseProfile.HELP_TEXT_ZH_TW,
        TimeAccountPurchaseProfile.LAST_MODIFIED_BY,
        TimeAccountPurchaseProfile.LAST_MODIFIED_DATE_TIME,
        TimeAccountPurchaseProfile.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountPurchaseProfile.WORKFLOW_CONFIGURATION,
        TimeAccountPurchaseProfile.DEDUCTION_PAY_COMPONENTS
    ];
    /**
     * All fields selector.
     */
    TimeAccountPurchaseProfile.ALL_FIELDS = new core_1.AllFields('*', TimeAccountPurchaseProfile);
    /**
     * All key fields of the TimeAccountPurchaseProfile entity.
     */
    TimeAccountPurchaseProfile._keyFields = [TimeAccountPurchaseProfile.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfile.
     */
    TimeAccountPurchaseProfile._keys = TimeAccountPurchaseProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountPurchaseProfile = exports.TimeAccountPurchaseProfile || (exports.TimeAccountPurchaseProfile = {}));
exports.TimeAccountPurchaseProfile = TimeAccountPurchaseProfile;
//# sourceMappingURL=TimeAccountPurchaseProfile.js.map