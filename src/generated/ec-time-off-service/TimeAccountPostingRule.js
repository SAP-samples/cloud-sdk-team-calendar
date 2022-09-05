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
exports.TimeAccountPostingRule = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountPostingRuleRequestBuilder_1 = require("./TimeAccountPostingRuleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountPostingRule" of service "SFOData".
 */
var TimeAccountPostingRule = /** @class */ (function (_super) {
    __extends(TimeAccountPostingRule, _super);
    function TimeAccountPostingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountPostingRule`.
     * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
     */
    TimeAccountPostingRule.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountPostingRule);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPostingRule` entity type.
     * @returns A `TimeAccountPostingRule` request builder.
     */
    TimeAccountPostingRule.requestBuilder = function () {
        return new TimeAccountPostingRuleRequestBuilder_1.TimeAccountPostingRuleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPostingRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
     */
    TimeAccountPostingRule.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountPostingRule);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountPostingRule.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountPostingRule.
     */
    TimeAccountPostingRule._entityName = 'TimeAccountPostingRule';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPostingRule.
     */
    TimeAccountPostingRule._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountPostingRule._defaultServicePath = '/odata/v2';
    return TimeAccountPostingRule;
}(core_1.Entity));
exports.TimeAccountPostingRule = TimeAccountPostingRule;
var TimeAccountType_1_1 = require("./TimeAccountType_1");
(function (TimeAccountPostingRule) {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE = new core_1.StringField('TimeType_externalCode', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.CREATED_BY = new core_1.StringField('createdBy', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.CREATED_DATE = new core_1.DateField('createdDate', TimeAccountPostingRule, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', TimeAccountPostingRule, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', TimeAccountPostingRule, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', TimeAccountPostingRule, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', TimeAccountPostingRule, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', TimeAccountPostingRule, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', TimeAccountPostingRule, 'Edm.Int64');
    /**
     * Static representation of the [[timeAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE = new core_1.StringField('timeAccountType', TimeAccountPostingRule, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[timeAccountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('timeAccountTypeNav', TimeAccountPostingRule, TimeAccountType_1_1.TimeAccountType_1);
    /**
     * All fields of the TimeAccountPostingRule entity.
     */
    TimeAccountPostingRule._allFields = [
        TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE,
        TimeAccountPostingRule.CREATED_BY,
        TimeAccountPostingRule.CREATED_DATE,
        TimeAccountPostingRule.CREATED_DATE_TIME,
        TimeAccountPostingRule.EXTERNAL_CODE,
        TimeAccountPostingRule.LAST_MODIFIED_BY,
        TimeAccountPostingRule.LAST_MODIFIED_DATE,
        TimeAccountPostingRule.LAST_MODIFIED_DATE_TIME,
        TimeAccountPostingRule.LAST_MODIFIED_DATE_WITH_TZ,
        TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_END_DATE,
        TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_START_DATE,
        TimeAccountPostingRule.MDF_SYSTEM_ENTITY_ID,
        TimeAccountPostingRule.MDF_SYSTEM_OBJECT_TYPE,
        TimeAccountPostingRule.MDF_SYSTEM_RECORD_ID,
        TimeAccountPostingRule.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountPostingRule.MDF_SYSTEM_STATUS,
        TimeAccountPostingRule.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        TimeAccountPostingRule.MDF_SYSTEM_VERSION_ID,
        TimeAccountPostingRule.TIME_ACCOUNT_TYPE,
        TimeAccountPostingRule.TIME_ACCOUNT_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    TimeAccountPostingRule.ALL_FIELDS = new core_1.AllFields('*', TimeAccountPostingRule);
    /**
     * All key fields of the TimeAccountPostingRule entity.
     */
    TimeAccountPostingRule._keyFields = [TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE, TimeAccountPostingRule.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPostingRule.
     */
    TimeAccountPostingRule._keys = TimeAccountPostingRule._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountPostingRule = exports.TimeAccountPostingRule || (exports.TimeAccountPostingRule = {}));
exports.TimeAccountPostingRule = TimeAccountPostingRule;
//# sourceMappingURL=TimeAccountPostingRule.js.map