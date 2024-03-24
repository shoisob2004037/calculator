document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector('.box');
    const display = document.querySelector('.display');

    box.addEventListener('click', function (event) {
        if (event.target.matches('input')) {
            const buttonValue = event.target.value;

            if (buttonValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonValue === 'AC') {
                display.value = '';
            } else if (buttonValue === 'Del') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonValue;
            }
        }
    });
});

