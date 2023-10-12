// Função que recebe 3 numeros como parâmetro e exibe o maior deles

function maior(n1, n2, n3) {

  // Comparar os três números e retornar o maior

  if (n1 > n2 && n1 > n3) {

    return n1;

  } else if (n2 > n1 && n2 > n3) {

    return n2;

  } else {

    return n3;

  }

}
 
// Função para encontrar a idade da pessoa mais nova
function ordenar(n1, n2, n3) {
  let numeros = [n1, n2, n3];
  numeros.sort(function(a, b) {
    return a - b;
  });
  return numeros;
}

var a = prompt("Digite o valor de a:");
var b = prompt("Digite o valor de b:");
var c = prompt("Digite o valor de c:");

a = Number(a);
b = Number(b);
c = Number(c);

alert("O maior entre " + a + ", " + b + " e " + c + " é " + maior(a, b, c) +
"\nOs números " + a + ", " + b + " e " + c + " em ordem crescente são " + ordenar(a, b, c));
