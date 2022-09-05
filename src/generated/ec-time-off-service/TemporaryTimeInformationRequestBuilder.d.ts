import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TemporaryTimeInformation } from './TemporaryTimeInformation';
/**
 * Request builder class for operations supported on the [[TemporaryTimeInformation]] entity.
 */
export declare class TemporaryTimeInformationRequestBuilder extends RequestBuilder<TemporaryTimeInformation> {
    /**
     * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
     * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for querying all `TemporaryTimeInformation` entities.
     * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
     */
    getAll(): GetAllRequestBuilder<TemporaryTimeInformation>;
}
//# sourceMappingURL=TemporaryTimeInformationRequestBuilder.d.ts.map