import { LoanProfile } from './loan-profile';

enum ChartType {
    PIE = 0,
    LINE = 1
}
export class Loan {
    
    private _entityID: number = 0;
    private _profile: LoanProfile = null;

    constructor(entityID: number, profile?: LoanProfile){
        this._entityID = entityID
        if(profile === undefined || profile === null){
            this._profile = null
        }
        else{
            this._profile = profile
        }
    }

    
    generateChartData(chartType: ChartType){
        switch(chartType){
            case 0:{

            }
            case 1:{

            }
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
    get principleAmount():number | null {
        return this._profile.LoanOutstandingPrincipalBalance;
    }

    set profile(profile: LoanProfile) {
        this._profile = profile;
    }
}
