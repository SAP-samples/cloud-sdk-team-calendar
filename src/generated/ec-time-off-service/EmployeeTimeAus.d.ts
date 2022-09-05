import { EmployeeTimeAusRequestBuilder } from './EmployeeTimeAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeAUS" of service "SFOData".
 */
export declare class EmployeeTimeAus extends Entity implements EmployeeTimeAusType {
    /**
     * Technical entity name for EmployeeTimeAus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeAus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Time_External Code.
     * Maximum length: 128.
     */
    employeeTimeExternalCode: string;
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
     * Request Advance Pay.
     * @nullable
     */
    requestAdvanceLeavePayment?: boolean;
    /**
     * Split Pay Across Financial Year.
     * @nullable
     */
    splitPaymentAcrossFinancialYear?: boolean;
    /**
     * Returns an entity builder to construct instances `EmployeeTimeAus`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
     */
    static builder(): EntityBuilderType<EmployeeTimeAus, EmployeeTimeAusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeAus` entity type.
     * @returns A `EmployeeTimeAus` request builder.
     */
    static requestBuilder(): EmployeeTimeAusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeAus`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeAus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmployeeTimeAusType {
    employeeTimeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    requestAdvanceLeavePayment?: boolean;
    splitPaymentAcrossFinancialYear?: boolean;
}
export interface EmployeeTimeAusTypeForceMandatory {
    employeeTimeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    requestAdvanceLeavePayment: boolean;
    splitPaymentAcrossFinancialYear: boolean;
}
export declare namespace EmployeeTimeAus {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeAus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeAus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeAus>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmployeeTimeAus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeAus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeAus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeAus>;
    /**
     * Static representation of the [[requestAdvanceLeavePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_ADVANCE_LEAVE_PAYMENT: BooleanField<EmployeeTimeAus>;
    /**
     * Static representation of the [[splitPaymentAcrossFinancialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR: BooleanField<EmployeeTimeAus>;
    /**
     * All fields of the EmployeeTimeAus entity.
     */
    const _allFields: Array<StringField<EmployeeTimeAus> | DateField<EmployeeTimeAus> | BigNumberField<EmployeeTimeAus> | BooleanField<EmployeeTimeAus>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeAus>;
    /**
     * All key fields of the EmployeeTimeAus entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeAus>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeAus.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeAus>;
    };
}
//# sourceMappingURL=EmployeeTimeAus.d.ts.map