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
exports.TimeTypeAusRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var TimeTypeAus_1 = require("./TimeTypeAus");
/**
 * Request builder class for operations supported on the [[TimeTypeAus]] entity.
 */
var TimeTypeAusRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeTypeAusRequestBuilder, _super);
    function TimeTypeAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeTypeAus` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeTypeAus.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeTypeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeAus` entity based on its keys.
     */
    TimeTypeAusRequestBuilder.prototype.getByKey = function (timeTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeTypeAus_1.TimeTypeAus, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeTypeAus` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeAus` entities.
     */
    TimeTypeAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeTypeAus_1.TimeTypeAus);
    };
    return TimeTypeAusRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeTypeAusRequestBuilder = TimeTypeAusRequestBuilder;
//# sourceMappingURL=TimeTypeAusRequestBuilder.js.map