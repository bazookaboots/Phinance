export class LoanProfile {
    LoanName: string;
    LoanType: string;
    //LoanAwardID: number;
    LoanDate: Date;
    LoanRepaymentBeginDate: Date;
    LoanPeriodBeginDate: Date;
    LoanPeriodEndDate: Date;
    LoanAmount: number;
    LoanDisbursedAmount: number;
    LoanCanceledAmount: number;
    LoanCanceledDate: Date;
    LoanOutstandingPrincipalBalance: number;
    LoanOutstandingPrincipalBalanceAsOfDate: Date;
    LoanOutstandingInterestBalance: number;
    LoanOutstandingInterestBalanceAsOfDate: Date;
    LoanInterestRateType: string;
    LoanInterestRate: number;
    //LoanRepaymentPlanType: string;
    //LoanRepaymentPlanBeginDate: Date;
    //LoanRepaymentPlanScheduledAmount: number;
    //LoanRepaymentPlanIDRPlanAnniversaryDate: Date;
    //LoanConfirmedSubsidyStatus: string;
    LoanSubsidizedUsageinYears: number;
    //LoanReaffirmationDate: Date;
    LoanMostRecentPaymentEffectiveDate: Date;
    LoanNextPaymentDueDate: Date;
    LoanCumulativePaymentAmount: number;
    //LoanPSLFCumulativeMatchedMonths: number;
    //LoanStatus: string;
    //LoanStatusDescription: string;
    //LoanStatusEffectiveDate: Date;
    LoanDisbursementDate: Date;
    LoanDisbursementAmount: number;
    LoanDisbursements: [];
    ContactType: string;
    ContactName: string;
    ContactStreetAddress1: string;
    ContactStreetAddress2: string;
    ContactCity: string;
    ContactStateCode: string;
    ContactZipCode: number;
    ContactPhoneNumber: string;
    ContactPhoneExtension: string;
    ContactEmailAddress: string;
    ContactWebSiteAddress: string;
    constructor(LoanInfo: {
        LoanName: string,
        LoanType?: string,
        //LoanAwardID: number,
        LoanDate?: Date,
        LoanRepaymentBeginDate?: Date,
        LoanPeriodBeginDate?: Date,
        LoanPeriodEndDate?: Date,
        LoanAmount?: number,
        LoanDisbursedAmount?: number,
        LoanCanceledAmount?: number,
        LoanCanceledDate?: Date,
        LoanOutstandingPrincipalBalance?: number,
        LoanOutstandingPrincipalBalanceAsOfDate?: Date,
        LoanOutstandingInterestBalance?: number,
        LoanOutstandingInterestBalanceAsOfDate?: Date,
        LoanInterestRateType?: string,
        LoanInterestRate?: number,
        //LoanRepaymentPlanType?: string,
        //LoanRepaymentPlanBeginDate?: Date,
        //LoanRepaymentPlanScheduledAmount?: number,
        //LoanRepaymentPlanIDRPlanAnniversaryDate?: Date,
        //LoanConfirmedSubsidyStatus?: string,
        LoanSubsidizedUsageinYears?: number,
        //LoanReaffirmationDate?: Date,
        LoanMostRecentPaymentEffectiveDate?: Date,
        LoanNextPaymentDueDate?: Date,
        LoanCumulativePaymentAmount?: number,
        //LoanPSLFCumulativeMatchedMonths?: number,
        //LoanStatus?: string,
        //LoanStatusDescription?: string,
        //LoanStatusEffectiveDate?: Date,
        LoanDisbursementDate?: Date,
        LoanDisbursementAmount?: number,
        LoanDisbursements?: [],
        ContactType?: string,
        ContactName?: string,
        ContactStreetAddress1?: string,
        ContactStreetAddress2?: string,
        ContactCity?: string,
        ContactStateCode?: string,
        ContactZipCode?: number,
        ContactPhoneNumber?: string,
        ContactPhoneExtension?: string,
        ContactEmailAddress?: string,
        ContactWebSiteAddress?: string
    }) {
        this.LoanName = LoanInfo.LoanName;
        this.LoanType = LoanInfo.LoanType;
        //this.LoanAwardID= LoanInfo.LoanAwardID;
        this.LoanDate = LoanInfo.LoanDate;
        this.LoanRepaymentBeginDate = LoanInfo.LoanRepaymentBeginDate;
        this.LoanPeriodBeginDate = LoanInfo.LoanPeriodBeginDate;
        this.LoanPeriodEndDate = LoanInfo.LoanPeriodEndDate;
        this.LoanAmount = LoanInfo.LoanAmount;
        this.LoanDisbursedAmount = LoanInfo.LoanDisbursedAmount;
        this.LoanCanceledAmount = LoanInfo.LoanCanceledAmount;
        this.LoanCanceledDate = LoanInfo.LoanCanceledDate;
        this.LoanOutstandingPrincipalBalance = LoanInfo.LoanOutstandingPrincipalBalance;
        this.LoanOutstandingPrincipalBalanceAsOfDate = LoanInfo.LoanOutstandingPrincipalBalanceAsOfDate;
        this.LoanOutstandingInterestBalance = LoanInfo.LoanOutstandingInterestBalance;
        this.LoanOutstandingInterestBalanceAsOfDate = LoanInfo.LoanOutstandingInterestBalanceAsOfDate;
        this.LoanInterestRateType = LoanInfo.LoanInterestRateType;
        this.LoanInterestRate = LoanInfo.LoanInterestRate;
        //this.LoanRepaymentPlanType= LoanInfo.LoanRepaymentPlanType;
        //this.LoanRepaymentPlanBeginDate= LoanInfo.LoanRepaymentPlanBeginDate;
        //this.LoanRepaymentPlanScheduledAmount= LoanInfo.LoanRepaymentPlanScheduledAmount;
        //this.LoanRepaymentPlanIDRPlanAnniversaryDate= LoanInfo.LoanRepaymentPlanIDRPlanAnniversaryDate;
        //this.LoanConfirmedSubsidyStatus= LoanInfo.LoanConfirmedSubsidyStatus;
        this.LoanSubsidizedUsageinYears = LoanInfo.LoanSubsidizedUsageinYears;
        //this.LoanReaffirmationDate= LoanInfo.LoanReaffirmationDate;
        this.LoanMostRecentPaymentEffectiveDate = LoanInfo.LoanMostRecentPaymentEffectiveDate;
        this.LoanNextPaymentDueDate = LoanInfo.LoanNextPaymentDueDate;
        this.LoanCumulativePaymentAmount = LoanInfo.LoanCumulativePaymentAmount;
        //this.LoanPSLFCumulativeMatchedMonths= LoanInfo.LoanPSLFCumulativeMatchedMonths;
        //this.LoanStatus= LoanInfo.LoanStatus;
        //this.LoanStatusDescription= LoanInfo.LoanStatusDescription;
        //this.LoanStatusEffectiveDate= LoanInfo.LoanStatusEffectiveDate;
        this.LoanDisbursementDate = LoanInfo.LoanDisbursementDate;
        this.LoanDisbursementAmount = LoanInfo.LoanDisbursementAmount;
        this.LoanDisbursements = LoanInfo.LoanDisbursements;
        this.ContactType = LoanInfo.ContactType;
        this.ContactName = LoanInfo.ContactName;
        this.ContactStreetAddress1 = LoanInfo.ContactStreetAddress1;
        this.ContactStreetAddress2 = LoanInfo.ContactStreetAddress2;
        this.ContactCity = LoanInfo.ContactCity;
        this.ContactStateCode = LoanInfo.ContactStateCode;
        this.ContactZipCode = LoanInfo.ContactZipCode;
        this.ContactPhoneNumber = LoanInfo.ContactPhoneNumber;
        this.ContactPhoneExtension = LoanInfo.ContactPhoneExtension;
        this.ContactEmailAddress = LoanInfo.ContactEmailAddress;
        this.ContactWebSiteAddress = LoanInfo.ContactWebSiteAddress;
    }
}
