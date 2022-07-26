const Bitcoin = { nombre: "Bitcoin", precio: 20506.59 } 
const Ethereum = { nombre: "Ethereum", precio: 1106.22 }
const Tether = { nombre: "Tether", precio: 0.998987 }
let nuevaCompra = 'false';

let compra = '';
let moneda = '';

function comprarCrypto (valormoneda) {
    let mostrarResultado = compra / valormoneda
    return mostrarResultado;

}

do {
    compra = Number(Swal.fire('cuanto quiere cambiar'));
    moneda = Swal.fire(
        ` Que moneda quiere comprar? 
          1. Bitcoin
          2. Ethereum
          3. Tether
          
        `

          
          

    );
    switch (moneda) {
        case '1':
                resultado = comprarCrypto(Bitcoin.precio);

                alert(`compraste ${resultado} btc`);
                break;
        case '2':
                resultado = comprarCrypto(Ethereum.precio);
                alert(`compraste ${resultado} eth`);
                break;
        case '3':
                resultado = comprarCrypto(Tether.precio);
                alert(`compraste ${resultado} tether`);
                break;
        default:
                alert(`error de ingreso`);
                valor = 0;
                moneda = '';
                break;
                50;
    }
        nuevaCompra = confirm('Quieres realizar otra operacion?');
}while (nuevaCompra);

 


