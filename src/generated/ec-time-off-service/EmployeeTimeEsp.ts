/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeEspRequestBuilder } from './EmployeeTimeEspRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeESP" of service "SFOData".
 */
export class EmployeeTimeEsp extends Entity implements EmployeeTimeEspType {
  /**
   * Technical entity name for EmployeeTimeEsp.
   */
  static _entityName = 'EmployeeTimeESP';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeEsp.
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
  createdDate?: Moment;
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
  lastModifiedDate?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: Moment;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: Moment;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: Moment;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: string;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: string;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * mdfSystemStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: string;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: BigNumber;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: BigNumber;
  /**
   * Original Absence.
   * @nullable
   */
  originalAbsence?: boolean;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  identicalSicknessGroupNav!: EmployeeTimeGroup;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeEsp`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
   */
  static builder(): EntityBuilderType<EmployeeTimeEsp, EmployeeTimeEspTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeEsp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeEsp` entity type.
   * @returns A `EmployeeTimeEsp` request builder.
   */
  static requestBuilder(): EmployeeTimeEspRequestBuilder {
    return new EmployeeTimeEspRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeEsp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeEsp> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeEsp);
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

export interface EmployeeTimeEspType {
  employeeTimeExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  identicalSicknessGroup?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedDateWithTz?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  originalAbsence?: boolean;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export interface EmployeeTimeEspTypeForceMandatory {
  employeeTimeExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  externalCode: BigNumber;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedDateWithTz: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  originalAbsence: boolean;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
}

export namespace EmployeeTimeEsp {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeEsp> = new StringField('EmployeeTime_externalCode', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeEsp> = new StringField('createdBy', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<EmployeeTimeEsp> = new DateField('createdDate', EmployeeTimeEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeEsp> = new DateField('createdDateTime', EmployeeTimeEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeEsp> = new BigNumberField('externalCode', EmployeeTimeEsp, 'Edm.Int64');
  /**
   * Static representation of the [[identicalSicknessGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeEsp> = new StringField('identicalSicknessGroup', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeEsp> = new StringField('lastModifiedBy', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<EmployeeTimeEsp> = new DateField('lastModifiedDate', EmployeeTimeEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeEsp> = new DateField('lastModifiedDateTime', EmployeeTimeEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<EmployeeTimeEsp> = new DateField('lastModifiedDateWithTZ', EmployeeTimeEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeeTimeEsp> = new DateField('mdfSystemEffectiveEndDate', EmployeeTimeEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeeTimeEsp> = new DateField('mdfSystemEffectiveStartDate', EmployeeTimeEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<EmployeeTimeEsp> = new StringField('mdfSystemEntityId', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<EmployeeTimeEsp> = new StringField('mdfSystemObjectType', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<EmployeeTimeEsp> = new StringField('mdfSystemRecordId', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeEsp> = new StringField('mdfSystemRecordStatus', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<EmployeeTimeEsp> = new StringField('mdfSystemStatus', EmployeeTimeEsp, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<EmployeeTimeEsp> = new BigNumberField('mdfSystemTransactionSequence', EmployeeTimeEsp, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<EmployeeTimeEsp> = new BigNumberField('mdfSystemVersionId', EmployeeTimeEsp, 'Edm.Int64');
  /**
   * Static representation of the [[originalAbsence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_ABSENCE: BooleanField<EmployeeTimeEsp> = new BooleanField('originalAbsence', EmployeeTimeEsp, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeEsp, EmployeeTimeGroup> = new OneToOneLink('identicalSicknessGroupNav', EmployeeTimeEsp, EmployeeTimeGroup);
  /**
   * All fields of the EmployeeTimeEsp entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeEsp> | DateField<EmployeeTimeEsp> | BigNumberField<EmployeeTimeEsp> | BooleanField<EmployeeTimeEsp> | OneToOneLink<EmployeeTimeEsp, EmployeeTimeGroup>> = [
    EmployeeTimeEsp.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeEsp.CREATED_BY,
    EmployeeTimeEsp.CREATED_DATE,
    EmployeeTimeEsp.CREATED_DATE_TIME,
    EmployeeTimeEsp.EXTERNAL_CODE,
    EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP,
    EmployeeTimeEsp.LAST_MODIFIED_BY,
    EmployeeTimeEsp.LAST_MODIFIED_DATE,
    EmployeeTimeEsp.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeEsp.LAST_MODIFIED_DATE_WITH_TZ,
    EmployeeTimeEsp.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeeTimeEsp.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeeTimeEsp.MDF_SYSTEM_ENTITY_ID,
    EmployeeTimeEsp.MDF_SYSTEM_OBJECT_TYPE,
    EmployeeTimeEsp.MDF_SYSTEM_RECORD_ID,
    EmployeeTimeEsp.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeEsp.MDF_SYSTEM_STATUS,
    EmployeeTimeEsp.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    EmployeeTimeEsp.MDF_SYSTEM_VERSION_ID,
    EmployeeTimeEsp.ORIGINAL_ABSENCE,
    EmployeeTimeEsp.IDENTICAL_SICKNESS_GROUP_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeEsp> = new AllFields('*', EmployeeTimeEsp);
  /**
   * All key fields of the EmployeeTimeEsp entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeEsp>> = [EmployeeTimeEsp.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeEsp.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeEsp.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeEsp> } = EmployeeTimeEsp._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeEsp> }, field: Selectable<EmployeeTimeEsp>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
