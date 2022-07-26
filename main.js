let valor = document.querySelector("#conversion");
let input = document.querySelector("#converter");
let de = document.querySelector("#monedasde");
let para = document.querySelector("#monedaspara");


let boton = document.getElementById("boton")
boton.addEventListener("click", convertir)


function convertir() {
  //Dolar para Euro
  if (de.value == "USD" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = (parseFloat(input.value) * 0.84).toFixed(2);
    }
  }

  //Euro para dolar
  else if (de.value == "EUR" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = (parseFloat(input.value) * 1.19).toFixed(2);
    }
  }
}
console.log(convertir)
