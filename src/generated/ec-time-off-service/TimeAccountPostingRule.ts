/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPostingRuleRequestBuilder } from './TimeAccountPostingRuleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountPostingRule" of service "SFOData".
 */
export class TimeAccountPostingRule extends Entity implements TimeAccountPostingRuleType {
  /**
   * Technical entity name for TimeAccountPostingRule.
   */
  static _entityName = 'TimeAccountPostingRule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountPostingRule.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Type_External Code.
   * Maximum length: 128.
   */
  timeTypeExternalCode!: string;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountType?: string;
  /**
   * One-to-one navigation property to the [[TimeAccountType_1]] entity.
   */
  timeAccountTypeNav!: TimeAccountType_1;

  /**
   * Returns an entity builder to construct instances `TimeAccountPostingRule`.
   * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
   */
  static builder(): EntityBuilderType<TimeAccountPostingRule, TimeAccountPostingRuleTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountPostingRule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountPostingRule` entity type.
   * @returns A `TimeAccountPostingRule` request builder.
   */
  static requestBuilder(): TimeAccountPostingRuleRequestBuilder {
    return new TimeAccountPostingRuleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPostingRule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
   */
  static customField(fieldName: string): CustomField<TimeAccountPostingRule> {
    return Entity.customFieldSelector(fieldName, TimeAccountPostingRule);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

export interface TimeAccountPostingRuleType {
  timeTypeExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
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
  timeAccountType?: string;
  timeAccountTypeNav: TimeAccountType_1Type;
}

export interface TimeAccountPostingRuleTypeForceMandatory {
  timeTypeExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
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
  timeAccountType: string;
  timeAccountTypeNav: TimeAccountType_1Type;
}

export namespace TimeAccountPostingRule {
  /**
   * Static representation of the [[timeTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_EXTERNAL_CODE: StringField<TimeAccountPostingRule> = new StringField('TimeType_externalCode', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountPostingRule> = new StringField('createdBy', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TimeAccountPostingRule> = new DateField('createdDate', TimeAccountPostingRule, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountPostingRule> = new DateField('createdDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountPostingRule> = new StringField('externalCode', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountPostingRule> = new StringField('lastModifiedBy', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TimeAccountPostingRule> = new DateField('lastModifiedDate', TimeAccountPostingRule, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPostingRule> = new DateField('lastModifiedDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccountPostingRule> = new DateField('lastModifiedDateWithTZ', TimeAccountPostingRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccountPostingRule> = new DateField('mdfSystemEffectiveEndDate', TimeAccountPostingRule, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccountPostingRule> = new DateField('mdfSystemEffectiveStartDate', TimeAccountPostingRule, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccountPostingRule> = new StringField('mdfSystemEntityId', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccountPostingRule> = new StringField('mdfSystemObjectType', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TimeAccountPostingRule> = new StringField('mdfSystemRecordId', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPostingRule> = new StringField('mdfSystemRecordStatus', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeAccountPostingRule> = new StringField('mdfSystemStatus', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccountPostingRule> = new BigNumberField('mdfSystemTransactionSequence', TimeAccountPostingRule, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccountPostingRule> = new BigNumberField('mdfSystemVersionId', TimeAccountPostingRule, 'Edm.Int64');
  /**
   * Static representation of the [[timeAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE: StringField<TimeAccountPostingRule> = new StringField('timeAccountType', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccountPostingRule, TimeAccountType_1> = new OneToOneLink('timeAccountTypeNav', TimeAccountPostingRule, TimeAccountType_1);
  /**
   * All fields of the TimeAccountPostingRule entity.
   */
  export const _allFields: Array<StringField<TimeAccountPostingRule> | DateField<TimeAccountPostingRule> | BigNumberField<TimeAccountPostingRule> | OneToOneLink<TimeAccountPostingRule, TimeAccountType_1>> = [
    TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE,
    TimeAccountPostingRule.CREATED_BY,
    TimeAccountPostingRule.CREATED_DATE,
    TimeAccountPostingRule.CREATED_DATE_TIME,
    TimeAccountPostingRule.EXTERNAL_CODE,
    TimeAccountPostingRule.LAST_MODIFIED_BY,
    TimeAccountPostingRule.LAST_MODIFIED_DATE,
    TimeAccountPostingRule.LAST_MODIFIED_DATE_TIME,
    TimeAccountPostingRule.LAST_MODIFIED_DATE_WITH_TZ,
    TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_END_DATE,
    TimeAccountPostingRule.MDF_SYSTEM_EFFECTIVE_START_DATE,
    TimeAccountPostingRule.MDF_SYSTEM_ENTITY_ID,
    TimeAccountPostingRule.MDF_SYSTEM_OBJECT_TYPE,
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_ID,
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountPostingRule.MDF_SYSTEM_STATUS,
    TimeAccountPostingRule.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    TimeAccountPostingRule.MDF_SYSTEM_VERSION_ID,
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE,
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountPostingRule> = new AllFields('*', TimeAccountPostingRule);
  /**
   * All key fields of the TimeAccountPostingRule entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountPostingRule>> = [TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE, TimeAccountPostingRule.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountPostingRule.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountPostingRule> } = TimeAccountPostingRule._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountPostingRule> }, field: Selectable<TimeAccountPostingRule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
