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
exports.TimeAccountSnapshot = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountSnapshotRequestBuilder_1 = require("./TimeAccountSnapshotRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountSnapshot" of service "SFOData".
 */
var TimeAccountSnapshot = /** @class */ (function (_super) {
    __extends(TimeAccountSnapshot, _super);
    function TimeAccountSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountSnapshot`.
     * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
     */
    TimeAccountSnapshot.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountSnapshot);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountSnapshot` entity type.
     * @returns A `TimeAccountSnapshot` request builder.
     */
    TimeAccountSnapshot.requestBuilder = function () {
        return new TimeAccountSnapshotRequestBuilder_1.TimeAccountSnapshotRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountSnapshot`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
     */
    TimeAccountSnapshot.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountSnapshot);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountSnapshot.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountSnapshot.
     */
    TimeAccountSnapshot._entityName = 'TimeAccountSnapshot';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountSnapshot.
     */
    TimeAccountSnapshot._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountSnapshot._defaultServicePath = '/odata/v2';
    return TimeAccountSnapshot;
}(core_1.Entity));
exports.TimeAccountSnapshot = TimeAccountSnapshot;
var TimeAccountType_1_1 = require("./TimeAccountType_1");
(function (TimeAccountSnapshot) {
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.ACCOUNT_TYPE = new core_1.StringField('accountType', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[approvedAbsenceBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE = new core_1.BigNumberField('approvedAbsenceBalance', TimeAccountSnapshot, 'Edm.Decimal');
    /**
     * Static representation of the [[approvedAbsenceBalanceAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED = new core_1.BigNumberField('approvedAbsenceBalanceAccrualSeparated', TimeAccountSnapshot, 'Edm.Decimal');
    /**
     * Static representation of the [[asOfAccountingPeriodEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.AS_OF_ACCOUNTING_PERIOD_END = new core_1.BooleanField('asOfAccountingPeriodEnd', TimeAccountSnapshot, 'Edm.Boolean');
    /**
     * Static representation of the [[asOfPayPeriodEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.AS_OF_PAY_PERIOD_END = new core_1.BooleanField('asOfPayPeriodEnd', TimeAccountSnapshot, 'Edm.Boolean');
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.BALANCE = new core_1.BigNumberField('balance', TimeAccountSnapshot, 'Edm.Decimal');
    /**
     * Static representation of the [[balanceAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.BALANCE_ACCRUAL_SEPARATED = new core_1.BigNumberField('balanceAccrualSeparated', TimeAccountSnapshot, 'Edm.Decimal');
    /**
     * Static representation of the [[balanceEffectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.BALANCE_EFFECTIVE_DATE = new core_1.DateField('balanceEffectiveDate', TimeAccountSnapshot, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.CREATED_BY = new core_1.StringField('createdBy', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountSnapshot, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.ENTITY_ID = new core_1.StringField('entityId', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountSnapshot, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[outdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.OUTDATED = new core_1.BooleanField('outdated', TimeAccountSnapshot, 'Edm.Boolean');
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.UNIT = new core_1.StringField('unit', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.USER_ID = new core_1.StringField('userId', TimeAccountSnapshot, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountSnapshot.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', TimeAccountSnapshot, TimeAccountType_1_1.TimeAccountType_1);
    /**
     * All fields of the TimeAccountSnapshot entity.
     */
    TimeAccountSnapshot._allFields = [
        TimeAccountSnapshot.ACCOUNT_TYPE,
        TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE,
        TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED,
        TimeAccountSnapshot.AS_OF_ACCOUNTING_PERIOD_END,
        TimeAccountSnapshot.AS_OF_PAY_PERIOD_END,
        TimeAccountSnapshot.BALANCE,
        TimeAccountSnapshot.BALANCE_ACCRUAL_SEPARATED,
        TimeAccountSnapshot.BALANCE_EFFECTIVE_DATE,
        TimeAccountSnapshot.CREATED_BY,
        TimeAccountSnapshot.CREATED_DATE_TIME,
        TimeAccountSnapshot.ENTITY_ID,
        TimeAccountSnapshot.EXTERNAL_CODE,
        TimeAccountSnapshot.LAST_MODIFIED_BY,
        TimeAccountSnapshot.LAST_MODIFIED_DATE_TIME,
        TimeAccountSnapshot.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountSnapshot.OUTDATED,
        TimeAccountSnapshot.UNIT,
        TimeAccountSnapshot.USER_ID,
        TimeAccountSnapshot.ACCOUNT_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    TimeAccountSnapshot.ALL_FIELDS = new core_1.AllFields('*', TimeAccountSnapshot);
    /**
     * All key fields of the TimeAccountSnapshot entity.
     */
    TimeAccountSnapshot._keyFields = [TimeAccountSnapshot.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountSnapshot.
     */
    TimeAccountSnapshot._keys = TimeAccountSnapshot._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountSnapshot = exports.TimeAccountSnapshot || (exports.TimeAccountSnapshot = {}));
exports.TimeAccountSnapshot = TimeAccountSnapshot;
//# sourceMappingURL=TimeAccountSnapshot.js.map