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
exports.TimeTypeCan = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeTypeCanRequestBuilder_1 = require("./TimeTypeCanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeTypeCAN" of service "SFOData".
 */
var TimeTypeCan = /** @class */ (function (_super) {
    __extends(TimeTypeCan, _super);
    function TimeTypeCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeTypeCan`.
     * @returns A builder that constructs instances of entity type `TimeTypeCan`.
     */
    TimeTypeCan.builder = function () {
        return core_1.Entity.entityBuilder(TimeTypeCan);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeCan` entity type.
     * @returns A `TimeTypeCan` request builder.
     */
    TimeTypeCan.requestBuilder = function () {
        return new TimeTypeCanRequestBuilder_1.TimeTypeCanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeCan`.
     */
    TimeTypeCan.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeTypeCan);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeTypeCan.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeTypeCan.
     */
    TimeTypeCan._entityName = 'TimeTypeCAN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeCan.
     */
    TimeTypeCan._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeTypeCan._defaultServicePath = '/odata/v2';
    return TimeTypeCan;
}(core_1.Entity));
exports.TimeTypeCan = TimeTypeCan;
(function (TimeTypeCan) {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.TIME_TYPE_EXTERNAL_CODE = new core_1.StringField('TimeType_externalCode', TimeTypeCan, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.CREATED_BY = new core_1.StringField('createdBy', TimeTypeCan, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeTypeCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', TimeTypeCan, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeTypeCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeTypeCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeTypeCan, 'Edm.String');
    /**
     * Static representation of the [[sicknessVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeCan.SICKNESS_VARIANT = new core_1.StringField('sicknessVariant', TimeTypeCan, 'Edm.String');
    /**
     * All fields of the TimeTypeCan entity.
     */
    TimeTypeCan._allFields = [
        TimeTypeCan.TIME_TYPE_EXTERNAL_CODE,
        TimeTypeCan.CREATED_BY,
        TimeTypeCan.CREATED_DATE_TIME,
        TimeTypeCan.EXTERNAL_CODE,
        TimeTypeCan.LAST_MODIFIED_BY,
        TimeTypeCan.LAST_MODIFIED_DATE_TIME,
        TimeTypeCan.MDF_SYSTEM_RECORD_STATUS,
        TimeTypeCan.SICKNESS_VARIANT
    ];
    /**
     * All fields selector.
     */
    TimeTypeCan.ALL_FIELDS = new core_1.AllFields('*', TimeTypeCan);
    /**
     * All key fields of the TimeTypeCan entity.
     */
    TimeTypeCan._keyFields = [TimeTypeCan.TIME_TYPE_EXTERNAL_CODE, TimeTypeCan.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeTypeCan.
     */
    TimeTypeCan._keys = TimeTypeCan._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeTypeCan = exports.TimeTypeCan || (exports.TimeTypeCan = {}));
exports.TimeTypeCan = TimeTypeCan;
//# sourceMappingURL=TimeTypeCan.js.map