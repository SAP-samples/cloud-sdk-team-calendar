import { TimeAccountPurchaseProfileRequestBuilder } from './TimeAccountPurchaseProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountPurchaseProfile" of service "SFOData".
 */
export declare class TimeAccountPurchaseProfile extends Entity implements TimeAccountPurchaseProfileType {
    /**
     * Technical entity name for TimeAccountPurchaseProfile.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPurchaseProfile.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Allow user to select the Deduction Start Date.
     * @nullable
     */
    allowDeductionStartDateSelection?: boolean;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Deduction Schedule.
     * Maximum length: 128.
     * @nullable
     */
    deductionSchedule?: string;
    /**
     * Deduction Type.
     * Maximum length: 128.
     * @nullable
     */
    deductionType?: string;
    /**
     * Equivalent Units.
     * Maximum length: 128.
     * @nullable
     */
    equivalentUnits?: string;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameJaJp?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameKoKr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtPt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameRuRu?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhTw?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextDeDe?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextDefaultValue?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextEnDebug?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextEnGb?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextEnUs?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextEsEs?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextFrFr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextJaJp?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextKoKr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextLocalized?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextNlNl?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextPtBr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextPtPt?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextRuRu?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextZhCn?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    helpTextZhTw?: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Workflow Configuration.
     * Maximum length: 32.
     * @nullable
     */
    workflowConfiguration?: string;
    /**
     * One-to-many navigation property to the [[TimeAccountPurchaseProfilePayComponentAssignment]] entity.
     */
    deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignment[];
    /**
     * Returns an entity builder to construct instances `TimeAccountPurchaseProfile`.
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
     */
    static builder(): EntityBuilderType<TimeAccountPurchaseProfile, TimeAccountPurchaseProfileTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPurchaseProfile` entity type.
     * @returns A `TimeAccountPurchaseProfile` request builder.
     */
    static requestBuilder(): TimeAccountPurchaseProfileRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPurchaseProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPurchaseProfile`.
     */
    static customField(fieldName: string): CustomField<TimeAccountPurchaseProfile>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TimeAccountPurchaseProfilePayComponentAssignment, TimeAccountPurchaseProfilePayComponentAssignmentType } from './TimeAccountPurchaseProfilePayComponentAssignment';
export interface TimeAccountPurchaseProfileType {
    allowDeductionStartDateSelection?: boolean;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    deductionSchedule?: string;
    deductionType?: string;
    equivalentUnits?: string;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnDebug?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameFrFr?: string;
    externalNameJaJp?: string;
    externalNameKoKr?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNamePtPt?: string;
    externalNameRuRu?: string;
    externalNameZhCn?: string;
    externalNameZhTw?: string;
    helpTextDeDe?: string;
    helpTextDefaultValue?: string;
    helpTextEnDebug?: string;
    helpTextEnGb?: string;
    helpTextEnUs?: string;
    helpTextEsEs?: string;
    helpTextFrFr?: string;
    helpTextJaJp?: string;
    helpTextKoKr?: string;
    helpTextLocalized?: string;
    helpTextNlNl?: string;
    helpTextPtBr?: string;
    helpTextPtPt?: string;
    helpTextRuRu?: string;
    helpTextZhCn?: string;
    helpTextZhTw?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    workflowConfiguration?: string;
    deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignmentType[];
}
export interface TimeAccountPurchaseProfileTypeForceMandatory {
    allowDeductionStartDateSelection: boolean;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    deductionSchedule: string;
    deductionType: string;
    equivalentUnits: string;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnDebug: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameFrFr: string;
    externalNameJaJp: string;
    externalNameKoKr: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNamePtPt: string;
    externalNameRuRu: string;
    externalNameZhCn: string;
    externalNameZhTw: string;
    helpTextDeDe: string;
    helpTextDefaultValue: string;
    helpTextEnDebug: string;
    helpTextEnGb: string;
    helpTextEnUs: string;
    helpTextEsEs: string;
    helpTextFrFr: string;
    helpTextJaJp: string;
    helpTextKoKr: string;
    helpTextLocalized: string;
    helpTextNlNl: string;
    helpTextPtBr: string;
    helpTextPtPt: string;
    helpTextRuRu: string;
    helpTextZhCn: string;
    helpTextZhTw: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    workflowConfiguration: string;
    deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignmentType[];
}
export declare namespace TimeAccountPurchaseProfile {
    /**
     * Static representation of the [[allowDeductionStartDateSelection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_DEDUCTION_START_DATE_SELECTION: BooleanField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[deductionSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_SCHEDULE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[deductionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TYPE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[equivalentUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIVALENT_UNITS: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_JA_JP: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_KO_KR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_PT: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_RU_RU: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_DE_DE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_DEFAULT_VALUE: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_EN_DEBUG: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_EN_GB: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_EN_US: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_ES_ES: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_FR_FR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_JA_JP: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_KO_KR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_LOCALIZED: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_NL_NL: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_PT_BR: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextPtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_PT_PT: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_RU_RU: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_ZH_CN: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[helpTextZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HELP_TEXT_ZH_TW: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_CONFIGURATION: StringField<TimeAccountPurchaseProfile>;
    /**
     * Static representation of the one-to-many navigation property [[deductionPayComponents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_PAY_COMPONENTS: Link<TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment>;
    /**
     * All fields of the TimeAccountPurchaseProfile entity.
     */
    const _allFields: Array<BooleanField<TimeAccountPurchaseProfile> | StringField<TimeAccountPurchaseProfile> | DateField<TimeAccountPurchaseProfile> | Link<TimeAccountPurchaseProfile, TimeAccountPurchaseProfilePayComponentAssignment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountPurchaseProfile>;
    /**
     * All key fields of the TimeAccountPurchaseProfile entity.
     */
    const _keyFields: Array<Selectable<TimeAccountPurchaseProfile>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPurchaseProfile.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountPurchaseProfile>;
    };
}
//# sourceMappingURL=TimeAccountPurchaseProfile.d.ts.map