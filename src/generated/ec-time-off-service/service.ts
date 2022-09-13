/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualCalculationBaseApi } from './AccrualCalculationBaseApi';
import { TimeAccountPostingRuleApi } from './TimeAccountPostingRuleApi';
import { WorkScheduleDayApi } from './WorkScheduleDayApi';
import { WorkScheduleApi } from './WorkScheduleApi';
import { TimeAccountApi } from './TimeAccountApi';
import { EmployeeTimeApi } from './EmployeeTimeApi';
import { HolidayCalendarApi } from './HolidayCalendarApi';
import { EmployeeTimeColApi } from './EmployeeTimeColApi';
import { EmployeeTimePolApi } from './EmployeeTimePolApi';
import { EmployeeTimeAusApi } from './EmployeeTimeAusApi';
import { TimeTypeAusApi } from './TimeTypeAusApi';
import { TimeAccountTypeAusApi } from './TimeAccountTypeAusApi';
import { EmployeeTimeCanApi } from './EmployeeTimeCanApi';
import { EmployeeTimeUsaApi } from './EmployeeTimeUsaApi';
import { TimeTypeCanApi } from './TimeTypeCanApi';
import { TimeTypeUsaApi } from './TimeTypeUsaApi';
import { TimeAccountSnapshotApi } from './TimeAccountSnapshotApi';
import { TimeAccountDetailApi } from './TimeAccountDetailApi';
import { EmployeeTimeMexApi } from './EmployeeTimeMexApi';
import { TimeTypeProfileApi } from './TimeTypeProfileApi';
import { HolidayApi } from './HolidayApi';
import { ShiftClassificationApi } from './ShiftClassificationApi';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
import { TemporaryTimeInformationApi } from './TemporaryTimeInformationApi';
import { EmployeeTimeEspApi } from './EmployeeTimeEspApi';
import { EmployeeTimeCalendarApi } from './EmployeeTimeCalendarApi';
import { WorkScheduleDayModelAssignmentSegmentApi } from './WorkScheduleDayModelAssignmentSegmentApi';
import { AvailableTimeTypeApi } from './AvailableTimeTypeApi';
import { WorkScheduleDayModelSegmentApi } from './WorkScheduleDayModelSegmentApi';
import { EmpTimeAccountBalanceApi } from './EmpTimeAccountBalanceApi';
import { WorkScheduleDayModelAssignmentApi } from './WorkScheduleDayModelAssignmentApi';
import { EmployeeTimeDeuApi } from './EmployeeTimeDeuApi';
import { EmployeeTimeGroupItemApi } from './EmployeeTimeGroupItemApi';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { TimeTypeApi } from './TimeTypeApi';
import { HolidayAssignmentApi } from './HolidayAssignmentApi';
import { AbsenceCountingMethodApi } from './AbsenceCountingMethodApi';
import { TimeAccountPurchaseProfileApi } from './TimeAccountPurchaseProfileApi';
import { TimeAccountPayoutProfileApi } from './TimeAccountPayoutProfileApi';
import { TimeAccountPurchaseProfilePayComponentAssignmentApi } from './TimeAccountPurchaseProfilePayComponentAssignmentApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import { defaultDeSerializers, DeSerializers, DefaultDeSerializers, mergeDefaultDeSerializersWith, Time } from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
  
  export function ecTimeOffService<BinaryT = string,
BooleanT = boolean,
ByteT = number,
DecimalT = BigNumber,
DoubleT = number,
FloatT = number,
Int16T = number,
Int32T = number,
Int64T = BigNumber,
GuidT = string,
SByteT = number,
SingleT = number,
StringT = string,
AnyT = any,
DateTimeOffsetT = Moment,
DateTimeT = Moment,
TimeT = Time>(
  deSerializers: Partial<DeSerializers<BinaryT,
BooleanT,
ByteT,
DecimalT,
DoubleT,
FloatT,
Int16T,
Int32T,
Int64T,
GuidT,
SByteT,
SingleT,
StringT,
AnyT,
DateTimeOffsetT,
DateTimeT,
TimeT>> = defaultDeSerializers as any
  ):EcTimeOffService<DeSerializers<BinaryT,
BooleanT,
ByteT,
DecimalT,
DoubleT,
FloatT,
Int16T,
Int32T,
Int64T,
GuidT,
SByteT,
SingleT,
StringT,
AnyT,
DateTimeOffsetT,
DateTimeT,
TimeT>>  
  {
  return new EcTimeOffService(mergeDefaultDeSerializersWith(deSerializers))
  } 
