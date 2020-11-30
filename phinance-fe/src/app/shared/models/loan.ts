import { from } from 'rxjs';
import { CashFlowHistory } from './cashflow-history';
import { LoanProfile } from './loan-profile';
import { LoanInterface} from './loan-interface';
export enum DatePeriodization {
    YEARLY=0,
    BIYEARLY=1,
    QUARTERLY=2,
    MONTHLY=3,
    WEEKLY=4,
    DAILY=5
}
export class Loan extends LoanInterface {
    
    private _entityID: number = 0;
    private _profile: LoanProfile = null;
    private _cashFlowHistory: CashFlowHistory;

    constructor(entityID: number, profile?: LoanProfile, cashFlowHistory?: [number, Date, string][]){
        super();
        this._entityID = entityID
        this._cashFlowHistory = new CashFlowHistory(cashFlowHistory)
        if(profile === undefined || profile === null){
            this._profile = null
        }
        else{
            this._profile = profile
        }
    }

    
    get cashFlowHistory():[number,Date, string][]{
        let flows: [number,Date, string][] = [];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            flows.push([flow.value,flow.date,flow.type])
        })
        return flows;
    }
    get paymentHistory(): [number,Date][]{
        let payments: [number,Date][] = [];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type === 'payment'){
                payments.push([flow.value,flow.date])
            }
        })
        return payments
    }    
    get interestAccrualHistory(): [number,Date][]{
        let charges: [number,Date][] = [];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type === 'interest'){
                charges.push([flow.value,flow.date])
            }
        })
        return charges
    }
    get uncategorisedHistory(): [number,Date][]{
        let flows: [number,Date][] = [];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type !== 'interest' && flow.type !== 'payment'){
                flows.push([flow.value,flow.date])
            }
        })
        return flows
    }

    get interestAmount():number | null {
        return this._profile.LoanOutstandingInterestBalance;
    }
    get principalAmount():number | null {
        return this._profile.LoanOutstandingPrincipalBalance;
    }

    calculateFuture(periods:number, frequency:DatePeriodization){
        switch(frequency){
        case DatePeriodization.YEARLY: {}
        case DatePeriodization.BIYEARLY:{}
        case DatePeriodization.QUARTERLY:{}
        case DatePeriodization.MONTHLY:{}
        case DatePeriodization.WEEKLY:{}
        case DatePeriodization.DAILY:{}
        }
        
    }

    get entityID(): number {
        return this._entityID;
    }
    //get profile(): LoanProfile | null {
    //    return this._profile;
    //}
    get name():string | null {
        return this._profile.LoanName;
    }
    get type():string | null {
        return this._profile.LoanType;
    }
   
    get outstandingBalance(): number | null{
        return this._profile.LoanOutstandingPrincipalBalance + this._profile.LoanOutstandingInterestBalance
    }
    get accrualFrequency(): number | null {
        return this._profile.LoanInterestAccrualFequency;
    }
    
    set profile(profile: LoanProfile) {
        this._profile = profile;
    }
}
