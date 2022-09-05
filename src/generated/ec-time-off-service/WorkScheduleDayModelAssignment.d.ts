import { WorkScheduleDayModelAssignmentRequestBuilder } from './WorkScheduleDayModelAssignmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkScheduleDayModelAssignment" of service "SFOData".
 */
export declare class WorkScheduleDayModelAssignment extends Entity implements WorkScheduleDayModelAssignmentType {
    /**
     * Technical entity name for WorkScheduleDayModelAssignment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModelAssignment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Work Schedule_External Code.
     * Maximum length: 128.
     */
    workScheduleExternalCode: string;
    /**
     * Category.
     * Maximum length: 255.
     * @nullable
     */
    category?: string;
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
     * Day.
     */
    day: BigNumber;
    /**
     * Day Model.
     * Maximum length: 128.
     * @nullable
     */
    dayModel?: string;
    /**
     * Planned Hours (Decimal).
     * @nullable
     */
    dayWorkingHours?: BigNumber;
    /**
     * Planned Hours And Minutes (hh:mm).
     * Maximum length: 255.
     * @nullable
     */
    hoursAndMinutes?: string;
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
     * One-to-one navigation property to the [[WorkScheduleDayModel]] entity.
     */
    dayModelNav: WorkScheduleDayModel;
    /**
     * One-to-many navigation property to the [[WorkScheduleDayModelAssignmentSegment]] entity.
     */
    segments: WorkScheduleDayModelAssignmentSegment[];
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModelAssignment`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
     */
    static builder(): EntityBuilderType<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignment` entity type.
     * @returns A `WorkScheduleDayModelAssignment` request builder.
     */
    static requestBuilder(): WorkScheduleDayModelAssignmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
     */
    static customField(fieldName: string): CustomField<WorkScheduleDayModelAssignment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { WorkScheduleDayModel, WorkScheduleDayModelType } from './WorkScheduleDayModel';
import { WorkScheduleDayModelAssignmentSegment, WorkScheduleDayModelAssignmentSegmentType } from './WorkScheduleDayModelAssignmentSegment';
export interface WorkScheduleDayModelAssignmentType {
    workScheduleExternalCode: string;
    category?: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    day: BigNumber;
    dayModel?: string;
    dayWorkingHours?: BigNumber;
    hoursAndMinutes?: string;
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
    dayModelNav: WorkScheduleDayModelType;
    segments: WorkScheduleDayModelAssignmentSegmentType[];
}
export interface WorkScheduleDayModelAssignmentTypeForceMandatory {
    workScheduleExternalCode: string;
    category: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    day: BigNumber;
    dayModel: string;
    dayWorkingHours: BigNumber;
    hoursAndMinutes: string;
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
    dayModelNav: WorkScheduleDayModelType;
    segments: WorkScheduleDayModelAssignmentSegmentType[];
}
export declare namespace WorkScheduleDayModelAssignment {
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY: BigNumberField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[dayModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_MODEL: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[dayWorkingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_WORKING_HOURS: BigNumberField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS_AND_MINUTES: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the one-to-one navigation property [[dayModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_MODEL_NAV: OneToOneLink<WorkScheduleDayModelAssignment, WorkScheduleDayModel>;
    /**
     * Static representation of the one-to-many navigation property [[segments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENTS: Link<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment>;
    /**
     * All fields of the WorkScheduleDayModelAssignment entity.
     */
    const _allFields: Array<StringField<WorkScheduleDayModelAssignment> | DateField<WorkScheduleDayModelAssignment> | BigNumberField<WorkScheduleDayModelAssignment> | OneToOneLink<WorkScheduleDayModelAssignment, WorkScheduleDayModel> | Link<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkScheduleDayModelAssignment>;
    /**
     * All key fields of the WorkScheduleDayModelAssignment entity.
     */
    const _keyFields: Array<Selectable<WorkScheduleDayModelAssignment>>;
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignment.
     */
    const _keys: {
        [keys: string]: Selectable<WorkScheduleDayModelAssignment>;
    };
}
//# sourceMappingURL=WorkScheduleDayModelAssignment.d.ts.map