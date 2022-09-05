/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeAusRequestBuilder } from './EmployeeTimeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeAUS" of service "SFOData".
 */
export class EmployeeTimeAus extends Entity implements EmployeeTimeAusType {
  /**
   * Technical entity name for EmployeeTimeAus.
   */
  static _entityName = 'EmployeeTimeAUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeAus.
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
   * Request Advance Pay.
   * @nullable
   */
  requestAdvanceLeavePayment?: boolean;
  /**
   * Split Pay Across Financial Year.
   * @nullable
   */
  splitPaymentAcrossFinancialYear?: boolean;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeAus`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
   */
  static builder(): EntityBuilderType<EmployeeTimeAus, EmployeeTimeAusTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeAus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeAus` entity type.
   * @returns A `EmployeeTimeAus` request builder.
   */
  static requestBuilder(): EmployeeTimeAusRequestBuilder {
    return new EmployeeTimeAusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeAus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeAus> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeAus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmployeeTimeAusType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  requestAdvanceLeavePayment?: boolean;
  splitPaymentAcrossFinancialYear?: boolean;
}

export interface EmployeeTimeAusTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  requestAdvanceLeavePayment: boolean;
  splitPaymentAcrossFinancialYear: boolean;
}

export namespace EmployeeTimeAus {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeAus> = new StringField('EmployeeTime_externalCode', EmployeeTimeAus, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeAus> = new StringField('createdBy', EmployeeTimeAus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeAus> = new DateField('createdDateTime', EmployeeTimeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeAus> = new BigNumberField('externalCode', EmployeeTimeAus, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeAus> = new StringField('lastModifiedBy', EmployeeTimeAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeAus> = new DateField('lastModifiedDateTime', EmployeeTimeAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeAus> = new StringField('mdfSystemRecordStatus', EmployeeTimeAus, 'Edm.String');
  /**
   * Static representation of the [[requestAdvanceLeavePayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_ADVANCE_LEAVE_PAYMENT: BooleanField<EmployeeTimeAus> = new BooleanField('requestAdvanceLeavePayment', EmployeeTimeAus, 'Edm.Boolean');
  /**
   * Static representation of the [[splitPaymentAcrossFinancialYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR: BooleanField<EmployeeTimeAus> = new BooleanField('splitPaymentAcrossFinancialYear', EmployeeTimeAus, 'Edm.Boolean');
  /**
   * All fields of the EmployeeTimeAus entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeAus> | DateField<EmployeeTimeAus> | BigNumberField<EmployeeTimeAus> | BooleanField<EmployeeTimeAus>> = [
    EmployeeTimeAus.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeAus.CREATED_BY,
    EmployeeTimeAus.CREATED_DATE_TIME,
    EmployeeTimeAus.EXTERNAL_CODE,
    EmployeeTimeAus.LAST_MODIFIED_BY,
    EmployeeTimeAus.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeAus.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeAus.REQUEST_ADVANCE_LEAVE_PAYMENT,
    EmployeeTimeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeAus> = new AllFields('*', EmployeeTimeAus);
  /**
   * All key fields of the EmployeeTimeAus entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeAus>> = [EmployeeTimeAus.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeAus.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeAus.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeAus> } = EmployeeTimeAus._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeAus> }, field: Selectable<EmployeeTimeAus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
