/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeCanRequestBuilder } from './EmployeeTimeCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeCAN" of service "SFOData".
 */
export class EmployeeTimeCan extends Entity implements EmployeeTimeCanType {
  /**
   * Technical entity name for EmployeeTimeCan.
   */
  static _entityName = 'EmployeeTimeCAN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeCan.
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
   * Disability Period One End Date.
   * @nullable
   */
  disabilityPeriodOneEndDate?: Moment;
  /**
   * Disability Period Three End Date.
   * @nullable
   */
  disabilityPeriodThreeEndDate?: Moment;
  /**
   * Disability Period Two End Date.
   * @nullable
   */
  disabilityPeriodTwoEndDate?: Moment;
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
   * Returns an entity builder to construct instances `EmployeeTimeCan`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
   */
  static builder(): EntityBuilderType<EmployeeTimeCan, EmployeeTimeCanTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeCan);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeCan` entity type.
   * @returns A `EmployeeTimeCan` request builder.
   */
  static requestBuilder(): EmployeeTimeCanRequestBuilder {
    return new EmployeeTimeCanRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCan`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeCan> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeCan);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmployeeTimeCanType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  disabilityPeriodOneEndDate?: Moment;
  disabilityPeriodThreeEndDate?: Moment;
  disabilityPeriodTwoEndDate?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
}

export interface EmployeeTimeCanTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  disabilityPeriodOneEndDate: Moment;
  disabilityPeriodThreeEndDate: Moment;
  disabilityPeriodTwoEndDate: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
}

export namespace EmployeeTimeCan {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeCan> = new StringField('EmployeeTime_externalCode', EmployeeTimeCan, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeCan> = new StringField('createdBy', EmployeeTimeCan, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeCan> = new DateField('createdDateTime', EmployeeTimeCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[disabilityPeriodOneEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_ONE_END_DATE: DateField<EmployeeTimeCan> = new DateField('disabilityPeriodOneEndDate', EmployeeTimeCan, 'Edm.DateTime');
  /**
   * Static representation of the [[disabilityPeriodThreeEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_THREE_END_DATE: DateField<EmployeeTimeCan> = new DateField('disabilityPeriodThreeEndDate', EmployeeTimeCan, 'Edm.DateTime');
  /**
   * Static representation of the [[disabilityPeriodTwoEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_TWO_END_DATE: DateField<EmployeeTimeCan> = new DateField('disabilityPeriodTwoEndDate', EmployeeTimeCan, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeCan> = new BigNumberField('externalCode', EmployeeTimeCan, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeCan> = new StringField('lastModifiedBy', EmployeeTimeCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeCan> = new DateField('lastModifiedDateTime', EmployeeTimeCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeCan> = new StringField('mdfSystemRecordStatus', EmployeeTimeCan, 'Edm.String');
  /**
   * All fields of the EmployeeTimeCan entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeCan> | DateField<EmployeeTimeCan> | BigNumberField<EmployeeTimeCan>> = [
    EmployeeTimeCan.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeCan.CREATED_BY,
    EmployeeTimeCan.CREATED_DATE_TIME,
    EmployeeTimeCan.DISABILITY_PERIOD_ONE_END_DATE,
    EmployeeTimeCan.DISABILITY_PERIOD_THREE_END_DATE,
    EmployeeTimeCan.DISABILITY_PERIOD_TWO_END_DATE,
    EmployeeTimeCan.EXTERNAL_CODE,
    EmployeeTimeCan.LAST_MODIFIED_BY,
    EmployeeTimeCan.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeCan.MDF_SYSTEM_RECORD_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeCan> = new AllFields('*', EmployeeTimeCan);
  /**
   * All key fields of the EmployeeTimeCan entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeCan>> = [EmployeeTimeCan.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCan.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeCan.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeCan> } = EmployeeTimeCan._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeCan> }, field: Selectable<EmployeeTimeCan>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
