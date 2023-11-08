let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = null;

document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      if (operator) {
        secondNumber += value;
      } else {
        firstNumber += value;
      }
      updateDisplay();
    } else if (value === "C") {
      clearCalculator();
    } else if (value === "=") {
      if (firstNumber && operator && secondNumber) {
        operate();
        updateDisplay();
      }
    } else {
      if (firstNumber && !operator) {
        operator = value;
      }
    }
  });
});

function operate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("Cannot divide by zero!");
      clearCalculator();
      return;
    }
    result = num1 / num2;
  }

  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = secondNumber || firstNumber || "0";
}

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = null;
  updateDisplay();
}
