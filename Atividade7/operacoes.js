var num1, num2, soma, sub, prod, div, resto;

num1 = parseFloat(prompt("Digite o numero 1?"));
num2 = parseFloat(prompt("Digite o numero 2?"));

soma = num1 + num2;
sub = num1 - num2;
prod = num1 * num2;
div = num1/num2;
resto = num1%num2;


alert("A soma é " + soma.toFixed(2));
alert("A subtração é " + sub.toFixed(2));
alert("O produto é " + prod.toFixed(2));
alert("A divisão é " + div.toFixed(2));
alert("O resto é " + resto.toFixed(2));
