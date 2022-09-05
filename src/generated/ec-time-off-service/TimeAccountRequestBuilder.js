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
exports.TimeAccountRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccount_1 = require("./TimeAccount");
/**
 * Request builder class for operations supported on the [[TimeAccount]] entity.
 */
var TimeAccountRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountRequestBuilder, _super);
    function TimeAccountRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccount` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccount.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccount` entity based on its keys.
     */
    TimeAccountRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccount_1.TimeAccount, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccount` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccount` entities.
     */
    TimeAccountRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccount_1.TimeAccount);
    };
    /**
     * Returns a request builder for creating a `TimeAccount` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeAccount`.
     */
    TimeAccountRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TimeAccount_1.TimeAccount, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TimeAccount`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeAccount`.
     */
    TimeAccountRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TimeAccount_1.TimeAccount, entity);
    };
    TimeAccountRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(TimeAccount_1.TimeAccount, externalCodeOrEntity instanceof TimeAccount_1.TimeAccount ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return TimeAccountRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountRequestBuilder = TimeAccountRequestBuilder;
//# sourceMappingURL=TimeAccountRequestBuilder.js.map