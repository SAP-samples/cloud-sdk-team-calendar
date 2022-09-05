/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceCountingMethodRequestBuilder } from './AbsenceCountingMethodRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AbsenceCountingMethod" of service "SFOData".
 */
export class AbsenceCountingMethod extends Entity implements AbsenceCountingMethodType {
  /**
   * Technical entity name for AbsenceCountingMethod.
   */
  static _entityName = 'AbsenceCountingMethod';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AbsenceCountingMethod.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Calculation based on.
   * Maximum length: 255.
   * @nullable
   */
  base?: string;
  /**
   * Consider Holidays.
   * @nullable
   */
  considerHolidays?: boolean;
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
   * Friday.
   * @nullable
   */
  friday?: boolean;
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
   * Monday.
   * @nullable
   */
  monday?: boolean;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: boolean;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: boolean;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: boolean;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: boolean;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: boolean;

  /**
   * Returns an entity builder to construct instances `AbsenceCountingMethod`.
   * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
   */
  static builder(): EntityBuilderType<AbsenceCountingMethod, AbsenceCountingMethodTypeForceMandatory> {
    return Entity.entityBuilder(AbsenceCountingMethod);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AbsenceCountingMethod` entity type.
   * @returns A `AbsenceCountingMethod` request builder.
   */
  static requestBuilder(): AbsenceCountingMethodRequestBuilder {
    return new AbsenceCountingMethodRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AbsenceCountingMethod`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
   */
  static customField(fieldName: string): CustomField<AbsenceCountingMethod> {
    return Entity.customFieldSelector(fieldName, AbsenceCountingMethod);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AbsenceCountingMethodType {
  base?: string;
  considerHolidays?: boolean;
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
  friday?: boolean;
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
  monday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  thursday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
}

export interface AbsenceCountingMethodTypeForceMandatory {
  base: string;
  considerHolidays: boolean;
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
  friday: boolean;
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
  monday: boolean;
  saturday: boolean;
  sunday: boolean;
  thursday: boolean;
  tuesday: boolean;
  wednesday: boolean;
}

export namespace AbsenceCountingMethod {
  /**
   * Static representation of the [[base]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE: StringField<AbsenceCountingMethod> = new StringField('base', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[considerHolidays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONSIDER_HOLIDAYS: BooleanField<AbsenceCountingMethod> = new BooleanField('considerHolidays', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<AbsenceCountingMethod> = new StringField('country', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AbsenceCountingMethod> = new StringField('createdBy', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<AbsenceCountingMethod> = new DateField('createdDate', AbsenceCountingMethod, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AbsenceCountingMethod> = new DateField('createdDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AbsenceCountingMethod> = new StringField('externalCode', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<AbsenceCountingMethod> = new StringField('externalName_de_DE', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<AbsenceCountingMethod> = new StringField('externalName_defaultValue', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<AbsenceCountingMethod> = new StringField('externalName_en_GB', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<AbsenceCountingMethod> = new StringField('externalName_en_US', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<AbsenceCountingMethod> = new StringField('externalName_es_ES', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<AbsenceCountingMethod> = new StringField('externalName_fr_FR', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<AbsenceCountingMethod> = new StringField('externalName_ja_JP', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<AbsenceCountingMethod> = new StringField('externalName_ko_KR', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<AbsenceCountingMethod> = new StringField('externalName_localized', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<AbsenceCountingMethod> = new StringField('externalName_nl_NL', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<AbsenceCountingMethod> = new StringField('externalName_pt_BR', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<AbsenceCountingMethod> = new StringField('externalName_pt_PT', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<AbsenceCountingMethod> = new StringField('externalName_ru_RU', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<AbsenceCountingMethod> = new StringField('externalName_zh_CN', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<AbsenceCountingMethod> = new StringField('externalName_zh_TW', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[friday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('friday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AbsenceCountingMethod> = new StringField('lastModifiedBy', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<AbsenceCountingMethod> = new DateField('lastModifiedDate', AbsenceCountingMethod, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AbsenceCountingMethod> = new DateField('lastModifiedDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<AbsenceCountingMethod> = new DateField('lastModifiedDateWithTZ', AbsenceCountingMethod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<AbsenceCountingMethod> = new DateField('mdfSystemEffectiveEndDate', AbsenceCountingMethod, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<AbsenceCountingMethod> = new DateField('mdfSystemEffectiveStartDate', AbsenceCountingMethod, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<AbsenceCountingMethod> = new StringField('mdfSystemEntityId', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<AbsenceCountingMethod> = new StringField('mdfSystemObjectType', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<AbsenceCountingMethod> = new StringField('mdfSystemRecordId', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AbsenceCountingMethod> = new StringField('mdfSystemRecordStatus', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<AbsenceCountingMethod> = new StringField('mdfSystemStatus', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<AbsenceCountingMethod> = new BigNumberField('mdfSystemTransactionSequence', AbsenceCountingMethod, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<AbsenceCountingMethod> = new BigNumberField('mdfSystemVersionId', AbsenceCountingMethod, 'Edm.Int64');
  /**
   * Static representation of the [[monday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('monday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[saturday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('saturday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[sunday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('sunday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[thursday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('thursday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[tuesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('tuesday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[wednesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('wednesday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * All fields of the AbsenceCountingMethod entity.
   */
  export const _allFields: Array<StringField<AbsenceCountingMethod> | BooleanField<AbsenceCountingMethod> | DateField<AbsenceCountingMethod> | BigNumberField<AbsenceCountingMethod>> = [
    AbsenceCountingMethod.BASE,
    AbsenceCountingMethod.CONSIDER_HOLIDAYS,
    AbsenceCountingMethod.COUNTRY,
    AbsenceCountingMethod.CREATED_BY,
    AbsenceCountingMethod.CREATED_DATE,
    AbsenceCountingMethod.CREATED_DATE_TIME,
    AbsenceCountingMethod.EXTERNAL_CODE,
    AbsenceCountingMethod.EXTERNAL_NAME_DE_DE,
    AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE,
    AbsenceCountingMethod.EXTERNAL_NAME_EN_GB,
    AbsenceCountingMethod.EXTERNAL_NAME_EN_US,
    AbsenceCountingMethod.EXTERNAL_NAME_ES_ES,
    AbsenceCountingMethod.EXTERNAL_NAME_FR_FR,
    AbsenceCountingMethod.EXTERNAL_NAME_JA_JP,
    AbsenceCountingMethod.EXTERNAL_NAME_KO_KR,
    AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED,
    AbsenceCountingMethod.EXTERNAL_NAME_NL_NL,
    AbsenceCountingMethod.EXTERNAL_NAME_PT_BR,
    AbsenceCountingMethod.EXTERNAL_NAME_PT_PT,
    AbsenceCountingMethod.EXTERNAL_NAME_RU_RU,
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN,
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_TW,
    AbsenceCountingMethod.FRIDAY,
    AbsenceCountingMethod.LAST_MODIFIED_BY,
    AbsenceCountingMethod.LAST_MODIFIED_DATE,
    AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME,
    AbsenceCountingMethod.LAST_MODIFIED_DATE_WITH_TZ,
    AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_END_DATE,
    AbsenceCountingMethod.MDF_SYSTEM_EFFECTIVE_START_DATE,
    AbsenceCountingMethod.MDF_SYSTEM_ENTITY_ID,
    AbsenceCountingMethod.MDF_SYSTEM_OBJECT_TYPE,
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_ID,
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS,
    AbsenceCountingMethod.MDF_SYSTEM_STATUS,
    AbsenceCountingMethod.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    AbsenceCountingMethod.MDF_SYSTEM_VERSION_ID,
    AbsenceCountingMethod.MONDAY,
    AbsenceCountingMethod.SATURDAY,
    AbsenceCountingMethod.SUNDAY,
    AbsenceCountingMethod.THURSDAY,
    AbsenceCountingMethod.TUESDAY,
    AbsenceCountingMethod.WEDNESDAY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AbsenceCountingMethod> = new AllFields('*', AbsenceCountingMethod);
  /**
   * All key fields of the AbsenceCountingMethod entity.
   */
  export const _keyFields: Array<Selectable<AbsenceCountingMethod>> = [AbsenceCountingMethod.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AbsenceCountingMethod.
   */
  export const _keys: { [keys: string]: Selectable<AbsenceCountingMethod> } = AbsenceCountingMethod._keyFields.reduce((acc: { [keys: string]: Selectable<AbsenceCountingMethod> }, field: Selectable<AbsenceCountingMethod>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
