const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// sort the numbers in descending order
// console.log( integers.sort( (a, b) => b - a ) );

// remove any integers greater than 19
// console.log( integers.filter( integer => integer <= 19 ) );

// multiply each remaining number by 1.5 and then subtract 1
// console.log( integers.map( integer => integer * 1.5 - 1 ) );

// output in DOM or console sum of all resulting numbers
console.log( integers.sort( (a, b) => b - a ).filter( a => a <= 19 ).map( a => a * 1.5 - 1 ).reduce( (a, b) => a + b ) );
