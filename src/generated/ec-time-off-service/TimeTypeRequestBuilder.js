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
exports.TimeTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeType_1 = require("./TimeType");
/**
 * Request builder class for operations supported on the [[TimeType]] entity.
 */
var TimeTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeTypeRequestBuilder, _super);
    function TimeTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeType` entity based on its keys.
     * @param externalCode Key property. See [[TimeType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeType` entity based on its keys.
     */
    TimeTypeRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeType_1.TimeType, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeType` entities.
     */
    TimeTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeType_1.TimeType);
    };
    return TimeTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeTypeRequestBuilder = TimeTypeRequestBuilder;
//# sourceMappingURL=TimeTypeRequestBuilder.js.map