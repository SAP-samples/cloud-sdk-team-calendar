/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TemporaryTimeInformationRequestBuilder } from './TemporaryTimeInformationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TemporaryTimeInformation" of service "SFOData".
 */
export class TemporaryTimeInformation extends Entity implements TemporaryTimeInformationType {
  /**
   * Technical entity name for TemporaryTimeInformation.
   */
  static _entityName = 'TemporaryTimeInformation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TemporaryTimeInformation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: string;
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
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
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * Work Schedule.
   * Maximum length: 128.
   * @nullable
   */
  workSchedule?: string;
  /**
   * One-to-one navigation property to the [[WorkSchedule]] entity.
   */
  workScheduleNav!: WorkSchedule;

  /**
   * Returns an entity builder to construct instances `TemporaryTimeInformation`.
   * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
   */
  static builder(): EntityBuilderType<TemporaryTimeInformation, TemporaryTimeInformationTypeForceMandatory> {
    return Entity.entityBuilder(TemporaryTimeInformation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TemporaryTimeInformation` entity type.
   * @returns A `TemporaryTimeInformation` request builder.
   */
  static requestBuilder(): TemporaryTimeInformationRequestBuilder {
    return new TemporaryTimeInformationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TemporaryTimeInformation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
   */
  static customField(fieldName: string): CustomField<TemporaryTimeInformation> {
    return Entity.customFieldSelector(fieldName, TemporaryTimeInformation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { WorkSchedule, WorkScheduleType } from './WorkSchedule';

export interface TemporaryTimeInformationType {
  comment?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  endDate?: Moment;
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
  startDate?: Moment;
  userId?: string;
  workSchedule?: string;
  workScheduleNav: WorkScheduleType;
}

export interface TemporaryTimeInformationTypeForceMandatory {
  comment: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  endDate: Moment;
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
  startDate: Moment;
  userId: string;
  workSchedule: string;
  workScheduleNav: WorkScheduleType;
}

export namespace TemporaryTimeInformation {
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<TemporaryTimeInformation> = new StringField('comment', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TemporaryTimeInformation> = new StringField('createdBy', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TemporaryTimeInformation> = new DateField('createdDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TemporaryTimeInformation> = new DateField('createdDateTime', TemporaryTimeInformation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TemporaryTimeInformation> = new DateField('endDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TemporaryTimeInformation> = new StringField('externalCode', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TemporaryTimeInformation> = new StringField('lastModifiedBy', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TemporaryTimeInformation> = new DateField('lastModifiedDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TemporaryTimeInformation> = new DateField('lastModifiedDateTime', TemporaryTimeInformation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TemporaryTimeInformation> = new DateField('lastModifiedDateWithTZ', TemporaryTimeInformation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TemporaryTimeInformation> = new DateField('mdfSystemEffectiveEndDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TemporaryTimeInformation> = new DateField('mdfSystemEffectiveStartDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TemporaryTimeInformation> = new StringField('mdfSystemEntityId', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TemporaryTimeInformation> = new StringField('mdfSystemObjectType', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TemporaryTimeInformation> = new StringField('mdfSystemRecordId', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TemporaryTimeInformation> = new StringField('mdfSystemRecordStatus', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TemporaryTimeInformation> = new StringField('mdfSystemStatus', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TemporaryTimeInformation> = new BigNumberField('mdfSystemTransactionSequence', TemporaryTimeInformation, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TemporaryTimeInformation> = new BigNumberField('mdfSystemVersionId', TemporaryTimeInformation, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TemporaryTimeInformation> = new DateField('startDate', TemporaryTimeInformation, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TemporaryTimeInformation> = new StringField('userId', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the [[workSchedule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE: StringField<TemporaryTimeInformation> = new StringField('workSchedule', TemporaryTimeInformation, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[workScheduleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SCHEDULE_NAV: OneToOneLink<TemporaryTimeInformation, WorkSchedule> = new OneToOneLink('workScheduleNav', TemporaryTimeInformation, WorkSchedule);
  /**
   * All fields of the TemporaryTimeInformation entity.
   */
  export const _allFields: Array<StringField<TemporaryTimeInformation> | DateField<TemporaryTimeInformation> | BigNumberField<TemporaryTimeInformation> | OneToOneLink<TemporaryTimeInformation, WorkSchedule>> = [
    TemporaryTimeInformation.COMMENT,
    TemporaryTimeInformation.CREATED_BY,
    TemporaryTimeInformation.CREATED_DATE,
    TemporaryTimeInformation.CREATED_DATE_TIME,
    TemporaryTimeInformation.END_DATE,
    TemporaryTimeInformation.EXTERNAL_CODE,
    TemporaryTimeInformation.LAST_MODIFIED_BY,
    TemporaryTimeInformation.LAST_MODIFIED_DATE,
    TemporaryTimeInformation.LAST_MODIFIED_DATE_TIME,
    TemporaryTimeInformation.LAST_MODIFIED_DATE_WITH_TZ,
    TemporaryTimeInformation.MDF_SYSTEM_EFFECTIVE_END_DATE,
    TemporaryTimeInformation.MDF_SYSTEM_EFFECTIVE_START_DATE,
    TemporaryTimeInformation.MDF_SYSTEM_ENTITY_ID,
    TemporaryTimeInformation.MDF_SYSTEM_OBJECT_TYPE,
    TemporaryTimeInformation.MDF_SYSTEM_RECORD_ID,
    TemporaryTimeInformation.MDF_SYSTEM_RECORD_STATUS,
    TemporaryTimeInformation.MDF_SYSTEM_STATUS,
    TemporaryTimeInformation.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    TemporaryTimeInformation.MDF_SYSTEM_VERSION_ID,
    TemporaryTimeInformation.START_DATE,
    TemporaryTimeInformation.USER_ID,
    TemporaryTimeInformation.WORK_SCHEDULE,
    TemporaryTimeInformation.WORK_SCHEDULE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TemporaryTimeInformation> = new AllFields('*', TemporaryTimeInformation);
  /**
   * All key fields of the TemporaryTimeInformation entity.
   */
  export const _keyFields: Array<Selectable<TemporaryTimeInformation>> = [TemporaryTimeInformation.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TemporaryTimeInformation.
   */
  export const _keys: { [keys: string]: Selectable<TemporaryTimeInformation> } = TemporaryTimeInformation._keyFields.reduce((acc: { [keys: string]: Selectable<TemporaryTimeInformation> }, field: Selectable<TemporaryTimeInformation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
