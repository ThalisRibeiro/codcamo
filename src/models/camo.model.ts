export class camo{

    constructor(challenge: string = "", isNormalChal:boolean){
        this._challenge = challenge;
        this.isAchievable = isNormalChal;
        this._isUnlocked = false;
    }
    private _challenge:string;
    public get challenge():string{
        return this._challenge;
    }
    private set challenge(challenge:string){
        this._challenge=challenge;
    }
    public isAchievable:boolean;
    
    private _isUnlocked : boolean;
    public get isUnlocked() : boolean {
        return this._isUnlocked;
    }
    public set isUnlocked(v : boolean) {
        if (!this.isAchievable) {
            return;
        }
        this._isUnlocked = v;
    }
    
}