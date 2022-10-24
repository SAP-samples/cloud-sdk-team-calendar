/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceCountingMethod } from './AbsenceCountingMethod';
import { AbsenceCountingMethodRequestBuilder } from './AbsenceCountingMethodRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class AbsenceCountingMethodApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      AbsenceCountingMethod<
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
      
    };

  _addNavigationProperties(
      linkedApis: [
        
      ]): this {
        this.navigationPropertyFields = {
          
        };
        return this;
      }
  
  entityConstructor = AbsenceCountingMethod;
  
  requestBuilder(): AbsenceCountingMethodRequestBuilder<
    DeSerializersT
  > {
    return new AbsenceCountingMethodRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    AbsenceCountingMethod<
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
  AbsenceCountingMethod<
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

  private _fieldBuilder?: FieldBuilder<typeof AbsenceCountingMethod, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(AbsenceCountingMethod, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BASE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CONSIDER_HOLIDAYS: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
COUNTRY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_EN_US: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_PT_PT: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_RU_RU: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_NAME_ZH_TW: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
FRIDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MONDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
SATURDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
SUNDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
THURSDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
TUESDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
WEDNESDAY: OrderableEdmTypeField<AbsenceCountingMethod<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
ALL_FIELDS: AllFields<AbsenceCountingMethod<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link base} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BASE: fieldBuilder.buildEdmTypeField('base', 'Edm.String', true),
/**
 * Static representation of the {@link considerHolidays} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CONSIDER_HOLIDAYS: fieldBuilder.buildEdmTypeField('considerHolidays', 'Edm.Boolean', true),
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
 * Static representation of the {@link friday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
FRIDAY: fieldBuilder.buildEdmTypeField('friday', 'Edm.Boolean', true),
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
 * Static representation of the {@link monday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MONDAY: fieldBuilder.buildEdmTypeField('monday', 'Edm.Boolean', true),
/**
 * Static representation of the {@link saturday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SATURDAY: fieldBuilder.buildEdmTypeField('saturday', 'Edm.Boolean', true),
/**
 * Static representation of the {@link sunday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SUNDAY: fieldBuilder.buildEdmTypeField('sunday', 'Edm.Boolean', true),
/**
 * Static representation of the {@link thursday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
THURSDAY: fieldBuilder.buildEdmTypeField('thursday', 'Edm.Boolean', true),
/**
 * Static representation of the {@link tuesday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TUESDAY: fieldBuilder.buildEdmTypeField('tuesday', 'Edm.Boolean', true),
/**
 * Static representation of the {@link wednesday} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WEDNESDAY: fieldBuilder.buildEdmTypeField('wednesday', 'Edm.Boolean', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', AbsenceCountingMethod) 
  };
    }
  
    return this._schema;
  }
}
