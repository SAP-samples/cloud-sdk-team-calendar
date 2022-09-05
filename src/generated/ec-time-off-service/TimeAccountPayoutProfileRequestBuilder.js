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
exports.TimeAccountPayoutProfileRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountPayoutProfile_1 = require("./TimeAccountPayoutProfile");
/**
 * Request builder class for operations supported on the [[TimeAccountPayoutProfile]] entity.
 */
var TimeAccountPayoutProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountPayoutProfileRequestBuilder, _super);
    function TimeAccountPayoutProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountPayoutProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountPayoutProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPayoutProfile` entity based on its keys.
     */
    TimeAccountPayoutProfileRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountPayoutProfile_1.TimeAccountPayoutProfile, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccountPayoutProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPayoutProfile` entities.
     */
    TimeAccountPayoutProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountPayoutProfile_1.TimeAccountPayoutProfile);
    };
    return TimeAccountPayoutProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountPayoutProfileRequestBuilder = TimeAccountPayoutProfileRequestBuilder;
//# sourceMappingURL=TimeAccountPayoutProfileRequestBuilder.js.map