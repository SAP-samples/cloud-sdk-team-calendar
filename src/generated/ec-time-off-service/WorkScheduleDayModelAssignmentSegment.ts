/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelAssignmentSegmentRequestBuilder } from './WorkScheduleDayModelAssignmentSegmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkScheduleDayModelAssignmentSegment" of service "SFOData".
 */
export class WorkScheduleDayModelAssignmentSegment extends Entity implements WorkScheduleDayModelAssignmentSegmentType {
  /**
   * Technical entity name for WorkScheduleDayModelAssignmentSegment.
   */
  static _entityName = 'WorkScheduleDayModelAssignmentSegment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkScheduleDayModelAssignmentSegment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Work Schedule Day Model Assignment_Day.
   */
  workScheduleDayModelAssignmentDay!: BigNumber;
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
   * Duration.
   * @nullable
   */
  duration?: BigNumber;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Start Time.
   * @nullable
   */
  startTime?: Time;

  /**
   * Returns an entity builder to construct instances `WorkScheduleDayModelAssignmentSegment`.
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
   */
  static builder(): EntityBuilderType<WorkScheduleDayModelAssignmentSegment, WorkScheduleDayModelAssignmentSegmentTypeForceMandatory> {
    return Entity.entityBuilder(WorkScheduleDayModelAssignmentSegment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignmentSegment` entity type.
   * @returns A `WorkScheduleDayModelAssignmentSegment` request builder.
   */
  static requestBuilder(): WorkScheduleDayModelAssignmentSegmentRequestBuilder {
    return new WorkScheduleDayModelAssignmentSegmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignmentSegment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
   */
  static customField(fieldName: string): CustomField<WorkScheduleDayModelAssignmentSegment> {
    return Entity.customFieldSelector(fieldName, WorkScheduleDayModelAssignmentSegment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WorkScheduleDayModelAssignmentSegmentType {
  workScheduleDayModelAssignmentDay: BigNumber;
  workScheduleExternalCode: string;
  category?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  duration?: BigNumber;
  endTime?: Time;
  externalCode: string;
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
  startTime?: Time;
}

export interface WorkScheduleDayModelAssignmentSegmentTypeForceMandatory {
  workScheduleDayModelAssignmentDay: BigNumber;
  workScheduleExternalCode: string;
  category: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  duration: BigNumber;
  endTime: Time;
  externalCode: string;
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
  startTime: Time;
}

export namespace WorkScheduleDayModelAssignmentSegment {
  /**
   * Static representation of the [[workScheduleDayModelAssignmentDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY: BigNumberField<WorkScheduleDayModelAssignmentSegment> = new BigNumberField('WorkScheduleDayModelAssignment_day', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
  /**
   * Static representation of the [[workScheduleExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('WorkSchedule_externalCode', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('category', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('createdBy', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('createdDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('createdDateTime', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[duration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION: BigNumberField<WorkScheduleDayModelAssignmentSegment> = new BigNumberField('duration', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<WorkScheduleDayModelAssignmentSegment> = new TimeField('endTime', WorkScheduleDayModelAssignmentSegment, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('externalCode', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('lastModifiedBy', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('lastModifiedDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('lastModifiedDateTime', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('lastModifiedDateWithTZ', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDayModelAssignmentSegment> = new DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModelAssignmentSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('mdfSystemEntityId', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('mdfSystemObjectType', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('mdfSystemRecordId', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('mdfSystemRecordStatus', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkScheduleDayModelAssignmentSegment> = new StringField('mdfSystemStatus', WorkScheduleDayModelAssignmentSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDayModelAssignmentSegment> = new BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDayModelAssignmentSegment> = new BigNumberField('mdfSystemVersionId', WorkScheduleDayModelAssignmentSegment, 'Edm.Int64');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<WorkScheduleDayModelAssignmentSegment> = new TimeField('startTime', WorkScheduleDayModelAssignmentSegment, 'Edm.Time');
  /**
   * All fields of the WorkScheduleDayModelAssignmentSegment entity.
   */
  export const _allFields: Array<BigNumberField<WorkScheduleDayModelAssignmentSegment> | StringField<WorkScheduleDayModelAssignmentSegment> | DateField<WorkScheduleDayModelAssignmentSegment> | TimeField<WorkScheduleDayModelAssignmentSegment>> = [
    WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY,
    WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_EXTERNAL_CODE,
    WorkScheduleDayModelAssignmentSegment.CATEGORY,
    WorkScheduleDayModelAssignmentSegment.CREATED_BY,
    WorkScheduleDayModelAssignmentSegment.CREATED_DATE,
    WorkScheduleDayModelAssignmentSegment.CREATED_DATE_TIME,
    WorkScheduleDayModelAssignmentSegment.DURATION,
    WorkScheduleDayModelAssignmentSegment.END_TIME,
    WorkScheduleDayModelAssignmentSegment.EXTERNAL_CODE,
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_BY,
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE,
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_TIME,
    WorkScheduleDayModelAssignmentSegment.LAST_MODIFIED_DATE_WITH_TZ,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_ENTITY_ID,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_OBJECT_TYPE,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_ID,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_RECORD_STATUS,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_STATUS,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkScheduleDayModelAssignmentSegment.MDF_SYSTEM_VERSION_ID,
    WorkScheduleDayModelAssignmentSegment.START_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkScheduleDayModelAssignmentSegment> = new AllFields('*', WorkScheduleDayModelAssignmentSegment);
  /**
   * All key fields of the WorkScheduleDayModelAssignmentSegment entity.
   */
  export const _keyFields: Array<Selectable<WorkScheduleDayModelAssignmentSegment>> = [WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY, WorkScheduleDayModelAssignmentSegment.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDayModelAssignmentSegment.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignmentSegment.
   */
  export const _keys: { [keys: string]: Selectable<WorkScheduleDayModelAssignmentSegment> } = WorkScheduleDayModelAssignmentSegment._keyFields.reduce((acc: { [keys: string]: Selectable<WorkScheduleDayModelAssignmentSegment> }, field: Selectable<WorkScheduleDayModelAssignmentSegment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
