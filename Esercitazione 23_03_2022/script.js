// Esercizio
// Sulla base della lezione odierna:

// Creare una chiamata API all'indirizzo https://fakestoreapi.com/products, in modo che:

// Vengano catturati tutti gli elementi presenti nell'array
// Renderizzare delle cards relative a ogni singolo oggetto
// Al click sulla card (quindi il singolo prodotto), questo viene rimosso dalla lista
// Fondamentale:

// Utilizzare fetch per la chiamata, ma gestire il tutto servendoci di async/await!




//Chiamata API - MI PRENDO I DATI DAL LINK 
async function getAPIdata() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      return data;
    }
// MAP- DICO A JS DI MAPPARMI I DATI DI PRODUCT
    getAPIdata("https://fakestoreapi.com/products").then((data) => {
        data.map((product) => {
        createCard(
        product.title,
        formatMinText(product.description),
        product.image,
        product.price + " €"
    );
// CLASSE PER CSS DELLE CARD
    const cardEls = document.querySelectorAll(".card");

// AL CLICK RIMUOVO IL PRODOTTO


    cardEls.forEach((card) => {
      card.addEventListener(
        "click",
        () =>
          (card.remove() = `<p style="padding: 20px">${product.description}</p>`)
      );
    });
  });
});

const createCard = (title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
  
    divEl.append(h3El, parDescEl, imgEl, parPriceEl);
    document.querySelector(".cardsWrapper").appendChild(divEl);
  };

  const formatMaxText = (text) => text.split(".")[0];

  const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";
  