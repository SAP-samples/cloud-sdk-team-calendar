/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelAssignmentRequestBuilder } from './WorkScheduleDayModelAssignmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkScheduleDayModelAssignment" of service "SFOData".
 */
export class WorkScheduleDayModelAssignment extends Entity implements WorkScheduleDayModelAssignmentType {
  /**
   * Technical entity name for WorkScheduleDayModelAssignment.
   */
  static _entityName = 'WorkScheduleDayModelAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkScheduleDayModelAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Work Schedule_External Code.
   * Maximum length: 128.
   */
  workScheduleExternalCode!: string;
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
  day!: BigNumber;
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
  dayModelNav!: WorkScheduleDayModel;
  /**
   * One-to-many navigation property to the [[WorkScheduleDayModelAssignmentSegment]] entity.
   */
  segments!: WorkScheduleDayModelAssignmentSegment[];

  /**
   * Returns an entity builder to construct instances `WorkScheduleDayModelAssignment`.
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
   */
  static builder(): EntityBuilderType<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(WorkScheduleDayModelAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignment` entity type.
   * @returns A `WorkScheduleDayModelAssignment` request builder.
   */
  static requestBuilder(): WorkScheduleDayModelAssignmentRequestBuilder {
    return new WorkScheduleDayModelAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignment`.
   */
  static customField(fieldName: string): CustomField<WorkScheduleDayModelAssignment> {
    return Entity.customFieldSelector(fieldName, WorkScheduleDayModelAssignment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace WorkScheduleDayModelAssignment {
  /**
   * Static representation of the [[workScheduleExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignment> = new StringField('WorkSchedule_externalCode', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<WorkScheduleDayModelAssignment> = new StringField('category', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkScheduleDayModelAssignment> = new StringField('createdBy', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkScheduleDayModelAssignment> = new DateField('createdDate', WorkScheduleDayModelAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkScheduleDayModelAssignment> = new DateField('createdDateTime', WorkScheduleDayModelAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[day]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY: BigNumberField<WorkScheduleDayModelAssignment> = new BigNumberField('day', WorkScheduleDayModelAssignment, 'Edm.Int64');
  /**
   * Static representation of the [[dayModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_MODEL: StringField<WorkScheduleDayModelAssignment> = new StringField('dayModel', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[dayWorkingHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_WORKING_HOURS: BigNumberField<WorkScheduleDayModelAssignment> = new BigNumberField('dayWorkingHours', WorkScheduleDayModelAssignment, 'Edm.Decimal');
  /**
   * Static representation of the [[hoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS_AND_MINUTES: StringField<WorkScheduleDayModelAssignment> = new StringField('hoursAndMinutes', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkScheduleDayModelAssignment> = new StringField('lastModifiedBy', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkScheduleDayModelAssignment> = new DateField('lastModifiedDate', WorkScheduleDayModelAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModelAssignment> = new DateField('lastModifiedDateTime', WorkScheduleDayModelAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDayModelAssignment> = new DateField('lastModifiedDateWithTZ', WorkScheduleDayModelAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDayModelAssignment> = new DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModelAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDayModelAssignment> = new DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModelAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDayModelAssignment> = new StringField('mdfSystemEntityId', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDayModelAssignment> = new StringField('mdfSystemObjectType', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDayModelAssignment> = new StringField('mdfSystemRecordId', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModelAssignment> = new StringField('mdfSystemRecordStatus', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkScheduleDayModelAssignment> = new StringField('mdfSystemStatus', WorkScheduleDayModelAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDayModelAssignment> = new BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModelAssignment, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDayModelAssignment> = new BigNumberField('mdfSystemVersionId', WorkScheduleDayModelAssignment, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[dayModelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_MODEL_NAV: OneToOneLink<WorkScheduleDayModelAssignment, WorkScheduleDayModel> = new OneToOneLink('dayModelNav', WorkScheduleDayModelAssignment, WorkScheduleDayModel);
  /**
   * Static representation of the one-to-many navigation property [[segments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENTS: Link<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment> = new Link('segments', WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment);
  /**
   * All fields of the WorkScheduleDayModelAssignment entity.
   */
  export const _allFields: Array<StringField<WorkScheduleDayModelAssignment> | DateField<WorkScheduleDayModelAssignment> | BigNumberField<WorkScheduleDayModelAssignment> | OneToOneLink<WorkScheduleDayModelAssignment, WorkScheduleDayModel> | Link<WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentSegment>> = [
    WorkScheduleDayModelAssignment.WORK_SCHEDULE_EXTERNAL_CODE,
    WorkScheduleDayModelAssignment.CATEGORY,
    WorkScheduleDayModelAssignment.CREATED_BY,
    WorkScheduleDayModelAssignment.CREATED_DATE,
    WorkScheduleDayModelAssignment.CREATED_DATE_TIME,
    WorkScheduleDayModelAssignment.DAY,
    WorkScheduleDayModelAssignment.DAY_MODEL,
    WorkScheduleDayModelAssignment.DAY_WORKING_HOURS,
    WorkScheduleDayModelAssignment.HOURS_AND_MINUTES,
    WorkScheduleDayModelAssignment.LAST_MODIFIED_BY,
    WorkScheduleDayModelAssignment.LAST_MODIFIED_DATE,
    WorkScheduleDayModelAssignment.LAST_MODIFIED_DATE_TIME,
    WorkScheduleDayModelAssignment.LAST_MODIFIED_DATE_WITH_TZ,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_ENTITY_ID,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_OBJECT_TYPE,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_ID,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_RECORD_STATUS,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_STATUS,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkScheduleDayModelAssignment.MDF_SYSTEM_VERSION_ID,
    WorkScheduleDayModelAssignment.DAY_MODEL_NAV,
    WorkScheduleDayModelAssignment.SEGMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkScheduleDayModelAssignment> = new AllFields('*', WorkScheduleDayModelAssignment);
  /**
   * All key fields of the WorkScheduleDayModelAssignment entity.
   */
  export const _keyFields: Array<Selectable<WorkScheduleDayModelAssignment>> = [WorkScheduleDayModelAssignment.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDayModelAssignment.DAY];
  /**
   * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignment.
   */
  export const _keys: { [keys: string]: Selectable<WorkScheduleDayModelAssignment> } = WorkScheduleDayModelAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<WorkScheduleDayModelAssignment> }, field: Selectable<WorkScheduleDayModelAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
