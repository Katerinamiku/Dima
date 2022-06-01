

test('should take all man older than 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]; //исх массив
    //const  oldAges = ages; будект новый массив записан здесь, но изначально до фильтра это наш полный массив

    const predicate = (age:number) => age > 90; //можно убоать {} потому что простая
     // обьявили предткат, который будеть фтльтровать
    // и можно запихнуть преждикат в фильтр const oldAges = ages.filter(predicate)

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take a cheap courses', () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
        ]

    // const cheapPredicate = (course: CourseType) => {
    //     return course.price < 160;
    // } - предткат запизнули в фильтр и сократилт
    const cheapCourses = courses.filter(el => el.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(100)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].price).toBe(150)
    expect(cheapCourses[1].title).toBe('React')

})
