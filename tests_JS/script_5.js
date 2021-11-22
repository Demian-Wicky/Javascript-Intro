const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
entrepreneurs.forEach(element => {
    if (element.year >= 1970 && element.year <= 1979){
        console.log(element);
    }
});


// Sors une array qui contient le prénom et le nom des entrepreneurs
let res = []
entrepreneurs.forEach(element => {
    res.push(element.first + " " + element.last)
});
console.log(res);


// Quel âge aurait chaque inventeur aujourd'hui
let today = new Date();
let currentYear = today.getFullYear();

let result = []
entrepreneurs.forEach(element => {
    result.push({first: element.first, last: element.last, age: (currentYear-element.year)})
});
console.log(result);

newArray = entrepreneurs
newArray.forEach(element => {
    element.age = (currentYear-element.year)
});
console.log(newArray);

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
entrepreneurs.sort(function(a, b) {
    var nameA = a.last.toUpperCase(); // ignore upper and lowercase
    var nameB = b.last.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});

console.log(entrepreneurs);