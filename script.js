function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let expression = document.getElementById("display").value;
    if (expression.includes('%')) {
      expression = expression.replace(/(\d+)%/g, "($1/100)");
    }
    document.getElementById("display").value = eval(expression);
  } catch {
    document.getElementById("display").value = "Error";
  }
}