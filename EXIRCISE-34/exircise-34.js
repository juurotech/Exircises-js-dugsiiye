function addItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
}

function removeItem() {
  const list = document.getElementById("list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
