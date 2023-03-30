export class camo{

    constructor(challenge: string = "", isAchievable:boolean, isUnlocked:boolean=false ,isHidden:boolean=false){
        this._challenge = challenge;
        this.isAchievable = isAchievable;
        this._isUnlocked = isUnlocked;
        this.isHidden = isHidden;
    }
    public isHidden:boolean;
    private _challenge:string;
    public get challenge():string{
        return this._challenge;
    }
    public set challenge(challenge:string){
        this._challenge=challenge;
    }
    public isAchievable:boolean;
    
    private _isUnlocked : boolean;
    public get isUnlocked() : boolean {
        return this._isUnlocked;
    }
    public set isUnlocked(isUnlocked : boolean) {
        if (this.isAchievable==false) {
            this._isUnlocked=false;
            return;
        }
        this._isUnlocked = isUnlocked;
    }
}