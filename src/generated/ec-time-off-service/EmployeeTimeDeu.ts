/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';

/**
 * This class represents the entity "EmployeeTimeDEU" of service "ECTimeOff".
 */
export class EmployeeTimeDeu<T extends DeSerializers = DefaultDeSerializers> extends Entity implements EmployeeTimeDeuType<T> {
  /**
   * Technical entity name for EmployeeTimeDeu.
   */
  static _entityName = 'EmployeeTimeDEU';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimeDeu entity
   */
  static _keys = ['EmployeeTime_externalCode', 'externalCode'];
  /**
   * Employee Time_External Code.
   * Maximum length: 128.
   */
  employeeTimeExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Days Credited for Continued Pay.
   * @nullable
   */
  continuedPayCreditedDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * End of Continued Pay.
   * @nullable
   */
  continuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * externalCode.
   */
  externalCode!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Identical Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Overlapping Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  overlappingSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End of Sick Pay Supplement.
   * @nullable
   */
  paySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Start Date of Sick Pay Supplement.
   * @nullable
   */
  paySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Certified Start Date of Sickness.
   * @nullable
   */
  sicknessCertificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  identicalSicknessGroupNav?: EmployeeTimeGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  overlappingSicknessGroupNav?: EmployeeTimeGroup<T> | null;
}

export interface EmployeeTimeDeuType<T extends DeSerializers = DefaultDeSerializers> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  continuedPayCreditedDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  continuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  overlappingSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  paySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  paySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  sicknessCertificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  identicalSicknessGroupNav?: EmployeeTimeGroupType<T> | null;
  overlappingSicknessGroupNav?: EmployeeTimeGroupType<T> | null;
}
