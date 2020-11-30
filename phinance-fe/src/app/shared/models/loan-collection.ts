import { from } from 'rxjs';
import { Loan, DatePeriodization } from './loan';
import { LoanInterface} from './loan-interface';


export class LoanCollection extends LoanInterface{
    
    private _loans: Loan[];
    
    constructor( loans? : Loan[]){
        super()
        this._loans = loans;
    }
    get cashFlowHistory(): [number,Date,string][]{
        let flows: [number, Date, string][] = [];
        this._loans.forEach(loan => {
            loan.cashFlowHistory.forEach( flow => {
                flows.push(flow);
            });
        });
        flows.sort((a,b)=> {
            if(a[1] < b[1]){
                return -1;
            }
            if(a[1] > b[1]){
                return 1;
            }
            return 0
        })
        return flows;
    }
    get paymentHistory(): [number,Date][]{
        let flows: [number, Date][] = [];
        this._loans.forEach(loan => {
            loan.paymentHistory.forEach( flow => {
                flows.push(flow);
            });
        });
        flows.sort((a,b)=> {
            if(a[1] < b[1]){
                return -1;
            }
            if(a[1] > b[1]){
                return 1;
            }
            return 0
        })
        return flows;
    }
    get interestAccrualHistory(): [number,Date][]{
        let flows: [number, Date][] = [];
        this._loans.forEach(loan => {
            loan.interestAccrualHistory.forEach( flow => {
                flows.push(flow);
            });
        });
        flows.sort((a,b)=> {
            if(a[1] < b[1]){
                return -1;
            }
            if(a[1] > b[1]){
                return 1;
            }
            return 0
        })
        return flows;
    }
    get uncategorisedHistory(): [number,Date][]{
        let flows: [number, Date][] = [];
        this._loans.forEach(loan => {
            loan.uncategorisedHistory.forEach( flow => {
                flows.push(flow);
            });
        });
        flows.sort((a,b)=> {
            if(a[1] < b[1]){
                return -1;
            }
            if(a[1] > b[1]){
                return 1;
            }
            return 0
        })
        return flows;
    }
    get outstandingBalance(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.outstandingBalance;
        });
        return principal
    }
    get principalAmount(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.principalAmount;
        });
        return principal
    }
    get interestAmount(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.interestAmount;
        });
        return principal
    }

    get loans():Loan[] | null {
        return this._loans;
    }

    clearLoans(){
        this._loans = [];
    }

    addLoan(loan:Loan){
        this._loans.push(loan);
    }
}