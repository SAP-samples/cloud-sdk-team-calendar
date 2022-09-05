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
exports.TemporaryTimeInformationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TemporaryTimeInformation_1 = require("./TemporaryTimeInformation");
/**
 * Request builder class for operations supported on the [[TemporaryTimeInformation]] entity.
 */
var TemporaryTimeInformationRequestBuilder = /** @class */ (function (_super) {
    __extends(TemporaryTimeInformationRequestBuilder, _super);
    function TemporaryTimeInformationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
     * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
     */
    TemporaryTimeInformationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TemporaryTimeInformation_1.TemporaryTimeInformation, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TemporaryTimeInformation` entities.
     * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
     */
    TemporaryTimeInformationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TemporaryTimeInformation_1.TemporaryTimeInformation);
    };
    return TemporaryTimeInformationRequestBuilder;
}(core_1.RequestBuilder));
exports.TemporaryTimeInformationRequestBuilder = TemporaryTimeInformationRequestBuilder;
//# sourceMappingURL=TemporaryTimeInformationRequestBuilder.js.map