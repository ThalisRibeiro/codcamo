export class gunCategory{
    /**
     *
     */
    constructor(name:string, value: number) {
        this._name = name;
        this._value = value;
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    private set name(v : string) {
        this._name = v;
    }

    
    private _value : number;
    public get value() : number {
        return this._value;
    }
    private set value(v : number) {
        this._value = v;
    }
    
    
}