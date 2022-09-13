/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "EmployeeTimePOL" of service "ECTimeOff".
 */
export class EmployeeTimePol<T extends DeSerializers = DefaultDeSerializers> extends Entity implements EmployeeTimePolType<T> {
  /**
   * Technical entity name for EmployeeTimePol.
   */
  static _entityName = 'EmployeeTimePOL';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimePol entity
   */
  static _keys = ['EmployeeTime_externalCode', 'externalCode'];
  /**
   * Employee Time_External Code.
   * Maximum length: 128.
   */
  employeeTimeExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * ZLA Code.
   * Maximum length: 8.
   * @nullable
   */
  absenceCode?: DeserializedType<T, 'Edm.String'> | null;
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
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * externalCode.
   */
  externalCode!: DeserializedType<T, 'Edm.Int64'>;
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
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ZLA Delivery Date.
   * @nullable
   */
  zlaDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * ZLA Document Number.
   * Maximum length: 9.
   * @nullable
   */
  zlaDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ZLA Issue Date.
   * @nullable
   */
  zlaIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}

export interface EmployeeTimePolType<T extends DeSerializers = DefaultDeSerializers> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  absenceCode?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  zlaDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  zlaDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  zlaIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
