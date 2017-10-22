const bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
const vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const ulMe = ( id, h2, arr ) => {
    const el = document.getElementById(id);
    
    el.innerHTML += `
        <h2>${ h2 }</h2>
        <ul>    
    `;
    arr.forEach( ( e ) => {
        el.innerHTML += `
            <li> ${ e } </li>
        `;
    } );
    el.innerHTML += "</ul>";
};

ulMe( 'boy-bands', 'Awesome Bands', bands );
ulMe( 'vegetables', 'Tasty Vegetables', vegetables );