import { TimeAccountRequestBuilder } from './TimeAccountRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccount" of service "SFOData".
 */
export declare class TimeAccount extends Entity implements TimeAccountType {
    /**
     * Technical entity name for TimeAccount.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccount.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Closed.
     * @nullable
     */
    accountClosed?: boolean;
    /**
     * Time Account Type.
     * Maximum length: 128.
     * @nullable
     */
    accountType?: string;
    /**
     * Booking Possible Until.
     * @nullable
     */
    bookingEndDate?: Moment;
    /**
     * Booking Possible From.
     * @nullable
     */
    bookingStartDate?: Moment;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDate?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Account Valid Until.
     * @nullable
     */
    endDate?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDate?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
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
     * Account Valid From.
     * @nullable
     */
    startDate?: Moment;
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
     * One-to-many navigation property to the [[TimeAccountDetail]] entity.
     */
    timeAccountDetails: TimeAccountDetail[];
    /**
     * Returns an entity builder to construct instances `TimeAccount`.
     * @returns A builder that constructs instances of entity type `TimeAccount`.
     */
    static builder(): EntityBuilderType<TimeAccount, TimeAccountTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccount` entity type.
     * @returns A `TimeAccount` request builder.
     */
    static requestBuilder(): TimeAccountRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccount`.
     */
    static customField(fieldName: string): CustomField<TimeAccount>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';
import { TimeAccountDetail, TimeAccountDetailType } from './TimeAccountDetail';
export interface TimeAccountType {
    accountClosed?: boolean;
    accountType?: string;
    bookingEndDate?: Moment;
    bookingStartDate?: Moment;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    endDate?: Moment;
    externalCode: string;
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
    startDate?: Moment;
    userId?: string;
    accountTypeNav: TimeAccountType_1Type;
    timeAccountDetails: TimeAccountDetailType[];
}
export interface TimeAccountTypeForceMandatory {
    accountClosed: boolean;
    accountType: string;
    bookingEndDate: Moment;
    bookingStartDate: Moment;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    endDate: Moment;
    externalCode: string;
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
    startDate: Moment;
    userId: string;
    accountTypeNav: TimeAccountType_1Type;
    timeAccountDetails: TimeAccountDetailType[];
}
export declare namespace TimeAccount {
    /**
     * Static representation of the [[accountClosed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CLOSED: BooleanField<TimeAccount>;
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE: StringField<TimeAccount>;
    /**
     * Static representation of the [[bookingEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_END_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[bookingStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_START_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccount>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccount>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccount>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccount>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccount>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccount>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccount>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<TimeAccount>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TimeAccount>;
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccount, TimeAccountType_1>;
    /**
     * Static representation of the one-to-many navigation property [[timeAccountDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_DETAILS: Link<TimeAccount, TimeAccountDetail>;
    /**
     * All fields of the TimeAccount entity.
     */
    const _allFields: Array<BooleanField<TimeAccount> | StringField<TimeAccount> | DateField<TimeAccount> | BigNumberField<TimeAccount> | OneToOneLink<TimeAccount, TimeAccountType_1> | Link<TimeAccount, TimeAccountDetail>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccount>;
    /**
     * All key fields of the TimeAccount entity.
     */
    const _keyFields: Array<Selectable<TimeAccount>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccount.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccount>;
    };
}
//# sourceMappingURL=TimeAccount.d.ts.map