/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder } from './TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountPurchaseProfilePayComponentAssignment" of service "SFOData".
 */
export class TimeAccountPurchaseProfilePayComponentAssignment extends Entity implements TimeAccountPurchaseProfilePayComponentAssignmentType {
  /**
   * Technical entity name for TimeAccountPurchaseProfilePayComponentAssignment.
   */
  static _entityName = 'TimeAccountPurchaseProfilePayComponentAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountPurchaseProfilePayComponentAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Account Purchase Profile_External Code.
   * Maximum length: 128.
   */
  timeAccountPurchaseProfileExternalCode!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * Deduction Pay Component Assignment.
   * Maximum length: 32.
   */
  payComponent!: string;

  /**
   * Returns an entity builder to construct instances `TimeAccountPurchaseProfilePayComponentAssignment`.
   * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
   */
  static builder(): EntityBuilderType<TimeAccountPurchaseProfilePayComponentAssignment, TimeAccountPurchaseProfilePayComponentAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountPurchaseProfilePayComponentAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfilePayComponentAssignment` entity type.
   * @returns A `TimeAccountPurchaseProfilePayComponentAssignment` request builder.
   */
  static requestBuilder(): TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder {
    return new TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfilePayComponentAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
   */
  static customField(fieldName: string): CustomField<TimeAccountPurchaseProfilePayComponentAssignment> {
    return Entity.customFieldSelector(fieldName, TimeAccountPurchaseProfilePayComponentAssignment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeAccountPurchaseProfilePayComponentAssignmentType {
  timeAccountPurchaseProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payComponent: string;
}

export interface TimeAccountPurchaseProfilePayComponentAssignmentTypeForceMandatory {
  timeAccountPurchaseProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payComponent: string;
}

export namespace TimeAccountPurchaseProfilePayComponentAssignment {
  /**
   * Static representation of the [[timeAccountPurchaseProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE: StringField<TimeAccountPurchaseProfilePayComponentAssignment> = new StringField('TimeAccountPurchaseProfile_externalCode', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountPurchaseProfilePayComponentAssignment> = new StringField('createdBy', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountPurchaseProfilePayComponentAssignment> = new DateField('createdDateTime', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountPurchaseProfilePayComponentAssignment> = new StringField('lastModifiedBy', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPurchaseProfilePayComponentAssignment> = new DateField('lastModifiedDateTime', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPurchaseProfilePayComponentAssignment> = new StringField('mdfSystemRecordStatus', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<TimeAccountPurchaseProfilePayComponentAssignment> = new StringField('payComponent', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
  /**
   * All fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
   */
  export const _allFields: Array<StringField<TimeAccountPurchaseProfilePayComponentAssignment> | DateField<TimeAccountPurchaseProfilePayComponentAssignment>> = [
    TimeAccountPurchaseProfilePayComponentAssignment.TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE,
    TimeAccountPurchaseProfilePayComponentAssignment.CREATED_BY,
    TimeAccountPurchaseProfilePayComponentAssignment.CREATED_DATE_TIME,
    TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_BY,
    TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_DATE_TIME,
    TimeAccountPurchaseProfilePayComponentAssignment.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountPurchaseProfilePayComponentAssignment.PAY_COMPONENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountPurchaseProfilePayComponentAssignment> = new AllFields('*', TimeAccountPurchaseProfilePayComponentAssignment);
  /**
   * All key fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountPurchaseProfilePayComponentAssignment>> = [TimeAccountPurchaseProfilePayComponentAssignment.TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE, TimeAccountPurchaseProfilePayComponentAssignment.PAY_COMPONENT];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfilePayComponentAssignment.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountPurchaseProfilePayComponentAssignment> } = TimeAccountPurchaseProfilePayComponentAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountPurchaseProfilePayComponentAssignment> }, field: Selectable<TimeAccountPurchaseProfilePayComponentAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
