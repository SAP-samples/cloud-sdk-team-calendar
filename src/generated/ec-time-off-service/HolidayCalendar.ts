/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { HolidayAssignment, HolidayAssignmentType } from './HolidayAssignment';

/**
 * This class represents the entity "HolidayCalendar" of service "ECTimeOff".
 */
export class HolidayCalendar<T extends DeSerializers = DefaultDeSerializers> extends Entity implements HolidayCalendarType<T> {
  /**
   * Technical entity name for HolidayCalendar.
   */
  static _entityName = 'HolidayCalendar';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the HolidayCalendar entity
   */
  static _keys = ['externalCode'];
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
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * oldName.
   * Maximum length: 255.
   * @nullable
   */
  oldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link HolidayAssignment} entity.
   */
  holidayAssignments!: HolidayAssignment<T>[];
}

export interface HolidayCalendarType<T extends DeSerializers = DefaultDeSerializers> {
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
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
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  namePtPt?: DeserializedType<T, 'Edm.String'> | null;
  nameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  nameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  oldName?: DeserializedType<T, 'Edm.String'> | null;
  holidayAssignments: HolidayAssignmentType<T>[];
}
