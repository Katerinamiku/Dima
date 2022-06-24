
function increaseAge(u: userType) {
   u.age++;
}
type userType = {
    name: string
    age: number
}

test('reference test type test', () => {
    let user = {
        name: 'Dima',
        age: 32,
    }

increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user;
    superman.age =1000;
    expect(user.age).toBe(1000) //мы литшь преедвали ссылку

})


test('array test', () => {
    let users = [
        {
        name: 'Dima',
        age: 32,
    },
        {
            name: 'Kate',
            age: 32,
        },
]

let admins = users

    admins.push({name: 'bad', age: 10}) //переписываем не только admins но и usres, так как мы присвоили

    expect(users[2]).toEqual({name: 'bad', age: 10})

}) //рабюотает только с обьектами так как ссылки


test('value type test', () => {
    let usersCount =100

    let adminsCount = usersCount // по факту присвоиои 100

    adminsCount = adminsCount+1 //переприсваивание а не мутация следовательно userCounts все еще 100

    expect(adminsCount).toBe(101)

})//у примитива не ссылки а переприсваивание


test('type test', () => {
    let user = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2 = {
        name: 'Nat',
        age: 30,
        address: user.address //это будет не отдельбный обькт а просто расшарен на обоих
    }

    user2.address.title = 'kanary';// поменяв адресс у второго он поменялся у первого


    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('kanary')

})
