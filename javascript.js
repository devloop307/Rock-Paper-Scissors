let humanScorey = 0;
let computerScore = 0;

//Elegir valor maquina pidra, papel o tijera
function getComputerChoice(){
    const opciones = ["piedra","papel","tijera"];
    let valor = opciones[Math.floor(Math.random() * opciones.length)];
    return valor;
}

//Elegir usurio piedra, papel o tijera
function getHumanChoice(){
    let opcion = prompt('Ingrese su opción: "Piedra, Papel o Tijera"',"");
    return opcion.toLowerCase();
}

//Jugar usuario vs pc
function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    alert(`La computadora eligió ${computerChoice}`)
    console.log(`Elección de la computadora: "${computerChoice}" tu elección: "${humanChoice}"`);

    if (humanChoice === computerChoice) {
        console.log("Empate");
    } else if (
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        humanScorey ++;
        console.log(`¡Ganaste!`);
    } else {
        computerScore ++;
        console.log(`¡Perdiste!`);
    }
}

// Veces a jugar y score
function playGame(){
    for(let i=0; i < 5; i++){
        playRound();
    }
    alert(`Tu marcador es: ${humanScorey} y de la computadora: ${computerScore}`)

}

playGame()


