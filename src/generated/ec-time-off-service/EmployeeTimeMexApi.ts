/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeMex } from './EmployeeTimeMex';
import { EmployeeTimeMexRequestBuilder } from './EmployeeTimeMexRequestBuilder';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeMexApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmployeeTimeMex<
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
       * Static representation of the one-to-one navigation property {@link identicalSicknessGroupNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<
            EmployeeTimeMex<DeSerializersT>,
            DeSerializersT,
            EmployeeTimeGroupApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        EmployeeTimeGroupApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          IDENTICAL_SICKNESS_GROUP_NAV: new OneToOneLink(
              'identicalSicknessGroupNav',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = EmployeeTimeMex;
  
  requestBuilder(): EmployeeTimeMexRequestBuilder<
    DeSerializersT
  > {
    return new EmployeeTimeMexRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmployeeTimeMex<
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
  EmployeeTimeMex<
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

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimeMex, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmployeeTimeMex, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CREATED_BY: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
IDENTICAL_SICKNESS_GROUP: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
REFERENCE_NUMBER: OrderableEdmTypeField<EmployeeTimeMex<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link identicalSicknessGroupNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<
      EmployeeTimeMex<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeGroupApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<EmployeeTimeMex<DeSerializers>>
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
 * Static representation of the {@link daysAlreadyCumulatedForSameSickness} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DAYS_ALREADY_CUMULATED_FOR_SAME_SICKNESS: fieldBuilder.buildEdmTypeField('daysAlreadyCumulatedForSameSickness', 'Edm.Decimal', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.Int64', false),
/**
 * Static representation of the {@link identicalSicknessGroup} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
IDENTICAL_SICKNESS_GROUP: fieldBuilder.buildEdmTypeField('identicalSicknessGroup', 'Edm.String', true),
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
 * Static representation of the {@link referenceNumber} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField('referenceNumber', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', EmployeeTimeMex) 
  };
    }
  
    return this._schema;
  }
}
