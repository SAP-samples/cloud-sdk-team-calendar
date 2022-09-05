/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeUsaRequestBuilder } from './TimeTypeUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeTypeUSA" of service "SFOData".
 */
export class TimeTypeUsa extends Entity implements TimeTypeUsaType {
  /**
   * Technical entity name for TimeTypeUsa.
   */
  static _entityName = 'TimeTypeUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeTypeUsa.
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
   * Returns an entity builder to construct instances `TimeTypeUsa`.
   * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
   */
  static builder(): EntityBuilderType<TimeTypeUsa, TimeTypeUsaTypeForceMandatory> {
    return Entity.entityBuilder(TimeTypeUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeTypeUsa` entity type.
   * @returns A `TimeTypeUsa` request builder.
   */
  static requestBuilder(): TimeTypeUsaRequestBuilder {
    return new TimeTypeUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
   */
  static customField(fieldName: string): CustomField<TimeTypeUsa> {
    return Entity.customFieldSelector(fieldName, TimeTypeUsa);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeTypeUsaType {
  timeTypeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  sicknessVariant?: string;
}

export interface TimeTypeUsaTypeForceMandatory {
  timeTypeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  sicknessVariant: string;
}

export namespace TimeTypeUsa {
  /**
   * Static representation of the [[timeTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeUsa> = new StringField('TimeType_externalCode', TimeTypeUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeTypeUsa> = new StringField('createdBy', TimeTypeUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeTypeUsa> = new DateField('createdDateTime', TimeTypeUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<TimeTypeUsa> = new BigNumberField('externalCode', TimeTypeUsa, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeTypeUsa> = new StringField('lastModifiedBy', TimeTypeUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeUsa> = new DateField('lastModifiedDateTime', TimeTypeUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeUsa> = new StringField('mdfSystemRecordStatus', TimeTypeUsa, 'Edm.String');
  /**
   * Static representation of the [[sicknessVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SICKNESS_VARIANT: StringField<TimeTypeUsa> = new StringField('sicknessVariant', TimeTypeUsa, 'Edm.String');
  /**
   * All fields of the TimeTypeUsa entity.
   */
  export const _allFields: Array<StringField<TimeTypeUsa> | DateField<TimeTypeUsa> | BigNumberField<TimeTypeUsa>> = [
    TimeTypeUsa.TIME_TYPE_EXTERNAL_CODE,
    TimeTypeUsa.CREATED_BY,
    TimeTypeUsa.CREATED_DATE_TIME,
    TimeTypeUsa.EXTERNAL_CODE,
    TimeTypeUsa.LAST_MODIFIED_BY,
    TimeTypeUsa.LAST_MODIFIED_DATE_TIME,
    TimeTypeUsa.MDF_SYSTEM_RECORD_STATUS,
    TimeTypeUsa.SICKNESS_VARIANT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeTypeUsa> = new AllFields('*', TimeTypeUsa);
  /**
   * All key fields of the TimeTypeUsa entity.
   */
  export const _keyFields: Array<Selectable<TimeTypeUsa>> = [TimeTypeUsa.TIME_TYPE_EXTERNAL_CODE, TimeTypeUsa.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeTypeUsa.
   */
  export const _keys: { [keys: string]: Selectable<TimeTypeUsa> } = TimeTypeUsa._keyFields.reduce((acc: { [keys: string]: Selectable<TimeTypeUsa> }, field: Selectable<TimeTypeUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
