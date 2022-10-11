/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { TimeSheetDataFields, TimeSheetDataFieldsField } from './TimeSheetDataFields';

/**
 * This class represents the entity "TimeSheetEntryCollection" of service "API_MANAGE_WORKFORCE_TIMESHEET".
 */
export class TimeSheetEntry<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TimeSheetEntryType<T> {
  /**
   * Technical entity name for TimeSheetEntry.
   */
  static _entityName = 'TimeSheetEntryCollection';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_MANAGE_WORKFORCE_TIMESHEET';
  /**
   * All key fields of the TimeSheetEntry entity
   */
  static _keys = ['PersonWorkAgreementExternalID', 'CompanyCode', 'TimeSheetRecord'];
  /**
   * Time Sheet Data Fields.
   */
  timeSheetDataFields!: TimeSheetDataFields<T>;
  /**
   * Person Work Agreement External ID.
   * Maximum length: 20.
   */
  personWorkAgreementExternalId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Sheet Record.
   * Maximum length: 12.
   */
  timeSheetRecord!: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Work Agreement.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Sheet Date.
   * @nullable
   */
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time sheet Is Released On Save.
   * @nullable
   */
  timeSheetIsReleasedOnSave?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Time Sheet Predecessor Record.
   * Maximum length: 12.
   * @nullable
   */
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Sheet Status.
   * Maximum length: 2.
   * @nullable
   */
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Times Sheet Is Executed In Test Run.
   * @nullable
   */
  timeSheetIsExecutedInTestRun?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Time Sheet Operation.
   * Maximum length: 1.
   * @nullable
   */
  timeSheetOperation?: DeserializedType<T, 'Edm.String'> | null;
}

export interface TimeSheetEntryType<T extends DeSerializers = DefaultDeSerializers> {
  timeSheetDataFields: TimeSheetDataFields<T>;
  personWorkAgreementExternalId: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  timeSheetRecord: DeserializedType<T, 'Edm.String'>;
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeSheetIsReleasedOnSave?: DeserializedType<T, 'Edm.Boolean'> | null;
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetIsExecutedInTestRun?: DeserializedType<T, 'Edm.Boolean'> | null;
  timeSheetOperation?: DeserializedType<T, 'Edm.String'> | null;
}
