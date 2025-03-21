/* MAIL
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un 
messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email */

// Creo array "guestEmails" con tutte le email degli invitati
// Creo prompt per chiedere all'utente del sito di inserire la mail

const guestEmails=["johnny@gmail.com", "david.bowie@gmail.com", "zorro.dondiegodelavega@virgilio.it", "freddiemercury@icloud.com"];
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
}







