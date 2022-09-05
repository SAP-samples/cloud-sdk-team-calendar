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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpTimeAccountBalance = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmpTimeAccountBalanceRequestBuilder_1 = require("./EmpTimeAccountBalanceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpTimeAccountBalance" of service "SFOData".
 */
var EmpTimeAccountBalance = /** @class */ (function (_super) {
    __extends(EmpTimeAccountBalance, _super);
    function EmpTimeAccountBalance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpTimeAccountBalance`.
     * @returns A builder that constructs instances of entity type `EmpTimeAccountBalance`.
     */
    EmpTimeAccountBalance.builder = function () {
        return core_1.Entity.entityBuilder(EmpTimeAccountBalance);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpTimeAccountBalance` entity type.
     * @returns A `EmpTimeAccountBalance` request builder.
     */
    EmpTimeAccountBalance.requestBuilder = function () {
        return new EmpTimeAccountBalanceRequestBuilder_1.EmpTimeAccountBalanceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpTimeAccountBalance`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpTimeAccountBalance`.
     */
    EmpTimeAccountBalance.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpTimeAccountBalance);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpTimeAccountBalance.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpTimeAccountBalance.
     */
    EmpTimeAccountBalance._entityName = 'EmpTimeAccountBalance';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpTimeAccountBalance.
     */
    EmpTimeAccountBalance._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpTimeAccountBalance._defaultServicePath = '/odata/v2';
    return EmpTimeAccountBalance;
}(core_1.Entity));
exports.EmpTimeAccountBalance = EmpTimeAccountBalance;
(function (EmpTimeAccountBalance) {
    /**
     * Static representation of the [[accountClosed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.ACCOUNT_CLOSED = new core_1.BooleanField('accountClosed', EmpTimeAccountBalance, 'Edm.Boolean');
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.BALANCE = new core_1.BigNumberField('balance', EmpTimeAccountBalance, 'Edm.Decimal');
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.TIME_ACCOUNT = new core_1.StringField('timeAccount', EmpTimeAccountBalance, 'Edm.String');
    /**
     * Static representation of the [[timeAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.TIME_ACCOUNT_TYPE = new core_1.StringField('timeAccountType', EmpTimeAccountBalance, 'Edm.String');
    /**
     * Static representation of the [[timeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.TIME_UNIT = new core_1.StringField('timeUnit', EmpTimeAccountBalance, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpTimeAccountBalance.USER_ID = new core_1.StringField('userId', EmpTimeAccountBalance, 'Edm.String');
    /**
     * All fields of the EmpTimeAccountBalance entity.
     */
    EmpTimeAccountBalance._allFields = [
        EmpTimeAccountBalance.ACCOUNT_CLOSED,
        EmpTimeAccountBalance.BALANCE,
        EmpTimeAccountBalance.TIME_ACCOUNT,
        EmpTimeAccountBalance.TIME_ACCOUNT_TYPE,
        EmpTimeAccountBalance.TIME_UNIT,
        EmpTimeAccountBalance.USER_ID
    ];
    /**
     * All fields selector.
     */
    EmpTimeAccountBalance.ALL_FIELDS = new core_1.AllFields('*', EmpTimeAccountBalance);
    /**
     * All key fields of the EmpTimeAccountBalance entity.
     */
    EmpTimeAccountBalance._keyFields = [EmpTimeAccountBalance.TIME_ACCOUNT];
    /**
     * Mapping of all key field names to the respective static field property EmpTimeAccountBalance.
     */
    EmpTimeAccountBalance._keys = EmpTimeAccountBalance._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpTimeAccountBalance = exports.EmpTimeAccountBalance || (exports.EmpTimeAccountBalance = {}));
exports.EmpTimeAccountBalance = EmpTimeAccountBalance;
//# sourceMappingURL=EmpTimeAccountBalance.js.map