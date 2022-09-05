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
exports.TimeTypeCanRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var TimeTypeCan_1 = require("./TimeTypeCan");
/**
 * Request builder class for operations supported on the [[TimeTypeCan]] entity.
 */
var TimeTypeCanRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeTypeCanRequestBuilder, _super);
    function TimeTypeCanRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeCan.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeCan.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
     */
    TimeTypeCanRequestBuilder.prototype.getByKey = function (timeTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeTypeCan_1.TimeTypeCan, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeTypeCan` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
     */
    TimeTypeCanRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeTypeCan_1.TimeTypeCan);
    };
    return TimeTypeCanRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeTypeCanRequestBuilder = TimeTypeCanRequestBuilder;
//# sourceMappingURL=TimeTypeCanRequestBuilder.js.map