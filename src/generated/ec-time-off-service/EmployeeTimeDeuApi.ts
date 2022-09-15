/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeDeu } from './EmployeeTimeDeu';
import { EmployeeTimeDeuRequestBuilder } from './EmployeeTimeDeuRequestBuilder';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeDeuApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmployeeTimeDeu<
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
            EmployeeTimeDeu<DeSerializersT>,
            DeSerializersT,
            EmployeeTimeGroupApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-one navigation property {@link overlappingSicknessGroupNav} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      OVERLAPPING_SICKNESS_GROUP_NAV: OneToOneLink<
            EmployeeTimeDeu<DeSerializersT>,
            DeSerializersT,
            EmployeeTimeGroupApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        EmployeeTimeGroupApi<DeSerializersT>,EmployeeTimeGroupApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          IDENTICAL_SICKNESS_GROUP_NAV: new OneToOneLink(
              'identicalSicknessGroupNav',
              this,
              linkedApis[0]
            ),
          OVERLAPPING_SICKNESS_GROUP_NAV: new OneToOneLink(
              'overlappingSicknessGroupNav',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = EmployeeTimeDeu;
  
  requestBuilder(): EmployeeTimeDeuRequestBuilder<
    DeSerializersT
  > {
    return new EmployeeTimeDeuRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmployeeTimeDeu<
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
  EmployeeTimeDeu<
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

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTimeDeu, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmployeeTimeDeu, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_TIME_EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CONTINUED_PAY_CREDITED_DAYS: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
CONTINUED_PAY_END_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_BY: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.Int64', false, true>,
IDENTICAL_SICKNESS_GROUP: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_STATUS: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.Int64', true, true>,
OVERLAPPING_SICKNESS_GROUP: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PAY_SUPPLEMENT_END_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
PAY_SUPPLEMENT_START_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
SICKNESS_CERTIFICATE_START_DATE: OrderableEdmTypeField<EmployeeTimeDeu<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link identicalSicknessGroupNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<
      EmployeeTimeDeu<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeGroupApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-one navigation property {@link overlappingSicknessGroupNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
OVERLAPPING_SICKNESS_GROUP_NAV: OneToOneLink<
      EmployeeTimeDeu<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeGroupApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<EmployeeTimeDeu<DeSerializers>>
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
 * Static representation of the {@link continuedPayCreditedDays} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CONTINUED_PAY_CREDITED_DAYS: fieldBuilder.buildEdmTypeField('continuedPayCreditedDays', 'Edm.Decimal', true),
/**
 * Static representation of the {@link continuedPayEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CONTINUED_PAY_END_DATE: fieldBuilder.buildEdmTypeField('continuedPayEndDate', 'Edm.DateTime', true),
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
 * Static representation of the {@link overlappingSicknessGroup} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
OVERLAPPING_SICKNESS_GROUP: fieldBuilder.buildEdmTypeField('overlappingSicknessGroup', 'Edm.String', true),
/**
 * Static representation of the {@link paySupplementEndDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_SUPPLEMENT_END_DATE: fieldBuilder.buildEdmTypeField('paySupplementEndDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link paySupplementStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PAY_SUPPLEMENT_START_DATE: fieldBuilder.buildEdmTypeField('paySupplementStartDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link sicknessCertificateStartDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SICKNESS_CERTIFICATE_START_DATE: fieldBuilder.buildEdmTypeField('sicknessCertificateStartDate', 'Edm.DateTime', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', EmployeeTimeDeu) 
  };
    }
  
    return this._schema;
  }
}
