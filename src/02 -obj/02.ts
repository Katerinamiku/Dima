type TechType = {
    id: number
    title: string

}
type LocalCityType = {
    title: string
    country: string
}
type AddressType = {
    street: string
    city: LocalCityType
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student = {
    id: 0,
    name: 'Dima',
    age: 32,
    isActive: true,
    address: {
        street: 'Surganova',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        },
    },
    technologies: [
        {id: 1,
        title: 'HTML'},
        {id: 2,
        title: 'JS'},
        {id: 3,
        title: 'CSS'}
    ]
}

console.log(student.address.city.title) //Minsk
console.log(student.technologies[2].title) //CSS
