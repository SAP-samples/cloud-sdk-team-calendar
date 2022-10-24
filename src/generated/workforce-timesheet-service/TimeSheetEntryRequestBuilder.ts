/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { TimeSheetEntry } from './TimeSheetEntry';

/**
 * Request builder class for operations supported on the {@link TimeSheetEntry} entity.
 */
export class TimeSheetEntryRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<TimeSheetEntry<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeSheetEntry` entity based on its keys.
   * @param personWorkAgreementExternalId Key property. See {@link TimeSheetEntry.personWorkAgreementExternalId}.
   * @param companyCode Key property. See {@link TimeSheetEntry.companyCode}.
   * @param timeSheetRecord Key property. See {@link TimeSheetEntry.timeSheetRecord}.
   * @returns A request builder for creating requests to retrieve one `TimeSheetEntry` entity based on its keys.
   */
  getByKey(personWorkAgreementExternalId: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, timeSheetRecord: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<TimeSheetEntry<T>, T> {
    return new GetByKeyRequestBuilder<TimeSheetEntry<T>, T>(this.entityApi, {
      PersonWorkAgreementExternalID: personWorkAgreementExternalId,
      CompanyCode: companyCode,
      TimeSheetRecord: timeSheetRecord
    });
  }

  /**
   * Returns a request builder for querying all `TimeSheetEntry` entities.
   * @returns A request builder for creating requests to retrieve all `TimeSheetEntry` entities.
   */
  getAll(): GetAllRequestBuilder<TimeSheetEntry<T>, T> {
    return new GetAllRequestBuilder<TimeSheetEntry<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeSheetEntry` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeSheetEntry`.
   */
  create(entity: TimeSheetEntry<T>): CreateRequestBuilder<TimeSheetEntry<T>, T> {
    return new CreateRequestBuilder<TimeSheetEntry<T>, T>(this.entityApi, entity);
  }
}
