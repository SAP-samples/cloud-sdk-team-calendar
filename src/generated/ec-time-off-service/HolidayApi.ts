/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Holiday } from './Holiday';
import { HolidayRequestBuilder } from './HolidayRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class HolidayApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Holiday<
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
  
  entityConstructor = Holiday;
  
  requestBuilder(): HolidayRequestBuilder<
    DeSerializersT
  > {
    return new HolidayRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Holiday<
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
  Holiday<
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

  private _fieldBuilder?: FieldBuilder<typeof Holiday, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Holiday, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
HOLIDAY_CODE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
NAME_DE_DE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_DEFAULT_VALUE: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_EN_GB: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_EN_US: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_ES_ES: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_FR_FR: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_JA_JP: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_KO_KR: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_LOCALIZED: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_NL_NL: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_PT_BR: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_PT_PT: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_RU_RU: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_ZH_CN: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
NAME_ZH_TW: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
OLD_NAME: OrderableEdmTypeField<Holiday<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<Holiday<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
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
 * Static representation of the {@link holidayCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
HOLIDAY_CODE: fieldBuilder.buildEdmTypeField('holidayCode', 'Edm.String', false),
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
 * Static representation of the {@link nameDeDe} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_DE_DE: fieldBuilder.buildEdmTypeField('name_de_DE', 'Edm.String', true),
/**
 * Static representation of the {@link nameDefaultValue} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('name_defaultValue', 'Edm.String', true),
/**
 * Static representation of the {@link nameEnGb} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_EN_GB: fieldBuilder.buildEdmTypeField('name_en_GB', 'Edm.String', true),
/**
 * Static representation of the {@link nameEnUs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_EN_US: fieldBuilder.buildEdmTypeField('name_en_US', 'Edm.String', true),
/**
 * Static representation of the {@link nameEsEs} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_ES_ES: fieldBuilder.buildEdmTypeField('name_es_ES', 'Edm.String', true),
/**
 * Static representation of the {@link nameFrFr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_FR_FR: fieldBuilder.buildEdmTypeField('name_fr_FR', 'Edm.String', true),
/**
 * Static representation of the {@link nameJaJp} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_JA_JP: fieldBuilder.buildEdmTypeField('name_ja_JP', 'Edm.String', true),
/**
 * Static representation of the {@link nameKoKr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_KO_KR: fieldBuilder.buildEdmTypeField('name_ko_KR', 'Edm.String', true),
/**
 * Static representation of the {@link nameLocalized} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_LOCALIZED: fieldBuilder.buildEdmTypeField('name_localized', 'Edm.String', true),
/**
 * Static representation of the {@link nameNlNl} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_NL_NL: fieldBuilder.buildEdmTypeField('name_nl_NL', 'Edm.String', true),
/**
 * Static representation of the {@link namePtBr} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_PT_BR: fieldBuilder.buildEdmTypeField('name_pt_BR', 'Edm.String', true),
/**
 * Static representation of the {@link namePtPt} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_PT_PT: fieldBuilder.buildEdmTypeField('name_pt_PT', 'Edm.String', true),
/**
 * Static representation of the {@link nameRuRu} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_RU_RU: fieldBuilder.buildEdmTypeField('name_ru_RU', 'Edm.String', true),
/**
 * Static representation of the {@link nameZhCn} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_ZH_CN: fieldBuilder.buildEdmTypeField('name_zh_CN', 'Edm.String', true),
/**
 * Static representation of the {@link nameZhTw} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
NAME_ZH_TW: fieldBuilder.buildEdmTypeField('name_zh_TW', 'Edm.String', true),
/**
 * Static representation of the {@link oldName} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
OLD_NAME: fieldBuilder.buildEdmTypeField('oldName', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Holiday) 
  };
    }
  
    return this._schema;
  }
}
