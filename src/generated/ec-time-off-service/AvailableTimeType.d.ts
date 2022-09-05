import { AvailableTimeTypeRequestBuilder } from './AvailableTimeTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AvailableTimeType" of service "SFOData".
 */
export declare class AvailableTimeType extends Entity implements AvailableTimeTypeType {
    /**
     * Technical entity name for AvailableTimeType.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AvailableTimeType.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Profile_External Code.
     * Maximum length: 128.
     */
    timeTypeProfileExternalCode: string;
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
     * Enabled in employee self-service scenario.
     * @nullable
     */
    enabledInEssScenario?: boolean;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Favorite Time Type.
     * @nullable
     */
    favoriteTimeType?: boolean;
    /**
     * Hide Account Balance.
     * @nullable
     */
    hideAccountBalance?: boolean;
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
     * Time Type.
     * Maximum length: 128.
     * @nullable
     */
    timeType?: string;
    /**
     * One-to-one navigation property to the [[TimeType]] entity.
     */
    timeTypeNav: TimeType;
    /**
     * Returns an entity builder to construct instances `AvailableTimeType`.
     * @returns A builder that constructs instances of entity type `AvailableTimeType`.
     */
    static builder(): EntityBuilderType<AvailableTimeType, AvailableTimeTypeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AvailableTimeType` entity type.
     * @returns A `AvailableTimeType` request builder.
     */
    static requestBuilder(): AvailableTimeTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AvailableTimeType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AvailableTimeType`.
     */
    static customField(fieldName: string): CustomField<AvailableTimeType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TimeType, TimeTypeType } from './TimeType';
export interface AvailableTimeTypeType {
    timeTypeProfileExternalCode: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    enabledInEssScenario?: boolean;
    externalCode: string;
    favoriteTimeType?: boolean;
    hideAccountBalance?: boolean;
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
    timeType?: string;
    timeTypeNav: TimeTypeType;
}
export interface AvailableTimeTypeTypeForceMandatory {
    timeTypeProfileExternalCode: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    enabledInEssScenario: boolean;
    externalCode: string;
    favoriteTimeType: boolean;
    hideAccountBalance: boolean;
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
    timeType: string;
    timeTypeNav: TimeTypeType;
}
export declare namespace AvailableTimeType {
    /**
     * Static representation of the [[timeTypeProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_PROFILE_EXTERNAL_CODE: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[enabledInEssScenario]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENABLED_IN_ESS_SCENARIO: BooleanField<AvailableTimeType>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[favoriteTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAVORITE_TIME_TYPE: BooleanField<AvailableTimeType>;
    /**
     * Static representation of the [[hideAccountBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIDE_ACCOUNT_BALANCE: BooleanField<AvailableTimeType>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<AvailableTimeType>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<AvailableTimeType>;
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE: StringField<AvailableTimeType>;
    /**
     * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_NAV: OneToOneLink<AvailableTimeType, TimeType>;
    /**
     * All fields of the AvailableTimeType entity.
     */
    const _allFields: Array<StringField<AvailableTimeType> | DateField<AvailableTimeType> | BooleanField<AvailableTimeType> | BigNumberField<AvailableTimeType> | OneToOneLink<AvailableTimeType, TimeType>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AvailableTimeType>;
    /**
     * All key fields of the AvailableTimeType entity.
     */
    const _keyFields: Array<Selectable<AvailableTimeType>>;
    /**
     * Mapping of all key field names to the respective static field property AvailableTimeType.
     */
    const _keys: {
        [keys: string]: Selectable<AvailableTimeType>;
    };
}
//# sourceMappingURL=AvailableTimeType.d.ts.map