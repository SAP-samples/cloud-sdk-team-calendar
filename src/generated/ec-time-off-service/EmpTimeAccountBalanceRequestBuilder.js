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
exports.EmpTimeAccountBalanceRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmpTimeAccountBalance_1 = require("./EmpTimeAccountBalance");
/**
 * Request builder class for operations supported on the [[EmpTimeAccountBalance]] entity.
 */
var EmpTimeAccountBalanceRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpTimeAccountBalanceRequestBuilder, _super);
    function EmpTimeAccountBalanceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpTimeAccountBalance` entity based on its keys.
     * @param timeAccount Key property. See [[EmpTimeAccountBalance.timeAccount]].
     * @returns A request builder for creating requests to retrieve one `EmpTimeAccountBalance` entity based on its keys.
     */
    EmpTimeAccountBalanceRequestBuilder.prototype.getByKey = function (timeAccount) {
        return new core_1.GetByKeyRequestBuilder(EmpTimeAccountBalance_1.EmpTimeAccountBalance, { timeAccount: timeAccount });
    };
    /**
     * Returns a request builder for querying all `EmpTimeAccountBalance` entities.
     * @returns A request builder for creating requests to retrieve all `EmpTimeAccountBalance` entities.
     */
    EmpTimeAccountBalanceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpTimeAccountBalance_1.EmpTimeAccountBalance);
    };
    return EmpTimeAccountBalanceRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpTimeAccountBalanceRequestBuilder = EmpTimeAccountBalanceRequestBuilder;
//# sourceMappingURL=EmpTimeAccountBalanceRequestBuilder.js.map