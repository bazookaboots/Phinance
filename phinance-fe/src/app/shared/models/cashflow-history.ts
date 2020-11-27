import { CashFlow, Direction } from './cashflow';

export class CashFlowHistory{
    private _cashflows: CashFlow[] =[];

    constructor(cashflow?:[number, Date, string][]){
        cashflow.forEach(flow => {
            this.addCashFlow(null, Math.abs(flow[0]), Math.sign(flow[0]), flow[2],flow[1])
        })

    }
    addCashFlow(cashflow:CashFlow = null, amount?:number, direction?:Direction, type?:string, date?:Date){
        if(cashflow === null){
            this._cashflows.push(new CashFlow(amount,direction,type,date));
        }
        else{
            this._cashflows.push(cashflow);
        }
    }

    get cashflows(): CashFlow[]{
        return this._cashflows;
    }
    
    get net(): number{
        let total: number =0;
        this._cashflows.forEach(cashflow =>{
            total =+ cashflow.value;
        })
        return total;
    }
}