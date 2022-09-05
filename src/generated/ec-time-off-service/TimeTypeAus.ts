/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeAusRequestBuilder } from './TimeTypeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeTypeAUS" of service "SFOData".
 */
export class TimeTypeAus extends Entity implements TimeTypeAusType {
  /**
   * Technical entity name for TimeTypeAus.
   */
  static _entityName = 'TimeTypeAUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeTypeAus.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Type_External Code.
   * Maximum length: 128.
   */
  timeTypeExternalCode!: string;
  /**
   * Advance Leave Payment Allowed.
   * @nullable
   */
  advanceLeavePaymentAllowed?: boolean;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Split Across Financial Year Allowed.
   * @nullable
   */
  splitPaymentAcrossFinancialYearAllowed?: boolean;

  /**
   * Returns an entity builder to construct instances `TimeTypeAus`.
   * @returns A builder that constructs instances of entity type `TimeTypeAus`.
   */
  static builder(): EntityBuilderType<TimeTypeAus, TimeTypeAusTypeForceMandatory> {
    return Entity.entityBuilder(TimeTypeAus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeTypeAus` entity type.
   * @returns A `TimeTypeAus` request builder.
   */
  static requestBuilder(): TimeTypeAusRequestBuilder {
    return new TimeTypeAusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeAus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeTypeAus`.
   */
  static customField(fieldName: string): CustomField<TimeTypeAus> {
    return Entity.customFieldSelector(fieldName, TimeTypeAus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeTypeAusType {
  timeTypeExternalCode: string;
  advanceLeavePaymentAllowed?: boolean;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  splitPaymentAcrossFinancialYearAllowed?: boolean;
}

export interface TimeTypeAusTypeForceMandatory {
  timeTypeExternalCode: string;
  advanceLeavePaymentAllowed: boolean;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  splitPaymentAcrossFinancialYearAllowed: boolean;
}

export namespace TimeTypeAus {
  /**
   * Static representation of the [[timeTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeAus> = new StringField('TimeType_externalCode', TimeTypeAus, 'Edm.String');
  /**
   * Static representation of the [[advanceLeavePaymentAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_LEAVE_PAYMENT_ALLOWED: BooleanField<TimeTypeAus> = new BooleanField('advanceLeavePaymentAllowed', TimeTypeAus, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeTypeAus> = new StringField('createdBy', TimeTypeAus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeTypeAus> = new DateField('createdDateTime', TimeTypeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<TimeTypeAus> = new BigNumberField('externalCode', TimeTypeAus, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeTypeAus> = new StringField('lastModifiedBy', TimeTypeAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeAus> = new DateField('lastModifiedDateTime', TimeTypeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeAus> = new StringField('mdfSystemRecordStatus', TimeTypeAus, 'Edm.String');
  /**
   * Static representation of the [[splitPaymentAcrossFinancialYearAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED: BooleanField<TimeTypeAus> = new BooleanField('splitPaymentAcrossFinancialYearAllowed', TimeTypeAus, 'Edm.Boolean');
  /**
   * All fields of the TimeTypeAus entity.
   */
  export const _allFields: Array<StringField<TimeTypeAus> | BooleanField<TimeTypeAus> | DateField<TimeTypeAus> | BigNumberField<TimeTypeAus>> = [
    TimeTypeAus.TIME_TYPE_EXTERNAL_CODE,
    TimeTypeAus.ADVANCE_LEAVE_PAYMENT_ALLOWED,
    TimeTypeAus.CREATED_BY,
    TimeTypeAus.CREATED_DATE_TIME,
    TimeTypeAus.EXTERNAL_CODE,
    TimeTypeAus.LAST_MODIFIED_BY,
    TimeTypeAus.LAST_MODIFIED_DATE_TIME,
    TimeTypeAus.MDF_SYSTEM_RECORD_STATUS,
    TimeTypeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeTypeAus> = new AllFields('*', TimeTypeAus);
  /**
   * All key fields of the TimeTypeAus entity.
   */
  export const _keyFields: Array<Selectable<TimeTypeAus>> = [TimeTypeAus.TIME_TYPE_EXTERNAL_CODE, TimeTypeAus.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeTypeAus.
   */
  export const _keys: { [keys: string]: Selectable<TimeTypeAus> } = TimeTypeAus._keyFields.reduce((acc: { [keys: string]: Selectable<TimeTypeAus> }, field: Selectable<TimeTypeAus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
