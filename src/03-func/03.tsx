import {BuildingType, HouseType} from "../02 -obj/02/02";


export const addMoneyToBudget = (building: BuildingType, budget: number)=>{
 building.budget += budget;
}


export const repairedHouse= (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (buildingType: BuildingType, staffToFire: number)=>{
    buildingType.staffCount -=staffToFire;
}
export const toHireStaff = (buildingType: BuildingType, staffToHire: number)=>{
    buildingType.staffCount +=staffToHire;
}
