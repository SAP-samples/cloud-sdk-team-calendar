import { TimeTypeCanRequestBuilder } from './TimeTypeCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeTypeCAN" of service "SFOData".
 */
export declare class TimeTypeCan extends Entity implements TimeTypeCanType {
    /**
     * Technical entity name for TimeTypeCan.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeCan.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Type_External Code.
     * Maximum length: 128.
     */
    timeTypeExternalCode: string;
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
     * externalCode.
     */
    externalCode: BigNumber;
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
     * Sickness Variant.
     * Maximum length: 128.
     * @nullable
     */
    sicknessVariant?: string;
    /**
     * Returns an entity builder to construct instances `TimeTypeCan`.
     * @returns A builder that constructs instances of entity type `TimeTypeCan`.
     */
    static builder(): EntityBuilderType<TimeTypeCan, TimeTypeCanTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeCan` entity type.
     * @returns A `TimeTypeCan` request builder.
     */
    static requestBuilder(): TimeTypeCanRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeCan`.
     */
    static customField(fieldName: string): CustomField<TimeTypeCan>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeTypeCanType {
    timeTypeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    sicknessVariant?: string;
}
export interface TimeTypeCanTypeForceMandatory {
    timeTypeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    sicknessVariant: string;
}
export declare namespace TimeTypeCan {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeCan>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeTypeCan>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeTypeCan>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<TimeTypeCan>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeTypeCan>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeCan>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeCan>;
    /**
     * Static representation of the [[sicknessVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SICKNESS_VARIANT: StringField<TimeTypeCan>;
    /**
     * All fields of the TimeTypeCan entity.
     */
    const _allFields: Array<StringField<TimeTypeCan> | DateField<TimeTypeCan> | BigNumberField<TimeTypeCan>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeTypeCan>;
    /**
     * All key fields of the TimeTypeCan entity.
     */
    const _keyFields: Array<Selectable<TimeTypeCan>>;
    /**
     * Mapping of all key field names to the respective static field property TimeTypeCan.
     */
    const _keys: {
        [keys: string]: Selectable<TimeTypeCan>;
    };
}
//# sourceMappingURL=TimeTypeCan.d.ts.map