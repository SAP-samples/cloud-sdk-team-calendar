/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayAssignmentRequestBuilder } from './HolidayAssignmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "HolidayAssignment" of service "SFOData".
 */
export class HolidayAssignment extends Entity implements HolidayAssignmentType {
  /**
   * Technical entity name for HolidayAssignment.
   */
  static _entityName = 'HolidayAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HolidayAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Holiday Calendar_External Code.
   * Maximum length: 128.
   */
  holidayCalendarExternalCode!: string;
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
   * Date of Holiday.
   */
  date!: Moment;
  /**
   * Holiday.
   * Maximum length: 128.
   * @nullable
   */
  holiday?: string;
  /**
   * Holiday Class.
   * Maximum length: 255.
   * @nullable
   */
  holidayClass?: string;
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
   * One-to-one navigation property to the [[Holiday]] entity.
   */
  holidayNav!: Holiday;

  /**
   * Returns an entity builder to construct instances `HolidayAssignment`.
   * @returns A builder that constructs instances of entity type `HolidayAssignment`.
   */
  static builder(): EntityBuilderType<HolidayAssignment, HolidayAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(HolidayAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HolidayAssignment` entity type.
   * @returns A `HolidayAssignment` request builder.
   */
  static requestBuilder(): HolidayAssignmentRequestBuilder {
    return new HolidayAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HolidayAssignment`.
   */
  static customField(fieldName: string): CustomField<HolidayAssignment> {
    return Entity.customFieldSelector(fieldName, HolidayAssignment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Holiday, HolidayType } from './Holiday';

export interface HolidayAssignmentType {
  holidayCalendarExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  date: Moment;
  holiday?: string;
  holidayClass?: string;
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
  holidayNav: HolidayType;
}

export interface HolidayAssignmentTypeForceMandatory {
  holidayCalendarExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  date: Moment;
  holiday: string;
  holidayClass: string;
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
  holidayNav: HolidayType;
}

export namespace HolidayAssignment {
  /**
   * Static representation of the [[holidayCalendarExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CALENDAR_EXTERNAL_CODE: StringField<HolidayAssignment> = new StringField('HolidayCalendar_externalCode', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HolidayAssignment> = new StringField('createdBy', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<HolidayAssignment> = new DateField('createdDate', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HolidayAssignment> = new DateField('createdDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<HolidayAssignment> = new DateField('date', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[holiday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY: StringField<HolidayAssignment> = new StringField('holiday', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[holidayClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CLASS: StringField<HolidayAssignment> = new StringField('holidayClass', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HolidayAssignment> = new StringField('lastModifiedBy', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<HolidayAssignment> = new DateField('lastModifiedDate', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HolidayAssignment> = new DateField('lastModifiedDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<HolidayAssignment> = new DateField('lastModifiedDateWithTZ', HolidayAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<HolidayAssignment> = new DateField('mdfSystemEffectiveEndDate', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<HolidayAssignment> = new DateField('mdfSystemEffectiveStartDate', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<HolidayAssignment> = new StringField('mdfSystemEntityId', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<HolidayAssignment> = new StringField('mdfSystemObjectType', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<HolidayAssignment> = new StringField('mdfSystemRecordId', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayAssignment> = new StringField('mdfSystemRecordStatus', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<HolidayAssignment> = new StringField('mdfSystemStatus', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<HolidayAssignment> = new BigNumberField('mdfSystemTransactionSequence', HolidayAssignment, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<HolidayAssignment> = new BigNumberField('mdfSystemVersionId', HolidayAssignment, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[holidayNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_NAV: OneToOneLink<HolidayAssignment, Holiday> = new OneToOneLink('holidayNav', HolidayAssignment, Holiday);
  /**
   * All fields of the HolidayAssignment entity.
   */
  export const _allFields: Array<StringField<HolidayAssignment> | DateField<HolidayAssignment> | BigNumberField<HolidayAssignment> | OneToOneLink<HolidayAssignment, Holiday>> = [
    HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE,
    HolidayAssignment.CREATED_BY,
    HolidayAssignment.CREATED_DATE,
    HolidayAssignment.CREATED_DATE_TIME,
    HolidayAssignment.DATE,
    HolidayAssignment.HOLIDAY,
    HolidayAssignment.HOLIDAY_CLASS,
    HolidayAssignment.LAST_MODIFIED_BY,
    HolidayAssignment.LAST_MODIFIED_DATE,
    HolidayAssignment.LAST_MODIFIED_DATE_TIME,
    HolidayAssignment.LAST_MODIFIED_DATE_WITH_TZ,
    HolidayAssignment.MDF_SYSTEM_EFFECTIVE_END_DATE,
    HolidayAssignment.MDF_SYSTEM_EFFECTIVE_START_DATE,
    HolidayAssignment.MDF_SYSTEM_ENTITY_ID,
    HolidayAssignment.MDF_SYSTEM_OBJECT_TYPE,
    HolidayAssignment.MDF_SYSTEM_RECORD_ID,
    HolidayAssignment.MDF_SYSTEM_RECORD_STATUS,
    HolidayAssignment.MDF_SYSTEM_STATUS,
    HolidayAssignment.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    HolidayAssignment.MDF_SYSTEM_VERSION_ID,
    HolidayAssignment.HOLIDAY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HolidayAssignment> = new AllFields('*', HolidayAssignment);
  /**
   * All key fields of the HolidayAssignment entity.
   */
  export const _keyFields: Array<Selectable<HolidayAssignment>> = [HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE, HolidayAssignment.DATE];
  /**
   * Mapping of all key field names to the respective static field property HolidayAssignment.
   */
  export const _keys: { [keys: string]: Selectable<HolidayAssignment> } = HolidayAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<HolidayAssignment> }, field: Selectable<HolidayAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
