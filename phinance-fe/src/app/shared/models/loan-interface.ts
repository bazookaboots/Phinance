export abstract class LoanInterface{
    constructor(){};
    abstract get cashFlowHistory(): [number,Date,string][];
    abstract get paymentHistory(): [number,Date][];
    abstract get interestAccrualHistory(): [number,Date][];
    abstract get uncategorisedHistory(): [number,Date][];
    abstract get outstandingBalance():number;
    abstract get principalAmount():number;
    abstract get interestAmount():number;
}