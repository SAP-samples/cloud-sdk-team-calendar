import { TimeAccountPayoutProfileRequestBuilder } from './TimeAccountPayoutProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountPayoutProfile" of service "SFOData".
 */
export declare class TimeAccountPayoutProfile extends Entity implements TimeAccountPayoutProfileType {
    /**
     * Technical entity name for TimeAccountPayoutProfile.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPayoutProfile.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Pay Component.
     * Maximum length: 32.
     * @nullable
     */
    payComponent?: string;
    /**
     * Do not use - Separate Pay Component for Accrual.
     * Maximum length: 32.
     * @nullable
     */
    payComponentAccrualSeparated?: string;
    /**
     * Pay Component Group.
     * Maximum length: 32.
     * @nullable
     */
    payComponentGroup?: string;
    /**
     * Pay Component on Termination.
     * Maximum length: 32.
     * @nullable
     */
    payComponentTermination?: string;
    /**
     * Separate Pay Component for Accrual on Termination.
     * Maximum length: 32.
     * @nullable
     */
    payComponentTerminationAccrualSeparated?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextDeDe?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextDefaultValue?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextEnDebug?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextEnGb?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextEnUs?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextEsEs?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextFrFr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextJaJp?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextKoKr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextLocalized?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextNlNl?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextPtBr?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextPtPt?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextRuRu?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextZhCn?: string;
    /**
     * Instructional Text.
     * Maximum length: 1000.
     * @nullable
     */
    payoutMessageTextZhTw?: string;
    /**
     * Workflow Configuration.
     * Maximum length: 32.
     * @nullable
     */
    workflowConfiguration?: string;
    /**
     * Returns an entity builder to construct instances `TimeAccountPayoutProfile`.
     * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
     */
    static builder(): EntityBuilderType<TimeAccountPayoutProfile, TimeAccountPayoutProfileTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPayoutProfile` entity type.
     * @returns A `TimeAccountPayoutProfile` request builder.
     */
    static requestBuilder(): TimeAccountPayoutProfileRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPayoutProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPayoutProfile`.
     */
    static customField(fieldName: string): CustomField<TimeAccountPayoutProfile>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TimeAccountPayoutProfileType {
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
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
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payComponent?: string;
    payComponentAccrualSeparated?: string;
    payComponentGroup?: string;
    payComponentTermination?: string;
    payComponentTerminationAccrualSeparated?: string;
    payoutMessageTextDeDe?: string;
    payoutMessageTextDefaultValue?: string;
    payoutMessageTextEnDebug?: string;
    payoutMessageTextEnGb?: string;
    payoutMessageTextEnUs?: string;
    payoutMessageTextEsEs?: string;
    payoutMessageTextFrFr?: string;
    payoutMessageTextJaJp?: string;
    payoutMessageTextKoKr?: string;
    payoutMessageTextLocalized?: string;
    payoutMessageTextNlNl?: string;
    payoutMessageTextPtBr?: string;
    payoutMessageTextPtPt?: string;
    payoutMessageTextRuRu?: string;
    payoutMessageTextZhCn?: string;
    payoutMessageTextZhTw?: string;
    workflowConfiguration?: string;
}
export interface TimeAccountPayoutProfileTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
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
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payComponent: string;
    payComponentAccrualSeparated: string;
    payComponentGroup: string;
    payComponentTermination: string;
    payComponentTerminationAccrualSeparated: string;
    payoutMessageTextDeDe: string;
    payoutMessageTextDefaultValue: string;
    payoutMessageTextEnDebug: string;
    payoutMessageTextEnGb: string;
    payoutMessageTextEnUs: string;
    payoutMessageTextEsEs: string;
    payoutMessageTextFrFr: string;
    payoutMessageTextJaJp: string;
    payoutMessageTextKoKr: string;
    payoutMessageTextLocalized: string;
    payoutMessageTextNlNl: string;
    payoutMessageTextPtBr: string;
    payoutMessageTextPtPt: string;
    payoutMessageTextRuRu: string;
    payoutMessageTextZhCn: string;
    payoutMessageTextZhTw: string;
    workflowConfiguration: string;
}
export declare namespace TimeAccountPayoutProfile {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_JA_JP: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_KO_KR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_PT: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_RU_RU: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_TW: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_ACCRUAL_SEPARATED: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_GROUP: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payComponentTermination]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TERMINATION: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_DE_DE: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_EN_DEBUG: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_EN_GB: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_EN_US: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_ES_ES: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_FR_FR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_JA_JP: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_KO_KR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_LOCALIZED: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_NL_NL: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_PT_BR: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextPtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_PT_PT: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_RU_RU: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_ZH_CN: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[payoutMessageTextZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_MESSAGE_TEXT_ZH_TW: StringField<TimeAccountPayoutProfile>;
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_CONFIGURATION: StringField<TimeAccountPayoutProfile>;
    /**
     * All fields of the TimeAccountPayoutProfile entity.
     */
    const _allFields: Array<StringField<TimeAccountPayoutProfile> | DateField<TimeAccountPayoutProfile>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountPayoutProfile>;
    /**
     * All key fields of the TimeAccountPayoutProfile entity.
     */
    const _keyFields: Array<Selectable<TimeAccountPayoutProfile>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPayoutProfile.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountPayoutProfile>;
    };
}
//# sourceMappingURL=TimeAccountPayoutProfile.d.ts.map