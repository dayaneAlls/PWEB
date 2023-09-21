var nome, nota1,nota2,nota3, media;

nome = prompt("Qual é seu nome?");
nota1 = parseFloat(prompt("Agora digite a 1ª nota?"));
nota2 = parseFloat(prompt("Agora digite a 2ª nota?"));
nota3 = parseFloat(prompt("Agora digite a 3ª nota?"));

media = ((nota1 + nota2 + nota3)/3);

alert("Seu nome é " + nome + " e sua média é " + media.toFixed(2));
