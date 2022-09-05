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
exports.HolidayCalendar = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var HolidayCalendarRequestBuilder_1 = require("./HolidayCalendarRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HolidayCalendar" of service "SFOData".
 */
var HolidayCalendar = /** @class */ (function (_super) {
    __extends(HolidayCalendar, _super);
    function HolidayCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `HolidayCalendar`.
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    HolidayCalendar.builder = function () {
        return core_1.Entity.entityBuilder(HolidayCalendar);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HolidayCalendar` entity type.
     * @returns A `HolidayCalendar` request builder.
     */
    HolidayCalendar.requestBuilder = function () {
        return new HolidayCalendarRequestBuilder_1.HolidayCalendarRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    HolidayCalendar.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, HolidayCalendar);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HolidayCalendar.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HolidayCalendar.
     */
    HolidayCalendar._entityName = 'HolidayCalendar';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HolidayCalendar.
     */
    HolidayCalendar._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    HolidayCalendar._defaultServicePath = '/odata/v2';
    return HolidayCalendar;
}(core_1.Entity));
exports.HolidayCalendar = HolidayCalendar;
var HolidayAssignment_1 = require("./HolidayAssignment");
(function (HolidayCalendar) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.COUNTRY = new core_1.StringField('country', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.CREATED_BY = new core_1.StringField('createdBy', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.CREATED_DATE = new core_1.DateField('createdDate', HolidayCalendar, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.EXTERNAL_CODE = new core_1.StringField('externalCode', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', HolidayCalendar, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', HolidayCalendar, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', HolidayCalendar, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', HolidayCalendar, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', HolidayCalendar, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', HolidayCalendar, 'Edm.Int64');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_DE_DE = new core_1.StringField('name_de_DE', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_EN_GB = new core_1.StringField('name_en_GB', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_EN_US = new core_1.StringField('name_en_US', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_ES_ES = new core_1.StringField('name_es_ES', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_FR_FR = new core_1.StringField('name_fr_FR', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_JA_JP = new core_1.StringField('name_ja_JP', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_KO_KR = new core_1.StringField('name_ko_KR', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_LOCALIZED = new core_1.StringField('name_localized', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_NL_NL = new core_1.StringField('name_nl_NL', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_PT_BR = new core_1.StringField('name_pt_BR', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[namePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_PT_PT = new core_1.StringField('name_pt_PT', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_RU_RU = new core_1.StringField('name_ru_RU', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_ZH_CN = new core_1.StringField('name_zh_CN', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[nameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.NAME_ZH_TW = new core_1.StringField('name_zh_TW', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the [[oldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.OLD_NAME = new core_1.StringField('oldName', HolidayCalendar, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[holidayAssignments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HolidayCalendar.HOLIDAY_ASSIGNMENTS = new core_1.Link('holidayAssignments', HolidayCalendar, HolidayAssignment_1.HolidayAssignment);
    /**
     * All fields of the HolidayCalendar entity.
     */
    HolidayCalendar._allFields = [
        HolidayCalendar.COUNTRY,
        HolidayCalendar.CREATED_BY,
        HolidayCalendar.CREATED_DATE,
        HolidayCalendar.CREATED_DATE_TIME,
        HolidayCalendar.EXTERNAL_CODE,
        HolidayCalendar.LAST_MODIFIED_BY,
        HolidayCalendar.LAST_MODIFIED_DATE,
        HolidayCalendar.LAST_MODIFIED_DATE_TIME,
        HolidayCalendar.LAST_MODIFIED_DATE_WITH_TZ,
        HolidayCalendar.MDF_SYSTEM_EFFECTIVE_END_DATE,
        HolidayCalendar.MDF_SYSTEM_EFFECTIVE_START_DATE,
        HolidayCalendar.MDF_SYSTEM_ENTITY_ID,
        HolidayCalendar.MDF_SYSTEM_OBJECT_TYPE,
        HolidayCalendar.MDF_SYSTEM_RECORD_ID,
        HolidayCalendar.MDF_SYSTEM_RECORD_STATUS,
        HolidayCalendar.MDF_SYSTEM_STATUS,
        HolidayCalendar.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        HolidayCalendar.MDF_SYSTEM_VERSION_ID,
        HolidayCalendar.NAME_DE_DE,
        HolidayCalendar.NAME_DEFAULT_VALUE,
        HolidayCalendar.NAME_EN_GB,
        HolidayCalendar.NAME_EN_US,
        HolidayCalendar.NAME_ES_ES,
        HolidayCalendar.NAME_FR_FR,
        HolidayCalendar.NAME_JA_JP,
        HolidayCalendar.NAME_KO_KR,
        HolidayCalendar.NAME_LOCALIZED,
        HolidayCalendar.NAME_NL_NL,
        HolidayCalendar.NAME_PT_BR,
        HolidayCalendar.NAME_PT_PT,
        HolidayCalendar.NAME_RU_RU,
        HolidayCalendar.NAME_ZH_CN,
        HolidayCalendar.NAME_ZH_TW,
        HolidayCalendar.OLD_NAME,
        HolidayCalendar.HOLIDAY_ASSIGNMENTS
    ];
    /**
     * All fields selector.
     */
    HolidayCalendar.ALL_FIELDS = new core_1.AllFields('*', HolidayCalendar);
    /**
     * All key fields of the HolidayCalendar entity.
     */
    HolidayCalendar._keyFields = [HolidayCalendar.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property HolidayCalendar.
     */
    HolidayCalendar._keys = HolidayCalendar._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HolidayCalendar = exports.HolidayCalendar || (exports.HolidayCalendar = {}));
exports.HolidayCalendar = HolidayCalendar;
//# sourceMappingURL=HolidayCalendar.js.map