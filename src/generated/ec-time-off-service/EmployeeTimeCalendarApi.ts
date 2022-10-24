/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeCalendar } from './EmployeeTimeCalendar';
import { EmployeeTimeCalendarRequestBuilder } from './EmployeeTimeCalendarRequestBuilder';
import { TimeAccountDetailApi } from './TimeAccountDetailApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, Time, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeCalendarApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmployeeTimeCalendar<
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
       * Static representation of the one-to-many navigation property {@link timeAccountDetail} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      TIME_ACCOUNT_DETAIL: Link<
            EmployeeTimeCalendar<DeSerializersT>,
            DeSerializersT,
            TimeAccountDetailApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        TimeAccountDetailApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          TIME_ACCOUNT_DETAIL: new Link(
              'timeAccountDetail',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = EmployeeTimeCalendar;
  
  requestBuilder(): EmployeeTimeCalendarRequestBuilder<
    DeSerializersT
  > {
    return new EmployeeTimeCalendarRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmployeeTimeCalendar<
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
  EmployeeTimeCalendar<
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

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimeCalendar, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmployeeTimeCalendar, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CREATED_BY: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
DATE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
DEDUCTION_QUANTITY: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
END_TIME: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Time', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
QUANTITY_IN_DAYS: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_IN_HOURS: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
START_TIME: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Time', true, true>,
WORK_SCHEDULE_INTERNAL_ID: OrderableEdmTypeField<EmployeeTimeCalendar<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
/**
 * Static representation of the one-to-many navigation property {@link timeAccountDetail} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT_DETAIL: Link<
      EmployeeTimeCalendar<DeSerializersT>,
      DeSerializersT,
      TimeAccountDetailApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<EmployeeTimeCalendar<DeSerializers>>
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
 * Static representation of the {@link deductionQuantity} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DEDUCTION_QUANTITY: fieldBuilder.buildEdmTypeField('deductionQuantity', 'Edm.Decimal', true),
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
 * Static representation of the {@link quantityInDays} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_IN_DAYS: fieldBuilder.buildEdmTypeField('quantityInDays', 'Edm.Decimal', true),
/**
 * Static representation of the {@link quantityInHours} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_IN_HOURS: fieldBuilder.buildEdmTypeField('quantityInHours', 'Edm.Decimal', true),
/**
 * Static representation of the {@link startTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
START_TIME: fieldBuilder.buildEdmTypeField('startTime', 'Edm.Time', true),
/**
 * Static representation of the {@link workScheduleInternalId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
WORK_SCHEDULE_INTERNAL_ID: fieldBuilder.buildEdmTypeField('workScheduleInternalId', 'Edm.Int64', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', EmployeeTimeCalendar) 
  };
    }
  
    return this._schema;
  }
}
