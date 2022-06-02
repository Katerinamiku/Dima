export type ManType = {
    name: string
    age: number
}


const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dima Sidorov', age: 18}
]
console.log(people)


// const dimychTransform = (man: ManType) => {
//     return {
//         stack: ["css, html", 'js', 'td', 'react'],
//         firstName: man.name.split('')[0],
//         lastName: man.name.split('')[1]
//     }
// }

const dimychTransform = (man: ManType) => ({
    stack: ["css, html", 'js', 'td', 'react'],
    firstName: man.name.split('')[0],
    lastName: man.name.split('')[1]
})

const devs = [
    {
        stack: ["css, html", 'js', 'td', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ["css, html", 'js', 'td', 'react'],
        firstName: 'Alex', lastName: 'Petrov'
    },
    {
        stack: ["css, html", 'js', 'td', 'react'],
        firstName: 'Dima', lastName: 'Sidorov'
    }
]

const dev2 = people.map(dimychTransform)

const dev3 = people.map(man => ({
    stack: ["css, html", 'js', 'td', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

console.log(dev3)
