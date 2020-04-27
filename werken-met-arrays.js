const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1966},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galolio', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1864, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
];

const people = [
    'Beck Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Bellow, Henry', 'Beethoven, Lugwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio Luciano', 'Berle, Milton', 'Berlin, Irving'
];

// Array.prototype.filter();
// 1. Filter the list of inventors for those who were born in the 1500's

// const fifteen_old = inventors.filter(function(inventor) {
//   if(inventor.year >= 1500 && inventor.year < 1600) {
//       return true; // keep it
//   }
// });

// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600 ));

//console.table(fifteen);

// array.prototype.map()
// 2. Give us an array of the inventory first and last names
// const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);

// console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//       return 1;
//   }else{
//       return -1;
//   }
// });

// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// console.table(ordered);

// Array.prototype.reduce
// 4. How many year did all inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);