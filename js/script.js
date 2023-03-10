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

// Aquisizione elementi html
const send = document.getElementById("btn");

const canvas = document.getElementById("canvas");

// Lista numeri
const cpuNumbers = []
console.log("cpuNumbers", cpuNumbers);

const checkNumbers = [];
console.log("checkNumbers", checkNumbers);

// Generazione numeri random
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    cpuNumbers.push(number);
    console.log("number", number, typeof number);
}

// Stampa dei numeri in pagina
canvas.innerHTML = cpuNumbers.join(" - ");
console.log("cpuNumbers", cpuNumbers);

// Soluzione con prompt-----------------------------------
// // Impostazione funzioni con ritardo
// const blankCanvas = () => canvas.innerHTML = " ";
// setTimeout(blankCanvas, 30000);

// setTimeout(userInteraction, 31000);
// function userInteraction () {
    
//     for (let i = 1; i <= 5; i++) {
//         const userNumbers = parseInt(prompt("Inserisci il numero che hai visto alla posizione " + i));
//         checkNumbers.push(userNumbers);
//         console.log("userNumbers", userNumbers, typeof userNumbers);
//     }

//     console.log("checkNumbers", checkNumbers);

//     let score = 0;
//     let wrongNumbers = 0;

//     const goodNumbers = [];

//     for (let i = 0; i < 5; i++) {
//         if (cpuNumbers[i] == checkNumbers[i]) {
//             goodNumbers.push(checkNumbers[i]);
//             score++;
//         }
//         if (cpuNumbers[i] != checkNumbers[i]) {
//             wrongNumbers++;
//         }
//     }

//     if (wrongNumbers == 5) {
//         alert("Mi dispiace, hai perso.");
//     }
//     else {
//         alert("Hai indovinato " + score + " numeri. Ovvero: " + goodNumbers);
//     }
    
//     console.log("score", score);
//     console.log("goodNumbers", goodNumbers);
// }


// Soluzione con input----------------------------------------
setTimeout(userInteraction, 30000);
function userInteraction () {
    canvas.innerHTML = "Che numeri erano?";

    let userNumbers = document.getElementById("userData");
    userNumbers.classList.remove("disabled");
    send.classList.remove("disabled");



    send.addEventListener("click", 
        function () {
            userNumbers = document.getElementById("userData").value;
            console.log("userNumbers", userNumbers);

            const checkNumbers = userNumbers.split(" ");
            console.log("checkNumbers", checkNumbers);

            let score = 0;
            let wrongNumbers = 0;

            const goodNumbers = [];

            for (let i = 0; i < 5; i++) {
                if (cpuNumbers[i] == checkNumbers[i]) {
                    goodNumbers.push(checkNumbers[i]);
                    score++;
                }
                if (cpuNumbers[i] != checkNumbers[i]) {
                    wrongNumbers++;
                }
            }

            
            if (checkNumbers.length < 5 || checkNumbers.length > 5) {
                alert("Quantità di numeri sbagliata, ricarica e riprova!");
            }
            else if (wrongNumbers == 5) {
                alert("Mi dispiace, hai perso.");
            }
            else {
                alert("Hai indovinato " + score + " numeri. Ovvero: " + goodNumbers);
            }
                
            console.log("score", score);
            console.log("goodNumbers", goodNumbers);
        }
    );
}