/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualCalculationBaseRequestBuilder } from './AccrualCalculationBaseRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AccrualCalculationBase" of service "SFOData".
 */
export class AccrualCalculationBase extends Entity implements AccrualCalculationBaseType {
  /**
   * Technical entity name for AccrualCalculationBase.
   */
  static _entityName = 'AccrualCalculationBase';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AccrualCalculationBase.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Actual Quantity.
   * @nullable
   */
  actualQuantity?: BigNumber;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDate?: Moment;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: Moment;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: Moment;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: Moment;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: string;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: string;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * mdfSystemStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: string;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: BigNumber;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: BigNumber;
  /**
   * Quantity 1.
   * @nullable
   */
  quantity1?: BigNumber;
  /**
   * Quantity 2.
   * @nullable
   */
  quantity2?: BigNumber;
  /**
   * Quantity 3.
   * @nullable
   */
  quantity3?: BigNumber;
  /**
   * Quantity 4.
   * @nullable
   */
  quantity4?: BigNumber;
  /**
   * Quantity 5.
   * @nullable
   */
  quantity5?: BigNumber;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;

  /**
   * Returns an entity builder to construct instances `AccrualCalculationBase`.
   * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
   */
  static builder(): EntityBuilderType<AccrualCalculationBase, AccrualCalculationBaseTypeForceMandatory> {
    return Entity.entityBuilder(AccrualCalculationBase);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AccrualCalculationBase` entity type.
   * @returns A `AccrualCalculationBase` request builder.
   */
  static requestBuilder(): AccrualCalculationBaseRequestBuilder {
    return new AccrualCalculationBaseRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualCalculationBase`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
   */
  static customField(fieldName: string): CustomField<AccrualCalculationBase> {
    return Entity.customFieldSelector(fieldName, AccrualCalculationBase);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AccrualCalculationBaseType {
  actualQuantity?: BigNumber;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  date?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedDateWithTz?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  quantity1?: BigNumber;
  quantity2?: BigNumber;
  quantity3?: BigNumber;
  quantity4?: BigNumber;
  quantity5?: BigNumber;
  userId?: string;
}

export interface AccrualCalculationBaseTypeForceMandatory {
  actualQuantity: BigNumber;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  date: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedDateWithTz: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  quantity1: BigNumber;
  quantity2: BigNumber;
  quantity3: BigNumber;
  quantity4: BigNumber;
  quantity5: BigNumber;
  userId: string;
}

export namespace AccrualCalculationBase {
  /**
   * Static representation of the [[actualQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTUAL_QUANTITY: BigNumberField<AccrualCalculationBase> = new BigNumberField('actualQuantity', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AccrualCalculationBase> = new StringField('createdBy', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<AccrualCalculationBase> = new DateField('createdDate', AccrualCalculationBase, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AccrualCalculationBase> = new DateField('createdDateTime', AccrualCalculationBase, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<AccrualCalculationBase> = new DateField('date', AccrualCalculationBase, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AccrualCalculationBase> = new StringField('externalCode', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AccrualCalculationBase> = new StringField('lastModifiedBy', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<AccrualCalculationBase> = new DateField('lastModifiedDate', AccrualCalculationBase, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AccrualCalculationBase> = new DateField('lastModifiedDateTime', AccrualCalculationBase, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<AccrualCalculationBase> = new DateField('lastModifiedDateWithTZ', AccrualCalculationBase, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<AccrualCalculationBase> = new DateField('mdfSystemEffectiveEndDate', AccrualCalculationBase, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<AccrualCalculationBase> = new DateField('mdfSystemEffectiveStartDate', AccrualCalculationBase, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<AccrualCalculationBase> = new StringField('mdfSystemEntityId', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<AccrualCalculationBase> = new StringField('mdfSystemObjectType', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<AccrualCalculationBase> = new StringField('mdfSystemRecordId', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AccrualCalculationBase> = new StringField('mdfSystemRecordStatus', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<AccrualCalculationBase> = new StringField('mdfSystemStatus', AccrualCalculationBase, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<AccrualCalculationBase> = new BigNumberField('mdfSystemTransactionSequence', AccrualCalculationBase, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<AccrualCalculationBase> = new BigNumberField('mdfSystemVersionId', AccrualCalculationBase, 'Edm.Int64');
  /**
   * Static representation of the [[quantity1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_1: BigNumberField<AccrualCalculationBase> = new BigNumberField('quantity1', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[quantity2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_2: BigNumberField<AccrualCalculationBase> = new BigNumberField('quantity2', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[quantity3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_3: BigNumberField<AccrualCalculationBase> = new BigNumberField('quantity3', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[quantity4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_4: BigNumberField<AccrualCalculationBase> = new BigNumberField('quantity4', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[quantity5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_5: BigNumberField<AccrualCalculationBase> = new BigNumberField('quantity5', AccrualCalculationBase, 'Edm.Decimal');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<AccrualCalculationBase> = new StringField('userId', AccrualCalculationBase, 'Edm.String');
  /**
   * All fields of the AccrualCalculationBase entity.
   */
  export const _allFields: Array<BigNumberField<AccrualCalculationBase> | StringField<AccrualCalculationBase> | DateField<AccrualCalculationBase>> = [
    AccrualCalculationBase.ACTUAL_QUANTITY,
    AccrualCalculationBase.CREATED_BY,
    AccrualCalculationBase.CREATED_DATE,
    AccrualCalculationBase.CREATED_DATE_TIME,
    AccrualCalculationBase.DATE,
    AccrualCalculationBase.EXTERNAL_CODE,
    AccrualCalculationBase.LAST_MODIFIED_BY,
    AccrualCalculationBase.LAST_MODIFIED_DATE,
    AccrualCalculationBase.LAST_MODIFIED_DATE_TIME,
    AccrualCalculationBase.LAST_MODIFIED_DATE_WITH_TZ,
    AccrualCalculationBase.MDF_SYSTEM_EFFECTIVE_END_DATE,
    AccrualCalculationBase.MDF_SYSTEM_EFFECTIVE_START_DATE,
    AccrualCalculationBase.MDF_SYSTEM_ENTITY_ID,
    AccrualCalculationBase.MDF_SYSTEM_OBJECT_TYPE,
    AccrualCalculationBase.MDF_SYSTEM_RECORD_ID,
    AccrualCalculationBase.MDF_SYSTEM_RECORD_STATUS,
    AccrualCalculationBase.MDF_SYSTEM_STATUS,
    AccrualCalculationBase.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    AccrualCalculationBase.MDF_SYSTEM_VERSION_ID,
    AccrualCalculationBase.QUANTITY_1,
    AccrualCalculationBase.QUANTITY_2,
    AccrualCalculationBase.QUANTITY_3,
    AccrualCalculationBase.QUANTITY_4,
    AccrualCalculationBase.QUANTITY_5,
    AccrualCalculationBase.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AccrualCalculationBase> = new AllFields('*', AccrualCalculationBase);
  /**
   * All key fields of the AccrualCalculationBase entity.
   */
  export const _keyFields: Array<Selectable<AccrualCalculationBase>> = [AccrualCalculationBase.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AccrualCalculationBase.
   */
  export const _keys: { [keys: string]: Selectable<AccrualCalculationBase> } = AccrualCalculationBase._keyFields.reduce((acc: { [keys: string]: Selectable<AccrualCalculationBase> }, field: Selectable<AccrualCalculationBase>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
