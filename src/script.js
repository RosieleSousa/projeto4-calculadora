let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", function () {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "light") {
        body.setAttribute("data-theme", "dark");
        themeToggleButton.textContent = "☀️ Alternar Tema";
    } else {
        body.setAttribute("data-theme", "light");
        themeToggleButton.textContent = "🌙 Alternar Tema";
    }
});
