test('s', () => {
    let props = {
        name: 'Dima',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'}
        ]
    }
    // const age = props.age;
    // const lessons = props.lessons
    const {age, lessons} = props // то самое что и вышкЖ поищи в props свойства и возьми их

    expect(age).toBe(32);
    expect(lessons.length).toBe(2)
})
