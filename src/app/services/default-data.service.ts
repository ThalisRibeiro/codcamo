import { Injectable } from '@angular/core';
import { Gun } from 'src/models/gun.model';
import { gunCategory } from 'src/models/guncategory.model';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor() { }
  public getDefaultGunCategory() : gunCategory[]{
    
  let gunCategories: gunCategory[] = [new gunCategory('Assault Rifle', 0, 8), new gunCategory('Battle Rifle', 1, 4), 
  new gunCategory('SMG', 2, 8),  new gunCategory('shotgun', 3, 4), new gunCategory('LMG', 4, 6),
  new gunCategory('Marksman Rifle', 5, 5), new gunCategory('Sniper Rifle', 6, 4), 
  new gunCategory('Handguns', 7, 5), new gunCategory('Launchers', 8, 4), new gunCategory('Melee', 9, 2)];
  return gunCategories;
}

public getDefaultGunList():Gun[]{
  
  return this.getFullSeason2Guns();
  // gun.normalCamos[0].isUnlocked = true
  }
  public getFullSeason2Guns(): Gun[]{
    let guns:Gun[] =[];
    //ASSAULT
    let gun = new Gun("M4",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOTS', 'unlock 51 poly');
  
    gun.setCamos('50 KILLS','50 ADS','10 DOUBLE KILL','15 BEHIND')

    guns.push(gun);
    
    gun = new Gun("TAQ-56",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE KILL','50 ADS','15 HIPFIRE',)
  
    guns.push(gun);
  
  
    gun = new Gun("KASTOV 762",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','20 MOUNTED KILL','50 ADS','15 HIPFIRE',)
  
    guns.push(gun);
  
  
    gun = new Gun("LACHMANN - 556",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE KILL','50 SUPPRESSOR','10 HIPFIRE',)
  
    guns.push(gun);
  
  
    gun = new Gun("STB 556",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','20 MOUNTED KILL','10 DOUBLE KILL','30 CROUCH')
  
    guns.push(gun);
  
  
    gun = new Gun("M16",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE KILL','30 CROUCH','20 MOUNTED KILL')
  
    guns.push(gun);
  
  
    gun = new Gun("KASTOV-74U",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 POINT BLANK','10 DOUBLE KILL','30 CROUCH')
  
    guns.push(gun);

  
    gun = new Gun("KASTOV 545",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE KILL','15 POINT BLANK','15 BEHIND')
  
    guns.push(gun);

    
    gun = new Gun("CHIMERA",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','20 HIPFIRE','10 DOUBLE','15 BEHIND')
    guns.push(gun);


    gun = new Gun("M13B",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE KILL','15 POINT BLANK','15 BEHIND')
  
    guns.push(gun);
  
    gun = new Gun("ISO HEMLOCK",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','40 ADS','15 BEHIND','40 SUPRESSOR')
    guns.push(gun);

    //BATTLERIFLE
    gun = new Gun("SO-14",1, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','10 DOUBLE','30 PRONE')
    guns.push(gun);

    gun = new Gun("LACHMANN - 762",1, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','20 MOUNTED','10 BOUBLE')
    guns.push(gun);
    
    gun = new Gun("FTAC RECON",1, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE','50 SUPRESSOR','30 CROUCH')
    guns.push(gun);

    gun = new Gun("TAQ-V",1, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 POINTBLANK','15 BEHING','20 MOUNTED')
    guns.push(gun);

    //SMG
    
    gun = new Gun("VEL 46",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','15 HIPFIRE','10 BOUBLE')
    guns.push(gun);

    gun = new Gun("MX9",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 BOUBLE','20 MOUNTED', '30 CROUCHED')
    guns.push(gun);

    gun = new Gun("LACHMANN SUB",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 BOUBLE','50 SUPRESSED', '10 HIPFIRE')
    guns.push(gun);
    
    gun = new Gun("VAZNEV-9K",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','10 BOUBLE', '15 HIPFIRE')
    guns.push(gun);
    
    gun = new Gun("FSS HURRICANE",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 SUPPRESSOR','50 ADS', '15 POINTBLANK')
    guns.push(gun);
    
    gun = new Gun("MINBAK",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 BOUBLE','50 ADS', '15 POINTBLANK')
    guns.push(gun);
    
    gun = new Gun("BAS-P",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 HIPFIRE','15 BEHIND', '50 SUPPRESSOR')
    guns.push(gun);

    gun = new Gun("PDSW",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','15 HIPFIRE', '10 POINTBLANK')
    guns.push(gun);
    
    gun = new Gun("FENNEC 45",2, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '30 CROUCHED','15 BEHIND','10 DOUBLE')
    guns.push(gun);

    //SHOTGUNS
    
    gun = new Gun("LOCKWOOD 300",3, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','40 SUPPRESSOR','25 ONE SHOT','20 MOUNTED')
    guns.push(gun);
    
    gun = new Gun("EXPEDITE 12",3, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 HIPFIRE','25 PRONE','30 ADS')
    guns.push(gun);
    
    gun = new Gun("BRYSON 800",3, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 HIPFIRE','10 DOUBLE','20 ONESHOT')
    guns.push(gun);
    
    gun = new Gun("BRYSON 890",3, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 POINTBLANK','10 DOUBLE','25 CROUCH')
    guns.push(gun);
    
    gun = new Gun("KV BROADSIDE",3, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','20 POINTBLANK','10 DOUBLE','20 ONESHOT')
    guns.push(gun);

    //LMG

    
    gun = new Gun("SAKIN MG38",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','30 PRONE','10 DOUBLE', '50 SUPPRESSOR')
    guns.push(gun);
    
    gun = new Gun("HCR 56",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','50 ADS','10 DOUBLE', '20 MOUNTED')
    guns.push(gun);

    gun = new Gun("556 ICARUS",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE', '20 MOUNTED', '30 CROUCH')
    guns.push(gun);

    gun = new Gun("RAAL MG",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','15 BEHIND','20 MOUNTED', '10 HIPFIRE')
    guns.push(gun);
    
    gun = new Gun("RPK",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 DOUBLE','50 SUPPRESSOR' ,'20 MOUNTED')
    guns.push(gun);

    gun = new Gun("HAPP H",4 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS','10 POINTBLANK', '20 MOUNTED', '50 ADS')
    guns.push(gun);

    //MARKSMAN
    gun = new Gun("EBR",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '30 CROUCH', '20 MOUNTED','10 DOUBLE')
    guns.push(gun);
    
    gun = new Gun("SP-R 208",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '50 ADS', '30 PRONE','20 MOUNTED')
    guns.push(gun);
    
     
    gun = new Gun("LM-S",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS', '20 MOUNTED', '25 ONESHOT','30 CROUCH')
    guns.push(gun);
    
    gun = new Gun("LOCKWOOD MK2",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '15 BEHIND', '25 ONESHOT','10 POINTBLANK')
    guns.push(gun);
 
    gun = new Gun("SA B 50",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS', '25 ONESHOT', '10 DOUBLE','10 MOUNTED')
    guns.push(gun);
    
    gun = new Gun("TAQ-M",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '20 MOUNTED', '5 HIPFIRE','10 DOUBLE')
    guns.push(gun);
    
    gun = new Gun("TEMPUS TORRENT",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '10 DOUBLE', '20 MOUNTED','40 SUPPRESSOR')
    guns.push(gun);

    gun = new Gun("CROSSBOW",5 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '5 DOUBLE', '15 BEHIND','20 PRONE')
    guns.push(gun);
    
    // SNIPER
    
    gun = new Gun("MCPR 300",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '10 2 KILL 10 SEC', '30 PRONE','10 HIPFIRE')
    guns.push(gun);
    
    gun = new Gun("VICTUS XMR",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '25 ONESHOT', '10 DOUBLE','30 CROUCH')
    guns.push(gun);

    gun = new Gun("SIGNAL 50",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '10 2 KILL 10 SEC', '30 PRONE','25 ONESHOT')
    guns.push(gun);
    
    gun = new Gun("LA-B 330",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '10 2 KILL 10 SEC', '25 ONESHOT','50 SUPPRESSOR')
    guns.push(gun);
    
    gun = new Gun("SP-X 80",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('50 KILLS', '20 MOUNTED', '25 ONESHOT','50 SUPPRESSOR')
    guns.push(gun);
    
    // HANDGUN
    
    gun = new Gun("P890",7 , '5 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS', '40 SUPPRESSOR', '5 DOUBLE','10 POINTBLANK')
    guns.push(gun);
    
    gun = new Gun(".50 GS",7 , '5 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS','5 DOUBLE','15 MOUNTED', '40 AKIMBO')
    guns.push(gun);
    
    gun = new Gun("X12",7 , '5 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS','25 ADS','10 HIPFIRE', '40 AKIMBO')
    guns.push(gun);
    
    gun = new Gun("BASILISK",7 , '5 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS','30 ADS','10 POINTBLANK', '30 AKIMBO')
    guns.push(gun);
    
    gun = new Gun("X13 AUTO",7 , '5 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS','10 HIPFIRE', '10 DOUBLE','40 AKIMBO')
    guns.push(gun);
    
    // LAUNCHERS
    
    gun = new Gun("PILA", 8 , '5 2 STREAKS', '15 DESTROYS','15 DOUBLE', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    
    gun = new Gun("STRELA-P", 8 , '5 2 STREAKS', '25 DESTROYS','15 DOUBLE', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    
    gun = new Gun("JOKR", 8 , '5 2 STREAKS', '25 DESTROYS','15 DOUBLE', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    
    gun = new Gun("RPG-7", 8 , '5 2 STREAKS', '25 DESTROYS','15 DOUBLE', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    
    //MELEE
    
    gun = new Gun("RIOT SHIELD", 9 , '5 2 STREAKS', '10 2K 10SEC','10 BEHIND', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    gun = new Gun("KNIFE", 9 , '5 2 STREAKS', '10 2K 10SEC','20 BEHIND', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    gun = new Gun("DUAL KODACHIS", 9 , '5 2 STREAKS', '10 2K 10SEC','20 BEHIND', 'UNLOCK 51 POLY');
  
    gun.setCamos('40 KILLS')
    guns.push(gun);
    
    return guns;
  }
}