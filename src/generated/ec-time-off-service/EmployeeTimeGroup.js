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
exports.EmployeeTimeGroup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTimeGroupRequestBuilder_1 = require("./EmployeeTimeGroupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeTimeGroup" of service "SFOData".
 */
var EmployeeTimeGroup = /** @class */ (function (_super) {
    __extends(EmployeeTimeGroup, _super);
    function EmployeeTimeGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTimeGroup`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    EmployeeTimeGroup.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeTimeGroup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeGroup` entity type.
     * @returns A `EmployeeTimeGroup` request builder.
     */
    EmployeeTimeGroup.requestBuilder = function () {
        return new EmployeeTimeGroupRequestBuilder_1.EmployeeTimeGroupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    EmployeeTimeGroup.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeTimeGroup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTimeGroup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTimeGroup.
     */
    EmployeeTimeGroup._entityName = 'EmployeeTimeGroup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeGroup.
     */
    EmployeeTimeGroup._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeTimeGroup._defaultServicePath = '/odata/v2';
    return EmployeeTimeGroup;
}(core_1.Entity));
exports.EmployeeTimeGroup = EmployeeTimeGroup;
var EmployeeTimeGroupItem_1 = require("./EmployeeTimeGroupItem");
(function (EmployeeTimeGroup) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_BY = new core_1.StringField('createdBy', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_DATE = new core_1.DateField('createdDate', EmployeeTimeGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.EXTERNAL_CODE = new core_1.StringField('externalCode', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[itemsCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.ITEMS_CATEGORY = new core_1.StringField('itemsCategory', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', EmployeeTimeGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.LAST_MODIFIED_DATE_WITH_TZ = new core_1.DateField('lastModifiedDateWithTZ', EmployeeTimeGroup, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', EmployeeTimeGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_START_DATE = new core_1.DateField('mdfSystemEffectiveStartDate', EmployeeTimeGroup, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_ENTITY_ID = new core_1.StringField('mdfSystemEntityId', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_OBJECT_TYPE = new core_1.StringField('mdfSystemObjectType', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_ID = new core_1.StringField('mdfSystemRecordId', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_TRANSACTION_SEQUENCE = new core_1.BigNumberField('mdfSystemTransactionSequence', EmployeeTimeGroup, 'Edm.Int64');
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.MDF_SYSTEM_VERSION_ID = new core_1.BigNumberField('mdfSystemVersionId', EmployeeTimeGroup, 'Edm.Int64');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.USER_ID = new core_1.StringField('userId', EmployeeTimeGroup, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTimeGroup.ITEMS = new core_1.Link('items', EmployeeTimeGroup, EmployeeTimeGroupItem_1.EmployeeTimeGroupItem);
    /**
     * All fields of the EmployeeTimeGroup entity.
     */
    EmployeeTimeGroup._allFields = [
        EmployeeTimeGroup.CREATED_BY,
        EmployeeTimeGroup.CREATED_DATE,
        EmployeeTimeGroup.CREATED_DATE_TIME,
        EmployeeTimeGroup.EXTERNAL_CODE,
        EmployeeTimeGroup.ITEMS_CATEGORY,
        EmployeeTimeGroup.LAST_MODIFIED_BY,
        EmployeeTimeGroup.LAST_MODIFIED_DATE,
        EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME,
        EmployeeTimeGroup.LAST_MODIFIED_DATE_WITH_TZ,
        EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_END_DATE,
        EmployeeTimeGroup.MDF_SYSTEM_EFFECTIVE_START_DATE,
        EmployeeTimeGroup.MDF_SYSTEM_ENTITY_ID,
        EmployeeTimeGroup.MDF_SYSTEM_OBJECT_TYPE,
        EmployeeTimeGroup.MDF_SYSTEM_RECORD_ID,
        EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS,
        EmployeeTimeGroup.MDF_SYSTEM_STATUS,
        EmployeeTimeGroup.MDF_SYSTEM_TRANSACTION_SEQUENCE,
        EmployeeTimeGroup.MDF_SYSTEM_VERSION_ID,
        EmployeeTimeGroup.USER_ID,
        EmployeeTimeGroup.ITEMS
    ];
    /**
     * All fields selector.
     */
    EmployeeTimeGroup.ALL_FIELDS = new core_1.AllFields('*', EmployeeTimeGroup);
    /**
     * All key fields of the EmployeeTimeGroup entity.
     */
    EmployeeTimeGroup._keyFields = [EmployeeTimeGroup.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeGroup.
     */
    EmployeeTimeGroup._keys = EmployeeTimeGroup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTimeGroup = exports.EmployeeTimeGroup || (exports.EmployeeTimeGroup = {}));
exports.EmployeeTimeGroup = EmployeeTimeGroup;
//# sourceMappingURL=EmployeeTimeGroup.js.map