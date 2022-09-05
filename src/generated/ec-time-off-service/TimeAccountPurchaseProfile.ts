/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPurchaseProfileRequestBuilder } from './TimeAccountPurchaseProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountPurchaseProfile" of service "SFOData".
 */
export class TimeAccountPurchaseProfile extends Entity implements TimeAccountPurchaseProfileType {
  /**
   * Technical entity name for TimeAccountPurchaseProfile.
   */
  static _entityName = 'TimeAccountPurchaseProfile';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountPurchaseProfile.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Allow user to select the Deduction Start Date.
   * @nullable
   */
  allowDeductionStartDateSelection?: boolean;
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
   * Deduction Schedule.
   * Maximum length: 128.
   * @nullable
   */
  deductionSchedule?: string;
  /**
   * Deduction Type.
   * Maximum length: 128.
   * @nullable
   */
  deductionType?: string;
  /**
   * Equivalent Units.
   * Maximum length: 128.
   * @nullable
   */
  equivalentUnits?: string;
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
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextDeDe?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextDefaultValue?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnDebug?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnGb?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnUs?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEsEs?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextFrFr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextJaJp?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextKoKr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextLocalized?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextNlNl?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextPtBr?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextPtPt?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextRuRu?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextZhCn?: string;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextZhTw?: string;
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
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: string;
  /**
   * One-to-many navigation property to the [[TimeAccountPurchaseProfilePayComponentAssignment]] entity.
   */
  deductionPayComponents!: TimeAccountPurchaseProfilePayComponentAssignment[];

  /**
   * Returns an entity builder to construct instances `TimeAccountPurchaseProfile`.
   * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
   */
  static builder(): EntityBuilderType<TimeAccountPurchaseProfile, TimeAccountPurchaseProfileTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountPurchaseProfile);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfile` entity type.
   * @returns A `TimeAccountPurchaseProfile` request builder.
   */
  static requestBuilder(): TimeAccountPurchaseProfileRequestBuilder {
    return new TimeAccountPurchaseProfileRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfile`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
   */
  static customField(fieldName: string): CustomField<TimeAccountPurchaseProfile> {
    return Entity.customFieldSelector(fieldName, TimeAccountPurchaseProfile);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeAccountPurchaseProfilePayComponentAssignment, TimeAccountPurchaseProfilePayComponentAssignmentType } from './TimeAccountPurchaseProfilePayComponentAssignment';

export interface TimeAccountPurchaseProfileType {
  allowDeductionStartDateSelection?: boolean;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  deductionSchedule?: string;
  deductionType?: string;
  equivalentUnits?: string;
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
  helpTextDeDe?: string;
  helpTextDefaultValue?: string;
  helpTextEnDebug?: string;
  helpTextEnGb?: string;
  helpTextEnUs?: string;
  helpTextEsEs?: string;
  helpTextFrFr?: string;
  helpTextJaJp?: string;
  helpTextKoKr?: string;
  helpTextLocalized?: string;
  helpTextNlNl?: string;
  helpTextPtBr?: string;
  helpTextPtPt?: string;
  helpTextRuRu?: string;
  helpTextZhCn?: string;
  helpTextZhTw?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  workflowConfiguration?: string;
  deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignmentType[];
}

export interface TimeAccountPurchaseProfileTypeForceMandatory {
  allowDeductionStartDateSelection: boolean;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  deductionSchedule: string;
  deductionType: string;
  equivalentUnits: string;
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
  helpTextDeDe: string;
  helpTextDefaultValue: string;
  helpTextEnDebug: string;
  helpTextEnGb: string;
  helpTextEnUs: string;
  helpTextEsEs: string;
  helpTextFrFr: string;
  helpTextJaJp: string;
  helpTextKoKr: string;
  helpTextLocalized: string;
  helpTextNlNl: string;
  helpTextPtBr: string;
  helpTextPtPt: string;
  helpTextRuRu: string;
  helpTextZhCn: string;
  helpTextZhTw: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  workflowConfiguration: string;
  deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignmentType[];
}

