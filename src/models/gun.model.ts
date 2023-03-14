import { camo } from "./camo.model";

export class Gun {
    constructor(name: string, category:number) {
        this._name = name;
        this._categoryId = category;
        // this.setCamos();
        
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    private _categoryId : number;
    public get categoryId() : number {
        return this._categoryId;
    }
    public set categoryId(v : number) {
        this._categoryId = v;
    }
    
    public _normalCamos: camo[] = [];

    public _goldCamo: camo = new camo("", false);
    public _platinumCamo: camo = new camo("", false);
    public _polyCamo: camo = new camo("", false);
    public _orionCamo: camo = new camo("", false);

    hasOnlyOneNormal():boolean{
        //Categories ID 8 melees and 9 launchers have only 1 normal challenge
        if (this.categoryId>7) {
            return true;
        }
        return false;
    }
    setCamos(){
        if(this.hasOnlyOneNormal()){
            this._normalCamos = [new camo("",true)];
            return;
        }
        this._normalCamos = [new camo("",true), new camo("",true),new camo("",true),new camo("",true)];
        
    }
}