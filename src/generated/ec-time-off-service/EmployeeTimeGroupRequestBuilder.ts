/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeGroup } from './EmployeeTimeGroup';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeGroup} entity.
 */
export class EmployeeTimeGroupRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<EmployeeTimeGroup<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeGroup` entity based on its keys.
   * @param externalCode Key property. See {@link EmployeeTimeGroup.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroup` entity based on its keys.
   */
  getByKey(externalCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<EmployeeTimeGroup<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeGroup<T>, T>(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeGroup` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroup` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeGroup<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeGroup<T>, T>(this.entityApi);
  }
}
