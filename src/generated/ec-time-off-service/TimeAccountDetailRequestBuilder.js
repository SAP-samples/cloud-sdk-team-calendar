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
exports.TimeAccountDetailRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeAccountDetail_1 = require("./TimeAccountDetail");
/**
 * Request builder class for operations supported on the [[TimeAccountDetail]] entity.
 */
var TimeAccountDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountDetailRequestBuilder, _super);
    function TimeAccountDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountDetail` entity based on its keys.
     * @param timeAccountExternalCode Key property. See [[TimeAccountDetail.timeAccountExternalCode]].
     * @param externalCode Key property. See [[TimeAccountDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountDetail` entity based on its keys.
     */
    TimeAccountDetailRequestBuilder.prototype.getByKey = function (timeAccountExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountDetail_1.TimeAccountDetail, {
            TimeAccount_externalCode: timeAccountExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeAccountDetail` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountDetail` entities.
     */
    TimeAccountDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountDetail_1.TimeAccountDetail);
    };
    /**
     * Returns a request builder for creating a `TimeAccountDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeAccountDetail`.
     */
    TimeAccountDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TimeAccountDetail_1.TimeAccountDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TimeAccountDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeAccountDetail`.
     */
    TimeAccountDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TimeAccountDetail_1.TimeAccountDetail, entity);
    };
    TimeAccountDetailRequestBuilder.prototype.delete = function (timeAccountExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(TimeAccountDetail_1.TimeAccountDetail, timeAccountExternalCodeOrEntity instanceof TimeAccountDetail_1.TimeAccountDetail ? timeAccountExternalCodeOrEntity : {
            TimeAccount_externalCode: timeAccountExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return TimeAccountDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountDetailRequestBuilder = TimeAccountDetailRequestBuilder;
//# sourceMappingURL=TimeAccountDetailRequestBuilder.js.map