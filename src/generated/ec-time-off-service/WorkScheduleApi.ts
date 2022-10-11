/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkSchedule } from './WorkSchedule';
import { WorkScheduleRequestBuilder } from './WorkScheduleRequestBuilder';
import { ShiftClassificationApi } from './ShiftClassificationApi';
import { WorkScheduleDayModelAssignmentApi } from './WorkScheduleDayModelAssignmentApi';
import { WorkScheduleDayApi } from './WorkScheduleDayApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export class WorkScheduleApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      WorkSchedule<
        DeSerializersT
      >, 
      DeSerializersT
    > {
  public deSerializers: DeSerializersT;

  constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
      /**
       * Static representation of the one-to-one navigation property {@link periodModelNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      PERIOD_MODEL_NAV: OneToOneLink<
            WorkSchedule<DeSerializersT>,
            DeSerializersT,
            WorkScheduleApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-one navigation property {@link shiftClassificationNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      SHIFT_CLASSIFICATION_NAV: OneToOneLink<
            WorkSchedule<DeSerializersT>,
            DeSerializersT,
            ShiftClassificationApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-many navigation property {@link workScheduleDayModels} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      WORK_SCHEDULE_DAY_MODELS: Link<
            WorkSchedule<DeSerializersT>,
            DeSerializersT,
            WorkScheduleDayModelAssignmentApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-many navigation property {@link workScheduleDays} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      WORK_SCHEDULE_DAYS: Link<
            WorkSchedule<DeSerializersT>,
            DeSerializersT,
            WorkScheduleDayApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        WorkScheduleApi<DeSerializersT>,ShiftClassificationApi<DeSerializersT>,WorkScheduleDayModelAssignmentApi<DeSerializersT>,WorkScheduleDayApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          PERIOD_MODEL_NAV: new OneToOneLink(
              'periodModelNav',
              this,
              linkedApis[0]
            ),
          SHIFT_CLASSIFICATION_NAV: new OneToOneLink(
              'shiftClassificationNav',
              this,
              linkedApis[1]
            ),
          WORK_SCHEDULE_DAY_MODELS: new Link(
              'workScheduleDayModels',
              this,
              linkedApis[2]
            ),
          WORK_SCHEDULE_DAYS: new Link(
              'workScheduleDays',
              this,
              linkedApis[3]
            )
        };
        return this;
      }
  
  entityConstructor = WorkSchedule;
  
  requestBuilder(): WorkScheduleRequestBuilder<
    DeSerializersT
  > {
    return new WorkScheduleRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    WorkSchedule<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  WorkSchedule<
      DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkSchedule, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(WorkSchedule, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AVERAGE_HOURS_PER_DAY: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
AVERAGE_HOURS_PER_MONTH: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
AVERAGE_HOURS_PER_WEEK: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
AVERAGE_HOURS_PER_YEAR: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
AVERAGE_WORKING_DAYS_PER_WEEK: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
COUNTRY: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_US: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_PT: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_RU_RU: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_TW: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
FLEXIBLE_REQUESTING_ALLOWED: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
INDIVIDUAL_WORK_SCHEDULE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MODEL_CATEGORY: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PERIOD_MODEL: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
SEARCH_STRING: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
SHIFT_CLASSIFICATION: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
STARTING_DATE: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
TIME_RECORDING_VARIANT: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
USER_ID: OrderableEdmTypeField<WorkSchedule<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link periodModelNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PERIOD_MODEL_NAV: OneToOneLink<
      WorkSchedule<DeSerializersT>,
      DeSerializersT,
      WorkScheduleApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-one navigation property {@link shiftClassificationNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SHIFT_CLASSIFICATION_NAV: OneToOneLink<
      WorkSchedule<DeSerializersT>,
      DeSerializersT,
      ShiftClassificationApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-many navigation property {@link workScheduleDayModels} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WORK_SCHEDULE_DAY_MODELS: Link<
      WorkSchedule<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelAssignmentApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-many navigation property {@link workScheduleDays} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WORK_SCHEDULE_DAYS: Link<
      WorkSchedule<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<WorkSchedule<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link averageHoursPerDay} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AVERAGE_HOURS_PER_DAY: fieldBuilder.buildEdmTypeField('averageHoursPerDay', 'Edm.Decimal', true),
/**
 * Static representation of the {@link averageHoursPerMonth} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AVERAGE_HOURS_PER_MONTH: fieldBuilder.buildEdmTypeField('averageHoursPerMonth', 'Edm.Decimal', true),
/**
 * Static representation of the {@link averageHoursPerWeek} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AVERAGE_HOURS_PER_WEEK: fieldBuilder.buildEdmTypeField('averageHoursPerWeek', 'Edm.Decimal', true),
/**
 * Static representation of the {@link averageHoursPerYear} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AVERAGE_HOURS_PER_YEAR: fieldBuilder.buildEdmTypeField('averageHoursPerYear', 'Edm.Decimal', true),
/**
 * Static representation of the {@link averageWorkingDaysPerWeek} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AVERAGE_WORKING_DAYS_PER_WEEK: fieldBuilder.buildEdmTypeField('averageWorkingDaysPerWeek', 'Edm.Decimal', true),
/**
 * Static representation of the {@link country} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
/**
 * Static representation of the {@link createdBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
/**
 * Static representation of the {@link createdDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_DATE: fieldBuilder.buildEdmTypeField('createdDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link createdDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link externalNameDeDe} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField('externalName_de_DE', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameDefaultValue} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('externalName_defaultValue', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEnGb} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField('externalName_en_GB', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEnUs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField('externalName_en_US', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameEsEs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField('externalName_es_ES', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameFrFr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField('externalName_fr_FR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameJaJp} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField('externalName_ja_JP', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameKoKr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField('externalName_ko_KR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameLocalized} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField('externalName_localized', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameNlNl} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField('externalName_nl_NL', 'Edm.String', true),
/**
 * Static representation of the {@link externalNamePtBr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField('externalName_pt_BR', 'Edm.String', true),
/**
 * Static representation of the {@link externalNamePtPt} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_PT_PT: fieldBuilder.buildEdmTypeField('externalName_pt_PT', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameRuRu} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_RU_RU: fieldBuilder.buildEdmTypeField('externalName_ru_RU', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameZhCn} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField('externalName_zh_CN', 'Edm.String', true),
/**
 * Static representation of the {@link externalNameZhTw} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_NAME_ZH_TW: fieldBuilder.buildEdmTypeField('externalName_zh_TW', 'Edm.String', true),
/**
 * Static representation of the {@link flexibleRequestingAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
FLEXIBLE_REQUESTING_ALLOWED: fieldBuilder.buildEdmTypeField('flexibleRequestingAllowed', 'Edm.Boolean', true),
/**
 * Static representation of the {@link individualWorkSchedule} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INDIVIDUAL_WORK_SCHEDULE: fieldBuilder.buildEdmTypeField('individualWorkSchedule', 'Edm.Boolean', true),
/**
 * Static representation of the {@link lastModifiedBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
/**
 * Static representation of the {@link lastModifiedDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField('lastModifiedDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link lastModifiedDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link lastModifiedDateWithTz} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField('lastModifiedDateWithTZ', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveStartDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link mdfSystemEntityId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_ENTITY_ID: fieldBuilder.buildEdmTypeField('mdfSystemEntityId', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemObjectType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('mdfSystemObjectType', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemRecordId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_RECORD_ID: fieldBuilder.buildEdmTypeField('mdfSystemRecordId', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemRecordStatus', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemStatus', 'Edm.String', true),
/**
 * Static representation of the {@link mdfSystemTransactionSequence} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_TRANSACTION_SEQUENCE: fieldBuilder.buildEdmTypeField('mdfSystemTransactionSequence', 'Edm.Int64', true),
/**
 * Static representation of the {@link mdfSystemVersionId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_VERSION_ID: fieldBuilder.buildEdmTypeField('mdfSystemVersionId', 'Edm.Int64', true),
/**
 * Static representation of the {@link modelCategory} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MODEL_CATEGORY: fieldBuilder.buildEdmTypeField('modelCategory', 'Edm.String', true),
/**
 * Static representation of the {@link periodModel} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PERIOD_MODEL: fieldBuilder.buildEdmTypeField('periodModel', 'Edm.String', true),
/**
 * Static representation of the {@link searchString} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SEARCH_STRING: fieldBuilder.buildEdmTypeField('searchString', 'Edm.String', true),
/**
 * Static representation of the {@link shiftClassification} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SHIFT_CLASSIFICATION: fieldBuilder.buildEdmTypeField('shiftClassification', 'Edm.String', true),
/**
 * Static representation of the {@link startingDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
STARTING_DATE: fieldBuilder.buildEdmTypeField('startingDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link timeRecordingVariant} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_RECORDING_VARIANT: fieldBuilder.buildEdmTypeField('timeRecordingVariant', 'Edm.String', true),
/**
 * Static representation of the {@link userId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', WorkSchedule) 
  };
    }
  
    return this._schema;
  }
}
