/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeRequestBuilder } from './TimeTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeType" of service "SFOData".
 */
export class TimeType extends Entity implements TimeTypeType {
  /**
   * Technical entity name for TimeType.
   */
  static _entityName = 'TimeType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Absence Class.
   * Maximum length: 255.
   * @nullable
   */
  absenceClass?: string;
  /**
   * Absence Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  absenceRetentionGroup?: string;
  /**
   * Accrual Recalculation Relevance.
   * Maximum length: 255.
   * @nullable
   */
  accrualRecalculationRelevance?: string;
  /**
   * Activate Cancellation Workflow.
   * @nullable
   */
  activateCancellationWorkflow?: boolean;
  /**
   * Admin Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  adminWorkflow?: string;
  /**
   * Allocation Strategy.
   * Maximum length: 255.
   * @nullable
   */
  allocationStrategy?: string;
  /**
   * Permitted Fractions For Unit Day.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitDay?: string;
  /**
   * Permitted Fractions For Unit Hour.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitHour?: string;
  /**
   * Allow Requests In Increments Of [Minutes].
   * @nullable
   */
  allowedRequestingIncrement?: BigNumber;
  /**
   * Balance Calculation Setting.
   * Maximum length: 255.
   * @nullable
   */
  balanceCalculationSetting?: string;
  /**
   * Duration Display According To.
   * Maximum length: 255.
   * @nullable
   */
  calculationMethod?: string;
  /**
   * Classification.
   * Maximum length: 255.
   * @nullable
   */
  category?: string;
  /**
   * Collision Grouping.
   * Maximum length: 128.
   * @nullable
   */
  collisionGrouping?: string;
  /**
   * Counting Method.
   * Maximum length: 128.
   * @nullable
   */
  countingMethod?: string;
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
   * Flexible Requesting Allowed.
   * @nullable
   */
  flexibleRequestingAllowed?: boolean;
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
   * Leave of Absence Event Reason (Return To Work).
   * Maximum length: 32.
   * @nullable
   */
  loaEndEventReason?: string;
  /**
   * Leave of Absence Event Reason (Plan).
   * Maximum length: 32.
   * @nullable
   */
  loaStartEventReason?: string;
  /**
   * Maximum Duration in Months.
   * @nullable
   */
  maximumDurationInMonths?: BigNumber;
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
   * Requesting on Non-Working Days Allowed.
   * @nullable
   */
  requestingOnNonWorkingDaysAllowed?: boolean;
  /**
   * Undetermined End Date Allowed.
   * @nullable
   */
  undeterminedEndDateAllowed?: boolean;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: string;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: string;
  /**
   * One-to-one navigation property to the [[AbsenceCountingMethod]] entity.
   */
  countingMethodNav!: AbsenceCountingMethod;
  /**
   * One-to-many navigation property to the [[TimeAccountPostingRule]] entity.
   */
  timeAccountPostingRules!: TimeAccountPostingRule[];

