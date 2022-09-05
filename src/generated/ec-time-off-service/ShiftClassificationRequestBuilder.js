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
exports.ShiftClassificationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ShiftClassification_1 = require("./ShiftClassification");
/**
 * Request builder class for operations supported on the [[ShiftClassification]] entity.
 */
var ShiftClassificationRequestBuilder = /** @class */ (function (_super) {
    __extends(ShiftClassificationRequestBuilder, _super);
    function ShiftClassificationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ShiftClassification` entity based on its keys.
     * @param externalCode Key property. See [[ShiftClassification.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ShiftClassification` entity based on its keys.
     */
    ShiftClassificationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(ShiftClassification_1.ShiftClassification, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `ShiftClassification` entities.
     * @returns A request builder for creating requests to retrieve all `ShiftClassification` entities.
     */
    ShiftClassificationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ShiftClassification_1.ShiftClassification);
    };
    return ShiftClassificationRequestBuilder;
}(core_1.RequestBuilder));
exports.ShiftClassificationRequestBuilder = ShiftClassificationRequestBuilder;
//# sourceMappingURL=ShiftClassificationRequestBuilder.js.map