import {CityType} from "../02 -obj/02/02";
import {demonishHouses} from "./04";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: 'white'}}
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: 'happy'}}
            },
            {
                id: 3,
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
    }}

)

test('Houses should be destroyed', () => {
    demonishHouses(city, 'happy');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1)
})
