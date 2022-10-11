/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeCan } from './EmployeeTimeCan';
import { EmployeeTimeCanRequestBuilder } from './EmployeeTimeCanRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeCanApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmployeeTimeCan<
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
  
  entityConstructor = EmployeeTimeCan;
  
  requestBuilder(): EmployeeTimeCanRequestBuilder<
    DeSerializersT
  > {
    return new EmployeeTimeCanRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmployeeTimeCan<
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
  EmployeeTimeCan<
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

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimeCan, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmployeeTimeCan, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CREATED_BY: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DISABILITY_PERIOD_ONE_END_DATE: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
DISABILITY_PERIOD_THREE_END_DATE: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
DISABILITY_PERIOD_TWO_END_DATE: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<EmployeeTimeCan<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<EmployeeTimeCan<DeSerializers>>
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
 * Static representation of the {@link disabilityPeriodOneEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DISABILITY_PERIOD_ONE_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodOneEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link disabilityPeriodThreeEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DISABILITY_PERIOD_THREE_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodThreeEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link disabilityPeriodTwoEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DISABILITY_PERIOD_TWO_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodTwoEndDate', 'Edm.DateTime', true),
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
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', EmployeeTimeCan) 
  };
    }
  
    return this._schema;
  }
}
