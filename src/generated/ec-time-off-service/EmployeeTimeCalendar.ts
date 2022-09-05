/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeCalendarRequestBuilder } from './EmployeeTimeCalendarRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeCalendar" of service "SFOData".
 */
export class EmployeeTimeCalendar extends Entity implements EmployeeTimeCalendarType {
  /**
   * Technical entity name for EmployeeTimeCalendar.
   */
  static _entityName = 'EmployeeTimeCalendar';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeCalendar.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Employee Time_External Code.
   * Maximum length: 128.
   */
  employeeTimeExternalCode!: string;
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
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Deduction Quantity.
   * @nullable
   */
  deductionQuantity?: BigNumber;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
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
   * Number Of Days.
   * @nullable
   */
  quantityInDays?: BigNumber;
  /**
   * Number Of Hours.
   * @nullable
   */
  quantityInHours?: BigNumber;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * Internal ID Of The Work Schedule.
   * @nullable
   */
  workScheduleInternalId?: BigNumber;
  /**
   * One-to-many navigation property to the [[TimeAccountDetail]] entity.
   */
  timeAccountDetail!: TimeAccountDetail[];

  /**
   * Returns an entity builder to construct instances `EmployeeTimeCalendar`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
   */
  static builder(): EntityBuilderType<EmployeeTimeCalendar, EmployeeTimeCalendarTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeCalendar);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeCalendar` entity type.
   * @returns A `EmployeeTimeCalendar` request builder.
   */
  static requestBuilder(): EmployeeTimeCalendarRequestBuilder {
    return new EmployeeTimeCalendarRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCalendar`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeCalendar> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeCalendar);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeAccountDetail, TimeAccountDetailType } from './TimeAccountDetail';

export interface EmployeeTimeCalendarType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  date?: Moment;
  deductionQuantity?: BigNumber;
  endTime?: Time;
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
  quantityInDays?: BigNumber;
  quantityInHours?: BigNumber;
  startTime?: Time;
  workScheduleInternalId?: BigNumber;
  timeAccountDetail: TimeAccountDetailType[];
}

export interface EmployeeTimeCalendarTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  date: Moment;
  deductionQuantity: BigNumber;
  endTime: Time;
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
  quantityInDays: BigNumber;
  quantityInHours: BigNumber;
  startTime: Time;
  workScheduleInternalId: BigNumber;
  timeAccountDetail: TimeAccountDetailType[];
}

export namespace EmployeeTimeCalendar {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeCalendar> = new StringField('EmployeeTime_externalCode', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeCalendar> = new StringField('createdBy', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<EmployeeTimeCalendar> = new DateField('createdDate', EmployeeTimeCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeCalendar> = new DateField('createdDateTime', EmployeeTimeCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<EmployeeTimeCalendar> = new DateField('date', EmployeeTimeCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[deductionQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_QUANTITY: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('deductionQuantity', EmployeeTimeCalendar, 'Edm.Decimal');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<EmployeeTimeCalendar> = new TimeField('endTime', EmployeeTimeCalendar, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeCalendar> = new StringField('externalCode', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeCalendar> = new StringField('lastModifiedBy', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<EmployeeTimeCalendar> = new DateField('lastModifiedDate', EmployeeTimeCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeCalendar> = new DateField('lastModifiedDateTime', EmployeeTimeCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<EmployeeTimeCalendar> = new DateField('lastModifiedDateWithTZ', EmployeeTimeCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeeTimeCalendar> = new DateField('mdfSystemEffectiveEndDate', EmployeeTimeCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeeTimeCalendar> = new DateField('mdfSystemEffectiveStartDate', EmployeeTimeCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<EmployeeTimeCalendar> = new StringField('mdfSystemEntityId', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<EmployeeTimeCalendar> = new StringField('mdfSystemObjectType', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<EmployeeTimeCalendar> = new StringField('mdfSystemRecordId', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeCalendar> = new StringField('mdfSystemRecordStatus', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<EmployeeTimeCalendar> = new StringField('mdfSystemStatus', EmployeeTimeCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('mdfSystemTransactionSequence', EmployeeTimeCalendar, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('mdfSystemVersionId', EmployeeTimeCalendar, 'Edm.Int64');
  /**
   * Static representation of the [[quantityInDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_DAYS: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('quantityInDays', EmployeeTimeCalendar, 'Edm.Decimal');
  /**
   * Static representation of the [[quantityInHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_HOURS: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('quantityInHours', EmployeeTimeCalendar, 'Edm.Decimal');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<EmployeeTimeCalendar> = new TimeField('startTime', EmployeeTimeCalendar, 'Edm.Time');
  /**
   * Static representation of the [[workScheduleInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_INTERNAL_ID: BigNumberField<EmployeeTimeCalendar> = new BigNumberField('workScheduleInternalId', EmployeeTimeCalendar, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[timeAccountDetail]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_DETAIL: Link<EmployeeTimeCalendar, TimeAccountDetail> = new Link('timeAccountDetail', EmployeeTimeCalendar, TimeAccountDetail);
  /**
   * All fields of the EmployeeTimeCalendar entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeCalendar> | DateField<EmployeeTimeCalendar> | BigNumberField<EmployeeTimeCalendar> | TimeField<EmployeeTimeCalendar> | Link<EmployeeTimeCalendar, TimeAccountDetail>> = [
    EmployeeTimeCalendar.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeCalendar.CREATED_BY,
    EmployeeTimeCalendar.CREATED_DATE,
    EmployeeTimeCalendar.CREATED_DATE_TIME,
    EmployeeTimeCalendar.DATE,
    EmployeeTimeCalendar.DEDUCTION_QUANTITY,
    EmployeeTimeCalendar.END_TIME,
    EmployeeTimeCalendar.EXTERNAL_CODE,
    EmployeeTimeCalendar.LAST_MODIFIED_BY,
    EmployeeTimeCalendar.LAST_MODIFIED_DATE,
    EmployeeTimeCalendar.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeCalendar.LAST_MODIFIED_DATE_WITH_TZ,
    EmployeeTimeCalendar.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeeTimeCalendar.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeeTimeCalendar.MDF_SYSTEM_ENTITY_ID,
    EmployeeTimeCalendar.MDF_SYSTEM_OBJECT_TYPE,
    EmployeeTimeCalendar.MDF_SYSTEM_RECORD_ID,
    EmployeeTimeCalendar.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeCalendar.MDF_SYSTEM_STATUS,
    EmployeeTimeCalendar.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    EmployeeTimeCalendar.MDF_SYSTEM_VERSION_ID,
    EmployeeTimeCalendar.QUANTITY_IN_DAYS,
    EmployeeTimeCalendar.QUANTITY_IN_HOURS,
    EmployeeTimeCalendar.START_TIME,
    EmployeeTimeCalendar.WORK_SCHEDULE_INTERNAL_ID,
    EmployeeTimeCalendar.TIME_ACCOUNT_DETAIL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeCalendar> = new AllFields('*', EmployeeTimeCalendar);
  /**
   * All key fields of the EmployeeTimeCalendar entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeCalendar>> = [EmployeeTimeCalendar.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCalendar.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeCalendar.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeCalendar> } = EmployeeTimeCalendar._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeCalendar> }, field: Selectable<EmployeeTimeCalendar>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
