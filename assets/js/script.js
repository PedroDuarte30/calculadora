// Seleção de elementos
const displayInput = document.querySelector('.display-input');
const displayResult = document.querySelector('.display-result');
const buttons = document.querySelectorAll('button');

let input = "";

// Função para atualizar o display
function updateDisplay() {
  displayInput.value = input;
}

// Função principal de cálculo
function calculate(btnValue) {
  const lastChar = input.slice(-1);

  switch (btnValue) {
    case 'AC':
      input = "";
      displayResult.value = "";
      break;

    case '=':
      try {
        const expression = input
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/%/g, '/100');

        const result = eval(expression);
        displayResult.value = result;
      } catch {
        displayResult.value = "Erro";
      }
      break;

    case 'DEL':
      input = input.slice(0, -1);
      break;

    case '( )':
      // Alternar entre abrir e fechar parênteses
      if (
        input.split('(').length <= input.split(')').length
      ) {
        input += '(';
      } else {
        input += ')';
      }
      break;

    default:
      input += btnValue;
  }

  updateDisplay();
}

// Adiciona eventos a todos os botões
buttons.forEach(button => {
  button.addEventListener('click', e => {
    const btnValue = e.target.textContent.trim();
    calculate(btnValue);
  });
});
