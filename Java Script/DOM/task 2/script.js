let display = document.getElementById("display");

  function press(value) {
    display.value += value;
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  function clearDisplay() {
    display.value = "";
  }

  // keyboard support
  document.addEventListener("keydown", function(e) {
    const key = e.key;

    if ("0123456789+-*/.".includes(key)) display.value += key;

    if (key === "Enter") calculate();
    if (key === "Backspace") display.value = display.value.slice(0, -1);
    if (key === "Escape") clearDisplay();
  });