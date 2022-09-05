import { TimeAccountTypeAusRequestBuilder } from './TimeAccountTypeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountTypeAUS" of service "SFOData".
 */
export declare class TimeAccountTypeAus extends Entity implements TimeAccountTypeAusType {
    /**
     * Technical entity name for TimeAccountTypeAus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountTypeAus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Account Type_External Code.
     * Maximum length: 128.
     */
    timeAccountTypeExternalCode: string;
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
     * Include In Leave Loading Calculations.
     * @nullable
     */
    includeInLeaveLoadingCalculations?: boolean;
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
     * Returns an entity builder to construct instances `TimeAccountTypeAus`.
     * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
     */
    static builder(): EntityBuilderType<TimeAccountTypeAus, TimeAccountTypeAusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountTypeAus` entity type.
     * @returns A `TimeAccountTypeAus` request builder.
     */
    static requestBuilder(): TimeAccountTypeAusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountTypeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
     */
    static customField(fieldName: string): CustomField<TimeAccountTypeAus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeAccountTypeAusType {
    timeAccountTypeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    includeInLeaveLoadingCalculations?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
}
export interface TimeAccountTypeAusTypeForceMandatory {
    timeAccountTypeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    includeInLeaveLoadingCalculations: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
}
export declare namespace TimeAccountTypeAus {
    /**
     * Static representation of the [[timeAccountTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_TYPE_EXTERNAL_CODE: StringField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[includeInLeaveLoadingCalculations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_IN_LEAVE_LOADING_CALCULATIONS: BooleanField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountTypeAus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountTypeAus>;
    /**
     * All fields of the TimeAccountTypeAus entity.
     */
    const _allFields: Array<StringField<TimeAccountTypeAus> | DateField<TimeAccountTypeAus> | BigNumberField<TimeAccountTypeAus> | BooleanField<TimeAccountTypeAus>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountTypeAus>;
    /**
     * All key fields of the TimeAccountTypeAus entity.
     */
    const _keyFields: Array<Selectable<TimeAccountTypeAus>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountTypeAus.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountTypeAus>;
    };
}
//# sourceMappingURL=TimeAccountTypeAus.d.ts.map