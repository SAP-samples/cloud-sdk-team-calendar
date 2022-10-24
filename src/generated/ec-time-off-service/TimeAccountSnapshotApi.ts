/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountSnapshot } from './TimeAccountSnapshot';
import { TimeAccountSnapshotRequestBuilder } from './TimeAccountSnapshotRequestBuilder';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class TimeAccountSnapshotApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      TimeAccountSnapshot<
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
            TimeAccountSnapshot<DeSerializersT>,
            DeSerializersT,
            TimeAccountType_1Api<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        TimeAccountType_1Api<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          ACCOUNT_TYPE_NAV: new OneToOneLink(
              'accountTypeNav',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = TimeAccountSnapshot;
  
  requestBuilder(): TimeAccountSnapshotRequestBuilder<
    DeSerializersT
  > {
    return new TimeAccountSnapshotRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    TimeAccountSnapshot<
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
  TimeAccountSnapshot<
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

  private _fieldBuilder?: FieldBuilder<typeof TimeAccountSnapshot, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(TimeAccountSnapshot, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_TYPE: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
APPROVED_ABSENCE_BALANCE: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
AS_OF_ACCOUNTING_PERIOD_END: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
AS_OF_PAY_PERIOD_END: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
BALANCE: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
BALANCE_ACCRUAL_SEPARATED: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
BALANCE_EFFECTIVE_DATE: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CREATED_BY: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CREATED_DATE_TIME: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
ENTITY_ID: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
EXTERNAL_CODE: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
LAST_MODIFIED_BY: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.DateTimeOffset', true, true>,
MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
OUTDATED: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
UNIT: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
USER_ID: OrderableEdmTypeField<TimeAccountSnapshot<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-one navigation property {@link accountTypeNav} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_TYPE_NAV: OneToOneLink<
      TimeAccountSnapshot<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >,
ALL_FIELDS: AllFields<TimeAccountSnapshot<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link accountType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField('accountType', 'Edm.String', true),
/**
 * Static representation of the {@link approvedAbsenceBalance} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
APPROVED_ABSENCE_BALANCE: fieldBuilder.buildEdmTypeField('approvedAbsenceBalance', 'Edm.Decimal', true),
/**
 * Static representation of the {@link approvedAbsenceBalanceAccrualSeparated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('approvedAbsenceBalanceAccrualSeparated', 'Edm.Decimal', true),
/**
 * Static representation of the {@link asOfAccountingPeriodEnd} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AS_OF_ACCOUNTING_PERIOD_END: fieldBuilder.buildEdmTypeField('asOfAccountingPeriodEnd', 'Edm.Boolean', true),
/**
 * Static representation of the {@link asOfPayPeriodEnd} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
AS_OF_PAY_PERIOD_END: fieldBuilder.buildEdmTypeField('asOfPayPeriodEnd', 'Edm.Boolean', true),
/**
 * Static representation of the {@link balance} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BALANCE: fieldBuilder.buildEdmTypeField('balance', 'Edm.Decimal', true),
/**
 * Static representation of the {@link balanceAccrualSeparated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BALANCE_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('balanceAccrualSeparated', 'Edm.Decimal', true),
/**
 * Static representation of the {@link balanceEffectiveDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BALANCE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('balanceEffectiveDate', 'Edm.DateTime', true),
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
 * Static representation of the {@link entityId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ENTITY_ID: fieldBuilder.buildEdmTypeField('entityId', 'Edm.String', true),
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
 * Static representation of the {@link outdated} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
OUTDATED: fieldBuilder.buildEdmTypeField('outdated', 'Edm.Boolean', true),
/**
 * Static representation of the {@link unit} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
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
ALL_FIELDS: new AllFields('*', TimeAccountSnapshot) 
  };
    }
  
    return this._schema;
  }
}
