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
exports.TimeAccountPurchaseProfileRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountPurchaseProfile_1 = require("./TimeAccountPurchaseProfile");
/**
 * Request builder class for operations supported on the [[TimeAccountPurchaseProfile]] entity.
 */
var TimeAccountPurchaseProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountPurchaseProfileRequestBuilder, _super);
    function TimeAccountPurchaseProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountPurchaseProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfile` entity based on its keys.
     */
    TimeAccountPurchaseProfileRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountPurchaseProfile_1.TimeAccountPurchaseProfile, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfile` entities.
     */
    TimeAccountPurchaseProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountPurchaseProfile_1.TimeAccountPurchaseProfile);
    };
    return TimeAccountPurchaseProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountPurchaseProfileRequestBuilder = TimeAccountPurchaseProfileRequestBuilder;
//# sourceMappingURL=TimeAccountPurchaseProfileRequestBuilder.js.map