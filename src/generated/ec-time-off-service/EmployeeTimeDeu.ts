/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeDeuRequestBuilder } from './EmployeeTimeDeuRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeDEU" of service "SFOData".
 */
export class EmployeeTimeDeu extends Entity implements EmployeeTimeDeuType {
  /**
   * Technical entity name for EmployeeTimeDeu.
   */
  static _entityName = 'EmployeeTimeDEU';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeDeu.
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
   * Days Credited for Continued Pay.
   * @nullable
   */
  continuedPayCreditedDays?: BigNumber;
  /**
   * End of Continued Pay.
   * @nullable
   */
  continuedPayEndDate?: Moment;
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
   * Overlapping Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  overlappingSicknessGroup?: string;
  /**
   * End of Sick Pay Supplement.
   * @nullable
   */
  paySupplementEndDate?: Moment;
  /**
   * Start Date of Sick Pay Supplement.
   * @nullable
   */
  paySupplementStartDate?: Moment;
  /**
   * Certified Start Date of Sickness.
   * @nullable
   */
  sicknessCertificateStartDate?: Moment;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  identicalSicknessGroupNav!: EmployeeTimeGroup;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  overlappingSicknessGroupNav!: EmployeeTimeGroup;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeDeu`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
   */
  static builder(): EntityBuilderType<EmployeeTimeDeu, EmployeeTimeDeuTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeDeu);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeDeu` entity type.
   * @returns A `EmployeeTimeDeu` request builder.
   */
  static requestBuilder(): EmployeeTimeDeuRequestBuilder {
    return new EmployeeTimeDeuRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeDeu`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeDeu> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeDeu);
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

export interface EmployeeTimeDeuType {
  employeeTimeExternalCode: string;
  continuedPayCreditedDays?: BigNumber;
  continuedPayEndDate?: Moment;
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
  overlappingSicknessGroup?: string;
  paySupplementEndDate?: Moment;
  paySupplementStartDate?: Moment;
  sicknessCertificateStartDate?: Moment;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
  overlappingSicknessGroupNav: EmployeeTimeGroupType;
}

export interface EmployeeTimeDeuTypeForceMandatory {
  employeeTimeExternalCode: string;
  continuedPayCreditedDays: BigNumber;
  continuedPayEndDate: Moment;
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
  overlappingSicknessGroup: string;
  paySupplementEndDate: Moment;
  paySupplementStartDate: Moment;
  sicknessCertificateStartDate: Moment;
  identicalSicknessGroupNav: EmployeeTimeGroupType;
  overlappingSicknessGroupNav: EmployeeTimeGroupType;
}

export namespace EmployeeTimeDeu {
  /**
   * Static representation of the [[employeeTimeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeDeu> = new StringField('EmployeeTime_externalCode', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[continuedPayCreditedDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUED_PAY_CREDITED_DAYS: BigNumberField<EmployeeTimeDeu> = new BigNumberField('continuedPayCreditedDays', EmployeeTimeDeu, 'Edm.Decimal');
  /**
   * Static representation of the [[continuedPayEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUED_PAY_END_DATE: DateField<EmployeeTimeDeu> = new DateField('continuedPayEndDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeDeu> = new StringField('createdBy', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<EmployeeTimeDeu> = new DateField('createdDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeDeu> = new DateField('createdDateTime', EmployeeTimeDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmployeeTimeDeu> = new BigNumberField('externalCode', EmployeeTimeDeu, 'Edm.Int64');
  /**
   * Static representation of the [[identicalSicknessGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeDeu> = new StringField('identicalSicknessGroup', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeDeu> = new StringField('lastModifiedBy', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<EmployeeTimeDeu> = new DateField('lastModifiedDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeDeu> = new DateField('lastModifiedDateTime', EmployeeTimeDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<EmployeeTimeDeu> = new DateField('lastModifiedDateWithTZ', EmployeeTimeDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeeTimeDeu> = new DateField('mdfSystemEffectiveEndDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeeTimeDeu> = new DateField('mdfSystemEffectiveStartDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<EmployeeTimeDeu> = new StringField('mdfSystemEntityId', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<EmployeeTimeDeu> = new StringField('mdfSystemObjectType', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<EmployeeTimeDeu> = new StringField('mdfSystemRecordId', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeDeu> = new StringField('mdfSystemRecordStatus', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<EmployeeTimeDeu> = new StringField('mdfSystemStatus', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<EmployeeTimeDeu> = new BigNumberField('mdfSystemTransactionSequence', EmployeeTimeDeu, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<EmployeeTimeDeu> = new BigNumberField('mdfSystemVersionId', EmployeeTimeDeu, 'Edm.Int64');
  /**
   * Static representation of the [[overlappingSicknessGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERLAPPING_SICKNESS_GROUP: StringField<EmployeeTimeDeu> = new StringField('overlappingSicknessGroup', EmployeeTimeDeu, 'Edm.String');
  /**
   * Static representation of the [[paySupplementEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SUPPLEMENT_END_DATE: DateField<EmployeeTimeDeu> = new DateField('paySupplementEndDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[paySupplementStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SUPPLEMENT_START_DATE: DateField<EmployeeTimeDeu> = new DateField('paySupplementStartDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[sicknessCertificateStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SICKNESS_CERTIFICATE_START_DATE: DateField<EmployeeTimeDeu> = new DateField('sicknessCertificateStartDate', EmployeeTimeDeu, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup> = new OneToOneLink('identicalSicknessGroupNav', EmployeeTimeDeu, EmployeeTimeGroup);
  /**
   * Static representation of the one-to-one navigation property [[overlappingSicknessGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERLAPPING_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup> = new OneToOneLink('overlappingSicknessGroupNav', EmployeeTimeDeu, EmployeeTimeGroup);
  /**
   * All fields of the EmployeeTimeDeu entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeDeu> | BigNumberField<EmployeeTimeDeu> | DateField<EmployeeTimeDeu> | OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup>> = [
    EmployeeTimeDeu.EMPLOYEE_TIME_EXTERNAL_CODE,
    EmployeeTimeDeu.CONTINUED_PAY_CREDITED_DAYS,
    EmployeeTimeDeu.CONTINUED_PAY_END_DATE,
    EmployeeTimeDeu.CREATED_BY,
    EmployeeTimeDeu.CREATED_DATE,
    EmployeeTimeDeu.CREATED_DATE_TIME,
    EmployeeTimeDeu.EXTERNAL_CODE,
    EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP,
    EmployeeTimeDeu.LAST_MODIFIED_BY,
    EmployeeTimeDeu.LAST_MODIFIED_DATE,
    EmployeeTimeDeu.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeDeu.LAST_MODIFIED_DATE_WITH_TZ,
    EmployeeTimeDeu.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeeTimeDeu.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeeTimeDeu.MDF_SYSTEM_ENTITY_ID,
    EmployeeTimeDeu.MDF_SYSTEM_OBJECT_TYPE,
    EmployeeTimeDeu.MDF_SYSTEM_RECORD_ID,
    EmployeeTimeDeu.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeDeu.MDF_SYSTEM_STATUS,
    EmployeeTimeDeu.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    EmployeeTimeDeu.MDF_SYSTEM_VERSION_ID,
    EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP,
    EmployeeTimeDeu.PAY_SUPPLEMENT_END_DATE,
    EmployeeTimeDeu.PAY_SUPPLEMENT_START_DATE,
    EmployeeTimeDeu.SICKNESS_CERTIFICATE_START_DATE,
    EmployeeTimeDeu.IDENTICAL_SICKNESS_GROUP_NAV,
    EmployeeTimeDeu.OVERLAPPING_SICKNESS_GROUP_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeDeu> = new AllFields('*', EmployeeTimeDeu);
  /**
   * All key fields of the EmployeeTimeDeu entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeDeu>> = [EmployeeTimeDeu.EMPLOYEE_TIME_EXTERNAL_CODE, EmployeeTimeDeu.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeDeu.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeDeu> } = EmployeeTimeDeu._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeDeu> }, field: Selectable<EmployeeTimeDeu>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
