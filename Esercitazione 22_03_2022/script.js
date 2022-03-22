// Esercizio
// Sulla base della lezione odierna:

// Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt 
// e che faccia il console.log della somma soltanto dopo 10 secondi. 
// // ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, 
// eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!
// La presenza di un bottone però potrebbe annullare quel intervallo!

// Completate l'esercitazione di ieri, per chi l'avesse fatto, passate pure all'avanzato!
// Avanzato:
// Riprendendo l'esercizio lasciato Venerdì scorso, provate a sostituire l'array di elementi 
// con una chiamata fetch. Utilizzate le API presenti a questo indirizzo: https://swapi.dev/
// (Tips. leggete la documentazione!)

// function mycalculator() {
//         const firstNum = parseInt(prompt("Inserisci il primo numero"));
//         const userOperation = (prompt("Quale operazione vuoi svolgere?"));
//         const secondNum = parseInt(prompt("Inserisci il secondo numero"));
//         let result;
      
//         if (userOperation === '+') {
//             result = firstNum + secondNum;
//             }
//         else if (userOperation === '-') { 
//             result = firstNum - secondNum; 
//             }
//         else if (userOperation === '*') {
//             result = firstNum * secondNum; 
//             }
//         else if (userOperation === '/') {
//             result = firstNum / secondNum;
//             } 
//         else if (userOperation === '%') {
//             result = firstNum % secondNum;
//             }
            
//         else return 'Ritenta sarai più fortunato!';
//         return result;

//     }
    
//     let result = mycalculator();
//     setTimeout(() => console.log("il tuo risultato è:", result), 10000);

    
//     const sumInterval = setInterval(result, 10000);
//     console.log(sumInterval);



    // AVANZATO


    const createCard = (name, height, gender, films) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parHeightEl = document.createElement("p");
    const parGenderEl = document.createElement("p");
    const parFilmsEl = document.createElement("p");

    h3El.textContent = name;
    parHeightEl.textContent = height;
    parGenderEl.textContent = gender;
    parFilmsEl.textContent = films;

  divEl.append(h3El, parHeightEl, parGenderEl, parFilmsEl);
  document.body.appendChild(divEl);
};
// Chhiamata FETCH!
fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((data) => 
        data.map(
            ({ name, height, gender, films }) => {
            createCard(name, height, gender, films);

            localStorage.setItem("data", JSON.stringify(data));
      }
    //   createCard(product.title, product.description, product.image, product.price)
    )
  );
// let dataArray = [];


//     const render = () => {

//         const listArr = people.map((element) => `<li class="card">${element}</li>`);
//         ul.innerHTML = listArr.join("");
//     };
//     render();
//     input.addEventListener("keyup", () =>{
//         const match = people.filter ((element) => element.toLowerCase().includes(input.value))
//         ul.innerHTML = match.map((element) => `<li>${element}</li>`).join("");
        
//     });
// {/* <img src="${character.Immagine}"></img> */}
//     const renderPerson = () => {
//         const submitPerson = people.map((character) => `
//             <p>${character.Name}</p>
//             <p>${character.Text}</p>
//             <p>${character.world}</p>`
//         ); 

//         personList.innerHTML = submitPerson.join();
//     };

//     submit.addEventListener('click', () => {
//         people.push([inputName.value, inputWorld.value].join(" - ")
//         );
//         console.log(people);
//         render();
//     });
