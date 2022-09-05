/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountDetailRequestBuilder } from './TimeAccountDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountDetail" of service "SFOData".
 */
export class TimeAccountDetail extends Entity implements TimeAccountDetailType {
  /**
   * Technical entity name for TimeAccountDetail.
   */
  static _entityName = 'TimeAccountDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Account_External Code.
   * Maximum length: 128.
   */
  timeAccountExternalCode!: string;
  /**
   * Accrual Period ID.
   * Maximum length: 255.
   * @nullable
   */
  accrualPeriodId?: string;
  /**
   * Taken in Advance.
   * @nullable
   */
  advanced?: boolean;
  /**
   * Amount posted.
   * @nullable
   */
  bookingAmount?: BigNumber;
  /**
   * Posting Date.
   * @nullable
   */
  bookingDate?: Moment;
  /**
   * Posting Type.
   * Maximum length: 255.
   * @nullable
   */
  bookingType?: string;
  /**
   * Posting Unit.
   * Maximum length: 255.
   * @nullable
   */
  bookingUnit?: string;
  /**
   * Time Calendar Entry.
   * Maximum length: 128.
   * @nullable
   */
  calendarEntry?: string;
  /**
   * Time Account Change Calendar.
   * Maximum length: 128.
   * @nullable
   */
  changeCalendar?: string;
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: string;
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
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: string;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Payout Accrual Separated.
   * @nullable
   */
  payoutAccrualSeparated?: boolean;
  /**
   * Reference Object.
   * Maximum length: 255.
   * @nullable
   */
  referenceObject?: string;
  /**
   * One-to-one navigation property to the [[EmployeeTimeCalendar]] entity.
   */
  calendarEntryNav!: EmployeeTimeCalendar;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeNav!: EmployeeTime;

