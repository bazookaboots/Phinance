export enum Direction {
    DOWN = -1,
    UP = 1
}

export class CashFlow {
    private _amount: number = 0;
    private _date: Date;
    private _type: string;
    private _direction: number = 1;

    constructor( amount : number, direction: Direction = Direction.UP, type:string, date: Date){
        this._amount = amount;
        this._date = date;
        this._direction = direction;
        this._type = type;
    }

    get amount():number | null {
        return this.amount;
    }
    get date():Date | null {
        return this._date;
    }
    get direction():Direction | null {
        return this._direction;
    }
    get type(): string| null{
        return this._type;
    }
    get value():number{
        return this._amount * this._direction;
    }

}