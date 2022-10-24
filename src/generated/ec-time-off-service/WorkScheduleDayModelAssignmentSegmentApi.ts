/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelAssignmentSegment } from './WorkScheduleDayModelAssignmentSegment';
import { WorkScheduleDayModelAssignmentSegmentRequestBuilder } from './WorkScheduleDayModelAssignmentSegmentRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, Time, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      WorkScheduleDayModelAssignmentSegment<
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
  
  entityConstructor = WorkScheduleDayModelAssignmentSegment;
  
  requestBuilder(): WorkScheduleDayModelAssignmentSegmentRequestBuilder<
    DeSerializersT
  > {
    return new WorkScheduleDayModelAssignmentSegmentRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    WorkScheduleDayModelAssignmentSegment<
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
  WorkScheduleDayModelAssignmentSegment<
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

  private _fieldBuilder?: FieldBuilder<typeof WorkScheduleDayModelAssignmentSegment, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(WorkScheduleDayModelAssignmentSegment, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
WORK_SCHEDULE_EXTERNAL_CODE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CATEGORY: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DURATION: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
END_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Time', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
START_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignmentSegment<DeSerializers>, DeSerializersT, 'Edm.Time', true, true>,
ALL_FIELDS: AllFields<WorkScheduleDayModelAssignmentSegment<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link workScheduleDayModelAssignmentDay} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY: fieldBuilder.buildEdmTypeField('WorkScheduleDayModelAssignment_day', 'Edm.Int64', false),
/**
 * Static representation of the {@link workScheduleExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WORK_SCHEDULE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('WorkSchedule_externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link category} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CATEGORY: fieldBuilder.buildEdmTypeField('category', 'Edm.String', true),
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
 * Static representation of the {@link duration} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DURATION: fieldBuilder.buildEdmTypeField('duration', 'Edm.Int64', true),
/**
 * Static representation of the {@link endTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
END_TIME: fieldBuilder.buildEdmTypeField('endTime', 'Edm.Time', true),
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
 * Static representation of the {@link startTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
START_TIME: fieldBuilder.buildEdmTypeField('startTime', 'Edm.Time', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', WorkScheduleDayModelAssignmentSegment) 
  };
    }
  
    return this._schema;
  }
}
