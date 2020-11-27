import { from } from 'rxjs';
import { Loan, DatePeriodization } from './loan';

export class LoanCollection {
    
    private _loans: Loan[];
    
    constructor( loans? : Loan[]){
        this._loans = loans;
    }

    clearLoans(){
        this._loans = [];
    }

    addLoan(loan:Loan){
        this._loans.push(loan);
    }

    get TotalOutstandingBalance(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.outstandingBalance;
        });
        return principal
    }

    get TotalOutstandingPrincipal(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.principalAmount;
        });
        return principal
    }
    get TotalOutstandingInterest(): number {
        let principal: number = 0;
        this._loans.forEach(loan => {
            principal += loan.interestAmount;
        });
        return principal
    }

    detTotalInterest

    get loans():Loan[] | null {
        return this._loans;
    }
}