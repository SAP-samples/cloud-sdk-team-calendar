import { TimeTypeAusRequestBuilder } from './TimeTypeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeTypeAUS" of service "SFOData".
 */
export declare class TimeTypeAus extends Entity implements TimeTypeAusType {
    /**
     * Technical entity name for TimeTypeAus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeAus.
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
     * Advance Leave Payment Allowed.
     * @nullable
     */
    advanceLeavePaymentAllowed?: boolean;
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
     * Split Across Financial Year Allowed.
     * @nullable
     */
    splitPaymentAcrossFinancialYearAllowed?: boolean;
    /**
     * Returns an entity builder to construct instances `TimeTypeAus`.
     * @returns A builder that constructs instances of entity type `TimeTypeAus`.
     */
    static builder(): EntityBuilderType<TimeTypeAus, TimeTypeAusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeAus` entity type.
     * @returns A `TimeTypeAus` request builder.
     */
    static requestBuilder(): TimeTypeAusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeAus`.
     */
    static customField(fieldName: string): CustomField<TimeTypeAus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeTypeAusType {
    timeTypeExternalCode: string;
    advanceLeavePaymentAllowed?: boolean;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    splitPaymentAcrossFinancialYearAllowed?: boolean;
}
export interface TimeTypeAusTypeForceMandatory {
    timeTypeExternalCode: string;
    advanceLeavePaymentAllowed: boolean;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    splitPaymentAcrossFinancialYearAllowed: boolean;
}
export declare namespace TimeTypeAus {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_EXTERNAL_CODE: StringField<TimeTypeAus>;
    /**
     * Static representation of the [[advanceLeavePaymentAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_LEAVE_PAYMENT_ALLOWED: BooleanField<TimeTypeAus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeTypeAus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeTypeAus>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<TimeTypeAus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeTypeAus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeAus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeAus>;
    /**
     * Static representation of the [[splitPaymentAcrossFinancialYearAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED: BooleanField<TimeTypeAus>;
    /**
     * All fields of the TimeTypeAus entity.
     */
    const _allFields: Array<StringField<TimeTypeAus> | BooleanField<TimeTypeAus> | DateField<TimeTypeAus> | BigNumberField<TimeTypeAus>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeTypeAus>;
    /**
     * All key fields of the TimeTypeAus entity.
     */
    const _keyFields: Array<Selectable<TimeTypeAus>>;
    /**
     * Mapping of all key field names to the respective static field property TimeTypeAus.
     */
    const _keys: {
        [keys: string]: Selectable<TimeTypeAus>;
    };
}
//# sourceMappingURL=TimeTypeAus.d.ts.map