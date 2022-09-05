/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayRequestBuilder } from './HolidayRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Holiday" of service "SFOData".
 */
export class Holiday extends Entity implements HolidayType {
  /**
   * Technical entity name for Holiday.
   */
  static _entityName = 'Holiday';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Holiday.
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
   * Holiday Code.
   * Maximum length: 128.
   */
  holidayCode!: string;
  /**
   * lastModifiedBy.
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
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameJaJp?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameKoKr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtPt?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameRuRu?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhTw?: string;
  /**
   * oldName.
   * Maximum length: 255.
   * @nullable
   */
  oldName?: string;

  /**
   * Returns an entity builder to construct instances `Holiday`.
   * @returns A builder that constructs instances of entity type `Holiday`.
   */
  static builder(): EntityBuilderType<Holiday, HolidayTypeForceMandatory> {
    return Entity.entityBuilder(Holiday);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Holiday` entity type.
   * @returns A `Holiday` request builder.
   */
  static requestBuilder(): HolidayRequestBuilder {
    return new HolidayRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Holiday`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Holiday`.
   */
  static customField(fieldName: string): CustomField<Holiday> {
    return Entity.customFieldSelector(fieldName, Holiday);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface HolidayType {
  country?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  holidayCode: string;
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
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameFrFr?: string;
  nameJaJp?: string;
  nameKoKr?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  namePtPt?: string;
  nameRuRu?: string;
  nameZhCn?: string;
  nameZhTw?: string;
  oldName?: string;
}

export interface HolidayTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  holidayCode: string;
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
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameFrFr: string;
  nameJaJp: string;
  nameKoKr: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  namePtPt: string;
  nameRuRu: string;
  nameZhCn: string;
  nameZhTw: string;
  oldName: string;
}

export namespace Holiday {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Holiday> = new StringField('country', Holiday, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Holiday> = new StringField('createdBy', Holiday, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<Holiday> = new DateField('createdDate', Holiday, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Holiday> = new DateField('createdDateTime', Holiday, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[holidayCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CODE: StringField<Holiday> = new StringField('holidayCode', Holiday, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Holiday> = new StringField('lastModifiedBy', Holiday, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Holiday> = new DateField('lastModifiedDate', Holiday, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Holiday> = new DateField('lastModifiedDateTime', Holiday, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<Holiday> = new DateField('lastModifiedDateWithTZ', Holiday, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<Holiday> = new DateField('mdfSystemEffectiveEndDate', Holiday, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<Holiday> = new DateField('mdfSystemEffectiveStartDate', Holiday, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<Holiday> = new StringField('mdfSystemEntityId', Holiday, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<Holiday> = new StringField('mdfSystemObjectType', Holiday, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<Holiday> = new StringField('mdfSystemRecordId', Holiday, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Holiday> = new StringField('mdfSystemRecordStatus', Holiday, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<Holiday> = new StringField('mdfSystemStatus', Holiday, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<Holiday> = new BigNumberField('mdfSystemTransactionSequence', Holiday, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<Holiday> = new BigNumberField('mdfSystemVersionId', Holiday, 'Edm.Int64');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<Holiday> = new StringField('name_de_DE', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<Holiday> = new StringField('name_defaultValue', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<Holiday> = new StringField('name_en_GB', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<Holiday> = new StringField('name_en_US', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<Holiday> = new StringField('name_es_ES', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<Holiday> = new StringField('name_fr_FR', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_JA_JP: StringField<Holiday> = new StringField('name_ja_JP', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_KO_KR: StringField<Holiday> = new StringField('name_ko_KR', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<Holiday> = new StringField('name_localized', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<Holiday> = new StringField('name_nl_NL', Holiday, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<Holiday> = new StringField('name_pt_BR', Holiday, 'Edm.String');
  /**
   * Static representation of the [[namePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_PT: StringField<Holiday> = new StringField('name_pt_PT', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_RU_RU: StringField<Holiday> = new StringField('name_ru_RU', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<Holiday> = new StringField('name_zh_CN', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_TW: StringField<Holiday> = new StringField('name_zh_TW', Holiday, 'Edm.String');
  /**
   * Static representation of the [[oldName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OLD_NAME: StringField<Holiday> = new StringField('oldName', Holiday, 'Edm.String');
  /**
   * All fields of the Holiday entity.
   */
  export const _allFields: Array<StringField<Holiday> | DateField<Holiday> | BigNumberField<Holiday>> = [
    Holiday.COUNTRY,
    Holiday.CREATED_BY,
    Holiday.CREATED_DATE,
    Holiday.CREATED_DATE_TIME,
    Holiday.HOLIDAY_CODE,
    Holiday.LAST_MODIFIED_BY,
    Holiday.LAST_MODIFIED_DATE,
    Holiday.LAST_MODIFIED_DATE_TIME,
    Holiday.LAST_MODIFIED_DATE_WITH_TZ,
    Holiday.MDF_SYSTEM_EFFECTIVE_END_DATE,
    Holiday.MDF_SYSTEM_EFFECTIVE_START_DATE,
    Holiday.MDF_SYSTEM_ENTITY_ID,
    Holiday.MDF_SYSTEM_OBJECT_TYPE,
    Holiday.MDF_SYSTEM_RECORD_ID,
    Holiday.MDF_SYSTEM_RECORD_STATUS,
    Holiday.MDF_SYSTEM_STATUS,
    Holiday.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    Holiday.MDF_SYSTEM_VERSION_ID,
    Holiday.NAME_DE_DE,
    Holiday.NAME_DEFAULT_VALUE,
    Holiday.NAME_EN_GB,
    Holiday.NAME_EN_US,
    Holiday.NAME_ES_ES,
    Holiday.NAME_FR_FR,
    Holiday.NAME_JA_JP,
    Holiday.NAME_KO_KR,
    Holiday.NAME_LOCALIZED,
    Holiday.NAME_NL_NL,
    Holiday.NAME_PT_BR,
    Holiday.NAME_PT_PT,
    Holiday.NAME_RU_RU,
    Holiday.NAME_ZH_CN,
    Holiday.NAME_ZH_TW,
    Holiday.OLD_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Holiday> = new AllFields('*', Holiday);
  /**
   * All key fields of the Holiday entity.
   */
  export const _keyFields: Array<Selectable<Holiday>> = [Holiday.HOLIDAY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Holiday.
   */
  export const _keys: { [keys: string]: Selectable<Holiday> } = Holiday._keyFields.reduce((acc: { [keys: string]: Selectable<Holiday> }, field: Selectable<Holiday>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
