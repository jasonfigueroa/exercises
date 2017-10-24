const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");
let html = "";

html += `<h3 class="row list-heading">Planets</h3>`;
html += `<ul class="row indented-list">`;

planets.forEach( planet => {
    html += `<li>${ planet }</li>`;
} );

html += `</ul>`;

planetEl.innerHTML += html;

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

/*********************/
/* Original Solution */
/*********************/
// function properCaseOneWord (str) {
//     let strArray = [];

//     strArray.push(str.split("")[0].toUpperCase());
    
//     str.slice(1).split("").forEach( character => 
//         strArray.push(character)
//     );
    
//     return strArray.join("");
// }

// const properPlanets = planets.map( planet => {
//     return properCaseOneWord(planet);
// });

// console.log(properPlanets);
/*************************/
/* End Original Solution */
/*************************/

const properCasePlanets = planets.map( planet => planet.split("").shift().toUpperCase() + planet.slice(1) );

// console.log(properCasePlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filteredPlanets = planets.filter( planet => planet.includes("e") );

// console.log(filteredPlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

const sentence = words.reduce((a, b) => a + " " + b);

// console.log(sentence);