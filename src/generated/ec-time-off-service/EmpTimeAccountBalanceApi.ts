/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpTimeAccountBalance } from './EmpTimeAccountBalance';
import { EmpTimeAccountBalanceRequestBuilder } from './EmpTimeAccountBalanceRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class EmpTimeAccountBalanceApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      EmpTimeAccountBalance<
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
  
  entityConstructor = EmpTimeAccountBalance;
  
  requestBuilder(): EmpTimeAccountBalanceRequestBuilder<
    DeSerializersT
  > {
    return new EmpTimeAccountBalanceRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    EmpTimeAccountBalance<
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
  EmpTimeAccountBalance<
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

  private _fieldBuilder?: FieldBuilder<typeof EmpTimeAccountBalance, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(EmpTimeAccountBalance, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_CLOSED: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
BALANCE: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
TIME_ACCOUNT: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
TIME_ACCOUNT_TYPE: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TIME_UNIT: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
USER_ID: OrderableEdmTypeField<EmpTimeAccountBalance<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<EmpTimeAccountBalance<DeSerializers>>
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
 * Static representation of the {@link balance} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BALANCE: fieldBuilder.buildEdmTypeField('balance', 'Edm.Decimal', true),
/**
 * Static representation of the {@link timeAccount} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT: fieldBuilder.buildEdmTypeField('timeAccount', 'Edm.String', false),
/**
 * Static representation of the {@link timeAccountType} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField('timeAccountType', 'Edm.String', true),
/**
 * Static representation of the {@link timeUnit} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TIME_UNIT: fieldBuilder.buildEdmTypeField('timeUnit', 'Edm.String', true),
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
ALL_FIELDS: new AllFields('*', EmpTimeAccountBalance) 
  };
    }
  
    return this._schema;
  }
}
