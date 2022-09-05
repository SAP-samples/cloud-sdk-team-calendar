import { TimeTypeRequestBuilder } from './TimeTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeType" of service "SFOData".
 */
export declare class TimeType extends Entity implements TimeTypeType {
    /**
     * Technical entity name for TimeType.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeType.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absence Class.
     * Maximum length: 255.
     * @nullable
     */
    absenceClass?: string;
    /**
     * Absence Retention Group.
     * Maximum length: 128.
     * @nullable
     */
    absenceRetentionGroup?: string;
    /**
     * Accrual Recalculation Relevance.
     * Maximum length: 255.
     * @nullable
     */
    accrualRecalculationRelevance?: string;
    /**
     * Activate Cancellation Workflow.
     * @nullable
     */
    activateCancellationWorkflow?: boolean;
    /**
     * Admin Workflow Configuration.
     * Maximum length: 32.
     * @nullable
     */
    adminWorkflow?: string;
    /**
     * Allocation Strategy.
     * Maximum length: 255.
     * @nullable
     */
    allocationStrategy?: string;
    /**
     * Permitted Fractions For Unit Day.
     * Maximum length: 255.
     * @nullable
     */
    allowedFractionsUnitDay?: string;
    /**
     * Permitted Fractions For Unit Hour.
     * Maximum length: 255.
     * @nullable
     */
    allowedFractionsUnitHour?: string;
    /**
     * Allow Requests In Increments Of [Minutes].
     * @nullable
     */
    allowedRequestingIncrement?: BigNumber;
    /**
     * Balance Calculation Setting.
     * Maximum length: 255.
     * @nullable
     */
    balanceCalculationSetting?: string;
    /**
     * Duration Display According To.
     * Maximum length: 255.
     * @nullable
     */
    calculationMethod?: string;
    /**
     * Classification.
     * Maximum length: 255.
     * @nullable
     */
    category?: string;
    /**
     * Collision Grouping.
     * Maximum length: 128.
     * @nullable
     */
    collisionGrouping?: string;
    /**
     * Counting Method.
     * Maximum length: 128.
     * @nullable
     */
    countingMethod?: string;
    /**
     * Country.
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
    createdDate?: Moment;
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
     * Flexible Requesting Allowed.
     * @nullable
     */
    flexibleRequestingAllowed?: boolean;
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
    lastModifiedDate?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateWithTz?: Moment;
    /**
     * Leave of Absence Event Reason (Return To Work).
     * Maximum length: 32.
     * @nullable
     */
    loaEndEventReason?: string;
    /**
     * Leave of Absence Event Reason (Plan).
     * Maximum length: 32.
     * @nullable
     */
    loaStartEventReason?: string;
    /**
     * Maximum Duration in Months.
     * @nullable
     */
    maximumDurationInMonths?: BigNumber;
    /**
     * mdfSystemEffectiveEndDate.
     * @nullable
     */
    mdfSystemEffectiveEndDate?: Moment;
    /**
     * mdfSystemEffectiveStartDate.
     * @nullable
     */
    mdfSystemEffectiveStartDate?: Moment;
    /**
     * mdfSystemEntityId.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemEntityId?: string;
    /**
     * mdfSystemObjectType.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemObjectType?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordId?: string;
    /**
     * mdfSystemRecordStatus.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemStatus.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemStatus?: string;
    /**
     * mdfSystemTransactionSequence.
     * @nullable
     */
    mdfSystemTransactionSequence?: BigNumber;
    /**
     * mdfSystemVersionId.
     * @nullable
     */
    mdfSystemVersionId?: BigNumber;
    /**
     * Requesting on Non-Working Days Allowed.
     * @nullable
     */
    requestingOnNonWorkingDaysAllowed?: boolean;
    /**
     * Undetermined End Date Allowed.
     * @nullable
     */
    undeterminedEndDateAllowed?: boolean;
    /**
     * Unit.
     * Maximum length: 255.
     * @nullable
     */
    unit?: string;
    /**
     * Workflow Configuration.
     * Maximum length: 32.
     * @nullable
     */
    workflowConfiguration?: string;
    /**
     * One-to-one navigation property to the [[AbsenceCountingMethod]] entity.
     */
    countingMethodNav: AbsenceCountingMethod;
    /**
     * One-to-many navigation property to the [[TimeAccountPostingRule]] entity.
     */
    timeAccountPostingRules: TimeAccountPostingRule[];
    /**
     * Returns an entity builder to construct instances `TimeType`.
     * @returns A builder that constructs instances of entity type `TimeType`.
     */
    static builder(): EntityBuilderType<TimeType, TimeTypeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeType` entity type.
     * @returns A `TimeType` request builder.
     */
    static requestBuilder(): TimeTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeType`.
     */
    static customField(fieldName: string): CustomField<TimeType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AbsenceCountingMethod, AbsenceCountingMethodType } from './AbsenceCountingMethod';
