import { LoanProfile } from './loan-profile';

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

    


    get entityID(): number {
        return this._entityID;
    }
    get profile(): LoanProfile | null {
        return this._profile;
    }

    set profile(profile: LoanProfile) {
        this._profile = profile;
    }
}
