import { EmployeeTimeCanRequestBuilder } from './EmployeeTimeCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeCAN" of service "SFOData".
 */
export declare class EmployeeTimeCan extends Entity implements EmployeeTimeCanType {
    /**
     * Technical entity name for EmployeeTimeCan.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeCan.
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
     * Disability Period One End Date.
     * @nullable
     */
    disabilityPeriodOneEndDate?: Moment;
    /**
     * Disability Period Three End Date.
     * @nullable
     */
    disabilityPeriodThreeEndDate?: Moment;
    /**
     * Disability Period Two End Date.
     * @nullable
     */
    disabilityPeriodTwoEndDate?: Moment;
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
     * Returns an entity builder to construct instances `EmployeeTimeCan`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
     */
    static builder(): EntityBuilderType<EmployeeTimeCan, EmployeeTimeCanTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeCan` entity type.
     * @returns A `EmployeeTimeCan` request builder.
     */
    static requestBuilder(): EmployeeTimeCanRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeCan`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeCan>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmployeeTimeCanType {
    employeeTimeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    disabilityPeriodOneEndDate?: Moment;
    disabilityPeriodThreeEndDate?: Moment;
    disabilityPeriodTwoEndDate?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
}
export interface EmployeeTimeCanTypeForceMandatory {
    employeeTimeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    disabilityPeriodOneEndDate: Moment;
    disabilityPeriodThreeEndDate: Moment;
    disabilityPeriodTwoEndDate: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
}
export declare namespace EmployeeTimeCan {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeCan>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeCan>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeCan>;
    /**
     * Static representation of the [[disabilityPeriodOneEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABILITY_PERIOD_ONE_END_DATE: DateField<EmployeeTimeCan>;
    /**
     * Static representation of the [[disabilityPeriodThreeEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABILITY_PERIOD_THREE_END_DATE: DateField<EmployeeTimeCan>;
    /**
     * Static representation of the [[disabilityPeriodTwoEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABILITY_PERIOD_TWO_END_DATE: DateField<EmployeeTimeCan>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmployeeTimeCan>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeCan>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeCan>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeCan>;
    /**
     * All fields of the EmployeeTimeCan entity.
     */
    const _allFields: Array<StringField<EmployeeTimeCan> | DateField<EmployeeTimeCan> | BigNumberField<EmployeeTimeCan>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeCan>;
    /**
     * All key fields of the EmployeeTimeCan entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeCan>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeCan.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeCan>;
    };
}
//# sourceMappingURL=EmployeeTimeCan.d.ts.map