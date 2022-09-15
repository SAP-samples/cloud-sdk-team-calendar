/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';

/**
 * This class represents the entity "TimeAccountDetail" of service "ECTimeOff".
 */
export class TimeAccountDetail<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TimeAccountDetailType<T> {
  /**
   * Technical entity name for TimeAccountDetail.
   */
  static _entityName = 'TimeAccountDetail';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountDetail entity
   */
  static _keys = ['TimeAccount_externalCode', 'externalCode'];
  /**
   * Time Account_External Code.
   * Maximum length: 128.
   */
  timeAccountExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Period ID.
   * Maximum length: 255.
   * @nullable
   */
  accrualPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taken in Advance.
   * @nullable
   */
  advanced?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Amount posted.
   * @nullable
   */
  bookingAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  bookingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Posting Type.
   * Maximum length: 255.
   * @nullable
   */
  bookingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Unit.
   * Maximum length: 255.
   * @nullable
   */
  bookingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Calendar Entry.
   * Maximum length: 128.
   * @nullable
   */
  calendarEntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account Change Calendar.
   * Maximum length: 128.
   * @nullable
   */
  changeCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: DeserializedType<T, 'Edm.String'> | null;
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
   * Payout Accrual Separated.
   * @nullable
   */
  payoutAccrualSeparated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Reference Object.
   * Maximum length: 255.
   * @nullable
   */
  referenceObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeCalendar} entity.
   */
  calendarEntryNav?: EmployeeTimeCalendar<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTime} entity.
   */
  employeeTimeNav?: EmployeeTime<T> | null;
}

export interface TimeAccountDetailType<T extends DeSerializers = DefaultDeSerializers> {
  timeAccountExternalCode: DeserializedType<T, 'Edm.String'>;
  accrualPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  advanced?: DeserializedType<T, 'Edm.Boolean'> | null;
  bookingAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  bookingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bookingType?: DeserializedType<T, 'Edm.String'> | null;
  bookingUnit?: DeserializedType<T, 'Edm.String'> | null;
  calendarEntry?: DeserializedType<T, 'Edm.String'> | null;
  changeCalendar?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  employeeTime?: DeserializedType<T, 'Edm.String'> | null;
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
  payoutAccrualSeparated?: DeserializedType<T, 'Edm.Boolean'> | null;
  referenceObject?: DeserializedType<T, 'Edm.String'> | null;
  calendarEntryNav?: EmployeeTimeCalendarType<T> | null;
  employeeTimeNav?: EmployeeTimeType<T> | null;
}
