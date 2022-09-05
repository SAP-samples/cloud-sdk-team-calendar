import { AccrualCalculationBaseRequestBuilder } from './AccrualCalculationBaseRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AccrualCalculationBase" of service "SFOData".
 */
export declare class AccrualCalculationBase extends Entity implements AccrualCalculationBaseType {
    /**
     * Technical entity name for AccrualCalculationBase.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccrualCalculationBase.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Actual Quantity.
     * @nullable
     */
    actualQuantity?: BigNumber;
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
    createdDate?: Moment;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
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
    lastModifiedDate?: Moment;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * lastModifiedDate.
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
     * Quantity 1.
     * @nullable
     */
    quantity1?: BigNumber;
    /**
     * Quantity 2.
     * @nullable
     */
    quantity2?: BigNumber;
    /**
     * Quantity 3.
     * @nullable
     */
    quantity3?: BigNumber;
    /**
     * Quantity 4.
     * @nullable
     */
    quantity4?: BigNumber;
    /**
     * Quantity 5.
     * @nullable
     */
    quantity5?: BigNumber;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * Returns an entity builder to construct instances `AccrualCalculationBase`.
     * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
     */
    static builder(): EntityBuilderType<AccrualCalculationBase, AccrualCalculationBaseTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AccrualCalculationBase` entity type.
     * @returns A `AccrualCalculationBase` request builder.
     */
    static requestBuilder(): AccrualCalculationBaseRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualCalculationBase`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
     */
    static customField(fieldName: string): CustomField<AccrualCalculationBase>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AccrualCalculationBaseType {
    actualQuantity?: BigNumber;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    date?: Moment;
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
    quantity1?: BigNumber;
    quantity2?: BigNumber;
    quantity3?: BigNumber;
    quantity4?: BigNumber;
    quantity5?: BigNumber;
    userId?: string;
}
export interface AccrualCalculationBaseTypeForceMandatory {
    actualQuantity: BigNumber;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    date: Moment;
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
    quantity1: BigNumber;
    quantity2: BigNumber;
    quantity3: BigNumber;
    quantity4: BigNumber;
    quantity5: BigNumber;
    userId: string;
}
export declare namespace AccrualCalculationBase {
    /**
     * Static representation of the [[actualQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTUAL_QUANTITY: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[quantity1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_1: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[quantity2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_2: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[quantity3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_3: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[quantity4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_4: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[quantity5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_5: BigNumberField<AccrualCalculationBase>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<AccrualCalculationBase>;
    /**
     * All fields of the AccrualCalculationBase entity.
     */
    const _allFields: Array<BigNumberField<AccrualCalculationBase> | StringField<AccrualCalculationBase> | DateField<AccrualCalculationBase>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AccrualCalculationBase>;
    /**
     * All key fields of the AccrualCalculationBase entity.
     */
    const _keyFields: Array<Selectable<AccrualCalculationBase>>;
    /**
     * Mapping of all key field names to the respective static field property AccrualCalculationBase.
     */
    const _keys: {
        [keys: string]: Selectable<AccrualCalculationBase>;
    };
}
//# sourceMappingURL=AccrualCalculationBase.d.ts.map