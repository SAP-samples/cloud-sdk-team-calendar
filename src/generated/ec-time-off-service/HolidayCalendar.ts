/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayCalendarRequestBuilder } from './HolidayCalendarRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "HolidayCalendar" of service "SFOData".
 */
export class HolidayCalendar extends Entity implements HolidayCalendarType {
  /**
   * Technical entity name for HolidayCalendar.
   */
  static _entityName = 'HolidayCalendar';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HolidayCalendar.
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
   * One-to-many navigation property to the [[HolidayAssignment]] entity.
   */
  holidayAssignments!: HolidayAssignment[];

  /**
   * Returns an entity builder to construct instances `HolidayCalendar`.
   * @returns A builder that constructs instances of entity type `HolidayCalendar`.
   */
  static builder(): EntityBuilderType<HolidayCalendar, HolidayCalendarTypeForceMandatory> {
    return Entity.entityBuilder(HolidayCalendar);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HolidayCalendar` entity type.
   * @returns A `HolidayCalendar` request builder.
   */
  static requestBuilder(): HolidayCalendarRequestBuilder {
    return new HolidayCalendarRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayCalendar`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HolidayCalendar`.
   */
  static customField(fieldName: string): CustomField<HolidayCalendar> {
    return Entity.customFieldSelector(fieldName, HolidayCalendar);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { HolidayAssignment, HolidayAssignmentType } from './HolidayAssignment';

export interface HolidayCalendarType {
  country?: string;
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
  holidayAssignments: HolidayAssignmentType[];
}

export interface HolidayCalendarTypeForceMandatory {
  country: string;
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
  holidayAssignments: HolidayAssignmentType[];
}

export namespace HolidayCalendar {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<HolidayCalendar> = new StringField('country', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HolidayCalendar> = new StringField('createdBy', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<HolidayCalendar> = new DateField('createdDate', HolidayCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HolidayCalendar> = new DateField('createdDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<HolidayCalendar> = new StringField('externalCode', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HolidayCalendar> = new StringField('lastModifiedBy', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<HolidayCalendar> = new DateField('lastModifiedDate', HolidayCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HolidayCalendar> = new DateField('lastModifiedDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<HolidayCalendar> = new DateField('lastModifiedDateWithTZ', HolidayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<HolidayCalendar> = new DateField('mdfSystemEffectiveEndDate', HolidayCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<HolidayCalendar> = new DateField('mdfSystemEffectiveStartDate', HolidayCalendar, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<HolidayCalendar> = new StringField('mdfSystemEntityId', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<HolidayCalendar> = new StringField('mdfSystemObjectType', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<HolidayCalendar> = new StringField('mdfSystemRecordId', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayCalendar> = new StringField('mdfSystemRecordStatus', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<HolidayCalendar> = new StringField('mdfSystemStatus', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<HolidayCalendar> = new BigNumberField('mdfSystemTransactionSequence', HolidayCalendar, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<HolidayCalendar> = new BigNumberField('mdfSystemVersionId', HolidayCalendar, 'Edm.Int64');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<HolidayCalendar> = new StringField('name_de_DE', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<HolidayCalendar> = new StringField('name_defaultValue', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<HolidayCalendar> = new StringField('name_en_GB', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<HolidayCalendar> = new StringField('name_en_US', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<HolidayCalendar> = new StringField('name_es_ES', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<HolidayCalendar> = new StringField('name_fr_FR', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_JA_JP: StringField<HolidayCalendar> = new StringField('name_ja_JP', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_KO_KR: StringField<HolidayCalendar> = new StringField('name_ko_KR', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<HolidayCalendar> = new StringField('name_localized', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<HolidayCalendar> = new StringField('name_nl_NL', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<HolidayCalendar> = new StringField('name_pt_BR', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[namePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_PT: StringField<HolidayCalendar> = new StringField('name_pt_PT', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_RU_RU: StringField<HolidayCalendar> = new StringField('name_ru_RU', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<HolidayCalendar> = new StringField('name_zh_CN', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_TW: StringField<HolidayCalendar> = new StringField('name_zh_TW', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[oldName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OLD_NAME: StringField<HolidayCalendar> = new StringField('oldName', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[holidayAssignments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_ASSIGNMENTS: Link<HolidayCalendar, HolidayAssignment> = new Link('holidayAssignments', HolidayCalendar, HolidayAssignment);
  /**
   * All fields of the HolidayCalendar entity.
   */
  export const _allFields: Array<StringField<HolidayCalendar> | DateField<HolidayCalendar> | BigNumberField<HolidayCalendar> | Link<HolidayCalendar, HolidayAssignment>> = [
    HolidayCalendar.COUNTRY,
    HolidayCalendar.CREATED_BY,
    HolidayCalendar.CREATED_DATE,
    HolidayCalendar.CREATED_DATE_TIME,
    HolidayCalendar.EXTERNAL_CODE,
    HolidayCalendar.LAST_MODIFIED_BY,
    HolidayCalendar.LAST_MODIFIED_DATE,
    HolidayCalendar.LAST_MODIFIED_DATE_TIME,
    HolidayCalendar.LAST_MODIFIED_DATE_WITH_TZ,
    HolidayCalendar.MDF_SYSTEM_EFFECTIVE_END_DATE,
    HolidayCalendar.MDF_SYSTEM_EFFECTIVE_START_DATE,
    HolidayCalendar.MDF_SYSTEM_ENTITY_ID,
    HolidayCalendar.MDF_SYSTEM_OBJECT_TYPE,
    HolidayCalendar.MDF_SYSTEM_RECORD_ID,
    HolidayCalendar.MDF_SYSTEM_RECORD_STATUS,
    HolidayCalendar.MDF_SYSTEM_STATUS,
    HolidayCalendar.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    HolidayCalendar.MDF_SYSTEM_VERSION_ID,
    HolidayCalendar.NAME_DE_DE,
    HolidayCalendar.NAME_DEFAULT_VALUE,
    HolidayCalendar.NAME_EN_GB,
    HolidayCalendar.NAME_EN_US,
    HolidayCalendar.NAME_ES_ES,
    HolidayCalendar.NAME_FR_FR,
    HolidayCalendar.NAME_JA_JP,
    HolidayCalendar.NAME_KO_KR,
    HolidayCalendar.NAME_LOCALIZED,
    HolidayCalendar.NAME_NL_NL,
    HolidayCalendar.NAME_PT_BR,
    HolidayCalendar.NAME_PT_PT,
    HolidayCalendar.NAME_RU_RU,
    HolidayCalendar.NAME_ZH_CN,
    HolidayCalendar.NAME_ZH_TW,
    HolidayCalendar.OLD_NAME,
    HolidayCalendar.HOLIDAY_ASSIGNMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HolidayCalendar> = new AllFields('*', HolidayCalendar);
  /**
   * All key fields of the HolidayCalendar entity.
   */
  export const _keyFields: Array<Selectable<HolidayCalendar>> = [HolidayCalendar.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property HolidayCalendar.
   */
  export const _keys: { [keys: string]: Selectable<HolidayCalendar> } = HolidayCalendar._keyFields.reduce((acc: { [keys: string]: Selectable<HolidayCalendar> }, field: Selectable<HolidayCalendar>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
