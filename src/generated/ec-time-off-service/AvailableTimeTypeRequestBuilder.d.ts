import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AvailableTimeType } from './AvailableTimeType';
/**
 * Request builder class for operations supported on the [[AvailableTimeType]] entity.
 */
export declare class AvailableTimeTypeRequestBuilder extends RequestBuilder<AvailableTimeType> {
    /**
     * Returns a request builder for retrieving one `AvailableTimeType` entity based on its keys.
     * @param timeTypeProfileExternalCode Key property. See [[AvailableTimeType.timeTypeProfileExternalCode]].
     * @param externalCode Key property. See [[AvailableTimeType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AvailableTimeType` entity based on its keys.
     */
    getByKey(timeTypeProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<AvailableTimeType>;
    /**
     * Returns a request builder for querying all `AvailableTimeType` entities.
     * @returns A request builder for creating requests to retrieve all `AvailableTimeType` entities.
     */
    getAll(): GetAllRequestBuilder<AvailableTimeType>;
}
//# sourceMappingURL=AvailableTimeTypeRequestBuilder.d.ts.map