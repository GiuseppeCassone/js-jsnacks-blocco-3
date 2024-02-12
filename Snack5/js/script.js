// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"

function maiuscLetters(string) {
    let stringWords = string.split(" ");

    for (let i = 0; i < stringWords.length; i++){
        stringWords[i] = stringWords[i].charAt(0).toUpperCase() + stringWords[i].slice(1);
    }

    let newString = stringWords.join(" ");

    return newString;
}

const stringWithMaiusc = maiuscLetters("nel mezzo del cammin di nostra vita");
document.getElementById(`maiusc-word`).innerHTML = stringWithMaiusc;