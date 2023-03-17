import { Gun } from "./gun.model";
import { gunCategory } from "./guncategory.model";

export class achievability{
    isAllPlatinumAchievable(gunList:Gun[], gunCategories:gunCategory[]){
        
        //usando for
        for (let index = 0; index < 11; index++) {
            let gunsFromSameCategory = gunList.filter(gun => gun.categoryId == index)
            //filtrar duas vezes, uma com as armas de mesma categoria e outra com as restantes, depois juntar todas, mas somente fazer caso vá mudar valores
            if(this.countGold(gunsFromSameCategory)>= gunCategories[index].launchGun)
            gunList = this.changeValues(gunsFromSameCategory, gunList.filter(gun => gun.categoryId != index))
        }

        // ou usando for each
        gunCategories.forEach(category => {
            let gunsFromSameCategory = gunList.filter(gun => gun.categoryId == category.categoryId)
            if(this.countGold(gunsFromSameCategory)>= gunCategories[category.categoryId].launchGun)
            gunList = this.changeValues(gunsFromSameCategory, gunList.filter(gun => gun.categoryId != category.categoryId))
        
        });

    }
    isPolyAchievable(gunList: Gun[]): Gun[]{
        if(this.countPlatinum(gunList)>50){
            gunList.forEach(gun => {
                if(gun._platinumCamo.isUnlocked == true)
                gun._polyCamo.isAchievable == true;
            });
        }
        return gunList
    }

    countPlatinum(gunList: Gun[]):number{
        let PlatUnlocked = 0;
        gunList.forEach(gun => {
            if (gun._goldCamo.isUnlocked == true) {
                PlatUnlocked +=1;
            }
        });
        return PlatUnlocked;
    }
    isCategoryPlatinumAchievable(gunList: Gun[], gunCategory: gunCategory): Gun[]{
        let gunsFromSameCategory = gunList.filter(gun => gun.categoryId = gunCategory.categoryId)
        if(this.countGold(gunsFromSameCategory)>= gunCategory.categoryId){
            gunList = this.changeValues(gunsFromSameCategory, gunList.filter(gun => gun.categoryId != gunCategory.categoryId))
        }
        return gunList;
    }
    countGold(gunsFromSameCategory:Gun[]):number{
        let goldUnlocked:number = 0;
        gunsFromSameCategory.forEach(gun => {
            if(gun._goldCamo.isUnlocked)
            goldUnlocked+=1;
        });
        return goldUnlocked;
    }

    changeValues(gunsFromSameCategory:Gun[],gunsList:Gun[] ){
        gunsFromSameCategory.forEach(element => {
            if(element._goldCamo.isUnlocked){
                element._platinumCamo.isUnlocked = true;
            }
            gunsList.push(element);
        });
        return gunsList
    }
    // countGold(gunListSameClass:Gun[], gunCategory:gunCategory){
    //     let goldUnlocked:number = 0;
    //     gunListSameClass.forEach(gun => {
    //         if(gun._goldCamo.isUnlocked)
    //         goldUnlocked+=1;
    //     });
    //     if (goldUnlocked>=gunCategory.launchGun)
    //     return true;
    //     return false;
    // }
}