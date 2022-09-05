import { HolidayCalendarRequestBuilder } from './HolidayCalendarRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "HolidayCalendar" of service "SFOData".
 */
export declare class HolidayCalendar extends Entity implements HolidayCalendarType {
    /**
     * Technical entity name for HolidayCalendar.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HolidayCalendar.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameJaJp?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameKoKr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    namePtPt?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameRuRu?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameZhTw?: string;
    /**
     * oldName.
     * Maximum length: 255.
     * @nullable
     */
    oldName?: string;
    /**
     * One-to-many navigation property to the [[HolidayAssignment]] entity.
     */
    holidayAssignments: HolidayAssignment[];
    /**
     * Returns an entity builder to construct instances `HolidayCalendar`.
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    static builder(): EntityBuilderType<HolidayCalendar, HolidayCalendarTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HolidayCalendar` entity type.
     * @returns A `HolidayCalendar` request builder.
     */
    static requestBuilder(): HolidayCalendarRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    static customField(fieldName: string): CustomField<HolidayCalendar>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { HolidayAssignment, HolidayAssignmentType } from './HolidayAssignment';
export interface HolidayCalendarType {
    country?: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    lastModifiedDateTime?: Moment;
    lastModifiedDateWithTz?: Moment;
    mdfSystemEffectiveEndDate?: Moment;
    mdfSystemEffectiveStartDate?: Moment;
    mdfSystemEntityId?: string;
    mdfSystemObjectType?: string;
    mdfSystemRecordId?: string;
    mdfSystemRecordStatus?: string;
    mdfSystemStatus?: string;
    mdfSystemTransactionSequence?: BigNumber;
    mdfSystemVersionId?: BigNumber;
    nameDeDe?: string;
    nameDefaultValue?: string;
    nameEnGb?: string;
    nameEnUs?: string;
    nameEsEs?: string;
    nameFrFr?: string;
    nameJaJp?: string;
    nameKoKr?: string;
    nameLocalized?: string;
    nameNlNl?: string;
    namePtBr?: string;
    namePtPt?: string;
    nameRuRu?: string;
    nameZhCn?: string;
    nameZhTw?: string;
    oldName?: string;
    holidayAssignments: HolidayAssignmentType[];
}
export interface HolidayCalendarTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastModifiedDateTime: Moment;
    lastModifiedDateWithTz: Moment;
    mdfSystemEffectiveEndDate: Moment;
    mdfSystemEffectiveStartDate: Moment;
    mdfSystemEntityId: string;
    mdfSystemObjectType: string;
    mdfSystemRecordId: string;
    mdfSystemRecordStatus: string;
    mdfSystemStatus: string;
    mdfSystemTransactionSequence: BigNumber;
    mdfSystemVersionId: BigNumber;
    nameDeDe: string;
    nameDefaultValue: string;
    nameEnGb: string;
    nameEnUs: string;
    nameEsEs: string;
    nameFrFr: string;
    nameJaJp: string;
    nameKoKr: string;
    nameLocalized: string;
    nameNlNl: string;
    namePtBr: string;
    namePtPt: string;
    nameRuRu: string;
    nameZhCn: string;
    nameZhTw: string;
    oldName: string;
    holidayAssignments: HolidayAssignmentType[];
}
export declare namespace HolidayCalendar {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<HolidayCalendar>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameJaJp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_JA_JP: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameKoKr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_KO_KR: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[namePtPt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_PT: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameRuRu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_RU_RU: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameZhTw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_TW: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[oldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OLD_NAME: StringField<HolidayCalendar>;
    /**
     * Static representation of the one-to-many navigation property [[holidayAssignments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_ASSIGNMENTS: Link<HolidayCalendar, HolidayAssignment>;
    /**
     * All fields of the HolidayCalendar entity.
     */
    const _allFields: Array<StringField<HolidayCalendar> | DateField<HolidayCalendar> | BigNumberField<HolidayCalendar> | Link<HolidayCalendar, HolidayAssignment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HolidayCalendar>;
    /**
     * All key fields of the HolidayCalendar entity.
     */
    const _keyFields: Array<Selectable<HolidayCalendar>>;
    /**
     * Mapping of all key field names to the respective static field property HolidayCalendar.
     */
    const _keys: {
        [keys: string]: Selectable<HolidayCalendar>;
    };
}
//# sourceMappingURL=HolidayCalendar.d.ts.map