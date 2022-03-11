// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA:
// RESTITUISCE DUE CONSOLE.LOG DA 3.14, IN QUANTO INIZIALMENTE 
// ABBIAMO DICHIARATO LA VARIABILE CONST CHE E' DI 3.14 E SUCCESSIVAMENTE GLI ABBIAMO "CHIESTO"
// IL CONSOLE LOG CHE STAMPERà TRANQUILLAMENTE IL RISULTATO, PER QUANTO RIGUARDA L'IF GLI ABBIAMO DETTO CHE
// LO STESSO RISULTATO DEVE ESSERE STAMPATO ESCLUSIVAMENTE SE PI E' MAGGIORE O UGUALE A 3.14, 
// EFFETTIVAMENTE LO è E PERTANTO LO STAMPA. PER QUANTO CONCERNE LA LOGICA DEGLI SCOPE:
// IL PRIMO CONSOLE LOG SI RIFERISCE AL CODICE GLOBALE, MENTRE IL SECONDO SI RIFERISCE AL BLOCCO CODICE.

const PI = 3.14;

console.log(PI);

if (PI >= 3) { 
    console.log(PI); 
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:
// IL CONSOLE.LOG STAMPA Il mio colore preferito è: VIOLET E Ci sono 12 mesi in un anno, IN QUANTO 
// IL PRIMO VAR VIENE TRANQUILLAMENTE RICHIAMATO FUORI DAL BLOCCO DAL CONSOLE.LOG, PROPRIO PER QUESTO LA FUNZIONE
// E' DEPRECATA, POTREBBE CAUSARE ERRORI. PER QUANTO RIGUARDA "LET" ( CI SONO 12 MESI IN UN ANNO) VIENE STAMPATO 
// NEL CONSOLE LOG PERCHè LET NON SI TROVA ALL'INTERNO DEL BLOCCO, CASO CONTRARIO NON VERREBBE STAMPATO.

var favColour = "violet"; 
let monthsInAYear = 12;

if (true) { 
    var favColour = "violet"; 
    console.log("Il mio colore preferito è:", favColour); 
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:ù

// CONSOLE.LOG LET "IL SECONDO..."[...] THESECOND NON STAMPERA' NULLA IN QUANTO, VISTO CHE LET NON SOLO E' AL DI FUORI DEL BLOCCO, MA ADDIRITTURA E' DENTRO UN ALTRO.


function makePizza(moreIngredients) { 
    let theSecond = "Sugo di pomodoro freschissimo";
    //console.log(theSecond + ", " + moreIngredients); 
    // return true;
};
    if (true) { 
    makePizza("rucola, prosciutto crudo e scaglie di grana."); 
    console.log("Il secondo ingrediente necessario: ", theSecond); 
}