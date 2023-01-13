/*
    STEPS:
        1. Stampare 5 numeri casuali in pagina.
            1A. Usare innerHTML per stamparli.
            1B. Ogni volta che un numero si stampa, esso verrà anche pushato in un array
        2. Con un setTimeout impostiamo un innerHTML vuoto che, dopo 30 secondi, farà sparire i numeri.
        3. Con 5 prompt in sequenza chiediamo all'utente di inserire i numeri che erano in pagina uno alla volta, nell'ordine che avevano.
            3A. Ogni numero inserito dall'utente verrà pushato in un nuovo array.
        4. Verifichiamo che ognuno degli indici dei due array corrisponda e facciamo sapere all'utente quali e quanti numeri ha indovinato
            4A. Usiamo un ciclo for (?) che cerca una corrispondenza per ognuno degli indici.
*/

console.log("Collegamento js ok");

// Lista numeri
const cpuNumbers = []
console.log("cpuNumbers", cpuNumbers);

const checkNumbers = [];
console.log("checkNumbers", checkNumbers);

// Generazione numeri random
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 10) + 1;
    cpuNumbers.push(number);
    console.log("number", number, typeof number);
}

const canvas = document.getElementById("canvas");

// Stampa dei numeri in pagina
canvas.innerHTML = cpuNumbers;
console.log("cpuNumbers", cpuNumbers);

// Impostazione funzioni con ritardo
const delay = () => canvas.innerHTML = " ";
setTimeout(delay, 5000);

setTimeout(userInteraction, 5001);
function userInteraction () {
    
    for (let i = 1; i <= 5; i++) {
        const userNumbers = parseInt(prompt("Inserisci il numero che hai visto alla posizione " + i));
        checkNumbers.push(userNumbers);
        console.log("userNumbers", userNumbers, typeof userNumbers);
    }

    console.log("checkNumbers", checkNumbers);

    let score = 0;

    const goodNumbers = [];

    for (let i = 0; i < 5; i++) {
        if (cpuNumbers[i] == checkNumbers[i]) {
            goodNumbers.push(checkNumbers[i]);
            score++;
        }
    }

    alert("Hai indovinato " + score + " numeri. Ovvero: " + goodNumbers);

    console.log("score", score);
    console.log("goodNumbers", goodNumbers);
}