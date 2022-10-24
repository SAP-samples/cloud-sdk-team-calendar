/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "EmpTimeAccountBalance" of service "ECTimeOff".
 */
export class EmpTimeAccountBalance<T extends DeSerializers = DefaultDeSerializers> extends Entity implements EmpTimeAccountBalanceType<T> {
  /**
   * Technical entity name for EmpTimeAccountBalance.
   */
  static _entityName = 'EmpTimeAccountBalance';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmpTimeAccountBalance entity
   */
  static _keys = ['timeAccount'];
  /**
   * Account Closed.
   * @nullable
   */
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Balance.
   * @nullable
   */
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Time Account.
   */
  timeAccount!: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Account Type.
   * @nullable
   */
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Unit.
   * @nullable
   */
  timeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
}

export interface EmpTimeAccountBalanceType<T extends DeSerializers = DefaultDeSerializers> {
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  timeAccount: DeserializedType<T, 'Edm.String'>;
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  timeUnit?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
}
