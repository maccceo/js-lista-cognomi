//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi a che posizione della lista il nuovo utente si trova

var userInput, userInputPosition, found = false, print;
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

//cerco il cognome inserito per capire la sua posizione
for (var i = 0; i < database.length; i++) {
	if (database[i] == userInput) {
		userInputPosition = i;
	}
}

//stampo la posizione
userInputPosition++;
document.getElementById("position").innerHTML = "L'elemento inserito è il " + userInputPosition + "° dell'elenco";

//stampo la lista alfabetica intera in un <ul>
print = document.getElementById("array");
userInputPosition--;
for (var i = 0; i < database.length; i++) {
	if (i == userInputPosition) {
		print.innerHTML += "<strong><li>" + database[i] + "</li></strong";
	} else {
		print.innerHTML += "<li>" + database[i] + "</li>";
	}
}