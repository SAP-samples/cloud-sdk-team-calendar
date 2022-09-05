import { EmployeeTimePolRequestBuilder } from './EmployeeTimePolRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimePOL" of service "SFOData".
 */
export declare class EmployeeTimePol extends Entity implements EmployeeTimePolType {
    /**
     * Technical entity name for EmployeeTimePol.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimePol.
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
     * ZLA Code.
     * Maximum length: 8.
     * @nullable
     */
    absenceCode?: string;
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
     * ZLA Delivery Date.
     * @nullable
     */
    zlaDeliveryDate?: Moment;
    /**
     * ZLA Document Number.
     * Maximum length: 9.
     * @nullable
     */
    zlaDocumentNumber?: string;
    /**
     * ZLA Issue Date.
     * @nullable
     */
    zlaIssueDate?: Moment;
    /**
     * Returns an entity builder to construct instances `EmployeeTimePol`.
     * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
     */
    static builder(): EntityBuilderType<EmployeeTimePol, EmployeeTimePolTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimePol` entity type.
     * @returns A `EmployeeTimePol` request builder.
     */
    static requestBuilder(): EmployeeTimePolRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimePol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimePol`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimePol>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmployeeTimePolType {
    employeeTimeExternalCode: string;
    absenceCode?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    zlaDeliveryDate?: Moment;
    zlaDocumentNumber?: string;
    zlaIssueDate?: Moment;
}
export interface EmployeeTimePolTypeForceMandatory {
    employeeTimeExternalCode: string;
    absenceCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    zlaDeliveryDate: Moment;
    zlaDocumentNumber: string;
    zlaIssueDate: Moment;
}
export declare namespace EmployeeTimePol {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[absenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSENCE_CODE: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimePol>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmployeeTimePol>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimePol>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[zlaDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZLA_DELIVERY_DATE: DateField<EmployeeTimePol>;
    /**
     * Static representation of the [[zlaDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZLA_DOCUMENT_NUMBER: StringField<EmployeeTimePol>;
    /**
     * Static representation of the [[zlaIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZLA_ISSUE_DATE: DateField<EmployeeTimePol>;
    /**
     * All fields of the EmployeeTimePol entity.
     */
    const _allFields: Array<StringField<EmployeeTimePol> | DateField<EmployeeTimePol> | BigNumberField<EmployeeTimePol>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimePol>;
    /**
     * All key fields of the EmployeeTimePol entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimePol>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimePol.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimePol>;
    };
}
//# sourceMappingURL=EmployeeTimePol.d.ts.map