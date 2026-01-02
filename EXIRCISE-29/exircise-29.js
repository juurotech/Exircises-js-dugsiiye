function fetchJSONData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("exircise-29.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("File JSON lama helin");
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    }, 2000);
  });
}

console.log("JSON fetch wuu bilaabmay...");
console.log("Code kale wuu socdaa inta xogta la sugayo");

fetchJSONData()
  .then((data) => console.log("DATA:", data))
  .catch((err) => console.error("ERROR:", err.message));
