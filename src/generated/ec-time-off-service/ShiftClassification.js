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
exports.ShiftClassification = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ShiftClassificationRequestBuilder_1 = require("./ShiftClassificationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ShiftClassification" of service "SFOData".
 */
var ShiftClassification = /** @class */ (function (_super) {
    __extends(ShiftClassification, _super);
    function ShiftClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ShiftClassification`.
     * @returns A builder that constructs instances of entity type `ShiftClassification`.
     */
    ShiftClassification.builder = function () {
        return core_1.Entity.entityBuilder(ShiftClassification);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ShiftClassification` entity type.
     * @returns A `ShiftClassification` request builder.
     */
    ShiftClassification.requestBuilder = function () {
        return new ShiftClassificationRequestBuilder_1.ShiftClassificationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShiftClassification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ShiftClassification`.
     */
    ShiftClassification.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ShiftClassification);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ShiftClassification.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ShiftClassification.
     */
    ShiftClassification._entityName = 'ShiftClassification';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ShiftClassification.
     */
    ShiftClassification._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ShiftClassification._defaultServicePath = '/odata/v2';
    return ShiftClassification;
}(core_1.Entity));
exports.ShiftClassification = ShiftClassification;
(function (ShiftClassification) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.COUNTRY = new core_1.StringField('country', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_BY = new core_1.StringField('createdBy', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_DATE = new core_1.DateField('createdDate', ShiftClassification, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ShiftClassification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_CODE = new core_1.StringField('externalCode', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', ShiftClassification, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ShiftClassification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', ShiftClassification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', ShiftClassification, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', ShiftClassification, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', ShiftClassification, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', ShiftClassification, 'Edm.Int64');
    /**
     * All fields of the ShiftClassification entity.
     */
    ShiftClassification._allFields = [
        ShiftClassification.COUNTRY,
        ShiftClassification.CREATED_BY,
        ShiftClassification.CREATED_DATE,
        ShiftClassification.CREATED_DATE_TIME,
        ShiftClassification.EXTERNAL_CODE,
        ShiftClassification.EXTERNAL_NAME_DE_DE,
        ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE,
        ShiftClassification.EXTERNAL_NAME_EN_GB,
        ShiftClassification.EXTERNAL_NAME_EN_US,
        ShiftClassification.EXTERNAL_NAME_ES_ES,
        ShiftClassification.EXTERNAL_NAME_FR_FR,
        ShiftClassification.EXTERNAL_NAME_JA_JP,
        ShiftClassification.EXTERNAL_NAME_KO_KR,
        ShiftClassification.EXTERNAL_NAME_LOCALIZED,
        ShiftClassification.EXTERNAL_NAME_NL_NL,
        ShiftClassification.EXTERNAL_NAME_PT_BR,
        ShiftClassification.EXTERNAL_NAME_PT_PT,
        ShiftClassification.EXTERNAL_NAME_RU_RU,
        ShiftClassification.EXTERNAL_NAME_ZH_CN,
        ShiftClassification.EXTERNAL_NAME_ZH_TW,
        ShiftClassification.LAST_MODIFIED_BY,
        ShiftClassification.LAST_MODIFIED_DATE,
        ShiftClassification.LAST_MODIFIED_DATE_TIME,
        ShiftClassification.LAST_MODIFIED_DATE_WITH_TZ,
        ShiftClassification.MDF_SYSTEM_EFFECTIVE_END_DATE,
        ShiftClassification.MDF_SYSTEM_EFFECTIVE_START_DATE,
        ShiftClassification.MDF_SYSTEM_ENTITY_ID,
        ShiftClassification.MDF_SYSTEM_OBJECT_TYPE,
        ShiftClassification.MDF_SYSTEM_RECORD_ID,
        ShiftClassification.MDF_SYSTEM_RECORD_STATUS,
        ShiftClassification.MDF_SYSTEM_STATUS,
        ShiftClassification.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        ShiftClassification.MDF_SYSTEM_VERSION_ID
    ];
    /**
     * All fields selector.
     */
    ShiftClassification.ALL_FIELDS = new core_1.AllFields('*', ShiftClassification);
    /**
     * All key fields of the ShiftClassification entity.
     */
    ShiftClassification._keyFields = [ShiftClassification.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ShiftClassification.
     */
    ShiftClassification._keys = ShiftClassification._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ShiftClassification = exports.ShiftClassification || (exports.ShiftClassification = {}));
exports.ShiftClassification = ShiftClassification;
//# sourceMappingURL=ShiftClassification.js.map