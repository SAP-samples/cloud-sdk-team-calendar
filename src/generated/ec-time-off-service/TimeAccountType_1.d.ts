import { TimeAccountType_1RequestBuilder } from './TimeAccountType_1RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountType" of service "SFOData".
 */
export declare class TimeAccountType_1 extends Entity implements TimeAccountType_1Type {
    /**
     * Technical entity name for TimeAccountType_1.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountType_1.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Booking Offset [Months].
     * @nullable
     */
    accountBookingOffsetInMonths?: BigNumber;
    /**
     * Account Creation Automation.
     * Maximum length: 255.
     * @nullable
     */
    accountCreationAutomationLevel?: string;
    /**
     * Account Valid From [Day].
     * @nullable
     */
    accountCreationDay?: BigNumber;
    /**
     * Account Valid From [Month].
     * @nullable
     */
    accountCreationMonth?: BigNumber;
    /**
     * Account Creation Offset [Months].
     * @nullable
     */
    accountCreationOffsetInMonths?: BigNumber;
    /**
     * Account Creation Start Date.
     * Maximum length: 255.
     * @nullable
     */
    accountCreationReferenceDate?: string;
    /**
     * Account Detail Retention Group.
     * Maximum length: 128.
     * @nullable
     */
    accountDetailRetentionGroup?: string;
    /**
     * Account Retention Group.
     * Maximum length: 128.
     * @nullable
     */
    accountRetentionGroup?: string;
    /**
     * Level Of Accrual Automation.
     * Maximum length: 255.
     * @nullable
     */
    accrualAutomationLevel?: string;
    /**
     * Accruals Based On.
     * Maximum length: 255.
     * @nullable
     */
    accrualCalculationMethod?: string;
    /**
     * Accrual Creation Offset [Days].
     * @nullable
     */
    accrualCreationOffset?: BigNumber;
    /**
     * Accrual Frequency Period.
     * Maximum length: 255.
     * @nullable
     */
    accrualFrequency?: string;
    /**
     * Frequency Start Date.
     * @nullable
     */
    accrualFrequencyStartDate?: Moment;
    /**
     * Start Day Of Accrual Period.
     * @nullable
     */
    accrualPeriodStartDay?: BigNumber;
    /**
     * Start Month Of Accrual Period.
     * @nullable
     */
    accrualPeriodStartMonth?: BigNumber;
    /**
     * Accrual Recalculation Posting Method.
     * Maximum length: 255.
     * @nullable
     */
    accrualRecalculationPostingMethod?: string;
    /**
     * Accrual Rule.
     * Maximum length: 128.
     * @nullable
     */
    accrualRule?: string;
    /**
     * Accrual Transfer Date Rule.
     * Maximum length: 128.
     * @nullable
     */
    accrualTransferDateRule?: string;
    /**
     * Accrual Transfer Rule.
     * Maximum length: 128.
     * @nullable
     */
    accrualTransferRule?: string;
    /**
     * Time From Hire To First Accrual.
     * @nullable
     */
    accrualWaitingPeriod?: BigNumber;
    /**
     * Time Unit From Hire To First Accrual.
     * Maximum length: 255.
     * @nullable
     */
    accrualWaitingPeriodUnit?: string;
    /**
     * Advances Allowed.
     * @nullable
     */
    advancesAllowed?: boolean;
    /**
     * Allow Payout With Simulation.
     * Maximum length: 255.
     * @nullable
     */
    allowPayoutWithSimulation?: string;
    /**
     * Do Not Consider Pending Requests When Calculating Balances.
     * @nullable
     */
    calculateSnapshotApprovedAbsenceBalance?: boolean;
    /**
     * Country.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDate?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Account Creation Type.
     * Maximum length: 255.
     * @nullable
     */
    creation?: string;
    /**
     * Entitlement Method.
     * Maximum length: 255.
     * @nullable
     */
    entitlementMethod?: string;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameJaJp?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameKoKr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtPt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameRuRu?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhTw?: string;
    /**
     * Hire Rule.
     * Maximum length: 128.
     * @nullable
     */
    hireRule?: string;
    /**
     * Initial Accrual Transfer Date Rule.
     * Maximum length: 128.
     * @nullable
     */
    initialAccrualTransferDateRule?: string;
    /**
     * Flexible Account Start Date Rule.
     * Maximum length: 128.
     * @nullable
     */
    initialFlexibleAccountStartDateRule?: string;
    /**
     * Interim Account Update Rule.
     * Maximum length: 128.
     * @nullable
     */
    interimRule?: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDate?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateWithTz?: Moment;
    /**
     * Level Of Simulation Precision.
     * Maximum length: 255.
     * @nullable
     */
    levelOfSimulationPrecision?: string;
    /**
     * maximumSimulationHorizonInMonths.
     * @nullable
     */
    maximumSimulationHorizonInMonths?: BigNumber;
    /**
     * mdfSystemEffectiveEndDate.
     * @nullable
     */
    mdfSystemEffectiveEndDate?: Moment;
    /**
     * mdfSystemEffectiveStartDate.
     * @nullable
     */
    mdfSystemEffectiveStartDate?: Moment;
    /**
     * mdfSystemEntityId.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemEntityId?: string;
    /**
     * mdfSystemObjectType.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemObjectType?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordId?: string;
    /**
     * mdfSystemRecordStatus.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemStatus.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemStatus?: string;
    /**
     * mdfSystemTransactionSequence.
     * @nullable
     */
    mdfSystemTransactionSequence?: BigNumber;
    /**
     * mdfSystemVersionId.
     * @nullable
     */
    mdfSystemVersionId?: BigNumber;
    /**
     * Balance Cannot Fall Below.
     * @nullable
     */
    minimumBalanceAllowed?: BigNumber;
    /**
     * Pay Component.
     * Maximum length: 32.
     * @nullable
     */
    payComponent?: string;
    /**
     * Separate Pay Component for Accrual.
     * Maximum length: 32.
     * @nullable
     */
    payComponentAccrualSeparated?: string;
    /**
     * Pay Component Group.
     * Maximum length: 32.
     * @nullable
     */
    payComponentGroup?: string;
    /**
     * Pay Component on Termination.
     * Maximum length: 32.
     * @nullable
     */
    payComponentTermination?: string;
    /**
     * Separate Pay Component for Accrual on Termination.
     * Maximum length: 32.
     * @nullable
     */
    payComponentTerminationAccrualSeparated?: string;
    /**
     * Payout Eligibility.
     * Maximum length: 255.
     * @nullable
     */
    payoutEligibility?: string;
    /**
     * Period-End Processing Automation.
     * Maximum length: 255.
     * @nullable
     */
    pepCalendarAutomationLevel?: string;
    /**
     * Period-End Processing Rule.
     * Maximum length: 128.
     * @nullable
     */
    periodEndProcessingRule?: string;
    /**
     * Posting Order.
     * Maximum length: 255.
     * @nullable
     */
    postingOrder?: string;
    /**
     * Second Accrual Booking Offset [Days].
     * @nullable
     */
    secondAccrualCreationOffset?: BigNumber;
    /**
     * Simulate Accruals.
     * @nullable
     */
    simulateAccruals?: boolean;
    /**
     * Simulation Rule For Recorded Times.
     * Maximum length: 128.
     * @nullable
     */
    simulationRule?: string;
    /**
     * Time Account Snapshots Allowed.
     * @nullable
     */
    snapshotsAllowed?: boolean;
    /**
     * Termination Rule.
     * Maximum length: 128.
     * @nullable
     */
    terminationRule?: string;
    /**
     * Termination Rule Data Effective Date.
     * Maximum length: 255.
     * @nullable
     */
    terminationRuleDataEffectiveDate?: string;
    /**
     * Time Collector Type.
     * Maximum length: 128.
     * @nullable
     */
    timeCollectorType?: string;
    /**
     * Unit.
     * Maximum length: 255.
     * @nullable
     */
    unit?: string;
    /**
     * Returns an entity builder to construct instances `TimeAccountType_1`.
     * @returns A builder that constructs instances of entity type `TimeAccountType_1`.
     */
    static builder(): EntityBuilderType<TimeAccountType_1, TimeAccountType_1TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountType_1` entity type.
     * @returns A `TimeAccountType_1` request builder.
     */
    static requestBuilder(): TimeAccountType_1RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountType_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountType_1`.
     */
    static customField(fieldName: string): CustomField<TimeAccountType_1>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeAccountType_1Type {
    accountBookingOffsetInMonths?: BigNumber;
    accountCreationAutomationLevel?: string;
    accountCreationDay?: BigNumber;
    accountCreationMonth?: BigNumber;
    accountCreationOffsetInMonths?: BigNumber;
    accountCreationReferenceDate?: string;
    accountDetailRetentionGroup?: string;
    accountRetentionGroup?: string;
    accrualAutomationLevel?: string;
    accrualCalculationMethod?: string;
    accrualCreationOffset?: BigNumber;
    accrualFrequency?: string;
    accrualFrequencyStartDate?: Moment;
    accrualPeriodStartDay?: BigNumber;
    accrualPeriodStartMonth?: BigNumber;
    accrualRecalculationPostingMethod?: string;
    accrualRule?: string;
    accrualTransferDateRule?: string;
    accrualTransferRule?: string;
    accrualWaitingPeriod?: BigNumber;
    accrualWaitingPeriodUnit?: string;
    advancesAllowed?: boolean;
    allowPayoutWithSimulation?: string;
    calculateSnapshotApprovedAbsenceBalance?: boolean;
    country?: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    creation?: string;
    entitlementMethod?: string;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameFrFr?: string;
    externalNameJaJp?: string;
    externalNameKoKr?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNamePtPt?: string;
    externalNameRuRu?: string;
    externalNameZhCn?: string;
    externalNameZhTw?: string;
    hireRule?: string;
    initialAccrualTransferDateRule?: string;
    initialFlexibleAccountStartDateRule?: string;
    interimRule?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    lastModifiedDateTime?: Moment;
    lastModifiedDateWithTz?: Moment;
    levelOfSimulationPrecision?: string;
    maximumSimulationHorizonInMonths?: BigNumber;
    mdfSystemEffectiveEndDate?: Moment;
    mdfSystemEffectiveStartDate?: Moment;
    mdfSystemEntityId?: string;
    mdfSystemObjectType?: string;
    mdfSystemRecordId?: string;
    mdfSystemRecordStatus?: string;
    mdfSystemStatus?: string;
    mdfSystemTransactionSequence?: BigNumber;
    mdfSystemVersionId?: BigNumber;
    minimumBalanceAllowed?: BigNumber;
    payComponent?: string;
    payComponentAccrualSeparated?: string;
    payComponentGroup?: string;
    payComponentTermination?: string;
    payComponentTerminationAccrualSeparated?: string;
    payoutEligibility?: string;
    pepCalendarAutomationLevel?: string;
    periodEndProcessingRule?: string;
    postingOrder?: string;
    secondAccrualCreationOffset?: BigNumber;
    simulateAccruals?: boolean;
    simulationRule?: string;
    snapshotsAllowed?: boolean;
    terminationRule?: string;
    terminationRuleDataEffectiveDate?: string;
    timeCollectorType?: string;
    unit?: string;
}
export interface TimeAccountType_1TypeForceMandatory {
    accountBookingOffsetInMonths: BigNumber;
    accountCreationAutomationLevel: string;
    accountCreationDay: BigNumber;
    accountCreationMonth: BigNumber;
    accountCreationOffsetInMonths: BigNumber;
    accountCreationReferenceDate: string;
    accountDetailRetentionGroup: string;
    accountRetentionGroup: string;
    accrualAutomationLevel: string;
    accrualCalculationMethod: string;
    accrualCreationOffset: BigNumber;
    accrualFrequency: string;
    accrualFrequencyStartDate: Moment;
    accrualPeriodStartDay: BigNumber;
    accrualPeriodStartMonth: BigNumber;
    accrualRecalculationPostingMethod: string;
    accrualRule: string;
    accrualTransferDateRule: string;
    accrualTransferRule: string;
    accrualWaitingPeriod: BigNumber;
    accrualWaitingPeriodUnit: string;
    advancesAllowed: boolean;
    allowPayoutWithSimulation: string;
    calculateSnapshotApprovedAbsenceBalance: boolean;
    country: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    creation: string;
    entitlementMethod: string;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameFrFr: string;
    externalNameJaJp: string;
    externalNameKoKr: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNamePtPt: string;
    externalNameRuRu: string;
    externalNameZhCn: string;
    externalNameZhTw: string;
    hireRule: string;
    initialAccrualTransferDateRule: string;
    initialFlexibleAccountStartDateRule: string;
    interimRule: string;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastModifiedDateTime: Moment;
    lastModifiedDateWithTz: Moment;
    levelOfSimulationPrecision: string;
    maximumSimulationHorizonInMonths: BigNumber;
    mdfSystemEffectiveEndDate: Moment;
    mdfSystemEffectiveStartDate: Moment;
    mdfSystemEntityId: string;
    mdfSystemObjectType: string;
    mdfSystemRecordId: string;
    mdfSystemRecordStatus: string;
    mdfSystemStatus: string;
    mdfSystemTransactionSequence: BigNumber;
    mdfSystemVersionId: BigNumber;
    minimumBalanceAllowed: BigNumber;
    payComponent: string;
    payComponentAccrualSeparated: string;
    payComponentGroup: string;
    payComponentTermination: string;
    payComponentTerminationAccrualSeparated: string;
    payoutEligibility: string;
    pepCalendarAutomationLevel: string;
    periodEndProcessingRule: string;
    postingOrder: string;
    secondAccrualCreationOffset: BigNumber;
    simulateAccruals: boolean;
    simulationRule: string;
    snapshotsAllowed: boolean;
    terminationRule: string;
    terminationRuleDataEffectiveDate: string;
    timeCollectorType: string;
    unit: string;
}
export declare namespace TimeAccountType_1 {
    /**
     * Static representation of the [[accountBookingOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_BOOKING_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountCreationAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CREATION_AUTOMATION_LEVEL: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountCreationDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CREATION_DAY: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountCreationMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CREATION_MONTH: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountCreationOffsetInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CREATION_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountCreationReferenceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CREATION_REFERENCE_DATE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountDetailRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_DETAIL_RETENTION_GROUP: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accountRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_RETENTION_GROUP: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_AUTOMATION_LEVEL: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualCalculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_CALCULATION_METHOD: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_FREQUENCY: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualFrequencyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_FREQUENCY_START_DATE: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualPeriodStartDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_PERIOD_START_DAY: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualPeriodStartMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_PERIOD_START_MONTH: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualRecalculationPostingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_RECALCULATION_POSTING_METHOD: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualTransferRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_TRANSFER_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualWaitingPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_WAITING_PERIOD: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[accrualWaitingPeriodUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_WAITING_PERIOD_UNIT: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[advancesAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCES_ALLOWED: BooleanField<TimeAccountType_1>;
    /**
     * Static representation of the [[allowPayoutWithSimulation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_PAYOUT_WITH_SIMULATION: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[calculateSnapshotApprovedAbsenceBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: BooleanField<TimeAccountType_1>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[creation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[entitlementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITLEMENT_METHOD: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_JA_JP: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_KO_KR: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_PT: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_RU_RU: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[hireRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRE_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[initialAccrualTransferDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[initialFlexibleAccountStartDateRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[interimRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERIM_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[levelOfSimulationPrecision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL_OF_SIMULATION_PRECISION: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[maximumSimulationHorizonInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[minimumBalanceAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_BALANCE_ALLOWED: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_ACCRUAL_SEPARATED: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[payComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_GROUP: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[payComponentTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TERMINATION: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[payoutEligibility]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_ELIGIBILITY: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[pepCalendarAutomationLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PEP_CALENDAR_AUTOMATION_LEVEL: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[periodEndProcessingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_END_PROCESSING_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[postingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_ORDER: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[secondAccrualCreationOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType_1>;
    /**
     * Static representation of the [[simulateAccruals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIMULATE_ACCRUALS: BooleanField<TimeAccountType_1>;
    /**
     * Static representation of the [[simulationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIMULATION_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[snapshotsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOTS_ALLOWED: BooleanField<TimeAccountType_1>;
    /**
     * Static representation of the [[terminationRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATION_RULE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[terminationRuleDataEffectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATION_RULE_DATA_EFFECTIVE_DATE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[timeCollectorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_COLLECTOR_TYPE: StringField<TimeAccountType_1>;
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<TimeAccountType_1>;
    /**
     * All fields of the TimeAccountType_1 entity.
     */
    const _allFields: Array<BigNumberField<TimeAccountType_1> | StringField<TimeAccountType_1> | DateField<TimeAccountType_1> | BooleanField<TimeAccountType_1>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountType_1>;
    /**
     * All key fields of the TimeAccountType_1 entity.
     */
    const _keyFields: Array<Selectable<TimeAccountType_1>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountType_1.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountType_1>;
    };
}
//# sourceMappingURL=TimeAccountType_1.d.ts.map