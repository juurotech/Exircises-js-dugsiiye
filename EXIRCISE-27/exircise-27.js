function getSuccessMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Howsha si guul leh ayay u dhammaatay");
    }, 2000);
  });
}

getSuccessMessage()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
