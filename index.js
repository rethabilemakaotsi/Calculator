

document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('userinput');
    const outputDiv = document.getElementById('output');
    const buttons = document.querySelectorAll('#btn-container button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        handleButtonClick(this.value);
      });
    });
  
    function handleButtonClick(value) {
      switch (value) {
        case 'clear':
          userInput.value = '';
          outputDiv.textContent = '';
          break;
        case 'del':
          userInput.value = userInput.value.slice(0, -1);
          break;
        case '=':
          try {
            const result = eval(userInput.value);
            userInput.value = result;
          } catch (error) {
            userInput.value = 'Error';
            outputDiv.textContent = 'Error';
          }
          break;
        default:
          userInput.value += value;
          break;
      }
    }
  
    
    function adjustFontSize() {
      const inputLength = userInput.value.length;
      const fontSize = inputLength > 10 ? `${200 / inputLength}%` : '2em';
      userInput.style.fontSize = fontSize;
    }
  
    userInput.addEventListener('input', adjustFontSize);
  });
  