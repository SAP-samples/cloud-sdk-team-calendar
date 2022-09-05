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
exports.TimeTypeAus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeTypeAusRequestBuilder_1 = require("./TimeTypeAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeTypeAUS" of service "SFOData".
 */
var TimeTypeAus = /** @class */ (function (_super) {
    __extends(TimeTypeAus, _super);
    function TimeTypeAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeTypeAus`.
     * @returns A builder that constructs instances of entity type `TimeTypeAus`.
     */
    TimeTypeAus.builder = function () {
        return core_1.Entity.entityBuilder(TimeTypeAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeAus` entity type.
     * @returns A `TimeTypeAus` request builder.
     */
    TimeTypeAus.requestBuilder = function () {
        return new TimeTypeAusRequestBuilder_1.TimeTypeAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeAus`.
     */
    TimeTypeAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeTypeAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeTypeAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeTypeAus.
     */
    TimeTypeAus._entityName = 'TimeTypeAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeAus.
     */
    TimeTypeAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeTypeAus._defaultServicePath = '/odata/v2';
    return TimeTypeAus;
}(core_1.Entity));
exports.TimeTypeAus = TimeTypeAus;
(function (TimeTypeAus) {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.TIME_TYPE_EXTERNAL_CODE = new core_1.StringField('TimeType_externalCode', TimeTypeAus, 'Edm.String');
    /**
     * Static representation of the [[advanceLeavePaymentAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.ADVANCE_LEAVE_PAYMENT_ALLOWED = new core_1.BooleanField('advanceLeavePaymentAllowed', TimeTypeAus, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.CREATED_BY = new core_1.StringField('createdBy', TimeTypeAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeTypeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', TimeTypeAus, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeTypeAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeTypeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeTypeAus, 'Edm.String');
    /**
     * Static representation of the [[splitPaymentAcrossFinancialYearAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED = new core_1.BooleanField('splitPaymentAcrossFinancialYearAllowed', TimeTypeAus, 'Edm.Boolean');
    /**
     * All fields of the TimeTypeAus entity.
     */
    TimeTypeAus._allFields = [
        TimeTypeAus.TIME_TYPE_EXTERNAL_CODE,
        TimeTypeAus.ADVANCE_LEAVE_PAYMENT_ALLOWED,
        TimeTypeAus.CREATED_BY,
        TimeTypeAus.CREATED_DATE_TIME,
        TimeTypeAus.EXTERNAL_CODE,
        TimeTypeAus.LAST_MODIFIED_BY,
        TimeTypeAus.LAST_MODIFIED_DATE_TIME,
        TimeTypeAus.MDF_SYSTEM_RECORD_STATUS,
        TimeTypeAus.SPLIT_PAYMENT_ACROSS_FINANCIAL_YEAR_ALLOWED
    ];
    /**
     * All fields selector.
     */
    TimeTypeAus.ALL_FIELDS = new core_1.AllFields('*', TimeTypeAus);
    /**
     * All key fields of the TimeTypeAus entity.
     */
    TimeTypeAus._keyFields = [TimeTypeAus.TIME_TYPE_EXTERNAL_CODE, TimeTypeAus.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeTypeAus.
     */
    TimeTypeAus._keys = TimeTypeAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeTypeAus = exports.TimeTypeAus || (exports.TimeTypeAus = {}));
exports.TimeTypeAus = TimeTypeAus;
//# sourceMappingURL=TimeTypeAus.js.map