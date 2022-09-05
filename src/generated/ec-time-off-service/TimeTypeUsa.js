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
exports.TimeTypeUsa = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TimeTypeUsaRequestBuilder_1 = require("./TimeTypeUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeTypeUSA" of service "SFOData".
 */
var TimeTypeUsa = /** @class */ (function (_super) {
    __extends(TimeTypeUsa, _super);
    function TimeTypeUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeTypeUsa`.
     * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
     */
    TimeTypeUsa.builder = function () {
        return core_1.Entity.entityBuilder(TimeTypeUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeTypeUsa` entity type.
     * @returns A `TimeTypeUsa` request builder.
     */
    TimeTypeUsa.requestBuilder = function () {
        return new TimeTypeUsaRequestBuilder_1.TimeTypeUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeTypeUsa`.
     */
    TimeTypeUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeTypeUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeTypeUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeTypeUsa.
     */
    TimeTypeUsa._entityName = 'TimeTypeUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeTypeUsa.
     */
    TimeTypeUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeTypeUsa._defaultServicePath = '/odata/v2';
    return TimeTypeUsa;
}(core_1.Entity));
exports.TimeTypeUsa = TimeTypeUsa;
(function (TimeTypeUsa) {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.TIME_TYPE_EXTERNAL_CODE = new core_1.StringField('TimeType_externalCode', TimeTypeUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.CREATED_BY = new core_1.StringField('createdBy', TimeTypeUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeTypeUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', TimeTypeUsa, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeTypeUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeTypeUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeTypeUsa, 'Edm.String');
    /**
     * Static representation of the [[sicknessVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeTypeUsa.SICKNESS_VARIANT = new core_1.StringField('sicknessVariant', TimeTypeUsa, 'Edm.String');
    /**
     * All fields of the TimeTypeUsa entity.
     */
    TimeTypeUsa._allFields = [
        TimeTypeUsa.TIME_TYPE_EXTERNAL_CODE,
        TimeTypeUsa.CREATED_BY,
        TimeTypeUsa.CREATED_DATE_TIME,
        TimeTypeUsa.EXTERNAL_CODE,
        TimeTypeUsa.LAST_MODIFIED_BY,
        TimeTypeUsa.LAST_MODIFIED_DATE_TIME,
        TimeTypeUsa.MDF_SYSTEM_RECORD_STATUS,
        TimeTypeUsa.SICKNESS_VARIANT
    ];
    /**
     * All fields selector.
     */
    TimeTypeUsa.ALL_FIELDS = new core_1.AllFields('*', TimeTypeUsa);
    /**
     * All key fields of the TimeTypeUsa entity.
     */
    TimeTypeUsa._keyFields = [TimeTypeUsa.TIME_TYPE_EXTERNAL_CODE, TimeTypeUsa.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeTypeUsa.
     */
    TimeTypeUsa._keys = TimeTypeUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeTypeUsa = exports.TimeTypeUsa || (exports.TimeTypeUsa = {}));
exports.TimeTypeUsa = TimeTypeUsa;
//# sourceMappingURL=TimeTypeUsa.js.map