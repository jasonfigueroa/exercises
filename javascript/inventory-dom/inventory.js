const HomeInventory = JSON.parse( localStorage.getItem("homeInventory") );

let article = document.getElementsByTagName('article')[0];
article.innerHTML += "<h1>Inventory</h1>";

for(let type in HomeInventory) {

    HomeInventory[type].forEach( (item) => {
        
        article.innerHTML += `
            <section class="${ type }">
                <h2 class="${ type }__name">
                    ${ item["name"] }
                </h2>
                <div class="${ type }__location">
                    Location: ${ item["location"] }
                </div>
                <div class="${ type }__description ">
                    <p>${ item["description"] }</p>
                </div>
            </section>
        `;        
    });
}
