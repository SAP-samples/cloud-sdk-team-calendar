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
exports.TimeAccountPayoutProfile = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountPayoutProfileRequestBuilder_1 = require("./TimeAccountPayoutProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountPayoutProfile" of service "SFOData".
 */
var TimeAccountPayoutProfile = /** @class */ (function (_super) {
    __extends(TimeAccountPayoutProfile, _super);
    function TimeAccountPayoutProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountPayoutProfile`.
     * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
     */
    TimeAccountPayoutProfile.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountPayoutProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPayoutProfile` entity type.
     * @returns A `TimeAccountPayoutProfile` request builder.
     */
    TimeAccountPayoutProfile.requestBuilder = function () {
        return new TimeAccountPayoutProfileRequestBuilder_1.TimeAccountPayoutProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPayoutProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
     */
    TimeAccountPayoutProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountPayoutProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountPayoutProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountPayoutProfile.
     */
    TimeAccountPayoutProfile._entityName = 'TimeAccountPayoutProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPayoutProfile.
     */
    TimeAccountPayoutProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountPayoutProfile._defaultServicePath = '/odata/v2';
    return TimeAccountPayoutProfile;
}(core_1.Entity));
exports.TimeAccountPayoutProfile = TimeAccountPayoutProfile;
(function (TimeAccountPayoutProfile) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.COUNTRY = new core_1.StringField('country', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.CREATED_BY = new core_1.StringField('createdBy', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountPayoutProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountPayoutProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAY_COMPONENT = new core_1.StringField('payComponent', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAY_COMPONENT_ACCRUAL_SEPARATED = new core_1.StringField('payComponentAccrualSeparated', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAY_COMPONENT_GROUP = new core_1.StringField('payComponentGroup', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payComponentTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION = new core_1.StringField('payComponentTermination', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED = new core_1.StringField('payComponentTerminationAccrualSeparated', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DE_DE = new core_1.StringField('payoutMessageText_de_DE', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE = new core_1.StringField('payoutMessageText_defaultValue', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_DEBUG = new core_1.StringField('payoutMessageText_en_DEBUG', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_GB = new core_1.StringField('payoutMessageText_en_GB', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_US = new core_1.StringField('payoutMessageText_en_US', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ES_ES = new core_1.StringField('payoutMessageText_es_ES', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_FR_FR = new core_1.StringField('payoutMessageText_fr_FR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_JA_JP = new core_1.StringField('payoutMessageText_ja_JP', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_KO_KR = new core_1.StringField('payoutMessageText_ko_KR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_LOCALIZED = new core_1.StringField('payoutMessageText_localized', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_NL_NL = new core_1.StringField('payoutMessageText_nl_NL', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_BR = new core_1.StringField('payoutMessageText_pt_BR', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextPtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_PT = new core_1.StringField('payoutMessageText_pt_PT', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_RU_RU = new core_1.StringField('payoutMessageText_ru_RU', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_CN = new core_1.StringField('payoutMessageText_zh_CN', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[payoutMessageTextZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_TW = new core_1.StringField('payoutMessageText_zh_TW', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPayoutProfile.WORKFLOW_CONFIGURATION = new core_1.StringField('workflowConfiguration', TimeAccountPayoutProfile, 'Edm.String');
    /**
     * All fields of the TimeAccountPayoutProfile entity.
     */
    TimeAccountPayoutProfile._allFields = [
        TimeAccountPayoutProfile.COUNTRY,
        TimeAccountPayoutProfile.CREATED_BY,
        TimeAccountPayoutProfile.CREATED_DATE_TIME,
        TimeAccountPayoutProfile.EXTERNAL_CODE,
        TimeAccountPayoutProfile.EXTERNAL_NAME_DE_DE,
        TimeAccountPayoutProfile.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeAccountPayoutProfile.EXTERNAL_NAME_EN_DEBUG,
        TimeAccountPayoutProfile.EXTERNAL_NAME_EN_GB,
        TimeAccountPayoutProfile.EXTERNAL_NAME_EN_US,
        TimeAccountPayoutProfile.EXTERNAL_NAME_ES_ES,
        TimeAccountPayoutProfile.EXTERNAL_NAME_FR_FR,
        TimeAccountPayoutProfile.EXTERNAL_NAME_JA_JP,
        TimeAccountPayoutProfile.EXTERNAL_NAME_KO_KR,
        TimeAccountPayoutProfile.EXTERNAL_NAME_LOCALIZED,
        TimeAccountPayoutProfile.EXTERNAL_NAME_NL_NL,
        TimeAccountPayoutProfile.EXTERNAL_NAME_PT_BR,
        TimeAccountPayoutProfile.EXTERNAL_NAME_PT_PT,
        TimeAccountPayoutProfile.EXTERNAL_NAME_RU_RU,
        TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_CN,
        TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_TW,
        TimeAccountPayoutProfile.LAST_MODIFIED_BY,
        TimeAccountPayoutProfile.LAST_MODIFIED_DATE_TIME,
        TimeAccountPayoutProfile.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountPayoutProfile.PAY_COMPONENT,
        TimeAccountPayoutProfile.PAY_COMPONENT_ACCRUAL_SEPARATED,
        TimeAccountPayoutProfile.PAY_COMPONENT_GROUP,
        TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION,
        TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DE_DE,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_DEBUG,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_GB,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_US,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ES_ES,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_FR_FR,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_JA_JP,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_KO_KR,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_LOCALIZED,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_NL_NL,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_BR,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_PT,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_RU_RU,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_CN,
        TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_TW,
        TimeAccountPayoutProfile.WORKFLOW_CONFIGURATION
    ];
    /**
     * All fields selector.
     */
    TimeAccountPayoutProfile.ALL_FIELDS = new core_1.AllFields('*', TimeAccountPayoutProfile);
    /**
     * All key fields of the TimeAccountPayoutProfile entity.
     */
    TimeAccountPayoutProfile._keyFields = [TimeAccountPayoutProfile.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPayoutProfile.
     */
    TimeAccountPayoutProfile._keys = TimeAccountPayoutProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountPayoutProfile = exports.TimeAccountPayoutProfile || (exports.TimeAccountPayoutProfile = {}));
exports.TimeAccountPayoutProfile = TimeAccountPayoutProfile;
//# sourceMappingURL=TimeAccountPayoutProfile.js.map