  /**
   * Returns an entity builder to construct instances `TimeAccountDetail`.
   * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
   */
  static builder(): EntityBuilderType<TimeAccountDetail, TimeAccountDetailTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountDetail` entity type.
   * @returns A `TimeAccountDetail` request builder.
   */
  static requestBuilder(): TimeAccountDetailRequestBuilder {
    return new TimeAccountDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
   */
  static customField(fieldName: string): CustomField<TimeAccountDetail> {
    return Entity.customFieldSelector(fieldName, TimeAccountDetail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';

export interface TimeAccountDetailType {
  timeAccountExternalCode: string;
  accrualPeriodId?: string;
  advanced?: boolean;
  bookingAmount?: BigNumber;
  bookingDate?: Moment;
  bookingType?: string;
  bookingUnit?: string;
  calendarEntry?: string;
  changeCalendar?: string;
  comment?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  employeeTime?: string;
  externalCode: string;
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
  payoutAccrualSeparated?: boolean;
  referenceObject?: string;
  calendarEntryNav: EmployeeTimeCalendarType;
  employeeTimeNav: EmployeeTimeType;
}

export interface TimeAccountDetailTypeForceMandatory {
  timeAccountExternalCode: string;
  accrualPeriodId: string;
  advanced: boolean;
  bookingAmount: BigNumber;
  bookingDate: Moment;
  bookingType: string;
  bookingUnit: string;
  calendarEntry: string;
  changeCalendar: string;
  comment: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  employeeTime: string;
  externalCode: string;
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
  payoutAccrualSeparated: boolean;
  referenceObject: string;
  calendarEntryNav: EmployeeTimeCalendarType;
  employeeTimeNav: EmployeeTimeType;
}

export namespace TimeAccountDetail {
  /**
   * Static representation of the [[timeAccountExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_EXTERNAL_CODE: StringField<TimeAccountDetail> = new StringField('TimeAccount_externalCode', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[accrualPeriodId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_ID: StringField<TimeAccountDetail> = new StringField('accrualPeriodId', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[advanced]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCED: BooleanField<TimeAccountDetail> = new BooleanField('advanced', TimeAccountDetail, 'Edm.Boolean');
  /**
   * Static representation of the [[bookingAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_AMOUNT: BigNumberField<TimeAccountDetail> = new BigNumberField('bookingAmount', TimeAccountDetail, 'Edm.Decimal');
  /**
   * Static representation of the [[bookingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_DATE: DateField<TimeAccountDetail> = new DateField('bookingDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[bookingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_TYPE: StringField<TimeAccountDetail> = new StringField('bookingType', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[bookingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_UNIT: StringField<TimeAccountDetail> = new StringField('bookingUnit', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[calendarEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALENDAR_ENTRY: StringField<TimeAccountDetail> = new StringField('calendarEntry', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[changeCalendar]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_CALENDAR: StringField<TimeAccountDetail> = new StringField('changeCalendar', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<TimeAccountDetail> = new StringField('comment', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountDetail> = new StringField('createdBy', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TimeAccountDetail> = new DateField('createdDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountDetail> = new DateField('createdDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<TimeAccountDetail> = new StringField('employeeTime', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountDetail> = new StringField('externalCode', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountDetail> = new StringField('lastModifiedBy', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TimeAccountDetail> = new DateField('lastModifiedDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountDetail> = new DateField('lastModifiedDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccountDetail> = new DateField('lastModifiedDateWithTZ', TimeAccountDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccountDetail> = new DateField('mdfSystemEffectiveEndDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccountDetail> = new DateField('mdfSystemEffectiveStartDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccountDetail> = new StringField('mdfSystemEntityId', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccountDetail> = new StringField('mdfSystemObjectType', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TimeAccountDetail> = new StringField('mdfSystemRecordId', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountDetail> = new StringField('mdfSystemRecordStatus', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeAccountDetail> = new StringField('mdfSystemStatus', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccountDetail> = new BigNumberField('mdfSystemTransactionSequence', TimeAccountDetail, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccountDetail> = new BigNumberField('mdfSystemVersionId', TimeAccountDetail, 'Edm.Int64');
  /**
   * Static representation of the [[payoutAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_ACCRUAL_SEPARATED: BooleanField<TimeAccountDetail> = new BooleanField('payoutAccrualSeparated', TimeAccountDetail, 'Edm.Boolean');
  /**
   * Static representation of the [[referenceObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_OBJECT: StringField<TimeAccountDetail> = new StringField('referenceObject', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[calendarEntryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALENDAR_ENTRY_NAV: OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar> = new OneToOneLink('calendarEntryNav', TimeAccountDetail, EmployeeTimeCalendar);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<TimeAccountDetail, EmployeeTime> = new OneToOneLink('employeeTimeNav', TimeAccountDetail, EmployeeTime);
  /**
   * All fields of the TimeAccountDetail entity.
   */
  export const _allFields: Array<StringField<TimeAccountDetail> | BooleanField<TimeAccountDetail> | BigNumberField<TimeAccountDetail> | DateField<TimeAccountDetail> | OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar> | OneToOneLink<TimeAccountDetail, EmployeeTime>> = [
    TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE,
    TimeAccountDetail.ACCRUAL_PERIOD_ID,
    TimeAccountDetail.ADVANCED,
    TimeAccountDetail.BOOKING_AMOUNT,
    TimeAccountDetail.BOOKING_DATE,
    TimeAccountDetail.BOOKING_TYPE,
    TimeAccountDetail.BOOKING_UNIT,
    TimeAccountDetail.CALENDAR_ENTRY,
    TimeAccountDetail.CHANGE_CALENDAR,
    TimeAccountDetail.COMMENT,
    TimeAccountDetail.CREATED_BY,
    TimeAccountDetail.CREATED_DATE,
    TimeAccountDetail.CREATED_DATE_TIME,
    TimeAccountDetail.EMPLOYEE_TIME,
    TimeAccountDetail.EXTERNAL_CODE,
    TimeAccountDetail.LAST_MODIFIED_BY,
    TimeAccountDetail.LAST_MODIFIED_DATE,
    TimeAccountDetail.LAST_MODIFIED_DATE_TIME,
    TimeAccountDetail.LAST_MODIFIED_DATE_WITH_TZ,
    TimeAccountDetail.MDF_SYSTEM_EFFECTIVE_END_DATE,
    TimeAccountDetail.MDF_SYSTEM_EFFECTIVE_START_DATE,
    TimeAccountDetail.MDF_SYSTEM_ENTITY_ID,
    TimeAccountDetail.MDF_SYSTEM_OBJECT_TYPE,
    TimeAccountDetail.MDF_SYSTEM_RECORD_ID,
    TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountDetail.MDF_SYSTEM_STATUS,
    TimeAccountDetail.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    TimeAccountDetail.MDF_SYSTEM_VERSION_ID,
    TimeAccountDetail.PAYOUT_ACCRUAL_SEPARATED,
    TimeAccountDetail.REFERENCE_OBJECT,
    TimeAccountDetail.CALENDAR_ENTRY_NAV,
    TimeAccountDetail.EMPLOYEE_TIME_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountDetail> = new AllFields('*', TimeAccountDetail);
  /**
   * All key fields of the TimeAccountDetail entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountDetail>> = [TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE, TimeAccountDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountDetail.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountDetail> } = TimeAccountDetail._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountDetail> }, field: Selectable<TimeAccountDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
