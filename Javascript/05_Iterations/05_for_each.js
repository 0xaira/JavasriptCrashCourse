// for each loop

const Languages = ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Swift"];

Languages.forEach(function (value) {
    console.log(value);
})

Languages.forEach(function (value, index) {
    console.log(index, value);
})

Languages.forEach(value => console.log(value));

const MyLanguages =[
    {
        name: "JavaScript",
        year: 1995
    },
    {
        name: "Python",
        year: 1991
    },
    {
        name: "Java",
        year: 1995
    },
    {
        name: "C++",
        year: 1985
    },
]

MyLanguages.forEach(function (value) {
    console.log(value);
}
)
// using arrow funtion
MyLanguages.forEach((value) => console.log(value.name));
