/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountType_1 } from './TimeAccountType_1';
import { TimeAccountType_1RequestBuilder } from './TimeAccountType_1RequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class TimeAccountType_1Api<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeAccountType_1<
        DeSerializersT
      >, 
      DeSerializersT
    > {
  public deSerializers: DeSerializersT;

  constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
      
    };

  _addNavigationProperties(
      linkedApis: [
        
      ]): this {
        this.navigationPropertyFields = {
          
        };
        return this;
      }
  
  entityConstructor = TimeAccountType_1;
  
  requestBuilder(): TimeAccountType_1RequestBuilder<
    DeSerializersT
  > {
    return new TimeAccountType_1RequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeAccountType_1<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  TimeAccountType_1<
      DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeAccountType_1, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeAccountType_1, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_BOOKING_OFFSET_IN_MONTHS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCOUNT_CREATION_AUTOMATION_LEVEL: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCOUNT_CREATION_DAY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCOUNT_CREATION_MONTH: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCOUNT_CREATION_OFFSET_IN_MONTHS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCOUNT_CREATION_REFERENCE_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCOUNT_DETAIL_RETENTION_GROUP: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCOUNT_RETENTION_GROUP: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_AUTOMATION_LEVEL: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_CALCULATION_METHOD: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_CREATION_OFFSET: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCRUAL_FREQUENCY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_FREQUENCY_START_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
ACCRUAL_PERIOD_START_DAY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCRUAL_PERIOD_START_MONTH: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCRUAL_RECALCULATION_POSTING_METHOD: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_TRANSFER_DATE_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_TRANSFER_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCRUAL_WAITING_PERIOD: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
ACCRUAL_WAITING_PERIOD_UNIT: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ADVANCES_ALLOWED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
ALLOW_PAYOUT_WITH_SIMULATION: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
COUNTRY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
CREATION: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ENTITLEMENT_METHOD: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_US: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_PT: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_RU_RU: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_TW: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
HIRE_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
INITIAL_ACCRUAL_TRANSFER_DATE_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
INTERIM_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LEVEL_OF_SIMULATION_PRECISION: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MINIMUM_BALANCE_ALLOWED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
PAY_COMPONENT: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_COMPONENT_ACCRUAL_SEPARATED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_COMPONENT_GROUP: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_COMPONENT_TERMINATION: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAYOUT_ELIGIBILITY: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PEP_CALENDAR_AUTOMATION_LEVEL: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PERIOD_END_PROCESSING_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
POSTING_ORDER: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
SECOND_ACCRUAL_CREATION_OFFSET: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
SIMULATE_ACCRUALS: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
SIMULATION_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
SNAPSHOTS_ALLOWED: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
TERMINATION_RULE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TERMINATION_RULE_DATA_EFFECTIVE_DATE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TIME_COLLECTOR_TYPE: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
UNIT: OrderableEdmTypeField<TimeAccountType_1<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<TimeAccountType_1<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link accountBookingOffsetInMonths} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_BOOKING_OFFSET_IN_MONTHS: fieldBuilder.buildEdmTypeField('accountBookingOffsetInMonths', 'Edm.Int64', true),
/**
 * Static representation of the {@link accountCreationAutomationLevel} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CREATION_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('accountCreationAutomationLevel', 'Edm.String', true),
/**
 * Static representation of the {@link accountCreationDay} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CREATION_DAY: fieldBuilder.buildEdmTypeField('accountCreationDay', 'Edm.Int64', true),
/**
 * Static representation of the {@link accountCreationMonth} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CREATION_MONTH: fieldBuilder.buildEdmTypeField('accountCreationMonth', 'Edm.Int64', true),
/**
 * Static representation of the {@link accountCreationOffsetInMonths} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CREATION_OFFSET_IN_MONTHS: fieldBuilder.buildEdmTypeField('accountCreationOffsetInMonths', 'Edm.Int64', true),
/**
 * Static representation of the {@link accountCreationReferenceDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CREATION_REFERENCE_DATE: fieldBuilder.buildEdmTypeField('accountCreationReferenceDate', 'Edm.String', true),
/**
 * Static representation of the {@link accountDetailRetentionGroup} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_DETAIL_RETENTION_GROUP: fieldBuilder.buildEdmTypeField('accountDetailRetentionGroup', 'Edm.String', true),
/**
 * Static representation of the {@link accountRetentionGroup} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_RETENTION_GROUP: fieldBuilder.buildEdmTypeField('accountRetentionGroup', 'Edm.String', true),
/**
 * Static representation of the {@link accrualAutomationLevel} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('accrualAutomationLevel', 'Edm.String', true),
/**
 * Static representation of the {@link accrualCalculationMethod} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_CALCULATION_METHOD: fieldBuilder.buildEdmTypeField('accrualCalculationMethod', 'Edm.String', true),
/**
 * Static representation of the {@link accrualCreationOffset} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_CREATION_OFFSET: fieldBuilder.buildEdmTypeField('accrualCreationOffset', 'Edm.Int64', true),
/**
 * Static representation of the {@link accrualFrequency} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_FREQUENCY: fieldBuilder.buildEdmTypeField('accrualFrequency', 'Edm.String', true),
/**
 * Static representation of the {@link accrualFrequencyStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_FREQUENCY_START_DATE: fieldBuilder.buildEdmTypeField('accrualFrequencyStartDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link accrualPeriodStartDay} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_PERIOD_START_DAY: fieldBuilder.buildEdmTypeField('accrualPeriodStartDay', 'Edm.Int64', true),
/**
 * Static representation of the {@link accrualPeriodStartMonth} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_PERIOD_START_MONTH: fieldBuilder.buildEdmTypeField('accrualPeriodStartMonth', 'Edm.Int64', true),
/**
 * Static representation of the {@link accrualRecalculationPostingMethod} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_RECALCULATION_POSTING_METHOD: fieldBuilder.buildEdmTypeField('accrualRecalculationPostingMethod', 'Edm.String', true),
/**
 * Static representation of the {@link accrualRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_RULE: fieldBuilder.buildEdmTypeField('accrualRule', 'Edm.String', true),
/**
 * Static representation of the {@link accrualTransferDateRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_TRANSFER_DATE_RULE: fieldBuilder.buildEdmTypeField('accrualTransferDateRule', 'Edm.String', true),
/**
 * Static representation of the {@link accrualTransferRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_TRANSFER_RULE: fieldBuilder.buildEdmTypeField('accrualTransferRule', 'Edm.String', true),
/**
 * Static representation of the {@link accrualWaitingPeriod} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_WAITING_PERIOD: fieldBuilder.buildEdmTypeField('accrualWaitingPeriod', 'Edm.Int64', true),
/**
 * Static representation of the {@link accrualWaitingPeriodUnit} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_WAITING_PERIOD_UNIT: fieldBuilder.buildEdmTypeField('accrualWaitingPeriodUnit', 'Edm.String', true),
/**
 * Static representation of the {@link advancesAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ADVANCES_ALLOWED: fieldBuilder.buildEdmTypeField('advancesAllowed', 'Edm.Boolean', true),
/**
 * Static representation of the {@link allowPayoutWithSimulation} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ALLOW_PAYOUT_WITH_SIMULATION: fieldBuilder.buildEdmTypeField('allowPayoutWithSimulation', 'Edm.String', true),
/**
 * Static representation of the {@link calculateSnapshotApprovedAbsenceBalance} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: fieldBuilder.buildEdmTypeField('calculateSnapshotApprovedAbsenceBalance', 'Edm.Boolean', true),
/**
 * Static representation of the {@link country} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
/**
 * Static representation of the {@link createdBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
/**
 * Static representation of the {@link createdDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_DATE: fieldBuilder.buildEdmTypeField('createdDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link createdDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link creation} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATION: fieldBuilder.buildEdmTypeField('creation', 'Edm.String', true),
/**
 * Static representation of the {@link entitlementMethod} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ENTITLEMENT_METHOD: fieldBuilder.buildEdmTypeField('entitlementMethod', 'Edm.String', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link externalNameDeDe} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField('externalName_de_DE', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameDefaultValue} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('externalName_defaultValue', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEnGb} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField('externalName_en_GB', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEnUs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField('externalName_en_US', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEsEs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField('externalName_es_ES', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameFrFr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField('externalName_fr_FR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameJaJp} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField('externalName_ja_JP', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameKoKr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField('externalName_ko_KR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameLocalized} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField('externalName_localized', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameNlNl} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField('externalName_nl_NL', 'Edm.String', true),
/**
 * Static representation of the {@link externalNamePtBr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField('externalName_pt_BR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNamePtPt} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_PT_PT: fieldBuilder.buildEdmTypeField('externalName_pt_PT', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameRuRu} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_RU_RU: fieldBuilder.buildEdmTypeField('externalName_ru_RU', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameZhCn} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField('externalName_zh_CN', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameZhTw} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ZH_TW: fieldBuilder.buildEdmTypeField('externalName_zh_TW', 'Edm.String', true),
/**
 * Static representation of the {@link hireRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
HIRE_RULE: fieldBuilder.buildEdmTypeField('hireRule', 'Edm.String', true),
/**
 * Static representation of the {@link initialAccrualTransferDateRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INITIAL_ACCRUAL_TRANSFER_DATE_RULE: fieldBuilder.buildEdmTypeField('initialAccrualTransferDateRule', 'Edm.String', true),
/**
 * Static representation of the {@link initialFlexibleAccountStartDateRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: fieldBuilder.buildEdmTypeField('initialFlexibleAccountStartDateRule', 'Edm.String', true),
/**
 * Static representation of the {@link interimRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INTERIM_RULE: fieldBuilder.buildEdmTypeField('interimRule', 'Edm.String', true),
/**
 * Static representation of the {@link lastModifiedBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
/**
 * Static representation of the {@link lastModifiedDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField('lastModifiedDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link lastModifiedDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link lastModifiedDateWithTz} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField('lastModifiedDateWithTZ', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link levelOfSimulationPrecision} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LEVEL_OF_SIMULATION_PRECISION: fieldBuilder.buildEdmTypeField('levelOfSimulationPrecision', 'Edm.String', true),
/**
 * Static representation of the {@link maximumSimulationHorizonInMonths} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: fieldBuilder.buildEdmTypeField('maximumSimulationHorizonInMonths', 'Edm.Int64', true),
/**
 * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveStartDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link mdfSystemEntityId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_ENTITY_ID: fieldBuilder.buildEdmTypeField('mdfSystemEntityId', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemObjectType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('mdfSystemObjectType', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemRecordId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_RECORD_ID: fieldBuilder.buildEdmTypeField('mdfSystemRecordId', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemRecordStatus', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemStatus', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemTransactionSequence} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_TRANSACTION_SEQUENCE: fieldBuilder.buildEdmTypeField('mdfSystemTransactionSequence', 'Edm.Int64', true),
/**
 * Static representation of the {@link mdfSystemVersionId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_VERSION_ID: fieldBuilder.buildEdmTypeField('mdfSystemVersionId', 'Edm.Int64', true),
/**
 * Static representation of the {@link minimumBalanceAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MINIMUM_BALANCE_ALLOWED: fieldBuilder.buildEdmTypeField('minimumBalanceAllowed', 'Edm.Decimal', true),
/**
 * Static representation of the {@link payComponent} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT: fieldBuilder.buildEdmTypeField('payComponent', 'Edm.String', true),
/**
 * Static representation of the {@link payComponentAccrualSeparated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('payComponentAccrualSeparated', 'Edm.String', true),
/**
 * Static representation of the {@link payComponentGroup} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField('payComponentGroup', 'Edm.String', true),
/**
 * Static representation of the {@link payComponentTermination} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT_TERMINATION: fieldBuilder.buildEdmTypeField('payComponentTermination', 'Edm.String', true),
/**
 * Static representation of the {@link payComponentTerminationAccrualSeparated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('payComponentTerminationAccrualSeparated', 'Edm.String', true),
/**
 * Static representation of the {@link payoutEligibility} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAYOUT_ELIGIBILITY: fieldBuilder.buildEdmTypeField('payoutEligibility', 'Edm.String', true),
/**
 * Static representation of the {@link pepCalendarAutomationLevel} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PEP_CALENDAR_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('pepCalendarAutomationLevel', 'Edm.String', true),
/**
 * Static representation of the {@link periodEndProcessingRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PERIOD_END_PROCESSING_RULE: fieldBuilder.buildEdmTypeField('periodEndProcessingRule', 'Edm.String', true),
/**
 * Static representation of the {@link postingOrder} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
POSTING_ORDER: fieldBuilder.buildEdmTypeField('postingOrder', 'Edm.String', true),
/**
 * Static representation of the {@link secondAccrualCreationOffset} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SECOND_ACCRUAL_CREATION_OFFSET: fieldBuilder.buildEdmTypeField('secondAccrualCreationOffset', 'Edm.Int64', true),
/**
 * Static representation of the {@link simulateAccruals} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SIMULATE_ACCRUALS: fieldBuilder.buildEdmTypeField('simulateAccruals', 'Edm.Boolean', true),
/**
 * Static representation of the {@link simulationRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SIMULATION_RULE: fieldBuilder.buildEdmTypeField('simulationRule', 'Edm.String', true),
/**
 * Static representation of the {@link snapshotsAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SNAPSHOTS_ALLOWED: fieldBuilder.buildEdmTypeField('snapshotsAllowed', 'Edm.Boolean', true),
/**
 * Static representation of the {@link terminationRule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TERMINATION_RULE: fieldBuilder.buildEdmTypeField('terminationRule', 'Edm.String', true),
/**
 * Static representation of the {@link terminationRuleDataEffectiveDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TERMINATION_RULE_DATA_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('terminationRuleDataEffectiveDate', 'Edm.String', true),
/**
 * Static representation of the {@link timeCollectorType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_COLLECTOR_TYPE: fieldBuilder.buildEdmTypeField('timeCollectorType', 'Edm.String', true),
/**
 * Static representation of the {@link unit} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeAccountType_1) 
  };
    }
  
    return this._schema;
  }
}
