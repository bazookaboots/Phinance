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
    private _paymentHistory: CashFlowHistory;
    private _interestAccrualHistory: CashFlowHistory;

    constructor(entityID: number, profile?: LoanProfile, paymentHistory?: [number, Date][], interestHistory?: [number, Date][]){
        this._entityID = entityID
        this._paymentHistory = new CashFlowHistory(paymentHistory)
        this._interestAccrualHistory = new CashFlowHistory(paymentHistory)
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
        this._paymentHistory.cashflows.forEach( flow =>{
            payments.push([flow.value,flow.date])
        })
        return payments
    }    
    get interestAccrualHistory(){
        var charges: [number,Date][];
        this._interestAccrualHistory.cashflows.forEach( flow =>{
            charges.push([flow.value,flow.date])
        })
        return charges
    }
    get cashFlowHistory(){
        var flows: [number, Date][]
        return flows;
    }
    set profile(profile: LoanProfile) {
        this._profile = profile;
    }
}
