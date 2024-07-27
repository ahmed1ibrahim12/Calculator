document.addEventListener('DOMContentLoaded', () => {
    const inputDisplay = document.getElementById('input');
    const outputDisplay = document.getElementById('output');
    let currentInput = '';
    let operatorPressed = false;

    // Function to update the input display
    const updateInputDisplay = () => {
        inputDisplay.textContent = currentInput;
    };

    // Function to calculate and update the output display
    const calculateResult = () => {
        try {
            outputDisplay.textContent = eval(currentInput.replace('÷', '/').replace('x', '*'));
        } catch (error) {
            outputDisplay.textContent = 'Error';
        }
    };

    // Handle button click events
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', () => {
            const keyType = key.dataset.key;

            if (keyType === 'clear') {
                currentInput = '';
                outputDisplay.textContent = '';
            } else if (keyType === 'backspace') {
                currentInput = currentInput.slice(0, -1);
            } else if (keyType === '=') {
                calculateResult();
            } else if (keyType === 'brackets') {
                currentInput += currentInput.includes('(') && !currentInput.includes(')') ? ')' : '(';
            } else {
                currentInput += keyType;
            }

            updateInputDisplay();
        });
    });
});
