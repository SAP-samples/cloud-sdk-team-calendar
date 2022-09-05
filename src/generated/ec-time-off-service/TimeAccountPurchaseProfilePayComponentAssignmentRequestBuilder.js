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
exports.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountPurchaseProfilePayComponentAssignment_1 = require("./TimeAccountPurchaseProfilePayComponentAssignment");
/**
 * Request builder class for operations supported on the [[TimeAccountPurchaseProfilePayComponentAssignment]] entity.
 */
var TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder, _super);
    function TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     * @param timeAccountPurchaseProfileExternalCode Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.timeAccountPurchaseProfileExternalCode]].
     * @param payComponent Key property. See [[TimeAccountPurchaseProfilePayComponentAssignment.payComponent]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     */
    TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder.prototype.getByKey = function (timeAccountPurchaseProfileExternalCode, payComponent) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment, {
            TimeAccountPurchaseProfile_externalCode: timeAccountPurchaseProfileExternalCode,
            payComponent: payComponent
        });
    };
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     */
    TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment);
    };
    return TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder = TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder;
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder.js.map