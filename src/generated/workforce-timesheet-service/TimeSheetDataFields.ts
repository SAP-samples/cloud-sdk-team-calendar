/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ConstructorOrField, DeSerializers, DefaultDeSerializers, DeserializedType, EdmTypeField, Entity, FieldBuilder, FieldOptions, OrderableEdmTypeField, PropertyMetadata } from '@sap-cloud-sdk/odata-v2';

/**
 * TimeSheetDataFields
 */
export interface TimeSheetDataFields<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  /**
   * Controlling Area.
   * @nullable
   */
  controllingArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sender Cost Center.
   * @nullable
   */
  senderCostCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receiver Cost Center.
   * @nullable
   */
  receiverCostCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Order.
   * @nullable
   */
  internalOrder?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * WBS Element.
   * @nullable
   */
  wbsElement?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Work Item.
   * @nullable
   */
  workItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Billing Control Category.
   * @nullable
   */
  billingControlCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Order.
   * @nullable
   */
  purchaseOrder?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Order Item.
   * @nullable
   */
  purchaseOrderItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Task Type.
   * @nullable
   */
  timeSheetTaskType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Task Level.
   * @nullable
   */
  timeSheetTaskLevel?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Task Component.
   * @nullable
   */
  timeSheetTaskComponent?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Note.
   * @nullable
   */
  timeSheetNote?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Recorded Hours.
   * @nullable
   */
  recordedHours?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Recorded Quantity.
   * @nullable
   */
  recordedQuantity?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Hours Unit Of Measure.
   * @nullable
   */
  hoursUnitOfMeasure?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rejection Reason.
   * @nullable
   */
  rejectionReason?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Work Location Code.
   * @nullable
   */
  timeSheetWrkLocCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Sheet Overtime Category.
   * @nullable
   */
  timeSheetOvertimeCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sender Fund.
   * @nullable
   */
  senderPubSecFund?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sender Functional Area.
   * @nullable
   */
  sendingPubSecFunctionalArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sender Grant.
   * @nullable
   */
  senderPubSecGrant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sender Budget Period.
   * @nullable
   */
  senderPubSecBudgetPeriod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receiver Fund.
   * @nullable
   */
  receiverPubSecFund?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receivier Functiona Area.
   * @nullable
   */
  receiverPubSecFuncnlArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receiver Grant.
   * @nullable
   */
  receiverPubSecGrant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receiver Budget Period.
   * @nullable
   */
  receiverPubSecBudgetPeriod?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TimeSheetDataFieldsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TimeSheetDataFieldsField<EntityT extends Entity, DeSerializersT extends DeSerializers = DefaultDeSerializers, NullableT extends boolean = false, SelectableT extends boolean = false> extends ComplexTypeField<EntityT, DeSerializersT, TimeSheetDataFields, NullableT, SelectableT> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(this, this.deSerializers);
  /**
   * Representation of the {@link TimeSheetDataFields.controllingArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controllingArea: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ControllingArea', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.senderCostCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  senderCostCenter: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('SenderCostCenter', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.receiverCostCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiverCostCenter: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ReceiverCostCenter', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.internalOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalOrder: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('InternalOrder', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.activityType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ActivityType', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.wbsElement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wbsElement: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('WBSElement', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.workItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workItem: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('WorkItem', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.billingControlCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billingControlCategory: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('BillingControlCategory', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.purchaseOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOrder: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('PurchaseOrder', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.purchaseOrderItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOrderItem: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('PurchaseOrderItem', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetTaskType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetTaskType: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetTaskType', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetTaskLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetTaskLevel: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetTaskLevel', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetTaskComponent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetTaskComponent: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetTaskComponent', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetNote} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetNote: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetNote', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.recordedHours} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recordedHours: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Decimal', true, false> = this._fieldBuilder.buildEdmTypeField('RecordedHours', 'Edm.Decimal', true);
  /**
   * Representation of the {@link TimeSheetDataFields.recordedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recordedQuantity: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Decimal', true, false> = this._fieldBuilder.buildEdmTypeField('RecordedQuantity', 'Edm.Decimal', true);
  /**
   * Representation of the {@link TimeSheetDataFields.hoursUnitOfMeasure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoursUnitOfMeasure: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('HoursUnitOfMeasure', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.rejectionReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rejectionReason: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('RejectionReason', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetWrkLocCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetWrkLocCode: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetWrkLocCode', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.timeSheetOvertimeCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeSheetOvertimeCategory: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('TimeSheetOvertimeCategory', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.senderPubSecFund} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  senderPubSecFund: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('SenderPubSecFund', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.sendingPubSecFunctionalArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendingPubSecFunctionalArea: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('SendingPubSecFunctionalArea', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.senderPubSecGrant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  senderPubSecGrant: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('SenderPubSecGrant', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.senderPubSecBudgetPeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  senderPubSecBudgetPeriod: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('SenderPubSecBudgetPeriod', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.receiverPubSecFund} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiverPubSecFund: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ReceiverPubSecFund', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.receiverPubSecFuncnlArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiverPubSecFuncnlArea: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ReceiverPubSecFuncnlArea', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.receiverPubSecGrant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiverPubSecGrant: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ReceiverPubSecGrant', 'Edm.String', true);
  /**
   * Representation of the {@link TimeSheetDataFields.receiverPubSecBudgetPeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiverPubSecBudgetPeriod: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('ReceiverPubSecBudgetPeriod', 'Edm.String', true);

  /**
   * Creates an instance of TimeSheetDataFieldsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>, deSerializers: DeSerializersT, fieldOptions?: FieldOptions<NullableT, SelectableT>) {
    super(fieldName, fieldOf, deSerializers, TimeSheetDataFields, fieldOptions);
  }
}

export namespace TimeSheetDataFields {
  /**
   * Metadata information on all properties of the `TimeSheetDataFields` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TimeSheetDataFields>[] = [{
    originalName: 'ControllingArea',
    name: 'controllingArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SenderCostCenter',
    name: 'senderCostCenter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiverCostCenter',
    name: 'receiverCostCenter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InternalOrder',
    name: 'internalOrder',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActivityType',
    name: 'activityType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WBSElement',
    name: 'wbsElement',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WorkItem',
    name: 'workItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillingControlCategory',
    name: 'billingControlCategory',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PurchaseOrder',
    name: 'purchaseOrder',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PurchaseOrderItem',
    name: 'purchaseOrderItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetTaskType',
    name: 'timeSheetTaskType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetTaskLevel',
    name: 'timeSheetTaskLevel',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetTaskComponent',
    name: 'timeSheetTaskComponent',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetNote',
    name: 'timeSheetNote',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RecordedHours',
    name: 'recordedHours',
    type: 'Edm.Decimal',
    isCollection: false
  }, {
    originalName: 'RecordedQuantity',
    name: 'recordedQuantity',
    type: 'Edm.Decimal',
    isCollection: false
  }, {
    originalName: 'HoursUnitOfMeasure',
    name: 'hoursUnitOfMeasure',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RejectionReason',
    name: 'rejectionReason',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetWrkLocCode',
    name: 'timeSheetWrkLocCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TimeSheetOvertimeCategory',
    name: 'timeSheetOvertimeCategory',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SenderPubSecFund',
    name: 'senderPubSecFund',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SendingPubSecFunctionalArea',
    name: 'sendingPubSecFunctionalArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SenderPubSecGrant',
    name: 'senderPubSecGrant',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SenderPubSecBudgetPeriod',
    name: 'senderPubSecBudgetPeriod',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiverPubSecFund',
    name: 'receiverPubSecFund',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiverPubSecFuncnlArea',
    name: 'receiverPubSecFuncnlArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiverPubSecGrant',
    name: 'receiverPubSecGrant',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiverPubSecBudgetPeriod',
    name: 'receiverPubSecBudgetPeriod',
    type: 'Edm.String',
    isCollection: false
  }];
}
