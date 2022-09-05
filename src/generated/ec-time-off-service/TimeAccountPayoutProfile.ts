/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPayoutProfileRequestBuilder } from './TimeAccountPayoutProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountPayoutProfile" of service "SFOData".
 */
export class TimeAccountPayoutProfile extends Entity implements TimeAccountPayoutProfileType {
  /**
   * Technical entity name for TimeAccountPayoutProfile.
   */
  static _entityName = 'TimeAccountPayoutProfile';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountPayoutProfile.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Country/Region.
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
  externalNameEnDebug?: string;
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
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponent?: string;
  /**
   * Do not use - Separate Pay Component for Accrual.
   * Maximum length: 32.
   * @nullable
   */
  payComponentAccrualSeparated?: string;
  /**
   * Pay Component Group.
   * Maximum length: 32.
   * @nullable
   */
  payComponentGroup?: string;
  /**
   * Pay Component on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTermination?: string;
  /**
   * Separate Pay Component for Accrual on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTerminationAccrualSeparated?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextDeDe?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextDefaultValue?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnDebug?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnGb?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnUs?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEsEs?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextFrFr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextJaJp?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextKoKr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextLocalized?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextNlNl?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextPtBr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextPtPt?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextRuRu?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextZhCn?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextZhTw?: string;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: string;

  /**
   * Returns an entity builder to construct instances `TimeAccountPayoutProfile`.
   * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
   */
  static builder(): EntityBuilderType<TimeAccountPayoutProfile, TimeAccountPayoutProfileTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountPayoutProfile);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountPayoutProfile` entity type.
   * @returns A `TimeAccountPayoutProfile` request builder.
   */
  static requestBuilder(): TimeAccountPayoutProfileRequestBuilder {
    return new TimeAccountPayoutProfileRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPayoutProfile`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
   */
  static customField(fieldName: string): CustomField<TimeAccountPayoutProfile> {
    return Entity.customFieldSelector(fieldName, TimeAccountPayoutProfile);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TimeAccountPayoutProfileType {
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
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
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payComponent?: string;
  payComponentAccrualSeparated?: string;
  payComponentGroup?: string;
  payComponentTermination?: string;
  payComponentTerminationAccrualSeparated?: string;
  payoutMessageTextDeDe?: string;
  payoutMessageTextDefaultValue?: string;
  payoutMessageTextEnDebug?: string;
  payoutMessageTextEnGb?: string;
  payoutMessageTextEnUs?: string;
  payoutMessageTextEsEs?: string;
  payoutMessageTextFrFr?: string;
  payoutMessageTextJaJp?: string;
  payoutMessageTextKoKr?: string;
  payoutMessageTextLocalized?: string;
  payoutMessageTextNlNl?: string;
  payoutMessageTextPtBr?: string;
  payoutMessageTextPtPt?: string;
  payoutMessageTextRuRu?: string;
  payoutMessageTextZhCn?: string;
  payoutMessageTextZhTw?: string;
  workflowConfiguration?: string;
}

export interface TimeAccountPayoutProfileTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
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
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payComponent: string;
  payComponentAccrualSeparated: string;
  payComponentGroup: string;
  payComponentTermination: string;
  payComponentTerminationAccrualSeparated: string;
  payoutMessageTextDeDe: string;
  payoutMessageTextDefaultValue: string;
  payoutMessageTextEnDebug: string;
  payoutMessageTextEnGb: string;
  payoutMessageTextEnUs: string;
  payoutMessageTextEsEs: string;
  payoutMessageTextFrFr: string;
  payoutMessageTextJaJp: string;
  payoutMessageTextKoKr: string;
  payoutMessageTextLocalized: string;
  payoutMessageTextNlNl: string;
  payoutMessageTextPtBr: string;
  payoutMessageTextPtPt: string;
  payoutMessageTextRuRu: string;
  payoutMessageTextZhCn: string;
  payoutMessageTextZhTw: string;
  workflowConfiguration: string;
}

