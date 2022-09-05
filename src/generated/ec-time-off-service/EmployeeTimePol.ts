/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimePolRequestBuilder } from './EmployeeTimePolRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimePOL" of service "SFOData".
 */
export class EmployeeTimePol extends Entity implements EmployeeTimePolType {
  /**
   * Technical entity name for EmployeeTimePol.
   */
  static _entityName = 'EmployeeTimePOL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimePol.
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
   * ZLA Code.
   * Maximum length: 8.
   * @nullable
   */
  absenceCode?: string;
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
   * ZLA Delivery Date.
   * @nullable
   */
  zlaDeliveryDate?: Moment;
  /**
   * ZLA Document Number.
   * Maximum length: 9.
   * @nullable
   */
  zlaDocumentNumber?: string;
  /**
   * ZLA Issue Date.
   * @nullable
   */
  zlaIssueDate?: Moment;

  /**
   * Returns an entity builder to construct instances `EmployeeTimePol`.
   * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
   */
  static builder(): EntityBuilderType<EmployeeTimePol, EmployeeTimePolTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimePol);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimePol` entity type.
   * @returns A `EmployeeTimePol` request builder.
   */
  static requestBuilder(): EmployeeTimePolRequestBuilder {
    return new EmployeeTimePolRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimePol`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimePol> {
    return Entity.customFieldSelector(fieldName, EmployeeTimePol);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmployeeTimePolType {
  employeeTimeExternalCode: string;
  absenceCode?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  zlaDeliveryDate?: Moment;
  zlaDocumentNumber?: string;
  zlaIssueDate?: Moment;
}

export interface EmployeeTimePolTypeForceMandatory {
  employeeTimeExternalCode: string;
  absenceCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  zlaDeliveryDate: Moment;
  zlaDocumentNumber: string;
  zlaIssueDate: Moment;
}

export namespace EmployeeTimePol {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimePol> = new StringField('EmployeeTime_externalCode', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[absenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_CODE: StringField<EmployeeTimePol> = new StringField('absenceCode', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimePol> = new StringField('createdBy', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimePol> = new DateField('createdDateTime', EmployeeTimePol, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimePol> = new BigNumberField('externalCode', EmployeeTimePol, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimePol> = new StringField('lastModifiedBy', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimePol> = new DateField('lastModifiedDateTime', EmployeeTimePol, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimePol> = new StringField('mdfSystemRecordStatus', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[zlaDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZLA_DELIVERY_DATE: DateField<EmployeeTimePol> = new DateField('zlaDeliveryDate', EmployeeTimePol, 'Edm.DateTime');
  /**
   * Static representation of the [[zlaDocumentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZLA_DOCUMENT_NUMBER: StringField<EmployeeTimePol> = new StringField('zlaDocumentNumber', EmployeeTimePol, 'Edm.String');
  /**
   * Static representation of the [[zlaIssueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZLA_ISSUE_DATE: DateField<EmployeeTimePol> = new DateField('zlaIssueDate', EmployeeTimePol, 'Edm.DateTime');
  /**
   * All fields of the EmployeeTimePol entity.
   */
  export const _allFields: Array<StringField<EmployeeTimePol> | DateField<EmployeeTimePol> | BigNumberField<EmployeeTimePol>> = [
    EmployeeTimePol.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimePol.ABSENCE_CODE,
    EmployeeTimePol.CREATED_BY,
    EmployeeTimePol.CREATED_DATE_TIME,
    EmployeeTimePol.EXTERNAL_CODE,
    EmployeeTimePol.LAST_MODIFIED_BY,
    EmployeeTimePol.LAST_MODIFIED_DATE_TIME,
    EmployeeTimePol.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimePol.ZLA_DELIVERY_DATE,
    EmployeeTimePol.ZLA_DOCUMENT_NUMBER,
    EmployeeTimePol.ZLA_ISSUE_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimePol> = new AllFields('*', EmployeeTimePol);
  /**
   * All key fields of the EmployeeTimePol entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimePol>> = [EmployeeTimePol.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimePol.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimePol.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimePol> } = EmployeeTimePol._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimePol> }, field: Selectable<EmployeeTimePol>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
