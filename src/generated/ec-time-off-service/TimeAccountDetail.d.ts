import { TimeAccountDetailRequestBuilder } from './TimeAccountDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountDetail" of service "SFOData".
 */
export declare class TimeAccountDetail extends Entity implements TimeAccountDetailType {
    /**
     * Technical entity name for TimeAccountDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Account_External Code.
     * Maximum length: 128.
     */
    timeAccountExternalCode: string;
    /**
     * Accrual Period ID.
     * Maximum length: 255.
     * @nullable
     */
    accrualPeriodId?: string;
    /**
     * Taken in Advance.
     * @nullable
     */
    advanced?: boolean;
    /**
     * Amount posted.
     * @nullable
     */
    bookingAmount?: BigNumber;
    /**
     * Posting Date.
     * @nullable
     */
    bookingDate?: Moment;
    /**
     * Posting Type.
     * Maximum length: 255.
     * @nullable
     */
    bookingType?: string;
    /**
     * Posting Unit.
     * Maximum length: 255.
     * @nullable
     */
    bookingUnit?: string;
    /**
     * Time Calendar Entry.
     * Maximum length: 128.
     * @nullable
     */
    calendarEntry?: string;
    /**
     * Time Account Change Calendar.
     * Maximum length: 128.
     * @nullable
     */
    changeCalendar?: string;
    /**
     * Comment.
     * Maximum length: 255.
     * @nullable
     */
    comment?: string;
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
     * Employee Time.
     * Maximum length: 128.
     * @nullable
     */
    employeeTime?: string;
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
     * Payout Accrual Separated.
     * @nullable
     */
    payoutAccrualSeparated?: boolean;
    /**
     * Reference Object.
     * Maximum length: 255.
     * @nullable
     */
    referenceObject?: string;
    /**
     * One-to-one navigation property to the [[EmployeeTimeCalendar]] entity.
     */
    calendarEntryNav: EmployeeTimeCalendar;
    /**
     * One-to-one navigation property to the [[EmployeeTime]] entity.
     */
    employeeTimeNav: EmployeeTime;
    /**
     * Returns an entity builder to construct instances `TimeAccountDetail`.
     * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
     */
    static builder(): EntityBuilderType<TimeAccountDetail, TimeAccountDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountDetail` entity type.
     * @returns A `TimeAccountDetail` request builder.
     */
    static requestBuilder(): TimeAccountDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
     */
    static customField(fieldName: string): CustomField<TimeAccountDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
export interface TimeAccountDetailType {
    timeAccountExternalCode: string;
    accrualPeriodId?: string;
    advanced?: boolean;
    bookingAmount?: BigNumber;
    bookingDate?: Moment;
    bookingType?: string;
    bookingUnit?: string;
    calendarEntry?: string;
    changeCalendar?: string;
    comment?: string;
    createdBy?: string;
    createdDate?: Moment;
    createdDateTime?: Moment;
    employeeTime?: string;
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
    payoutAccrualSeparated?: boolean;
    referenceObject?: string;
    calendarEntryNav: EmployeeTimeCalendarType;
    employeeTimeNav: EmployeeTimeType;
}
export interface TimeAccountDetailTypeForceMandatory {
    timeAccountExternalCode: string;
    accrualPeriodId: string;
    advanced: boolean;
    bookingAmount: BigNumber;
    bookingDate: Moment;
    bookingType: string;
    bookingUnit: string;
    calendarEntry: string;
    changeCalendar: string;
    comment: string;
    createdBy: string;
    createdDate: Moment;
    createdDateTime: Moment;
    employeeTime: string;
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
    payoutAccrualSeparated: boolean;
    referenceObject: string;
    calendarEntryNav: EmployeeTimeCalendarType;
    employeeTimeNav: EmployeeTimeType;
}
export declare namespace TimeAccountDetail {
    /**
     * Static representation of the [[timeAccountExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_EXTERNAL_CODE: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[accrualPeriodId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_PERIOD_ID: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[advanced]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCED: BooleanField<TimeAccountDetail>;
    /**
     * Static representation of the [[bookingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_AMOUNT: BigNumberField<TimeAccountDetail>;
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_DATE: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[bookingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_TYPE: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[bookingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_UNIT: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[calendarEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALENDAR_ENTRY: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[changeCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_CALENDAR: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[lastModifiedDateWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_WITH_TZ: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_ENTITY_ID: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OBJECT_TYPE: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemRecordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_ID: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemTransactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_TRANSACTION_SEQUENCE: BigNumberField<TimeAccountDetail>;
    /**
     * Static representation of the [[mdfSystemVersionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_VERSION_ID: BigNumberField<TimeAccountDetail>;
    /**
     * Static representation of the [[payoutAccrualSeparated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYOUT_ACCRUAL_SEPARATED: BooleanField<TimeAccountDetail>;
    /**
     * Static representation of the [[referenceObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_OBJECT: StringField<TimeAccountDetail>;
    /**
     * Static representation of the one-to-one navigation property [[calendarEntryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALENDAR_ENTRY_NAV: OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_NAV: OneToOneLink<TimeAccountDetail, EmployeeTime>;
    /**
     * All fields of the TimeAccountDetail entity.
     */
    const _allFields: Array<StringField<TimeAccountDetail> | BooleanField<TimeAccountDetail> | BigNumberField<TimeAccountDetail> | DateField<TimeAccountDetail> | OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar> | OneToOneLink<TimeAccountDetail, EmployeeTime>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountDetail>;
    /**
     * All key fields of the TimeAccountDetail entity.
     */
    const _keyFields: Array<Selectable<TimeAccountDetail>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountDetail.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountDetail>;
    };
}
//# sourceMappingURL=TimeAccountDetail.d.ts.map