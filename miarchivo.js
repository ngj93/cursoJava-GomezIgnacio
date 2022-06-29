const Bitcoin = "20.506,59";
const Ethereum = "1106,22";
const Tether = "0,998987";
const USDCoin = "1,00";
const BNB = "214,96";
const BinanceUSD = "0,999561";
const Cardano = "0,491512";
const XRP = "0,322990";
const Solana = "35,10";
const Dogecoin = "0,059903"; 
const numeroingresado = "0"
const dolar = "1"
let resultado = "0";
let valor = "0";
let nuevaOperacion = false; 
let operacion = "";



function cambiarMoneda (valormoneda) {
    let resultado = valor / valormoneda
    return mostrarResultado

}

let mostrarResultado= cambiarMoneda()
console.log(mostrarResultado)

function elegirMoneda(){
    switch(operacion){
        case "Bitcoin":
            resultado= cambiarMoneda(Bitcoin).toFixed(2)
            alert("Te quedaran"+" "+resultado+" "+Bitcoin)
            break;
    }

}

function moneda(){
do{
    valor= Number(prompt("Ingrese un valor "));
    operacion= prompt("A que moneda desea convertirlo?");
    elegirMoneda()
    nuevaOperacion= confirm ("A que otra moneda desea convertirlo?")
} while (nuevaOperacion);
}

moneda()



let criptos = ["Bitcoin", "Ethereum", "Tether", "USDCoin", "BNB", "BinanceUSD"]

console.log(criptos.length)

 


