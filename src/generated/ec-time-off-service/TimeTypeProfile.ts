/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeProfileRequestBuilder } from './TimeTypeProfileRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeTypeProfile" of service "SFOData".
 */
export class TimeTypeProfile extends Entity implements TimeTypeProfileType {
  /**
   * Technical entity name for TimeTypeProfile.
   */
  static _entityName = 'TimeTypeProfile';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeTypeProfile.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Update TOiL Account Only When Changes Approved.
   * @nullable
   */
  bookTimeOffInLieuOnTimeSheetApproval?: boolean;
  /**
   * Update Working Time Account Only When Changes Approved.
   * @nullable
   */
  bookWorkingTimeOnTimeSheetApproval?: boolean;
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
   * Default Import Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  defaultImportAttendanceTimeType?: string;
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
   * Main Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainAttendanceTimeType?: string;
  /**
   * Main Break Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainBreakTimeType?: string;
  /**
   * Main Absence Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainEssTimeType?: string;
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
   * Time Account Type for Time Off in Lieu.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForTimeOffInLieu?: string;
  /**
   * Time Account Type for Working Time Account.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForWorkingTimeAccount?: string;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: string;
  /**
   * One-to-many navigation property to the [[AvailableTimeType]] entity.
   */
  availableTimeTypes!: AvailableTimeType[];
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  defaultImportAttendanceTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainAttendanceTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainBreakTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainEssTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeAccountType_1]] entity.
   */
  timeAccountTypeForTimeOffInLieuNav!: TimeAccountType_1;
  /**
   * One-to-one navigation property to the [[TimeAccountType_1]] entity.
   */
  timeAccountTypeForWorkingTimeAccountNav!: TimeAccountType_1;

  /**
   * Returns an entity builder to construct instances `TimeTypeProfile`.
   * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
   */
  static builder(): EntityBuilderType<TimeTypeProfile, TimeTypeProfileTypeForceMandatory> {
    return Entity.entityBuilder(TimeTypeProfile);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeTypeProfile` entity type.
   * @returns A `TimeTypeProfile` request builder.
   */
  static requestBuilder(): TimeTypeProfileRequestBuilder {
    return new TimeTypeProfileRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeProfile`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
   */
  static customField(fieldName: string): CustomField<TimeTypeProfile> {
    return Entity.customFieldSelector(fieldName, TimeTypeProfile);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AvailableTimeType, AvailableTimeTypeType } from './AvailableTimeType';
import { TimeType, TimeTypeType } from './TimeType';
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

export interface TimeTypeProfileType {
  bookTimeOffInLieuOnTimeSheetApproval?: boolean;
  bookWorkingTimeOnTimeSheetApproval?: boolean;
  country?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  defaultImportAttendanceTimeType?: string;
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
  mainAttendanceTimeType?: string;
  mainBreakTimeType?: string;
  mainEssTimeType?: string;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  timeAccountTypeForTimeOffInLieu?: string;
  timeAccountTypeForWorkingTimeAccount?: string;
  timeRecordingVariant?: string;
  availableTimeTypes: AvailableTimeTypeType[];
  defaultImportAttendanceTimeTypeNav: TimeTypeType;
  mainAttendanceTimeTypeNav: TimeTypeType;
  mainBreakTimeTypeNav: TimeTypeType;
  mainEssTimeTypeNav: TimeTypeType;
  timeAccountTypeForTimeOffInLieuNav: TimeAccountType_1Type;
  timeAccountTypeForWorkingTimeAccountNav: TimeAccountType_1Type;
}

export interface TimeTypeProfileTypeForceMandatory {
  bookTimeOffInLieuOnTimeSheetApproval: boolean;
  bookWorkingTimeOnTimeSheetApproval: boolean;
  country: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  defaultImportAttendanceTimeType: string;
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
  mainAttendanceTimeType: string;
  mainBreakTimeType: string;
  mainEssTimeType: string;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  timeAccountTypeForTimeOffInLieu: string;
  timeAccountTypeForWorkingTimeAccount: string;
  timeRecordingVariant: string;
  availableTimeTypes: AvailableTimeTypeType[];
  defaultImportAttendanceTimeTypeNav: TimeTypeType;
  mainAttendanceTimeTypeNav: TimeTypeType;
  mainBreakTimeTypeNav: TimeTypeType;
  mainEssTimeTypeNav: TimeTypeType;
  timeAccountTypeForTimeOffInLieuNav: TimeAccountType_1Type;
  timeAccountTypeForWorkingTimeAccountNav: TimeAccountType_1Type;
}

export namespace TimeTypeProfile {
  /**
   * Static representation of the [[bookTimeOffInLieuOnTimeSheetApproval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL: BooleanField<TimeTypeProfile> = new BooleanField('bookTimeOffInLieuOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
  /**
   * Static representation of the [[bookWorkingTimeOnTimeSheetApproval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL: BooleanField<TimeTypeProfile> = new BooleanField('bookWorkingTimeOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeTypeProfile> = new StringField('country', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeTypeProfile> = new StringField('createdBy', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TimeTypeProfile> = new DateField('createdDate', TimeTypeProfile, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeTypeProfile> = new DateField('createdDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultImportAttendanceTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('defaultImportAttendanceTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeTypeProfile> = new StringField('externalCode', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeTypeProfile> = new StringField('externalName_de_DE', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeTypeProfile> = new StringField('externalName_defaultValue', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeTypeProfile> = new StringField('externalName_en_GB', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeTypeProfile> = new StringField('externalName_en_US', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeTypeProfile> = new StringField('externalName_es_ES', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeTypeProfile> = new StringField('externalName_fr_FR', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<TimeTypeProfile> = new StringField('externalName_ja_JP', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<TimeTypeProfile> = new StringField('externalName_ko_KR', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeTypeProfile> = new StringField('externalName_localized', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeTypeProfile> = new StringField('externalName_nl_NL', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeTypeProfile> = new StringField('externalName_pt_BR', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<TimeTypeProfile> = new StringField('externalName_pt_PT', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<TimeTypeProfile> = new StringField('externalName_ru_RU', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeTypeProfile> = new StringField('externalName_zh_CN', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<TimeTypeProfile> = new StringField('externalName_zh_TW', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeTypeProfile> = new StringField('lastModifiedBy', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<TimeTypeProfile> = new DateField('lastModifiedDate', TimeTypeProfile, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeProfile> = new DateField('lastModifiedDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeTypeProfile> = new DateField('lastModifiedDateWithTZ', TimeTypeProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mainAttendanceTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ATTENDANCE_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainAttendanceTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mainBreakTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_BREAK_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainBreakTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mainEssTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ESS_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainESSTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeTypeProfile> = new DateField('mdfSystemEffectiveEndDate', TimeTypeProfile, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeTypeProfile> = new DateField('mdfSystemEffectiveStartDate', TimeTypeProfile, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<TimeTypeProfile> = new StringField('mdfSystemEntityId', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeTypeProfile> = new StringField('mdfSystemObjectType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<TimeTypeProfile> = new StringField('mdfSystemRecordId', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeProfile> = new StringField('mdfSystemRecordStatus', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeTypeProfile> = new StringField('mdfSystemStatus', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeTypeProfile> = new BigNumberField('mdfSystemTransactionSequence', TimeTypeProfile, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeTypeProfile> = new BigNumberField('mdfSystemVersionId', TimeTypeProfile, 'Edm.Int64');
  /**
   * Static representation of the [[timeAccountTypeForTimeOffInLieu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU: StringField<TimeTypeProfile> = new StringField('timeAccountTypeForTimeOffInLieu', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[timeAccountTypeForWorkingTimeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT: StringField<TimeTypeProfile> = new StringField('timeAccountTypeForWorkingTimeAccount', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[timeRecordingVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT: StringField<TimeTypeProfile> = new StringField('timeRecordingVariant', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[availableTimeTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVAILABLE_TIME_TYPES: Link<TimeTypeProfile, AvailableTimeType> = new Link('availableTimeTypes', TimeTypeProfile, AvailableTimeType);
  /**
   * Static representation of the one-to-one navigation property [[defaultImportAttendanceTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('defaultImportAttendanceTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mainAttendanceTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainAttendanceTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mainBreakTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_BREAK_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainBreakTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mainEssTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ESS_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainESSTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeForTimeOffInLieuNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: OneToOneLink<TimeTypeProfile, TimeAccountType_1> = new OneToOneLink('timeAccountTypeForTimeOffInLieuNav', TimeTypeProfile, TimeAccountType_1);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeForWorkingTimeAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: OneToOneLink<TimeTypeProfile, TimeAccountType_1> = new OneToOneLink('timeAccountTypeForWorkingTimeAccountNav', TimeTypeProfile, TimeAccountType_1);
  /**
   * All fields of the TimeTypeProfile entity.
   */
  export const _allFields: Array<BooleanField<TimeTypeProfile> | StringField<TimeTypeProfile> | DateField<TimeTypeProfile> | BigNumberField<TimeTypeProfile> | Link<TimeTypeProfile, AvailableTimeType> | OneToOneLink<TimeTypeProfile, TimeType> | OneToOneLink<TimeTypeProfile, TimeAccountType_1>> = [
    TimeTypeProfile.BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL,
    TimeTypeProfile.BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL,
    TimeTypeProfile.COUNTRY,
    TimeTypeProfile.CREATED_BY,
    TimeTypeProfile.CREATED_DATE,
    TimeTypeProfile.CREATED_DATE_TIME,
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE,
    TimeTypeProfile.EXTERNAL_CODE,
    TimeTypeProfile.EXTERNAL_NAME_DE_DE,
    TimeTypeProfile.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeTypeProfile.EXTERNAL_NAME_EN_GB,
    TimeTypeProfile.EXTERNAL_NAME_EN_US,
    TimeTypeProfile.EXTERNAL_NAME_ES_ES,
    TimeTypeProfile.EXTERNAL_NAME_FR_FR,
    TimeTypeProfile.EXTERNAL_NAME_JA_JP,
    TimeTypeProfile.EXTERNAL_NAME_KO_KR,
    TimeTypeProfile.EXTERNAL_NAME_LOCALIZED,
    TimeTypeProfile.EXTERNAL_NAME_NL_NL,
    TimeTypeProfile.EXTERNAL_NAME_PT_BR,
    TimeTypeProfile.EXTERNAL_NAME_PT_PT,
    TimeTypeProfile.EXTERNAL_NAME_RU_RU,
    TimeTypeProfile.EXTERNAL_NAME_ZH_CN,
    TimeTypeProfile.EXTERNAL_NAME_ZH_TW,
    TimeTypeProfile.LAST_MODIFIED_BY,
    TimeTypeProfile.LAST_MODIFIED_DATE,
    TimeTypeProfile.LAST_MODIFIED_DATE_TIME,
    TimeTypeProfile.LAST_MODIFIED_DATE_WITH_TZ,
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE,
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE,
    TimeTypeProfile.MAIN_ESS_TIME_TYPE,
    TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_END_DATE,
    TimeTypeProfile.MDF_SYSTEM_EFFECTIVE_START_DATE,
    TimeTypeProfile.MDF_SYSTEM_ENTITY_ID,
    TimeTypeProfile.MDF_SYSTEM_OBJECT_TYPE,
    TimeTypeProfile.MDF_SYSTEM_RECORD_ID,
    TimeTypeProfile.MDF_SYSTEM_RECORD_STATUS,
    TimeTypeProfile.MDF_SYSTEM_STATUS,
    TimeTypeProfile.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    TimeTypeProfile.MDF_SYSTEM_VERSION_ID,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT,
    TimeTypeProfile.TIME_RECORDING_VARIANT,
    TimeTypeProfile.AVAILABLE_TIME_TYPES,
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV,
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE_NAV,
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE_NAV,
    TimeTypeProfile.MAIN_ESS_TIME_TYPE_NAV,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeTypeProfile> = new AllFields('*', TimeTypeProfile);
  /**
   * All key fields of the TimeTypeProfile entity.
   */
  export const _keyFields: Array<Selectable<TimeTypeProfile>> = [TimeTypeProfile.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeTypeProfile.
   */
  export const _keys: { [keys: string]: Selectable<TimeTypeProfile> } = TimeTypeProfile._keyFields.reduce((acc: { [keys: string]: Selectable<TimeTypeProfile> }, field: Selectable<TimeTypeProfile>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
