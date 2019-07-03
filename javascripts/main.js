//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi a che posizione della lista il nuovo utente si trova

var userInput, userInputPosition;
//var <ul> HTML in cui stamperò l'array
var printPosition = document.getElementById("position");
var printArray = document.getElementById("array");
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


//pusho il cognome inserito dall'utente nell'array con tutti i cognomi
userInput = prompt("Inserisci il cognome:");
database.push(userInput);

//ordine alfabeticamente i cognomi
database.sort();
console.log(database);


for (var i = 0; i < database.length; i++) {
	//cerco il cognome inserito per capire il suo indice che salvo in una var
	if (database[i] == userInput) {
		userInputPosition = i;
	}

	//stampo ogni elemento dell'array nell'<ul> dell'HTML
	if (i == userInputPosition) {
		//se è quello inserito dall'utente stampa in grassetto
		printArray.innerHTML += "<strong><li>" + database[i] + "</li></strong";
	} else {
		printArray.innerHTML += "<li>" + database[i] + "</li>";
	}
}

//stampo la posizione
userInputPosition++;		//visto che le persone contano dall'1
printPosition.innerHTML = "L'elemento inserito è il " + userInputPosition + "° dell'elenco";