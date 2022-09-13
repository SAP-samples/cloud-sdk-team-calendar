/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "TimeAccountType" of service "ECTimeOff".
 */
export class TimeAccountType_1<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TimeAccountType_1Type<T> {
  /**
   * Technical entity name for TimeAccountType_1.
   */
  static _entityName = 'TimeAccountType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountType_1 entity
   */
  static _keys = ['externalCode'];
  /**
   * Account Booking Offset [Months].
   * @nullable
   */
  accountBookingOffsetInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Account Creation Automation.
   * Maximum length: 255.
   * @nullable
   */
  accountCreationAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Valid From [Day].
   * @nullable
   */
  accountCreationDay?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Account Valid From [Month].
   * @nullable
   */
  accountCreationMonth?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Account Creation Offset [Months].
   * @nullable
   */
  accountCreationOffsetInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Account Creation Start Date.
   * Maximum length: 255.
   * @nullable
   */
  accountCreationReferenceDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Detail Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  accountDetailRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  accountRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level Of Accrual Automation.
   * Maximum length: 255.
   * @nullable
   */
  accrualAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accruals Based On.
   * Maximum length: 255.
   * @nullable
   */
  accrualCalculationMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Creation Offset [Days].
   * @nullable
   */
  accrualCreationOffset?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Accrual Frequency Period.
   * Maximum length: 255.
   * @nullable
   */
  accrualFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frequency Start Date.
   * @nullable
   */
  accrualFrequencyStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Start Day Of Accrual Period.
   * @nullable
   */
  accrualPeriodStartDay?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Start Month Of Accrual Period.
   * @nullable
   */
  accrualPeriodStartMonth?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Accrual Recalculation Posting Method.
   * Maximum length: 255.
   * @nullable
   */
  accrualRecalculationPostingMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Transfer Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualTransferDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Transfer Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualTransferRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time From Hire To First Accrual.
   * @nullable
   */
  accrualWaitingPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Time Unit From Hire To First Accrual.
   * Maximum length: 255.
   * @nullable
   */
  accrualWaitingPeriodUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advances Allowed.
   * @nullable
   */
  advancesAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Allow Payout With Simulation.
   * Maximum length: 255.
   * @nullable
   */
  allowPayoutWithSimulation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Not Consider Pending Requests When Calculating Balances.
   * @nullable
   */
  calculateSnapshotApprovedAbsenceBalance?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Country.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Account Creation Type.
   * Maximum length: 255.
   * @nullable
   */
  creation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entitlement Method.
   * Maximum length: 255.
   * @nullable
   */
  entitlementMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hire Rule.
   * Maximum length: 128.
   * @nullable
   */
  hireRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Accrual Transfer Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  initialAccrualTransferDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flexible Account Start Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  initialFlexibleAccountStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interim Account Update Rule.
   * Maximum length: 128.
   * @nullable
   */
  interimRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Level Of Simulation Precision.
   * Maximum length: 255.
   * @nullable
   */
  levelOfSimulationPrecision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * maximumSimulationHorizonInMonths.
   * @nullable
   */
  maximumSimulationHorizonInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Balance Cannot Fall Below.
   * @nullable
   */
  minimumBalanceAllowed?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Pay Component for Accrual.
   * Maximum length: 32.
   * @nullable
   */
  payComponentAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component Group.
   * Maximum length: 32.
   * @nullable
   */
  payComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTermination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Pay Component for Accrual on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTerminationAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payout Eligibility.
   * Maximum length: 255.
   * @nullable
   */
  payoutEligibility?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period-End Processing Automation.
   * Maximum length: 255.
   * @nullable
   */
  pepCalendarAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period-End Processing Rule.
   * Maximum length: 128.
   * @nullable
   */
  periodEndProcessingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Order.
   * Maximum length: 255.
   * @nullable
   */
  postingOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Accrual Booking Offset [Days].
   * @nullable
   */
  secondAccrualCreationOffset?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Simulate Accruals.
   * @nullable
   */
  simulateAccruals?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Simulation Rule For Recorded Times.
   * Maximum length: 128.
   * @nullable
   */
  simulationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account Snapshots Allowed.
   * @nullable
   */
  snapshotsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Termination Rule.
   * Maximum length: 128.
   * @nullable
   */
  terminationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Termination Rule Data Effective Date.
   * Maximum length: 255.
   * @nullable
   */
  terminationRuleDataEffectiveDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Collector Type.
   * Maximum length: 128.
   * @nullable
   */
  timeCollectorType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: DeserializedType<T, 'Edm.String'> | null;
}

