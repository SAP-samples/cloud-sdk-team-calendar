/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AvailableTimeType } from './AvailableTimeType';
import { AvailableTimeTypeRequestBuilder } from './AvailableTimeTypeRequestBuilder';
import { TimeTypeApi } from './TimeTypeApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class AvailableTimeTypeApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      AvailableTimeType<
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
       * Static representation of the one-to-one navigation property {@link timeTypeNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      TIME_TYPE_NAV: OneToOneLink<
            AvailableTimeType<DeSerializersT>,
            DeSerializersT,
            TimeTypeApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        TimeTypeApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          TIME_TYPE_NAV: new OneToOneLink(
              'timeTypeNav',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = AvailableTimeType;
  
  requestBuilder(): AvailableTimeTypeRequestBuilder<
    DeSerializersT
  > {
    return new AvailableTimeTypeRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    AvailableTimeType<
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
  AvailableTimeType<
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

  private _fieldBuilder?: FieldBuilder<typeof AvailableTimeType, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(AvailableTimeType, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_TYPE_PROFILE_EXTERNAL_CODE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CREATED_BY: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
ENABLED_IN_ESS_SCENARIO: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
FAVORITE_TIME_TYPE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
HIDE_ACCOUNT_BALANCE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
TIME_TYPE: OrderableEdmTypeField<AvailableTimeType<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link timeTypeNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_TYPE_NAV: OneToOneLink<
      AvailableTimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<AvailableTimeType<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link timeTypeProfileExternalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_TYPE_PROFILE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeTypeProfile_externalCode', 'Edm.String', false),
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
 * Static representation of the {@link enabledInEssScenario} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ENABLED_IN_ESS_SCENARIO: fieldBuilder.buildEdmTypeField('enabledInEssScenario', 'Edm.Boolean', true),
/**
 * Static representation of the {@link externalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
/**
 * Static representation of the {@link favoriteTimeType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
FAVORITE_TIME_TYPE: fieldBuilder.buildEdmTypeField('favoriteTimeType', 'Edm.Boolean', true),
/**
 * Static representation of the {@link hideAccountBalance} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
HIDE_ACCOUNT_BALANCE: fieldBuilder.buildEdmTypeField('hideAccountBalance', 'Edm.Boolean', true),
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
 * Static representation of the {@link timeType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_TYPE: fieldBuilder.buildEdmTypeField('timeType', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', AvailableTimeType) 
  };
    }
  
    return this._schema;
  }
}
