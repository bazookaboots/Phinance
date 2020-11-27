import { Loan } from './shared/models/loan';
import { LoanProfile } from './shared/models/loan-profile';
import { LoanCollection} from './shared/models/collection-loans';

export const testLoans = [
  new Loan(1, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Subsidized",
    LoanOutstandingPrincipalBalance:3500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2017-09-21"),
  })),
  new Loan(2, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Subsidized",
    LoanOutstandingPrincipalBalance:3500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2018-10-10"),
  })),
  new Loan(3, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:5000,
    LoanOutstandingInterestBalance:16,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2023-07-07"),
    LoanDate: new Date("2020-01-21"),
  })),
  new Loan(4, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:120,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2018-10-10"),
    
  })),
  new Loan(5, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:197,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2017-09-21"),
  })),  
  new Loan(5, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2024-03-22"),
    LoanDate: new Date("2020-10-20"),
  })),
];

export const loanCollection = new LoanCollection(testLoans)