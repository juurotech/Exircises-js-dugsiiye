const colorInput = document.getElementById("colorInput");
const colorPreview = document.getElementById("colorPreview");
const historyContainer = document.getElementById("historyContainer");
const clearHistoryBtn = document.getElementById("clearHistory");
const hexCodeDisplay = document.getElementById("hexCodeDisplay");

let colorHistory = [];

function updatePreview(color) {
  
  colorPreview.style.backgroundColor = color;

  hexCodeDisplay.textContent = "Hex: " + color;
  hexCodeDisplay.style.color = color;
}

function addToHistory(color) {
  if (!colorHistory.includes(color)) {
    colorHistory.push(color);

    const colorBox = document.createElement("div");
    colorBox.className = "history-color";
    colorBox.style.backgroundColor = color;
    colorBox.title = color;

    colorBox.onclick = function () {
      colorInput.value = color;
      updatePreview(color);
    };

    historyContainer.appendChild(colorBox);
  }
}

function clearHistory() {
  colorHistory = [];
  historyContainer.innerHTML = "";
  hexCodeDisplay.textContent = "";
}

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  updatePreview(selectedColor);
  addToHistory(selectedColor);
});

clearHistoryBtn.addEventListener("click", clearHistory);

updatePreview(colorInput.value);
addToHistory(colorInput.value);
