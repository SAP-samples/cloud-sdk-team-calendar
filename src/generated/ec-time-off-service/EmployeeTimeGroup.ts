/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeGroupRequestBuilder } from './EmployeeTimeGroupRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeGroup" of service "SFOData".
 */
export class EmployeeTimeGroup extends Entity implements EmployeeTimeGroupType {
  /**
   * Technical entity name for EmployeeTimeGroup.
   */
  static _entityName = 'EmployeeTimeGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeGroup.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
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
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Items Category.
   * Maximum length: 255.
   * @nullable
   */
  itemsCategory?: string;
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
   * User Id.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-many navigation property to the [[EmployeeTimeGroupItem]] entity.
   */
  items!: EmployeeTimeGroupItem[];

  /**
   * Returns an entity builder to construct instances `EmployeeTimeGroup`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
   */
  static builder(): EntityBuilderType<EmployeeTimeGroup, EmployeeTimeGroupTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeGroup` entity type.
   * @returns A `EmployeeTimeGroup` request builder.
   */
  static requestBuilder(): EmployeeTimeGroupRequestBuilder {
    return new EmployeeTimeGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeGroup> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeGroup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeeTimeGroupItem, EmployeeTimeGroupItemType } from './EmployeeTimeGroupItem';

export interface EmployeeTimeGroupType {
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  externalCode: string;
  itemsCategory?: string;
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
  userId?: string;
  items: EmployeeTimeGroupItemType[];
}

export interface EmployeeTimeGroupTypeForceMandatory {
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  externalCode: string;
  itemsCategory: string;
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
  userId: string;
  items: EmployeeTimeGroupItemType[];
}

export namespace EmployeeTimeGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeGroup> = new StringField('createdBy', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<EmployeeTimeGroup> = new DateField('createdDate', EmployeeTimeGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeGroup> = new DateField('createdDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeGroup> = new StringField('externalCode', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[itemsCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS_CATEGORY: StringField<EmployeeTimeGroup> = new StringField('itemsCategory', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeGroup> = new StringField('lastModifiedBy', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<EmployeeTimeGroup> = new DateField('lastModifiedDate', EmployeeTimeGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeGroup> = new DateField('lastModifiedDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<EmployeeTimeGroup> = new DateField('lastModifiedDateWithTZ', EmployeeTimeGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeeTimeGroup> = new DateField('mdfSystemEffectiveEndDate', EmployeeTimeGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeeTimeGroup> = new DateField('mdfSystemEffectiveStartDate', EmployeeTimeGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<EmployeeTimeGroup> = new StringField('mdfSystemEntityId', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<EmployeeTimeGroup> = new StringField('mdfSystemObjectType', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<EmployeeTimeGroup> = new StringField('mdfSystemRecordId', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeGroup> = new StringField('mdfSystemRecordStatus', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<EmployeeTimeGroup> = new StringField('mdfSystemStatus', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<EmployeeTimeGroup> = new BigNumberField('mdfSystemTransactionSequence', EmployeeTimeGroup, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<EmployeeTimeGroup> = new BigNumberField('mdfSystemVersionId', EmployeeTimeGroup, 'Edm.Int64');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmployeeTimeGroup> = new StringField('userId', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: Link<EmployeeTimeGroup, EmployeeTimeGroupItem> = new Link('items', EmployeeTimeGroup, EmployeeTimeGroupItem);
  /**
   * All fields of the EmployeeTimeGroup entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeGroup> | DateField<EmployeeTimeGroup> | BigNumberField<EmployeeTimeGroup> | Link<EmployeeTimeGroup, EmployeeTimeGroupItem>> = [
    EmployeeTimeGroup.CREATED_BY,
    EmployeeTimeGroup.CREATED_DATE,
    EmployeeTimeGroup.CREATED_DATE_TIME,
    EmployeeTimeGroup.EXTERNAL_CODE,
    EmployeeTimeGroup.ITEMS_CATEGORY,
    EmployeeTimeGroup.LAST_MODIFIED_BY,
    EmployeeTimeGroup.LAST_MODIFIED_DATE,
    EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeGroup.LAST_MODIFIED_DATE_WITH_TZ,
    EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeeTimeGroup.MDF_SYSTEM_ENTITY_ID,
    EmployeeTimeGroup.MDF_SYSTEM_OBJECT_TYPE,
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_ID,
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeGroup.MDF_SYSTEM_STATUS,
    EmployeeTimeGroup.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    EmployeeTimeGroup.MDF_SYSTEM_VERSION_ID,
    EmployeeTimeGroup.USER_ID,
    EmployeeTimeGroup.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeGroup> = new AllFields('*', EmployeeTimeGroup);
  /**
   * All key fields of the EmployeeTimeGroup entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeGroup>> = [EmployeeTimeGroup.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeGroup.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeGroup> } = EmployeeTimeGroup._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeGroup> }, field: Selectable<EmployeeTimeGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
