let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const bandElement = document.getElementById('boy-bands');

bandElement.innerHTML += `
    <h2>Awesome Bands</h2>
    <ul>    
`;

const veggieElement = document.getElementById('vegetables');

veggieElement.innerHTML += `
    <h2>Tasty Vegetables</h2>
    <ul>
`;

bands.forEach( ( e ) => {
    bandElement.innerHTML += `
        <li> ${ e } </li>
    `;
} );

vegetables.forEach( ( e ) => { 
    veggieElement.innerHTML += `
        <li> ${ e } </li>
    `;
 } );

bandElement.innerHTML += "</ul>";
veggieElement.innerHTML += "</ul>";