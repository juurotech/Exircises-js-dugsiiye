let img = document.querySelector("#img");

img.src = prompt("Image URL:");
img.style.border = "3px solid " + prompt("Border color:");
img.style.width = prompt("Width (px):") + "px";
img.style.height = prompt("Height (px):") + "px";
img.style.borderRadius = prompt("Border radius (px):") + "px";