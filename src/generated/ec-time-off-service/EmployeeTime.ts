/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeRequestBuilder } from './EmployeeTimeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTime" of service "SFOData".
 */
export class EmployeeTime extends Entity implements EmployeeTimeType {
  /**
   * Technical entity name for EmployeeTime.
   */
  static _entityName = 'EmployeeTime';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTime.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Approval Status.
   * Maximum length: 255.
   * @nullable
   */
  approvalStatus?: string;
  /**
   * Cancellation Workflow Request.
   * @nullable
   */
  cancellationWorkflowRequestId?: BigNumber;
  /**
   * Comment.
   * Maximum length: 4000.
   * @nullable
   */
  comment?: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Delivery Type.
   * Maximum length: 128.
   * @nullable
   */
  custDeliverytype?: string;
  /**
   * Expected Week Of Child Birth.
   * @nullable
   */
  custExpectedweek?: Moment;
  /**
   * Notification Date.
   * @nullable
   */
  custNotificationdate?: Moment;
  /**
   * Deduction Quantity.
   * @nullable
   */
  deductionQuantity?: BigNumber;
  /**
   * Editable.
   * @nullable
   */
  editable?: boolean;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Flexible Requesting.
   * @nullable
   */
  flexibleRequesting?: boolean;
  /**
   * Fraction Quantity.
   * @nullable
   */
  fractionQuantity?: BigNumber;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateWithTz?: Moment;
  /**
   * Actual Return Date.
   * @nullable
   */
  loaActualReturnDate?: Moment;
  /**
   * Leave Of Absence Job Info ID (Return To Work).
   * @nullable
   */
  loaEndJobInfoId?: BigNumber;
  /**
   * Expected Return Date.
   * @nullable
   */
  loaExpectedReturnDate?: Moment;
  /**
   * Leave Of Absence Job Info ID (Start).
   * @nullable
   */
  loaStartJobInfoId?: BigNumber;
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
   * Original Number of Days.
   * @nullable
   */
  originalQuantityInDays?: BigNumber;
  /**
   * Number Of Days.
   * @nullable
   */
  quantityInDays?: BigNumber;
  /**
   * Number Of Hours.
   * @nullable
   */
  quantityInHours?: BigNumber;
  /**
   * Recurrence Group.
   * Maximum length: 128.
   * @nullable
   */
  recurrenceGroup?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * Time Record Origin.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordOrigin?: string;
  /**
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: string;
  /**
   * Undetermined End Date.
   * @nullable
   */
  undeterminedEndDate?: boolean;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * Workflow Initiated By Admin.
   * @nullable
   */
  workflowInitiatedByAdmin?: boolean;
  /**
   * Workflow Request.
   * @nullable
   */
  workflowRequestId?: BigNumber;
  /**
   * One-to-one navigation property to the [[EmployeeTimeDeu]] entity.
   */
  countryExtensionDeu!: EmployeeTimeDeu;
  /**
   * One-to-one navigation property to the [[EmployeeTimeEsp]] entity.
   */
  countryExtensionEsp!: EmployeeTimeEsp;
  /**
   * One-to-one navigation property to the [[EmployeeTimeMex]] entity.
   */
  countryExtensionMex!: EmployeeTimeMex;
  /**
   * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
   */
  recurrenceGroupNav!: EmployeeTimeGroup;
  /**
   * One-to-many navigation property to the [[EmployeeTimeCalendar]] entity.
   */
  timeCalendar!: EmployeeTimeCalendar[];
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  timeTypeNav!: TimeType;