export namespace TimeAccountPurchaseProfile {
  /**
   * Static representation of the [[allowDeductionStartDateSelection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_DEDUCTION_START_DATE_SELECTION: BooleanField<TimeAccountPurchaseProfile> = new BooleanField('allowDeductionStartDateSelection', TimeAccountPurchaseProfile, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeAccountPurchaseProfile> = new StringField('country', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountPurchaseProfile> = new StringField('createdBy', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountPurchaseProfile> = new DateField('createdDateTime', TimeAccountPurchaseProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deductionSchedule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_SCHEDULE: StringField<TimeAccountPurchaseProfile> = new StringField('deductionSchedule', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[deductionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TYPE: StringField<TimeAccountPurchaseProfile> = new StringField('deductionType', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[equivalentUnits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIVALENT_UNITS: StringField<TimeAccountPurchaseProfile> = new StringField('equivalentUnits', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountPurchaseProfile> = new StringField('externalCode', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_de_DE', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_defaultValue', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_en_DEBUG', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_en_GB', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_en_US', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_es_ES', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_fr_FR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_ja_JP', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_ko_KR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_localized', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_nl_NL', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_pt_BR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_pt_PT', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_ru_RU', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_zh_CN', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountPurchaseProfile> = new StringField('externalName_zh_TW', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_DE_DE: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_de_DE', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_DEFAULT_VALUE: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_defaultValue', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_EN_DEBUG: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_en_DEBUG', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_EN_GB: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_en_GB', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_EN_US: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_en_US', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_ES_ES: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_es_ES', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_FR_FR: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_fr_FR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_JA_JP: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_ja_JP', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_KO_KR: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_ko_KR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_LOCALIZED: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_localized', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_NL_NL: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_nl_NL', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_PT_BR: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_pt_BR', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextPtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_PT_PT: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_pt_PT', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_RU_RU: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_ru_RU', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_ZH_CN: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_zh_CN', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[helpTextZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HELP_TEXT_ZH_TW: StringField<TimeAccountPurchaseProfile> = new StringField('helpText_zh_TW', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountPurchaseProfile> = new StringField('lastModifiedBy', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPurchaseProfile> = new DateField('lastModifiedDateTime', TimeAccountPurchaseProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPurchaseProfile> = new StringField('mdfSystemRecordStatus', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the [[workflowConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_CONFIGURATION: StringField<TimeAccountPurchaseProfile> = new StringField('workflowConfiguration', TimeAccountPurchaseProfile, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[deductionPayComponents]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PAY_COMPONENTS: Link<TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment> = new Link('deductionPayComponents', TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment);
  /**
   * All fields of the TimeAccountPurchaseProfile entity.
   */
  export const _allFields: Array<BooleanField<TimeAccountPurchaseProfile> | StringField<TimeAccountPurchaseProfile> | DateField<TimeAccountPurchaseProfile> | Link<TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment>> = [
    TimeAccountPurchaseProfile.ALLOW_DEDUCTION_START_DATE_SELECTION,
    TimeAccountPurchaseProfile.COUNTRY,
    TimeAccountPurchaseProfile.CREATED_BY,
    TimeAccountPurchaseProfile.CREATED_DATE_TIME,
    TimeAccountPurchaseProfile.DEDUCTION_SCHEDULE,
    TimeAccountPurchaseProfile.DEDUCTION_TYPE,
    TimeAccountPurchaseProfile.EQUIVALENT_UNITS,
    TimeAccountPurchaseProfile.EXTERNAL_CODE,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_DE_DE,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_DEBUG,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_GB,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_EN_US,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ES_ES,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_FR_FR,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_JA_JP,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_KO_KR,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_LOCALIZED,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_NL_NL,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_BR,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_PT_PT,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_RU_RU,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_CN,
    TimeAccountPurchaseProfile.EXTERNAL_NAME_ZH_TW,
    TimeAccountPurchaseProfile.HELP_TEXT_DE_DE,
    TimeAccountPurchaseProfile.HELP_TEXT_DEFAULT_VALUE,
    TimeAccountPurchaseProfile.HELP_TEXT_EN_DEBUG,
    TimeAccountPurchaseProfile.HELP_TEXT_EN_GB,
    TimeAccountPurchaseProfile.HELP_TEXT_EN_US,
    TimeAccountPurchaseProfile.HELP_TEXT_ES_ES,
    TimeAccountPurchaseProfile.HELP_TEXT_FR_FR,
    TimeAccountPurchaseProfile.HELP_TEXT_JA_JP,
    TimeAccountPurchaseProfile.HELP_TEXT_KO_KR,
    TimeAccountPurchaseProfile.HELP_TEXT_LOCALIZED,
    TimeAccountPurchaseProfile.HELP_TEXT_NL_NL,
    TimeAccountPurchaseProfile.HELP_TEXT_PT_BR,
    TimeAccountPurchaseProfile.HELP_TEXT_PT_PT,
    TimeAccountPurchaseProfile.HELP_TEXT_RU_RU,
    TimeAccountPurchaseProfile.HELP_TEXT_ZH_CN,
    TimeAccountPurchaseProfile.HELP_TEXT_ZH_TW,
    TimeAccountPurchaseProfile.LAST_MODIFIED_BY,
    TimeAccountPurchaseProfile.LAST_MODIFIED_DATE_TIME,
    TimeAccountPurchaseProfile.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountPurchaseProfile.WORKFLOW_CONFIGURATION,
    TimeAccountPurchaseProfile.DEDUCTION_PAY_COMPONENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountPurchaseProfile> = new AllFields('*', TimeAccountPurchaseProfile);
  /**
   * All key fields of the TimeAccountPurchaseProfile entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountPurchaseProfile>> = [TimeAccountPurchaseProfile.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfile.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountPurchaseProfile> } = TimeAccountPurchaseProfile._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountPurchaseProfile> }, field: Selectable<TimeAccountPurchaseProfile>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
