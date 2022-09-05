/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeColRequestBuilder } from './EmployeeTimeColRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeCOL" of service "SFOData".
 */
export class EmployeeTimeCol extends Entity implements EmployeeTimeColType {
  /**
   * Technical entity name for EmployeeTimeCol.
   */
  static _entityName = 'EmployeeTimeCOL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeCol.
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  identicalSicknessGroupNav!: EmployeeTimeGroup;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeCol`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeCol`.
   */
  static builder(): EntityBuilderType<EmployeeTimeCol, EmployeeTimeColTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeCol);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeCol` entity type.
   * @returns A `EmployeeTimeCol` request builder.
   */
  static requestBuilder(): EmployeeTimeColRequestBuilder {
    return new EmployeeTimeColRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCol`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeCol`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeCol> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeCol);
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

export interface EmployeeTimeColType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  identicalSicknessGroup?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export interface EmployeeTimeColTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export namespace EmployeeTimeCol {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeCol> = new StringField('EmployeeTime_externalCode', EmployeeTimeCol, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeCol> = new StringField('createdBy', EmployeeTimeCol, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeCol> = new DateField('createdDateTime', EmployeeTimeCol, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeCol> = new BigNumberField('externalCode', EmployeeTimeCol, 'Edm.Int64');
  /**
   * Static representation of the [[identicalSicknessGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeCol> = new StringField('identicalSicknessGroup', EmployeeTimeCol, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeCol> = new StringField('lastModifiedBy', EmployeeTimeCol, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeCol> = new DateField('lastModifiedDateTime', EmployeeTimeCol, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeCol> = new StringField('mdfSystemRecordStatus', EmployeeTimeCol, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeCol, EmployeeTimeGroup> = new OneToOneLink('identicalSicknessGroupNav', EmployeeTimeCol, EmployeeTimeGroup);
  /**
   * All fields of the EmployeeTimeCol entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeCol> | DateField<EmployeeTimeCol> | BigNumberField<EmployeeTimeCol> | OneToOneLink<EmployeeTimeCol, EmployeeTimeGroup>> = [
    EmployeeTimeCol.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeCol.CREATED_BY,
    EmployeeTimeCol.CREATED_DATE_TIME,
    EmployeeTimeCol.EXTERNAL_CODE,
    EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP,
    EmployeeTimeCol.LAST_MODIFIED_BY,
    EmployeeTimeCol.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeCol.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeCol.IDENTICAL_SICKNESS_GROUP_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeCol> = new AllFields('*', EmployeeTimeCol);
  /**
   * All key fields of the EmployeeTimeCol entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeCol>> = [EmployeeTimeCol.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeCol.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeCol.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeCol> } = EmployeeTimeCol._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeCol> }, field: Selectable<EmployeeTimeCol>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
