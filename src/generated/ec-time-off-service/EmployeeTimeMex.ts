/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeMexRequestBuilder } from './EmployeeTimeMexRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeMEX" of service "SFOData".
 */
export class EmployeeTimeMex extends Entity implements EmployeeTimeMexType {
  /**
   * Technical entity name for EmployeeTimeMex.
   */
  static _entityName = 'EmployeeTimeMEX';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeMex.
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
   * Days Already Cumulated For Same Sickness.
   * @nullable
   */
  daysAlreadyCumulatedForSameSickness?: BigNumber;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * Identical Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  identicalSicknessGroup?: string;
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
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Reference Number.
   * Maximum length: 8.
   * @nullable
   */
  referenceNumber?: string;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  identicalSicknessGroupNav!: EmployeeTimeGroup;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeMex`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeMex`.
   */
  static builder(): EntityBuilderType<EmployeeTimeMex, EmployeeTimeMexTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeMex);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeMex` entity type.
   * @returns A `EmployeeTimeMex` request builder.
   */
  static requestBuilder(): EmployeeTimeMexRequestBuilder {
    return new EmployeeTimeMexRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeMex`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeMex`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeMex> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeMex);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';

export interface EmployeeTimeMexType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  daysAlreadyCumulatedForSameSickness?: BigNumber;
  externalCode: BigNumber;
  identicalSicknessGroup?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  referenceNumber?: string;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export interface EmployeeTimeMexTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  daysAlreadyCumulatedForSameSickness: BigNumber;
  externalCode: BigNumber;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  referenceNumber: string;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export namespace EmployeeTimeMex {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeMex> = new StringField('EmployeeTime_externalCode', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeMex> = new StringField('createdBy', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeMex> = new DateField('createdDateTime', EmployeeTimeMex, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[daysAlreadyCumulatedForSameSickness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS: BigNumberField<EmployeeTimeMex> = new BigNumberField('daysAlreadyCumulatedForSameSickness', EmployeeTimeMex, 'Edm.Decimal');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeMex> = new BigNumberField('externalCode', EmployeeTimeMex, 'Edm.Int64');
  /**
   * Static representation of the [[identicalSicknessGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeMex> = new StringField('identicalSicknessGroup', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeMex> = new StringField('lastModifiedBy', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeMex> = new DateField('lastModifiedDateTime', EmployeeTimeMex, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeMex> = new StringField('mdfSystemRecordStatus', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the [[referenceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_NUMBER: StringField<EmployeeTimeMex> = new StringField('referenceNumber', EmployeeTimeMex, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeMex, EmployeeTimeGroup> = new OneToOneLink('identicalSicknessGroupNav', EmployeeTimeMex, EmployeeTimeGroup);
  /**
   * All fields of the EmployeeTimeMex entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeMex> | DateField<EmployeeTimeMex> | BigNumberField<EmployeeTimeMex> | OneToOneLink<EmployeeTimeMex, EmployeeTimeGroup>> = [
    EmployeeTimeMex.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeMex.CREATED_BY,
    EmployeeTimeMex.CREATED_DATE_TIME,
    EmployeeTimeMex.DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS,
    EmployeeTimeMex.EXTERNAL_CODE,
    EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP,
    EmployeeTimeMex.LAST_MODIFIED_BY,
    EmployeeTimeMex.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeMex.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeMex.REFERENCE_NUMBER,
    EmployeeTimeMex.IDENTICAL_SICKNESS_GROUP_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeMex> = new AllFields('*', EmployeeTimeMex);
  /**
   * All key fields of the EmployeeTimeMex entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeMex>> = [EmployeeTimeMex.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeMex.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeMex.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeMex> } = EmployeeTimeMex._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeMex> }, field: Selectable<EmployeeTimeMex>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
