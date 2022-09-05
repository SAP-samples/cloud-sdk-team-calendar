import { EmpTimeAccountBalanceRequestBuilder } from './EmpTimeAccountBalanceRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpTimeAccountBalance" of service "SFOData".
 */
export declare class EmpTimeAccountBalance extends Entity implements EmpTimeAccountBalanceType {
    /**
     * Technical entity name for EmpTimeAccountBalance.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpTimeAccountBalance.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    timeAccount: string;
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
    static builder(): EntityBuilderType<EmpTimeAccountBalance, EmpTimeAccountBalanceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpTimeAccountBalance` entity type.
     * @returns A `EmpTimeAccountBalance` request builder.
     */
    static requestBuilder(): EmpTimeAccountBalanceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpTimeAccountBalance`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpTimeAccountBalance`.
     */
    static customField(fieldName: string): CustomField<EmpTimeAccountBalance>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace EmpTimeAccountBalance {
    /**
     * Static representation of the [[accountClosed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CLOSED: BooleanField<EmpTimeAccountBalance>;
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE: BigNumberField<EmpTimeAccountBalance>;
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT: StringField<EmpTimeAccountBalance>;
    /**
     * Static representation of the [[timeAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_TYPE: StringField<EmpTimeAccountBalance>;
    /**
     * Static representation of the [[timeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_UNIT: StringField<EmpTimeAccountBalance>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpTimeAccountBalance>;
    /**
     * All fields of the EmpTimeAccountBalance entity.
     */
    const _allFields: Array<BooleanField<EmpTimeAccountBalance> | BigNumberField<EmpTimeAccountBalance> | StringField<EmpTimeAccountBalance>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpTimeAccountBalance>;
    /**
     * All key fields of the EmpTimeAccountBalance entity.
     */
    const _keyFields: Array<Selectable<EmpTimeAccountBalance>>;
    /**
     * Mapping of all key field names to the respective static field property EmpTimeAccountBalance.
     */
    const _keys: {
        [keys: string]: Selectable<EmpTimeAccountBalance>;
    };
}
//# sourceMappingURL=EmpTimeAccountBalance.d.ts.map