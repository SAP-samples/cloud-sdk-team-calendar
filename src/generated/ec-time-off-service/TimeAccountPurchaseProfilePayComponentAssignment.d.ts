import { TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder } from './TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountPurchaseProfilePayComponentAssignment" of service "SFOData".
 */
export declare class TimeAccountPurchaseProfilePayComponentAssignment extends Entity implements TimeAccountPurchaseProfilePayComponentAssignmentType {
    /**
     * Technical entity name for TimeAccountPurchaseProfilePayComponentAssignment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPurchaseProfilePayComponentAssignment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Account Purchase Profile_External Code.
     * Maximum length: 128.
     */
    timeAccountPurchaseProfileExternalCode: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
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
     * Deduction Pay Component Assignment.
     * Maximum length: 32.
     */
    payComponent: string;
    /**
     * Returns an entity builder to construct instances `TimeAccountPurchaseProfilePayComponentAssignment`.
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
     */
    static builder(): EntityBuilderType<TimeAccountPurchaseProfilePayComponentAssignment, TimeAccountPurchaseProfilePayComponentAssignmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfilePayComponentAssignment` entity type.
     * @returns A `TimeAccountPurchaseProfilePayComponentAssignment` request builder.
     */
    static requestBuilder(): TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfilePayComponentAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
     */
    static customField(fieldName: string): CustomField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeAccountPurchaseProfilePayComponentAssignmentType {
    timeAccountPurchaseProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payComponent: string;
}
export interface TimeAccountPurchaseProfilePayComponentAssignmentTypeForceMandatory {
    timeAccountPurchaseProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payComponent: string;
}
export declare namespace TimeAccountPurchaseProfilePayComponentAssignment {
    /**
     * Static representation of the [[timeAccountPurchaseProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE: StringField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT: StringField<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * All fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
     */
    const _allFields: Array<StringField<TimeAccountPurchaseProfilePayComponentAssignment> | DateField<TimeAccountPurchaseProfilePayComponentAssignment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * All key fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
     */
    const _keyFields: Array<Selectable<TimeAccountPurchaseProfilePayComponentAssignment>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfilePayComponentAssignment.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountPurchaseProfilePayComponentAssignment>;
    };
}
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignment.d.ts.map