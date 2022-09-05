import { TimeAccountSnapshotRequestBuilder } from './TimeAccountSnapshotRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountSnapshot" of service "SFOData".
 */
export declare class TimeAccountSnapshot extends Entity implements TimeAccountSnapshotType {
    /**
     * Technical entity name for TimeAccountSnapshot.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountSnapshot.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    externalCode: string;
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
    accountTypeNav: TimeAccountType_1;
    /**
     * Returns an entity builder to construct instances `TimeAccountSnapshot`.
     * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
     */
    static builder(): EntityBuilderType<TimeAccountSnapshot, TimeAccountSnapshotTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountSnapshot` entity type.
     * @returns A `TimeAccountSnapshot` request builder.
     */
    static requestBuilder(): TimeAccountSnapshotRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountSnapshot`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountSnapshot`.
     */
    static customField(fieldName: string): CustomField<TimeAccountSnapshot>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace TimeAccountSnapshot {
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[approvedAbsenceBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVED_ABSENCE_BALANCE: BigNumberField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[approvedAbsenceBalanceAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED: BigNumberField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[asOfAccountingPeriodEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AS_OF_ACCOUNTING_PERIOD_END: BooleanField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[asOfPayPeriodEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AS_OF_PAY_PERIOD_END: BooleanField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE: BigNumberField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[balanceAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE_ACCRUAL_SEPARATED: BigNumberField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[balanceEffectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE_EFFECTIVE_DATE: DateField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[entityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_ID: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[outdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTDATED: BooleanField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TimeAccountSnapshot>;
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccountSnapshot, TimeAccountType_1>;
    /**
     * All fields of the TimeAccountSnapshot entity.
     */
    const _allFields: Array<StringField<TimeAccountSnapshot> | BigNumberField<TimeAccountSnapshot> | BooleanField<TimeAccountSnapshot> | DateField<TimeAccountSnapshot> | OneToOneLink<TimeAccountSnapshot, TimeAccountType_1>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountSnapshot>;
    /**
     * All key fields of the TimeAccountSnapshot entity.
     */
    const _keyFields: Array<Selectable<TimeAccountSnapshot>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountSnapshot.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountSnapshot>;
    };
}
//# sourceMappingURL=TimeAccountSnapshot.d.ts.map