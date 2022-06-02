//-------------------------------04-01

import {CityType} from "../02 -obj/02/02";

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}


const oldAges=[100]; //>90

type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}
//----------------------------------04-02
export function demonishHouses(city: CityType, street: string) {
city.houses = city.houses.filter(h => h.address.street.title !== street)
}
