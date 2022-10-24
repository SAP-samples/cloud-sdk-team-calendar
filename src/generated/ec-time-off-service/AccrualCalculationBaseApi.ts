/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualCalculationBase } from './AccrualCalculationBase';
import { AccrualCalculationBaseRequestBuilder } from './AccrualCalculationBaseRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class AccrualCalculationBaseApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      AccrualCalculationBase<
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
  
  entityConstructor = AccrualCalculationBase;
  
  requestBuilder(): AccrualCalculationBaseRequestBuilder<
    DeSerializersT
  > {
    return new AccrualCalculationBaseRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    AccrualCalculationBase<
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
  AccrualCalculationBase<
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

  private _fieldBuilder?: FieldBuilder<typeof AccrualCalculationBase, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(AccrualCalculationBase, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACTUAL_QUANTITY: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
CREATED_BY: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DATE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
QUANTITY_1: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_2: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_3: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_4: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_5: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
USER_ID: OrderableEdmTypeField<AccrualCalculationBase<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<AccrualCalculationBase<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link actualQuantity} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACTUAL_QUANTITY: fieldBuilder.buildEdmTypeField('actualQuantity', 'Edm.Decimal', true),
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
 * Static representation of the {@link date} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DATE: fieldBuilder.buildEdmTypeField('date', 'Edm.DateTime', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
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
 * Static representation of the {@link quantity1} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_1: fieldBuilder.buildEdmTypeField('quantity1', 'Edm.Decimal', true),
/**
 * Static representation of the {@link quantity2} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_2: fieldBuilder.buildEdmTypeField('quantity2', 'Edm.Decimal', true),
/**
 * Static representation of the {@link quantity3} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_3: fieldBuilder.buildEdmTypeField('quantity3', 'Edm.Decimal', true),
/**
 * Static representation of the {@link quantity4} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_4: fieldBuilder.buildEdmTypeField('quantity4', 'Edm.Decimal', true),
/**
 * Static representation of the {@link quantity5} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_5: fieldBuilder.buildEdmTypeField('quantity5', 'Edm.Decimal', true),
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
ALL_FIELDS: new AllFields('*', AccrualCalculationBase) 
  };
    }
  
    return this._schema;
  }
}
