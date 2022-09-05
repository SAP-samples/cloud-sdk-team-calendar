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
exports.TimeAccountPurchaseProfilePayComponentAssignment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder_1 = require("./TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountPurchaseProfilePayComponentAssignment" of service "SFOData".
 */
var TimeAccountPurchaseProfilePayComponentAssignment = /** @class */ (function (_super) {
    __extends(TimeAccountPurchaseProfilePayComponentAssignment, _super);
    function TimeAccountPurchaseProfilePayComponentAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountPurchaseProfilePayComponentAssignment`.
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountPurchaseProfilePayComponentAssignment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfilePayComponentAssignment` entity type.
     * @returns A `TimeAccountPurchaseProfilePayComponentAssignment` request builder.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.requestBuilder = function () {
        return new TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder_1.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfilePayComponentAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfilePayComponentAssignment`.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountPurchaseProfilePayComponentAssignment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountPurchaseProfilePayComponentAssignment.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._entityName = 'TimeAccountPurchaseProfilePayComponentAssignment';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPurchaseProfilePayComponentAssignment.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._defaultServicePath = '/odata/v2';
    return TimeAccountPurchaseProfilePayComponentAssignment;
}(core_1.Entity));
exports.TimeAccountPurchaseProfilePayComponentAssignment = TimeAccountPurchaseProfilePayComponentAssignment;
(function (TimeAccountPurchaseProfilePayComponentAssignment) {
    /**
     * Static representation of the [[timeAccountPurchaseProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE = new core_1.StringField('TimeAccountPurchaseProfile_externalCode', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.CREATED_BY = new core_1.StringField('createdBy', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.PAY_COMPONENT = new core_1.StringField('payComponent', TimeAccountPurchaseProfilePayComponentAssignment, 'Edm.String');
    /**
     * All fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._allFields = [
        TimeAccountPurchaseProfilePayComponentAssignment.TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE,
        TimeAccountPurchaseProfilePayComponentAssignment.CREATED_BY,
        TimeAccountPurchaseProfilePayComponentAssignment.CREATED_DATE_TIME,
        TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_BY,
        TimeAccountPurchaseProfilePayComponentAssignment.LAST_MODIFIED_DATE_TIME,
        TimeAccountPurchaseProfilePayComponentAssignment.MDF_SYSTEM_RECORD_STATUS,
        TimeAccountPurchaseProfilePayComponentAssignment.PAY_COMPONENT
    ];
    /**
     * All fields selector.
     */
    TimeAccountPurchaseProfilePayComponentAssignment.ALL_FIELDS = new core_1.AllFields('*', TimeAccountPurchaseProfilePayComponentAssignment);
    /**
     * All key fields of the TimeAccountPurchaseProfilePayComponentAssignment entity.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._keyFields = [TimeAccountPurchaseProfilePayComponentAssignment.TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE, TimeAccountPurchaseProfilePayComponentAssignment.PAY_COMPONENT];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfilePayComponentAssignment.
     */
    TimeAccountPurchaseProfilePayComponentAssignment._keys = TimeAccountPurchaseProfilePayComponentAssignment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountPurchaseProfilePayComponentAssignment = exports.TimeAccountPurchaseProfilePayComponentAssignment || (exports.TimeAccountPurchaseProfilePayComponentAssignment = {}));
exports.TimeAccountPurchaseProfilePayComponentAssignment = TimeAccountPurchaseProfilePayComponentAssignment;
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignment.js.map