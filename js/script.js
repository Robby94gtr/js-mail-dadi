/* MAIL
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un 
messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email */

// Creo array "guestEmails" con tutte le email degli invitati
// Creo prompt per chiedere all'utente del sito di inserire la mail

/* const guestEmails=["johnny@gmail.com", "david.bowie@gmail.com", "zorro.dondiegodelavega@virgilio.it", "freddiemercury@icloud.com"];
let userEmail=prompt("inserisci qui la tua email");

// creo variabile di checkEmail impostata su valore false

let checkEmail= false; 

// ciclo array delle email
// eseguo controllo su email inserita dall'utente e se coincidide con email ciclata imposto la variabile checkEmail a true

for(i=0; i<guestEmails.length; i++){
    if(guestEmails[i] === userEmail){
        checkEmail=true;
    }
}

// creo messaggio di console.log all'interno di if o else a seconda se la mail inserita sia valida o meno

if(checkEmail===true){
    console.log("Valid Email");
}
else{
    console.log("Invalid Email");
} */

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

// Creo generatore di numeri casuale da 1 a 6 per l'utente e stampo il messaggio

let userNumber=Math.floor(Math.random() * 6) + 1;

console.log(userNumber + " Utente")

// Faccio la stessa cosa per il pc

let pcNumber=Math.floor(Math.random() * 6) + 1;

console.log(pcNumber + " PC")

// Creo if con console.log inerente alla vittoria se vince l'utente o di sconfitta se vince il PC

if(userNumber>pcNumber){
    console.log("Hai Vinto :)")
}
else{
    console.log("Hai Perso :(")
}




