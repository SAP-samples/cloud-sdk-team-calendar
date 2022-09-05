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
exports.HolidayRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Holiday_1 = require("./Holiday");
/**
 * Request builder class for operations supported on the [[Holiday]] entity.
 */
var HolidayRequestBuilder = /** @class */ (function (_super) {
    __extends(HolidayRequestBuilder, _super);
    function HolidayRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Holiday` entity based on its keys.
     * @param holidayCode Key property. See [[Holiday.holidayCode]].
     * @returns A request builder for creating requests to retrieve one `Holiday` entity based on its keys.
     */
    HolidayRequestBuilder.prototype.getByKey = function (holidayCode) {
        return new core_1.GetByKeyRequestBuilder(Holiday_1.Holiday, { holidayCode: holidayCode });
    };
    /**
     * Returns a request builder for querying all `Holiday` entities.
     * @returns A request builder for creating requests to retrieve all `Holiday` entities.
     */
    HolidayRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Holiday_1.Holiday);
    };
    return HolidayRequestBuilder;
}(core_1.RequestBuilder));
exports.HolidayRequestBuilder = HolidayRequestBuilder;
//# sourceMappingURL=HolidayRequestBuilder.js.map