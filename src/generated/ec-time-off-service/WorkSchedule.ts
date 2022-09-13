/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { ShiftClassification, ShiftClassificationType } from './ShiftClassification';
import { WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentType } from './WorkScheduleDayModelAssignment';
import { WorkScheduleDay, WorkScheduleDayType } from './WorkScheduleDay';

/**
 * This class represents the entity "WorkSchedule" of service "ECTimeOff".
 */
export class WorkSchedule<T extends DeSerializers = DefaultDeSerializers> extends Entity implements WorkScheduleType<T> {
  /**
   * Technical entity name for WorkSchedule.
   */
  static _entityName = 'WorkSchedule';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the WorkSchedule entity
   */
  static _keys = ['externalCode'];
  /**
   * Average Hours Per Day.
   * @nullable
   */
  averageHoursPerDay?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Average Hours Per Month.
   * @nullable
   */
  averageHoursPerMonth?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Average Hours Per Week.
   * @nullable
   */
  averageHoursPerWeek?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Average Hours Per Year.
   * @nullable
   */
  averageHoursPerYear?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Average Working Days Per Week.
   * @nullable
   */
  averageWorkingDaysPerWeek?: DeserializedType<T, 'Edm.Decimal'> | null;
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
   * Flexible Requesting Allowed.
   * @nullable
   */
  flexibleRequestingAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Individual Work Schedule.
   * @nullable
   */
  individualWorkSchedule?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Model.
   * Maximum length: 255.
   * @nullable
   */
  modelCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Model.
   * Maximum length: 128.
   * @nullable
   */
  periodModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Field.
   * Maximum length: 255.
   * @nullable
   */
  searchString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Classification.
   * Maximum length: 128.
   * @nullable
   */
  shiftClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Starting Date.
   * @nullable
   */
  startingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkSchedule} entity.
   */
  periodModelNav?: WorkSchedule<T> | null;
  /**
   * One-to-one navigation property to the {@link ShiftClassification} entity.
   */
  shiftClassificationNav?: ShiftClassification<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkScheduleDayModelAssignment} entity.
   */
  workScheduleDayModels!: WorkScheduleDayModelAssignment<T>[];
  /**
   * One-to-many navigation property to the {@link WorkScheduleDay} entity.
   */
  workScheduleDays!: WorkScheduleDay<T>[];
}

export interface WorkScheduleType<T extends DeSerializers = DefaultDeSerializers> {
  averageHoursPerDay?: DeserializedType<T, 'Edm.Decimal'> | null;
  averageHoursPerMonth?: DeserializedType<T, 'Edm.Decimal'> | null;
  averageHoursPerWeek?: DeserializedType<T, 'Edm.Decimal'> | null;
  averageHoursPerYear?: DeserializedType<T, 'Edm.Decimal'> | null;
  averageWorkingDaysPerWeek?: DeserializedType<T, 'Edm.Decimal'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
  flexibleRequestingAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  individualWorkSchedule?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  modelCategory?: DeserializedType<T, 'Edm.String'> | null;
  periodModel?: DeserializedType<T, 'Edm.String'> | null;
  searchString?: DeserializedType<T, 'Edm.String'> | null;
  shiftClassification?: DeserializedType<T, 'Edm.String'> | null;
  startingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  periodModelNav?: WorkScheduleType<T> | null;
  shiftClassificationNav?: ShiftClassificationType<T> | null;
  workScheduleDayModels: WorkScheduleDayModelAssignmentType<T>[];
  workScheduleDays: WorkScheduleDayType<T>[];
}
