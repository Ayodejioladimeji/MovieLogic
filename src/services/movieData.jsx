

const movies = [
    {
        id: 1,
        title: 'Terminator',
        genre: {id:'101', name: "Action"},
        stock: 6,
        rentalRate: 2.5,
        publishDate: "2020-01-03"
    },
    {
        id: 2,
        title: "Die Hard",
        genre: {id:'102', name: "Action"},
        stock: 5,
        rentalRate:2.5,
    },
    {
        id: 3,
        title: "Get Out",
        genre: {id:'103', name: "Thriller"},
        stock: 5,
        rentalRate:3.5,
    },
    {
        id: 4,
        title: "Die Hard",
        genre: {id:'102', name: "Comedy"},
        stock: 5,
        rentalRate:1.5,
    },
    {
        id: 5,
        title: "The Rocky",
        genre: {id:'102', name: "Action"},
        stock: 5,
        rentalRate:2.7,
    },
    {
        id: 6,
        title: "Money Grill",
        genre: {id:'102', name: "Thriller"},
        stock: 5,
        rentalRate:2.5,
    },
    {
        id: 7,
        title: "Terminator",
        genre: {id:'102', name: "Action"},
        stock: 5,
        rentalRate:3.3,
    },
    {
        id: 8,
        title: "Airplane",
        genre: {id:'102', name: "Comedy"},
        stock: 5,
        rentalRate:1.5,
    },
    {
        id: 9,
        title: "Wedding Crashers",
        genre: {id:'102', name: "Comedy"},
        stock: 5,
        rentalRate:4.4,
    },
    {
        id: 10,
        title: "Gone Girl",
        genre: {id:'102', name: "Thriller"},
        stock: 5,
        rentalRate:4.5,
    },
    {
        id: 11,
        title: "The Avengers",
        genre: {id:'102', name: "Action"},
        stock: 5,
        rentalRate:2.9,
    },
    {
        id: 12,
        title: "The Sixth Sense",
        genre: {id:'102', name: "Thriller"},
        stock: 5,
        rentalRate:3.5,
    },
]

export function getMovies(){
    return movies;
}