/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayRequestBuilder } from './WorkScheduleDayRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkScheduleDay" of service "SFOData".
 */
export class WorkScheduleDay extends Entity implements WorkScheduleDayType {
  /**
   * Technical entity name for WorkScheduleDay.
   */
  static _entityName = 'WorkScheduleDay';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkScheduleDay.
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
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Day.
   */
  day!: BigNumber;
  /**
   * Planned Hours And Minutes (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  hoursAndMinutes?: string;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
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
   * Planned Hours (Decimal).
   * @nullable
   */
  workingHours?: BigNumber;

  /**
   * Returns an entity builder to construct instances `WorkScheduleDay`.
   * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
   */
  static builder(): EntityBuilderType<WorkScheduleDay, WorkScheduleDayTypeForceMandatory> {
    return Entity.entityBuilder(WorkScheduleDay);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkScheduleDay` entity type.
   * @returns A `WorkScheduleDay` request builder.
   */
  static requestBuilder(): WorkScheduleDayRequestBuilder {
    return new WorkScheduleDayRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDay`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
   */
  static customField(fieldName: string): CustomField<WorkScheduleDay> {
    return Entity.customFieldSelector(fieldName, WorkScheduleDay);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WorkScheduleDayType {
  workScheduleExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  day: BigNumber;
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
  workingHours?: BigNumber;
}

export interface WorkScheduleDayTypeForceMandatory {
  workScheduleExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  day: BigNumber;
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
  workingHours: BigNumber;
}

export namespace WorkScheduleDay {
  /**
   * Static representation of the [[workScheduleExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDay> = new StringField('WorkSchedule_externalCode', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkScheduleDay> = new StringField('createdBy', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkScheduleDay> = new DateField('createdDate', WorkScheduleDay, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkScheduleDay> = new DateField('createdDateTime', WorkScheduleDay, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[day]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY: BigNumberField<WorkScheduleDay> = new BigNumberField('day', WorkScheduleDay, 'Edm.Int64');
  /**
   * Static representation of the [[hoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS_AND_MINUTES: StringField<WorkScheduleDay> = new StringField('hoursAndMinutes', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkScheduleDay> = new StringField('lastModifiedBy', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkScheduleDay> = new DateField('lastModifiedDate', WorkScheduleDay, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDay> = new DateField('lastModifiedDateTime', WorkScheduleDay, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDay> = new DateField('lastModifiedDateWithTZ', WorkScheduleDay, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDay> = new DateField('mdfSystemEffectiveEndDate', WorkScheduleDay, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDay> = new DateField('mdfSystemEffectiveStartDate', WorkScheduleDay, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDay> = new StringField('mdfSystemEntityId', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDay> = new StringField('mdfSystemObjectType', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDay> = new StringField('mdfSystemRecordId', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDay> = new StringField('mdfSystemRecordStatus', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkScheduleDay> = new StringField('mdfSystemStatus', WorkScheduleDay, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDay> = new BigNumberField('mdfSystemTransactionSequence', WorkScheduleDay, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDay> = new BigNumberField('mdfSystemVersionId', WorkScheduleDay, 'Edm.Int64');
  /**
   * Static representation of the [[workingHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_HOURS: BigNumberField<WorkScheduleDay> = new BigNumberField('workingHours', WorkScheduleDay, 'Edm.Decimal');
  /**
   * All fields of the WorkScheduleDay entity.
   */
  export const _allFields: Array<StringField<WorkScheduleDay> | DateField<WorkScheduleDay> | BigNumberField<WorkScheduleDay>> = [
    WorkScheduleDay.WORK_SCHEDULE_EXTERNAL_CODE,
    WorkScheduleDay.CREATED_BY,
    WorkScheduleDay.CREATED_DATE,
    WorkScheduleDay.CREATED_DATE_TIME,
    WorkScheduleDay.DAY,
    WorkScheduleDay.HOURS_AND_MINUTES,
    WorkScheduleDay.LAST_MODIFIED_BY,
    WorkScheduleDay.LAST_MODIFIED_DATE,
    WorkScheduleDay.LAST_MODIFIED_DATE_TIME,
    WorkScheduleDay.LAST_MODIFIED_DATE_WITH_TZ,
    WorkScheduleDay.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkScheduleDay.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkScheduleDay.MDF_SYSTEM_ENTITY_ID,
    WorkScheduleDay.MDF_SYSTEM_OBJECT_TYPE,
    WorkScheduleDay.MDF_SYSTEM_RECORD_ID,
    WorkScheduleDay.MDF_SYSTEM_RECORD_STATUS,
    WorkScheduleDay.MDF_SYSTEM_STATUS,
    WorkScheduleDay.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkScheduleDay.MDF_SYSTEM_VERSION_ID,
    WorkScheduleDay.WORKING_HOURS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkScheduleDay> = new AllFields('*', WorkScheduleDay);
  /**
   * All key fields of the WorkScheduleDay entity.
   */
  export const _keyFields: Array<Selectable<WorkScheduleDay>> = [WorkScheduleDay.WORK_SCHEDULE_EXTERNAL_CODE, WorkScheduleDay.DAY];
  /**
   * Mapping of all key field names to the respective static field property WorkScheduleDay.
   */
  export const _keys: { [keys: string]: Selectable<WorkScheduleDay> } = WorkScheduleDay._keyFields.reduce((acc: { [keys: string]: Selectable<WorkScheduleDay> }, field: Selectable<WorkScheduleDay>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
