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
exports.EmployeeTimeGroupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTimeGroup_1 = require("./EmployeeTimeGroup");
/**
 * Request builder class for operations supported on the [[EmployeeTimeGroup]] entity.
 */
var EmployeeTimeGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTimeGroupRequestBuilder, _super);
    function EmployeeTimeGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTimeGroup` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTimeGroup.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroup` entity based on its keys.
     */
    EmployeeTimeGroupRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeTimeGroup_1.EmployeeTimeGroup, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeTimeGroup` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroup` entities.
     */
    EmployeeTimeGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeTimeGroup_1.EmployeeTimeGroup);
    };
    return EmployeeTimeGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTimeGroupRequestBuilder = EmployeeTimeGroupRequestBuilder;
//# sourceMappingURL=EmployeeTimeGroupRequestBuilder.js.map