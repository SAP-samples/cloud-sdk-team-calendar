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
exports.TimeAccountTypeAus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeAccountTypeAusRequestBuilder_1 = require("./TimeAccountTypeAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccountTypeAUS" of service "SFOData".
 */
var TimeAccountTypeAus = /** @class */ (function (_super) {
    __extends(TimeAccountTypeAus, _super);
    function TimeAccountTypeAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccountTypeAus`.
     * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
     */
    TimeAccountTypeAus.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccountTypeAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountTypeAus` entity type.
     * @returns A `TimeAccountTypeAus` request builder.
     */
    TimeAccountTypeAus.requestBuilder = function () {
        return new TimeAccountTypeAusRequestBuilder_1.TimeAccountTypeAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountTypeAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountTypeAus`.
     */
    TimeAccountTypeAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccountTypeAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccountTypeAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccountTypeAus.
     */
    TimeAccountTypeAus._entityName = 'TimeAccountTypeAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountTypeAus.
     */
    TimeAccountTypeAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccountTypeAus._defaultServicePath = '/odata/v2';
    return TimeAccountTypeAus;
}(core_1.Entity));
exports.TimeAccountTypeAus = TimeAccountTypeAus;
(function (TimeAccountTypeAus) {
    /**
     * Static representation of the [[timeAccountTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.TIME_ACCOUNT_TYPE_EXTERNAL_CODE = new core_1.StringField('TimeAccountType_externalCode', TimeAccountTypeAus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.CREATED_BY = new core_1.StringField('createdBy', TimeAccountTypeAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccountTypeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', TimeAccountTypeAus, 'Edm.Int64');
    /**
     * Static representation of the [[includeInLeaveLoadingCalculations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.INCLUDE_IN_LEAVE_LOADING_CALCULATIONS = new core_1.BooleanField('includeInLeaveLoadingCalculations', TimeAccountTypeAus, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccountTypeAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccountTypeAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccountTypeAus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccountTypeAus, 'Edm.String');
    /**
     * All fields of the TimeAccountTypeAus entity.
     */
    TimeAccountTypeAus._allFields = [
        TimeAccountTypeAus.TIME_ACCOUNT_TYPE_EXTERNAL_CODE,
        TimeAccountTypeAus.CREATED_BY,
        TimeAccountTypeAus.CREATED_DATE_TIME,
        TimeAccountTypeAus.EXTERNAL_CODE,
        TimeAccountTypeAus.INCLUDE_IN_LEAVE_LOADING_CALCULATIONS,
        TimeAccountTypeAus.LAST_MODIFIED_BY,
        TimeAccountTypeAus.LAST_MODIFIED_DATE_TIME,
        TimeAccountTypeAus.MDF_SYSTEM_RECORD_STATUS
    ];
    /**
     * All fields selector.
     */
    TimeAccountTypeAus.ALL_FIELDS = new core_1.AllFields('*', TimeAccountTypeAus);
    /**
     * All key fields of the TimeAccountTypeAus entity.
     */
    TimeAccountTypeAus._keyFields = [TimeAccountTypeAus.TIME_ACCOUNT_TYPE_EXTERNAL_CODE, TimeAccountTypeAus.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccountTypeAus.
     */
    TimeAccountTypeAus._keys = TimeAccountTypeAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccountTypeAus = exports.TimeAccountTypeAus || (exports.TimeAccountTypeAus = {}));
exports.TimeAccountTypeAus = TimeAccountTypeAus;
//# sourceMappingURL=TimeAccountTypeAus.js.map