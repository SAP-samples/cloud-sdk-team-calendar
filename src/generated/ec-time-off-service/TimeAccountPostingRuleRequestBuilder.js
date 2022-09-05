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
exports.TimeAccountPostingRuleRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountPostingRule_1 = require("./TimeAccountPostingRule");
/**
 * Request builder class for operations supported on the [[TimeAccountPostingRule]] entity.
 */
var TimeAccountPostingRuleRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountPostingRuleRequestBuilder, _super);
    function TimeAccountPostingRuleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountPostingRule` entity based on its keys.
     * @param timeTypeExternalCode Key property. See [[TimeAccountPostingRule.timeTypeExternalCode]].
     * @param externalCode Key property. See [[TimeAccountPostingRule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountPostingRule` entity based on its keys.
     */
    TimeAccountPostingRuleRequestBuilder.prototype.getByKey = function (timeTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountPostingRule_1.TimeAccountPostingRule, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeAccountPostingRule` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPostingRule` entities.
     */
    TimeAccountPostingRuleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountPostingRule_1.TimeAccountPostingRule);
    };
    return TimeAccountPostingRuleRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountPostingRuleRequestBuilder = TimeAccountPostingRuleRequestBuilder;
//# sourceMappingURL=TimeAccountPostingRuleRequestBuilder.js.map