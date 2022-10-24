/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeDeu, EmployeeTimeDeuType } from './EmployeeTimeDeu';
import { EmployeeTimeEsp, EmployeeTimeEspType } from './EmployeeTimeEsp';
import { EmployeeTimeMex, EmployeeTimeMexType } from './EmployeeTimeMex';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { TimeType, TimeTypeType } from './TimeType';

/**
 * This class represents the entity "EmployeeTime" of service "ECTimeOff".
 */
export class EmployeeTime<T extends DeSerializers = DefaultDeSerializers> extends Entity implements EmployeeTimeType<T> {
  /**
   * Technical entity name for EmployeeTime.
   */
  static _entityName = 'EmployeeTime';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTime entity
   */
  static _keys = ['externalCode'];
  /**
   * Approval Status.
   * Maximum length: 255.
   * @nullable
   */
  approvalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Workflow Request.
   * @nullable
   */
  cancellationWorkflowRequestId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Comment.
   * Maximum length: 4000.
   * @nullable
   */
  comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Delivery Type.
   * Maximum length: 128.
   * @nullable
   */
  custDeliverytype?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Week Of Child Birth.
   * @nullable
   */
  custExpectedweek?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Notification Date.
   * @nullable
   */
  custNotificationdate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Deduction Quantity.
   * @nullable
   */
  deductionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Editable.
   * @nullable
   */
  editable?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Flexible Requesting.
   * @nullable
   */
  flexibleRequesting?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Fraction Quantity.
   * @nullable
   */
  fractionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Actual Return Date.
   * @nullable
   */
  loaActualReturnDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Leave Of Absence Job Info ID (Return To Work).
   * @nullable
   */
  loaEndJobInfoId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Expected Return Date.
   * @nullable
   */
  loaExpectedReturnDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Leave Of Absence Job Info ID (Start).
   * @nullable
   */
  loaStartJobInfoId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Original Number of Days.
   * @nullable
   */
  originalQuantityInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Number Of Days.
   * @nullable
   */
  quantityInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Number Of Hours.
   * @nullable
   */
  quantityInHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Recurrence Group.
   * Maximum length: 128.
   * @nullable
   */
  recurrenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Time Record Origin.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Undetermined End Date.
   * @nullable
   */
  undeterminedEndDate?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Initiated By Admin.
   * @nullable
   */
  workflowInitiatedByAdmin?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Workflow Request.
   * @nullable
   */
  workflowRequestId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeDeu} entity.
   */
  countryExtensionDeu?: EmployeeTimeDeu<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeEsp} entity.
   */
  countryExtensionEsp?: EmployeeTimeEsp<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeMex} entity.
   */
  countryExtensionMex?: EmployeeTimeMex<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  recurrenceGroupNav?: EmployeeTimeGroup<T> | null;
  /**
   * One-to-many navigation property to the {@link EmployeeTimeCalendar} entity.
   */
  timeCalendar!: EmployeeTimeCalendar<T>[];
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  timeTypeNav?: TimeType<T> | null;
}

export interface EmployeeTimeType<T extends DeSerializers = DefaultDeSerializers> {
  approvalStatus?: DeserializedType<T, 'Edm.String'> | null;
  cancellationWorkflowRequestId?: DeserializedType<T, 'Edm.Int64'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custDeliverytype?: DeserializedType<T, 'Edm.String'> | null;
  custExpectedweek?: DeserializedType<T, 'Edm.DateTime'> | null;
  custNotificationdate?: DeserializedType<T, 'Edm.DateTime'> | null;
  deductionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  editable?: DeserializedType<T, 'Edm.Boolean'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  endTime?: DeserializedType<T, 'Edm.Time'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  flexibleRequesting?: DeserializedType<T, 'Edm.Boolean'> | null;
  fractionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  loaActualReturnDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loaEndJobInfoId?: DeserializedType<T, 'Edm.Int64'> | null;
  loaExpectedReturnDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loaStartJobInfoId?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  originalQuantityInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityInHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  recurrenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  startTime?: DeserializedType<T, 'Edm.Time'> | null;
  timeRecordOrigin?: DeserializedType<T, 'Edm.String'> | null;
  timeType?: DeserializedType<T, 'Edm.String'> | null;
  undeterminedEndDate?: DeserializedType<T, 'Edm.Boolean'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  workflowInitiatedByAdmin?: DeserializedType<T, 'Edm.Boolean'> | null;
  workflowRequestId?: DeserializedType<T, 'Edm.Int64'> | null;
  countryExtensionDeu?: EmployeeTimeDeuType<T> | null;
  countryExtensionEsp?: EmployeeTimeEspType<T> | null;
  countryExtensionMex?: EmployeeTimeMexType<T> | null;
  recurrenceGroupNav?: EmployeeTimeGroupType<T> | null;
  timeCalendar: EmployeeTimeCalendarType<T>[];
  timeTypeNav?: TimeTypeType<T> | null;
}
