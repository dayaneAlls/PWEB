function userChoice(user) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computer = choices[randomIndex];

    const result = determineWinner(user, computer);

    displayResult(user, computer, result);
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'Empate';
    } else if ((user === 'pedra' && computer === 'tesoura') ||
               (user === 'tesoura' && computer === 'papel') ||
               (user === 'papel' && computer === 'pedra')) {
        return 'Você venceu!';
    } else {
        return 'Computador venceu!';
    }
}

function displayResult(user, computer, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Você escolheu ${user}. O computador escolheu ${computer}. Resultado: ${result}`;
}
