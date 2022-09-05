/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeUsaRequestBuilder } from './EmployeeTimeUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeUSA" of service "SFOData".
 */
export class EmployeeTimeUsa extends Entity implements EmployeeTimeUsaType {
  /**
   * Technical entity name for EmployeeTimeUsa.
   */
  static _entityName = 'EmployeeTimeUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeUsa.
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
   * Returns an entity builder to construct instances `EmployeeTimeUsa`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeUsa`.
   */
  static builder(): EntityBuilderType<EmployeeTimeUsa, EmployeeTimeUsaTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeUsa` entity type.
   * @returns A `EmployeeTimeUsa` request builder.
   */
  static requestBuilder(): EmployeeTimeUsaRequestBuilder {
    return new EmployeeTimeUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeUsa`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeUsa> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeUsa);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmployeeTimeUsaType {
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

export interface EmployeeTimeUsaTypeForceMandatory {
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

export namespace EmployeeTimeUsa {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeUsa> = new StringField('EmployeeTime_externalCode', EmployeeTimeUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeUsa> = new StringField('createdBy', EmployeeTimeUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeUsa> = new DateField('createdDateTime', EmployeeTimeUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[disabilityPeriodOneEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_ONE_END_DATE: DateField<EmployeeTimeUsa> = new DateField('disabilityPeriodOneEndDate', EmployeeTimeUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[disabilityPeriodThreeEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_THREE_END_DATE: DateField<EmployeeTimeUsa> = new DateField('disabilityPeriodThreeEndDate', EmployeeTimeUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[disabilityPeriodTwoEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_PERIOD_TWO_END_DATE: DateField<EmployeeTimeUsa> = new DateField('disabilityPeriodTwoEndDate', EmployeeTimeUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeUsa> = new BigNumberField('externalCode', EmployeeTimeUsa, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeUsa> = new StringField('lastModifiedBy', EmployeeTimeUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeUsa> = new DateField('lastModifiedDateTime', EmployeeTimeUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeUsa> = new StringField('mdfSystemRecordStatus', EmployeeTimeUsa, 'Edm.String');
  /**
   * All fields of the EmployeeTimeUsa entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeUsa> | DateField<EmployeeTimeUsa> | BigNumberField<EmployeeTimeUsa>> = [
    EmployeeTimeUsa.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeUsa.CREATED_BY,
    EmployeeTimeUsa.CREATED_DATE_TIME,
    EmployeeTimeUsa.DISABILITY_PERIOD_ONE_END_DATE,
    EmployeeTimeUsa.DISABILITY_PERIOD_THREE_END_DATE,
    EmployeeTimeUsa.DISABILITY_PERIOD_TWO_END_DATE,
    EmployeeTimeUsa.EXTERNAL_CODE,
    EmployeeTimeUsa.LAST_MODIFIED_BY,
    EmployeeTimeUsa.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeUsa.MDF_SYSTEM_RECORD_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeUsa> = new AllFields('*', EmployeeTimeUsa);
  /**
   * All key fields of the EmployeeTimeUsa entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeUsa>> = [EmployeeTimeUsa.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeUsa.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeUsa.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeUsa> } = EmployeeTimeUsa._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeUsa> }, field: Selectable<EmployeeTimeUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
