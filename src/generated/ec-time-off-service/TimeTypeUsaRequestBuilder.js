"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeUsaRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var TimeTypeUsa_1 = require("./TimeTypeUsa");
/**
 * Request builder class for operations supported on the [[TimeTypeUsa]] entity.
 */
var TimeTypeUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeTypeUsaRequestBuilder, _super);
    function TimeTypeUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeTypeUsa` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeUsa.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeUsa` entity based on its keys.
     */
    TimeTypeUsaRequestBuilder.prototype.getByKey = function (timeTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeTypeUsa_1.TimeTypeUsa, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeTypeUsa` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeUsa` entities.
     */
    TimeTypeUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeTypeUsa_1.TimeTypeUsa);
    };
    return TimeTypeUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeTypeUsaRequestBuilder = TimeTypeUsaRequestBuilder;
//# sourceMappingURL=TimeTypeUsaRequestBuilder.js.map