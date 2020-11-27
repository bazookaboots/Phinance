import { CashFlow, Direction } from './cashflow';

export class CashFlowHistory{
    private _cashflows: CashFlow[];

    constructor(cashflow?:[number, Date][]){
        cashflow.forEach(flow => {
            this.addCashFlow(null, Math.abs(flow[0]), flow[1], Math.sign(flow[0]))
        })

    }
    addCashFlow(cashflow:CashFlow = null, amount?:number, date?:Date, direction?:Direction){
        if(cashflow === null){
            this._cashflows.push(new CashFlow(amount,direction,date));
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