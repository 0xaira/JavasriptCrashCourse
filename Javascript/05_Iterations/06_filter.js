// Map, Filter, Reduce


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums= myNums.filter((num) => num % 2 === 0); 

const newNums2 = myNums.filter((num) => {
    return num %2 !== 0
}); 

// console.log(newNums);
// console.log(newNums2);

const Books = [
    {
        name: "Fifty Shades of Grey",
        genre: "Erotic romance",
        year: 2011,
    },
    {
        name: "The Hunger Games",
        genre: "Science fiction",
        year: 2008,
    },
    {
        name: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        year: 1997,
    },
    {
        name: "Twilight",
        genre: "Fantasy",
        year: 2005,
    },
    {
        name: "To Kill a Mockingbird",
        genre: "Southern Gothic",
        year: 1960,
    },
    {
        name: "The Great Gatsby",
        genre: "Tragedy",
        year: 1925,
    },
    {
        name: "The Fault in Our Stars",
        genre: "Young adult fiction",
        year: 2012,
    },
];

const newBooks = Books.filter((book) => book.year > 2000);
console.log(newBooks);

const newBooks2 = Books.filter((book) => {
    return book.genre === "Fantasy";
}
);
console.log(newBooks2);