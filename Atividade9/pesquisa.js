var somaIdades = 0,
    idadeMaisVelha = -Infinity;
    idadeMaisNova = Infinity;
    pessoasPessimo = 0;
    pessoasOtimo = 0;
    pessoasBom = 0;
    mulheres = 0;
    homens = 0;
    totalPessoas = 0;

while (true) {
  const idade = parseInt(prompt("Informe a sua idade:"));

  // Verifica se o usuário cancelou a entrada ou forneceu um valor inválido
  if (isNaN(idade) || idade <= 0) {
    break;
  }
  const sexo = prompt("Informe o seu sexo (F/M):").toUpperCase();
  const opiniao = parseInt(prompt("Informe a sua opinião, onde: \n1-Péssimo\n2-Regular\n3-Bom\n4-Ótimo"));

  // Verifica se a opinião está no intervalo válido (1 a 4)
  if (opiniao < 1 || opiniao > 4) {
    alert("Opinião inválida. Por favor, informe uma opinião de 1 a 4.");
    continue;
  }

  totalPessoas++;
  somaIdades += idade;

  if (idade > idadeMaisVelha) {
    idadeMaisVelha = idade;
  }
  if (idade < idadeMaisNova) {
    idadeMaisNova = idade;
  }
  if (opiniao === 1) {
    pessoasPessimo++;
  }
  if (opiniao === 4) {
    pessoasOtimo++;
  }
  if (opiniao === 3) {
    pessoasBom++;
  }
  if (sexo === 'F') {
    mulheres++;
  } else if (sexo === 'M') {
    homens++;
  }
}

const mediaIdade = totalPessoas > 0 ? somaIdades / totalPessoas : 0;
const porcentagemOtimo = (pessoasOtimo / totalPessoas) * 100;
const porcentagemBom = (pessoasBom / totalPessoas) * 100;

alert("Média de idade das pessoas: " + mediaIdade +
"\nIdade da pessoa mais velha: " + idadeMaisVelha +
"\nIdade da pessoa mais nova: " + idadeMaisNova+
"\nPessoas que responderam péssimo: " + pessoasPessimo +
"\nPorcentagem de pessoas que responderam Ótimo: " + porcentagemOtimo +"%" +
"\nPorcentagem de pessoas que responderam Bom: " + porcentagemBom +"%" +
"\nNúmero de mulheres: " + mulheres +
"\nNúmero de homens: " + homens);
