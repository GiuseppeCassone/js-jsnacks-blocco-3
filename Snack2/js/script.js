// Scrivi una funzione che fonda due array presi come parametri 
// (date per scontato che abbiano lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Inizializzo i due array
const firstArray = [`a`, `b`, `c`];
const secondArray = [1, 2, 3];

// Funzione con i due array
function arrayFunction(firstArray, secondArray) {
    const array1 = firstArray.length;
    const finalArray = [];

// Ciclo for per inserire gli elementi nei due array alternati
    for(let i = 0; i < array1; i++) {
        finalArray.push(firstArray[i]);
        finalArray.push(secondArray[i]);
    }

    return finalArray;
}

// Costante con i due array fusi tra loro
const fusedArray = arrayFunction(firstArray, secondArray);
document.getElementById(`fused`).innerHTML = fusedArray;