  /**
   * Returns an entity builder to construct instances `TimeType`.
   * @returns A builder that constructs instances of entity type `TimeType`.
   */
  static builder(): EntityBuilderType<TimeType, TimeTypeTypeForceMandatory> {
    return Entity.entityBuilder(TimeType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeType` entity type.
   * @returns A `TimeType` request builder.
   */
  static requestBuilder(): TimeTypeRequestBuilder {
    return new TimeTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeType`.
   */
  static customField(fieldName: string): CustomField<TimeType> {
    return Entity.customFieldSelector(fieldName, TimeType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AbsenceCountingMethod, AbsenceCountingMethodType } from './AbsenceCountingMethod';
import { TimeAccountPostingRule, TimeAccountPostingRuleType } from './TimeAccountPostingRule';

export interface TimeTypeType {
  absenceClass?: string;
  absenceRetentionGroup?: string;
  accrualRecalculationRelevance?: string;
  activateCancellationWorkflow?: boolean;
  adminWorkflow?: string;
  allocationStrategy?: string;
  allowedFractionsUnitDay?: string;
  allowedFractionsUnitHour?: string;
  allowedRequestingIncrement?: BigNumber;
  balanceCalculationSetting?: string;
  calculationMethod?: string;
  category?: string;
  collisionGrouping?: string;
  countingMethod?: string;
  country?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
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
  flexibleRequestingAllowed?: boolean;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedDateWithTz?: Moment;
  loaEndEventReason?: string;
  loaStartEventReason?: string;
  maximumDurationInMonths?: BigNumber;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  requestingOnNonWorkingDaysAllowed?: boolean;
  undeterminedEndDateAllowed?: boolean;
  unit?: string;
  workflowConfiguration?: string;
  countingMethodNav: AbsenceCountingMethodType;
  timeAccountPostingRules: TimeAccountPostingRuleType[];
}

export interface TimeTypeTypeForceMandatory {
  absenceClass: string;
  absenceRetentionGroup: string;
  accrualRecalculationRelevance: string;
  activateCancellationWorkflow: boolean;
  adminWorkflow: string;
  allocationStrategy: string;
  allowedFractionsUnitDay: string;
  allowedFractionsUnitHour: string;
  allowedRequestingIncrement: BigNumber;
  balanceCalculationSetting: string;
  calculationMethod: string;
  category: string;
  collisionGrouping: string;
  countingMethod: string;
  country: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
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
  flexibleRequestingAllowed: boolean;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedDateWithTz: Moment;
  loaEndEventReason: string;
  loaStartEventReason: string;
  maximumDurationInMonths: BigNumber;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  requestingOnNonWorkingDaysAllowed: boolean;
  undeterminedEndDateAllowed: boolean;
  unit: string;
  workflowConfiguration: string;
  countingMethodNav: AbsenceCountingMethodType;
  timeAccountPostingRules: TimeAccountPostingRuleType[];
}

export namespace TimeType {
  /**
   * Static representation of the [[absenceClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_CLASS: StringField<TimeType> = new StringField('absenceClass', TimeType, 'Edm.String');
  /**
   * Static representation of the [[absenceRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_RETENTION_GROUP: StringField<TimeType> = new StringField('absenceRetentionGroup', TimeType, 'Edm.String');
  /**
   * Static representation of the [[accrualRecalculationRelevance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_RELEVANCE: StringField<TimeType> = new StringField('accrualRecalculationRelevance', TimeType, 'Edm.String');
  /**
   * Static representation of the [[activateCancellationWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVATE_CANCELLATION_WORKFLOW: BooleanField<TimeType> = new BooleanField('activateCancellationWorkflow', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[adminWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_WORKFLOW: StringField<TimeType> = new StringField('adminWorkflow', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allocationStrategy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOCATION_STRATEGY: StringField<TimeType> = new StringField('allocationStrategy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedFractionsUnitDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_DAY: StringField<TimeType> = new StringField('allowedFractionsUnitDay', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedFractionsUnitHour]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_HOUR: StringField<TimeType> = new StringField('allowedFractionsUnitHour', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedRequestingIncrement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_REQUESTING_INCREMENT: BigNumberField<TimeType> = new BigNumberField('allowedRequestingIncrement', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[balanceCalculationSetting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_CALCULATION_SETTING: StringField<TimeType> = new StringField('balanceCalculationSetting', TimeType, 'Edm.String');
  /**
   * Static representation of the [[calculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_METHOD: StringField<TimeType> = new StringField('calculationMethod', TimeType, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<TimeType> = new StringField('category', TimeType, 'Edm.String');
  /**
   * Static representation of the [[collisionGrouping]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLISION_GROUPING: StringField<TimeType> = new StringField('collisionGrouping', TimeType, 'Edm.String');
  /**
   * Static representation of the [[countingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_METHOD: StringField<TimeType> = new StringField('countingMethod', TimeType, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeType> = new StringField('country', TimeType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeType> = new StringField('createdBy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TimeType> = new DateField('createdDate', TimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeType> = new DateField('createdDateTime', TimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeType> = new StringField('externalCode', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeType> = new StringField('externalName_de_DE', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeType> = new StringField('externalName_defaultValue', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeType> = new StringField('externalName_en_GB', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeType> = new StringField('externalName_en_US', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeType> = new StringField('externalName_es_ES', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeType> = new StringField('externalName_fr_FR', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<TimeType> = new StringField('externalName_ja_JP', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<TimeType> = new StringField('externalName_ko_KR', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeType> = new StringField('externalName_localized', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeType> = new StringField('externalName_nl_NL', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeType> = new StringField('externalName_pt_BR', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<TimeType> = new StringField('externalName_pt_PT', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<TimeType> = new StringField('externalName_ru_RU', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeType> = new StringField('externalName_zh_CN', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<TimeType> = new StringField('externalName_zh_TW', TimeType, 'Edm.String');
  /**
   * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLEXIBLE_REQUESTING_ALLOWED: BooleanField<TimeType> = new BooleanField('flexibleRequestingAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeType> = new StringField('lastModifiedBy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TimeType> = new DateField('lastModifiedDate', TimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeType> = new DateField('lastModifiedDateTime', TimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeType> = new DateField('lastModifiedDateWithTZ', TimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loaEndEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_END_EVENT_REASON: StringField<TimeType> = new StringField('loaEndEventReason', TimeType, 'Edm.String');
  /**
   * Static representation of the [[loaStartEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_START_EVENT_REASON: StringField<TimeType> = new StringField('loaStartEventReason', TimeType, 'Edm.String');
  /**
   * Static representation of the [[maximumDurationInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_DURATION_IN_MONTHS: BigNumberField<TimeType> = new BigNumberField('maximumDurationInMonths', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeType> = new DateField('mdfSystemEffectiveEndDate', TimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeType> = new DateField('mdfSystemEffectiveStartDate', TimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TimeType> = new StringField('mdfSystemEntityId', TimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeType> = new StringField('mdfSystemObjectType', TimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TimeType> = new StringField('mdfSystemRecordId', TimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeType> = new StringField('mdfSystemRecordStatus', TimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeType> = new StringField('mdfSystemStatus', TimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeType> = new BigNumberField('mdfSystemTransactionSequence', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeType> = new BigNumberField('mdfSystemVersionId', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[requestingOnNonWorkingDaysAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTING_ON_NON_WORKING_DAYS_ALLOWED: BooleanField<TimeType> = new BooleanField('requestingOnNonWorkingDaysAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[undeterminedEndDateAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDETERMINED_END_DATE_ALLOWED: BooleanField<TimeType> = new BooleanField('undeterminedEndDateAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<TimeType> = new StringField('unit', TimeType, 'Edm.String');
  /**
   * Static representation of the [[workflowConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_CONFIGURATION: StringField<TimeType> = new StringField('workflowConfiguration', TimeType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countingMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_METHOD_NAV: OneToOneLink<TimeType, AbsenceCountingMethod> = new OneToOneLink('countingMethodNav', TimeType, AbsenceCountingMethod);
  /**
   * Static representation of the one-to-many navigation property [[timeAccountPostingRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_POSTING_RULES: Link<TimeType, TimeAccountPostingRule> = new Link('timeAccountPostingRules', TimeType, TimeAccountPostingRule);
  /**
   * All fields of the TimeType entity.
   */
  export const _allFields: Array<StringField<TimeType> | BooleanField<TimeType> | BigNumberField<TimeType> | DateField<TimeType> | OneToOneLink<TimeType, AbsenceCountingMethod> | Link<TimeType, TimeAccountPostingRule>> = [
    TimeType.ABSENCE_CLASS,
    TimeType.ABSENCE_RETENTION_GROUP,
    TimeType.ACCRUAL_RECALCULATION_RELEVANCE,
    TimeType.ACTIVATE_CANCELLATION_WORKFLOW,
    TimeType.ADMIN_WORKFLOW,
    TimeType.ALLOCATION_STRATEGY,
    TimeType.ALLOWED_FRACTIONS_UNIT_DAY,
    TimeType.ALLOWED_FRACTIONS_UNIT_HOUR,
    TimeType.ALLOWED_REQUESTING_INCREMENT,
    TimeType.BALANCE_CALCULATION_SETTING,
    TimeType.CALCULATION_METHOD,
    TimeType.CATEGORY,
    TimeType.COLLISION_GROUPING,
    TimeType.COUNTING_METHOD,
    TimeType.COUNTRY,
    TimeType.CREATED_BY,
    TimeType.CREATED_DATE,
    TimeType.CREATED_DATE_TIME,
    TimeType.EXTERNAL_CODE,
    TimeType.EXTERNAL_NAME_DE_DE,
    TimeType.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeType.EXTERNAL_NAME_EN_GB,
    TimeType.EXTERNAL_NAME_EN_US,
    TimeType.EXTERNAL_NAME_ES_ES,
    TimeType.EXTERNAL_NAME_FR_FR,
    TimeType.EXTERNAL_NAME_JA_JP,
    TimeType.EXTERNAL_NAME_KO_KR,
    TimeType.EXTERNAL_NAME_LOCALIZED,
    TimeType.EXTERNAL_NAME_NL_NL,
    TimeType.EXTERNAL_NAME_PT_BR,
    TimeType.EXTERNAL_NAME_PT_PT,
    TimeType.EXTERNAL_NAME_RU_RU,
    TimeType.EXTERNAL_NAME_ZH_CN,
    TimeType.EXTERNAL_NAME_ZH_TW,
    TimeType.FLEXIBLE_REQUESTING_ALLOWED,
    TimeType.LAST_MODIFIED_BY,
    TimeType.LAST_MODIFIED_DATE,
    TimeType.LAST_MODIFIED_DATE_TIME,
    TimeType.LAST_MODIFIED_DATE_WITH_TZ,
    TimeType.LOA_END_EVENT_REASON,
    TimeType.LOA_START_EVENT_REASON,
    TimeType.MAXIMUM_DURATION_IN_MONTHS,
    TimeType.MDF_SYSTEM_EFFECTIVE_END_DATE,
    TimeType.MDF_SYSTEM_EFFECTIVE_START_DATE,
    TimeType.MDF_SYSTEM_ENTITY_ID,
    TimeType.MDF_SYSTEM_OBJECT_TYPE,
    TimeType.MDF_SYSTEM_RECORD_ID,
    TimeType.MDF_SYSTEM_RECORD_STATUS,
    TimeType.MDF_SYSTEM_STATUS,
    TimeType.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    TimeType.MDF_SYSTEM_VERSION_ID,
    TimeType.REQUESTING_ON_NON_WORKING_DAYS_ALLOWED,
    TimeType.UNDETERMINED_END_DATE_ALLOWED,
    TimeType.UNIT,
    TimeType.WORKFLOW_CONFIGURATION,
    TimeType.COUNTING_METHOD_NAV,
    TimeType.TIME_ACCOUNT_POSTING_RULES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeType> = new AllFields('*', TimeType);
  /**
   * All key fields of the TimeType entity.
   */
  export const _keyFields: Array<Selectable<TimeType>> = [TimeType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeType.
   */
  export const _keys: { [keys: string]: Selectable<TimeType> } = TimeType._keyFields.reduce((acc: { [keys: string]: Selectable<TimeType> }, field: Selectable<TimeType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
