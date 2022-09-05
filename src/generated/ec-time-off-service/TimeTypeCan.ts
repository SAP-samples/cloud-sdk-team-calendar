/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeCanRequestBuilder } from './TimeTypeCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeTypeCAN" of service "SFOData".
 */
export class TimeTypeCan extends Entity implements TimeTypeCanType {
  /**
   * Technical entity name for TimeTypeCan.
   */
  static _entityName = 'TimeTypeCAN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeTypeCan.
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
   * Sickness Variant.
   * Maximum length: 128.
   * @nullable
   */
  sicknessVariant?: string;

  /**
   * Returns an entity builder to construct instances `TimeTypeCan`.
   * @returns A builder that constructs instances of entity type `TimeTypeCan`.
   */
  static builder(): EntityBuilderType<TimeTypeCan, TimeTypeCanTypeForceMandatory> {
    return Entity.entityBuilder(TimeTypeCan);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeTypeCan` entity type.
   * @returns A `TimeTypeCan` request builder.
   */
  static requestBuilder(): TimeTypeCanRequestBuilder {
    return new TimeTypeCanRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeCan`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeTypeCan`.
   */
  static customField(fieldName: string): CustomField<TimeTypeCan> {
    return Entity.customFieldSelector(fieldName, TimeTypeCan);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeTypeCanType {
  timeTypeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  sicknessVariant?: string;
}

export interface TimeTypeCanTypeForceMandatory {
  timeTypeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  sicknessVariant: string;
}

export namespace TimeTypeCan {
  /**
   * Static representation of the [[timeTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeCan> = new StringField('TimeType_externalCode', TimeTypeCan, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeTypeCan> = new StringField('createdBy', TimeTypeCan, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeTypeCan> = new DateField('createdDateTime', TimeTypeCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<TimeTypeCan> = new BigNumberField('externalCode', TimeTypeCan, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeTypeCan> = new StringField('lastModifiedBy', TimeTypeCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeCan> = new DateField('lastModifiedDateTime', TimeTypeCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeCan> = new StringField('mdfSystemRecordStatus', TimeTypeCan, 'Edm.String');
  /**
   * Static representation of the [[sicknessVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SICKNESS_VARIANT: StringField<TimeTypeCan> = new StringField('sicknessVariant', TimeTypeCan, 'Edm.String');
  /**
   * All fields of the TimeTypeCan entity.
   */
  export const _allFields: Array<StringField<TimeTypeCan> | DateField<TimeTypeCan> | BigNumberField<TimeTypeCan>> = [
    TimeTypeCan.TIME_TYPE_EXTERNAL_CODE,
    TimeTypeCan.CREATED_BY,
    TimeTypeCan.CREATED_DATE_TIME,
    TimeTypeCan.EXTERNAL_CODE,
    TimeTypeCan.LAST_MODIFIED_BY,
    TimeTypeCan.LAST_MODIFIED_DATE_TIME,
    TimeTypeCan.MDF_SYSTEM_RECORD_STATUS,
    TimeTypeCan.SICKNESS_VARIANT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeTypeCan> = new AllFields('*', TimeTypeCan);
  /**
   * All key fields of the TimeTypeCan entity.
   */
  export const _keyFields: Array<Selectable<TimeTypeCan>> = [TimeTypeCan.TIME_TYPE_EXTERNAL_CODE, TimeTypeCan.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeTypeCan.
   */
  export const _keys: { [keys: string]: Selectable<TimeTypeCan> } = TimeTypeCan._keyFields.reduce((acc: { [keys: string]: Selectable<TimeTypeCan> }, field: Selectable<TimeTypeCan>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
