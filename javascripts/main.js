//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi a che posizione della lista il nuovo utente si trova

var userInput;
var database = [
	"Piccini",
	"Alessandri",
	"Zaniboni",
	"Tencono",
	"Chiodoni",
	"Frizzante",
	"Halbert",
	"Francofono",
	"Pindarico",
	"Mazzetto",
	"Bulloni",
	"Pastore"
];


//pusho il cognome inserito dall'utente nell'arrey con tutti i cognomi
userInput = prompt("Inserisci il cognome:");
database.push(userInput);

//ordine alfabeticamente i cognomi
database.sort();
console.log(database);

//stampo la posizione del cognome inserito nel nuovo ordine alfabetico


//stampo la lista alfabetica intera in un <ul>