/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountTypeAusRequestBuilder } from './TimeAccountTypeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountTypeAUS" of service "SFOData".
 */
export class TimeAccountTypeAus extends Entity implements TimeAccountTypeAusType {
  /**
   * Technical entity name for TimeAccountTypeAus.
   */
  static _entityName = 'TimeAccountTypeAUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountTypeAus.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Account Type_External Code.
   * Maximum length: 128.
   */
  timeAccountTypeExternalCode!: string;
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
   * Include In Leave Loading Calculations.
   * @nullable
   */
  includeInLeaveLoadingCalculations?: boolean;
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
   * Returns an entity builder to construct instances `TimeAccountTypeAus`.
   * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
   */
  static builder(): EntityBuilderType<TimeAccountTypeAus, TimeAccountTypeAusTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountTypeAus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountTypeAus` entity type.
   * @returns A `TimeAccountTypeAus` request builder.
   */
  static requestBuilder(): TimeAccountTypeAusRequestBuilder {
    return new TimeAccountTypeAusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountTypeAus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
   */
  static customField(fieldName: string): CustomField<TimeAccountTypeAus> {
    return Entity.customFieldSelector(fieldName, TimeAccountTypeAus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeAccountTypeAusType {
  timeAccountTypeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  includeInLeaveLoadingCalculations?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
}

export interface TimeAccountTypeAusTypeForceMandatory {
  timeAccountTypeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  includeInLeaveLoadingCalculations: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
}

export namespace TimeAccountTypeAus {
  /**
   * Static representation of the [[timeAccountTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_EXTERNAL_CODE: StringField<TimeAccountTypeAus> = new StringField('TimeAccountType_externalCode', TimeAccountTypeAus, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountTypeAus> = new StringField('createdBy', TimeAccountTypeAus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountTypeAus> = new DateField('createdDateTime', TimeAccountTypeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<TimeAccountTypeAus> = new BigNumberField('externalCode', TimeAccountTypeAus, 'Edm.Int64');
  /**
   * Static representation of the [[includeInLeaveLoadingCalculations]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_IN_LEAVE_LOADING_CALCULATIONS: BooleanField<TimeAccountTypeAus> = new BooleanField('includeInLeaveLoadingCalculations', TimeAccountTypeAus, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountTypeAus> = new StringField('lastModifiedBy', TimeAccountTypeAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountTypeAus> = new DateField('lastModifiedDateTime', TimeAccountTypeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountTypeAus> = new StringField('mdfSystemRecordStatus', TimeAccountTypeAus, 'Edm.String');
  /**
   * All fields of the TimeAccountTypeAus entity.
   */
  export const _allFields: Array<StringField<TimeAccountTypeAus> | DateField<TimeAccountTypeAus> | BigNumberField<TimeAccountTypeAus> | BooleanField<TimeAccountTypeAus>> = [
    TimeAccountTypeAus.TIME_ACCOUNT_TYPE_EXTERNAL_CODE,
    TimeAccountTypeAus.CREATED_BY,
    TimeAccountTypeAus.CREATED_DATE_TIME,
    TimeAccountTypeAus.EXTERNAL_CODE,
    TimeAccountTypeAus.INCLUDE_IN_LEAVE_LOADING_CALCULATIONS,
    TimeAccountTypeAus.LAST_MODIFIED_BY,
    TimeAccountTypeAus.LAST_MODIFIED_DATE_TIME,
    TimeAccountTypeAus.MDF_SYSTEM_RECORD_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountTypeAus> = new AllFields('*', TimeAccountTypeAus);
  /**
   * All key fields of the TimeAccountTypeAus entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountTypeAus>> = [TimeAccountTypeAus.TIME_ACCOUNT_TYPE_EXTERNAL_CODE, TimeAccountTypeAus.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountTypeAus.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountTypeAus> } = TimeAccountTypeAus._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountTypeAus> }, field: Selectable<TimeAccountTypeAus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
