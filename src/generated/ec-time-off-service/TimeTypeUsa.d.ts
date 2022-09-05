import { TimeTypeUsaRequestBuilder } from './TimeTypeUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeTypeUSA" of service "SFOData".
 */
export declare class TimeTypeUsa extends Entity implements TimeTypeUsaType {
    /**
     * Technical entity name for TimeTypeUsa.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeUsa.
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
     * Returns an entity builder to construct instances `TimeTypeUsa`.
     * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
     */
    static builder(): EntityBuilderType<TimeTypeUsa, TimeTypeUsaTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeUsa` entity type.
     * @returns A `TimeTypeUsa` request builder.
     */
    static requestBuilder(): TimeTypeUsaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
     */
    static customField(fieldName: string): CustomField<TimeTypeUsa>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeTypeUsaType {
    timeTypeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    sicknessVariant?: string;
}
export interface TimeTypeUsaTypeForceMandatory {
    timeTypeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    sicknessVariant: string;
}
export declare namespace TimeTypeUsa {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeUsa>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeTypeUsa>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeTypeUsa>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<TimeTypeUsa>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeTypeUsa>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeUsa>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeUsa>;
    /**
     * Static representation of the [[sicknessVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SICKNESS_VARIANT: StringField<TimeTypeUsa>;
    /**
     * All fields of the TimeTypeUsa entity.
     */
    const _allFields: Array<StringField<TimeTypeUsa> | DateField<TimeTypeUsa> | BigNumberField<TimeTypeUsa>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeTypeUsa>;
    /**
     * All key fields of the TimeTypeUsa entity.
     */
    const _keyFields: Array<Selectable<TimeTypeUsa>>;
    /**
     * Mapping of all key field names to the respective static field property TimeTypeUsa.
     */
    const _keys: {
        [keys: string]: Selectable<TimeTypeUsa>;
    };
}
//# sourceMappingURL=TimeTypeUsa.d.ts.map