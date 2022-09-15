/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "TimeAccountPayoutProfile" of service "ECTimeOff".
 */
export class TimeAccountPayoutProfile<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TimeAccountPayoutProfileType<T> {
  /**
   * Technical entity name for TimeAccountPayoutProfile.
   */
  static _entityName = 'TimeAccountPayoutProfile';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountPayoutProfile entity
   */
  static _keys = ['externalCode'];
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
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
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
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
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do not use - Separate Pay Component for Accrual.
   * Maximum length: 32.
   * @nullable
   */
  payComponentAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component Group.
   * Maximum length: 32.
   * @nullable
   */
  payComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTermination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Pay Component for Accrual on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTerminationAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextPtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  payoutMessageTextZhTw?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
}

export interface TimeAccountPayoutProfileType<T extends DeSerializers = DefaultDeSerializers> {
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  payComponent?: DeserializedType<T, 'Edm.String'> | null;
  payComponentAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  payComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  payComponentTermination?: DeserializedType<T, 'Edm.String'> | null;
  payComponentTerminationAccrualSeparated?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextLocalized?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextPtPt?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextRuRu?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
  payoutMessageTextZhTw?: DeserializedType<T, 'Edm.String'> | null;
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
}
