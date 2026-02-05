//Elegir valor maquina pidra, papel o tijera
function getComputerChoice(){
    const opciones = ["piedra","papel","tijera"];
    let valor = opciones[Math.floor(Math.random() * opciones.length)]
    return console.log(valor)
}
getComputerChoice()

//Elegir usurio piedra, papel o tijera
