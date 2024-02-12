// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"

// Chiedo all'utente di inserire la parola da riordinare
const notAlphabeticalString = prompt("Inserisci la parola che vuoi riordinare in ordine alfabetico");

// Funzione per riordinare la stringa in ordine alfabetico
function reorder(string) {
    return string.split(``).sort().join(``);
}

const alphabeticalString = reorder(notAlphabeticalString);
console.log(alphabeticalString);