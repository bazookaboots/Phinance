import { CashFlowHistory } from './cashflow-history';
import { LoanProfile } from './loan-profile';
export enum DatePeriodization {
    YEARLY=0,
    BIYEARLY=1,
    QUARTERLY=2,
    MONTHLY=3,
    WEEKLY=4,
    DAILY=5
}
export class Loan {
    
    private _entityID: number = 0;
    private _profile: LoanProfile = null;
    private _cashFlowHistory: CashFlowHistory;

    constructor(entityID: number, profile?: LoanProfile, cashFlowHistory?: [number, Date, string][]){
        this._entityID = entityID
        this._cashFlowHistory = new CashFlowHistory(cashFlowHistory)
        if(profile === undefined || profile === null){
            this._profile = null
        }
        else{
            this._profile = profile
        }
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
    get interestAmount():number | null {
        return this._profile.LoanOutstandingInterestBalance;
    }
    get principalAmount():number | null {
        return this._profile.LoanOutstandingPrincipalBalance;
    }
    get outstandingBalance(): number | null{
        return this._profile.LoanOutstandingPrincipalBalance + this._profile.LoanOutstandingInterestBalance
    }
    get accrualFrequency(): number | null {
        return this._profile.LoanInterestAccrualFequency;
    }
    get paymentHistory(){
        var payments: [number,Date][];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type === 'payment'){
                payments.push([flow.value,flow.date])
            }
        })
        return payments
    }    
    get interestAccrualHistory(){
        var charges: [number,Date][];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type === 'interest'){
                charges.push([flow.value,flow.date])
            }
        })
        return charges
    }
    get uncategorisedHistory(){
        var flows: [number,Date][];
        this._cashFlowHistory.cashflows.forEach( flow =>{
            if(flow.type !== 'interest' && flow.type !== 'payment'){
                flows.push([flow.value,flow.date])
            }
        })
        return flows
    }
    get cashFlowHistory(){
        return this._cashFlowHistory;
    }
    set profile(profile: LoanProfile) {
        this._profile = profile;
    }
}
