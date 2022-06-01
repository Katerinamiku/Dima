import {CityType} from "../02 -obj/02/02";
import {addMoneyToBudget, repairedHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: 'white'}}
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: 'happy'}}
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {number: 101, street: {title: 'happy'}}
            },
        ],
        buildings: [
            {
                type: 'hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central'
                    }
                }
            },
            {
                type: 'firestation',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South'
                    }
                }
            }
        ],
        citizens: 1000000
    }
})

test("Budget should be changed for hospital", () => {
addMoneyToBudget(city.buildings[0], 100000)

    expect(city.buildings[0].budget).toBe(300000)
})
test("Budget should be changed for firestation", () => {
    addMoneyToBudget(city.buildings[1], -100000)

    expect(city.buildings[1].budget).toBe(400000)
})

test("House shoub be repaired", ()=> {
    repairedHouse(city.houses[0]);

    expect(city.houses[0].repaired).toBeTruthy()
})
test("to fire some staff", ()=>{
    toFireStaff(city.buildings[0], 20)

    expect(city.buildings[0].staffCount).toBe(180)
})
test("to hire some staff", ()=>{
    toHireStaff(city.buildings[0], 20)

    expect(city.buildings[0].staffCount).toBe(220)
})

