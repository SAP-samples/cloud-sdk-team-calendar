/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPurchaseProfilePayComponentAssignment } from './TimeAccountPurchaseProfilePayComponentAssignment';
import { TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder } from './TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeAccountPurchaseProfilePayComponentAssignment<
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
  
  entityConstructor = TimeAccountPurchaseProfilePayComponentAssignment;
  
  requestBuilder(): TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder<
    DeSerializersT
  > {
    return new TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeAccountPurchaseProfilePayComponentAssignment<
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
  TimeAccountPurchaseProfilePayComponentAssignment<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeAccountPurchaseProfilePayComponentAssignment, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeAccountPurchaseProfilePayComponentAssignment, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CREATED_BY: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_COMPONENT: OrderableEdmTypeField<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
ALL_FIELDS: AllFields<TimeAccountPurchaseProfilePayComponentAssignment<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link timeAccountPurchaseProfileExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeAccountPurchaseProfile_externalCode', 'Edm.String', false),
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
 * Static representation of the {@link payComponent} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_COMPONENT: fieldBuilder.buildEdmTypeField('payComponent', 'Edm.String', false),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeAccountPurchaseProfilePayComponentAssignment) 
  };
    }
  
    return this._schema;
  }
}
