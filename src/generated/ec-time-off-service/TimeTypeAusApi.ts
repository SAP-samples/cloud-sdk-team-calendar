/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeAus } from './TimeTypeAus';
import { TimeTypeAusRequestBuilder } from './TimeTypeAusRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class TimeTypeAusApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeTypeAus<
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
  
  entityConstructor = TimeTypeAus;
  
  requestBuilder(): TimeTypeAusRequestBuilder<
    DeSerializersT
  > {
    return new TimeTypeAusRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeTypeAus<
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
  TimeTypeAus<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeTypeAus, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeTypeAus, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_TYPE_EXTERNAL_CODE: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
ADVANCE_LEAVE_PAYMENT_ALLOWED: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
CREATED_BY: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED: OrderableEdmTypeField<TimeTypeAus<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
ALL_FIELDS: AllFields<TimeTypeAus<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link timeTypeExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_TYPE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeType_externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link advanceLeavePaymentAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ADVANCE_LEAVE_PAYMENT_ALLOWED: fieldBuilder.buildEdmTypeField('advanceLeavePaymentAllowed', 'Edm.Boolean', true),
/**
 * Static representation of the {@link createdBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
/**
 * Static representation of the {@link createdDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.Int64', false),
/**
 * Static representation of the {@link lastModifiedBy} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
/**
 * Static representation of the {@link lastModifiedDateTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
/**
 * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemRecordStatus', 'Edm.String', true),
/**
 * Static representation of the {@link splitPaymentAcrossFinancialYearAllowed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED: fieldBuilder.buildEdmTypeField('splitPaymentAcrossFinancialYearAllowed', 'Edm.Boolean', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeTypeAus) 
  };
    }
  
    return this._schema;
  }
}
