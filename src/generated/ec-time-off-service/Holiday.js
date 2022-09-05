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
exports.Holiday = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var HolidayRequestBuilder_1 = require("./HolidayRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Holiday" of service "SFOData".
 */
var Holiday = /** @class */ (function (_super) {
    __extends(Holiday, _super);
    function Holiday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Holiday`.
     * @returns A builder that constructs instances of entity type `Holiday`.
     */
    Holiday.builder = function () {
        return core_1.Entity.entityBuilder(Holiday);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Holiday` entity type.
     * @returns A `Holiday` request builder.
     */
    Holiday.requestBuilder = function () {
        return new HolidayRequestBuilder_1.HolidayRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Holiday`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Holiday`.
     */
    Holiday.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Holiday);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Holiday.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Holiday.
     */
    Holiday._entityName = 'Holiday';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Holiday.
     */
    Holiday._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Holiday._defaultServicePath = '/odata/v2';
    return Holiday;
}(core_1.Entity));
exports.Holiday = Holiday;
(function (Holiday) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.COUNTRY = new core_1.StringField('country', Holiday, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_BY = new core_1.StringField('createdBy', Holiday, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_DATE = new core_1.DateField('createdDate', Holiday, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Holiday, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[holidayCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.HOLIDAY_CODE = new core_1.StringField('holidayCode', Holiday, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Holiday, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Holiday, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Holiday, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', Holiday, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', Holiday, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', Holiday, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', Holiday, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', Holiday, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', Holiday, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Holiday, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', Holiday, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', Holiday, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', Holiday, 'Edm.Int64');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_DE_DE = new core_1.StringField('name_de_DE', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_EN_GB = new core_1.StringField('name_en_GB', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_EN_US = new core_1.StringField('name_en_US', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ES_ES = new core_1.StringField('name_es_ES', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_FR_FR = new core_1.StringField('name_fr_FR', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_JA_JP = new core_1.StringField('name_ja_JP', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_KO_KR = new core_1.StringField('name_ko_KR', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_LOCALIZED = new core_1.StringField('name_localized', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_NL_NL = new core_1.StringField('name_nl_NL', Holiday, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_PT_BR = new core_1.StringField('name_pt_BR', Holiday, 'Edm.String');
    /**
     * Static representation of the [[namePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_PT_PT = new core_1.StringField('name_pt_PT', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_RU_RU = new core_1.StringField('name_ru_RU', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ZH_CN = new core_1.StringField('name_zh_CN', Holiday, 'Edm.String');
    /**
     * Static representation of the [[nameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.NAME_ZH_TW = new core_1.StringField('name_zh_TW', Holiday, 'Edm.String');
    /**
     * Static representation of the [[oldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Holiday.OLD_NAME = new core_1.StringField('oldName', Holiday, 'Edm.String');
    /**
     * All fields of the Holiday entity.
     */
    Holiday._allFields = [
        Holiday.COUNTRY,
        Holiday.CREATED_BY,
        Holiday.CREATED_DATE,
        Holiday.CREATED_DATE_TIME,
        Holiday.HOLIDAY_CODE,
        Holiday.LAST_MODIFIED_BY,
        Holiday.LAST_MODIFIED_DATE,
        Holiday.LAST_MODIFIED_DATE_TIME,
        Holiday.LAST_MODIFIED_DATE_WITH_TZ,
        Holiday.MDF_SYSTEM_EFFECTIVE_END_DATE,
        Holiday.MDF_SYSTEM_EFFECTIVE_START_DATE,
        Holiday.MDF_SYSTEM_ENTITY_ID,
        Holiday.MDF_SYSTEM_OBJECT_TYPE,
        Holiday.MDF_SYSTEM_RECORD_ID,
        Holiday.MDF_SYSTEM_RECORD_STATUS,
        Holiday.MDF_SYSTEM_STATUS,
        Holiday.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        Holiday.MDF_SYSTEM_VERSION_ID,
        Holiday.NAME_DE_DE,
        Holiday.NAME_DEFAULT_VALUE,
        Holiday.NAME_EN_GB,
        Holiday.NAME_EN_US,
        Holiday.NAME_ES_ES,
        Holiday.NAME_FR_FR,
        Holiday.NAME_JA_JP,
        Holiday.NAME_KO_KR,
        Holiday.NAME_LOCALIZED,
        Holiday.NAME_NL_NL,
        Holiday.NAME_PT_BR,
        Holiday.NAME_PT_PT,
        Holiday.NAME_RU_RU,
        Holiday.NAME_ZH_CN,
        Holiday.NAME_ZH_TW,
        Holiday.OLD_NAME
    ];
    /**
     * All fields selector.
     */
    Holiday.ALL_FIELDS = new core_1.AllFields('*', Holiday);
    /**
     * All key fields of the Holiday entity.
     */
    Holiday._keyFields = [Holiday.HOLIDAY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Holiday.
     */
    Holiday._keys = Holiday._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Holiday = exports.Holiday || (exports.Holiday = {}));
exports.Holiday = Holiday;
//# sourceMappingURL=Holiday.js.map