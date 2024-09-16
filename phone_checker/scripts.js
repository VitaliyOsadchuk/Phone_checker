const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const checkValidNumber = (input) => {
    results.innerHTML = '';
    if (input === '') {
        results.textContent = '';
        const error = document.createElement('p');
        const ErrText = document.createTextNode('Please provide a phone number');
        error.style.color = 'red';
        error.appendChild(ErrText);
        results.appendChild(error);
      return;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
      `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );
  
    const pTag = document.createElement('p');
    pTag.className = 'result';
    phoneRegex.test(input)
      ? (pTag.style.textDecoration = 'underline 3px solid green')
      : (pTag.style.textDecoration = 'underline 3px solid red');
    pTag.appendChild(
      document.createTextNode(
        `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
      )
    );
    results.appendChild(pTag);
  };

  checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
  });
  

  clearBtn.addEventListener('click', () => {
    results.textContent = '';
    const reset = document.createElement('p');
    const resetText = document.createTextNode('Your answer will appear here.');
    reset.appendChild(resetText);
    results.appendChild(reset);
  });

  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkValidNumber(userInput.value);
      userInput.value = '';
    }
  });
  
  
