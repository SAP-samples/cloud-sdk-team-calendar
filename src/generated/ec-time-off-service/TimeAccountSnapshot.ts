/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountSnapshotRequestBuilder } from './TimeAccountSnapshotRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountSnapshot" of service "SFOData".
 */
export class TimeAccountSnapshot extends Entity implements TimeAccountSnapshotType {
  /**
   * Technical entity name for TimeAccountSnapshot.
   */
  static _entityName = 'TimeAccountSnapshot';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountSnapshot.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  accountType?: string;
  /**
   * Balance Not Considering Pending Requests.
   * @nullable
   */
  approvedAbsenceBalance?: BigNumber;
  /**
   * Balance Accrual Separated Not Considering Pending Requests.
   * @nullable
   */
  approvedAbsenceBalanceAccrualSeparated?: BigNumber;
  /**
   * As of Accounting Period End.
   * @nullable
   */
  asOfAccountingPeriodEnd?: boolean;
  /**
   * As of Pay Period End.
   * @nullable
   */
  asOfPayPeriodEnd?: boolean;
  /**
   * Balance.
   * @nullable
   */
  balance?: BigNumber;
  /**
   * Balance Accrual Separated.
   * @nullable
   */
  balanceAccrualSeparated?: BigNumber;
  /**
   * Balance Effective Date.
   * @nullable
   */
  balanceEffectiveDate?: Moment;
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
   * Entity Id.
   * Maximum length: 255.
   * @nullable
   */
  entityId?: string;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Outdated.
   * @nullable
   */
  outdated?: boolean;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[TimeAccountType_1]] entity.
   */
  accountTypeNav!: TimeAccountType_1;

  /**
   * Returns an entity builder to construct instances `TimeAccountSnapshot`.
   * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
   */
  static builder(): EntityBuilderType<TimeAccountSnapshot, TimeAccountSnapshotTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountSnapshot);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountSnapshot` entity type.
   * @returns A `TimeAccountSnapshot` request builder.
   */
  static requestBuilder(): TimeAccountSnapshotRequestBuilder {
    return new TimeAccountSnapshotRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountSnapshot`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
   */
  static customField(fieldName: string): CustomField<TimeAccountSnapshot> {
    return Entity.customFieldSelector(fieldName, TimeAccountSnapshot);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

export interface TimeAccountSnapshotType {
  accountType?: string;
  approvedAbsenceBalance?: BigNumber;
  approvedAbsenceBalanceAccrualSeparated?: BigNumber;
  asOfAccountingPeriodEnd?: boolean;
  asOfPayPeriodEnd?: boolean;
  balance?: BigNumber;
  balanceAccrualSeparated?: BigNumber;
  balanceEffectiveDate?: Moment;
  createdBy?: string;
  createdDateTime?: Moment;
  entityId?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  outdated?: boolean;
  unit?: string;
  userId?: string;
  accountTypeNav: TimeAccountType_1Type;
}

export interface TimeAccountSnapshotTypeForceMandatory {
  accountType: string;
  approvedAbsenceBalance: BigNumber;
  approvedAbsenceBalanceAccrualSeparated: BigNumber;
  asOfAccountingPeriodEnd: boolean;
  asOfPayPeriodEnd: boolean;
  balance: BigNumber;
  balanceAccrualSeparated: BigNumber;
  balanceEffectiveDate: Moment;
  createdBy: string;
  createdDateTime: Moment;
  entityId: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  outdated: boolean;
  unit: string;
  userId: string;
  accountTypeNav: TimeAccountType_1Type;
}

export namespace TimeAccountSnapshot {
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<TimeAccountSnapshot> = new StringField('accountType', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[approvedAbsenceBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVED_ABSENCE_BALANCE: BigNumberField<TimeAccountSnapshot> = new BigNumberField('approvedAbsenceBalance', TimeAccountSnapshot, 'Edm.Decimal');
  /**
   * Static representation of the [[approvedAbsenceBalanceAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED: BigNumberField<TimeAccountSnapshot> = new BigNumberField('approvedAbsenceBalanceAccrualSeparated', TimeAccountSnapshot, 'Edm.Decimal');
  /**
   * Static representation of the [[asOfAccountingPeriodEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AS_OF_ACCOUNTING_PERIOD_END: BooleanField<TimeAccountSnapshot> = new BooleanField('asOfAccountingPeriodEnd', TimeAccountSnapshot, 'Edm.Boolean');
  /**
   * Static representation of the [[asOfPayPeriodEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AS_OF_PAY_PERIOD_END: BooleanField<TimeAccountSnapshot> = new BooleanField('asOfPayPeriodEnd', TimeAccountSnapshot, 'Edm.Boolean');
  /**
   * Static representation of the [[balance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE: BigNumberField<TimeAccountSnapshot> = new BigNumberField('balance', TimeAccountSnapshot, 'Edm.Decimal');
  /**
   * Static representation of the [[balanceAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_ACCRUAL_SEPARATED: BigNumberField<TimeAccountSnapshot> = new BigNumberField('balanceAccrualSeparated', TimeAccountSnapshot, 'Edm.Decimal');
  /**
   * Static representation of the [[balanceEffectiveDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_EFFECTIVE_DATE: DateField<TimeAccountSnapshot> = new DateField('balanceEffectiveDate', TimeAccountSnapshot, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountSnapshot> = new StringField('createdBy', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountSnapshot> = new DateField('createdDateTime', TimeAccountSnapshot, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_ID: StringField<TimeAccountSnapshot> = new StringField('entityId', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountSnapshot> = new StringField('externalCode', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountSnapshot> = new StringField('lastModifiedBy', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountSnapshot> = new DateField('lastModifiedDateTime', TimeAccountSnapshot, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountSnapshot> = new StringField('mdfSystemRecordStatus', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[outdated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTDATED: BooleanField<TimeAccountSnapshot> = new BooleanField('outdated', TimeAccountSnapshot, 'Edm.Boolean');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<TimeAccountSnapshot> = new StringField('unit', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TimeAccountSnapshot> = new StringField('userId', TimeAccountSnapshot, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccountSnapshot, TimeAccountType_1> = new OneToOneLink('accountTypeNav', TimeAccountSnapshot, TimeAccountType_1);
  /**
   * All fields of the TimeAccountSnapshot entity.
   */
  export const _allFields: Array<StringField<TimeAccountSnapshot> | BigNumberField<TimeAccountSnapshot> | BooleanField<TimeAccountSnapshot> | DateField<TimeAccountSnapshot> | OneToOneLink<TimeAccountSnapshot, TimeAccountType_1>> = [
    TimeAccountSnapshot.ACCOUNT_TYPE,
    TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE,
    TimeAccountSnapshot.APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED,
    TimeAccountSnapshot.AS_OF_ACCOUNTING_PERIOD_END,
    TimeAccountSnapshot.AS_OF_PAY_PERIOD_END,
    TimeAccountSnapshot.BALANCE,
    TimeAccountSnapshot.BALANCE_ACCRUAL_SEPARATED,
    TimeAccountSnapshot.BALANCE_EFFECTIVE_DATE,
    TimeAccountSnapshot.CREATED_BY,
    TimeAccountSnapshot.CREATED_DATE_TIME,
    TimeAccountSnapshot.ENTITY_ID,
    TimeAccountSnapshot.EXTERNAL_CODE,
    TimeAccountSnapshot.LAST_MODIFIED_BY,
    TimeAccountSnapshot.LAST_MODIFIED_DATE_TIME,
    TimeAccountSnapshot.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountSnapshot.OUTDATED,
    TimeAccountSnapshot.UNIT,
    TimeAccountSnapshot.USER_ID,
    TimeAccountSnapshot.ACCOUNT_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountSnapshot> = new AllFields('*', TimeAccountSnapshot);
  /**
   * All key fields of the TimeAccountSnapshot entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountSnapshot>> = [TimeAccountSnapshot.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountSnapshot.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountSnapshot> } = TimeAccountSnapshot._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountSnapshot> }, field: Selectable<TimeAccountSnapshot>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
