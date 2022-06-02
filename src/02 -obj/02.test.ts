import {CityType02} from "./02/02";
import {HouseType} from "../02 -obj/02/02";

let city: CityType02;

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
            {type: 'hospital'},
            {type: 'firestation'}
        ],
        citizens: 1000000
    }
})

test('test city should contain 3 houses', () => {
        expect(city.houses.length).toBe(3);

        expect(city.houses[0].buildedAt).toBe(2012);
        expect(city.houses[0].repaired).toBe(false);
        expect(city.houses[0].address.number).toBe(100);
        expect(city.houses[0].address.street.title).toBe('white');

        expect(city.houses[1].buildedAt).toBe(2008);
        expect(city.houses[1].repaired).toBe(false);
        expect(city.houses[1].address.number).toBe(100);
        expect(city.houses[1].address.street.title).toBe('happy');

        expect(city.houses[2].buildedAt).toBe(2020);
        expect(city.houses[2].repaired).toBe(false);
        expect(city.houses[2].address.number).toBe(101);
        expect(city.houses[2].address.street.title).toBe('happy');

    }
)

test('test city should contain hospital and firestation', () => {
    expect(city.buildings.length).toBe(2)
})
