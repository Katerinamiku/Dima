
import {ManType} from "./05";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dima Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const messages = people.map( man => `Hello ${man.name.split(' ')[0]}, welcome!`)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew, welcome!")
    expect(messages[1]).toBe("Hello Alex, welcome!")
    expect(messages[2]).toBe("Hello Dima, welcome!")
})
