/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountType_1RequestBuilder } from './TimeAccountType_1RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountType" of service "SFOData".
 */
export class TimeAccountType_1 extends Entity implements TimeAccountType_1Type {
  /**
   * Technical entity name for TimeAccountType_1.
   */
  static _entityName = 'TimeAccountType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountType_1.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
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
  externalCode!: string;
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
  static builder(): EntityBuilderType<TimeAccountType_1, TimeAccountType_1TypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountType_1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountType_1` entity type.
   * @returns A `TimeAccountType_1` request builder.
   */
  static requestBuilder(): TimeAccountType_1RequestBuilder {
    return new TimeAccountType_1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountType_1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountType_1`.
   */
  static customField(fieldName: string): CustomField<TimeAccountType_1> {
    return Entity.customFieldSelector(fieldName, TimeAccountType_1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace TimeAccountType_1 {
  /**
   * Static representation of the [[accountBookingOffsetInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_BOOKING_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType_1> = new BigNumberField('accountBookingOffsetInMonths', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_AUTOMATION_LEVEL: StringField<TimeAccountType_1> = new StringField('accountCreationAutomationLevel', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accountCreationDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_DAY: BigNumberField<TimeAccountType_1> = new BigNumberField('accountCreationDay', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_MONTH: BigNumberField<TimeAccountType_1> = new BigNumberField('accountCreationMonth', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationOffsetInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType_1> = new BigNumberField('accountCreationOffsetInMonths', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationReferenceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_REFERENCE_DATE: StringField<TimeAccountType_1> = new StringField('accountCreationReferenceDate', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accountDetailRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_DETAIL_RETENTION_GROUP: StringField<TimeAccountType_1> = new StringField('accountDetailRetentionGroup', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accountRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_RETENTION_GROUP: StringField<TimeAccountType_1> = new StringField('accountRetentionGroup', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_AUTOMATION_LEVEL: StringField<TimeAccountType_1> = new StringField('accrualAutomationLevel', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualCalculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CALCULATION_METHOD: StringField<TimeAccountType_1> = new StringField('accrualCalculationMethod', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualCreationOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType_1> = new BigNumberField('accrualCreationOffset', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accrualFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_FREQUENCY: StringField<TimeAccountType_1> = new StringField('accrualFrequency', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualFrequencyStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_FREQUENCY_START_DATE: DateField<TimeAccountType_1> = new DateField('accrualFrequencyStartDate', TimeAccountType_1, 'Edm.DateTime');
  /**
   * Static representation of the [[accrualPeriodStartDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_START_DAY: BigNumberField<TimeAccountType_1> = new BigNumberField('accrualPeriodStartDay', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accrualPeriodStartMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_START_MONTH: BigNumberField<TimeAccountType_1> = new BigNumberField('accrualPeriodStartMonth', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accrualRecalculationPostingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_POSTING_METHOD: StringField<TimeAccountType_1> = new StringField('accrualRecalculationPostingMethod', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RULE: StringField<TimeAccountType_1> = new StringField('accrualRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualTransferDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType_1> = new StringField('accrualTransferDateRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualTransferRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_TRANSFER_RULE: StringField<TimeAccountType_1> = new StringField('accrualTransferRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[accrualWaitingPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_WAITING_PERIOD: BigNumberField<TimeAccountType_1> = new BigNumberField('accrualWaitingPeriod', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[accrualWaitingPeriodUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_WAITING_PERIOD_UNIT: StringField<TimeAccountType_1> = new StringField('accrualWaitingPeriodUnit', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[advancesAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCES_ALLOWED: BooleanField<TimeAccountType_1> = new BooleanField('advancesAllowed', TimeAccountType_1, 'Edm.Boolean');
  /**
   * Static representation of the [[allowPayoutWithSimulation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_PAYOUT_WITH_SIMULATION: StringField<TimeAccountType_1> = new StringField('allowPayoutWithSimulation', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[calculateSnapshotApprovedAbsenceBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: BooleanField<TimeAccountType_1> = new BooleanField('calculateSnapshotApprovedAbsenceBalance', TimeAccountType_1, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeAccountType_1> = new StringField('country', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountType_1> = new StringField('createdBy', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TimeAccountType_1> = new DateField('createdDate', TimeAccountType_1, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountType_1> = new DateField('createdDateTime', TimeAccountType_1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION: StringField<TimeAccountType_1> = new StringField('creation', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[entitlementMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITLEMENT_METHOD: StringField<TimeAccountType_1> = new StringField('entitlementMethod', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountType_1> = new StringField('externalCode', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeAccountType_1> = new StringField('externalName_de_DE', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountType_1> = new StringField('externalName_defaultValue', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeAccountType_1> = new StringField('externalName_en_GB', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeAccountType_1> = new StringField('externalName_en_US', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeAccountType_1> = new StringField('externalName_es_ES', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeAccountType_1> = new StringField('externalName_fr_FR', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<TimeAccountType_1> = new StringField('externalName_ja_JP', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<TimeAccountType_1> = new StringField('externalName_ko_KR', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountType_1> = new StringField('externalName_localized', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeAccountType_1> = new StringField('externalName_nl_NL', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeAccountType_1> = new StringField('externalName_pt_BR', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<TimeAccountType_1> = new StringField('externalName_pt_PT', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<TimeAccountType_1> = new StringField('externalName_ru_RU', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountType_1> = new StringField('externalName_zh_CN', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountType_1> = new StringField('externalName_zh_TW', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[hireRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRE_RULE: StringField<TimeAccountType_1> = new StringField('hireRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[initialAccrualTransferDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType_1> = new StringField('initialAccrualTransferDateRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[initialFlexibleAccountStartDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: StringField<TimeAccountType_1> = new StringField('initialFlexibleAccountStartDateRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[interimRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_RULE: StringField<TimeAccountType_1> = new StringField('interimRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountType_1> = new StringField('lastModifiedBy', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TimeAccountType_1> = new DateField('lastModifiedDate', TimeAccountType_1, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountType_1> = new DateField('lastModifiedDateTime', TimeAccountType_1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccountType_1> = new DateField('lastModifiedDateWithTZ', TimeAccountType_1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[levelOfSimulationPrecision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_OF_SIMULATION_PRECISION: StringField<TimeAccountType_1> = new StringField('levelOfSimulationPrecision', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[maximumSimulationHorizonInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: BigNumberField<TimeAccountType_1> = new BigNumberField('maximumSimulationHorizonInMonths', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccountType_1> = new DateField('mdfSystemEffectiveEndDate', TimeAccountType_1, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccountType_1> = new DateField('mdfSystemEffectiveStartDate', TimeAccountType_1, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccountType_1> = new StringField('mdfSystemEntityId', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccountType_1> = new StringField('mdfSystemObjectType', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TimeAccountType_1> = new StringField('mdfSystemRecordId', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountType_1> = new StringField('mdfSystemRecordStatus', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeAccountType_1> = new StringField('mdfSystemStatus', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccountType_1> = new BigNumberField('mdfSystemTransactionSequence', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccountType_1> = new BigNumberField('mdfSystemVersionId', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[minimumBalanceAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE_ALLOWED: BigNumberField<TimeAccountType_1> = new BigNumberField('minimumBalanceAllowed', TimeAccountType_1, 'Edm.Decimal');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<TimeAccountType_1> = new StringField('payComponent', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_ACCRUAL_SEPARATED: StringField<TimeAccountType_1> = new StringField('payComponentAccrualSeparated', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[payComponentGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP: StringField<TimeAccountType_1> = new StringField('payComponentGroup', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[payComponentTermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION: StringField<TimeAccountType_1> = new StringField('payComponentTermination', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: StringField<TimeAccountType_1> = new StringField('payComponentTerminationAccrualSeparated', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[payoutEligibility]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_ELIGIBILITY: StringField<TimeAccountType_1> = new StringField('payoutEligibility', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[pepCalendarAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PEP_CALENDAR_AUTOMATION_LEVEL: StringField<TimeAccountType_1> = new StringField('pepCalendarAutomationLevel', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[periodEndProcessingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_END_PROCESSING_RULE: StringField<TimeAccountType_1> = new StringField('periodEndProcessingRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[postingOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ORDER: StringField<TimeAccountType_1> = new StringField('postingOrder', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[secondAccrualCreationOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType_1> = new BigNumberField('secondAccrualCreationOffset', TimeAccountType_1, 'Edm.Int64');
  /**
   * Static representation of the [[simulateAccruals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIMULATE_ACCRUALS: BooleanField<TimeAccountType_1> = new BooleanField('simulateAccruals', TimeAccountType_1, 'Edm.Boolean');
  /**
   * Static representation of the [[simulationRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIMULATION_RULE: StringField<TimeAccountType_1> = new StringField('simulationRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[snapshotsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOTS_ALLOWED: BooleanField<TimeAccountType_1> = new BooleanField('snapshotsAllowed', TimeAccountType_1, 'Edm.Boolean');
  /**
   * Static representation of the [[terminationRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_RULE: StringField<TimeAccountType_1> = new StringField('terminationRule', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[terminationRuleDataEffectiveDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_RULE_DATA_EFFECTIVE_DATE: StringField<TimeAccountType_1> = new StringField('terminationRuleDataEffectiveDate', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[timeCollectorType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_COLLECTOR_TYPE: StringField<TimeAccountType_1> = new StringField('timeCollectorType', TimeAccountType_1, 'Edm.String');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<TimeAccountType_1> = new StringField('unit', TimeAccountType_1, 'Edm.String');
  /**
   * All fields of the TimeAccountType_1 entity.
   */
  export const _allFields: Array<BigNumberField<TimeAccountType_1> | StringField<TimeAccountType_1> | DateField<TimeAccountType_1> | BooleanField<TimeAccountType_1>> = [
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
  export const ALL_FIELDS: AllFields<TimeAccountType_1> = new AllFields('*', TimeAccountType_1);
  /**
   * All key fields of the TimeAccountType_1 entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountType_1>> = [TimeAccountType_1.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountType_1.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountType_1> } = TimeAccountType_1._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountType_1> }, field: Selectable<TimeAccountType_1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