class EcTimeOffService<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
    private apis: Record<string, any> = {};
    private deSerializers: DeSerializersT;

    constructor(deSerializers: DeSerializersT) {
      this.deSerializers = deSerializers;
    }

    private initApi(key: string, ctor: new (...args: any[]) => any): any {
      if (!this.apis[key]) {
        this.apis[key] = new ctor(this.deSerializers);
      }
      return this.apis[key];
    }

    get accrualCalculationBaseApi(): AccrualCalculationBaseApi<DeSerializersT> { 
        return this.initApi('accrualCalculationBaseApi', AccrualCalculationBaseApi)    
      }
    
    get timeAccountPostingRuleApi(): TimeAccountPostingRuleApi<DeSerializersT> { 
        const api = this.initApi('timeAccountPostingRuleApi', TimeAccountPostingRuleApi);
          const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get workScheduleDayApi(): WorkScheduleDayApi<DeSerializersT> { 
        return this.initApi('workScheduleDayApi', WorkScheduleDayApi)    
      }
    
    get workScheduleApi(): WorkScheduleApi<DeSerializersT> { 
        const api = this.initApi('workScheduleApi', WorkScheduleApi);
          const linkedApis = [
            this.initApi('workScheduleApi', WorkScheduleApi),
        this.initApi('shiftClassificationApi', ShiftClassificationApi),
        this.initApi('workScheduleDayModelAssignmentApi', WorkScheduleDayModelAssignmentApi),
        this.initApi('workScheduleDayApi', WorkScheduleDayApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeAccountApi(): TimeAccountApi<DeSerializersT> { 
        const api = this.initApi('timeAccountApi', TimeAccountApi);
          const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api),
        this.initApi('timeAccountDetailApi', TimeAccountDetailApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeApi(): EmployeeTimeApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeApi', EmployeeTimeApi);
          const linkedApis = [
            this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi),
        this.initApi('employeeTimeEspApi', EmployeeTimeEspApi),
        this.initApi('employeeTimeMexApi', EmployeeTimeMexApi),
        this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi),
        this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi),
        this.initApi('timeTypeApi', TimeTypeApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get holidayCalendarApi(): HolidayCalendarApi<DeSerializersT> { 
        const api = this.initApi('holidayCalendarApi', HolidayCalendarApi);
          const linkedApis = [
            this.initApi('holidayAssignmentApi', HolidayAssignmentApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeColApi(): EmployeeTimeColApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeColApi', EmployeeTimeColApi);
          const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimePolApi(): EmployeeTimePolApi<DeSerializersT> { 
        return this.initApi('employeeTimePolApi', EmployeeTimePolApi)    
      }
    
    get employeeTimeAusApi(): EmployeeTimeAusApi<DeSerializersT> { 
        return this.initApi('employeeTimeAusApi', EmployeeTimeAusApi)    
      }
    
    get timeTypeAusApi(): TimeTypeAusApi<DeSerializersT> { 
        return this.initApi('timeTypeAusApi', TimeTypeAusApi)    
      }
    
    get timeAccountTypeAusApi(): TimeAccountTypeAusApi<DeSerializersT> { 
        return this.initApi('timeAccountTypeAusApi', TimeAccountTypeAusApi)    
      }
    
    get employeeTimeCanApi(): EmployeeTimeCanApi<DeSerializersT> { 
        return this.initApi('employeeTimeCanApi', EmployeeTimeCanApi)    
      }
    
    get employeeTimeUsaApi(): EmployeeTimeUsaApi<DeSerializersT> { 
        return this.initApi('employeeTimeUsaApi', EmployeeTimeUsaApi)    
      }
    
    get timeTypeCanApi(): TimeTypeCanApi<DeSerializersT> { 
        return this.initApi('timeTypeCanApi', TimeTypeCanApi)    
      }
    
    get timeTypeUsaApi(): TimeTypeUsaApi<DeSerializersT> { 
        return this.initApi('timeTypeUsaApi', TimeTypeUsaApi)    
      }
    
    get timeAccountSnapshotApi(): TimeAccountSnapshotApi<DeSerializersT> { 
        const api = this.initApi('timeAccountSnapshotApi', TimeAccountSnapshotApi);
          const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeAccountDetailApi(): TimeAccountDetailApi<DeSerializersT> { 
        const api = this.initApi('timeAccountDetailApi', TimeAccountDetailApi);
          const linkedApis = [
            this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi),
        this.initApi('employeeTimeApi', EmployeeTimeApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeMexApi(): EmployeeTimeMexApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeMexApi', EmployeeTimeMexApi);
          const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeTypeProfileApi(): TimeTypeProfileApi<DeSerializersT> { 
        const api = this.initApi('timeTypeProfileApi', TimeTypeProfileApi);
          const linkedApis = [
            this.initApi('availableTimeTypeApi', AvailableTimeTypeApi),
        this.initApi('timeTypeApi', TimeTypeApi),
        this.initApi('timeTypeApi', TimeTypeApi),
        this.initApi('timeTypeApi', TimeTypeApi),
        this.initApi('timeTypeApi', TimeTypeApi),
        this.initApi('timeAccountType_1Api', TimeAccountType_1Api),
        this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get holidayApi(): HolidayApi<DeSerializersT> { 
        return this.initApi('holidayApi', HolidayApi)    
      }
    
    get shiftClassificationApi(): ShiftClassificationApi<DeSerializersT> { 
        return this.initApi('shiftClassificationApi', ShiftClassificationApi)    
      }
    
    get workScheduleDayModelApi(): WorkScheduleDayModelApi<DeSerializersT> { 
        const api = this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi);
          const linkedApis = [
            this.initApi('workScheduleDayModelSegmentApi', WorkScheduleDayModelSegmentApi),
        this.initApi('shiftClassificationApi', ShiftClassificationApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeAccountType_1Api(): TimeAccountType_1Api<DeSerializersT> { 
        return this.initApi('timeAccountType_1Api', TimeAccountType_1Api)    
      }
    
    get temporaryTimeInformationApi(): TemporaryTimeInformationApi<DeSerializersT> { 
        const api = this.initApi('temporaryTimeInformationApi', TemporaryTimeInformationApi);
          const linkedApis = [
            this.initApi('workScheduleApi', WorkScheduleApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeEspApi(): EmployeeTimeEspApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeEspApi', EmployeeTimeEspApi);
          const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeCalendarApi(): EmployeeTimeCalendarApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi);
          const linkedApis = [
            this.initApi('timeAccountDetailApi', TimeAccountDetailApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get workScheduleDayModelAssignmentSegmentApi(): WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT> { 
        return this.initApi('workScheduleDayModelAssignmentSegmentApi', WorkScheduleDayModelAssignmentSegmentApi)    
      }
    
    get availableTimeTypeApi(): AvailableTimeTypeApi<DeSerializersT> { 
        const api = this.initApi('availableTimeTypeApi', AvailableTimeTypeApi);
          const linkedApis = [
            this.initApi('timeTypeApi', TimeTypeApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get workScheduleDayModelSegmentApi(): WorkScheduleDayModelSegmentApi<DeSerializersT> { 
        return this.initApi('workScheduleDayModelSegmentApi', WorkScheduleDayModelSegmentApi)    
      }
    
    get empTimeAccountBalanceApi(): EmpTimeAccountBalanceApi<DeSerializersT> { 
        return this.initApi('empTimeAccountBalanceApi', EmpTimeAccountBalanceApi)    
      }
    
    get workScheduleDayModelAssignmentApi(): WorkScheduleDayModelAssignmentApi<DeSerializersT> { 
        const api = this.initApi('workScheduleDayModelAssignmentApi', WorkScheduleDayModelAssignmentApi);
          const linkedApis = [
            this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi),
        this.initApi('workScheduleDayModelAssignmentSegmentApi', WorkScheduleDayModelAssignmentSegmentApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeDeuApi(): EmployeeTimeDeuApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi);
          const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi),
        this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeGroupItemApi(): EmployeeTimeGroupItemApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeGroupItemApi', EmployeeTimeGroupItemApi);
          const linkedApis = [
            this.initApi('employeeTimeApi', EmployeeTimeApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get employeeTimeGroupApi(): EmployeeTimeGroupApi<DeSerializersT> { 
        const api = this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi);
          const linkedApis = [
            this.initApi('employeeTimeGroupItemApi', EmployeeTimeGroupItemApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeTypeApi(): TimeTypeApi<DeSerializersT> { 
        const api = this.initApi('timeTypeApi', TimeTypeApi);
          const linkedApis = [
            this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi),
        this.initApi('timeAccountPostingRuleApi', TimeAccountPostingRuleApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get holidayAssignmentApi(): HolidayAssignmentApi<DeSerializersT> { 
        const api = this.initApi('holidayAssignmentApi', HolidayAssignmentApi);
          const linkedApis = [
            this.initApi('holidayApi', HolidayApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get absenceCountingMethodApi(): AbsenceCountingMethodApi<DeSerializersT> { 
        return this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi)    
      }
    
    get timeAccountPurchaseProfileApi(): TimeAccountPurchaseProfileApi<DeSerializersT> { 
        const api = this.initApi('timeAccountPurchaseProfileApi', TimeAccountPurchaseProfileApi);
          const linkedApis = [
            this.initApi('timeAccountPurchaseProfilePayComponentAssignmentApi', TimeAccountPurchaseProfilePayComponentAssignmentApi)
          ];
          api._addNavigationProperties(linkedApis);
          return api    
      }
    
    get timeAccountPayoutProfileApi(): TimeAccountPayoutProfileApi<DeSerializersT> { 
        return this.initApi('timeAccountPayoutProfileApi', TimeAccountPayoutProfileApi)    
      }
    
    get timeAccountPurchaseProfilePayComponentAssignmentApi(): TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT> { 
        return this.initApi('timeAccountPurchaseProfilePayComponentAssignmentApi', TimeAccountPurchaseProfilePayComponentAssignmentApi)    
      }
    
    
    
    
    
      get batch(): typeof batch {
        return batch;
      }

      get changeset(): typeof changeset {
        return changeset;
      }
  }
