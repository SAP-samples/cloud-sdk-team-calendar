/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelRequestBuilder } from './WorkScheduleDayModelRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkScheduleDayModel" of service "SFOData".
 */
export class WorkScheduleDayModel extends Entity implements WorkScheduleDayModelType {
  /**
   * Technical entity name for WorkScheduleDayModel.
   */
  static _entityName = 'WorkScheduleDayModel';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkScheduleDayModel.
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
   * Description.
   * @nullable
   */
  description?: string;
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
   * Planned Hours And Minutes (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  hoursAndMinutes?: string;
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
   * Shift Classification.
   * Maximum length: 128.
   * @nullable
   */
  shiftClassification?: string;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: string;
  /**
   * Planned Hours (Decimal).
   * @nullable
   */
  workingHours?: BigNumber;
  /**
   * One-to-many navigation property to the [[WorkScheduleDayModelSegment]] entity.
   */
  segments!: WorkScheduleDayModelSegment[];
  /**
   * One-to-one navigation property to the [[ShiftClassification]] entity.
   */
  shiftClassificationNav!: ShiftClassification;

  /**
   * Returns an entity builder to construct instances `WorkScheduleDayModel`.
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
   */
  static builder(): EntityBuilderType<WorkScheduleDayModel, WorkScheduleDayModelTypeForceMandatory> {
    return Entity.entityBuilder(WorkScheduleDayModel);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkScheduleDayModel` entity type.
   * @returns A `WorkScheduleDayModel` request builder.
   */
  static requestBuilder(): WorkScheduleDayModelRequestBuilder {
    return new WorkScheduleDayModelRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModel`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
   */
  static customField(fieldName: string): CustomField<WorkScheduleDayModel> {
    return Entity.customFieldSelector(fieldName, WorkScheduleDayModel);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { WorkScheduleDayModelSegment, WorkScheduleDayModelSegmentType } from './WorkScheduleDayModelSegment';
import { ShiftClassification, ShiftClassificationType } from './ShiftClassification';

export interface WorkScheduleDayModelType {
  country?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  description?: string;
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
  hoursAndMinutes?: string;
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
  shiftClassification?: string;
  timeRecordingVariant?: string;
  workingHours?: BigNumber;
  segments: WorkScheduleDayModelSegmentType[];
  shiftClassificationNav: ShiftClassificationType;
}

export interface WorkScheduleDayModelTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  description: string;
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
  hoursAndMinutes: string;
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
  shiftClassification: string;
  timeRecordingVariant: string;
  workingHours: BigNumber;
  segments: WorkScheduleDayModelSegmentType[];
  shiftClassificationNav: ShiftClassificationType;
}

export namespace WorkScheduleDayModel {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<WorkScheduleDayModel> = new StringField('country', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WorkScheduleDayModel> = new StringField('createdBy', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<WorkScheduleDayModel> = new DateField('createdDate', WorkScheduleDayModel, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WorkScheduleDayModel> = new DateField('createdDateTime', WorkScheduleDayModel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<WorkScheduleDayModel> = new StringField('description', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<WorkScheduleDayModel> = new StringField('externalCode', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<WorkScheduleDayModel> = new StringField('externalName_de_DE', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<WorkScheduleDayModel> = new StringField('externalName_defaultValue', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<WorkScheduleDayModel> = new StringField('externalName_en_GB', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<WorkScheduleDayModel> = new StringField('externalName_en_US', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<WorkScheduleDayModel> = new StringField('externalName_es_ES', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<WorkScheduleDayModel> = new StringField('externalName_fr_FR', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameJaJp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_JA_JP: StringField<WorkScheduleDayModel> = new StringField('externalName_ja_JP', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameKoKr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_KO_KR: StringField<WorkScheduleDayModel> = new StringField('externalName_ko_KR', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<WorkScheduleDayModel> = new StringField('externalName_localized', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<WorkScheduleDayModel> = new StringField('externalName_nl_NL', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<WorkScheduleDayModel> = new StringField('externalName_pt_BR', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtPt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_PT: StringField<WorkScheduleDayModel> = new StringField('externalName_pt_PT', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameRuRu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_RU_RU: StringField<WorkScheduleDayModel> = new StringField('externalName_ru_RU', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<WorkScheduleDayModel> = new StringField('externalName_zh_CN', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhTw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_TW: StringField<WorkScheduleDayModel> = new StringField('externalName_zh_TW', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[hoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS_AND_MINUTES: StringField<WorkScheduleDayModel> = new StringField('hoursAndMinutes', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WorkScheduleDayModel> = new StringField('lastModifiedBy', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<WorkScheduleDayModel> = new DateField('lastModifiedDate', WorkScheduleDayModel, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModel> = new DateField('lastModifiedDateTime', WorkScheduleDayModel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<WorkScheduleDayModel> = new DateField('lastModifiedDateWithTZ', WorkScheduleDayModel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<WorkScheduleDayModel> = new DateField('mdfSystemEffectiveEndDate', WorkScheduleDayModel, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<WorkScheduleDayModel> = new DateField('mdfSystemEffectiveStartDate', WorkScheduleDayModel, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<WorkScheduleDayModel> = new StringField('mdfSystemEntityId', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<WorkScheduleDayModel> = new StringField('mdfSystemObjectType', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<WorkScheduleDayModel> = new StringField('mdfSystemRecordId', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModel> = new StringField('mdfSystemRecordStatus', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<WorkScheduleDayModel> = new StringField('mdfSystemStatus', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<WorkScheduleDayModel> = new BigNumberField('mdfSystemTransactionSequence', WorkScheduleDayModel, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<WorkScheduleDayModel> = new BigNumberField('mdfSystemVersionId', WorkScheduleDayModel, 'Edm.Int64');
  /**
   * Static representation of the [[shiftClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIFT_CLASSIFICATION: StringField<WorkScheduleDayModel> = new StringField('shiftClassification', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[timeRecordingVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT: StringField<WorkScheduleDayModel> = new StringField('timeRecordingVariant', WorkScheduleDayModel, 'Edm.String');
  /**
   * Static representation of the [[workingHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_HOURS: BigNumberField<WorkScheduleDayModel> = new BigNumberField('workingHours', WorkScheduleDayModel, 'Edm.Decimal');
  /**
   * Static representation of the one-to-many navigation property [[segments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENTS: Link<WorkScheduleDayModel, WorkScheduleDayModelSegment> = new Link('segments', WorkScheduleDayModel, WorkScheduleDayModelSegment);
  /**
   * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIFT_CLASSIFICATION_NAV: OneToOneLink<WorkScheduleDayModel, ShiftClassification> = new OneToOneLink('shiftClassificationNav', WorkScheduleDayModel, ShiftClassification);
  /**
   * All fields of the WorkScheduleDayModel entity.
   */
  export const _allFields: Array<StringField<WorkScheduleDayModel> | DateField<WorkScheduleDayModel> | BigNumberField<WorkScheduleDayModel> | Link<WorkScheduleDayModel, WorkScheduleDayModelSegment> | OneToOneLink<WorkScheduleDayModel, ShiftClassification>> = [
    WorkScheduleDayModel.COUNTRY,
    WorkScheduleDayModel.CREATED_BY,
    WorkScheduleDayModel.CREATED_DATE,
    WorkScheduleDayModel.CREATED_DATE_TIME,
    WorkScheduleDayModel.DESCRIPTION,
    WorkScheduleDayModel.EXTERNAL_CODE,
    WorkScheduleDayModel.EXTERNAL_NAME_DE_DE,
    WorkScheduleDayModel.EXTERNAL_NAME_DEFAULT_VALUE,
    WorkScheduleDayModel.EXTERNAL_NAME_EN_GB,
    WorkScheduleDayModel.EXTERNAL_NAME_EN_US,
    WorkScheduleDayModel.EXTERNAL_NAME_ES_ES,
    WorkScheduleDayModel.EXTERNAL_NAME_FR_FR,
    WorkScheduleDayModel.EXTERNAL_NAME_JA_JP,
    WorkScheduleDayModel.EXTERNAL_NAME_KO_KR,
    WorkScheduleDayModel.EXTERNAL_NAME_LOCALIZED,
    WorkScheduleDayModel.EXTERNAL_NAME_NL_NL,
    WorkScheduleDayModel.EXTERNAL_NAME_PT_BR,
    WorkScheduleDayModel.EXTERNAL_NAME_PT_PT,
    WorkScheduleDayModel.EXTERNAL_NAME_RU_RU,
    WorkScheduleDayModel.EXTERNAL_NAME_ZH_CN,
    WorkScheduleDayModel.EXTERNAL_NAME_ZH_TW,
    WorkScheduleDayModel.HOURS_AND_MINUTES,
    WorkScheduleDayModel.LAST_MODIFIED_BY,
    WorkScheduleDayModel.LAST_MODIFIED_DATE,
    WorkScheduleDayModel.LAST_MODIFIED_DATE_TIME,
    WorkScheduleDayModel.LAST_MODIFIED_DATE_WITH_TZ,
    WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_END_DATE,
    WorkScheduleDayModel.MDF_SYSTEM_EFFECTIVE_START_DATE,
    WorkScheduleDayModel.MDF_SYSTEM_ENTITY_ID,
    WorkScheduleDayModel.MDF_SYSTEM_OBJECT_TYPE,
    WorkScheduleDayModel.MDF_SYSTEM_RECORD_ID,
    WorkScheduleDayModel.MDF_SYSTEM_RECORD_STATUS,
    WorkScheduleDayModel.MDF_SYSTEM_STATUS,
    WorkScheduleDayModel.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    WorkScheduleDayModel.MDF_SYSTEM_VERSION_ID,
    WorkScheduleDayModel.SHIFT_CLASSIFICATION,
    WorkScheduleDayModel.TIME_RECORDING_VARIANT,
    WorkScheduleDayModel.WORKING_HOURS,
    WorkScheduleDayModel.SEGMENTS,
    WorkScheduleDayModel.SHIFT_CLASSIFICATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkScheduleDayModel> = new AllFields('*', WorkScheduleDayModel);
  /**
   * All key fields of the WorkScheduleDayModel entity.
   */
  export const _keyFields: Array<Selectable<WorkScheduleDayModel>> = [WorkScheduleDayModel.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property WorkScheduleDayModel.
   */
  export const _keys: { [keys: string]: Selectable<WorkScheduleDayModel> } = WorkScheduleDayModel._keyFields.reduce((acc: { [keys: string]: Selectable<WorkScheduleDayModel> }, field: Selectable<WorkScheduleDayModel>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
