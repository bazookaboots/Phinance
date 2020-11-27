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
  }),
  [
    [ 3500, new Date("2017-09-21"), "principal"]
  ]),
  new Loan(2, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Subsidized",
    LoanOutstandingPrincipalBalance:3500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2018-10-10"),
  }),
  [
    [ 3500, new Date("2018-10-10"), "principal"]
  ]),
  new Loan(3, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:5000,
    LoanOutstandingInterestBalance:16,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2023-07-07"),
    LoanDate: new Date("2020-01-21"),
  }),
  [
    [ 5000, new Date("2020-01-21"), "principal"],
    [ 16, new Date("2020-02-21"), "interest"]
  ]),
  new Loan(4, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:120,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2018-10-10"),
    
  }),
  [
    [ 2000, new Date("2018-10-10"), "principal"],
    [ 16, new Date("2018-10-10"), "interest"],
    [ 16, new Date("2018-11-10"), "interest"],
    [ 16, new Date("2018-12-10"), "interest"],
    [ 16, new Date("2019-01-10"), "interest"],
    [ 16, new Date("2019-02-10"), "interest"],
    [ 16, new Date("2019-03-10"), "interest"],
    [ 16, new Date("2019-04-10"), "interest"],
    [ 8, new Date("2019-05-10"), "interest"]
  ]),
  new Loan(5, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2000,
    LoanOutstandingInterestBalance:197,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2022-12-19"),
    LoanDate: new Date("2017-09-21"),
  }),
  [
    [ 2000, new Date("2017-09-21"), "principal"],
    [ 16, new Date("2017-09-21"), "interest"],
    [ 16, new Date("2017-10-21"), "interest"],
    [ 16, new Date("2017-11-21"), "interest"],
    [ 16, new Date("2017-12-21"), "interest"],
    [ 16, new Date("2018-01-10"), "interest"],
    [ 16, new Date("2018-02-10"), "interest"],
    [ 16, new Date("2018-03-10"), "interest"],
    [ 16, new Date("2018-04-10"), "interest"],
    [ 16, new Date("2018-05-10"), "interest"],
    [ 16, new Date("2018-06-10"), "interest"],
    [ 16, new Date("2018-07-10"), "interest"],
    [ 16, new Date("2018-08-10"), "interest"],
    [ 5, new Date("2018-09-10"), "interest"]
  ]),  
  new Loan(5, new LoanProfile({
    LoanName:"Direct Stafford Loan",
    LoanType:"Direct Unsubsidized",
    LoanOutstandingPrincipalBalance:2500,
    LoanOutstandingInterestBalance:0,
    LoanInterestRate:0,
    LoanRepaymentBeginDate: new Date("2024-03-22"),
    LoanDate: new Date("2020-10-20"),
  }),
  [
    [ 2500, new Date("2020-10-20"), "principal"]
  ]),
];

export const loanCollection = new LoanCollection(testLoans)