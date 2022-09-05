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
exports.AbsenceCountingMethodRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AbsenceCountingMethod_1 = require("./AbsenceCountingMethod");
/**
 * Request builder class for operations supported on the [[AbsenceCountingMethod]] entity.
 */
var AbsenceCountingMethodRequestBuilder = /** @class */ (function (_super) {
    __extends(AbsenceCountingMethodRequestBuilder, _super);
    function AbsenceCountingMethodRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AbsenceCountingMethod` entity based on its keys.
     * @param externalCode Key property. See [[AbsenceCountingMethod.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AbsenceCountingMethod` entity based on its keys.
     */
    AbsenceCountingMethodRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(AbsenceCountingMethod_1.AbsenceCountingMethod, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `AbsenceCountingMethod` entities.
     * @returns A request builder for creating requests to retrieve all `AbsenceCountingMethod` entities.
     */
    AbsenceCountingMethodRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AbsenceCountingMethod_1.AbsenceCountingMethod);
    };
    return AbsenceCountingMethodRequestBuilder;
}(core_1.RequestBuilder));
exports.AbsenceCountingMethodRequestBuilder = AbsenceCountingMethodRequestBuilder;
//# sourceMappingURL=AbsenceCountingMethodRequestBuilder.js.map