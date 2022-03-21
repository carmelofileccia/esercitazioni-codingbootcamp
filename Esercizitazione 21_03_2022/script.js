// Esercizio
// Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

// mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
// permette l'aggiunta di nomi alla lista dei contatti
// permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
// che conservi e peschi la lista dei contatti servendoci del LocalStorage
// Il tutto dovrà essere completo di html/css, di fatto dobbiamo creare una rubrica utilizzabile dagli ipotetici utenti.

// Avanzato:
// Per chi volesse cimentarsi già con l'implementazione di try/catch, provare ad integrare 
// nell'esercizio sopra un controllo per ognuna delle quattro funzionalità.

  const contacts = [
    "Carmelo Fileccia - +391234456789",
    "Papa Francesco - +391234456789",
    "U Zu Totò - +391234456789",
    "Ammiocuggino - +391234456789",
    "Nino U Ballerino - +391234456789",
    "Mario Rossi - +391234456789",
    "Valeria Verdi - +391234456789",
  ];
  
  localStorage.setItem("contacts", JSON.stringify({ contacts }));

  const q = (selector) => document.querySelector(selector);

  const ul = q("ul");
  const search = q("#search");
  const name = q("#name");
  const universe = q("#number");
  const add = q("button");
  const remove = q("#remove");


  const render = (value = "") => {
    const results = contacts.filter((people) =>
      people.toLowerCase().includes(value.toLowerCase())
    );
    
    ul.innerHTML = results
    .map((people) => people.split(" - "))
    .map((people) => `<ul class="card">
          <li class="name">${people[0]}</li>
          <li class="number">${people[1]}</li>
        </ul>`
    )
    .join("");
  };

  add.addEventListener("click", () => {
    contacts.push(`${name.value} - ${number.value}`);
    render();
  
    name.value = "";
    number.value = "";
  });

  search.addEventListener("keyup", () => render(search.value));
  remove.addEventListener("click", () => {
    contacts.splice(contacts, 1);
    render();
  });
  render();
  