export interface TimeAccountType_1Type<T extends DeSerializers = DefaultDeSerializers> {
  accountBookingOffsetInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  accountCreationAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  accountCreationDay?: DeserializedType<T, 'Edm.Int64'> | null;
  accountCreationMonth?: DeserializedType<T, 'Edm.Int64'> | null;
  accountCreationOffsetInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  accountCreationReferenceDate?: DeserializedType<T, 'Edm.String'> | null;
  accountDetailRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  accrualAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  accrualCalculationMethod?: DeserializedType<T, 'Edm.String'> | null;
  accrualCreationOffset?: DeserializedType<T, 'Edm.Int64'> | null;
  accrualFrequency?: DeserializedType<T, 'Edm.String'> | null;
  accrualFrequencyStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  accrualPeriodStartDay?: DeserializedType<T, 'Edm.Int64'> | null;
  accrualPeriodStartMonth?: DeserializedType<T, 'Edm.Int64'> | null;
  accrualRecalculationPostingMethod?: DeserializedType<T, 'Edm.String'> | null;
  accrualRule?: DeserializedType<T, 'Edm.String'> | null;
  accrualTransferDateRule?: DeserializedType<T, 'Edm.String'> | null;
  accrualTransferRule?: DeserializedType<T, 'Edm.String'> | null;
  accrualWaitingPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  accrualWaitingPeriodUnit?: DeserializedType<T, 'Edm.String'> | null;
  advancesAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  allowPayoutWithSimulation?: DeserializedType<T, 'Edm.String'> | null;
  calculateSnapshotApprovedAbsenceBalance?: DeserializedType<T, 'Edm.Boolean'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  creation?: DeserializedType<T, 'Edm.String'> | null;
  entitlementMethod?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  hireRule?: DeserializedType<T, 'Edm.String'> | null;
  initialAccrualTransferDateRule?: DeserializedType<T, 'Edm.String'> | null;
  initialFlexibleAccountStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  interimRule?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  levelOfSimulationPrecision?: DeserializedType<T, 'Edm.String'> | null;
  maximumSimulationHorizonInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  minimumBalanceAllowed?: DeserializedType<T, 'Edm.Decimal'> | null;
  payComponent?: DeserializedType<T, 'Edm.String'> | null;
  payComponentAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  payComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  payComponentTermination?: DeserializedType<T, 'Edm.String'> | null;
  payComponentTerminationAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  payoutEligibility?: DeserializedType<T, 'Edm.String'> | null;
  pepCalendarAutomationLevel?: DeserializedType<T, 'Edm.String'> | null;
  periodEndProcessingRule?: DeserializedType<T, 'Edm.String'> | null;
  postingOrder?: DeserializedType<T, 'Edm.String'> | null;
  secondAccrualCreationOffset?: DeserializedType<T, 'Edm.Int64'> | null;
  simulateAccruals?: DeserializedType<T, 'Edm.Boolean'> | null;
  simulationRule?: DeserializedType<T, 'Edm.String'> | null;
  snapshotsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  terminationRule?: DeserializedType<T, 'Edm.String'> | null;
  terminationRuleDataEffectiveDate?: DeserializedType<T, 'Edm.String'> | null;
  timeCollectorType?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
}
