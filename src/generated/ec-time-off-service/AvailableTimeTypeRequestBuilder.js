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
exports.AvailableTimeTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AvailableTimeType_1 = require("./AvailableTimeType");
/**
 * Request builder class for operations supported on the [[AvailableTimeType]] entity.
 */
var AvailableTimeTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(AvailableTimeTypeRequestBuilder, _super);
    function AvailableTimeTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AvailableTimeType` entity based on its keys.
     * @param timeTypeProfileExternalCode Key property. See [[AvailableTimeType.timeTypeProfileExternalCode]].
     * @param externalCode Key property. See [[AvailableTimeType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AvailableTimeType` entity based on its keys.
     */
    AvailableTimeTypeRequestBuilder.prototype.getByKey = function (timeTypeProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(AvailableTimeType_1.AvailableTimeType, {
            TimeTypeProfile_externalCode: timeTypeProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `AvailableTimeType` entities.
     * @returns A request builder for creating requests to retrieve all `AvailableTimeType` entities.
     */
    AvailableTimeTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AvailableTimeType_1.AvailableTimeType);
    };
    return AvailableTimeTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.AvailableTimeTypeRequestBuilder = AvailableTimeTypeRequestBuilder;
//# sourceMappingURL=AvailableTimeTypeRequestBuilder.js.map