/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleRequestBuilder } from './WorkScheduleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkSchedule" of service "SFOData".
 */
export class WorkSchedule extends Entity implements WorkScheduleType {
  /**
   * Technical entity name for WorkSchedule.
   */
  static _entityName = 'WorkSchedule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkSchedule.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Average Hours Per Day.
   * @nullable
   */
  averageHoursPerDay?: BigNumber;
  /**
   * Average Hours Per Month.
   * @nullable
   */
  averageHoursPerMonth?: BigNumber;
  /**
   * Average Hours Per Week.
   * @nullable
   */
  averageHoursPerWeek?: BigNumber;
  /**
   * Average Hours Per Year.
   * @nullable
   */
  averageHoursPerYear?: BigNumber;
  /**
   * Average Working Days Per Week.
   * @nullable
   */
  averageWorkingDaysPerWeek?: BigNumber;
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
   * Is Individual Work Schedule.
   * @nullable
   */
  individualWorkSchedule?: boolean;
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
   * Model.
   * Maximum length: 255.
   * @nullable
   */
  modelCategory?: string;
  /**
   * Period Model.
   * Maximum length: 128.
   * @nullable
   */
  periodModel?: string;
  /**
   * Search Field.
   * Maximum length: 255.
   * @nullable
   */
  searchString?: string;
  /**
   * Shift Classification.
   * Maximum length: 128.
   * @nullable
   */
  shiftClassification?: string;
  /**
   * Starting Date.
   * @nullable
   */
  startingDate?: Moment;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[WorkSchedule]] entity.
   */
  periodModelNav!: WorkSchedule;
  /**
   * One-to-one navigation property to the [[ShiftClassification]] entity.
   */
  shiftClassificationNav!: ShiftClassification;
  /**
   * One-to-many navigation property to the [[WorkScheduleDayModelAssignment]] entity.
   */
  workScheduleDayModels!: WorkScheduleDayModelAssignment[];
  /**
   * One-to-many navigation property to the [[WorkScheduleDay]] entity.
   */
  workScheduleDays!: WorkScheduleDay[];

  /**
   * Returns an entity builder to construct instances `WorkSchedule`.
   * @returns A builder that constructs instances of entity type `WorkSchedule`.
   */
  static builder(): EntityBuilderType<WorkSchedule, WorkScheduleTypeForceMandatory> {
    return Entity.entityBuilder(WorkSchedule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkSchedule` entity type.
   * @returns A `WorkSchedule` request builder.
   */
  static requestBuilder(): WorkScheduleRequestBuilder {
    return new WorkScheduleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkSchedule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkSchedule`.
   */
  static customField(fieldName: string): CustomField<WorkSchedule> {
    return Entity.customFieldSelector(fieldName, WorkSchedule);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ShiftClassification, ShiftClassificationType } from './ShiftClassification';
import { WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentType } from './WorkScheduleDayModelAssignment';
import { WorkScheduleDay, WorkScheduleDayType } from './WorkScheduleDay';

export interface WorkScheduleType {
  averageHoursPerDay?: BigNumber;
  averageHoursPerMonth?: BigNumber;
  averageHoursPerWeek?: BigNumber;
  averageHoursPerYear?: BigNumber;
  averageWorkingDaysPerWeek?: BigNumber;
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
  individualWorkSchedule?: boolean;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedDateWithTz?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  modelCategory?: string;
  periodModel?: string;
  searchString?: string;
  shiftClassification?: string;
  startingDate?: Moment;
  timeRecordingVariant?: string;
  userId?: string;
  periodModelNav: WorkScheduleType;
  shiftClassificationNav: ShiftClassificationType;
  workScheduleDayModels: WorkScheduleDayModelAssignmentType[];
  workScheduleDays: WorkScheduleDayType[];
}

export interface WorkScheduleTypeForceMandatory {
  averageHoursPerDay: BigNumber;
  averageHoursPerMonth: BigNumber;
  averageHoursPerWeek: BigNumber;
  averageHoursPerYear: BigNumber;
  averageWorkingDaysPerWeek: BigNumber;
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
  individualWorkSchedule: boolean;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedDateWithTz: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  modelCategory: string;
  periodModel: string;
  searchString: string;
  shiftClassification: string;
  startingDate: Moment;
  timeRecordingVariant: string;
  userId: string;
  periodModelNav: WorkScheduleType;
  shiftClassificationNav: ShiftClassificationType;
  workScheduleDayModels: WorkScheduleDayModelAssignmentType[];
  workScheduleDays: WorkScheduleDayType[];
}

export namespace WorkSchedule {
  /**
   * Static representation of the [[averageHoursPerDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_HOURS_PER_DAY: BigNumberField<WorkSchedule> = new BigNumberField('averageHoursPerDay', WorkSchedule, 'Edm.Decimal');
  /**
   * Static representation of the [[averageHoursPerMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_HOURS_PER_MONTH: BigNumberField<WorkSchedule> = new BigNumberField('averageHoursPerMonth', WorkSchedule, 'Edm.Decimal');
  /**
   * Static representation of the [[averageHoursPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_HOURS_PER_WEEK: BigNumberField<WorkSchedule> = new BigNumberField('averageHoursPerWeek', WorkSchedule, 'Edm.Decimal');
  /**
   * Static representation of the [[averageHoursPerYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_HOURS_PER_YEAR: BigNumberField<WorkSchedule> = new BigNumberField('averageHoursPerYear', WorkSchedule, 'Edm.Decimal');
  /**
   * Static representation of the [[averageWorkingDaysPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_WORKING_DAYS_PER_WEEK: BigNumberField<WorkSchedule> = new BigNumberField('averageWorkingDaysPerWeek', WorkSchedule, 'Edm.Decimal');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<WorkSchedule> = new StringField('country', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkSchedule> = new StringField('createdBy', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkSchedule> = new DateField('createdDate', WorkSchedule, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkSchedule> = new DateField('createdDateTime', WorkSchedule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<WorkSchedule> = new StringField('externalCode', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<WorkSchedule> = new StringField('externalName_de_DE', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<WorkSchedule> = new StringField('externalName_defaultValue', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<WorkSchedule> = new StringField('externalName_en_GB', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<WorkSchedule> = new StringField('externalName_en_US', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<WorkSchedule> = new StringField('externalName_es_ES', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<WorkSchedule> = new StringField('externalName_fr_FR', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<WorkSchedule> = new StringField('externalName_ja_JP', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<WorkSchedule> = new StringField('externalName_ko_KR', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<WorkSchedule> = new StringField('externalName_localized', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<WorkSchedule> = new StringField('externalName_nl_NL', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<WorkSchedule> = new StringField('externalName_pt_BR', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<WorkSchedule> = new StringField('externalName_pt_PT', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<WorkSchedule> = new StringField('externalName_ru_RU', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<WorkSchedule> = new StringField('externalName_zh_CN', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<WorkSchedule> = new StringField('externalName_zh_TW', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLEXIBLE_REQUESTING_ALLOWED: BooleanField<WorkSchedule> = new BooleanField('flexibleRequestingAllowed', WorkSchedule, 'Edm.Boolean');
  /**
   * Static representation of the [[individualWorkSchedule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDIVIDUAL_WORK_SCHEDULE: BooleanField<WorkSchedule> = new BooleanField('individualWorkSchedule', WorkSchedule, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkSchedule> = new StringField('lastModifiedBy', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkSchedule> = new DateField('lastModifiedDate', WorkSchedule, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkSchedule> = new DateField('lastModifiedDateTime', WorkSchedule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkSchedule> = new DateField('lastModifiedDateWithTZ', WorkSchedule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkSchedule> = new DateField('mdfSystemEffectiveEndDate', WorkSchedule, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkSchedule> = new DateField('mdfSystemEffectiveStartDate', WorkSchedule, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkSchedule> = new StringField('mdfSystemEntityId', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkSchedule> = new StringField('mdfSystemObjectType', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkSchedule> = new StringField('mdfSystemRecordId', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkSchedule> = new StringField('mdfSystemRecordStatus', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkSchedule> = new StringField('mdfSystemStatus', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkSchedule> = new BigNumberField('mdfSystemTransactionSequence', WorkSchedule, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkSchedule> = new BigNumberField('mdfSystemVersionId', WorkSchedule, 'Edm.Int64');
  /**
   * Static representation of the [[modelCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODEL_CATEGORY: StringField<WorkSchedule> = new StringField('modelCategory', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[periodModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_MODEL: StringField<WorkSchedule> = new StringField('periodModel', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[searchString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_STRING: StringField<WorkSchedule> = new StringField('searchString', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[shiftClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIFT_CLASSIFICATION: StringField<WorkSchedule> = new StringField('shiftClassification', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[startingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STARTING_DATE: DateField<WorkSchedule> = new DateField('startingDate', WorkSchedule, 'Edm.DateTime');
  /**
   * Static representation of the [[timeRecordingVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT: StringField<WorkSchedule> = new StringField('timeRecordingVariant', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<WorkSchedule> = new StringField('userId', WorkSchedule, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[periodModelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_MODEL_NAV: OneToOneLink<WorkSchedule, WorkSchedule> = new OneToOneLink('periodModelNav', WorkSchedule, WorkSchedule);
  /**
   * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIFT_CLASSIFICATION_NAV: OneToOneLink<WorkSchedule, ShiftClassification> = new OneToOneLink('shiftClassificationNav', WorkSchedule, ShiftClassification);
  /**
   * Static representation of the one-to-many navigation property [[workScheduleDayModels]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_DAY_MODELS: Link<WorkSchedule, WorkScheduleDayModelAssignment> = new Link('workScheduleDayModels', WorkSchedule, WorkScheduleDayModelAssignment);
  /**
   * Static representation of the one-to-many navigation property [[workScheduleDays]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_DAYS: Link<WorkSchedule, WorkScheduleDay> = new Link('workScheduleDays', WorkSchedule, WorkScheduleDay);
  /**
   * All fields of the WorkSchedule entity.
   */
  export const _allFields: Array<BigNumberField<WorkSchedule> | StringField<WorkSchedule> | DateField<WorkSchedule> | BooleanField<WorkSchedule> | OneToOneLink<WorkSchedule, WorkSchedule> | OneToOneLink<WorkSchedule, ShiftClassification> | Link<WorkSchedule, WorkScheduleDayModelAssignment> | Link<WorkSchedule, WorkScheduleDay>> = [
    WorkSchedule.AVERAGE_HOURS_PER_DAY,
    WorkSchedule.AVERAGE_HOURS_PER_MONTH,
    WorkSchedule.AVERAGE_HOURS_PER_WEEK,
    WorkSchedule.AVERAGE_HOURS_PER_YEAR,
    WorkSchedule.AVERAGE_WORKING_DAYS_PER_WEEK,
    WorkSchedule.COUNTRY,
    WorkSchedule.CREATED_BY,
    WorkSchedule.CREATED_DATE,
    WorkSchedule.CREATED_DATE_TIME,
    WorkSchedule.EXTERNAL_CODE,
    WorkSchedule.EXTERNAL_NAME_DE_DE,
    WorkSchedule.EXTERNAL_NAME_DEFAULT_VALUE,
    WorkSchedule.EXTERNAL_NAME_EN_GB,
    WorkSchedule.EXTERNAL_NAME_EN_US,
    WorkSchedule.EXTERNAL_NAME_ES_ES,
    WorkSchedule.EXTERNAL_NAME_FR_FR,
    WorkSchedule.EXTERNAL_NAME_JA_JP,
    WorkSchedule.EXTERNAL_NAME_KO_KR,
    WorkSchedule.EXTERNAL_NAME_LOCALIZED,
    WorkSchedule.EXTERNAL_NAME_NL_NL,
    WorkSchedule.EXTERNAL_NAME_PT_BR,
    WorkSchedule.EXTERNAL_NAME_PT_PT,
    WorkSchedule.EXTERNAL_NAME_RU_RU,
    WorkSchedule.EXTERNAL_NAME_ZH_CN,
    WorkSchedule.EXTERNAL_NAME_ZH_TW,
    WorkSchedule.FLEXIBLE_REQUESTING_ALLOWED,
    WorkSchedule.INDIVIDUAL_WORK_SCHEDULE,
    WorkSchedule.LAST_MODIFIED_BY,
    WorkSchedule.LAST_MODIFIED_DATE,
    WorkSchedule.LAST_MODIFIED_DATE_TIME,
    WorkSchedule.LAST_MODIFIED_DATE_WITH_TZ,
    WorkSchedule.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkSchedule.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkSchedule.MDF_SYSTEM_ENTITY_ID,
    WorkSchedule.MDF_SYSTEM_OBJECT_TYPE,
    WorkSchedule.MDF_SYSTEM_RECORD_ID,
    WorkSchedule.MDF_SYSTEM_RECORD_STATUS,
    WorkSchedule.MDF_SYSTEM_STATUS,
    WorkSchedule.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkSchedule.MDF_SYSTEM_VERSION_ID,
    WorkSchedule.MODEL_CATEGORY,
    WorkSchedule.PERIOD_MODEL,
    WorkSchedule.SEARCH_STRING,
    WorkSchedule.SHIFT_CLASSIFICATION,
    WorkSchedule.STARTING_DATE,
    WorkSchedule.TIME_RECORDING_VARIANT,
    WorkSchedule.USER_ID,
    WorkSchedule.PERIOD_MODEL_NAV,
    WorkSchedule.SHIFT_CLASSIFICATION_NAV,
    WorkSchedule.WORK_SCHEDULE_DAY_MODELS,
    WorkSchedule.WORK_SCHEDULE_DAYS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkSchedule> = new AllFields('*', WorkSchedule);
  /**
   * All key fields of the WorkSchedule entity.
   */
  export const _keyFields: Array<Selectable<WorkSchedule>> = [WorkSchedule.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property WorkSchedule.
   */
  export const _keys: { [keys: string]: Selectable<WorkSchedule> } = WorkSchedule._keyFields.reduce((acc: { [keys: string]: Selectable<WorkSchedule> }, field: Selectable<WorkSchedule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
