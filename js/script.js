/*
    STEPS:
        1. Stampare 5 numeri casuali in pagina.
            1A. Usare innerHTML per stamparli.
            1B. Ogni volta che un numero si stampa, esso verrà anche pushato in un array
        2. Con un setTimeout imopstiamo un innerHTML vuoto che, dopo 30 secondi, farà sparire i numeri.
        3. Con 5 prompt in sequenza chiediamo all'utente di inserire i numeri che erano in pagina uno alla volta, nell'ordine che avevano.
            3A. Ogni numero inserito dall'utente verrà pushato in un nuovo array.
        4. Verifichiamo che ognuno degli indici dei due array corrisponda e facciamo sapere all'utente quali e quanti numeri ha indovinato
            4A. Usiamo un ciclo for (?) che cerca una corrispondenza per ognuno degli indici.
*/

console.log("Collegamento js ok");

// Lista numeri base
const cpuNumbers = []
console.log("cpuNumbers", cpuNumbers);

for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 10) + 1;
    cpuNumbers.push(number);
    console.log("number", number, typeof number);
}

const canvas = document.getElementById("canvas");

canvas.innerHTML = cpuNumbers;
console.log("cpuNumbers", cpuNumbers);