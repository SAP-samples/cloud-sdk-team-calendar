/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelSegmentRequestBuilder } from './WorkScheduleDayModelSegmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkScheduleDayModelSegment" of service "SFOData".
 */
export class WorkScheduleDayModelSegment extends Entity implements WorkScheduleDayModelSegmentType {
  /**
   * Technical entity name for WorkScheduleDayModelSegment.
   */
  static _entityName = 'WorkScheduleDayModelSegment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkScheduleDayModelSegment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Work Schedule Day Model_External Code.
   * Maximum length: 128.
   */
  workScheduleDayModelExternalCode!: string;
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
   * Returns an entity builder to construct instances `WorkScheduleDayModelSegment`.
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelSegment`.
   */
  static builder(): EntityBuilderType<WorkScheduleDayModelSegment, WorkScheduleDayModelSegmentTypeForceMandatory> {
    return Entity.entityBuilder(WorkScheduleDayModelSegment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelSegment` entity type.
   * @returns A `WorkScheduleDayModelSegment` request builder.
   */
  static requestBuilder(): WorkScheduleDayModelSegmentRequestBuilder {
    return new WorkScheduleDayModelSegmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelSegment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModelSegment`.
   */
  static customField(fieldName: string): CustomField<WorkScheduleDayModelSegment> {
    return Entity.customFieldSelector(fieldName, WorkScheduleDayModelSegment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WorkScheduleDayModelSegmentType {
  workScheduleDayModelExternalCode: string;
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

export interface WorkScheduleDayModelSegmentTypeForceMandatory {
  workScheduleDayModelExternalCode: string;
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

export namespace WorkScheduleDayModelSegment {
  /**
   * Static representation of the [[workScheduleDayModelExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE: StringField<WorkScheduleDayModelSegment> = new StringField('WorkScheduleDayModel_externalCode', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<WorkScheduleDayModelSegment> = new StringField('category', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkScheduleDayModelSegment> = new StringField('createdBy', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkScheduleDayModelSegment> = new DateField('createdDate', WorkScheduleDayModelSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkScheduleDayModelSegment> = new DateField('createdDateTime', WorkScheduleDayModelSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[duration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION: BigNumberField<WorkScheduleDayModelSegment> = new BigNumberField('duration', WorkScheduleDayModelSegment, 'Edm.Int64');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<WorkScheduleDayModelSegment> = new TimeField('endTime', WorkScheduleDayModelSegment, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<WorkScheduleDayModelSegment> = new StringField('externalCode', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkScheduleDayModelSegment> = new StringField('lastModifiedBy', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkScheduleDayModelSegment> = new DateField('lastModifiedDate', WorkScheduleDayModelSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModelSegment> = new DateField('lastModifiedDateTime', WorkScheduleDayModelSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDayModelSegment> = new DateField('lastModifiedDateWithTZ', WorkScheduleDayModelSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDayModelSegment> = new DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModelSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDayModelSegment> = new DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModelSegment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDayModelSegment> = new StringField('mdfSystemEntityId', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDayModelSegment> = new StringField('mdfSystemObjectType', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDayModelSegment> = new StringField('mdfSystemRecordId', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModelSegment> = new StringField('mdfSystemRecordStatus', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkScheduleDayModelSegment> = new StringField('mdfSystemStatus', WorkScheduleDayModelSegment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDayModelSegment> = new BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModelSegment, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDayModelSegment> = new BigNumberField('mdfSystemVersionId', WorkScheduleDayModelSegment, 'Edm.Int64');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<WorkScheduleDayModelSegment> = new TimeField('startTime', WorkScheduleDayModelSegment, 'Edm.Time');
  /**
   * All fields of the WorkScheduleDayModelSegment entity.
   */
  export const _allFields: Array<StringField<WorkScheduleDayModelSegment> | DateField<WorkScheduleDayModelSegment> | BigNumberField<WorkScheduleDayModelSegment> | TimeField<WorkScheduleDayModelSegment>> = [
    WorkScheduleDayModelSegment.WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE,
    WorkScheduleDayModelSegment.CATEGORY,
    WorkScheduleDayModelSegment.CREATED_BY,
    WorkScheduleDayModelSegment.CREATED_DATE,
    WorkScheduleDayModelSegment.CREATED_DATE_TIME,
    WorkScheduleDayModelSegment.DURATION,
    WorkScheduleDayModelSegment.END_TIME,
    WorkScheduleDayModelSegment.EXTERNAL_CODE,
    WorkScheduleDayModelSegment.LAST_MODIFIED_BY,
    WorkScheduleDayModelSegment.LAST_MODIFIED_DATE,
    WorkScheduleDayModelSegment.LAST_MODIFIED_DATE_TIME,
    WorkScheduleDayModelSegment.LAST_MODIFIED_DATE_WITH_TZ,
    WorkScheduleDayModelSegment.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkScheduleDayModelSegment.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkScheduleDayModelSegment.MDF_SYSTEM_ENTITY_ID,
    WorkScheduleDayModelSegment.MDF_SYSTEM_OBJECT_TYPE,
    WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_ID,
    WorkScheduleDayModelSegment.MDF_SYSTEM_RECORD_STATUS,
    WorkScheduleDayModelSegment.MDF_SYSTEM_STATUS,
    WorkScheduleDayModelSegment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkScheduleDayModelSegment.MDF_SYSTEM_VERSION_ID,
    WorkScheduleDayModelSegment.START_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkScheduleDayModelSegment> = new AllFields('*', WorkScheduleDayModelSegment);
  /**
   * All key fields of the WorkScheduleDayModelSegment entity.
   */
  export const _keyFields: Array<Selectable<WorkScheduleDayModelSegment>> = [WorkScheduleDayModelSegment.WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE, WorkScheduleDayModelSegment.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property WorkScheduleDayModelSegment.
   */
  export const _keys: { [keys: string]: Selectable<WorkScheduleDayModelSegment> } = WorkScheduleDayModelSegment._keyFields.reduce((acc: { [keys: string]: Selectable<WorkScheduleDayModelSegment> }, field: Selectable<WorkScheduleDayModelSegment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
