/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccount } from './TimeAccount';
import { TimeAccountRequestBuilder } from './TimeAccountRequestBuilder';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
import { TimeAccountDetailApi } from './TimeAccountDetailApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export class TimeAccountApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeAccount<
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
       * Static representation of the one-to-one navigation property {@link accountTypeNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ACCOUNT_TYPE_NAV: OneToOneLink<
            TimeAccount<DeSerializersT>,
            DeSerializersT,
            TimeAccountType_1Api<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-many navigation property {@link timeAccountDetails} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      TIME_ACCOUNT_DETAILS: Link<
            TimeAccount<DeSerializersT>,
            DeSerializersT,
            TimeAccountDetailApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        TimeAccountType_1Api<DeSerializersT>,TimeAccountDetailApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          ACCOUNT_TYPE_NAV: new OneToOneLink(
              'accountTypeNav',
              this,
              linkedApis[0]
            ),
          TIME_ACCOUNT_DETAILS: new Link(
              'timeAccountDetails',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = TimeAccount;
  
  requestBuilder(): TimeAccountRequestBuilder<
    DeSerializersT
  > {
    return new TimeAccountRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeAccount<
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
  TimeAccount<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeAccount, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeAccount, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_CLOSED: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
ACCOUNT_TYPE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
BOOKING_END_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
BOOKING_START_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_BY: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
END_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
START_DATE: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
USER_ID: OrderableEdmTypeField<TimeAccount<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link accountTypeNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_TYPE_NAV: OneToOneLink<
      TimeAccount<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >,
/**
 * Static representation of the one-to-many navigation property {@link timeAccountDetails} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT_DETAILS: Link<
      TimeAccount<DeSerializersT>,
      DeSerializersT,
      TimeAccountDetailApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<TimeAccount<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link accountClosed} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_CLOSED: fieldBuilder.buildEdmTypeField('accountClosed', 'Edm.Boolean', true),
/**
 * Static representation of the {@link accountType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField('accountType', 'Edm.String', true),
/**
 * Static representation of the {@link bookingEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_END_DATE: fieldBuilder.buildEdmTypeField('bookingEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link bookingStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BOOKING_START_DATE: fieldBuilder.buildEdmTypeField('bookingStartDate', 'Edm.DateTime', true),
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
 * Static representation of the {@link endDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
END_DATE: fieldBuilder.buildEdmTypeField('endDate', 'Edm.DateTime', true),
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
 * Static representation of the {@link startDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
START_DATE: fieldBuilder.buildEdmTypeField('startDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link userId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', TimeAccount) 
  };
    }
  
    return this._schema;
  }
}
