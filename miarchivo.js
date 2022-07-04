const Bitcoin = { nombre: "Bitcoin", precio: 20.506,59 } 
const Ethereum = { nombre: "Ethereum", precio: 1106,22 }
const Tether = { nombre: "Tether", precio: 0,998987 }
let nuevaCompra = 'false';

let compra = '';
let moneda = '';

function comprarCrypto (valormoneda) {
    let mostrarResultado = compra / valormoneda
    return mostrarResultado;

}

do {
    compra = Number(prompt('cuanto quiere cambiar'));
    moneda = prompt(
        ` Que moneda quiere comprar? 
          1. Bitcoin
          2. Ethereum
          3. Tether
          
        `

          
          

    );
    switch (moneda) {
        case '1':
                resultado = comprarCrypto(Bitcoin);
                alert('compraste ${resultado} btc');
                break;
        case '2':
                resultado = comprarCrypto(Ethereum);
                alert('compraste ${resultado} eth');
                break;
        case '3':
                resultado = comprarCrypto(Tether);
                alert('compraste ${resultado} tether');
                break;
        default:
                alert('error de ingreso');
                valor = 0;
                moneda = '';
                break;
    }
        nuevaCompra = confirm('Quieres realizar otra operacion?');
}while (nuevaCompra);

 