import { TimeAccountPostingRule, TimeAccountPostingRuleType } from './TimeAccountPostingRule';
export interface TimeTypeType {
    absenceClass?: string;
    absenceRetentionGroup?: string;
    accrualRecalculationRelevance?: string;
    activateCancellationWorkflow?: boolean;
    adminWorkflow?: string;
    allocationStrategy?: string;
    allowedFractionsUnitDay?: string;
    allowedFractionsUnitHour?: string;
    allowedRequestingIncrement?: BigNumber;
    balanceCalculationSetting?: string;
    calculationMethod?: string;
    category?: string;
    collisionGrouping?: string;
    countingMethod?: string;
    country?: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
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
    flexibleRequestingAllowed?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    lastModifiedDateTime?: Moment;
    lastModifiedDateWithTz?: Moment;
    loaEndEventReason?: string;
    loaStartEventReason?: string;
    maximumDurationInMonths?: BigNumber;
    mdfSystemEffectiveEndDate?: Moment;
    mdfSystemEffectiveStartDate?: Moment;
    mdfSystemEntityId?: string;
    mdfSystemObjectType?: string;
    mdfSystemRecordId?: string;
    mdfSystemRecordStatus?: string;
    mdfSystemStatus?: string;
    mdfSystemTransactionSequence?: BigNumber;
    mdfSystemVersionId?: BigNumber;
    requestingOnNonWorkingDaysAllowed?: boolean;
    undeterminedEndDateAllowed?: boolean;
    unit?: string;
    workflowConfiguration?: string;
    countingMethodNav: AbsenceCountingMethodType;
    timeAccountPostingRules: TimeAccountPostingRuleType[];
}
export interface TimeTypeTypeForceMandatory {
    absenceClass: string;
    absenceRetentionGroup: string;
    accrualRecalculationRelevance: string;
    activateCancellationWorkflow: boolean;
    adminWorkflow: string;
    allocationStrategy: string;
    allowedFractionsUnitDay: string;
    allowedFractionsUnitHour: string;
    allowedRequestingIncrement: BigNumber;
    balanceCalculationSetting: string;
    calculationMethod: string;
    category: string;
    collisionGrouping: string;
    countingMethod: string;
    country: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
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
    flexibleRequestingAllowed: boolean;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastModifiedDateTime: Moment;
    lastModifiedDateWithTz: Moment;
    loaEndEventReason: string;
    loaStartEventReason: string;
    maximumDurationInMonths: BigNumber;
    mdfSystemEffectiveEndDate: Moment;
    mdfSystemEffectiveStartDate: Moment;
    mdfSystemEntityId: string;
    mdfSystemObjectType: string;
    mdfSystemRecordId: string;
    mdfSystemRecordStatus: string;
    mdfSystemStatus: string;
    mdfSystemTransactionSequence: BigNumber;
    mdfSystemVersionId: BigNumber;
    requestingOnNonWorkingDaysAllowed: boolean;
    undeterminedEndDateAllowed: boolean;
    unit: string;
    workflowConfiguration: string;
    countingMethodNav: AbsenceCountingMethodType;
    timeAccountPostingRules: TimeAccountPostingRuleType[];
}
export declare namespace TimeType {
    /**
     * Static representation of the [[absenceClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSENCE_CLASS: StringField<TimeType>;
    /**
     * Static representation of the [[absenceRetentionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSENCE_RETENTION_GROUP: StringField<TimeType>;
    /**
     * Static representation of the [[accrualRecalculationRelevance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_RECALCULATION_RELEVANCE: StringField<TimeType>;
    /**
     * Static representation of the [[activateCancellationWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVATE_CANCELLATION_WORKFLOW: BooleanField<TimeType>;
    /**
     * Static representation of the [[adminWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMIN_WORKFLOW: StringField<TimeType>;
    /**
     * Static representation of the [[allocationStrategy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOCATION_STRATEGY: StringField<TimeType>;
    /**
     * Static representation of the [[allowedFractionsUnitDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOWED_FRACTIONS_UNIT_DAY: StringField<TimeType>;
    /**
     * Static representation of the [[allowedFractionsUnitHour]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOWED_FRACTIONS_UNIT_HOUR: StringField<TimeType>;
    /**
     * Static representation of the [[allowedRequestingIncrement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOWED_REQUESTING_INCREMENT: BigNumberField<TimeType>;
    /**
     * Static representation of the [[balanceCalculationSetting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE_CALCULATION_SETTING: StringField<TimeType>;
    /**
     * Static representation of the [[calculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATION_METHOD: StringField<TimeType>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<TimeType>;
    /**
     * Static representation of the [[collisionGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLISION_GROUPING: StringField<TimeType>;
    /**
     * Static representation of the [[countingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTING_METHOD: StringField<TimeType>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<TimeType>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeType>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<TimeType>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeType>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_JA_JP: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_KO_KR: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<TimeType>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<TimeType>;
    /**
     * Static representation of the [[externalNamePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_PT: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_RU_RU: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<TimeType>;
    /**
     * Static representation of the [[externalNameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_TW: StringField<TimeType>;
    /**
     * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLEXIBLE_REQUESTING_ALLOWED: BooleanField<TimeType>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeType>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<TimeType>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeType>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeType>;
    /**
     * Static representation of the [[loaEndEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_END_EVENT_REASON: StringField<TimeType>;
    /**
     * Static representation of the [[loaStartEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_START_EVENT_REASON: StringField<TimeType>;
    /**
     * Static representation of the [[maximumDurationInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_DURATION_IN_MONTHS: BigNumberField<TimeType>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeType>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeType>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<TimeType>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeType>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<TimeType>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeType>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<TimeType>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeType>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeType>;
    /**
     * Static representation of the [[requestingOnNonWorkingDaysAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTING_ON_NON_WORKING_DAYS_ALLOWED: BooleanField<TimeType>;
    /**
     * Static representation of the [[undeterminedEndDateAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDETERMINED_END_DATE_ALLOWED: BooleanField<TimeType>;
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<TimeType>;
    /**
     * Static representation of the [[workflowConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_CONFIGURATION: StringField<TimeType>;
    /**
     * Static representation of the one-to-one navigation property [[countingMethodNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTING_METHOD_NAV: OneToOneLink<TimeType, AbsenceCountingMethod>;
    /**
     * Static representation of the one-to-many navigation property [[timeAccountPostingRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_POSTING_RULES: Link<TimeType, TimeAccountPostingRule>;
    /**
     * All fields of the TimeType entity.
     */
    const _allFields: Array<StringField<TimeType> | BooleanField<TimeType> | BigNumberField<TimeType> | DateField<TimeType> | OneToOneLink<TimeType, AbsenceCountingMethod> | Link<TimeType, TimeAccountPostingRule>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeType>;
    /**
     * All key fields of the TimeType entity.
     */
    const _keyFields: Array<Selectable<TimeType>>;
    /**
     * Mapping of all key field names to the respective static field property TimeType.
     */
    const _keys: {
        [keys: string]: Selectable<TimeType>;
    };
}
//# sourceMappingURL=TimeType.d.ts.map