/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpTimeAccountBalanceRequestBuilder } from './EmpTimeAccountBalanceRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpTimeAccountBalance" of service "SFOData".
 */
export class EmpTimeAccountBalance extends Entity implements EmpTimeAccountBalanceType {
  /**
   * Technical entity name for EmpTimeAccountBalance.
   */
  static _entityName = 'EmpTimeAccountBalance';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpTimeAccountBalance.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Account Closed.
   * @nullable
   */
  accountClosed?: boolean;
  /**
   * Balance.
   * @nullable
   */
  balance?: BigNumber;
  /**
   * Time Account.
   */
  timeAccount!: string;
  /**
   * Time Account Type.
   * @nullable
   */
  timeAccountType?: string;
  /**
   * Time Unit.
   * @nullable
   */
  timeUnit?: string;
  /**
   * User Id.
   * @nullable
   */
  userId?: string;

  /**
   * Returns an entity builder to construct instances `EmpTimeAccountBalance`.
   * @returns A builder that constructs instances of entity type `EmpTimeAccountBalance`.
   */
  static builder(): EntityBuilderType<EmpTimeAccountBalance, EmpTimeAccountBalanceTypeForceMandatory> {
    return Entity.entityBuilder(EmpTimeAccountBalance);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpTimeAccountBalance` entity type.
   * @returns A `EmpTimeAccountBalance` request builder.
   */
  static requestBuilder(): EmpTimeAccountBalanceRequestBuilder {
    return new EmpTimeAccountBalanceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpTimeAccountBalance`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpTimeAccountBalance`.
   */
  static customField(fieldName: string): CustomField<EmpTimeAccountBalance> {
    return Entity.customFieldSelector(fieldName, EmpTimeAccountBalance);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmpTimeAccountBalanceType {
  accountClosed?: boolean;
  balance?: BigNumber;
  timeAccount: string;
  timeAccountType?: string;
  timeUnit?: string;
  userId?: string;
}

export interface EmpTimeAccountBalanceTypeForceMandatory {
  accountClosed: boolean;
  balance: BigNumber;
  timeAccount: string;
  timeAccountType: string;
  timeUnit: string;
  userId: string;
}

export namespace EmpTimeAccountBalance {
  /**
   * Static representation of the [[accountClosed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CLOSED: BooleanField<EmpTimeAccountBalance> = new BooleanField('accountClosed', EmpTimeAccountBalance, 'Edm.Boolean');
  /**
   * Static representation of the [[balance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE: BigNumberField<EmpTimeAccountBalance> = new BigNumberField('balance', EmpTimeAccountBalance, 'Edm.Decimal');
  /**
   * Static representation of the [[timeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT: StringField<EmpTimeAccountBalance> = new StringField('timeAccount', EmpTimeAccountBalance, 'Edm.String');
  /**
   * Static representation of the [[timeAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE: StringField<EmpTimeAccountBalance> = new StringField('timeAccountType', EmpTimeAccountBalance, 'Edm.String');
  /**
   * Static representation of the [[timeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_UNIT: StringField<EmpTimeAccountBalance> = new StringField('timeUnit', EmpTimeAccountBalance, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpTimeAccountBalance> = new StringField('userId', EmpTimeAccountBalance, 'Edm.String');
  /**
   * All fields of the EmpTimeAccountBalance entity.
   */
  export const _allFields: Array<BooleanField<EmpTimeAccountBalance> | BigNumberField<EmpTimeAccountBalance> | StringField<EmpTimeAccountBalance>> = [
    EmpTimeAccountBalance.ACCOUNT_CLOSED,
    EmpTimeAccountBalance.BALANCE,
    EmpTimeAccountBalance.TIME_ACCOUNT,
    EmpTimeAccountBalance.TIME_ACCOUNT_TYPE,
    EmpTimeAccountBalance.TIME_UNIT,
    EmpTimeAccountBalance.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpTimeAccountBalance> = new AllFields('*', EmpTimeAccountBalance);
  /**
   * All key fields of the EmpTimeAccountBalance entity.
   */
  export const _keyFields: Array<Selectable<EmpTimeAccountBalance>> = [EmpTimeAccountBalance.TIME_ACCOUNT];
  /**
   * Mapping of all key field names to the respective static field property EmpTimeAccountBalance.
   */
  export const _keys: { [keys: string]: Selectable<EmpTimeAccountBalance> } = EmpTimeAccountBalance._keyFields.reduce((acc: { [keys: string]: Selectable<EmpTimeAccountBalance> }, field: Selectable<EmpTimeAccountBalance>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
