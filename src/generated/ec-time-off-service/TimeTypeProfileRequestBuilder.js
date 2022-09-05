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
exports.TimeTypeProfileRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeTypeProfile_1 = require("./TimeTypeProfile");
/**
 * Request builder class for operations supported on the [[TimeTypeProfile]] entity.
 */
var TimeTypeProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeTypeProfileRequestBuilder, _super);
    function TimeTypeProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeTypeProfile` entity based on its keys.
     * @param externalCode Key property. See [[TimeTypeProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeTypeProfile` entity based on its keys.
     */
    TimeTypeProfileRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeTypeProfile_1.TimeTypeProfile, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeTypeProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeProfile` entities.
     */
    TimeTypeProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeTypeProfile_1.TimeTypeProfile);
    };
    return TimeTypeProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeTypeProfileRequestBuilder = TimeTypeProfileRequestBuilder;
//# sourceMappingURL=TimeTypeProfileRequestBuilder.js.map