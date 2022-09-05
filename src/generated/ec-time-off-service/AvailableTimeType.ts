/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AvailableTimeTypeRequestBuilder } from './AvailableTimeTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AvailableTimeType" of service "SFOData".
 */
export class AvailableTimeType extends Entity implements AvailableTimeTypeType {
  /**
   * Technical entity name for AvailableTimeType.
   */
  static _entityName = 'AvailableTimeType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AvailableTimeType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Time Profile_External Code.
   * Maximum length: 128.
   */
  timeTypeProfileExternalCode!: string;
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
   * Enabled in employee self-service scenario.
   * @nullable
   */
  enabledInEssScenario?: boolean;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Favorite Time Type.
   * @nullable
   */
  favoriteTimeType?: boolean;
  /**
   * Hide Account Balance.
   * @nullable
   */
  hideAccountBalance?: boolean;
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
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: string;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  timeTypeNav!: TimeType;

  /**
   * Returns an entity builder to construct instances `AvailableTimeType`.
   * @returns A builder that constructs instances of entity type `AvailableTimeType`.
   */
  static builder(): EntityBuilderType<AvailableTimeType, AvailableTimeTypeTypeForceMandatory> {
    return Entity.entityBuilder(AvailableTimeType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AvailableTimeType` entity type.
   * @returns A `AvailableTimeType` request builder.
   */
  static requestBuilder(): AvailableTimeTypeRequestBuilder {
    return new AvailableTimeTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AvailableTimeType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AvailableTimeType`.
   */
  static customField(fieldName: string): CustomField<AvailableTimeType> {
    return Entity.customFieldSelector(fieldName, AvailableTimeType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeType, TimeTypeType } from './TimeType';

export interface AvailableTimeTypeType {
  timeTypeProfileExternalCode: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  enabledInEssScenario?: boolean;
  externalCode: string;
  favoriteTimeType?: boolean;
  hideAccountBalance?: boolean;
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
  timeType?: string;
  timeTypeNav: TimeTypeType;
}

export interface AvailableTimeTypeTypeForceMandatory {
  timeTypeProfileExternalCode: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  enabledInEssScenario: boolean;
  externalCode: string;
  favoriteTimeType: boolean;
  hideAccountBalance: boolean;
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
  timeType: string;
  timeTypeNav: TimeTypeType;
}

export namespace AvailableTimeType {
  /**
   * Static representation of the [[timeTypeProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_PROFILE_EXTERNAL_CODE: StringField<AvailableTimeType> = new StringField('TimeTypeProfile_externalCode', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AvailableTimeType> = new StringField('createdBy', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<AvailableTimeType> = new DateField('createdDate', AvailableTimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AvailableTimeType> = new DateField('createdDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[enabledInEssScenario]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLED_IN_ESS_SCENARIO: BooleanField<AvailableTimeType> = new BooleanField('enabledInEssScenario', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AvailableTimeType> = new StringField('externalCode', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[favoriteTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAVORITE_TIME_TYPE: BooleanField<AvailableTimeType> = new BooleanField('favoriteTimeType', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[hideAccountBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIDE_ACCOUNT_BALANCE: BooleanField<AvailableTimeType> = new BooleanField('hideAccountBalance', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AvailableTimeType> = new StringField('lastModifiedBy', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<AvailableTimeType> = new DateField('lastModifiedDate', AvailableTimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AvailableTimeType> = new DateField('lastModifiedDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<AvailableTimeType> = new DateField('lastModifiedDateWithTZ', AvailableTimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<AvailableTimeType> = new DateField('mdfSystemEffectiveEndDate', AvailableTimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<AvailableTimeType> = new DateField('mdfSystemEffectiveStartDate', AvailableTimeType, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<AvailableTimeType> = new StringField('mdfSystemEntityId', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<AvailableTimeType> = new StringField('mdfSystemObjectType', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<AvailableTimeType> = new StringField('mdfSystemRecordId', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AvailableTimeType> = new StringField('mdfSystemRecordStatus', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<AvailableTimeType> = new StringField('mdfSystemStatus', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<AvailableTimeType> = new BigNumberField('mdfSystemTransactionSequence', AvailableTimeType, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<AvailableTimeType> = new BigNumberField('mdfSystemVersionId', AvailableTimeType, 'Edm.Int64');
  /**
   * Static representation of the [[timeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE: StringField<AvailableTimeType> = new StringField('timeType', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_NAV: OneToOneLink<AvailableTimeType, TimeType> = new OneToOneLink('timeTypeNav', AvailableTimeType, TimeType);
  /**
   * All fields of the AvailableTimeType entity.
   */
  export const _allFields: Array<StringField<AvailableTimeType> | DateField<AvailableTimeType> | BooleanField<AvailableTimeType> | BigNumberField<AvailableTimeType> | OneToOneLink<AvailableTimeType, TimeType>> = [
    AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE,
    AvailableTimeType.CREATED_BY,
    AvailableTimeType.CREATED_DATE,
    AvailableTimeType.CREATED_DATE_TIME,
    AvailableTimeType.ENABLED_IN_ESS_SCENARIO,
    AvailableTimeType.EXTERNAL_CODE,
    AvailableTimeType.FAVORITE_TIME_TYPE,
    AvailableTimeType.HIDE_ACCOUNT_BALANCE,
    AvailableTimeType.LAST_MODIFIED_BY,
    AvailableTimeType.LAST_MODIFIED_DATE,
    AvailableTimeType.LAST_MODIFIED_DATE_TIME,
    AvailableTimeType.LAST_MODIFIED_DATE_WITH_TZ,
    AvailableTimeType.MDF_SYSTEM_EFFECTIVE_END_DATE,
    AvailableTimeType.MDF_SYSTEM_EFFECTIVE_START_DATE,
    AvailableTimeType.MDF_SYSTEM_ENTITY_ID,
    AvailableTimeType.MDF_SYSTEM_OBJECT_TYPE,
    AvailableTimeType.MDF_SYSTEM_RECORD_ID,
    AvailableTimeType.MDF_SYSTEM_RECORD_STATUS,
    AvailableTimeType.MDF_SYSTEM_STATUS,
    AvailableTimeType.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    AvailableTimeType.MDF_SYSTEM_VERSION_ID,
    AvailableTimeType.TIME_TYPE,
    AvailableTimeType.TIME_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AvailableTimeType> = new AllFields('*', AvailableTimeType);
  /**
   * All key fields of the AvailableTimeType entity.
   */
  export const _keyFields: Array<Selectable<AvailableTimeType>> = [AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE, AvailableTimeType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AvailableTimeType.
   */
  export const _keys: { [keys: string]: Selectable<AvailableTimeType> } = AvailableTimeType._keyFields.reduce((acc: { [keys: string]: Selectable<AvailableTimeType> }, field: Selectable<AvailableTimeType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
