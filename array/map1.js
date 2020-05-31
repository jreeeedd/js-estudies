// a única regra no map é q o tamanho do array resultante será o mesmo do array em que ele trabalha

const num = [1, 2, 3, 4, 5];

let resultado = num.map(function (e) {
  return e * 2;
});

console.log(resultado);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = num.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);