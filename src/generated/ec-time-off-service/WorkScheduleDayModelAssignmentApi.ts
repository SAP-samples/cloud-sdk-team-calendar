/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelAssignment } from './WorkScheduleDayModelAssignment';
import { WorkScheduleDayModelAssignmentRequestBuilder } from './WorkScheduleDayModelAssignmentRequestBuilder';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { WorkScheduleDayModelAssignmentSegmentApi } from './WorkScheduleDayModelAssignmentSegmentApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export class WorkScheduleDayModelAssignmentApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      WorkScheduleDayModelAssignment<
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
       * Static representation of the one-to-one navigation property {@link dayModelNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DAY_MODEL_NAV: OneToOneLink<
            WorkScheduleDayModelAssignment<DeSerializersT>,
            DeSerializersT,
            WorkScheduleDayModelApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-many navigation property {@link segments} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      SEGMENTS: Link<
            WorkScheduleDayModelAssignment<DeSerializersT>,
            DeSerializersT,
            WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        WorkScheduleDayModelApi<DeSerializersT>,WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          DAY_MODEL_NAV: new OneToOneLink(
              'dayModelNav',
              this,
              linkedApis[0]
            ),
          SEGMENTS: new Link(
              'segments',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = WorkScheduleDayModelAssignment;
  
  requestBuilder(): WorkScheduleDayModelAssignmentRequestBuilder<
    DeSerializersT
  > {
    return new WorkScheduleDayModelAssignmentRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    WorkScheduleDayModelAssignment<
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
  WorkScheduleDayModelAssignment<
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

  private _fieldBuilder?: FieldBuilder<typeof WorkScheduleDayModelAssignment, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(WorkScheduleDayModelAssignment, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_SCHEDULE_EXTERNAL_CODE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CATEGORY: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DAY: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
DAY_MODEL: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
DAY_WORKING_HOURS: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
HOURS_AND_MINUTES: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<WorkScheduleDayModelAssignment<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link dayModelNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DAY_MODEL_NAV: OneToOneLink<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-many navigation property {@link segments} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SEGMENTS: Link<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<WorkScheduleDayModelAssignment<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
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
 * Static representation of the {@link day} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DAY: fieldBuilder.buildEdmTypeField('day', 'Edm.Int64', false),
/**
 * Static representation of the {@link dayModel} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DAY_MODEL: fieldBuilder.buildEdmTypeField('dayModel', 'Edm.String', true),
/**
 * Static representation of the {@link dayWorkingHours} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DAY_WORKING_HOURS: fieldBuilder.buildEdmTypeField('dayWorkingHours', 'Edm.Decimal', true),
/**
 * Static representation of the {@link hoursAndMinutes} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
HOURS_AND_MINUTES: fieldBuilder.buildEdmTypeField('hoursAndMinutes', 'Edm.String', true),
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
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', WorkScheduleDayModelAssignment) 
  };
    }
  
    return this._schema;
  }
}
