/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimePol } from './EmployeeTimePol';
import { EmployeeTimePolRequestBuilder } from './EmployeeTimePolRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimePolApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmployeeTimePol<
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
  
  entityConstructor = EmployeeTimePol;
  
  requestBuilder(): EmployeeTimePolRequestBuilder<
    DeSerializersT
  > {
    return new EmployeeTimePolRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmployeeTimePol<
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
  EmployeeTimePol<
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

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimePol, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmployeeTimePol, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
ABSENCE_CODE: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ZLA_DELIVERY_DATE: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
ZLA_DOCUMENT_NUMBER: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ZLA_ISSUE_DATE: OrderableEdmTypeField<EmployeeTimePol<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
ALL_FIELDS: AllFields<EmployeeTimePol<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link employeeTimeExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EMPLOYEE_TIME_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('EmployeeTime_externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link absenceCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ABSENCE_CODE: fieldBuilder.buildEdmTypeField('absenceCode', 'Edm.String', true),
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
 * Static representation of the {@link zlaDeliveryDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ZLA_DELIVERY_DATE: fieldBuilder.buildEdmTypeField('zlaDeliveryDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link zlaDocumentNumber} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ZLA_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField('zlaDocumentNumber', 'Edm.String', true),
/**
 * Static representation of the {@link zlaIssueDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ZLA_ISSUE_DATE: fieldBuilder.buildEdmTypeField('zlaIssueDate', 'Edm.DateTime', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', EmployeeTimePol) 
  };
    }
  
    return this._schema;
  }
}
