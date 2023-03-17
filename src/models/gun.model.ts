import { camo } from "./camo.model";

export class Gun {
    
    public constructor(name: string, category:number, GoldChal: string = "",PlatChal: string = "",PolyChal: string = "",OrionChal: string = "") {
        this._name = name;
        this._categoryId = category;
        this._goldCamo = new camo(GoldChal, false);
        this._platinumCamo= new camo(PlatChal, false);
        this._polyCamo= new camo(PolyChal, false);
        this._orionCamo = new camo(OrionChal, false);

        this.setCamos();      
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
    
    private _normalCamos: camo[] = [];

    public get normalCamos():camo[]{
        return this._normalCamos
    }
    public _goldCamo: camo;
    public _platinumCamo: camo;
    public _polyCamo: camo ;
    public _orionCamo: camo ;

    hasOnlyOneNormal():boolean{
        //Categories ID 8 melees and 9 launchers have only 1 normal challenge
        if (this.categoryId>7) {
            return true;
        }
        return false;
    }
    public setCamos(Chal1:string ="", Chal2:string = "",Chal3:string= "",Chal4:string=""){
        if(this.hasOnlyOneNormal()){
            this._normalCamos = [new camo(Chal1,true),new camo(Chal2,true,true),new camo(Chal3,true,true),new camo(Chal4,true,true)];
            return;
        }
        this._normalCamos = [new camo(Chal1,true), new camo(Chal2,true),new camo(Chal3,true),new camo(Chal4,true)];
        
    }
    isGoldAchievable(){
        if(this.hasOnlyOneNormal()){
            if(this._normalCamos[0].isUnlocked==true)
                this._goldCamo.isAchievable = true;
            else
                this._goldCamo.isAchievable = false;
        }
        else{
            if (this._normalCamos.every(x=> x.isUnlocked==true))
                this._goldCamo.isAchievable = true;
            else
                this._goldCamo.isAchievable = false;
        }

    }
}