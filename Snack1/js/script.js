// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

// Chiedo all'utente di inserire una parola
const stringToReverse = prompt("Inserisci una parola che vuoi invertire");

// Funzione che inverte la parola inserita
function reverseString(string){
    return string.split(``).reverse().join(``);
}

// Costante che riceve la parola invertita
const reversedString = reverseString(stringToReverse);
console.log(reversedString);
