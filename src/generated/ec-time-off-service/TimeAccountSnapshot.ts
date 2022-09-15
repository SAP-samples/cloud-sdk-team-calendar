/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

/**
 * This class represents the entity "TimeAccountSnapshot" of service "ECTimeOff".
 */
export class TimeAccountSnapshot<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TimeAccountSnapshotType<T> {
  /**
   * Technical entity name for TimeAccountSnapshot.
   */
  static _entityName = 'TimeAccountSnapshot';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountSnapshot entity
   */
  static _keys = ['externalCode'];
  /**
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  accountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance Not Considering Pending Requests.
   * @nullable
   */
  approvedAbsenceBalance?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Balance Accrual Separated Not Considering Pending Requests.
   * @nullable
   */
  approvedAbsenceBalanceAccrualSeparated?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * As of Accounting Period End.
   * @nullable
   */
  asOfAccountingPeriodEnd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * As of Pay Period End.
   * @nullable
   */
  asOfPayPeriodEnd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Balance.
   * @nullable
   */
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Balance Accrual Separated.
   * @nullable
   */
  balanceAccrualSeparated?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Balance Effective Date.
   * @nullable
   */
  balanceEffectiveDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * Entity Id.
   * Maximum length: 255.
   * @nullable
   */
  entityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Outdated.
   * @nullable
   */
  outdated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccountType_1} entity.
   */
  accountTypeNav?: TimeAccountType_1<T> | null;
}

export interface TimeAccountSnapshotType<T extends DeSerializers = DefaultDeSerializers> {
  accountType?: DeserializedType<T, 'Edm.String'> | null;
  approvedAbsenceBalance?: DeserializedType<T, 'Edm.Decimal'> | null;
  approvedAbsenceBalanceAccrualSeparated?: DeserializedType<T, 'Edm.Decimal'> | null;
  asOfAccountingPeriodEnd?: DeserializedType<T, 'Edm.Boolean'> | null;
  asOfPayPeriodEnd?: DeserializedType<T, 'Edm.Boolean'> | null;
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  balanceAccrualSeparated?: DeserializedType<T, 'Edm.Decimal'> | null;
  balanceEffectiveDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityId?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  outdated?: DeserializedType<T, 'Edm.Boolean'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  accountTypeNav?: TimeAccountType_1Type<T> | null;
}
