export type BuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType03
}
export type BuildingType02 = {
    type: string
    }
export type StreetType = {
    title: string
}

export type AddressType03 = {
    street: StreetType
}
export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    buildings: Array<BuildingType>
    citizens: number
}

export type CityType02 = {
    title: string
    houses: Array<HouseType>
    buildings: Array<BuildingType02>
    citizens: number
}
