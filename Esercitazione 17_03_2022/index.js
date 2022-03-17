document.addEventListener("DOMContentLoaded", () => {

    // ext DATO UN ARRAY DI FILM, STAMPARE QUESTI DATI IN PAGINA IN UNA LISTA HTML; 
    // AGGIUNGERE UNA IMPUT DI TESTO E UN BUTTON SOPRA LA LISTA , QUANSO CLICCO IL BUTTON
    // LA LISTA DELLA PAGINA DEVE ESSERE FILTRATA IN BASE AL TESTO SCRITTO NELLA INPUT
    // OPZIONALMENTE STILARE IL TUTTO

    const movies = [
        "Deadpool",
        "Dune",
        "Grosso guaio a Chinatown",
        "V per vendetta",
        "Pupl Fiction",
        "Signore degli anelli",
        "Scarface",
        "Sharknado",
        "Blade Runner",
    ];

    const ul = document.querySelector("#films");
    const input = document.querySelector("input");
    
    const render = () => {
     const listFilms = movies.map((element) => `<li>${element}</li>`);
        ul.innerHTML = listFilms.join("");
    };
    render();

    submit.addEventListener("click", () =>{
        const match = movies.filter ((element) => element.toLowerCase().includes(input.value))
        ul.innerHTML = match.map((element) => `<li>${element}</li>`).join("");
        
    });
});