  /**
   * Returns an entity builder to construct instances `EmployeeTime`.
   * @returns A builder that constructs instances of entity type `EmployeeTime`.
   */
  static builder(): EntityBuilderType<EmployeeTime, EmployeeTimeTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTime);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTime` entity type.
   * @returns A `EmployeeTime` request builder.
   */
  static requestBuilder(): EmployeeTimeRequestBuilder {
    return new EmployeeTimeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTime`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTime`.
   */
  static customField(fieldName: string): CustomField<EmployeeTime> {
    return Entity.customFieldSelector(fieldName, EmployeeTime);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeeTimeDeu, EmployeeTimeDeuType } from './EmployeeTimeDeu';
import { EmployeeTimeEsp, EmployeeTimeEspType } from './EmployeeTimeEsp';
import { EmployeeTimeMex, EmployeeTimeMexType } from './EmployeeTimeMex';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { TimeType, TimeTypeType } from './TimeType';

export interface EmployeeTimeType {
  approvalStatus?: string;
  cancellationWorkflowRequestId?: BigNumber;
  comment?: string;
  createdBy?: string;
  createdDate?: Moment;
  createdDateTime?: Moment;
  custDeliverytype?: string;
  custExpectedweek?: Moment;
  custNotificationdate?: Moment;
  deductionQuantity?: BigNumber;
  editable?: boolean;
  endDate?: Moment;
  endTime?: Time;
  externalCode: string;
  flexibleRequesting?: boolean;
  fractionQuantity?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedDateWithTz?: Moment;
  loaActualReturnDate?: Moment;
  loaEndJobInfoId?: BigNumber;
  loaExpectedReturnDate?: Moment;
  loaStartJobInfoId?: BigNumber;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate?: Moment;
  mdfSystemEntityId?: string;
  mdfSystemObjectType?: string;
  mdfSystemRecordId?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  mdfSystemTransactionSequence?: BigNumber;
  mdfSystemVersionId?: BigNumber;
  originalQuantityInDays?: BigNumber;
  quantityInDays?: BigNumber;
  quantityInHours?: BigNumber;
  recurrenceGroup?: string;
  startDate?: Moment;
  startTime?: Time;
  timeRecordOrigin?: string;
  timeType?: string;
  undeterminedEndDate?: boolean;
  userId?: string;
  workflowInitiatedByAdmin?: boolean;
  workflowRequestId?: BigNumber;
  countryExtensionDeu: EmployeeTimeDeuType;
  countryExtensionEsp: EmployeeTimeEspType;
  countryExtensionMex: EmployeeTimeMexType;
  recurrenceGroupNav: EmployeeTimeGroupType;
  timeCalendar: EmployeeTimeCalendarType[];
  timeTypeNav: TimeTypeType;
}

export interface EmployeeTimeTypeForceMandatory {
  approvalStatus: string;
  cancellationWorkflowRequestId: BigNumber;
  comment: string;
  createdBy: string;
  createdDate: Moment;
  createdDateTime: Moment;
  custDeliverytype: string;
  custExpectedweek: Moment;
  custNotificationdate: Moment;
  deductionQuantity: BigNumber;
  editable: boolean;
  endDate: Moment;
  endTime: Time;
  externalCode: string;
  flexibleRequesting: boolean;
  fractionQuantity: BigNumber;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedDateWithTz: Moment;
  loaActualReturnDate: Moment;
  loaEndJobInfoId: BigNumber;
  loaExpectedReturnDate: Moment;
  loaStartJobInfoId: BigNumber;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: BigNumber;
  mdfSystemVersionId: BigNumber;
  originalQuantityInDays: BigNumber;
  quantityInDays: BigNumber;
  quantityInHours: BigNumber;
  recurrenceGroup: string;
  startDate: Moment;
  startTime: Time;
  timeRecordOrigin: string;
  timeType: string;
  undeterminedEndDate: boolean;
  userId: string;
  workflowInitiatedByAdmin: boolean;
  workflowRequestId: BigNumber;
  countryExtensionDeu: EmployeeTimeDeuType;
  countryExtensionEsp: EmployeeTimeEspType;
  countryExtensionMex: EmployeeTimeMexType;
  recurrenceGroupNav: EmployeeTimeGroupType;
  timeCalendar: EmployeeTimeCalendarType[];
  timeTypeNav: TimeTypeType;
}

export namespace EmployeeTime {
  /**
   * Static representation of the [[approvalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS: StringField<EmployeeTime> = new StringField('approvalStatus', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[cancellationWorkflowRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_WORKFLOW_REQUEST_ID: BigNumberField<EmployeeTime> = new BigNumberField('cancellationWorkflowRequestId', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<EmployeeTime> = new StringField('comment', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTime> = new StringField('createdBy', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<EmployeeTime> = new DateField('createdDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTime> = new DateField('createdDateTime', EmployeeTime, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[custDeliverytype]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DELIVERYTYPE: StringField<EmployeeTime> = new StringField('cust_deliverytype', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[custExpectedweek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EXPECTEDWEEK: DateField<EmployeeTime> = new DateField('cust_expectedweek', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[custNotificationdate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_NOTIFICATIONDATE: DateField<EmployeeTime> = new DateField('cust_notificationdate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[deductionQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_QUANTITY: BigNumberField<EmployeeTime> = new BigNumberField('deductionQuantity', EmployeeTime, 'Edm.Decimal');
  /**
   * Static representation of the [[editable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE: BooleanField<EmployeeTime> = new BooleanField('editable', EmployeeTime, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmployeeTime> = new DateField('endDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<EmployeeTime> = new TimeField('endTime', EmployeeTime, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTime> = new StringField('externalCode', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[flexibleRequesting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLEXIBLE_REQUESTING: BooleanField<EmployeeTime> = new BooleanField('flexibleRequesting', EmployeeTime, 'Edm.Boolean');
  /**
   * Static representation of the [[fractionQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRACTION_QUANTITY: BigNumberField<EmployeeTime> = new BigNumberField('fractionQuantity', EmployeeTime, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTime> = new StringField('lastModifiedBy', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<EmployeeTime> = new DateField('lastModifiedDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTime> = new DateField('lastModifiedDateTime', EmployeeTime, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_WITH_TZ: DateField<EmployeeTime> = new DateField('lastModifiedDateWithTZ', EmployeeTime, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loaActualReturnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_ACTUAL_RETURN_DATE: DateField<EmployeeTime> = new DateField('loaActualReturnDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[loaEndJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_END_JOB_INFO_ID: BigNumberField<EmployeeTime> = new BigNumberField('loaEndJobInfoId', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the [[loaExpectedReturnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_EXPECTED_RETURN_DATE: DateField<EmployeeTime> = new DateField('loaExpectedReturnDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[loaStartJobInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_START_JOB_INFO_ID: BigNumberField<EmployeeTime> = new BigNumberField('loaStartJobInfoId', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeeTime> = new DateField('mdfSystemEffectiveEndDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeeTime> = new DateField('mdfSystemEffectiveStartDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_ENTITY_ID: StringField<EmployeeTime> = new StringField('mdfSystemEntityId', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OBJECT_TYPE: StringField<EmployeeTime> = new StringField('mdfSystemObjectType', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_ID: StringField<EmployeeTime> = new StringField('mdfSystemRecordId', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTime> = new StringField('mdfSystemRecordStatus', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<EmployeeTime> = new StringField('mdfSystemStatus', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<EmployeeTime> = new BigNumberField('mdfSystemTransactionSequence', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemVersionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_VERSION_ID: BigNumberField<EmployeeTime> = new BigNumberField('mdfSystemVersionId', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the [[originalQuantityInDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_QUANTITY_IN_DAYS: BigNumberField<EmployeeTime> = new BigNumberField('originalQuantityInDays', EmployeeTime, 'Edm.Decimal');
  /**
   * Static representation of the [[quantityInDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_DAYS: BigNumberField<EmployeeTime> = new BigNumberField('quantityInDays', EmployeeTime, 'Edm.Decimal');
  /**
   * Static representation of the [[quantityInHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_HOURS: BigNumberField<EmployeeTime> = new BigNumberField('quantityInHours', EmployeeTime, 'Edm.Decimal');
  /**
   * Static representation of the [[recurrenceGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_GROUP: StringField<EmployeeTime> = new StringField('recurrenceGroup', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmployeeTime> = new DateField('startDate', EmployeeTime, 'Edm.DateTime');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<EmployeeTime> = new TimeField('startTime', EmployeeTime, 'Edm.Time');
  /**
   * Static representation of the [[timeRecordOrigin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORD_ORIGIN: StringField<EmployeeTime> = new StringField('timeRecordOrigin', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[timeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE: StringField<EmployeeTime> = new StringField('timeType', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[undeterminedEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDETERMINED_END_DATE: BooleanField<EmployeeTime> = new BooleanField('undeterminedEndDate', EmployeeTime, 'Edm.Boolean');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmployeeTime> = new StringField('userId', EmployeeTime, 'Edm.String');
  /**
   * Static representation of the [[workflowInitiatedByAdmin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_INITIATED_BY_ADMIN: BooleanField<EmployeeTime> = new BooleanField('workflowInitiatedByAdmin', EmployeeTime, 'Edm.Boolean');
  /**
   * Static representation of the [[workflowRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_REQUEST_ID: BigNumberField<EmployeeTime> = new BigNumberField('workflowRequestId', EmployeeTime, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[countryExtensionDeu]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_EXTENSION_DEU: OneToOneLink<EmployeeTime, EmployeeTimeDeu> = new OneToOneLink('countryExtensionDEU', EmployeeTime, EmployeeTimeDeu);
  /**
   * Static representation of the one-to-one navigation property [[countryExtensionEsp]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_EXTENSION_ESP: OneToOneLink<EmployeeTime, EmployeeTimeEsp> = new OneToOneLink('countryExtensionESP', EmployeeTime, EmployeeTimeEsp);
  /**
   * Static representation of the one-to-one navigation property [[countryExtensionMex]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_EXTENSION_MEX: OneToOneLink<EmployeeTime, EmployeeTimeMex> = new OneToOneLink('countryExtensionMEX', EmployeeTime, EmployeeTimeMex);
  /**
   * Static representation of the one-to-one navigation property [[recurrenceGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_GROUP_NAV: OneToOneLink<EmployeeTime, EmployeeTimeGroup> = new OneToOneLink('recurrenceGroupNav', EmployeeTime, EmployeeTimeGroup);
  /**
   * Static representation of the one-to-many navigation property [[timeCalendar]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_CALENDAR: Link<EmployeeTime, EmployeeTimeCalendar> = new Link('timeCalendar', EmployeeTime, EmployeeTimeCalendar);
  /**
   * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_NAV: OneToOneLink<EmployeeTime, TimeType> = new OneToOneLink('timeTypeNav', EmployeeTime, TimeType);
  /**
   * All fields of the EmployeeTime entity.
   */
  export const _allFields: Array<StringField<EmployeeTime> | BigNumberField<EmployeeTime> | DateField<EmployeeTime> | BooleanField<EmployeeTime> | TimeField<EmployeeTime> | OneToOneLink<EmployeeTime, EmployeeTimeDeu> | OneToOneLink<EmployeeTime, EmployeeTimeEsp> | OneToOneLink<EmployeeTime, EmployeeTimeMex> | OneToOneLink<EmployeeTime, EmployeeTimeGroup> | Link<EmployeeTime, EmployeeTimeCalendar> | OneToOneLink<EmployeeTime, TimeType>> = [
    EmployeeTime.APPROVAL_STATUS,
    EmployeeTime.CANCELLATION_WORKFLOW_REQUEST_ID,
    EmployeeTime.COMMENT,
    EmployeeTime.CREATED_BY,
    EmployeeTime.CREATED_DATE,
    EmployeeTime.CREATED_DATE_TIME,
    EmployeeTime.CUST_DELIVERYTYPE,
    EmployeeTime.CUST_EXPECTEDWEEK,
    EmployeeTime.CUST_NOTIFICATIONDATE,
    EmployeeTime.DEDUCTION_QUANTITY,
    EmployeeTime.EDITABLE,
    EmployeeTime.END_DATE,
    EmployeeTime.END_TIME,
    EmployeeTime.EXTERNAL_CODE,
    EmployeeTime.FLEXIBLE_REQUESTING,
    EmployeeTime.FRACTION_QUANTITY,
    EmployeeTime.LAST_MODIFIED_BY,
    EmployeeTime.LAST_MODIFIED_DATE,
    EmployeeTime.LAST_MODIFIED_DATE_TIME,
    EmployeeTime.LAST_MODIFIED_DATE_WITH_TZ,
    EmployeeTime.LOA_ACTUAL_RETURN_DATE,
    EmployeeTime.LOA_END_JOB_INFO_ID,
    EmployeeTime.LOA_EXPECTED_RETURN_DATE,
    EmployeeTime.LOA_START_JOB_INFO_ID,
    EmployeeTime.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeeTime.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeeTime.MDF_SYSTEM_ENTITY_ID,
    EmployeeTime.MDF_SYSTEM_OBJECT_TYPE,
    EmployeeTime.MDF_SYSTEM_RECORD_ID,
    EmployeeTime.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTime.MDF_SYSTEM_STATUS,
    EmployeeTime.MDF_SYSTEM_TRANSACTION_SEQUENCE,
    EmployeeTime.MDF_SYSTEM_VERSION_ID,
    EmployeeTime.ORIGINAL_QUANTITY_IN_DAYS,
    EmployeeTime.QUANTITY_IN_DAYS,
    EmployeeTime.QUANTITY_IN_HOURS,
    EmployeeTime.RECURRENCE_GROUP,
    EmployeeTime.START_DATE,
    EmployeeTime.START_TIME,
    EmployeeTime.TIME_RECORD_ORIGIN,
    EmployeeTime.TIME_TYPE,
    EmployeeTime.UNDETERMINED_END_DATE,
    EmployeeTime.USER_ID,
    EmployeeTime.WORKFLOW_INITIATED_BY_ADMIN,
    EmployeeTime.WORKFLOW_REQUEST_ID,
    EmployeeTime.COUNTRY_EXTENSION_DEU,
    EmployeeTime.COUNTRY_EXTENSION_ESP,
    EmployeeTime.COUNTRY_EXTENSION_MEX,
    EmployeeTime.RECURRENCE_GROUP_NAV,
    EmployeeTime.TIME_CALENDAR,
    EmployeeTime.TIME_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTime> = new AllFields('*', EmployeeTime);
  /**
   * All key fields of the EmployeeTime entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTime>> = [EmployeeTime.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTime.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTime> } = EmployeeTime._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTime> }, field: Selectable<EmployeeTime>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
