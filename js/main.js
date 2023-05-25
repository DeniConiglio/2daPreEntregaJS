// Creamos un array vacío para almacenar los participantes como objetos
/*let participants = [];

// Constructor de participante
function Participant(name) {
    this.name = name;
}

// Función para agregar un participante a la lista
function addParticipant() {
    let name = prompt("escribir participantes");

    if (name !== "" ) {
        let participant = new Participant(name);
        participants.push(participant);
        
        participantNameInput.value = "";

        
        displayParticipants();
    }
}

// Función para mostrar los participantes en la lista
function displayParticipants() {
    let participantList = document.getElementById("participantList");
    participantList.innerHTML = "";
    
    for (let i = 0; i < participants.length; i++) {
        let participant = participants[i];
        
        let participantItem = document.createElement("li");
        participantItem.textContent = "Nombre: " + participant.name;
        
        participantList.appendChild(participantItem);
    }
}

function deleteName() {
    let name = prompt("escribir participantes a eliminar");
    
    for (let i = 0; i < participants.length; i++) {
        if (participants[i].name === name) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        participants.splice(index, 1);
        
        displayParticipants();
    }

    
}

function runLottery() {
    if (participants.length >= 0) {
        let randomIndex = Math.floor(Math.random() * participants.length);
        let winner = participants[randomIndex].name;
        document.getElementById("winner").textContent = winner;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////


let arrayParticipants = []; // Array para almacenar los nombres de los participantes

// Solicitar nombres de participantes hasta que se ingrese "fin"
while (true) {
  let name = prompt("Ingresa un nombre de participante (escribe 'fin' para terminar):");
  if (name === "fin") {
    break; // Salir del bucle si se ingresa "fin"
  }
  arrayParticipants.push(name); // Agregar el nombre al array de participantes
}

// Realizar el sorteo
let randomIndex = Math.floor(Math.random() * arrayParticipants.length);
let winner = arrayParticipants[randomIndex.name];
console.log("Ganador:", winner);



function suma(participant)
{
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}*/


let contador = 0;

let participants = [];

function addParticipant() {
    let name = prompt("Ingresa el nombre del participante:");
    if (name) {
        let participant = {
            name: name
        };
        participants.push(participant);
        contador = contador + 1;
        console.log("Participante agregado:", participant);
    }
}

function deleteParticipant() {
    let name = prompt("Ingresa el nombre del participante a eliminar:");
    let index = participants.findIndex(function (participant) {
        return participant.name === name;
    });
    if (index !== -1) {
        let deletedParticipant = participants.splice(index, 1);
        console.log("Participante eliminado:", deletedParticipant);
        contador=contador-1;
    } else {
        console.log("No se encontró el participante:", name);
    }
}

function runLottery() {
    if (participants.length > 0) {
        let randomIndex = Math.floor(Math.random() * participants.length);
        let winner = participants[randomIndex].name;
        console.log("Ganador:", winner);
        alert("The WINNER is "+ winner)
    } else {
        console.log("No hay participantes para realizar el sorteo.");
    }
}

function showParticipantCount() {
    console.log("Cantidad de participantes:", contador);
}

function showAllParticipants() {
    console.log("Lista de participantes:");
    participants.forEach(function (participant, index) {
        console.log(index + 1 + ". " + participant.name);
    });
}

