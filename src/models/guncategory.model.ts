export class gunCategory{
    /**
     *
     */
    constructor(name:string, Id: number, launchGuns: number = 0) {
        this._name = name;
        this._categoryId = Id;
        this._launchGun = launchGuns;
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    private set name(v : string) {
        this._name = v;
    }

    
    private _categoryId : number;
    public get categoryId() : number {
        return this._categoryId;
    }
    private set categoryId(v : number) {
        this._categoryId = v;
    }
    
    
    private _launchGun : number;
    public get launchGun() : number {
        return this._launchGun;
    }
    private set launchGun(v : number) {
        this._launchGun = v;
    }
    
}