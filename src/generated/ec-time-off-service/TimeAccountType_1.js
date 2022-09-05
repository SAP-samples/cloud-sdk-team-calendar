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
exports.TimeAccountType_1 = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountType_1RequestBuilder_1 = require("./TimeAccountType_1RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountType" of service "SFOData".
 */
var TimeAccountType_1 = /** @class */ (function (_super) {
    __extends(TimeAccountType_1, _super);
    function TimeAccountType_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountType_1`.
     * @returns A builder that constructs instances of entity type `TimeAccountType_1`.
     */
    TimeAccountType_1.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountType_1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountType_1` entity type.
     * @returns A `TimeAccountType_1` request builder.
     */
    TimeAccountType_1.requestBuilder = function () {
        return new TimeAccountType_1RequestBuilder_1.TimeAccountType_1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountType_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountType_1`.
     */
    TimeAccountType_1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountType_1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountType_1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountType_1.
     */
    TimeAccountType_1._entityName = 'TimeAccountType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountType_1.
     */
    TimeAccountType_1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountType_1._defaultServicePath = '/odata/v2';
    return TimeAccountType_1;
}(core_1.Entity));
exports.TimeAccountType_1 = TimeAccountType_1;
(function (TimeAccountType_1) {
    /**
     * Static representation of the [[accountBookingOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_BOOKING_OFFSET_IN_MONTHS = new core_1.BigNumberField('accountBookingOffsetInMonths', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_CREATION_AUTOMATION_LEVEL = new core_1.StringField('accountCreationAutomationLevel', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accountCreationDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_CREATION_DAY = new core_1.BigNumberField('accountCreationDay', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_CREATION_MONTH = new core_1.BigNumberField('accountCreationMonth', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_CREATION_OFFSET_IN_MONTHS = new core_1.BigNumberField('accountCreationOffsetInMonths', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accountCreationReferenceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_CREATION_REFERENCE_DATE = new core_1.StringField('accountCreationReferenceDate', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accountDetailRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_DETAIL_RETENTION_GROUP = new core_1.StringField('accountDetailRetentionGroup', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accountRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCOUNT_RETENTION_GROUP = new core_1.StringField('accountRetentionGroup', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_AUTOMATION_LEVEL = new core_1.StringField('accrualAutomationLevel', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualCalculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_CALCULATION_METHOD = new core_1.StringField('accrualCalculationMethod', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_CREATION_OFFSET = new core_1.BigNumberField('accrualCreationOffset', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accrualFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_FREQUENCY = new core_1.StringField('accrualFrequency', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualFrequencyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_FREQUENCY_START_DATE = new core_1.DateField('accrualFrequencyStartDate', TimeAccountType_1, 'Edm.DateTime');
    /**
     * Static representation of the [[accrualPeriodStartDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_PERIOD_START_DAY = new core_1.BigNumberField('accrualPeriodStartDay', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accrualPeriodStartMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_PERIOD_START_MONTH = new core_1.BigNumberField('accrualPeriodStartMonth', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accrualRecalculationPostingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_RECALCULATION_POSTING_METHOD = new core_1.StringField('accrualRecalculationPostingMethod', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_RULE = new core_1.StringField('accrualRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_TRANSFER_DATE_RULE = new core_1.StringField('accrualTransferDateRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualTransferRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_TRANSFER_RULE = new core_1.StringField('accrualTransferRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[accrualWaitingPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_WAITING_PERIOD = new core_1.BigNumberField('accrualWaitingPeriod', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[accrualWaitingPeriodUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ACCRUAL_WAITING_PERIOD_UNIT = new core_1.StringField('accrualWaitingPeriodUnit', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[advancesAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ADVANCES_ALLOWED = new core_1.BooleanField('advancesAllowed', TimeAccountType_1, 'Edm.Boolean');
    /**
     * Static representation of the [[allowPayoutWithSimulation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ALLOW_PAYOUT_WITH_SIMULATION = new core_1.StringField('allowPayoutWithSimulation', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[calculateSnapshotApprovedAbsenceBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE = new core_1.BooleanField('calculateSnapshotApprovedAbsenceBalance', TimeAccountType_1, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.COUNTRY = new core_1.StringField('country', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.CREATED_BY = new core_1.StringField('createdBy', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.CREATED_DATE = new core_1.DateField('createdDate', TimeAccountType_1, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountType_1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.CREATION = new core_1.StringField('creation', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[entitlementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.ENTITLEMENT_METHOD = new core_1.StringField('entitlementMethod', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_JA_JP = new core_1.StringField('externalName_ja_JP', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_KO_KR = new core_1.StringField('externalName_ko_KR', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_PT_PT = new core_1.StringField('externalName_pt_PT', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_RU_RU = new core_1.StringField('externalName_ru_RU', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.EXTERNAL_NAME_ZH_TW = new core_1.StringField('externalName_zh_TW', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[hireRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.HIRE_RULE = new core_1.StringField('hireRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[initialAccrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.INITIAL_ACCRUAL_TRANSFER_DATE_RULE = new core_1.StringField('initialAccrualTransferDateRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[initialFlexibleAccountStartDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE = new core_1.StringField('initialFlexibleAccountStartDateRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[interimRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.INTERIM_RULE = new core_1.StringField('interimRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', TimeAccountType_1, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountType_1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', TimeAccountType_1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[levelOfSimulationPrecision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.LEVEL_OF_SIMULATION_PRECISION = new core_1.StringField('levelOfSimulationPrecision', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[maximumSimulationHorizonInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS = new core_1.BigNumberField('maximumSimulationHorizonInMonths', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', TimeAccountType_1, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', TimeAccountType_1, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[minimumBalanceAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.MINIMUM_BALANCE_ALLOWED = new core_1.BigNumberField('minimumBalanceAllowed', TimeAccountType_1, 'Edm.Decimal');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAY_COMPONENT = new core_1.StringField('payComponent', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAY_COMPONENT_ACCRUAL_SEPARATED = new core_1.StringField('payComponentAccrualSeparated', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[payComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAY_COMPONENT_GROUP = new core_1.StringField('payComponentGroup', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[payComponentTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAY_COMPONENT_TERMINATION = new core_1.StringField('payComponentTermination', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED = new core_1.StringField('payComponentTerminationAccrualSeparated', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[payoutEligibility]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PAYOUT_ELIGIBILITY = new core_1.StringField('payoutEligibility', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[pepCalendarAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PEP_CALENDAR_AUTOMATION_LEVEL = new core_1.StringField('pepCalendarAutomationLevel', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[periodEndProcessingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.PERIOD_END_PROCESSING_RULE = new core_1.StringField('periodEndProcessingRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[postingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.POSTING_ORDER = new core_1.StringField('postingOrder', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[secondAccrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.SECOND_ACCRUAL_CREATION_OFFSET = new core_1.BigNumberField('secondAccrualCreationOffset', TimeAccountType_1, 'Edm.Int64');
    /**
     * Static representation of the [[simulateAccruals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.SIMULATE_ACCRUALS = new core_1.BooleanField('simulateAccruals', TimeAccountType_1, 'Edm.Boolean');
    /**
     * Static representation of the [[simulationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.SIMULATION_RULE = new core_1.StringField('simulationRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[snapshotsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.SNAPSHOTS_ALLOWED = new core_1.BooleanField('snapshotsAllowed', TimeAccountType_1, 'Edm.Boolean');
    /**
     * Static representation of the [[terminationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.TERMINATION_RULE = new core_1.StringField('terminationRule', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[terminationRuleDataEffectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.TERMINATION_RULE_DATA_EFFECTIVE_DATE = new core_1.StringField('terminationRuleDataEffectiveDate', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[timeCollectorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.TIME_COLLECTOR_TYPE = new core_1.StringField('timeCollectorType', TimeAccountType_1, 'Edm.String');
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountType_1.UNIT = new core_1.StringField('unit', TimeAccountType_1, 'Edm.String');
    /**
     * All fields of the TimeAccountType_1 entity.
     */
    TimeAccountType_1._allFields = [
        TimeAccountType_1.ACCOUNT_BOOKING_OFFSET_IN_MONTHS,
        TimeAccountType_1.ACCOUNT_CREATION_AUTOMATION_LEVEL,
        TimeAccountType_1.ACCOUNT_CREATION_DAY,
        TimeAccountType_1.ACCOUNT_CREATION_MONTH,
        TimeAccountType_1.ACCOUNT_CREATION_OFFSET_IN_MONTHS,
        TimeAccountType_1.ACCOUNT_CREATION_REFERENCE_DATE,
        TimeAccountType_1.ACCOUNT_DETAIL_RETENTION_GROUP,
        TimeAccountType_1.ACCOUNT_RETENTION_GROUP,
        TimeAccountType_1.ACCRUAL_AUTOMATION_LEVEL,
        TimeAccountType_1.ACCRUAL_CALCULATION_METHOD,
        TimeAccountType_1.ACCRUAL_CREATION_OFFSET,
        TimeAccountType_1.ACCRUAL_FREQUENCY,
        TimeAccountType_1.ACCRUAL_FREQUENCY_START_DATE,
        TimeAccountType_1.ACCRUAL_PERIOD_START_DAY,
        TimeAccountType_1.ACCRUAL_PERIOD_START_MONTH,
        TimeAccountType_1.ACCRUAL_RECALCULATION_POSTING_METHOD,
        TimeAccountType_1.ACCRUAL_RULE,
        TimeAccountType_1.ACCRUAL_TRANSFER_DATE_RULE,
        TimeAccountType_1.ACCRUAL_TRANSFER_RULE,
        TimeAccountType_1.ACCRUAL_WAITING_PERIOD,
        TimeAccountType_1.ACCRUAL_WAITING_PERIOD_UNIT,
        TimeAccountType_1.ADVANCES_ALLOWED,
        TimeAccountType_1.ALLOW_PAYOUT_WITH_SIMULATION,
        TimeAccountType_1.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE,
        TimeAccountType_1.COUNTRY,
        TimeAccountType_1.CREATED_BY,
        TimeAccountType_1.CREATED_DATE,
        TimeAccountType_1.CREATED_DATE_TIME,
        TimeAccountType_1.CREATION,
        TimeAccountType_1.ENTITLEMENT_METHOD,
        TimeAccountType_1.EXTERNAL_CODE,
        TimeAccountType_1.EXTERNAL_NAME_DE_DE,
        TimeAccountType_1.EXTERNAL_NAME_DEFAULT_VALUE,
        TimeAccountType_1.EXTERNAL_NAME_EN_GB,
        TimeAccountType_1.EXTERNAL_NAME_EN_US,
        TimeAccountType_1.EXTERNAL_NAME_ES_ES,
        TimeAccountType_1.EXTERNAL_NAME_FR_FR,
        TimeAccountType_1.EXTERNAL_NAME_JA_JP,
        TimeAccountType_1.EXTERNAL_NAME_KO_KR,
        TimeAccountType_1.EXTERNAL_NAME_LOCALIZED,
        TimeAccountType_1.EXTERNAL_NAME_NL_NL,
        TimeAccountType_1.EXTERNAL_NAME_PT_BR,
        TimeAccountType_1.EXTERNAL_NAME_PT_PT,
        TimeAccountType_1.EXTERNAL_NAME_RU_RU,
        TimeAccountType_1.EXTERNAL_NAME_ZH_CN,
        TimeAccountType_1.EXTERNAL_NAME_ZH_TW,
        TimeAccountType_1.HIRE_RULE,
        TimeAccountType_1.INITIAL_ACCRUAL_TRANSFER_DATE_RULE,
        TimeAccountType_1.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE,
        TimeAccountType_1.INTERIM_RULE,
        TimeAccountType_1.LAST_MODIFIED_BY,
        TimeAccountType_1.LAST_MODIFIED_DATE,
        TimeAccountType_1.LAST_MODIFIED_DATE_TIME,
        TimeAccountType_1.LAST_MODIFIED_DATE_WITH_TZ,
        TimeAccountType_1.LEVEL_OF_SIMULATION_PRECISION,
        TimeAccountType_1.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS,
        TimeAccountType_1.MDF_SYSTEM_EFFECTIVE_END_DATE,
        TimeAccountType_1.MDF_SYSTEM_EFFECTIVE_START_DATE,
        TimeAccountType_1.MDF_SYSTEM_ENTITY_ID,
        TimeAccountType_1.MDF_SYSTEM_OBJECT_TYPE,
        TimeAccountType_1.MDF_SYSTEM_RECORD_ID,
        TimeAccountType_1.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountType_1.MDF_SYSTEM_STATUS,
        TimeAccountType_1.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        TimeAccountType_1.MDF_SYSTEM_VERSION_ID,
        TimeAccountType_1.MINIMUM_BALANCE_ALLOWED,
        TimeAccountType_1.PAY_COMPONENT,
        TimeAccountType_1.PAY_COMPONENT_ACCRUAL_SEPARATED,
        TimeAccountType_1.PAY_COMPONENT_GROUP,
        TimeAccountType_1.PAY_COMPONENT_TERMINATION,
        TimeAccountType_1.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED,
        TimeAccountType_1.PAYOUT_ELIGIBILITY,
        TimeAccountType_1.PEP_CALENDAR_AUTOMATION_LEVEL,
        TimeAccountType_1.PERIOD_END_PROCESSING_RULE,
        TimeAccountType_1.POSTING_ORDER,
        TimeAccountType_1.SECOND_ACCRUAL_CREATION_OFFSET,
        TimeAccountType_1.SIMULATE_ACCRUALS,
        TimeAccountType_1.SIMULATION_RULE,
        TimeAccountType_1.SNAPSHOTS_ALLOWED,
        TimeAccountType_1.TERMINATION_RULE,
        TimeAccountType_1.TERMINATION_RULE_DATA_EFFECTIVE_DATE,
        TimeAccountType_1.TIME_COLLECTOR_TYPE,
        TimeAccountType_1.UNIT
    ];
    /**
     * All fields selector.
     */
    TimeAccountType_1.ALL_FIELDS = new core_1.AllFields('*', TimeAccountType_1);
    /**
     * All key fields of the TimeAccountType_1 entity.
     */
    TimeAccountType_1._keyFields = [TimeAccountType_1.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountType_1.
     */
    TimeAccountType_1._keys = TimeAccountType_1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountType_1 = exports.TimeAccountType_1 || (exports.TimeAccountType_1 = {}));
exports.TimeAccountType_1 = TimeAccountType_1;
//# sourceMappingURL=TimeAccountType_1.js.map