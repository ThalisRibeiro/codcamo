import { Injectable } from '@angular/core';
import { Gun } from 'src/models/gun.model';
import { gunCategory } from 'src/models/guncategory.model';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor() { }
  public getDefaultGunCategory() : gunCategory[]{
    
  let gunCategories: gunCategory[] = [new gunCategory('Assault Rifle', 0), new gunCategory('Battle Rifle', 1), 
  new gunCategory('LMG', 2), new gunCategory('SMG', 3), new gunCategory('shotgun', 4),
  new gunCategory('Marksman Rifle', 5), new gunCategory('Sniper Rifle', 6), 
  new gunCategory('Handguns', 7), new gunCategory('Melee', 8), new gunCategory('Launchers', 9)];
  return gunCategories;
}

public getDefaultGunList():Gun[]{
  let guns:Gun[] =[];
  let gun = new Gun("m4",0, '10 3 kills', '25 longshots','25 headshots', 'unlock 51 poly');
  gun.setCamos('50 kill','kill','kill','kill',)
  guns.push(gun);
  gun = new Gun("m16",0, '10 3 kills', '25 longshots','25 headshots', 'unlock 51 poly');
  gun.setCamos('50 kill','kill','kill','kill',)
  guns.push(gun);
  gun = new Gun("m13",0, '10 3 kills', '25 longshots','25 headshots', 'unlock 51 poly');
  gun.setCamos('50 kill','kill','kill','kill',)
  guns.push(gun);
  gun = new Gun("Shield",0, '10 3 kills', '10 Double','10 behind', 'unlock 51 poly');
  gun.setCamos('50 kill')
  guns.push(gun);
  
  return guns;
  // gun.normalCamos[0].isUnlocked = true
}
}