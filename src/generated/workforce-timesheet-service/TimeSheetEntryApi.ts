/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeSheetEntry } from './TimeSheetEntry';
import { TimeSheetEntryRequestBuilder } from './TimeSheetEntryRequestBuilder';
import { TimeSheetDataFields, TimeSheetDataFieldsField } from './TimeSheetDataFields';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class TimeSheetEntryApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeSheetEntry<
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
  
  entityConstructor = TimeSheetEntry;
  
  requestBuilder(): TimeSheetEntryRequestBuilder<
    DeSerializersT
  > {
    return new TimeSheetEntryRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeSheetEntry<
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
  TimeSheetEntry<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeSheetEntry, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeSheetEntry, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_SHEET_DATA_FIELDS: TimeSheetDataFieldsField<TimeSheetEntry<DeSerializers>, DeSerializersT, false, true>,
PERSON_WORK_AGREEMENT_EXTERNAL_ID: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
COMPANY_CODE: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
TIME_SHEET_RECORD: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PERSON_WORK_AGREEMENT: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TIME_SHEET_DATE: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
TIME_SHEET_IS_RELEASED_ON_SAVE: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
TIME_SHEET_PREDECESSOR_RECORD: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TIME_SHEET_STATUS: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TIME_SHEET_IS_EXECUTED_IN_TEST_RUN: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
TIME_SHEET_OPERATION: OrderableEdmTypeField<TimeSheetEntry<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<TimeSheetEntry<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link timeSheetDataFields} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_DATA_FIELDS: fieldBuilder.buildComplexTypeField('TimeSheetDataFields', TimeSheetDataFieldsField, false),
/**
 * Static representation of the {@link personWorkAgreementExternalId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PERSON_WORK_AGREEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('PersonWorkAgreementExternalID', 'Edm.String', false),
/**
 * Static representation of the {@link companyCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
/**
 * Static representation of the {@link timeSheetRecord} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_RECORD: fieldBuilder.buildEdmTypeField('TimeSheetRecord', 'Edm.String', false),
/**
 * Static representation of the {@link personWorkAgreement} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField('PersonWorkAgreement', 'Edm.String', true),
/**
 * Static representation of the {@link timeSheetDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_DATE: fieldBuilder.buildEdmTypeField('TimeSheetDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link timeSheetIsReleasedOnSave} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_IS_RELEASED_ON_SAVE: fieldBuilder.buildEdmTypeField('TimeSheetIsReleasedOnSave', 'Edm.Boolean', true),
/**
 * Static representation of the {@link timeSheetPredecessorRecord} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_PREDECESSOR_RECORD: fieldBuilder.buildEdmTypeField('TimeSheetPredecessorRecord', 'Edm.String', true),
/**
 * Static representation of the {@link timeSheetStatus} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_STATUS: fieldBuilder.buildEdmTypeField('TimeSheetStatus', 'Edm.String', true),
/**
 * Static representation of the {@link timeSheetIsExecutedInTestRun} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_IS_EXECUTED_IN_TEST_RUN: fieldBuilder.buildEdmTypeField('TimeSheetIsExecutedInTestRun', 'Edm.Boolean', true),
/**
 * Static representation of the {@link timeSheetOperation} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_SHEET_OPERATION: fieldBuilder.buildEdmTypeField('TimeSheetOperation', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeSheetEntry) 
  };
    }
  
    return this._schema;
  }
}
