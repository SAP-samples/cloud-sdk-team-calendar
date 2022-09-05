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
exports.TimeAccountTypeAusRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountTypeAus_1 = require("./TimeAccountTypeAus");
/**
 * Request builder class for operations supported on the [[TimeAccountTypeAus]] entity.
 */
var TimeAccountTypeAusRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountTypeAusRequestBuilder, _super);
    function TimeAccountTypeAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountTypeAus` entity based on its keys.
     * @param timeAccountTypeExternalCode Key property. See [[TimeAccountTypeAus.timeAccountTypeExternalCode]].
     * @param externalCode Key property. See [[TimeAccountTypeAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountTypeAus` entity based on its keys.
     */
    TimeAccountTypeAusRequestBuilder.prototype.getByKey = function (timeAccountTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountTypeAus_1.TimeAccountTypeAus, {
            TimeAccountType_externalCode: timeAccountTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeAccountTypeAus` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountTypeAus` entities.
     */
    TimeAccountTypeAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountTypeAus_1.TimeAccountTypeAus);
    };
    return TimeAccountTypeAusRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountTypeAusRequestBuilder = TimeAccountTypeAusRequestBuilder;
//# sourceMappingURL=TimeAccountTypeAusRequestBuilder.js.map