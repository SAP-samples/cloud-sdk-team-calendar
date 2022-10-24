/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountDetail } from './TimeAccountDetail';
import { TimeAccountDetailRequestBuilder } from './TimeAccountDetailRequestBuilder';
import { EmployeeTimeCalendarApi } from './EmployeeTimeCalendarApi';
import { EmployeeTimeApi } from './EmployeeTimeApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class TimeAccountDetailApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeAccountDetail<
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
       * Static representation of the one-to-one navigation property {@link calendarEntryNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      CALENDAR_ENTRY_NAV: OneToOneLink<
            TimeAccountDetail<DeSerializersT>,
            DeSerializersT,
            EmployeeTimeCalendarApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-one navigation property {@link employeeTimeNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      EMPLOYEE_TIME_NAV: OneToOneLink<
            TimeAccountDetail<DeSerializersT>,
            DeSerializersT,
            EmployeeTimeApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        EmployeeTimeCalendarApi<DeSerializersT>,EmployeeTimeApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          CALENDAR_ENTRY_NAV: new OneToOneLink(
              'calendarEntryNav',
              this,
              linkedApis[0]
            ),
          EMPLOYEE_TIME_NAV: new OneToOneLink(
              'employeeTimeNav',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = TimeAccountDetail;
  
  requestBuilder(): TimeAccountDetailRequestBuilder<
    DeSerializersT
  > {
    return new TimeAccountDetailRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeAccountDetail<
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
  TimeAccountDetail<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeAccountDetail, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeAccountDetail, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_ACCOUNT_EXTERNAL_CODE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
ACCRUAL_PERIOD_ID: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ADVANCED: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
BOOKING_AMOUNT: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
BOOKING_DATE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
BOOKING_TYPE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
BOOKING_UNIT: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CALENDAR_ENTRY: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CHANGE_CALENDAR: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
COMMENT: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_BY: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EMPLOYEE_TIME: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
PAYOUT_ACCRUAL_SEPARATED: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
REFERENCE_OBJECT: OrderableEdmTypeField<TimeAccountDetail<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link calendarEntryNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CALENDAR_ENTRY_NAV: OneToOneLink<
      TimeAccountDetail<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeCalendarApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-one navigation property {@link employeeTimeNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EMPLOYEE_TIME_NAV: OneToOneLink<
      TimeAccountDetail<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<TimeAccountDetail<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link timeAccountExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeAccount_externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link accrualPeriodId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCRUAL_PERIOD_ID: fieldBuilder.buildEdmTypeField('accrualPeriodId', 'Edm.String', true),
/**
 * Static representation of the {@link advanced} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ADVANCED: fieldBuilder.buildEdmTypeField('advanced', 'Edm.Boolean', true),
/**
 * Static representation of the {@link bookingAmount} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_AMOUNT: fieldBuilder.buildEdmTypeField('bookingAmount', 'Edm.Decimal', true),
/**
 * Static representation of the {@link bookingDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_DATE: fieldBuilder.buildEdmTypeField('bookingDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link bookingType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_TYPE: fieldBuilder.buildEdmTypeField('bookingType', 'Edm.String', true),
/**
 * Static representation of the {@link bookingUnit} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_UNIT: fieldBuilder.buildEdmTypeField('bookingUnit', 'Edm.String', true),
/**
 * Static representation of the {@link calendarEntry} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CALENDAR_ENTRY: fieldBuilder.buildEdmTypeField('calendarEntry', 'Edm.String', true),
/**
 * Static representation of the {@link changeCalendar} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CHANGE_CALENDAR: fieldBuilder.buildEdmTypeField('changeCalendar', 'Edm.String', true),
/**
 * Static representation of the {@link comment} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
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
 * Static representation of the {@link employeeTime} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EMPLOYEE_TIME: fieldBuilder.buildEdmTypeField('employeeTime', 'Edm.String', true),
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
 * Static representation of the {@link payoutAccrualSeparated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAYOUT_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('payoutAccrualSeparated', 'Edm.Boolean', true),
/**
 * Static representation of the {@link referenceObject} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REFERENCE_OBJECT: fieldBuilder.buildEdmTypeField('referenceObject', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeAccountDetail) 
  };
    }
  
    return this._schema;
  }
}
