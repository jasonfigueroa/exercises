const idGenerator = function*() {
    let id = 1;
    while(true) {
        yield id;
        id++;
    }
};

const cardIdFactory = idGenerator();

let body = document.getElementsByTagName('body')[0];

body.addEventListener("click", function (event) {
    if(event.target.id.startsWith("delete-btn")) {
        const id = event.target.id.split("-")[2];
        document.getElementById(`card-${id}`).parentElement.remove();        
    }
});

body.addEventListener("click", function (event) {
    if(event.target.id === "create-btn") {
        const cards = document.getElementById('cards');
        const id = cardIdFactory.next().value;
        
        cards.innerHTML += `<div class="row">
            <section class="card" id="card-${id}">
                <p>${ document.getElementById('card-text').value }</p>
                <button type="button" id="delete-btn-${id}">Delete</button>
            </section>
        </div>`;
    }
    document.getElementById("card-text").value = "";
    document.getElementById("card-text").focus();
});