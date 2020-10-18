import { Loan } from './shared/models/loan';
import { LoanProfile } from './shared/models/loan-profile';

export const testLoans = [
  new Loan(1, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Subsidized",
    LoanOutstandingPrincipalBalance:3500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
  })),
  new Loan(2, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Subsidized",
    LoanOutstandingPrincipalBalance:3500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
  })),
  new Loan(3, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:5000,
    LoanOutstandingInterestBalance:16,
    LoanInterestRate:0,
  })),
  new Loan(4, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:120,
    LoanInterestRate:0,
  })),
  new Loan(5, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:196,
    LoanInterestRate:0,
  })),  
  
];