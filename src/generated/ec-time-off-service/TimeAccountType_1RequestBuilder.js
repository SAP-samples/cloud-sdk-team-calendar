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
exports.TimeAccountType_1RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountType_1_1 = require("./TimeAccountType_1");
/**
 * Request builder class for operations supported on the [[TimeAccountType_1]] entity.
 */
var TimeAccountType_1RequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountType_1RequestBuilder, _super);
    function TimeAccountType_1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountType_1` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountType_1.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountType_1` entity based on its keys.
     */
    TimeAccountType_1RequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountType_1_1.TimeAccountType_1, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccountType_1` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountType_1` entities.
     */
    TimeAccountType_1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountType_1_1.TimeAccountType_1);
    };
    return TimeAccountType_1RequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountType_1RequestBuilder = TimeAccountType_1RequestBuilder;
//# sourceMappingURL=TimeAccountType_1RequestBuilder.js.map