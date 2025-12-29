function blockingFunction() {
  let start = Date.now();

  while (Date.now() - start < 2000) {}

  return "Blocking: 2 ilbiriqsi waan sugay";
}

console.log("Bilow");
let result = blockingFunction();
console.log(result);
console.log("Dhamaad");



function nonBlockingFunction() {
  setTimeout(() => {
    console.log("Non-Blocking: 2 ilbiriqsi kadib");
  }, 2000);
}

console.log("Bilow");
nonBlockingFunction();
console.log("Dhamaad");

