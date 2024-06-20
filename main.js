document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);
    var messageElement = document.getElementById('message');

    if (numeroB > numeroA) {
        messageElement.textContent = 'Parabéns! O número B é maior que o número A.';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Erro! O número B deve ser maior que o número A.';
        messageElement.style.color = 'red';
    }
});
