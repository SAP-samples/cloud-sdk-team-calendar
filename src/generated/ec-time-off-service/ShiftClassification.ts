/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShiftClassificationRequestBuilder } from './ShiftClassificationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ShiftClassification" of service "SFOData".
 */
export class ShiftClassification extends Entity implements ShiftClassificationType {
  /**
   * Technical entity name for ShiftClassification.
   */
  static _entityName = 'ShiftClassification';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ShiftClassification.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Country.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtPt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameRuRu?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhTw?: string;
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
   * Returns an entity builder to construct instances `ShiftClassification`.
   * @returns A builder that constructs instances of entity type `ShiftClassification`.
   */
  static builder(): EntityBuilderType<ShiftClassification, ShiftClassificationTypeForceMandatory> {
    return Entity.entityBuilder(ShiftClassification);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ShiftClassification` entity type.
   * @returns A `ShiftClassification` request builder.
   */
  static requestBuilder(): ShiftClassificationRequestBuilder {
    return new ShiftClassificationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShiftClassification`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ShiftClassification`.
   */
  static customField(fieldName: string): CustomField<ShiftClassification> {
    return Entity.customFieldSelector(fieldName, ShiftClassification);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ShiftClassificationType {
  country?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameFrFr?: string;
  externalNameJaJp?: string;
  externalNameKoKr?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNamePtPt?: string;
  externalNameRuRu?: string;
  externalNameZhCn?: string;
  externalNameZhTw?: string;
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
}

export interface ShiftClassificationTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameFrFr: string;
  externalNameJaJp: string;
  externalNameKoKr: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNamePtPt: string;
  externalNameRuRu: string;
  externalNameZhCn: string;
  externalNameZhTw: string;
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
}

export namespace ShiftClassification {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<ShiftClassification> = new StringField('country', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ShiftClassification> = new StringField('createdBy', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<ShiftClassification> = new DateField('createdDate', ShiftClassification, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ShiftClassification> = new DateField('createdDateTime', ShiftClassification, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ShiftClassification> = new StringField('externalCode', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<ShiftClassification> = new StringField('externalName_de_DE', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<ShiftClassification> = new StringField('externalName_defaultValue', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<ShiftClassification> = new StringField('externalName_en_GB', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<ShiftClassification> = new StringField('externalName_en_US', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<ShiftClassification> = new StringField('externalName_es_ES', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<ShiftClassification> = new StringField('externalName_fr_FR', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<ShiftClassification> = new StringField('externalName_ja_JP', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<ShiftClassification> = new StringField('externalName_ko_KR', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<ShiftClassification> = new StringField('externalName_localized', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<ShiftClassification> = new StringField('externalName_nl_NL', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<ShiftClassification> = new StringField('externalName_pt_BR', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<ShiftClassification> = new StringField('externalName_pt_PT', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<ShiftClassification> = new StringField('externalName_ru_RU', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<ShiftClassification> = new StringField('externalName_zh_CN', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<ShiftClassification> = new StringField('externalName_zh_TW', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ShiftClassification> = new StringField('lastModifiedBy', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<ShiftClassification> = new DateField('lastModifiedDate', ShiftClassification, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ShiftClassification> = new DateField('lastModifiedDateTime', ShiftClassification, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<ShiftClassification> = new DateField('lastModifiedDateWithTZ', ShiftClassification, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<ShiftClassification> = new DateField('mdfSystemEffectiveEndDate', ShiftClassification, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<ShiftClassification> = new DateField('mdfSystemEffectiveStartDate', ShiftClassification, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<ShiftClassification> = new StringField('mdfSystemEntityId', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<ShiftClassification> = new StringField('mdfSystemObjectType', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<ShiftClassification> = new StringField('mdfSystemRecordId', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ShiftClassification> = new StringField('mdfSystemRecordStatus', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<ShiftClassification> = new StringField('mdfSystemStatus', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<ShiftClassification> = new BigNumberField('mdfSystemTransactionSequence', ShiftClassification, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<ShiftClassification> = new BigNumberField('mdfSystemVersionId', ShiftClassification, 'Edm.Int64');
  /**
   * All fields of the ShiftClassification entity.
   */
  export const _allFields: Array<StringField<ShiftClassification> | DateField<ShiftClassification> | BigNumberField<ShiftClassification>> = [
    ShiftClassification.COUNTRY,
    ShiftClassification.CREATED_BY,
    ShiftClassification.CREATED_DATE,
    ShiftClassification.CREATED_DATE_TIME,
    ShiftClassification.EXTERNAL_CODE,
    ShiftClassification.EXTERNAL_NAME_DE_DE,
    ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE,
    ShiftClassification.EXTERNAL_NAME_EN_GB,
    ShiftClassification.EXTERNAL_NAME_EN_US,
    ShiftClassification.EXTERNAL_NAME_ES_ES,
    ShiftClassification.EXTERNAL_NAME_FR_FR,
    ShiftClassification.EXTERNAL_NAME_JA_JP,
    ShiftClassification.EXTERNAL_NAME_KO_KR,
    ShiftClassification.EXTERNAL_NAME_LOCALIZED,
    ShiftClassification.EXTERNAL_NAME_NL_NL,
    ShiftClassification.EXTERNAL_NAME_PT_BR,
    ShiftClassification.EXTERNAL_NAME_PT_PT,
    ShiftClassification.EXTERNAL_NAME_RU_RU,
    ShiftClassification.EXTERNAL_NAME_ZH_CN,
    ShiftClassification.EXTERNAL_NAME_ZH_TW,
    ShiftClassification.LAST_MODIFIED_BY,
    ShiftClassification.LAST_MODIFIED_DATE,
    ShiftClassification.LAST_MODIFIED_DATE_TIME,
    ShiftClassification.LAST_MODIFIED_DATE_WITH_TZ,
    ShiftClassification.MDF_SYSTEM_EFFECTIVE_END_DATE,
    ShiftClassification.MDF_SYSTEM_EFFECTIVE_START_DATE,
    ShiftClassification.MDF_SYSTEM_ENTITY_ID,
    ShiftClassification.MDF_SYSTEM_OBJECT_TYPE,
    ShiftClassification.MDF_SYSTEM_RECORD_ID,
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS,
    ShiftClassification.MDF_SYSTEM_STATUS,
    ShiftClassification.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    ShiftClassification.MDF_SYSTEM_VERSION_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ShiftClassification> = new AllFields('*', ShiftClassification);
  /**
   * All key fields of the ShiftClassification entity.
   */
  export const _keyFields: Array<Selectable<ShiftClassification>> = [ShiftClassification.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property ShiftClassification.
   */
  export const _keys: { [keys: string]: Selectable<ShiftClassification> } = ShiftClassification._keyFields.reduce((acc: { [keys: string]: Selectable<ShiftClassification> }, field: Selectable<ShiftClassification>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