export namespace TimeAccountPayoutProfile {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeAccountPayoutProfile> = new StringField('country', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountPayoutProfile> = new StringField('createdBy', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountPayoutProfile> = new DateField('createdDateTime', TimeAccountPayoutProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountPayoutProfile> = new StringField('externalCode', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeAccountPayoutProfile> = new StringField('externalName_de_DE', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountPayoutProfile> = new StringField('externalName_defaultValue', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<TimeAccountPayoutProfile> = new StringField('externalName_en_DEBUG', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeAccountPayoutProfile> = new StringField('externalName_en_GB', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeAccountPayoutProfile> = new StringField('externalName_en_US', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeAccountPayoutProfile> = new StringField('externalName_es_ES', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeAccountPayoutProfile> = new StringField('externalName_fr_FR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<TimeAccountPayoutProfile> = new StringField('externalName_ja_JP', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<TimeAccountPayoutProfile> = new StringField('externalName_ko_KR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountPayoutProfile> = new StringField('externalName_localized', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeAccountPayoutProfile> = new StringField('externalName_nl_NL', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeAccountPayoutProfile> = new StringField('externalName_pt_BR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<TimeAccountPayoutProfile> = new StringField('externalName_pt_PT', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<TimeAccountPayoutProfile> = new StringField('externalName_ru_RU', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountPayoutProfile> = new StringField('externalName_zh_CN', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountPayoutProfile> = new StringField('externalName_zh_TW', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountPayoutProfile> = new StringField('lastModifiedBy', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPayoutProfile> = new DateField('lastModifiedDateTime', TimeAccountPayoutProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPayoutProfile> = new StringField('mdfSystemRecordStatus', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<TimeAccountPayoutProfile> = new StringField('payComponent', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_ACCRUAL_SEPARATED: StringField<TimeAccountPayoutProfile> = new StringField('payComponentAccrualSeparated', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payComponentGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP: StringField<TimeAccountPayoutProfile> = new StringField('payComponentGroup', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payComponentTermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION: StringField<TimeAccountPayoutProfile> = new StringField('payComponentTermination', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: StringField<TimeAccountPayoutProfile> = new StringField('payComponentTerminationAccrualSeparated', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_DE_DE: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_de_DE', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_defaultValue', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_EN_DEBUG: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_en_DEBUG', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_EN_GB: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_en_GB', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_EN_US: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_en_US', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_ES_ES: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_es_ES', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_FR_FR: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_fr_FR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_JA_JP: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_ja_JP', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_KO_KR: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_ko_KR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_LOCALIZED: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_localized', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_NL_NL: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_nl_NL', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_PT_BR: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_pt_BR', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextPtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_PT_PT: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_pt_PT', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_RU_RU: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_ru_RU', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_ZH_CN: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_zh_CN', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[payoutMessageTextZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_MESSAGE_TEXT_ZH_TW: StringField<TimeAccountPayoutProfile> = new StringField('payoutMessageText_zh_TW', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * Static representation of the [[workflowConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_CONFIGURATION: StringField<TimeAccountPayoutProfile> = new StringField('workflowConfiguration', TimeAccountPayoutProfile, 'Edm.String');
  /**
   * All fields of the TimeAccountPayoutProfile entity.
   */
  export const _allFields: Array<StringField<TimeAccountPayoutProfile> | DateField<TimeAccountPayoutProfile>> = [
    TimeAccountPayoutProfile.COUNTRY,
    TimeAccountPayoutProfile.CREATED_BY,
    TimeAccountPayoutProfile.CREATED_DATE_TIME,
    TimeAccountPayoutProfile.EXTERNAL_CODE,
    TimeAccountPayoutProfile.EXTERNAL_NAME_DE_DE,
    TimeAccountPayoutProfile.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_DEBUG,
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_GB,
    TimeAccountPayoutProfile.EXTERNAL_NAME_EN_US,
    TimeAccountPayoutProfile.EXTERNAL_NAME_ES_ES,
    TimeAccountPayoutProfile.EXTERNAL_NAME_FR_FR,
    TimeAccountPayoutProfile.EXTERNAL_NAME_JA_JP,
    TimeAccountPayoutProfile.EXTERNAL_NAME_KO_KR,
    TimeAccountPayoutProfile.EXTERNAL_NAME_LOCALIZED,
    TimeAccountPayoutProfile.EXTERNAL_NAME_NL_NL,
    TimeAccountPayoutProfile.EXTERNAL_NAME_PT_BR,
    TimeAccountPayoutProfile.EXTERNAL_NAME_PT_PT,
    TimeAccountPayoutProfile.EXTERNAL_NAME_RU_RU,
    TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_CN,
    TimeAccountPayoutProfile.EXTERNAL_NAME_ZH_TW,
    TimeAccountPayoutProfile.LAST_MODIFIED_BY,
    TimeAccountPayoutProfile.LAST_MODIFIED_DATE_TIME,
    TimeAccountPayoutProfile.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountPayoutProfile.PAY_COMPONENT,
    TimeAccountPayoutProfile.PAY_COMPONENT_ACCRUAL_SEPARATED,
    TimeAccountPayoutProfile.PAY_COMPONENT_GROUP,
    TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION,
    TimeAccountPayoutProfile.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DE_DE,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_DEBUG,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_GB,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_EN_US,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ES_ES,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_FR_FR,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_JA_JP,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_KO_KR,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_LOCALIZED,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_NL_NL,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_BR,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_PT_PT,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_RU_RU,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_CN,
    TimeAccountPayoutProfile.PAYOUT_MESSAGE_TEXT_ZH_TW,
    TimeAccountPayoutProfile.WORKFLOW_CONFIGURATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountPayoutProfile> = new AllFields('*', TimeAccountPayoutProfile);
  /**
   * All key fields of the TimeAccountPayoutProfile entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountPayoutProfile>> = [TimeAccountPayoutProfile.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountPayoutProfile.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountPayoutProfile> } = TimeAccountPayoutProfile._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountPayoutProfile> }, field: Selectable<TimeAccountPayoutProfile>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
