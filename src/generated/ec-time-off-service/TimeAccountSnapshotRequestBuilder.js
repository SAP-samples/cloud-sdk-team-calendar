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
exports.TimeAccountSnapshotRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountSnapshot_1 = require("./TimeAccountSnapshot");
/**
 * Request builder class for operations supported on the [[TimeAccountSnapshot]] entity.
 */
var TimeAccountSnapshotRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountSnapshotRequestBuilder, _super);
    function TimeAccountSnapshotRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountSnapshot` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountSnapshot.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountSnapshot` entity based on its keys.
     */
    TimeAccountSnapshotRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountSnapshot_1.TimeAccountSnapshot, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccountSnapshot` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountSnapshot` entities.
     */
    TimeAccountSnapshotRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountSnapshot_1.TimeAccountSnapshot);
    };
    return TimeAccountSnapshotRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountSnapshotRequestBuilder = TimeAccountSnapshotRequestBuilder;
//# sourceMappingURL=TimeAccountSnapshotRequestBuilder.js.map