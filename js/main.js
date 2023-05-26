

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

