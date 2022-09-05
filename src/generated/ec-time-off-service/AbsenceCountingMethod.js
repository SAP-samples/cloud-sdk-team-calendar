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
exports.AbsenceCountingMethod = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AbsenceCountingMethodRequestBuilder_1 = require("./AbsenceCountingMethodRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AbsenceCountingMethod" of service "SFOData".
 */
var AbsenceCountingMethod = /** @class */ (function (_super) {
    __extends(AbsenceCountingMethod, _super);
    function AbsenceCountingMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AbsenceCountingMethod`.
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    AbsenceCountingMethod.builder = function () {
        return core_1.Entity.entityBuilder(AbsenceCountingMethod);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AbsenceCountingMethod` entity type.
     * @returns A `AbsenceCountingMethod` request builder.
     */
    AbsenceCountingMethod.requestBuilder = function () {
        return new AbsenceCountingMethodRequestBuilder_1.AbsenceCountingMethodRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AbsenceCountingMethod`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    AbsenceCountingMethod.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AbsenceCountingMethod);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AbsenceCountingMethod.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AbsenceCountingMethod.
     */
    AbsenceCountingMethod._entityName = 'AbsenceCountingMethod';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AbsenceCountingMethod.
     */
    AbsenceCountingMethod._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AbsenceCountingMethod._defaultServicePath = '/odata/v2';
    return AbsenceCountingMethod;
}(core_1.Entity));
exports.AbsenceCountingMethod = AbsenceCountingMethod;
(function (AbsenceCountingMethod) {
    /**
     * Static representation of the [[base]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.BASE = new core_1.StringField('base', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[considerHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CONSIDER_HOLIDAYS = new core_1.BooleanField('considerHolidays', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.COUNTRY = new core_1.StringField('country', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_BY = new core_1.StringField('createdBy', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_DATE = new core_1.DateField('createdDate', AbsenceCountingMethod, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_CODE = new core_1.StringField('externalCode', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[friday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.FRIDAY = new core_1.BooleanField('friday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', AbsenceCountingMethod, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', AbsenceCountingMethod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', AbsenceCountingMethod, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', AbsenceCountingMethod, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', AbsenceCountingMethod, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', AbsenceCountingMethod, 'Edm.Int64');
    /**
     * Static representation of the [[monday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MONDAY = new core_1.BooleanField('monday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[saturday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.SATURDAY = new core_1.BooleanField('saturday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[sunday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.SUNDAY = new core_1.BooleanField('sunday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[thursday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.THURSDAY = new core_1.BooleanField('thursday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[tuesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.TUESDAY = new core_1.BooleanField('tuesday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[wednesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.WEDNESDAY = new core_1.BooleanField('wednesday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * All fields of the AbsenceCountingMethod entity.
     */
    AbsenceCountingMethod._allFields = [
        AbsenceCountingMethod.BASE,
        AbsenceCountingMethod.CONSIDER_HOLIDAYS,
        AbsenceCountingMethod.COUNTRY,
        AbsenceCountingMethod.CREATED_BY,
        AbsenceCountingMethod.CREATED_DATE,
        AbsenceCountingMethod.CREATED_DATE_TIME,
        AbsenceCountingMethod.EXTERNAL_CODE,
        AbsenceCountingMethod.EXTERNAL_NAME_DE_DE,
        AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE,
        AbsenceCountingMethod.EXTERNAL_NAME_EN_GB,
        AbsenceCountingMethod.EXTERNAL_NAME_EN_US,
        AbsenceCountingMethod.EXTERNAL_NAME_ES_ES,
        AbsenceCountingMethod.EXTERNAL_NAME_FR_FR,
        AbsenceCountingMethod.EXTERNAL_NAME_JA_JP,
        AbsenceCountingMethod.EXTERNAL_NAME_KO_KR,
        AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED,
        AbsenceCountingMethod.EXTERNAL_NAME_NL_NL,
        AbsenceCountingMethod.EXTERNAL_NAME_PT_BR,
        AbsenceCountingMethod.EXTERNAL_NAME_PT_PT,
        AbsenceCountingMethod.EXTERNAL_NAME_RU_RU,
        AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN,
        AbsenceCountingMethod.EXTERNAL_NAME_ZH_TW,
        AbsenceCountingMethod.FRIDAY,
        AbsenceCountingMethod.LAST_MODIFIED_BY,
        AbsenceCountingMethod.LAST_MODIFIED_DATE,
        AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME,
        AbsenceCountingMethod.LAST_MODIFIED_DATE_WITH_TZ,
        AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_END_DATE,
        AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_START_DATE,
        AbsenceCountingMethod.MDF_SYSTEM_ENTITY_ID,
        AbsenceCountingMethod.MDF_SYSTEM_OBJECT_TYPE,
        AbsenceCountingMethod.MDF_SYSTEM_RECORD_ID,
        AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS,
        AbsenceCountingMethod.MDF_SYSTEM_STATUS,
        AbsenceCountingMethod.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        AbsenceCountingMethod.MDF_SYSTEM_VERSION_ID,
        AbsenceCountingMethod.MONDAY,
        AbsenceCountingMethod.SATURDAY,
        AbsenceCountingMethod.SUNDAY,
        AbsenceCountingMethod.THURSDAY,
        AbsenceCountingMethod.TUESDAY,
        AbsenceCountingMethod.WEDNESDAY
    ];
    /**
     * All fields selector.
     */
    AbsenceCountingMethod.ALL_FIELDS = new core_1.AllFields('*', AbsenceCountingMethod);
    /**
     * All key fields of the AbsenceCountingMethod entity.
     */
    AbsenceCountingMethod._keyFields = [AbsenceCountingMethod.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AbsenceCountingMethod.
     */
    AbsenceCountingMethod._keys = AbsenceCountingMethod._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AbsenceCountingMethod = exports.AbsenceCountingMethod || (exports.AbsenceCountingMethod = {}));
exports.AbsenceCountingMethod = AbsenceCountingMethod;
//# sourceMappingURL=AbsenceCountingMethod.js.map